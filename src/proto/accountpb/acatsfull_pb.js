// source: proto/accountpb/acatsfull.proto
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

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_type_date_pb = require('../../google/type/date_pb.js');
goog.object.extend(proto, google_type_date_pb);
goog.exportSymbol('proto.accountpb.AcatsFull', null, global);
goog.exportSymbol('proto.accountpb.ListAcatsFullRequest', null, global);
goog.exportSymbol('proto.accountpb.ListAcatsFullResponse', null, global);
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
proto.accountpb.AcatsFull = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accountpb.AcatsFull, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accountpb.AcatsFull.displayName = 'proto.accountpb.AcatsFull';
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
proto.accountpb.ListAcatsFullRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accountpb.ListAcatsFullRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accountpb.ListAcatsFullRequest.displayName = 'proto.accountpb.ListAcatsFullRequest';
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
proto.accountpb.ListAcatsFullResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.accountpb.ListAcatsFullResponse.repeatedFields_, null);
};
goog.inherits(proto.accountpb.ListAcatsFullResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accountpb.ListAcatsFullResponse.displayName = 'proto.accountpb.ListAcatsFullResponse';
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
proto.accountpb.AcatsFull.prototype.toObject = function(opt_includeInstance) {
  return proto.accountpb.AcatsFull.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accountpb.AcatsFull} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accountpb.AcatsFull.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    correspondent: jspb.Message.getFieldWithDefault(msg, 2, ""),
    accountNo: jspb.Message.getFieldWithDefault(msg, 3, ""),
    accountName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    masterAccountNo: jspb.Message.getFieldWithDefault(msg, 5, ""),
    status: jspb.Message.getFieldWithDefault(msg, 6, ""),
    w8w9ReceivedDate: (f = msg.getW8w9ReceivedDate()) && google_type_date_pb.Date.toObject(includeInstance, f),
    broker: jspb.Message.getFieldWithDefault(msg, 8, ""),
    type: jspb.Message.getFieldWithDefault(msg, 9, ""),
    activatedAt: (f = msg.getActivatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    capacity: jspb.Message.getFieldWithDefault(msg, 11, ""),
    createdBy: jspb.Message.getFieldWithDefault(msg, 12, ""),
    dayTrader: jspb.Message.getBooleanFieldWithDefault(msg, 13, false),
    disabledAt: (f = msg.getDisabledAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    investmentObjectiveCode: jspb.Message.getFieldWithDefault(msg, 15, ""),
    investmentObjectiveDate: (f = msg.getInvestmentObjectiveDate()) && google_type_date_pb.Date.toObject(includeInstance, f),
    legalEntity: jspb.Message.getFieldWithDefault(msg, 17, ""),
    multiplier: jspb.Message.getFieldWithDefault(msg, 18, 0),
    privacyContent: jspb.Message.getBooleanFieldWithDefault(msg, 19, false),
    taxCountry: jspb.Message.getFieldWithDefault(msg, 20, ""),
    tefra: jspb.Message.getFieldWithDefault(msg, 21, ""),
    w8w9: jspb.Message.getFieldWithDefault(msg, 22, "")
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
 * @return {!proto.accountpb.AcatsFull}
 */
proto.accountpb.AcatsFull.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accountpb.AcatsFull;
  return proto.accountpb.AcatsFull.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accountpb.AcatsFull} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accountpb.AcatsFull}
 */
proto.accountpb.AcatsFull.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAccountId(value);
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
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMasterAccountNo(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 7:
      var value = new google_type_date_pb.Date;
      reader.readMessage(value,google_type_date_pb.Date.deserializeBinaryFromReader);
      msg.setW8w9ReceivedDate(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setBroker(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 10:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setActivatedAt(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setCapacity(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedBy(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDayTrader(value);
      break;
    case 14:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDisabledAt(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setInvestmentObjectiveCode(value);
      break;
    case 16:
      var value = new google_type_date_pb.Date;
      reader.readMessage(value,google_type_date_pb.Date.deserializeBinaryFromReader);
      msg.setInvestmentObjectiveDate(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setLegalEntity(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMultiplier(value);
      break;
    case 19:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPrivacyContent(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setTaxCountry(value);
      break;
    case 21:
      var value = /** @type {string} */ (reader.readString());
      msg.setTefra(value);
      break;
    case 22:
      var value = /** @type {string} */ (reader.readString());
      msg.setW8w9(value);
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
proto.accountpb.AcatsFull.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accountpb.AcatsFull.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accountpb.AcatsFull} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accountpb.AcatsFull.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
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
  f = message.getMasterAccountNo();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getW8w9ReceivedDate();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_type_date_pb.Date.serializeBinaryToWriter
    );
  }
  f = message.getBroker();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getActivatedAt();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCapacity();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getCreatedBy();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getDayTrader();
  if (f) {
    writer.writeBool(
      13,
      f
    );
  }
  f = message.getDisabledAt();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getInvestmentObjectiveCode();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getInvestmentObjectiveDate();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      google_type_date_pb.Date.serializeBinaryToWriter
    );
  }
  f = message.getLegalEntity();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getMultiplier();
  if (f !== 0) {
    writer.writeInt32(
      18,
      f
    );
  }
  f = message.getPrivacyContent();
  if (f) {
    writer.writeBool(
      19,
      f
    );
  }
  f = message.getTaxCountry();
  if (f.length > 0) {
    writer.writeString(
      20,
      f
    );
  }
  f = message.getTefra();
  if (f.length > 0) {
    writer.writeString(
      21,
      f
    );
  }
  f = message.getW8w9();
  if (f.length > 0) {
    writer.writeString(
      22,
      f
    );
  }
};


/**
 * optional uint32 account_id = 1;
 * @return {number}
 */
proto.accountpb.AcatsFull.prototype.getAccountId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.accountpb.AcatsFull} returns this
 */
proto.accountpb.AcatsFull.prototype.setAccountId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string correspondent = 2;
 * @return {string}
 */
proto.accountpb.AcatsFull.prototype.getCorrespondent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accountpb.AcatsFull} returns this
 */
proto.accountpb.AcatsFull.prototype.setCorrespondent = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string account_no = 3;
 * @return {string}
 */
proto.accountpb.AcatsFull.prototype.getAccountNo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.accountpb.AcatsFull} returns this
 */
proto.accountpb.AcatsFull.prototype.setAccountNo = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string account_name = 4;
 * @return {string}
 */
proto.accountpb.AcatsFull.prototype.getAccountName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.accountpb.AcatsFull} returns this
 */
proto.accountpb.AcatsFull.prototype.setAccountName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string master_account_no = 5;
 * @return {string}
 */
proto.accountpb.AcatsFull.prototype.getMasterAccountNo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.accountpb.AcatsFull} returns this
 */
