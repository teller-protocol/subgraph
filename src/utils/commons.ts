import { log, BigInt, ethereum, Bytes } from "@graphprotocol/graph-ts";
import {
  Borrower,
  EthTransaction,
  TTokenHolderBalancesChange,
  TTokenHolderBalancesStatus,
} from "../../generated/schema";
import { Address } from "@graphprotocol/graph-ts";
import {
  EMPTY_ADDRESS_STRING,
} from "./consts";

export function getTimestampInMillis(event: ethereum.Event): BigInt {
  return event.block.timestamp.times(BigInt.fromI32(1000));
}

export function getTimeInMillis(time: BigInt): BigInt {
  return time.times(BigInt.fromI32(1000));
}

export function createEthTransaction(
  event: ethereum.Event,
  action: string
): EthTransaction {
  let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString();
  log.info("Creating EthTransaction with id {}", [id]);
  let entity = new EthTransaction(id);
  entity.event = action;
  entity.from = event.transaction.from;
  entity.gasPrice = event.transaction.gasPrice;
  entity.gasSent = event.transaction.gasUsed;
  entity.hash = event.transaction.hash;
  entity.index = event.transaction.index;
  entity.to = event.transaction.to as Bytes;
  entity.value = event.transaction.value;
  entity.contract = event.address;
  entity.timestamp = getTimestampInMillis(event);
  entity.gasLimit = event.block.gasLimit;
  entity.blockNumber = event.block.number;
  entity.save();
  return entity;
}

export function getOrCreateBorrower(address: Address): Borrower {
  log.info("Trying to load borrower by address {}", [address.toHexString()]);
  let borrower = Borrower.load(address.toHexString());
  if (borrower == null) {
    log.info("Creating borrower with address {}", [address.toHexString()]);
    borrower = new Borrower(address.toHexString());
    borrower.address = address;
    borrower.loans = [];
    borrower.save();
  }
  return borrower as Borrower;
}

export function buildLoanIdBigInt(token: string, collateralToken: string, loanID: BigInt): string {
  return buildLoanId(token, collateralToken, loanID.toString());
}

export function buildLoanId(token: string, collateralToken: string, loanID: string): string {
  return token + "-" + collateralToken + "-" + loanID;
}

export function buildId(event: ethereum.Event): string {
  return event.transaction.hash.toHex() + "-" + event.logIndex.toString();
}

export function buildBlockId(block: ethereum.Block): string {
  return block.hash.toHex() + "-" + block.number.toString() + "-" + block.timestamp.toString();
}

export function buildSignerId(token: string, contract: string, account: Address): string {
  return token + "-" + contract + "-" + account.toHexString();
}

export function createTTokenHolderBalancesChange(
  id: string,
  amount: BigInt,
  platformToken: string,
  from: Address,
  to: Address,
  action: string,
  ethTransaction: EthTransaction
): void {
  let entity = new TTokenHolderBalancesChange(id);
  entity.transaction = ethTransaction.id;
  entity.amount = amount;
  entity.platformToken = platformToken;
  entity.from = from;
  entity.to = to;
  entity.action = action;
  entity.blockNumber = ethTransaction.blockNumber;
  entity.timestamp = ethTransaction.timestamp;
  entity.save();
}

export function getOrCreateTTokenHolderBalancesStatus(platformToken: string, holder: Address): TTokenHolderBalancesStatus {
  let id = platformToken + "_" + holder.toHexString()
  log.info("Loading tToken {} balance status for holder {}", [platformToken, holder.toHexString()])
  let entity = TTokenHolderBalancesStatus.load(id)
  if (entity == null) {
    log.info("Creating new tToken {} balances status for holder {}", [platformToken, holder.toHexString()])
    entity = new TTokenHolderBalancesStatus(id)
    entity.balance = BigInt.fromI32(0)
    entity.holder = holder
    entity.platformToken = platformToken
    entity.blockNumber = BigInt.fromI32(0)
    entity.updatedAt = BigInt.fromI32(0)
  }
  return entity as TTokenHolderBalancesStatus;
}

export function updateTTokenHolderBalancesFor(
  platformToken: string,
  from: Address,
  value: BigInt,
  to: Address,
  event: ethereum.Event
): void {
  log.info("Updating tToken balance for holders {} / {} ", [
    from.toHexString(),
    to.toHexString(),
  ]);
  if (from.toHexString() != EMPTY_ADDRESS_STRING) {
    let fromEntity = getOrCreateTTokenHolderBalancesStatus(platformToken, from);
    log.info(
      "Updating tToken balance for holder {} (from). Current balance {} {}",
      [from.toHexString(), fromEntity.balance.toString(), platformToken]
    );
    fromEntity.balance = fromEntity.balance.minus(value);
    fromEntity.blockNumber = event.block.number;
    fromEntity.updatedAt = getTimestampInMillis(event);
    fromEntity.save();
  }
  if (to.toHexString() != EMPTY_ADDRESS_STRING) {
    let toEntity = getOrCreateTTokenHolderBalancesStatus(platformToken, to);
    log.info(
      "Updating tToken balance for holder {} (to). Current balance {} {}",
      [to.toHexString(), toEntity.balance.toString(), platformToken]
    );
    toEntity.balance = toEntity.balance.plus(value);
    toEntity.blockNumber = event.block.number;
    toEntity.updatedAt = getTimestampInMillis(event);
    toEntity.save();
  }
}
