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

export class InterestAccepted extends EthereumEvent {
  get params(): InterestAccepted__Params {
    return new InterestAccepted__Params(this);
  }
}

export class InterestAccepted__Params {
  _event: InterestAccepted;

  constructor(event: InterestAccepted) {
    this._event = event;
  }

  get lender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get endTime(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get interest(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class InterestSubmitted extends EthereumEvent {
  get params(): InterestSubmitted__Params {
    return new InterestSubmitted__Params(this);
  }
}

export class InterestSubmitted__Params {
  _event: InterestSubmitted;

  constructor(event: InterestSubmitted) {
    this._event = event;
  }

  get signer(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get lender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get endTime(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get interest(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class SignerAdded extends EthereumEvent {
  get params(): SignerAdded__Params {
    return new SignerAdded__Params(this);
  }
}

export class SignerAdded__Params {
  _event: SignerAdded;

  constructor(event: SignerAdded) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class SignerRemoved extends EthereumEvent {
  get params(): SignerRemoved__Params {
    return new SignerRemoved__Params(this);
  }
}

export class SignerRemoved__Params {
  _event: SignerRemoved;

  constructor(event: SignerRemoved) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class DAIInterestConsensus__interestSubmissionsResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt, value3: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromUnsignedBigInt(this.value0));
    map.set("value1", EthereumValue.fromUnsignedBigInt(this.value1));
    map.set("value2", EthereumValue.fromUnsignedBigInt(this.value2));
    map.set("value3", EthereumValue.fromUnsignedBigInt(this.value3));
    return map;
  }
}

export class DAIInterestConsensus__processRequestInputRequestStruct extends EthereumTuple {
  get lender(): Address {
    return this[0].toAddress();
  }

  get startTime(): BigInt {
    return this[1].toBigInt();
  }

  get endTime(): BigInt {
    return this[2].toBigInt();
  }

  get requestTime(): BigInt {
    return this[3].toBigInt();
  }
}

export class DAIInterestConsensus__processRequestInputResponsesStruct extends EthereumTuple {
  get signer(): Address {
    return this[0].toAddress();
  }

  get responseTime(): BigInt {
    return this[1].toBigInt();
  }

  get interest(): BigInt {
    return this[2].toBigInt();
  }

  get signature(): DAIInterestConsensus__processRequestInputResponsesSignatureStruct {
    return this[3].toTuple() as DAIInterestConsensus__processRequestInputResponsesSignatureStruct;
  }
}

export class DAIInterestConsensus__processRequestInputResponsesSignatureStruct extends EthereumTuple {
  get signerNonce(): BigInt {
    return this[0].toBigInt();
  }

  get v(): i32 {
    return this[1].toI32();
  }

  get r(): Bytes {
    return this[2].toBytes();
  }

  get s(): Bytes {
    return this[3].toBytes();
  }
}

export class DAIInterestConsensus extends SmartContract {
  static bind(address: Address): DAIInterestConsensus {
    return new DAIInterestConsensus("DAIInterestConsensus", address);
  }

  caller(): Address {
    let result = super.call("caller", []);

    return result[0].toAddress();
  }

  try_caller(): CallResult<Address> {
    let result = super.tryCall("caller", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  hasSubmitted(param0: Address, param1: Address, param2: BigInt): boolean {
    let result = super.call("hasSubmitted", [
      EthereumValue.fromAddress(param0),
      EthereumValue.fromAddress(param1),
      EthereumValue.fromUnsignedBigInt(param2)
    ]);

    return result[0].toBoolean();
  }

  try_hasSubmitted(
    param0: Address,
    param1: Address,
    param2: BigInt
  ): CallResult<boolean> {
    let result = super.tryCall("hasSubmitted", [
      EthereumValue.fromAddress(param0),
      EthereumValue.fromAddress(param1),
      EthereumValue.fromUnsignedBigInt(param2)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  initialized(): boolean {
    let result = super.call("initialized", []);

    return result[0].toBoolean();
  }

  try_initialized(): CallResult<boolean> {
    let result = super.tryCall("initialized", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  interestSubmissions(
    param0: Address,
    param1: BigInt
  ): DAIInterestConsensus__interestSubmissionsResult {
    let result = super.call("interestSubmissions", [
      EthereumValue.fromAddress(param0),
      EthereumValue.fromUnsignedBigInt(param1)
    ]);

    return new DAIInterestConsensus__interestSubmissionsResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt()
    );
  }

  try_interestSubmissions(
    param0: Address,
    param1: BigInt
  ): CallResult<DAIInterestConsensus__interestSubmissionsResult> {
    let result = super.tryCall("interestSubmissions", [
      EthereumValue.fromAddress(param0),
      EthereumValue.fromUnsignedBigInt(param1)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(
      new DAIInterestConsensus__interestSubmissionsResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt()
      )
    );
  }

  isSigner(account: Address): boolean {
    let result = super.call("isSigner", [EthereumValue.fromAddress(account)]);

    return result[0].toBoolean();
  }

  try_isSigner(account: Address): CallResult<boolean> {
    let result = super.tryCall("isSigner", [
      EthereumValue.fromAddress(account)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  settings(): Address {
    let result = super.call("settings", []);

    return result[0].toAddress();
  }

  try_settings(): CallResult<Address> {
    let result = super.tryCall("settings", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  signerNonceTaken(param0: Address, param1: BigInt): boolean {
    let result = super.call("signerNonceTaken", [
      EthereumValue.fromAddress(param0),
      EthereumValue.fromUnsignedBigInt(param1)
    ]);

    return result[0].toBoolean();
  }

  try_signerNonceTaken(param0: Address, param1: BigInt): CallResult<boolean> {
    let result = super.tryCall("signerNonceTaken", [
      EthereumValue.fromAddress(param0),
      EthereumValue.fromUnsignedBigInt(param1)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  processRequest(
    request: DAIInterestConsensus__processRequestInputRequestStruct,
    responses: Array<DAIInterestConsensus__processRequestInputResponsesStruct>
  ): BigInt {
    let result = super.call("processRequest", [
      EthereumValue.fromTuple(request),
      EthereumValue.fromTupleArray(responses)
    ]);

    return result[0].toBigInt();
  }

  try_processRequest(
    request: DAIInterestConsensus__processRequestInputRequestStruct,
    responses: Array<DAIInterestConsensus__processRequestInputResponsesStruct>
  ): CallResult<BigInt> {
    let result = super.tryCall("processRequest", [
      EthereumValue.fromTuple(request),
      EthereumValue.fromTupleArray(responses)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }
}

export class AddSignerCall extends EthereumCall {
  get inputs(): AddSignerCall__Inputs {
    return new AddSignerCall__Inputs(this);
  }

  get outputs(): AddSignerCall__Outputs {
    return new AddSignerCall__Outputs(this);
  }
}

export class AddSignerCall__Inputs {
  _call: AddSignerCall;

  constructor(call: AddSignerCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddSignerCall__Outputs {
  _call: AddSignerCall;

  constructor(call: AddSignerCall) {
    this._call = call;
  }
}

export class InitializeCall extends EthereumCall {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get callerAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get settingAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class RenounceSignerCall extends EthereumCall {
  get inputs(): RenounceSignerCall__Inputs {
    return new RenounceSignerCall__Inputs(this);
  }

  get outputs(): RenounceSignerCall__Outputs {
    return new RenounceSignerCall__Outputs(this);
  }
}

export class RenounceSignerCall__Inputs {
  _call: RenounceSignerCall;

  constructor(call: RenounceSignerCall) {
    this._call = call;
  }
}

export class RenounceSignerCall__Outputs {
  _call: RenounceSignerCall;

  constructor(call: RenounceSignerCall) {
    this._call = call;
  }
}

export class ProcessRequestCall extends EthereumCall {
  get inputs(): ProcessRequestCall__Inputs {
    return new ProcessRequestCall__Inputs(this);
  }

  get outputs(): ProcessRequestCall__Outputs {
    return new ProcessRequestCall__Outputs(this);
  }
}

export class ProcessRequestCall__Inputs {
  _call: ProcessRequestCall;

  constructor(call: ProcessRequestCall) {
    this._call = call;
  }

  get request(): ProcessRequestCallRequestStruct {
    return this._call.inputValues[0].value.toTuple() as ProcessRequestCallRequestStruct;
  }

  get responses(): Array<EthereumTuple> {
    return this._call.inputValues[1].value.toTupleArray<undefined>();
  }
}

export class ProcessRequestCall__Outputs {
  _call: ProcessRequestCall;

  constructor(call: ProcessRequestCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class ProcessRequestCallRequestStruct extends EthereumTuple {
  get lender(): Address {
    return this[0].toAddress();
  }

  get startTime(): BigInt {
    return this[1].toBigInt();
  }

  get endTime(): BigInt {
    return this[2].toBigInt();
  }

  get requestTime(): BigInt {
    return this[3].toBigInt();
  }
}