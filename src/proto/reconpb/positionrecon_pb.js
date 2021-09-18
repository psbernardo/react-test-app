// source: proto/reconpb/positionrecon.proto
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
goog.exportSymbol('proto.reconpb.ListPositionReconRequest', null, global);
goog.exportSymbol('proto.reconpb.ListPositionReconResponse', null, global);
goog.exportSymbol('proto.reconpb.PositionRecon', null, global);
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
proto.reconpb.PositionRecon = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.reconpb.PositionRecon, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.reconpb.PositionRecon.displayName = 'proto.reconpb.PositionRecon';
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
proto.reconpb.ListPositionReconRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.reconpb.ListPositionReconRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.reconpb.ListPositionReconRequest.displayName = 'proto.reconpb.ListPositionReconRequest';
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
proto.reconpb.ListPositionReconResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.reconpb.ListPositionReconResponse.repeatedFields_, null);
};
goog.inherits(proto.reconpb.ListPositionReconResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.reconpb.ListPositionReconResponse.displayName = 'proto.reconpb.ListPositionReconResponse';
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
proto.reconpb.PositionRecon.prototype.toObject = function(opt_includeInstance) {
  return proto.reconpb.PositionRecon.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.reconpb.PositionRecon} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.reconpb.PositionRecon.toObject = function(includeInstance, msg) {
  var f, obj = {
    systemDate: (f = msg.getSystemDate()) && google_type_date_pb.Date.toObject(includeInstance, f),
    account: jspb.Message.getFieldWithDefault(msg, 2, ""),
    contraAccount: jspb.Message.getFieldWithDefault(msg, 3, ""),
    contraSource: jspb.Message.getFieldWithDefault(msg, 4, ""),
    originalCusip: jspb.Message.getFieldWithDefault(msg, 5, ""),
    symbol: jspb.Message.getFieldWithDefault(msg, 6, ""),
    cusip: jspb.Message.getFieldWithDefault(msg, 7, ""),
    qty: jspb.Message.getFieldWithDefault(msg, 8, ""),
    contraQty: jspb.Message.getFieldWithDefault(msg, 9, ""),
    diffQty: jspb.Message.getFieldWithDefault(msg, 10, ""),
    type: jspb.Message.getFieldWithDefault(msg, 11, ""),
    qtyTwo: jspb.Message.getFieldWithDefault(msg, 12, ""),
    reorg: jspb.Message.getFieldWithDefault(msg, 13, 0),
    dataType: jspb.Message.getFieldWithDefault(msg, 14, "")
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
 * @return {!proto.reconpb.PositionRecon}
 */
proto.reconpb.PositionRecon.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.reconpb.PositionRecon;
  return proto.reconpb.PositionRecon.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.reconpb.PositionRecon} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.reconpb.PositionRecon}
 */
proto.reconpb.PositionRecon.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_type_date_pb.Date;
      reader.readMessage(value,google_type_date_pb.Date.deserializeBinaryFromReader);
      msg.setSystemDate(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccount(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setContraAccount(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setContraSource(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setOriginalCusip(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setSymbol(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setCusip(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setQty(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setContraQty(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setDiffQty(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setQtyTwo(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setReorg(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setDataType(value);
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
proto.reconpb.PositionRecon.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.reconpb.PositionRecon.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.reconpb.PositionRecon} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.reconpb.PositionRecon.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSystemDate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_type_date_pb.Date.serializeBinaryToWriter
    );
  }
  f = message.getAccount();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getContraAccount();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getContraSource();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getOriginalCusip();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getSymbol();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getCusip();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getQty();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getContraQty();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getDiffQty();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getQtyTwo();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getReorg();
  if (f !== 0) {
    writer.writeInt32(
      13,
      f
    );
  }
  f = message.getDataType();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
};


/**
 * optional google.type.Date system_date = 1;
 * @return {?proto.google.type.Date}
 */
proto.reconpb.PositionRecon.prototype.getSystemDate = function() {
  return /** @type{?proto.google.type.Date} */ (
    jspb.Message.getWrapperField(this, google_type_date_pb.Date, 1));
};


/**
 * @param {?proto.google.type.Date|undefined} value
 * @return {!proto.reconpb.PositionRecon} returns this
*/
proto.reconpb.PositionRecon.prototype.setSystemDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.reconpb.PositionRecon} returns this
 */
proto.reconpb.PositionRecon.prototype.clearSystemDate = function() {
  return this.setSystemDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.reconpb.PositionRecon.prototype.hasSystemDate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string account = 2;
 * @return {string}
 */
proto.reconpb.PositionRecon.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.reconpb.PositionRecon} returns this
 */
proto.reconpb.PositionRecon.prototype.setAccount = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string contra_account = 3;
 * @return {string}
 */
proto.reconpb.PositionRecon.prototype.getContraAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.reconpb.PositionRecon} returns this
 */
proto.reconpb.PositionRecon.prototype.setContraAccount = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string contra_source = 4;
 * @return {string}
 */
proto.reconpb.PositionRecon.prototype.getContraSource = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.reconpb.PositionRecon} returns this
 */
proto.reconpb.PositionRecon.prototype.setContraSource = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string original_cusip = 5;
 * @return {string}
 */
proto.reconpb.PositionRecon.prototype.getOriginalCusip = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.reconpb.PositionRecon} returns this
 */
proto.reconpb.PositionRecon.prototype.setOriginalCusip = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string symbol = 6;
 * @return {string}
 */
proto.reconpb.PositionRecon.prototype.getSymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.reconpb.PositionRecon} returns this
 */
proto.reconpb.PositionRecon.prototype.setSymbol = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string cusip = 7;
 * @return {string}
 */
proto.reconpb.PositionRecon.prototype.getCusip = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.reconpb.PositionRecon} returns this
 */
proto.reconpb.PositionRecon.prototype.setCusip = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string qty = 8;
 * @return {string}
 */
proto.reconpb.PositionRecon.prototype.getQty = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.reconpb.PositionRecon} returns this
 */
proto.reconpb.PositionRecon.prototype.setQty = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string contra_qty = 9;
 * @return {string}
 */
proto.reconpb.PositionRecon.prototype.getContraQty = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.reconpb.PositionRecon} returns this
 */
proto.reconpb.PositionRecon.prototype.setContraQty = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string diff_qty = 10;
 * @return {string}
 */
proto.reconpb.PositionRecon.prototype.getDiffQty = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.reconpb.PositionRecon} returns this
 */
