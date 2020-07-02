import {
  InterestAccepted as InterestAcceptedEvent,
  InterestSubmitted as InterestSubmittedEvent,
  SignerAdded as SignerAddedEvent,
  SignerRemoved as SignerRemovedEvent,
} from "../../../generated/DAI_ETH_InterestConsensus/DAIInterestConsensus";
import {
  TOKEN_DAI,
  CONTRACT_INTEREST_CONSENSUS,
  COLLATERAL_TOKEN_ETH,
} from "../../utils/consts";
import {
  internalHandleSigner,
  internalHandleInterestSubmitted,
  internalHandleInterestAccepted,
} from "../../utils/consensus-commons";

export function handleInterestSubmitted(event: InterestSubmittedEvent): void {
  internalHandleInterestSubmitted(
    TOKEN_DAI,
    COLLATERAL_TOKEN_ETH,
    event.params.signer,
    event.params.lender,
    event.params.interest,
    event.params.endTime,
    event
  );
}

export function handleInterestAccepted(event: InterestAcceptedEvent): void {
  internalHandleInterestAccepted(
    TOKEN_DAI,
    COLLATERAL_TOKEN_ETH,
    event.params.lender,
    event.params.interest,
    event.params.endTime,
    event
  );
}

export function handleSignerAdded(event: SignerAddedEvent): void {
  internalHandleSigner(
    TOKEN_DAI,
    COLLATERAL_TOKEN_ETH,
    CONTRACT_INTEREST_CONSENSUS,
    false,
    event.params.account,
    event
  );
}

export function handleSignerRemoved(event: SignerRemovedEvent): void {
  internalHandleSigner(
    TOKEN_DAI,
    COLLATERAL_TOKEN_ETH,
    CONTRACT_INTEREST_CONSENSUS,
    true,
    event.params.account,
    event
  );
}
