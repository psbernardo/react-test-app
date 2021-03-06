// source: proto/marginpb/buyingpower.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_type_date_pb = require('../../google/type/date_pb.js');
goog.object.extend(proto, google_type_date_pb);
goog.exportSymbol('proto.marginpb.BuyingPower', null, global);
goog.exportSymbol('proto.marginpb.ListBuyingPowerRequest', null, global);
goog.exportSymbol('proto.marginpb.ListBuyingPowerResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.marginpb.BuyingPower = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.marginpb.BuyingPower, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.marginpb.BuyingPower.displayName = 'proto.marginpb.BuyingPower';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.marginpb.ListBuyingPowerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.marginpb.ListBuyingPowerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.marginpb.ListBuyingPowerRequest.displayName = 'proto.marginpb.ListBuyingPowerRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.marginpb.ListBuyingPowerResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.marginpb.ListBuyingPowerResponse.repeatedFields_, null);
};
goog.inherits(proto.marginpb.ListBuyingPowerResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.marginpb.ListBuyingPowerResponse.displayName = 'proto.marginpb.ListBuyingPowerResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.marginpb.BuyingPower.prototype.toObject = function(opt_includeInstance) {
  return proto.marginpb.BuyingPower.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.marginpb.BuyingPower} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.marginpb.BuyingPower.toObject = function(includeInstance, msg) {
  var f, obj = {
    tradeDate: (f = msg.getTradeDate()) && google_type_date_pb.Date.toObject(includeInstance, f),
    correspondent: jspb.Message.getFieldWithDefault(msg, 2, ""),
    masterAccountNo: jspb.Message.getFieldWithDefault(msg, 3, ""),
    accountName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    buyingPower: jspb.Message.getFieldWithDefault(msg, 5, ""),
    buyingPowerUsed: jspb.Message.getFieldWithDefault(msg, 6, ""),
    buyingPowerPercent: jspb.Message.getFieldWithDefault(msg, 7, ""),
    accountId: jspb.Message.getFieldWithDefault(msg, 8, 0),
    equity: jspb.Message.getFieldWithDefault(msg, 9, ""),
    exchangeReq: jspb.Message.getFieldWithDefault(msg, 10, ""),
    multiplier: jspb.Message.getFieldWithDefault(msg, 11, ""),
    percentDeduction: jspb.Message.getFieldWithDefault(msg, 12, ""),
    openingBuyingPower: jspb.Message.getFieldWithDefault(msg, 13, ""),
    deposit: jspb.Message.getFieldWithDefault(msg, 14, ""),
    buyingPowerCall: jspb.Message.getFieldWithDefault(msg, 15, ""),
    oms: jspb.Message.getBooleanFieldWithDefault(msg, 16, false),
    client: jspb.Message.getBooleanFieldWithDefault(msg, 17, false),
    trnsId: jspb.Message.getFieldWithDefault(msg, 18, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.marginpb.BuyingPower}
 */
proto.marginpb.BuyingPower.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.marginpb.BuyingPower;
  return proto.marginpb.BuyingPower.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.marginpb.BuyingPower} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.marginpb.BuyingPower}
 */