proto.accountpb.AcatsFull.prototype.setMasterAccountNo = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string status = 6;
 * @return {string}
 */
proto.accountpb.AcatsFull.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.accountpb.AcatsFull} returns this
 */
proto.accountpb.AcatsFull.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional google.type.Date w8w9_received_date = 7;
 * @return {?proto.google.type.Date}
 */
proto.accountpb.AcatsFull.prototype.getW8w9ReceivedDate = function() {
  return /** @type{?proto.google.type.Date} */ (
    jspb.Message.getWrapperField(this, google_type_date_pb.Date, 7));
};


/**
 * @param {?proto.google.type.Date|undefined} value
 * @return {!proto.accountpb.AcatsFull} returns this
*/
proto.accountpb.AcatsFull.prototype.setW8w9ReceivedDate = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.accountpb.AcatsFull} returns this
 */
proto.accountpb.AcatsFull.prototype.clearW8w9ReceivedDate = function() {
  return this.setW8w9ReceivedDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.accountpb.AcatsFull.prototype.hasW8w9ReceivedDate = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string broker = 8;
 * @return {string}
 */
proto.accountpb.AcatsFull.prototype.getBroker = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.accountpb.AcatsFull} returns this
 */
proto.accountpb.AcatsFull.prototype.setBroker = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string type = 9;
 * @return {string}
 */
proto.accountpb.AcatsFull.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.accountpb.AcatsFull} returns this
 */
proto.accountpb.AcatsFull.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional google.protobuf.Timestamp activated_at = 10;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.accountpb.AcatsFull.prototype.getActivatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 10));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.accountpb.AcatsFull} returns this
*/
proto.accountpb.AcatsFull.prototype.setActivatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.accountpb.AcatsFull} returns this
 */
proto.accountpb.AcatsFull.prototype.clearActivatedAt = function() {
  return this.setActivatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.accountpb.AcatsFull.prototype.hasActivatedAt = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional string capacity = 11;
 * @return {string}
 */
proto.accountpb.AcatsFull.prototype.getCapacity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.accountpb.AcatsFull} returns this
 */
proto.accountpb.AcatsFull.prototype.setCapacity = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string created_by = 12;
 * @return {string}
 */
proto.accountpb.AcatsFull.prototype.getCreatedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.accountpb.AcatsFull} returns this
 */
