// source: proto/surveillancepb/ofac.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_type_date_pb = require('../../google/type/date_pb.js');
goog.object.extend(proto, google_type_date_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var proto_utilspb_pagination_pb = require('../../proto/utilspb/pagination_pb.js');
goog.object.extend(proto, proto_utilspb_pagination_pb);
goog.exportSymbol('proto.surveillancepb.ListOfacRequest', null, global);
goog.exportSymbol('proto.surveillancepb.ListOfacResponse', null, global);
goog.exportSymbol('proto.surveillancepb.Ofac', null, global);
goog.exportSymbol('proto.surveillancepb.UpdateOfacResponse', null, global);
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
proto.surveillancepb.Ofac = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.surveillancepb.Ofac, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.surveillancepb.Ofac.displayName = 'proto.surveillancepb.Ofac';
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
proto.surveillancepb.UpdateOfacResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.surveillancepb.UpdateOfacResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.surveillancepb.UpdateOfacResponse.displayName = 'proto.surveillancepb.UpdateOfacResponse';
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
proto.surveillancepb.ListOfacRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.surveillancepb.ListOfacRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.surveillancepb.ListOfacRequest.displayName = 'proto.surveillancepb.ListOfacRequest';
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
proto.surveillancepb.ListOfacResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.surveillancepb.ListOfacResponse.repeatedFields_, null);
};
goog.inherits(proto.surveillancepb.ListOfacResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.surveillancepb.ListOfacResponse.displayName = 'proto.surveillancepb.ListOfacResponse';
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
proto.surveillancepb.Ofac.prototype.toObject = function(opt_includeInstance) {
  return proto.surveillancepb.Ofac.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.surveillancepb.Ofac} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.surveillancepb.Ofac.toObject = function(includeInstance, msg) {
  var f, obj = {
    ofacId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    accountId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    firstName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    middleName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    lastName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    dateOfBirth: (f = msg.getDateOfBirth()) && google_type_date_pb.Date.toObject(includeInstance, f),
    citizenship: jspb.Message.getFieldWithDefault(msg, 7, ""),
    id: jspb.Message.getFieldWithDefault(msg, 8, ""),
    status: jspb.Message.getFieldWithDefault(msg, 9, ""),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    ofacStatus: jspb.Message.getFieldWithDefault(msg, 11, ""),
    ofacDate: (f = msg.getOfacDate()) && google_type_date_pb.Date.toObject(includeInstance, f)
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
 * @return {!proto.surveillancepb.Ofac}
 */
proto.surveillancepb.Ofac.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.surveillancepb.Ofac;
  return proto.surveillancepb.Ofac.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.surveillancepb.Ofac} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.surveillancepb.Ofac}
 */
proto.surveillancepb.Ofac.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOfacId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAccountId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMiddleName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastName(value);
      break;
    case 6:
      var value = new google_type_date_pb.Date;
      reader.readMessage(value,google_type_date_pb.Date.deserializeBinaryFromReader);
      msg.setDateOfBirth(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setCitizenship(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 10:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setOfacStatus(value);
      break;
    case 12:
      var value = new google_type_date_pb.Date;
      reader.readMessage(value,google_type_date_pb.Date.deserializeBinaryFromReader);
      msg.setOfacDate(value);
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
proto.surveillancepb.Ofac.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.surveillancepb.Ofac.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.surveillancepb.Ofac} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.surveillancepb.Ofac.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOfacId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getAccountId();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getFirstName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMiddleName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getLastName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getDateOfBirth();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_type_date_pb.Date.serializeBinaryToWriter
    );
  }
  f = message.getCitizenship();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getOfacStatus();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getOfacDate();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      google_type_date_pb.Date.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 ofac_id = 1;
 * @return {number}
 */
proto.surveillancepb.Ofac.prototype.getOfacId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.surveillancepb.Ofac} returns this
 */
proto.surveillancepb.Ofac.prototype.setOfacId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 account_id = 2;
 * @return {number}
 */
proto.surveillancepb.Ofac.prototype.getAccountId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.surveillancepb.Ofac} returns this
 */
proto.surveillancepb.Ofac.prototype.setAccountId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string first_name = 3;
 * @return {string}
 */
proto.surveillancepb.Ofac.prototype.getFirstName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.surveillancepb.Ofac} returns this
 */
proto.surveillancepb.Ofac.prototype.setFirstName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string middle_name = 4;
 * @return {string}
 */
proto.surveillancepb.Ofac.prototype.getMiddleName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.surveillancepb.Ofac} returns this
 */
proto.surveillancepb.Ofac.prototype.setMiddleName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string last_name = 5;
 * @return {string}
 */
proto.surveillancepb.Ofac.prototype.getLastName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.surveillancepb.Ofac} returns this
 */
proto.surveillancepb.Ofac.prototype.setLastName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional google.type.Date date_of_birth = 6;
 * @return {?proto.google.type.Date}
 */