proto.marginpb.BuyingPower.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_type_date_pb.Date;
      reader.readMessage(value,google_type_date_pb.Date.deserializeBinaryFromReader);
      msg.setTradeDate(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCorrespondent(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMasterAccountNo(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setBuyingPower(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setBuyingPowerUsed(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setBuyingPowerPercent(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAccountId(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setEquity(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setExchangeReq(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setMultiplier(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setPercentDeduction(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setOpeningBuyingPower(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeposit(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setBuyingPowerCall(value);
      break;
    case 16:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOms(value);
      break;
    case 17:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setClient(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTrnsId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.marginpb.BuyingPower.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.marginpb.BuyingPower.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.marginpb.BuyingPower} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.marginpb.BuyingPower.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTradeDate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_type_date_pb.Date.serializeBinaryToWriter
    );
  }
  f = message.getCorrespondent();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMasterAccountNo();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAccountName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getBuyingPower();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getBuyingPowerUsed();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getBuyingPowerPercent();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getAccountId();
  if (f !== 0) {
    writer.writeUint32(
      8,
      f
    );
  }
  f = message.getEquity();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getExchangeReq();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getMultiplier();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getPercentDeduction();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getOpeningBuyingPower();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getDeposit();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getBuyingPowerCall();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getOms();
  if (f) {
    writer.writeBool(
      16,
      f
    );
  }
  f = message.getClient();
  if (f) {
    writer.writeBool(
      17,
      f
    );
  }
  f = message.getTrnsId();
  if (f !== 0) {
    writer.writeUint32(
      18,
      f
    );
  }
};


/**
 * optional google.type.Date trade_date = 1;
 * @return {?proto.google.type.Date}
 */
proto.marginpb.BuyingPower.prototype.getTradeDate = function() {
  return /** @type{?proto.google.type.Date} */ (
    jspb.Message.getWrapperField(this, google_type_date_pb.Date, 1));
};


/**
 * @param {?proto.google.type.Date|undefined} value
 * @return {!proto.marginpb.BuyingPower} returns this
*/
proto.marginpb.BuyingPower.prototype.setTradeDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.marginpb.BuyingPower} returns this
 */
proto.marginpb.BuyingPower.prototype.clearTradeDate = function() {
  return this.setTradeDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.marginpb.BuyingPower.prototype.hasTradeDate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string correspondent = 2;
 * @return {string}
 */
proto.marginpb.BuyingPower.prototype.getCorrespondent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.marginpb.BuyingPower} returns this
 */
proto.marginpb.BuyingPower.prototype.setCorrespondent = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string master_account_no = 3;
 * @return {string}
 */
proto.marginpb.BuyingPower.prototype.getMasterAccountNo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.marginpb.BuyingPower} returns this
 */
proto.marginpb.BuyingPower.prototype.setMasterAccountNo = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string account_name = 4;
 * @return {string}
 */
proto.marginpb.BuyingPower.prototype.getAccountName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.marginpb.BuyingPower} returns this
 */
proto.marginpb.BuyingPower.prototype.setAccountName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string buying_power = 5;
 * @return {string}
 */
proto.marginpb.BuyingPower.prototype.getBuyingPower = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.marginpb.BuyingPower} returns this
 */
proto.marginpb.BuyingPower.prototype.setBuyingPower = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string buying_power_used = 6;
 * @return {string}
 */
proto.marginpb.BuyingPower.prototype.getBuyingPowerUsed = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.marginpb.BuyingPower} returns this
 */
proto.marginpb.BuyingPower.prototype.setBuyingPowerUsed = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string buying_power_percent = 7;
 * @return {string}
 */
proto.marginpb.BuyingPower.prototype.getBuyingPowerPercent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.marginpb.BuyingPower} returns this
 */
proto.marginpb.BuyingPower.prototype.setBuyingPowerPercent = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional uint32 account_id = 8;
 * @return {number}
 */
proto.marginpb.BuyingPower.prototype.getAccountId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.marginpb.BuyingPower} returns this
 */
proto.marginpb.BuyingPower.prototype.setAccountId = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional string equity = 9;
 * @return {string}
 */
proto.marginpb.BuyingPower.prototype.getEquity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.marginpb.BuyingPower} returns this
 */
proto.marginpb.BuyingPower.prototype.setEquity = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string exchange_req = 10;
 * @return {string}
 */
proto.marginpb.BuyingPower.prototype.getExchangeReq = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.marginpb.BuyingPower} returns this
 */
proto.marginpb.BuyingPower.prototype.setExchangeReq = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string multiplier = 11;
 * @return {string}
 */
proto.marginpb.BuyingPower.prototype.getMultiplier = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.marginpb.BuyingPower} returns this
 */
proto.marginpb.BuyingPower.prototype.setMultiplier = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string percent_deduction = 12;
 * @return {string}
 */
proto.marginpb.BuyingPower.prototype.getPercentDeduction = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.marginpb.BuyingPower} returns this
 */
proto.marginpb.BuyingPower.prototype.setPercentDeduction = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string opening_buying_power = 13;
 * @return {string}
 */