proto.reconpb.PositionRecon.prototype.setDiffQty = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string type = 11;
 * @return {string}
 */
proto.reconpb.PositionRecon.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.reconpb.PositionRecon} returns this
 */
proto.reconpb.PositionRecon.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string qty_two = 12;
 * @return {string}
 */
proto.reconpb.PositionRecon.prototype.getQtyTwo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.reconpb.PositionRecon} returns this
 */
proto.reconpb.PositionRecon.prototype.setQtyTwo = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional int32 reorg = 13;
 * @return {number}
 */
proto.reconpb.PositionRecon.prototype.getReorg = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.reconpb.PositionRecon} returns this
 */
proto.reconpb.PositionRecon.prototype.setReorg = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional string data_type = 14;
 * @return {string}
 */
proto.reconpb.PositionRecon.prototype.getDataType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.reconpb.PositionRecon} returns this
 */
proto.reconpb.PositionRecon.prototype.setDataType = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
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
proto.reconpb.ListPositionReconRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.reconpb.ListPositionReconRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.reconpb.ListPositionReconRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.reconpb.ListPositionReconRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    systemDate: (f = msg.getSystemDate()) && google_type_date_pb.Date.toObject(includeInstance, f),
    account: jspb.Message.getFieldWithDefault(msg, 2, ""),
    contraAccount: jspb.Message.getFieldWithDefault(msg, 3, ""),
    contraSource: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.reconpb.ListPositionReconRequest}
 */
proto.reconpb.ListPositionReconRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.reconpb.ListPositionReconRequest;
  return proto.reconpb.ListPositionReconRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.reconpb.ListPositionReconRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.reconpb.ListPositionReconRequest}
 */
