// source: proto/reportpb/marginint.proto
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
goog.exportSymbol('proto.reorgpb.ListMarginIntRequest', null, global);
goog.exportSymbol('proto.reorgpb.ListMarginIntResponse', null, global);
goog.exportSymbol('proto.reorgpb.MarginInt', null, global);
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
proto.reorgpb.MarginInt = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.reorgpb.MarginInt, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.reorgpb.MarginInt.displayName = 'proto.reorgpb.MarginInt';
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
proto.reorgpb.ListMarginIntRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.reorgpb.ListMarginIntRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.reorgpb.ListMarginIntRequest.displayName = 'proto.reorgpb.ListMarginIntRequest';
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
proto.reorgpb.ListMarginIntResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.reorgpb.ListMarginIntResponse.repeatedFields_, null);
};
goog.inherits(proto.reorgpb.ListMarginIntResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.reorgpb.ListMarginIntResponse.displayName = 'proto.reorgpb.ListMarginIntResponse';
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
proto.reorgpb.MarginInt.prototype.toObject = function(opt_includeInstance) {
  return proto.reorgpb.MarginInt.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.reorgpb.MarginInt} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.reorgpb.MarginInt.toObject = function(includeInstance, msg) {
  var f, obj = {
    correspondent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    accountNo: jspb.Message.getFieldWithDefault(msg, 2, ""),
    accountName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    masterAccountNo: jspb.Message.getFieldWithDefault(msg, 4, ""),
    markUpdnValue: jspb.Message.getFieldWithDefault(msg, 5, ""),
    broker: jspb.Message.getFieldWithDefault(msg, 6, ""),
    type: jspb.Message.getFieldWithDefault(msg, 7, ""),
    settleDate: (f = msg.getSettleDate()) && google_type_date_pb.Date.toObject(includeInstance, f),
    sdCashBalance: jspb.Message.getFieldWithDefault(msg, 9, ""),
    rate: jspb.Message.getFieldWithDefault(msg, 10, ""),
    marginInterest: jspb.Message.getFieldWithDefault(msg, 11, ""),
    status: jspb.Message.getFieldWithDefault(msg, 12, ""),
    markUpdnRate: jspb.Message.getFieldWithDefault(msg, 13, "")
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
 * @return {!proto.reorgpb.MarginInt}
 */
proto.reorgpb.MarginInt.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.reorgpb.MarginInt;
  return proto.reorgpb.MarginInt.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.reorgpb.MarginInt} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.reorgpb.MarginInt}
 */
proto.reorgpb.MarginInt.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCorrespondent(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountNo(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMasterAccountNo(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarkUpdnValue(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setBroker(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 8:
      var value = new google_type_date_pb.Date;
      reader.readMessage(value,google_type_date_pb.Date.deserializeBinaryFromReader);
      msg.setSettleDate(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setSdCashBalance(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setRate(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarginInterest(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarkUpdnRate(value);
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
proto.reorgpb.MarginInt.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.reorgpb.MarginInt.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.reorgpb.MarginInt} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.reorgpb.MarginInt.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCorrespondent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAccountNo();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAccountName();
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
  f = message.getMarkUpdnValue();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getBroker();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getSettleDate();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_type_date_pb.Date.serializeBinaryToWriter
    );
  }
  f = message.getSdCashBalance();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getRate();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getMarginInterest();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getMarkUpdnRate();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
};


/**
 * optional string correspondent = 1;
 * @return {string}
 */
proto.reorgpb.MarginInt.prototype.getCorrespondent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.reorgpb.MarginInt} returns this
 */
proto.reorgpb.MarginInt.prototype.setCorrespondent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string account_no = 2;
 * @return {string}
 */
proto.reorgpb.MarginInt.prototype.getAccountNo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.reorgpb.MarginInt} returns this
 */
proto.reorgpb.MarginInt.prototype.setAccountNo = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string account_name = 3;
 * @return {string}
 */
proto.reorgpb.MarginInt.prototype.getAccountName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.reorgpb.MarginInt} returns this
 */
proto.reorgpb.MarginInt.prototype.setAccountName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string master_account_no = 4;
 * @return {string}
 */
proto.reorgpb.MarginInt.prototype.getMasterAccountNo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.reorgpb.MarginInt} returns this
 */
proto.reorgpb.MarginInt.prototype.setMasterAccountNo = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string mark_updn_value = 5;
 * @return {string}
 */
proto.reorgpb.MarginInt.prototype.getMarkUpdnValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.reorgpb.MarginInt} returns this
 */
proto.reorgpb.MarginInt.prototype.setMarkUpdnValue = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string broker = 6;
 * @return {string}
 */
proto.reorgpb.MarginInt.prototype.getBroker = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.reorgpb.MarginInt} returns this
 */