proto.marginpb.BuyingPower.prototype.getOpeningBuyingPower = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.marginpb.BuyingPower} returns this
 */
proto.marginpb.BuyingPower.prototype.setOpeningBuyingPower = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string deposit = 14;
 * @return {string}
 */
proto.marginpb.BuyingPower.prototype.getDeposit = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.marginpb.BuyingPower} returns this
 */
proto.marginpb.BuyingPower.prototype.setDeposit = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string buying_power_call = 15;
 * @return {string}
 */
proto.marginpb.BuyingPower.prototype.getBuyingPowerCall = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.marginpb.BuyingPower} returns this
 */
proto.marginpb.BuyingPower.prototype.setBuyingPowerCall = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional bool oms = 16;
 * @return {boolean}
 */
proto.marginpb.BuyingPower.prototype.getOms = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 16, false));
};


/**
 * @param {boolean} value
 * @return {!proto.marginpb.BuyingPower} returns this
 */
proto.marginpb.BuyingPower.prototype.setOms = function(value) {
  return jspb.Message.setProto3BooleanField(this, 16, value);
};


/**
 * optional bool client = 17;
 * @return {boolean}
 */
proto.marginpb.BuyingPower.prototype.getClient = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 17, false));
};


/**
 * @param {boolean} value
 * @return {!proto.marginpb.BuyingPower} returns this
 */
proto.marginpb.BuyingPower.prototype.setClient = function(value) {
  return jspb.Message.setProto3BooleanField(this, 17, value);
};


/**
 * optional uint32 trns_id = 18;
 * @return {number}
 */
proto.marginpb.BuyingPower.prototype.getTrnsId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/**
 * @param {number} value
 * @return {!proto.marginpb.BuyingPower} returns this
 */
proto.marginpb.BuyingPower.prototype.setTrnsId = function(value) {
  return jspb.Message.setProto3IntField(this, 18, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.marginpb.ListBuyingPowerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.marginpb.ListBuyingPowerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.marginpb.ListBuyingPowerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.marginpb.ListBuyingPowerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    fromDate: (f = msg.getFromDate()) && google_type_date_pb.Date.toObject(includeInstance, f),
    toDate: (f = msg.getToDate()) && google_type_date_pb.Date.toObject(includeInstance, f),
    correspondent: jspb.Message.getFieldWithDefault(msg, 3, ""),
    masterAccountNo: jspb.Message.getFieldWithDefault(msg, 4, ""),
    accountName: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.marginpb.ListBuyingPowerRequest}
 */
proto.marginpb.ListBuyingPowerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.marginpb.ListBuyingPowerRequest;
  return proto.marginpb.ListBuyingPowerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.marginpb.ListBuyingPowerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.marginpb.ListBuyingPowerRequest}
 */
proto.marginpb.ListBuyingPowerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_type_date_pb.Date;
      reader.readMessage(value,google_type_date_pb.Date.deserializeBinaryFromReader);
      msg.setFromDate(value);
      break;
    case 2:
      var value = new google_type_date_pb.Date;
      reader.readMessage(value,google_type_date_pb.Date.deserializeBinaryFromReader);
      msg.setToDate(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCorrespondent(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMasterAccountNo(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.marginpb.ListBuyingPowerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.marginpb.ListBuyingPowerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.marginpb.ListBuyingPowerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.marginpb.ListBuyingPowerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFromDate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_type_date_pb.Date.serializeBinaryToWriter
    );
  }
  f = message.getToDate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_type_date_pb.Date.serializeBinaryToWriter
    );
  }
  f = message.getCorrespondent();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMasterAccountNo();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAccountName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional google.type.Date from_date = 1;
 * @return {?proto.google.type.Date}
 */
proto.marginpb.ListBuyingPowerRequest.prototype.getFromDate = function() {
  return /** @type{?proto.google.type.Date} */ (
    jspb.Message.getWrapperField(this, google_type_date_pb.Date, 1));
};


/**
 * @param {?proto.google.type.Date|undefined} value
 * @return {!proto.marginpb.ListBuyingPowerRequest} returns this
*/
proto.marginpb.ListBuyingPowerRequest.prototype.setFromDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.marginpb.ListBuyingPowerRequest} returns this
 */