proto.reconpb.ListPositionReconRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_type_date_pb.Date;
      reader.readMessage(value,google_type_date_pb.Date.deserializeBinaryFromReader);
      msg.setSystemDate(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccount(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setContraAccount(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setContraSource(value);
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
proto.reconpb.ListPositionReconRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.reconpb.ListPositionReconRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.reconpb.ListPositionReconRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.reconpb.ListPositionReconRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSystemDate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_type_date_pb.Date.serializeBinaryToWriter
    );
  }
  f = message.getAccount();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getContraAccount();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getContraSource();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional google.type.Date system_date = 1;
 * @return {?proto.google.type.Date}
 */
proto.reconpb.ListPositionReconRequest.prototype.getSystemDate = function() {
  return /** @type{?proto.google.type.Date} */ (
    jspb.Message.getWrapperField(this, google_type_date_pb.Date, 1));
};


/**
 * @param {?proto.google.type.Date|undefined} value
 * @return {!proto.reconpb.ListPositionReconRequest} returns this
*/
proto.reconpb.ListPositionReconRequest.prototype.setSystemDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.reconpb.ListPositionReconRequest} returns this
 */
proto.reconpb.ListPositionReconRequest.prototype.clearSystemDate = function() {
  return this.setSystemDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.reconpb.ListPositionReconRequest.prototype.hasSystemDate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string account = 2;
 * @return {string}
 */
proto.reconpb.ListPositionReconRequest.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.reconpb.ListPositionReconRequest} returns this
 */
proto.reconpb.ListPositionReconRequest.prototype.setAccount = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string contra_account = 3;
 * @return {string}
 */
proto.reconpb.ListPositionReconRequest.prototype.getContraAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.reconpb.ListPositionReconRequest} returns this
 */
proto.reconpb.ListPositionReconRequest.prototype.setContraAccount = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string contra_source = 4;
 * @return {string}
 */
proto.reconpb.ListPositionReconRequest.prototype.getContraSource = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.reconpb.ListPositionReconRequest} returns this
 */
proto.reconpb.ListPositionReconRequest.prototype.setContraSource = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.reconpb.ListPositionReconResponse.repeatedFields_ = [1];



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
proto.reconpb.ListPositionReconResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.reconpb.ListPositionReconResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.reconpb.ListPositionReconResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.reconpb.ListPositionReconResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    positionReconsList: jspb.Message.toObjectList(msg.getPositionReconsList(),
    proto.reconpb.PositionRecon.toObject, includeInstance)
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
 * @return {!proto.reconpb.ListPositionReconResponse}
 */
proto.reconpb.ListPositionReconResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.reconpb.ListPositionReconResponse;
  return proto.reconpb.ListPositionReconResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.reconpb.ListPositionReconResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.reconpb.ListPositionReconResponse}
 */
proto.reconpb.ListPositionReconResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.reconpb.PositionRecon;
      reader.readMessage(value,proto.reconpb.PositionRecon.deserializeBinaryFromReader);
      msg.addPositionRecons(value);
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
proto.reconpb.ListPositionReconResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.reconpb.ListPositionReconResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.reconpb.ListPositionReconResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.reconpb.ListPositionReconResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPositionReconsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.reconpb.PositionRecon.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PositionRecon position_recons = 1;
 * @return {!Array<!proto.reconpb.PositionRecon>}
 */
proto.reconpb.ListPositionReconResponse.prototype.getPositionReconsList = function() {
  return /** @type{!Array<!proto.reconpb.PositionRecon>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.reconpb.PositionRecon, 1));
};


/**
 * @param {!Array<!proto.reconpb.PositionRecon>} value
 * @return {!proto.reconpb.ListPositionReconResponse} returns this
*/
proto.reconpb.ListPositionReconResponse.prototype.setPositionReconsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.reconpb.PositionRecon=} opt_value
 * @param {number=} opt_index
 * @return {!proto.reconpb.PositionRecon}
 */
proto.reconpb.ListPositionReconResponse.prototype.addPositionRecons = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.reconpb.PositionRecon, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.reconpb.ListPositionReconResponse} returns this
 */
proto.reconpb.ListPositionReconResponse.prototype.clearPositionReconsList = function() {
  return this.setPositionReconsList([]);
};


goog.object.extend(exports, proto.reconpb);