proto.accountpb.AcatsFull.prototype.setCreatedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional bool day_trader = 13;
 * @return {boolean}
 */
proto.accountpb.AcatsFull.prototype.getDayTrader = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.accountpb.AcatsFull} returns this
 */
proto.accountpb.AcatsFull.prototype.setDayTrader = function(value) {
  return jspb.Message.setProto3BooleanField(this, 13, value);
};


/**
 * optional google.protobuf.Timestamp disabled_at = 14;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.accountpb.AcatsFull.prototype.getDisabledAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 14));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.accountpb.AcatsFull} returns this
*/
proto.accountpb.AcatsFull.prototype.setDisabledAt = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.accountpb.AcatsFull} returns this
 */
proto.accountpb.AcatsFull.prototype.clearDisabledAt = function() {
  return this.setDisabledAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.accountpb.AcatsFull.prototype.hasDisabledAt = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional string investment_objective_code = 15;
 * @return {string}
 */
proto.accountpb.AcatsFull.prototype.getInvestmentObjectiveCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.accountpb.AcatsFull} returns this
 */
proto.accountpb.AcatsFull.prototype.setInvestmentObjectiveCode = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional google.type.Date investment_objective_date = 16;
 * @return {?proto.google.type.Date}
 */
proto.accountpb.AcatsFull.prototype.getInvestmentObjectiveDate = function() {
  return /** @type{?proto.google.type.Date} */ (
    jspb.Message.getWrapperField(this, google_type_date_pb.Date, 16));
};


/**
 * @param {?proto.google.type.Date|undefined} value
 * @return {!proto.accountpb.AcatsFull} returns this
*/
proto.accountpb.AcatsFull.prototype.setInvestmentObjectiveDate = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.accountpb.AcatsFull} returns this
 */
proto.accountpb.AcatsFull.prototype.clearInvestmentObjectiveDate = function() {
  return this.setInvestmentObjectiveDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.accountpb.AcatsFull.prototype.hasInvestmentObjectiveDate = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional string legal_entity = 17;
 * @return {string}
 */
proto.accountpb.AcatsFull.prototype.getLegalEntity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.accountpb.AcatsFull} returns this
 */
proto.accountpb.AcatsFull.prototype.setLegalEntity = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional int32 multiplier = 18;
 * @return {number}
 */
proto.accountpb.AcatsFull.prototype.getMultiplier = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/**
 * @param {number} value
 * @return {!proto.accountpb.AcatsFull} returns this
 */
proto.accountpb.AcatsFull.prototype.setMultiplier = function(value) {
  return jspb.Message.setProto3IntField(this, 18, value);
};


/**
 * optional bool privacy_content = 19;
 * @return {boolean}
 */
proto.accountpb.AcatsFull.prototype.getPrivacyContent = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 19, false));
};


/**
 * @param {boolean} value
 * @return {!proto.accountpb.AcatsFull} returns this
 */
proto.accountpb.AcatsFull.prototype.setPrivacyContent = function(value) {
  return jspb.Message.setProto3BooleanField(this, 19, value);
};


/**
 * optional string tax_country = 20;
 * @return {string}
 */
proto.accountpb.AcatsFull.prototype.getTaxCountry = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.accountpb.AcatsFull} returns this
 */
proto.accountpb.AcatsFull.prototype.setTaxCountry = function(value) {
  return jspb.Message.setProto3StringField(this, 20, value);
};


/**
 * optional string tefra = 21;
 * @return {string}
 */
proto.accountpb.AcatsFull.prototype.getTefra = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/**
 * @param {string} value
 * @return {!proto.accountpb.AcatsFull} returns this
 */
proto.accountpb.AcatsFull.prototype.setTefra = function(value) {
  return jspb.Message.setProto3StringField(this, 21, value);
};


/**
 * optional string w8w9 = 22;
 * @return {string}
 */
proto.accountpb.AcatsFull.prototype.getW8w9 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 22, ""));
};


/**
 * @param {string} value
 * @return {!proto.accountpb.AcatsFull} returns this
 */
proto.accountpb.AcatsFull.prototype.setW8w9 = function(value) {
  return jspb.Message.setProto3StringField(this, 22, value);
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
proto.accountpb.ListAcatsFullRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.accountpb.ListAcatsFullRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accountpb.ListAcatsFullRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accountpb.ListAcatsFullRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    correspondent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    accountNo: jspb.Message.getFieldWithDefault(msg, 2, ""),
    masterAccountNo: jspb.Message.getFieldWithDefault(msg, 3, ""),
    accountName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    broker: jspb.Message.getFieldWithDefault(msg, 5, ""),
    status: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.accountpb.ListAcatsFullRequest}
 */