proto.surveillancepb.Ofac.prototype.getDateOfBirth = function() {
  return /** @type{?proto.google.type.Date} */ (
    jspb.Message.getWrapperField(this, google_type_date_pb.Date, 6));
};


/**
 * @param {?proto.google.type.Date|undefined} value
 * @return {!proto.surveillancepb.Ofac} returns this
*/
proto.surveillancepb.Ofac.prototype.setDateOfBirth = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.surveillancepb.Ofac} returns this
 */
proto.surveillancepb.Ofac.prototype.clearDateOfBirth = function() {
  return this.setDateOfBirth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.surveillancepb.Ofac.prototype.hasDateOfBirth = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string citizenship = 7;
 * @return {string}
 */
proto.surveillancepb.Ofac.prototype.getCitizenship = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.surveillancepb.Ofac} returns this
 */
proto.surveillancepb.Ofac.prototype.setCitizenship = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string id = 8;
 * @return {string}
 */
proto.surveillancepb.Ofac.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.surveillancepb.Ofac} returns this
 */
proto.surveillancepb.Ofac.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string status = 9;
 * @return {string}
 */
proto.surveillancepb.Ofac.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.surveillancepb.Ofac} returns this
 */
proto.surveillancepb.Ofac.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 10;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.surveillancepb.Ofac.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 10));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.surveillancepb.Ofac} returns this
*/
proto.surveillancepb.Ofac.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.surveillancepb.Ofac} returns this
 */
proto.surveillancepb.Ofac.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.surveillancepb.Ofac.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional string ofac_status = 11;
 * @return {string}
 */
proto.surveillancepb.Ofac.prototype.getOfacStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.surveillancepb.Ofac} returns this
 */
proto.surveillancepb.Ofac.prototype.setOfacStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional google.type.Date ofac_date = 12;
 * @return {?proto.google.type.Date}
 */
proto.surveillancepb.Ofac.prototype.getOfacDate = function() {
  return /** @type{?proto.google.type.Date} */ (
    jspb.Message.getWrapperField(this, google_type_date_pb.Date, 12));
};


/**
 * @param {?proto.google.type.Date|undefined} value
 * @return {!proto.surveillancepb.Ofac} returns this
*/
proto.surveillancepb.Ofac.prototype.setOfacDate = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.surveillancepb.Ofac} returns this
 */
proto.surveillancepb.Ofac.prototype.clearOfacDate = function() {
  return this.setOfacDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.surveillancepb.Ofac.prototype.hasOfacDate = function() {
  return jspb.Message.getField(this, 12) != null;
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
proto.surveillancepb.UpdateOfacResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.surveillancepb.UpdateOfacResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.surveillancepb.UpdateOfacResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.surveillancepb.UpdateOfacResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    ofac: (f = msg.getOfac()) && proto.surveillancepb.Ofac.toObject(includeInstance, f)
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
 * @return {!proto.surveillancepb.UpdateOfacResponse}
 */
proto.surveillancepb.UpdateOfacResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.surveillancepb.UpdateOfacResponse;
  return proto.surveillancepb.UpdateOfacResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.surveillancepb.UpdateOfacResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.surveillancepb.UpdateOfacResponse}
 */
proto.surveillancepb.UpdateOfacResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.surveillancepb.Ofac;
      reader.readMessage(value,proto.surveillancepb.Ofac.deserializeBinaryFromReader);
      msg.setOfac(value);
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
proto.surveillancepb.UpdateOfacResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.surveillancepb.UpdateOfacResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.surveillancepb.UpdateOfacResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.surveillancepb.UpdateOfacResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOfac();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.surveillancepb.Ofac.serializeBinaryToWriter
    );
  }
};


/**
 * optional Ofac ofac = 1;
 * @return {?proto.surveillancepb.Ofac}
 */
proto.surveillancepb.UpdateOfacResponse.prototype.getOfac = function() {
  return /** @type{?proto.surveillancepb.Ofac} */ (
    jspb.Message.getWrapperField(this, proto.surveillancepb.Ofac, 1));
};


/**
 * @param {?proto.surveillancepb.Ofac|undefined} value
 * @return {!proto.surveillancepb.UpdateOfacResponse} returns this
*/
proto.surveillancepb.UpdateOfacResponse.prototype.setOfac = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.surveillancepb.UpdateOfacResponse} returns this
 */