proto.reorgpb.MarginInt.prototype.setBroker = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string type = 7;
 * @return {string}
 */
proto.reorgpb.MarginInt.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.reorgpb.MarginInt} returns this
 */
proto.reorgpb.MarginInt.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional google.type.Date settle_date = 8;
 * @return {?proto.google.type.Date}
 */
proto.reorgpb.MarginInt.prototype.getSettleDate = function() {
  return /** @type{?proto.google.type.Date} */ (
    jspb.Message.getWrapperField(this, google_type_date_pb.Date, 8));
};


/**
 * @param {?proto.google.type.Date|undefined} value
 * @return {!proto.reorgpb.MarginInt} returns this
*/
proto.reorgpb.MarginInt.prototype.setSettleDate = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.reorgpb.MarginInt} returns this
 */
proto.reorgpb.MarginInt.prototype.clearSettleDate = function() {
  return this.setSettleDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.reorgpb.MarginInt.prototype.hasSettleDate = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string sd_cash_balance = 9;
 * @return {string}
 */
proto.reorgpb.MarginInt.prototype.getSdCashBalance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.reorgpb.MarginInt} returns this
 */
proto.reorgpb.MarginInt.prototype.setSdCashBalance = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string rate = 10;
 * @return {string}
 */
proto.reorgpb.MarginInt.prototype.getRate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.reorgpb.MarginInt} returns this
 */
proto.reorgpb.MarginInt.prototype.setRate = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string margin_interest = 11;
 * @return {string}
 */
proto.reorgpb.MarginInt.prototype.getMarginInterest = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.reorgpb.MarginInt} returns this
 */
proto.reorgpb.MarginInt.prototype.setMarginInterest = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string status = 12;
 * @return {string}
 */
proto.reorgpb.MarginInt.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.reorgpb.MarginInt} returns this
 */
proto.reorgpb.MarginInt.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string mark_updn_rate = 13;
 * @return {string}
 */
proto.reorgpb.MarginInt.prototype.getMarkUpdnRate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.reorgpb.MarginInt} returns this
 */
proto.reorgpb.MarginInt.prototype.setMarkUpdnRate = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
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
proto.reorgpb.ListMarginIntRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.reorgpb.ListMarginIntRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.reorgpb.ListMarginIntRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.reorgpb.ListMarginIntRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    settleDate: (f = msg.getSettleDate()) && google_type_date_pb.Date.toObject(includeInstance, f),
    correspondent: jspb.Message.getFieldWithDefault(msg, 2, ""),
    accountNo: jspb.Message.getFieldWithDefault(msg, 3, ""),
    accountName: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.reorgpb.ListMarginIntRequest}
 */
proto.reorgpb.ListMarginIntRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.reorgpb.ListMarginIntRequest;
  return proto.reorgpb.ListMarginIntRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.reorgpb.ListMarginIntRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.reorgpb.ListMarginIntRequest}
 */
