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

export class AssetSettingsAddressUpdated extends ethereum.Event {
  get params(): AssetSettingsAddressUpdated__Params {
    return new AssetSettingsAddressUpdated__Params(this);
  }
}

export class AssetSettingsAddressUpdated__Params {
  _event: AssetSettingsAddressUpdated;

  constructor(event: AssetSettingsAddressUpdated) {
    this._event = event;
  }

  get assetSettingName(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get sender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get assetAddress(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get oldValue(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get newValue(): Address {
    return this._event.parameters[4].value.toAddress();
  }
}

export class AssetSettingsCreated extends ethereum.Event {
  get params(): AssetSettingsCreated__Params {
    return new AssetSettingsCreated__Params(this);
  }
}

export class AssetSettingsCreated__Params {
  _event: AssetSettingsCreated;

  constructor(event: AssetSettingsCreated) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get assetAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get cTokenAddress(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get maxLoanAmount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class AssetSettingsRemoved extends ethereum.Event {
  get params(): AssetSettingsRemoved__Params {
    return new AssetSettingsRemoved__Params(this);
  }
}

export class AssetSettingsRemoved__Params {
  _event: AssetSettingsRemoved;

  constructor(event: AssetSettingsRemoved) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get assetAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class AssetSettingsUintUpdated extends ethereum.Event {
  get params(): AssetSettingsUintUpdated__Params {
    return new AssetSettingsUintUpdated__Params(this);
  }
}

export class AssetSettingsUintUpdated__Params {
  _event: AssetSettingsUintUpdated;

  constructor(event: AssetSettingsUintUpdated) {
    this._event = event;
  }

  get assetSettingName(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get sender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get assetAddress(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get oldValue(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get newValue(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class LendingPoolPaused extends ethereum.Event {
  get params(): LendingPoolPaused__Params {
    return new LendingPoolPaused__Params(this);
  }
}

export class LendingPoolPaused__Params {
  _event: LendingPoolPaused;

  constructor(event: LendingPoolPaused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get lendingPoolAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class LendingPoolUnpaused extends ethereum.Event {
  get params(): LendingPoolUnpaused__Params {
    return new LendingPoolUnpaused__Params(this);
  }
}

export class LendingPoolUnpaused__Params {
  _event: LendingPoolUnpaused;

  constructor(event: LendingPoolUnpaused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get lendingPoolAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Paused extends ethereum.Event {
  get params(): Paused__Params {
    return new Paused__Params(this);
  }
}

export class Paused__Params {
  _event: Paused;

  constructor(event: Paused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class PauserAdded extends ethereum.Event {
  get params(): PauserAdded__Params {
    return new PauserAdded__Params(this);
  }
}

export class PauserAdded__Params {
  _event: PauserAdded;

  constructor(event: PauserAdded) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class PauserRemoved extends ethereum.Event {
  get params(): PauserRemoved__Params {
    return new PauserRemoved__Params(this);
  }
}

export class PauserRemoved__Params {
  _event: PauserRemoved;

  constructor(event: PauserRemoved) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class PlatformSettingCreated extends ethereum.Event {
  get params(): PlatformSettingCreated__Params {
    return new PlatformSettingCreated__Params(this);
  }
}

export class PlatformSettingCreated__Params {
  _event: PlatformSettingCreated;

  constructor(event: PlatformSettingCreated) {
    this._event = event;
  }

  get settingName(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get sender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get minValue(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get maxValue(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class PlatformSettingRemoved extends ethereum.Event {
  get params(): PlatformSettingRemoved__Params {
    return new PlatformSettingRemoved__Params(this);
  }
}

export class PlatformSettingRemoved__Params {
  _event: PlatformSettingRemoved;

  constructor(event: PlatformSettingRemoved) {
    this._event = event;
  }

  get settingName(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get lastValue(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class PlatformSettingUpdated extends ethereum.Event {
  get params(): PlatformSettingUpdated__Params {
    return new PlatformSettingUpdated__Params(this);
  }
}

export class PlatformSettingUpdated__Params {
  _event: PlatformSettingUpdated;

  constructor(event: PlatformSettingUpdated) {
    this._event = event;
  }

  get settingName(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get sender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get oldValue(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get newValue(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class Unpaused extends ethereum.Event {
  get params(): Unpaused__Params {
    return new Unpaused__Params(this);
  }
}

export class Unpaused__Params {
  _event: Unpaused;

  constructor(event: Unpaused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class SettingsInterface__assetSettingsResult {
  value0: Address;
  value1: BigInt;

  constructor(value0: Address, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }
}

export class SettingsInterface__platformSettingsResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: boolean;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt, value3: boolean) {
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
    map.set("value3", ethereum.Value.fromBoolean(this.value3));
    return map;
  }
}

export class SettingsInterface__getPlatformSettingResultValue0Struct extends ethereum.Tuple {
  get value(): BigInt {
    return this[0].toBigInt();
  }

  get min(): BigInt {
    return this[1].toBigInt();
  }

  get max(): BigInt {
    return this[2].toBigInt();
  }

  get exists(): boolean {
    return this[3].toBoolean();
  }
}

export class SettingsInterface__getAssetSettingsResultValue0Struct extends ethereum.Tuple {
  get cTokenAddress(): Address {
    return this[0].toAddress();
  }

  get maxLoanAmount(): BigInt {
    return this[1].toBigInt();
  }
}

export class SettingsInterface extends ethereum.SmartContract {
  static bind(address: Address): SettingsInterface {
    return new SettingsInterface("SettingsInterface", address);
  }

  CTOKEN_ADDRESS_ASSET_SETTING(): Bytes {
    let result = super.call(
      "CTOKEN_ADDRESS_ASSET_SETTING",
      "CTOKEN_ADDRESS_ASSET_SETTING():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_CTOKEN_ADDRESS_ASSET_SETTING(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "CTOKEN_ADDRESS_ASSET_SETTING",
      "CTOKEN_ADDRESS_ASSET_SETTING():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  MAX_LOAN_AMOUNT_ASSET_SETTING(): Bytes {
    let result = super.call(
      "MAX_LOAN_AMOUNT_ASSET_SETTING",
      "MAX_LOAN_AMOUNT_ASSET_SETTING():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_MAX_LOAN_AMOUNT_ASSET_SETTING(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "MAX_LOAN_AMOUNT_ASSET_SETTING",
      "MAX_LOAN_AMOUNT_ASSET_SETTING():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  assetSettings(param0: Address): SettingsInterface__assetSettingsResult {
    let result = super.call(
      "assetSettings",
      "assetSettings(address):(address,uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return new SettingsInterface__assetSettingsResult(
      result[0].toAddress(),
      result[1].toBigInt()
    );
  }

  try_assetSettings(
    param0: Address
  ): ethereum.CallResult<SettingsInterface__assetSettingsResult> {
    let result = super.tryCall(
      "assetSettings",
      "assetSettings(address):(address,uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new SettingsInterface__assetSettingsResult(
        value[0].toAddress(),
        value[1].toBigInt()
      )
    );
  }

  assets(param0: BigInt): Address {
    let result = super.call("assets", "assets(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toAddress();
  }

  try_assets(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("assets", "assets(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isPauser(account: Address): boolean {
    let result = super.call("isPauser", "isPauser(address):(bool)", [
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBoolean();
  }

  try_isPauser(account: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("isPauser", "isPauser(address):(bool)", [
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  lendingPoolPaused(param0: Address): boolean {
    let result = super.call(
      "lendingPoolPaused",
      "lendingPoolPaused(address):(bool)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBoolean();
  }

  try_lendingPoolPaused(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "lendingPoolPaused",
      "lendingPoolPaused(address):(bool)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  paused(): boolean {
    let result = super.call("paused", "paused():(bool)", []);

    return result[0].toBoolean();
  }

  try_paused(): ethereum.CallResult<boolean> {
    let result = super.tryCall("paused", "paused():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  platformSettings(param0: Bytes): SettingsInterface__platformSettingsResult {
    let result = super.call(
      "platformSettings",
      "platformSettings(bytes32):(uint256,uint256,uint256,bool)",
      [ethereum.Value.fromFixedBytes(param0)]
    );

    return new SettingsInterface__platformSettingsResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBoolean()
    );
  }

  try_platformSettings(
    param0: Bytes
  ): ethereum.CallResult<SettingsInterface__platformSettingsResult> {
    let result = super.tryCall(
      "platformSettings",
      "platformSettings(bytes32):(uint256,uint256,uint256,bool)",
      [ethereum.Value.fromFixedBytes(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new SettingsInterface__platformSettingsResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBoolean()
      )
    );
  }

  getPlatformSetting(
    settingName: Bytes
  ): SettingsInterface__getPlatformSettingResultValue0Struct {
    let result = super.call(
      "getPlatformSetting",
      "getPlatformSetting(bytes32):((uint256,uint256,uint256,bool))",
      [ethereum.Value.fromFixedBytes(settingName)]
    );

    return result[0].toTuple() as SettingsInterface__getPlatformSettingResultValue0Struct;
  }

  try_getPlatformSetting(
    settingName: Bytes
  ): ethereum.CallResult<
    SettingsInterface__getPlatformSettingResultValue0Struct
  > {
    let result = super.tryCall(
      "getPlatformSetting",
      "getPlatformSetting(bytes32):((uint256,uint256,uint256,bool))",
      [ethereum.Value.fromFixedBytes(settingName)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTuple() as SettingsInterface__getPlatformSettingResultValue0Struct
    );
  }

  getPlatformSettingValue(settingName: Bytes): BigInt {
    let result = super.call(
      "getPlatformSettingValue",
      "getPlatformSettingValue(bytes32):(uint256)",
      [ethereum.Value.fromFixedBytes(settingName)]
    );

    return result[0].toBigInt();
  }

  try_getPlatformSettingValue(settingName: Bytes): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getPlatformSettingValue",
      "getPlatformSettingValue(bytes32):(uint256)",
      [ethereum.Value.fromFixedBytes(settingName)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  hasPlatformSetting(settingName: Bytes): boolean {
    let result = super.call(
      "hasPlatformSetting",
      "hasPlatformSetting(bytes32):(bool)",
      [ethereum.Value.fromFixedBytes(settingName)]
    );

    return result[0].toBoolean();
  }

  try_hasPlatformSetting(settingName: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "hasPlatformSetting",
      "hasPlatformSetting(bytes32):(bool)",
      [ethereum.Value.fromFixedBytes(settingName)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isPaused(): boolean {
    let result = super.call("isPaused", "isPaused():(bool)", []);

    return result[0].toBoolean();
  }

  try_isPaused(): ethereum.CallResult<boolean> {
    let result = super.tryCall("isPaused", "isPaused():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  exceedsMaxLoanAmount(assetAddress: Address, amount: BigInt): boolean {
    let result = super.call(
      "exceedsMaxLoanAmount",
      "exceedsMaxLoanAmount(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(assetAddress),
        ethereum.Value.fromUnsignedBigInt(amount)
      ]
    );

    return result[0].toBoolean();
  }

  try_exceedsMaxLoanAmount(
    assetAddress: Address,
    amount: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "exceedsMaxLoanAmount",
      "exceedsMaxLoanAmount(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(assetAddress),
        ethereum.Value.fromUnsignedBigInt(amount)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  getAssets(): Array<Address> {
    let result = super.call("getAssets", "getAssets():(address[])", []);

    return result[0].toAddressArray();
  }

  try_getAssets(): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall("getAssets", "getAssets():(address[])", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }

  getAssetSettings(
    assetAddress: Address
  ): SettingsInterface__getAssetSettingsResultValue0Struct {
    let result = super.call(
      "getAssetSettings",
      "getAssetSettings(address):((address,uint256))",
      [ethereum.Value.fromAddress(assetAddress)]
    );

    return result[0].toTuple() as SettingsInterface__getAssetSettingsResultValue0Struct;
  }

  try_getAssetSettings(
    assetAddress: Address
  ): ethereum.CallResult<
    SettingsInterface__getAssetSettingsResultValue0Struct
  > {
    let result = super.tryCall(
      "getAssetSettings",
      "getAssetSettings(address):((address,uint256))",
      [ethereum.Value.fromAddress(assetAddress)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTuple() as SettingsInterface__getAssetSettingsResultValue0Struct
    );
  }

  hasPauserRole(account: Address): boolean {
    let result = super.call("hasPauserRole", "hasPauserRole(address):(bool)", [
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBoolean();
  }

  try_hasPauserRole(account: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "hasPauserRole",
      "hasPauserRole(address):(bool)",
      [ethereum.Value.fromAddress(account)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class AddPauserCall extends ethereum.Call {
  get inputs(): AddPauserCall__Inputs {
    return new AddPauserCall__Inputs(this);
  }

  get outputs(): AddPauserCall__Outputs {
    return new AddPauserCall__Outputs(this);
  }
}

export class AddPauserCall__Inputs {
  _call: AddPauserCall;

  constructor(call: AddPauserCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddPauserCall__Outputs {
  _call: AddPauserCall;

  constructor(call: AddPauserCall) {
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

  get sender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class PauseCall extends ethereum.Call {
  get inputs(): PauseCall__Inputs {
    return new PauseCall__Inputs(this);
  }

  get outputs(): PauseCall__Outputs {
    return new PauseCall__Outputs(this);
  }
}

export class PauseCall__Inputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class PauseCall__Outputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class RenouncePauserCall extends ethereum.Call {
  get inputs(): RenouncePauserCall__Inputs {
    return new RenouncePauserCall__Inputs(this);
  }

  get outputs(): RenouncePauserCall__Outputs {
    return new RenouncePauserCall__Outputs(this);
  }
}

export class RenouncePauserCall__Inputs {
  _call: RenouncePauserCall;

  constructor(call: RenouncePauserCall) {
    this._call = call;
  }
}

export class RenouncePauserCall__Outputs {
  _call: RenouncePauserCall;

  constructor(call: RenouncePauserCall) {
    this._call = call;
  }
}

export class UnpauseCall extends ethereum.Call {
  get inputs(): UnpauseCall__Inputs {
    return new UnpauseCall__Inputs(this);
  }

  get outputs(): UnpauseCall__Outputs {
    return new UnpauseCall__Outputs(this);
  }
}

export class UnpauseCall__Inputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}

export class UnpauseCall__Outputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}

export class CreatePlatformSettingCall extends ethereum.Call {
  get inputs(): CreatePlatformSettingCall__Inputs {
    return new CreatePlatformSettingCall__Inputs(this);
  }

  get outputs(): CreatePlatformSettingCall__Outputs {
    return new CreatePlatformSettingCall__Outputs(this);
  }
}

export class CreatePlatformSettingCall__Inputs {
  _call: CreatePlatformSettingCall;

  constructor(call: CreatePlatformSettingCall) {
    this._call = call;
  }

  get settingName(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get value(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get minValue(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get maxValue(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class CreatePlatformSettingCall__Outputs {
  _call: CreatePlatformSettingCall;

  constructor(call: CreatePlatformSettingCall) {
    this._call = call;
  }
}

export class UpdatePlatformSettingCall extends ethereum.Call {
  get inputs(): UpdatePlatformSettingCall__Inputs {
    return new UpdatePlatformSettingCall__Inputs(this);
  }

  get outputs(): UpdatePlatformSettingCall__Outputs {
    return new UpdatePlatformSettingCall__Outputs(this);
  }
}

export class UpdatePlatformSettingCall__Inputs {
  _call: UpdatePlatformSettingCall;

  constructor(call: UpdatePlatformSettingCall) {
    this._call = call;
  }

  get settingName(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get newValue(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class UpdatePlatformSettingCall__Outputs {
  _call: UpdatePlatformSettingCall;

  constructor(call: UpdatePlatformSettingCall) {
    this._call = call;
  }
}

export class RemovePlatformSettingCall extends ethereum.Call {
  get inputs(): RemovePlatformSettingCall__Inputs {
    return new RemovePlatformSettingCall__Inputs(this);
  }

  get outputs(): RemovePlatformSettingCall__Outputs {
    return new RemovePlatformSettingCall__Outputs(this);
  }
}

export class RemovePlatformSettingCall__Inputs {
  _call: RemovePlatformSettingCall;

  constructor(call: RemovePlatformSettingCall) {
    this._call = call;
  }

  get settingName(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class RemovePlatformSettingCall__Outputs {
  _call: RemovePlatformSettingCall;

  constructor(call: RemovePlatformSettingCall) {
    this._call = call;
  }
}

export class PauseLendingPoolCall extends ethereum.Call {
  get inputs(): PauseLendingPoolCall__Inputs {
    return new PauseLendingPoolCall__Inputs(this);
  }

  get outputs(): PauseLendingPoolCall__Outputs {
    return new PauseLendingPoolCall__Outputs(this);
  }
}

export class PauseLendingPoolCall__Inputs {
  _call: PauseLendingPoolCall;

  constructor(call: PauseLendingPoolCall) {
    this._call = call;
  }

  get lendingPoolAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class PauseLendingPoolCall__Outputs {
  _call: PauseLendingPoolCall;

  constructor(call: PauseLendingPoolCall) {
    this._call = call;
  }
}

export class UnpauseLendingPoolCall extends ethereum.Call {
  get inputs(): UnpauseLendingPoolCall__Inputs {
    return new UnpauseLendingPoolCall__Inputs(this);
  }

  get outputs(): UnpauseLendingPoolCall__Outputs {
    return new UnpauseLendingPoolCall__Outputs(this);
  }
}

export class UnpauseLendingPoolCall__Inputs {
  _call: UnpauseLendingPoolCall;

  constructor(call: UnpauseLendingPoolCall) {
    this._call = call;
  }

  get lendingPoolAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UnpauseLendingPoolCall__Outputs {
  _call: UnpauseLendingPoolCall;

  constructor(call: UnpauseLendingPoolCall) {
    this._call = call;
  }
}

export class CreateAssetSettingsCall extends ethereum.Call {
  get inputs(): CreateAssetSettingsCall__Inputs {
    return new CreateAssetSettingsCall__Inputs(this);
  }

  get outputs(): CreateAssetSettingsCall__Outputs {
    return new CreateAssetSettingsCall__Outputs(this);
  }
}

export class CreateAssetSettingsCall__Inputs {
  _call: CreateAssetSettingsCall;

  constructor(call: CreateAssetSettingsCall) {
    this._call = call;
  }

  get assetAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get cTokenAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get maxLoanAmount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class CreateAssetSettingsCall__Outputs {
  _call: CreateAssetSettingsCall;

  constructor(call: CreateAssetSettingsCall) {
    this._call = call;
  }
}

export class RemoveAssetSettingsCall extends ethereum.Call {
  get inputs(): RemoveAssetSettingsCall__Inputs {
    return new RemoveAssetSettingsCall__Inputs(this);
  }

  get outputs(): RemoveAssetSettingsCall__Outputs {
    return new RemoveAssetSettingsCall__Outputs(this);
  }
}

export class RemoveAssetSettingsCall__Inputs {
  _call: RemoveAssetSettingsCall;

  constructor(call: RemoveAssetSettingsCall) {
    this._call = call;
  }

  get assetAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RemoveAssetSettingsCall__Outputs {
  _call: RemoveAssetSettingsCall;

  constructor(call: RemoveAssetSettingsCall) {
    this._call = call;
  }
}

export class UpdateMaxLoanAmountCall extends ethereum.Call {
  get inputs(): UpdateMaxLoanAmountCall__Inputs {
    return new UpdateMaxLoanAmountCall__Inputs(this);
  }

  get outputs(): UpdateMaxLoanAmountCall__Outputs {
    return new UpdateMaxLoanAmountCall__Outputs(this);
  }
}

export class UpdateMaxLoanAmountCall__Inputs {
  _call: UpdateMaxLoanAmountCall;

  constructor(call: UpdateMaxLoanAmountCall) {
    this._call = call;
  }

  get assetAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get newMaxLoanAmount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class UpdateMaxLoanAmountCall__Outputs {
  _call: UpdateMaxLoanAmountCall;

  constructor(call: UpdateMaxLoanAmountCall) {
    this._call = call;
  }
}

export class UpdateCTokenAddressCall extends ethereum.Call {
  get inputs(): UpdateCTokenAddressCall__Inputs {
    return new UpdateCTokenAddressCall__Inputs(this);
  }

  get outputs(): UpdateCTokenAddressCall__Outputs {
    return new UpdateCTokenAddressCall__Outputs(this);
  }
}

export class UpdateCTokenAddressCall__Inputs {
  _call: UpdateCTokenAddressCall;

  constructor(call: UpdateCTokenAddressCall) {
    this._call = call;
  }

  get assetAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get newCTokenAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class UpdateCTokenAddressCall__Outputs {
  _call: UpdateCTokenAddressCall;

  constructor(call: UpdateCTokenAddressCall) {
    this._call = call;
  }
}