proto.surveillancepb.UpdateOfacResponse.prototype.clearOfac = function() {
  return this.setOfac(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.surveillancepb.UpdateOfacResponse.prototype.hasOfac = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.surveillancepb.ListOfacRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.surveillancepb.ListOfacRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.surveillancepb.ListOfacRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.surveillancepb.ListOfacRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    firstName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    lastName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    status: jspb.Message.getFieldWithDefault(msg, 3, ""),
    ofacStatus: jspb.Message.getFieldWithDefault(msg, 4, ""),
    pagination: (f = msg.getPagination()) && proto_utilspb_pagination_pb.Pagination.toObject(includeInstance, f)
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
 * @return {!proto.surveillancepb.ListOfacRequest}
 */
proto.surveillancepb.ListOfacRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.surveillancepb.ListOfacRequest;
  return proto.surveillancepb.ListOfacRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.surveillancepb.ListOfacRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.surveillancepb.ListOfacRequest}
 */
proto.surveillancepb.ListOfacRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setOfacStatus(value);
      break;
    case 5:
      var value = new proto_utilspb_pagination_pb.Pagination;
      reader.readMessage(value,proto_utilspb_pagination_pb.Pagination.deserializeBinaryFromReader);
      msg.setPagination(value);
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
proto.surveillancepb.ListOfacRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.surveillancepb.ListOfacRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.surveillancepb.ListOfacRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.surveillancepb.ListOfacRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFirstName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLastName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getOfacStatus();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto_utilspb_pagination_pb.Pagination.serializeBinaryToWriter
    );
  }
};


/**
 * optional string first_name = 1;
 * @return {string}
 */
proto.surveillancepb.ListOfacRequest.prototype.getFirstName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.surveillancepb.ListOfacRequest} returns this
 */
proto.surveillancepb.ListOfacRequest.prototype.setFirstName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string last_name = 2;
 * @return {string}
 */
proto.surveillancepb.ListOfacRequest.prototype.getLastName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.surveillancepb.ListOfacRequest} returns this
 */
proto.surveillancepb.ListOfacRequest.prototype.setLastName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string status = 3;
 * @return {string}
 */
proto.surveillancepb.ListOfacRequest.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.surveillancepb.ListOfacRequest} returns this
 */
proto.surveillancepb.ListOfacRequest.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string ofac_status = 4;
 * @return {string}
 */
proto.surveillancepb.ListOfacRequest.prototype.getOfacStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.surveillancepb.ListOfacRequest} returns this
 */
proto.surveillancepb.ListOfacRequest.prototype.setOfacStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional utilspb.Pagination pagination = 5;
 * @return {?proto.utilspb.Pagination}
 */
proto.surveillancepb.ListOfacRequest.prototype.getPagination = function() {
  return /** @type{?proto.utilspb.Pagination} */ (
    jspb.Message.getWrapperField(this, proto_utilspb_pagination_pb.Pagination, 5));
};


/**
 * @param {?proto.utilspb.Pagination|undefined} value
 * @return {!proto.surveillancepb.ListOfacRequest} returns this
*/
proto.surveillancepb.ListOfacRequest.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.surveillancepb.ListOfacRequest} returns this
 */
proto.surveillancepb.ListOfacRequest.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.surveillancepb.ListOfacRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.surveillancepb.ListOfacResponse.repeatedFields_ = [1];



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
proto.surveillancepb.ListOfacResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.surveillancepb.ListOfacResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.surveillancepb.ListOfacResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.surveillancepb.ListOfacResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    ofacsList: jspb.Message.toObjectList(msg.getOfacsList(),
    proto.surveillancepb.Ofac.toObject, includeInstance)
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
 * @return {!proto.surveillancepb.ListOfacResponse}
 */
proto.surveillancepb.ListOfacResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.surveillancepb.ListOfacResponse;
  return proto.surveillancepb.ListOfacResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.surveillancepb.ListOfacResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.surveillancepb.ListOfacResponse}
 */
proto.surveillancepb.ListOfacResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.surveillancepb.Ofac;
      reader.readMessage(value,proto.surveillancepb.Ofac.deserializeBinaryFromReader);
      msg.addOfacs(value);
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
proto.surveillancepb.ListOfacResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.surveillancepb.ListOfacResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.surveillancepb.ListOfacResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.surveillancepb.ListOfacResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOfacsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.surveillancepb.Ofac.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Ofac ofacs = 1;
 * @return {!Array<!proto.surveillancepb.Ofac>}
 */
proto.surveillancepb.ListOfacResponse.prototype.getOfacsList = function() {
  return /** @type{!Array<!proto.surveillancepb.Ofac>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.surveillancepb.Ofac, 1));
};


/**
 * @param {!Array<!proto.surveillancepb.Ofac>} value
 * @return {!proto.surveillancepb.ListOfacResponse} returns this
*/
proto.surveillancepb.ListOfacResponse.prototype.setOfacsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.surveillancepb.Ofac=} opt_value
 * @param {number=} opt_index
 * @return {!proto.surveillancepb.Ofac}
 */
proto.surveillancepb.ListOfacResponse.prototype.addOfacs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.surveillancepb.Ofac, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.surveillancepb.ListOfacResponse} returns this
 */
proto.surveillancepb.ListOfacResponse.prototype.clearOfacsList = function() {
  return this.setOfacsList([]);
};


goog.object.extend(exports, proto.surveillancepb);