proto.reorgpb.ListMarginIntRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_type_date_pb.Date;
      reader.readMessage(value,google_type_date_pb.Date.deserializeBinaryFromReader);
      msg.setSettleDate(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCorrespondent(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountNo(value);
      break;
    case 4:
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
proto.reorgpb.ListMarginIntRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.reorgpb.ListMarginIntRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.reorgpb.ListMarginIntRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.reorgpb.ListMarginIntRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSettleDate();
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
  f = message.getAccountNo();
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
};


/**
 * optional google.type.Date settle_date = 1;
 * @return {?proto.google.type.Date}
 */
proto.reorgpb.ListMarginIntRequest.prototype.getSettleDate = function() {
  return /** @type{?proto.google.type.Date} */ (
    jspb.Message.getWrapperField(this, google_type_date_pb.Date, 1));
};


/**
 * @param {?proto.google.type.Date|undefined} value
 * @return {!proto.reorgpb.ListMarginIntRequest} returns this
*/
proto.reorgpb.ListMarginIntRequest.prototype.setSettleDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.reorgpb.ListMarginIntRequest} returns this
 */
proto.reorgpb.ListMarginIntRequest.prototype.clearSettleDate = function() {
  return this.setSettleDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.reorgpb.ListMarginIntRequest.prototype.hasSettleDate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string correspondent = 2;
 * @return {string}
 */
proto.reorgpb.ListMarginIntRequest.prototype.getCorrespondent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.reorgpb.ListMarginIntRequest} returns this
 */
proto.reorgpb.ListMarginIntRequest.prototype.setCorrespondent = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string account_no = 3;
 * @return {string}
 */
proto.reorgpb.ListMarginIntRequest.prototype.getAccountNo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.reorgpb.ListMarginIntRequest} returns this
 */
proto.reorgpb.ListMarginIntRequest.prototype.setAccountNo = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string account_name = 4;
 * @return {string}
 */
proto.reorgpb.ListMarginIntRequest.prototype.getAccountName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.reorgpb.ListMarginIntRequest} returns this
 */
proto.reorgpb.ListMarginIntRequest.prototype.setAccountName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.reorgpb.ListMarginIntResponse.repeatedFields_ = [1];



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
proto.reorgpb.ListMarginIntResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.reorgpb.ListMarginIntResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.reorgpb.ListMarginIntResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.reorgpb.ListMarginIntResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    marginIntsList: jspb.Message.toObjectList(msg.getMarginIntsList(),
    proto.reorgpb.MarginInt.toObject, includeInstance)
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
 * @return {!proto.reorgpb.ListMarginIntResponse}
 */
proto.reorgpb.ListMarginIntResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.reorgpb.ListMarginIntResponse;
  return proto.reorgpb.ListMarginIntResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.reorgpb.ListMarginIntResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.reorgpb.ListMarginIntResponse}
 */
proto.reorgpb.ListMarginIntResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.reorgpb.MarginInt;
      reader.readMessage(value,proto.reorgpb.MarginInt.deserializeBinaryFromReader);
      msg.addMarginInts(value);
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
proto.reorgpb.ListMarginIntResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.reorgpb.ListMarginIntResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.reorgpb.ListMarginIntResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.reorgpb.ListMarginIntResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarginIntsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.reorgpb.MarginInt.serializeBinaryToWriter
    );
  }
};


/**
 * repeated MarginInt margin_ints = 1;
 * @return {!Array<!proto.reorgpb.MarginInt>}
 */
proto.reorgpb.ListMarginIntResponse.prototype.getMarginIntsList = function() {
  return /** @type{!Array<!proto.reorgpb.MarginInt>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.reorgpb.MarginInt, 1));
};


/**
 * @param {!Array<!proto.reorgpb.MarginInt>} value
 * @return {!proto.reorgpb.ListMarginIntResponse} returns this
*/
proto.reorgpb.ListMarginIntResponse.prototype.setMarginIntsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.reorgpb.MarginInt=} opt_value
 * @param {number=} opt_index
 * @return {!proto.reorgpb.MarginInt}
 */
proto.reorgpb.ListMarginIntResponse.prototype.addMarginInts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.reorgpb.MarginInt, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.reorgpb.ListMarginIntResponse} returns this
 */
proto.reorgpb.ListMarginIntResponse.prototype.clearMarginIntsList = function() {
  return this.setMarginIntsList([]);
};


goog.object.extend(exports, proto.reorgpb);
