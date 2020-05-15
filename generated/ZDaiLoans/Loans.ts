// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  EthereumCall,
  EthereumEvent,
  SmartContract,
  EthereumValue,
  JSONValue,
  TypedMap,
  Entity,
  EthereumTuple,
  Bytes,
  Address,
  BigInt,
  CallResult
} from "@graphprotocol/graph-ts";

export class CollateralDeposited extends EthereumEvent {
  get params(): CollateralDeposited__Params {
    return new CollateralDeposited__Params(this);
  }
}

export class CollateralDeposited__Params {
  _event: CollateralDeposited;

  constructor(event: CollateralDeposited) {
    this._event = event;
  }

  get loanID(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get borrower(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get depositAmount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class CollateralWithdrawn extends EthereumEvent {
  get params(): CollateralWithdrawn__Params {
    return new CollateralWithdrawn__Params(this);
  }
}

export class CollateralWithdrawn__Params {
  _event: CollateralWithdrawn;

  constructor(event: CollateralWithdrawn) {
    this._event = event;
  }

  get loanID(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get borrower(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get withdrawalAmount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class LoanRepaid extends EthereumEvent {
  get params(): LoanRepaid__Params {
    return new LoanRepaid__Params(this);
  }
}

export class LoanRepaid__Params {
  _event: LoanRepaid;

  constructor(event: LoanRepaid) {
    this._event = event;
  }

  get borrower(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get payer(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get loanID(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get totalOwed(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get paid(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class LoanTakenOut extends EthereumEvent {
  get params(): LoanTakenOut__Params {
    return new LoanTakenOut__Params(this);
  }
}

export class LoanTakenOut__Params {
  _event: LoanTakenOut;

  constructor(event: LoanTakenOut) {
    this._event = event;
  }

  get loanID(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get borrower(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amountBorrowed(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class LoanTermsSet extends EthereumEvent {
  get params(): LoanTermsSet__Params {
    return new LoanTermsSet__Params(this);
  }
}

export class LoanTermsSet__Params {
  _event: LoanTermsSet;

  constructor(event: LoanTermsSet) {
    this._event = event;
  }

  get loanID(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get borrower(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get recipient(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get interestRate(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get collateralRatio(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get maxLoanAmount(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get duration(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get termsExpiry(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }
}

export class Loans__loansResultValue0Struct extends EthereumTuple {
  get id(): BigInt {
    return this[0].toBigInt();
  }

  get loanTerms(): Loans__loansResultValue0LoanTermsStruct {
    return this[1].toTuple() as Loans__loansResultValue0LoanTermsStruct;
  }

  get termsExpiry(): BigInt {
    return this[2].toBigInt();
  }

  get loanStartTime(): BigInt {
    return this[3].toBigInt();
  }

  get collateral(): BigInt {
    return this[4].toBigInt();
  }

  get lastCollateralIn(): BigInt {
    return this[5].toBigInt();
  }

  get principalOwed(): BigInt {
    return this[6].toBigInt();
  }

  get interestOwed(): BigInt {
    return this[7].toBigInt();
  }

  get status(): i32 {
    return this[8].toI32();
  }

  get liquidated(): boolean {
    return this[9].toBoolean();
  }
}

export class Loans__loansResultValue0LoanTermsStruct extends EthereumTuple {
  get borrower(): Address {
    return this[0].toAddress();
  }

  get recipient(): Address {
    return this[1].toAddress();
  }

  get interestRate(): BigInt {
    return this[2].toBigInt();
  }

  get collateralRatio(): BigInt {
    return this[3].toBigInt();
  }

  get maxLoanAmount(): BigInt {
    return this[4].toBigInt();
  }

  get duration(): BigInt {
    return this[5].toBigInt();
  }
}

export class Loans extends SmartContract {
  static bind(address: Address): Loans {
    return new Loans("Loans", address);
  }

  getBorrowerLoans(borrower: Address): Array<BigInt> {
    let result = super.call("getBorrowerLoans", [
      EthereumValue.fromAddress(borrower)
    ]);

    return result[0].toBigIntArray();
  }

  try_getBorrowerLoans(borrower: Address): CallResult<Array<BigInt>> {
    let result = super.tryCall("getBorrowerLoans", [
      EthereumValue.fromAddress(borrower)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigIntArray());
  }

  loans(loanID: BigInt): Loans__loansResultValue0Struct {
    let result = super.call("loans", [
      EthereumValue.fromUnsignedBigInt(loanID)
    ]);

    return result[0].toTuple() as Loans__loansResultValue0Struct;
  }

  try_loans(loanID: BigInt): CallResult<Loans__loansResultValue0Struct> {
    let result = super.tryCall("loans", [
      EthereumValue.fromUnsignedBigInt(loanID)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(
      value[0].toTuple() as Loans__loansResultValue0Struct
    );
  }
}

export class DepositCollateralCall extends EthereumCall {
  get inputs(): DepositCollateralCall__Inputs {
    return new DepositCollateralCall__Inputs(this);
  }

  get outputs(): DepositCollateralCall__Outputs {
    return new DepositCollateralCall__Outputs(this);
  }
}

export class DepositCollateralCall__Inputs {
  _call: DepositCollateralCall;

  constructor(call: DepositCollateralCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value1(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class DepositCollateralCall__Outputs {
  _call: DepositCollateralCall;

  constructor(call: DepositCollateralCall) {
    this._call = call;
  }
}

export class WithdrawCollateralCall extends EthereumCall {
  get inputs(): WithdrawCollateralCall__Inputs {
    return new WithdrawCollateralCall__Inputs(this);
  }

  get outputs(): WithdrawCollateralCall__Outputs {
    return new WithdrawCollateralCall__Outputs(this);
  }
}

export class WithdrawCollateralCall__Inputs {
  _call: WithdrawCollateralCall;

  constructor(call: WithdrawCollateralCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get loanID(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class WithdrawCollateralCall__Outputs {
  _call: WithdrawCollateralCall;

  constructor(call: WithdrawCollateralCall) {
    this._call = call;
  }
}

export class SetLoanTermsCall extends EthereumCall {
  get inputs(): SetLoanTermsCall__Inputs {
    return new SetLoanTermsCall__Inputs(this);
  }

  get outputs(): SetLoanTermsCall__Outputs {
    return new SetLoanTermsCall__Outputs(this);
  }
}

export class SetLoanTermsCall__Inputs {
  _call: SetLoanTermsCall;

  constructor(call: SetLoanTermsCall) {
    this._call = call;
  }

  get request(): SetLoanTermsCallRequestStruct {
    return this._call.inputValues[0].value.toTuple() as SetLoanTermsCallRequestStruct;
  }

  get responses(): Array<EthereumTuple> {
    return this._call.inputValues[1].value.toTupleArray<undefined>();
  }
}

export class SetLoanTermsCall__Outputs {
  _call: SetLoanTermsCall;

  constructor(call: SetLoanTermsCall) {
    this._call = call;
  }
}

export class SetLoanTermsCallRequestStruct extends EthereumTuple {
  get borrower(): Address {
    return this[0].toAddress();
  }

  get recipient(): Address {
    return this[1].toAddress();
  }

  get requestNonce(): BigInt {
    return this[2].toBigInt();
  }

  get amount(): BigInt {
    return this[3].toBigInt();
  }

  get duration(): BigInt {
    return this[4].toBigInt();
  }

  get requestTime(): BigInt {
    return this[5].toBigInt();
  }
}

export class TakeOutLoanCall extends EthereumCall {
  get inputs(): TakeOutLoanCall__Inputs {
    return new TakeOutLoanCall__Inputs(this);
  }

  get outputs(): TakeOutLoanCall__Outputs {
    return new TakeOutLoanCall__Outputs(this);
  }
}

export class TakeOutLoanCall__Inputs {
  _call: TakeOutLoanCall;

  constructor(call: TakeOutLoanCall) {
    this._call = call;
  }

  get loanID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get amountBorrow(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class TakeOutLoanCall__Outputs {
  _call: TakeOutLoanCall;

  constructor(call: TakeOutLoanCall) {
    this._call = call;
  }
}

export class RepayCall extends EthereumCall {
  get inputs(): RepayCall__Inputs {
    return new RepayCall__Inputs(this);
  }

  get outputs(): RepayCall__Outputs {
    return new RepayCall__Outputs(this);
  }
}

export class RepayCall__Inputs {
  _call: RepayCall;

  constructor(call: RepayCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get loanID(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class RepayCall__Outputs {
  _call: RepayCall;

  constructor(call: RepayCall) {
    this._call = call;
  }
}

export class LiquidateLoanCall extends EthereumCall {
  get inputs(): LiquidateLoanCall__Inputs {
    return new LiquidateLoanCall__Inputs(this);
  }

  get outputs(): LiquidateLoanCall__Outputs {
    return new LiquidateLoanCall__Outputs(this);
  }
}

export class LiquidateLoanCall__Inputs {
  _call: LiquidateLoanCall;

  constructor(call: LiquidateLoanCall) {
    this._call = call;
  }

  get loanID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class LiquidateLoanCall__Outputs {
  _call: LiquidateLoanCall;

  constructor(call: LiquidateLoanCall) {
    this._call = call;
  }
}
