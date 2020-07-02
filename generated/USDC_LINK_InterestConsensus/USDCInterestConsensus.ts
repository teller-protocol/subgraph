// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class InterestAccepted extends ethereum.Event {
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

export class InterestSubmitted extends ethereum.Event {
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

export class SignerAdded extends ethereum.Event {
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

export class SignerRemoved extends ethereum.Event {
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

export class USDCInterestConsensus__interestSubmissionsResult {
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

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    return map;
  }
}

export class USDCInterestConsensus__processRequestInputRequestStruct extends ethereum.Tuple {
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

export class USDCInterestConsensus__processRequestInputResponsesStruct extends ethereum.Tuple {
  get signer(): Address {
    return this[0].toAddress();
  }

  get responseTime(): BigInt {
    return this[1].toBigInt();
  }

  get interest(): BigInt {
    return this[2].toBigInt();
  }

  get signature(): USDCInterestConsensus__processRequestInputResponsesSignatureStruct {
    return this[3].toTuple() as USDCInterestConsensus__processRequestInputResponsesSignatureStruct;
  }
}

export class USDCInterestConsensus__processRequestInputResponsesSignatureStruct extends ethereum.Tuple {
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

export class USDCInterestConsensus extends ethereum.SmartContract {
  static bind(address: Address): USDCInterestConsensus {
    return new USDCInterestConsensus("USDCInterestConsensus", address);
  }

  caller(): Address {
    let result = super.call("caller", "caller():(address)", []);

    return result[0].toAddress();
  }

  try_caller(): ethereum.CallResult<Address> {
    let result = super.tryCall("caller", "caller():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  hasSubmitted(param0: Address, param1: Address, param2: BigInt): boolean {
    let result = super.call(
      "hasSubmitted",
      "hasSubmitted(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2)
      ]
    );

    return result[0].toBoolean();
  }

  try_hasSubmitted(
    param0: Address,
    param1: Address,
    param2: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "hasSubmitted",
      "hasSubmitted(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  initialized(): boolean {
    let result = super.call("initialized", "initialized():(bool)", []);

    return result[0].toBoolean();
  }

  try_initialized(): ethereum.CallResult<boolean> {
    let result = super.tryCall("initialized", "initialized():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  interestSubmissions(
    param0: Address,
    param1: BigInt
  ): USDCInterestConsensus__interestSubmissionsResult {
    let result = super.call(
      "interestSubmissions",
      "interestSubmissions(address,uint256):(uint256,uint256,uint256,uint256)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return new USDCInterestConsensus__interestSubmissionsResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt()
    );
  }

  try_interestSubmissions(
    param0: Address,
    param1: BigInt
  ): ethereum.CallResult<USDCInterestConsensus__interestSubmissionsResult> {
    let result = super.tryCall(
      "interestSubmissions",
      "interestSubmissions(address,uint256):(uint256,uint256,uint256,uint256)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new USDCInterestConsensus__interestSubmissionsResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt()
      )
    );
  }

  isSigner(account: Address): boolean {
    let result = super.call("isSigner", "isSigner(address):(bool)", [
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBoolean();
  }

  try_isSigner(account: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("isSigner", "isSigner(address):(bool)", [
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  settings(): Address {
    let result = super.call("settings", "settings():(address)", []);

    return result[0].toAddress();
  }

  try_settings(): ethereum.CallResult<Address> {
    let result = super.tryCall("settings", "settings():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  signerNonceTaken(param0: Address, param1: BigInt): boolean {
    let result = super.call(
      "signerNonceTaken",
      "signerNonceTaken(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return result[0].toBoolean();
  }

  try_signerNonceTaken(
    param0: Address,
    param1: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "signerNonceTaken",
      "signerNonceTaken(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  processRequest(
    request: USDCInterestConsensus__processRequestInputRequestStruct,
    responses: Array<USDCInterestConsensus__processRequestInputResponsesStruct>
  ): BigInt {
    let result = super.call(
      "processRequest",
      "processRequest((address,uint256,uint256,uint256),tuple[]):(uint256)",
      [
        ethereum.Value.fromTuple(request),
        ethereum.Value.fromTupleArray(responses)
      ]
    );

    return result[0].toBigInt();
  }

  try_processRequest(
    request: USDCInterestConsensus__processRequestInputRequestStruct,
    responses: Array<USDCInterestConsensus__processRequestInputResponsesStruct>
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "processRequest",
      "processRequest((address,uint256,uint256,uint256),tuple[]):(uint256)",
      [
        ethereum.Value.fromTuple(request),
        ethereum.Value.fromTupleArray(responses)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class AddSignerCall extends ethereum.Call {
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

export class InitializeCall extends ethereum.Call {
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

export class RenounceSignerCall extends ethereum.Call {
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

export class ProcessRequestCall extends ethereum.Call {
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

  get responses(): Array<ProcessRequestCallResponsesStruct> {
    return this._call.inputValues[1].value.toTupleArray<
      ProcessRequestCallResponsesStruct
    >();
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

export class ProcessRequestCallRequestStruct extends ethereum.Tuple {
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

export class ProcessRequestCallResponsesStruct extends ethereum.Tuple {
  get signer(): Address {
    return this[0].toAddress();
  }

  get responseTime(): BigInt {
    return this[1].toBigInt();
  }

  get interest(): BigInt {
    return this[2].toBigInt();
  }

  get signature(): ProcessRequestCallResponsesSignatureStruct {
    return this[3].toTuple() as ProcessRequestCallResponsesSignatureStruct;
  }
}

export class ProcessRequestCallResponsesSignatureStruct extends ethereum.Tuple {
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