proto.marginpb.ListBuyingPowerRequest.prototype.clearFromDate = function() {
  return this.setFromDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.marginpb.ListBuyingPowerRequest.prototype.hasFromDate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.type.Date to_date = 2;
 * @return {?proto.google.type.Date}
 */
proto.marginpb.ListBuyingPowerRequest.prototype.getToDate = function() {
  return /** @type{?proto.google.type.Date} */ (
    jspb.Message.getWrapperField(this, google_type_date_pb.Date, 2));
};


/**
 * @param {?proto.google.type.Date|undefined} value
 * @return {!proto.marginpb.ListBuyingPowerRequest} returns this
*/
proto.marginpb.ListBuyingPowerRequest.prototype.setToDate = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.marginpb.ListBuyingPowerRequest} returns this
 */
proto.marginpb.ListBuyingPowerRequest.prototype.clearToDate = function() {
  return this.setToDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.marginpb.ListBuyingPowerRequest.prototype.hasToDate = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string correspondent = 3;
 * @return {string}
 */
proto.marginpb.ListBuyingPowerRequest.prototype.getCorrespondent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.marginpb.ListBuyingPowerRequest} returns this
 */
proto.marginpb.ListBuyingPowerRequest.prototype.setCorrespondent = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string master_account_no = 4;
 * @return {string}
 */
proto.marginpb.ListBuyingPowerRequest.prototype.getMasterAccountNo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.marginpb.ListBuyingPowerRequest} returns this
 */
proto.marginpb.ListBuyingPowerRequest.prototype.setMasterAccountNo = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string account_name = 5;
 * @return {string}
 */
proto.marginpb.ListBuyingPowerRequest.prototype.getAccountName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.marginpb.ListBuyingPowerRequest} returns this
 */
proto.marginpb.ListBuyingPowerRequest.prototype.setAccountName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.marginpb.ListBuyingPowerResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.marginpb.ListBuyingPowerResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.marginpb.ListBuyingPowerResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.marginpb.ListBuyingPowerResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.marginpb.ListBuyingPowerResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    buyingPowersList: jspb.Message.toObjectList(msg.getBuyingPowersList(),
    proto.marginpb.BuyingPower.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.marginpb.ListBuyingPowerResponse}
 */
proto.marginpb.ListBuyingPowerResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.marginpb.ListBuyingPowerResponse;
  return proto.marginpb.ListBuyingPowerResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.marginpb.ListBuyingPowerResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.marginpb.ListBuyingPowerResponse}
 */
proto.marginpb.ListBuyingPowerResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.marginpb.BuyingPower;
      reader.readMessage(value,proto.marginpb.BuyingPower.deserializeBinaryFromReader);
      msg.addBuyingPowers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.marginpb.ListBuyingPowerResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.marginpb.ListBuyingPowerResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.marginpb.ListBuyingPowerResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.marginpb.ListBuyingPowerResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBuyingPowersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.marginpb.BuyingPower.serializeBinaryToWriter
    );
  }
};


/**
 * repeated BuyingPower buying_powers = 1;
 * @return {!Array<!proto.marginpb.BuyingPower>}
 */
proto.marginpb.ListBuyingPowerResponse.prototype.getBuyingPowersList = function() {
  return /** @type{!Array<!proto.marginpb.BuyingPower>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.marginpb.BuyingPower, 1));
};


/**
 * @param {!Array<!proto.marginpb.BuyingPower>} value
 * @return {!proto.marginpb.ListBuyingPowerResponse} returns this
*/
proto.marginpb.ListBuyingPowerResponse.prototype.setBuyingPowersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.marginpb.BuyingPower=} opt_value
 * @param {number=} opt_index
 * @return {!proto.marginpb.BuyingPower}
 */
proto.marginpb.ListBuyingPowerResponse.prototype.addBuyingPowers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.marginpb.BuyingPower, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.marginpb.ListBuyingPowerResponse} returns this
 */
proto.marginpb.ListBuyingPowerResponse.prototype.clearBuyingPowersList = function() {
  return this.setBuyingPowersList([]);
};


goog.object.extend(exports, proto.marginpb);