proto.accountpb.ListAcatsFullRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accountpb.ListAcatsFullRequest;
  return proto.accountpb.ListAcatsFullRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accountpb.ListAcatsFullRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accountpb.ListAcatsFullRequest}
 */
proto.accountpb.ListAcatsFullRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setMasterAccountNo(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setBroker(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
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
proto.accountpb.ListAcatsFullRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accountpb.ListAcatsFullRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accountpb.ListAcatsFullRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accountpb.ListAcatsFullRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getBroker();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string correspondent = 1;
 * @return {string}
 */
proto.accountpb.ListAcatsFullRequest.prototype.getCorrespondent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.accountpb.ListAcatsFullRequest} returns this
 */
proto.accountpb.ListAcatsFullRequest.prototype.setCorrespondent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string account_no = 2;
 * @return {string}
 */
proto.accountpb.ListAcatsFullRequest.prototype.getAccountNo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accountpb.ListAcatsFullRequest} returns this
 */
proto.accountpb.ListAcatsFullRequest.prototype.setAccountNo = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string master_account_no = 3;
 * @return {string}
 */
proto.accountpb.ListAcatsFullRequest.prototype.getMasterAccountNo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.accountpb.ListAcatsFullRequest} returns this
 */
proto.accountpb.ListAcatsFullRequest.prototype.setMasterAccountNo = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string account_name = 4;
 * @return {string}
 */
proto.accountpb.ListAcatsFullRequest.prototype.getAccountName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.accountpb.ListAcatsFullRequest} returns this
 */
proto.accountpb.ListAcatsFullRequest.prototype.setAccountName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string broker = 5;
 * @return {string}
 */
proto.accountpb.ListAcatsFullRequest.prototype.getBroker = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.accountpb.ListAcatsFullRequest} returns this
 */
proto.accountpb.ListAcatsFullRequest.prototype.setBroker = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string status = 6;
 * @return {string}
 */
proto.accountpb.ListAcatsFullRequest.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.accountpb.ListAcatsFullRequest} returns this
 */
proto.accountpb.ListAcatsFullRequest.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.accountpb.ListAcatsFullResponse.repeatedFields_ = [1];



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
proto.accountpb.ListAcatsFullResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.accountpb.ListAcatsFullResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accountpb.ListAcatsFullResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accountpb.ListAcatsFullResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    acatsfullsList: jspb.Message.toObjectList(msg.getAcatsfullsList(),
    proto.accountpb.AcatsFull.toObject, includeInstance)
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
 * @return {!proto.accountpb.ListAcatsFullResponse}
 */
proto.accountpb.ListAcatsFullResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accountpb.ListAcatsFullResponse;
  return proto.accountpb.ListAcatsFullResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accountpb.ListAcatsFullResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accountpb.ListAcatsFullResponse}
 */
proto.accountpb.ListAcatsFullResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.accountpb.AcatsFull;
      reader.readMessage(value,proto.accountpb.AcatsFull.deserializeBinaryFromReader);
      msg.addAcatsfulls(value);
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
proto.accountpb.ListAcatsFullResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accountpb.ListAcatsFullResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accountpb.ListAcatsFullResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accountpb.ListAcatsFullResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAcatsfullsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.accountpb.AcatsFull.serializeBinaryToWriter
    );
  }
};


/**
 * repeated AcatsFull AcatsFulls = 1;
 * @return {!Array<!proto.accountpb.AcatsFull>}
 */
proto.accountpb.ListAcatsFullResponse.prototype.getAcatsfullsList = function() {
  return /** @type{!Array<!proto.accountpb.AcatsFull>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.accountpb.AcatsFull, 1));
};


/**
 * @param {!Array<!proto.accountpb.AcatsFull>} value
 * @return {!proto.accountpb.ListAcatsFullResponse} returns this
*/
proto.accountpb.ListAcatsFullResponse.prototype.setAcatsfullsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.accountpb.AcatsFull=} opt_value
 * @param {number=} opt_index
 * @return {!proto.accountpb.AcatsFull}
 */
proto.accountpb.ListAcatsFullResponse.prototype.addAcatsfulls = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.accountpb.AcatsFull, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.accountpb.ListAcatsFullResponse} returns this
 */
proto.accountpb.ListAcatsFullResponse.prototype.clearAcatsfullsList = function() {
  return this.setAcatsfullsList([]);
};


goog.object.extend(exports, proto.accountpb);