// source: proto/reconpb/balancerecon.proto
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
goog.exportSymbol('proto.reconpb.BalanceRecon', null, global);
goog.exportSymbol('proto.reconpb.ListBalanceReconRequest', null, global);
goog.exportSymbol('proto.reconpb.ListBalanceReconResponse', null, global);
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
proto.reconpb.BalanceRecon = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.reconpb.BalanceRecon, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.reconpb.BalanceRecon.displayName = 'proto.reconpb.BalanceRecon';
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
proto.reconpb.ListBalanceReconRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.reconpb.ListBalanceReconRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.reconpb.ListBalanceReconRequest.displayName = 'proto.reconpb.ListBalanceReconRequest';
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
proto.reconpb.ListBalanceReconResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.reconpb.ListBalanceReconResponse.repeatedFields_, null);
};
goog.inherits(proto.reconpb.ListBalanceReconResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.reconpb.ListBalanceReconResponse.displayName = 'proto.reconpb.ListBalanceReconResponse';
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
proto.reconpb.BalanceRecon.prototype.toObject = function(opt_includeInstance) {
  return proto.reconpb.BalanceRecon.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.reconpb.BalanceRecon} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.reconpb.BalanceRecon.toObject = function(includeInstance, msg) {
  var f, obj = {
    systemDate: (f = msg.getSystemDate()) && google_type_date_pb.Date.toObject(includeInstance, f),
    account: jspb.Message.getFieldWithDefault(msg, 2, ""),
    contraAccount: jspb.Message.getFieldWithDefault(msg, 3, ""),
    contraSource: jspb.Message.getFieldWithDefault(msg, 4, ""),
    amt: jspb.Message.getFieldWithDefault(msg, 5, ""),
    contraAmt: jspb.Message.getFieldWithDefault(msg, 6, ""),
    amtDiff: jspb.Message.getFieldWithDefault(msg, 7, "")
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
 * @return {!proto.reconpb.BalanceRecon}
 */
proto.reconpb.BalanceRecon.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.reconpb.BalanceRecon;
  return proto.reconpb.BalanceRecon.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.reconpb.BalanceRecon} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.reconpb.BalanceRecon}
 */
proto.reconpb.BalanceRecon.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setAmt(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setContraAmt(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setAmtDiff(value);
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
proto.reconpb.BalanceRecon.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.reconpb.BalanceRecon.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.reconpb.BalanceRecon} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.reconpb.BalanceRecon.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getAmt();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getContraAmt();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getAmtDiff();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional google.type.Date system_date = 1;
 * @return {?proto.google.type.Date}
 */
proto.reconpb.BalanceRecon.prototype.getSystemDate = function() {
  return /** @type{?proto.google.type.Date} */ (
    jspb.Message.getWrapperField(this, google_type_date_pb.Date, 1));
};


/**
 * @param {?proto.google.type.Date|undefined} value
 * @return {!proto.reconpb.BalanceRecon} returns this
*/
proto.reconpb.BalanceRecon.prototype.setSystemDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.reconpb.BalanceRecon} returns this
 */
proto.reconpb.BalanceRecon.prototype.clearSystemDate = function() {
  return this.setSystemDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.reconpb.BalanceRecon.prototype.hasSystemDate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string account = 2;
 * @return {string}
 */
proto.reconpb.BalanceRecon.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.reconpb.BalanceRecon} returns this
 */
proto.reconpb.BalanceRecon.prototype.setAccount = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string contra_account = 3;
 * @return {string}
 */
proto.reconpb.BalanceRecon.prototype.getContraAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.reconpb.BalanceRecon} returns this
 */
proto.reconpb.BalanceRecon.prototype.setContraAccount = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string contra_source = 4;
 * @return {string}
 */
proto.reconpb.BalanceRecon.prototype.getContraSource = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.reconpb.BalanceRecon} returns this
 */
proto.reconpb.BalanceRecon.prototype.setContraSource = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string amt = 5;
 * @return {string}
 */
proto.reconpb.BalanceRecon.prototype.getAmt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.reconpb.BalanceRecon} returns this
 */
proto.reconpb.BalanceRecon.prototype.setAmt = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string contra_amt = 6;
 * @return {string}
 */
proto.reconpb.BalanceRecon.prototype.getContraAmt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.reconpb.BalanceRecon} returns this
 */
proto.reconpb.BalanceRecon.prototype.setContraAmt = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string amt_diff = 7;
 * @return {string}
 */
proto.reconpb.BalanceRecon.prototype.getAmtDiff = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.reconpb.BalanceRecon} returns this
 */
