// source: proto/apipb/identification.proto
/**
 * @fileoverview
 * @enhanceable
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

goog.exportSymbol('proto.apipb.ApiIdentification', null, global);
goog.exportSymbol('proto.apipb.ListApiIdentificationRequest', null, global);
goog.exportSymbol('proto.apipb.ListApiIdentificationResponse', null, global);
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
proto.apipb.ApiIdentification = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apipb.ApiIdentification, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apipb.ApiIdentification.displayName = 'proto.apipb.ApiIdentification';
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
proto.apipb.ListApiIdentificationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apipb.ListApiIdentificationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apipb.ListApiIdentificationRequest.displayName = 'proto.apipb.ListApiIdentificationRequest';
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
proto.apipb.ListApiIdentificationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.apipb.ListApiIdentificationResponse.repeatedFields_, null);
};
goog.inherits(proto.apipb.ListApiIdentificationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apipb.ListApiIdentificationResponse.displayName = 'proto.apipb.ListApiIdentificationResponse';
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
proto.apipb.ApiIdentification.prototype.toObject = function(opt_includeInstance) {
  return proto.apipb.ApiIdentification.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apipb.ApiIdentification} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apipb.ApiIdentification.toObject = function(includeInstance, msg) {
  var f, obj = {
    identificationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    ownerId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    brokerId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    identificationTypeId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    identificationTypeLabel: jspb.Message.getFieldWithDefault(msg, 5, ""),
    frontUrl: jspb.Message.getFieldWithDefault(msg, 6, ""),
    backUrl: jspb.Message.getFieldWithDefault(msg, 7, ""),
    isTwoSided: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    countryOfIssuance: jspb.Message.getFieldWithDefault(msg, 9, "")
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
 * @return {!proto.apipb.ApiIdentification}
 */
proto.apipb.ApiIdentification.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apipb.ApiIdentification;
  return proto.apipb.ApiIdentification.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apipb.ApiIdentification} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apipb.ApiIdentification}
 */
proto.apipb.ApiIdentification.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentificationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwnerId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBrokerId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentificationTypeId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentificationTypeLabel(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setFrontUrl(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setBackUrl(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsTwoSided(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountryOfIssuance(value);
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
proto.apipb.ApiIdentification.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apipb.ApiIdentification.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apipb.ApiIdentification} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apipb.ApiIdentification.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdentificationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOwnerId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBrokerId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIdentificationTypeId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getIdentificationTypeLabel();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getFrontUrl();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getBackUrl();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getIsTwoSided();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getCountryOfIssuance();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional string identification_id = 1;
 * @return {string}
 */
proto.apipb.ApiIdentification.prototype.getIdentificationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.apipb.ApiIdentification} returns this
 */
proto.apipb.ApiIdentification.prototype.setIdentificationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string owner_id = 2;
 * @return {string}
 */
proto.apipb.ApiIdentification.prototype.getOwnerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.apipb.ApiIdentification} returns this
 */
proto.apipb.ApiIdentification.prototype.setOwnerId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string broker_id = 3;
 * @return {string}
 */
proto.apipb.ApiIdentification.prototype.getBrokerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.apipb.ApiIdentification} returns this
 */
proto.apipb.ApiIdentification.prototype.setBrokerId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string identification_type_id = 4;
 * @return {string}
 */
proto.apipb.ApiIdentification.prototype.getIdentificationTypeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.apipb.ApiIdentification} returns this
 */
proto.apipb.ApiIdentification.prototype.setIdentificationTypeId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string identification_type_label = 5;
 * @return {string}
 */
proto.apipb.ApiIdentification.prototype.getIdentificationTypeLabel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.apipb.ApiIdentification} returns this
 */
proto.apipb.ApiIdentification.prototype.setIdentificationTypeLabel = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string front_url = 6;
 * @return {string}
 */
proto.apipb.ApiIdentification.prototype.getFrontUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.apipb.ApiIdentification} returns this
 */
proto.apipb.ApiIdentification.prototype.setFrontUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string back_url = 7;
 * @return {string}
 */
proto.apipb.ApiIdentification.prototype.getBackUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.apipb.ApiIdentification} returns this
 */
proto.apipb.ApiIdentification.prototype.setBackUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional bool is_two_sided = 8;
 * @return {boolean}
 */
proto.apipb.ApiIdentification.prototype.getIsTwoSided = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apipb.ApiIdentification} returns this
 */
proto.apipb.ApiIdentification.prototype.setIsTwoSided = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional string country_of_issuance = 9;
 * @return {string}
 */
proto.apipb.ApiIdentification.prototype.getCountryOfIssuance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.apipb.ApiIdentification} returns this
 */
proto.apipb.ApiIdentification.prototype.setCountryOfIssuance = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
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
proto.apipb.ListApiIdentificationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.apipb.ListApiIdentificationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apipb.ListApiIdentificationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apipb.ListApiIdentificationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    ownerId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.apipb.ListApiIdentificationRequest}
 */
proto.apipb.ListApiIdentificationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apipb.ListApiIdentificationRequest;
  return proto.apipb.ListApiIdentificationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apipb.ListApiIdentificationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apipb.ListApiIdentificationRequest}
 */
proto.apipb.ListApiIdentificationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwnerId(value);
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
proto.apipb.ListApiIdentificationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apipb.ListApiIdentificationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apipb.ListApiIdentificationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apipb.ListApiIdentificationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOwnerId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string owner_id = 1;
 * @return {string}
 */
proto.apipb.ListApiIdentificationRequest.prototype.getOwnerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.apipb.ListApiIdentificationRequest} returns this
 */
proto.apipb.ListApiIdentificationRequest.prototype.setOwnerId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.apipb.ListApiIdentificationResponse.repeatedFields_ = [1];



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
proto.apipb.ListApiIdentificationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.apipb.ListApiIdentificationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apipb.ListApiIdentificationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apipb.ListApiIdentificationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    apiIdentificationsList: jspb.Message.toObjectList(msg.getApiIdentificationsList(),
    proto.apipb.ApiIdentification.toObject, includeInstance)
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
 * @return {!proto.apipb.ListApiIdentificationResponse}
 */
proto.apipb.ListApiIdentificationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apipb.ListApiIdentificationResponse;
  return proto.apipb.ListApiIdentificationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apipb.ListApiIdentificationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apipb.ListApiIdentificationResponse}
 */
proto.apipb.ListApiIdentificationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.apipb.ApiIdentification;
      reader.readMessage(value,proto.apipb.ApiIdentification.deserializeBinaryFromReader);
      msg.addApiIdentifications(value);
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
proto.apipb.ListApiIdentificationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apipb.ListApiIdentificationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apipb.ListApiIdentificationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apipb.ListApiIdentificationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getApiIdentificationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.apipb.ApiIdentification.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ApiIdentification api_identifications = 1;
 * @return {!Array<!proto.apipb.ApiIdentification>}
 */
proto.apipb.ListApiIdentificationResponse.prototype.getApiIdentificationsList = function() {
  return /** @type{!Array<!proto.apipb.ApiIdentification>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.apipb.ApiIdentification, 1));
};


/**
 * @param {!Array<!proto.apipb.ApiIdentification>} value
 * @return {!proto.apipb.ListApiIdentificationResponse} returns this
*/
proto.apipb.ListApiIdentificationResponse.prototype.setApiIdentificationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.apipb.ApiIdentification=} opt_value
 * @param {number=} opt_index
 * @return {!proto.apipb.ApiIdentification}
 */
proto.apipb.ListApiIdentificationResponse.prototype.addApiIdentifications = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.apipb.ApiIdentification, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apipb.ListApiIdentificationResponse} returns this
 */
proto.apipb.ListApiIdentificationResponse.prototype.clearApiIdentificationsList = function() {
  return this.setApiIdentificationsList([]);
};


goog.object.extend(exports, proto.apipb);