proto.reconpb.BalanceRecon.prototype.setAmtDiff = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
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
proto.reconpb.ListBalanceReconRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.reconpb.ListBalanceReconRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.reconpb.ListBalanceReconRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.reconpb.ListBalanceReconRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.reconpb.ListBalanceReconRequest}
 */
proto.reconpb.ListBalanceReconRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.reconpb.ListBalanceReconRequest;
  return proto.reconpb.ListBalanceReconRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.reconpb.ListBalanceReconRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.reconpb.ListBalanceReconRequest}
 */
proto.reconpb.ListBalanceReconRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.reconpb.ListBalanceReconRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.reconpb.ListBalanceReconRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.reconpb.ListBalanceReconRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.reconpb.ListBalanceReconRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.reconpb.ListBalanceReconRequest.prototype.getSystemDate = function() {
  return /** @type{?proto.google.type.Date} */ (
    jspb.Message.getWrapperField(this, google_type_date_pb.Date, 1));
};


/**
 * @param {?proto.google.type.Date|undefined} value
 * @return {!proto.reconpb.ListBalanceReconRequest} returns this
*/
proto.reconpb.ListBalanceReconRequest.prototype.setSystemDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.reconpb.ListBalanceReconRequest} returns this
 */
proto.reconpb.ListBalanceReconRequest.prototype.clearSystemDate = function() {
  return this.setSystemDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.reconpb.ListBalanceReconRequest.prototype.hasSystemDate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string account = 2;
 * @return {string}
 */
proto.reconpb.ListBalanceReconRequest.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.reconpb.ListBalanceReconRequest} returns this
 */
proto.reconpb.ListBalanceReconRequest.prototype.setAccount = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string contra_account = 3;
 * @return {string}
 */
proto.reconpb.ListBalanceReconRequest.prototype.getContraAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.reconpb.ListBalanceReconRequest} returns this
 */
proto.reconpb.ListBalanceReconRequest.prototype.setContraAccount = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string contra_source = 4;
 * @return {string}
 */
proto.reconpb.ListBalanceReconRequest.prototype.getContraSource = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.reconpb.ListBalanceReconRequest} returns this
 */
proto.reconpb.ListBalanceReconRequest.prototype.setContraSource = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.reconpb.ListBalanceReconResponse.repeatedFields_ = [1];



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
proto.reconpb.ListBalanceReconResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.reconpb.ListBalanceReconResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.reconpb.ListBalanceReconResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.reconpb.ListBalanceReconResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    balanceReconsList: jspb.Message.toObjectList(msg.getBalanceReconsList(),
    proto.reconpb.BalanceRecon.toObject, includeInstance)
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
 * @return {!proto.reconpb.ListBalanceReconResponse}
 */
proto.reconpb.ListBalanceReconResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.reconpb.ListBalanceReconResponse;
  return proto.reconpb.ListBalanceReconResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.reconpb.ListBalanceReconResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.reconpb.ListBalanceReconResponse}
 */
proto.reconpb.ListBalanceReconResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.reconpb.BalanceRecon;
      reader.readMessage(value,proto.reconpb.BalanceRecon.deserializeBinaryFromReader);
      msg.addBalanceRecons(value);
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
proto.reconpb.ListBalanceReconResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.reconpb.ListBalanceReconResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.reconpb.ListBalanceReconResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.reconpb.ListBalanceReconResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBalanceReconsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.reconpb.BalanceRecon.serializeBinaryToWriter
    );
  }
};


/**
 * repeated BalanceRecon balance_recons = 1;
 * @return {!Array<!proto.reconpb.BalanceRecon>}
 */
proto.reconpb.ListBalanceReconResponse.prototype.getBalanceReconsList = function() {
  return /** @type{!Array<!proto.reconpb.BalanceRecon>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.reconpb.BalanceRecon, 1));
};


/**
 * @param {!Array<!proto.reconpb.BalanceRecon>} value
 * @return {!proto.reconpb.ListBalanceReconResponse} returns this
*/
proto.reconpb.ListBalanceReconResponse.prototype.setBalanceReconsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.reconpb.BalanceRecon=} opt_value
 * @param {number=} opt_index
 * @return {!proto.reconpb.BalanceRecon}
 */
proto.reconpb.ListBalanceReconResponse.prototype.addBalanceRecons = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.reconpb.BalanceRecon, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.reconpb.ListBalanceReconResponse} returns this
 */
proto.reconpb.ListBalanceReconResponse.prototype.clearBalanceReconsList = function() {
  return this.setBalanceReconsList([]);
};


goog.object.extend(exports, proto.reconpb);
