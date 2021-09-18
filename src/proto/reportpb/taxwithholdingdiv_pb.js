// source: proto/reportpb/taxwithholdingdiv.proto
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
goog.exportSymbol('proto.reportpb.ListTaxWithholdingDivRequest', null, global);
goog.exportSymbol('proto.reportpb.ListTaxWithholdingDivResponse', null, global);
goog.exportSymbol('proto.reportpb.TaxWithholdingDiv', null, global);
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
proto.reportpb.TaxWithholdingDiv = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.reportpb.TaxWithholdingDiv, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.reportpb.TaxWithholdingDiv.displayName = 'proto.reportpb.TaxWithholdingDiv';
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
proto.reportpb.ListTaxWithholdingDivRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.reportpb.ListTaxWithholdingDivRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.reportpb.ListTaxWithholdingDivRequest.displayName = 'proto.reportpb.ListTaxWithholdingDivRequest';
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
proto.reportpb.ListTaxWithholdingDivResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.reportpb.ListTaxWithholdingDivResponse.repeatedFields_, null);
};
goog.inherits(proto.reportpb.ListTaxWithholdingDivResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.reportpb.ListTaxWithholdingDivResponse.displayName = 'proto.reportpb.ListTaxWithholdingDivResponse';
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
proto.reportpb.TaxWithholdingDiv.prototype.toObject = function(opt_includeInstance) {
  return proto.reportpb.TaxWithholdingDiv.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.reportpb.TaxWithholdingDiv} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.reportpb.TaxWithholdingDiv.toObject = function(includeInstance, msg) {
  var f, obj = {
    settleDate: (f = msg.getSettleDate()) && google_type_date_pb.Date.toObject(includeInstance, f),
    correspondent: jspb.Message.getFieldWithDefault(msg, 2, ""),
    accountNo: jspb.Message.getFieldWithDefault(msg, 3, ""),
    accountName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    contraAccountNo: jspb.Message.getFieldWithDefault(msg, 5, ""),
    symbol: jspb.Message.getFieldWithDefault(msg, 6, ""),
    taxWithholding: jspb.Message.getFieldWithDefault(msg, 7, ""),
    taxCountry: jspb.Message.getFieldWithDefault(msg, 8, ""),
    description: jspb.Message.getFieldWithDefault(msg, 9, ""),
    executingVenue: jspb.Message.getFieldWithDefault(msg, 10, "")
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
 * @return {!proto.reportpb.TaxWithholdingDiv}
 */
proto.reportpb.TaxWithholdingDiv.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.reportpb.TaxWithholdingDiv;
  return proto.reportpb.TaxWithholdingDiv.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.reportpb.TaxWithholdingDiv} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.reportpb.TaxWithholdingDiv}
 */
proto.reportpb.TaxWithholdingDiv.deserializeBinaryFromReader = function(msg, reader) {
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
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setContraAccountNo(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setSymbol(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setTaxWithholding(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setTaxCountry(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setExecutingVenue(value);
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
proto.reportpb.TaxWithholdingDiv.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.reportpb.TaxWithholdingDiv.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.reportpb.TaxWithholdingDiv} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.reportpb.TaxWithholdingDiv.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getContraAccountNo();
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
  f = message.getTaxWithholding();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getTaxCountry();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getExecutingVenue();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
};


/**
 * optional google.type.Date settle_date = 1;
 * @return {?proto.google.type.Date}
 */
proto.reportpb.TaxWithholdingDiv.prototype.getSettleDate = function() {
  return /** @type{?proto.google.type.Date} */ (
    jspb.Message.getWrapperField(this, google_type_date_pb.Date, 1));
};


/**
 * @param {?proto.google.type.Date|undefined} value
 * @return {!proto.reportpb.TaxWithholdingDiv} returns this
*/
proto.reportpb.TaxWithholdingDiv.prototype.setSettleDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.reportpb.TaxWithholdingDiv} returns this
 */
proto.reportpb.TaxWithholdingDiv.prototype.clearSettleDate = function() {
  return this.setSettleDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.reportpb.TaxWithholdingDiv.prototype.hasSettleDate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string correspondent = 2;
 * @return {string}
 */
proto.reportpb.TaxWithholdingDiv.prototype.getCorrespondent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.reportpb.TaxWithholdingDiv} returns this
 */
proto.reportpb.TaxWithholdingDiv.prototype.setCorrespondent = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string account_no = 3;
 * @return {string}
 */
proto.reportpb.TaxWithholdingDiv.prototype.getAccountNo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.reportpb.TaxWithholdingDiv} returns this
 */
proto.reportpb.TaxWithholdingDiv.prototype.setAccountNo = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string account_name = 4;
 * @return {string}
 */
proto.reportpb.TaxWithholdingDiv.prototype.getAccountName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.reportpb.TaxWithholdingDiv} returns this
 */
proto.reportpb.TaxWithholdingDiv.prototype.setAccountName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string contra_account_no = 5;
 * @return {string}
 */
proto.reportpb.TaxWithholdingDiv.prototype.getContraAccountNo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.reportpb.TaxWithholdingDiv} returns this
 */
proto.reportpb.TaxWithholdingDiv.prototype.setContraAccountNo = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string symbol = 6;
 * @return {string}
 */
proto.reportpb.TaxWithholdingDiv.prototype.getSymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.reportpb.TaxWithholdingDiv} returns this
 */
proto.reportpb.TaxWithholdingDiv.prototype.setSymbol = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string tax_withholding = 7;
 * @return {string}
 */
proto.reportpb.TaxWithholdingDiv.prototype.getTaxWithholding = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.reportpb.TaxWithholdingDiv} returns this
 */
proto.reportpb.TaxWithholdingDiv.prototype.setTaxWithholding = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string tax_country = 8;
 * @return {string}
 */
proto.reportpb.TaxWithholdingDiv.prototype.getTaxCountry = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.reportpb.TaxWithholdingDiv} returns this
 */
proto.reportpb.TaxWithholdingDiv.prototype.setTaxCountry = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string description = 9;
 * @return {string}
 */
proto.reportpb.TaxWithholdingDiv.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.reportpb.TaxWithholdingDiv} returns this
 */
proto.reportpb.TaxWithholdingDiv.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string executing_venue = 10;
 * @return {string}
 */
proto.reportpb.TaxWithholdingDiv.prototype.getExecutingVenue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.reportpb.TaxWithholdingDiv} returns this
 */
proto.reportpb.TaxWithholdingDiv.prototype.setExecutingVenue = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
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
proto.reportpb.ListTaxWithholdingDivRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.reportpb.ListTaxWithholdingDivRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.reportpb.ListTaxWithholdingDivRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.reportpb.ListTaxWithholdingDivRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    fromDate: (f = msg.getFromDate()) && google_type_date_pb.Date.toObject(includeInstance, f),
    toDate: (f = msg.getToDate()) && google_type_date_pb.Date.toObject(includeInstance, f),
    correspondent: jspb.Message.getFieldWithDefault(msg, 3, ""),
    accountNo: jspb.Message.getFieldWithDefault(msg, 4, ""),
    accountName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    taxCountry: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.reportpb.ListTaxWithholdingDivRequest}
 */
proto.reportpb.ListTaxWithholdingDivRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.reportpb.ListTaxWithholdingDivRequest;
  return proto.reportpb.ListTaxWithholdingDivRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.reportpb.ListTaxWithholdingDivRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.reportpb.ListTaxWithholdingDivRequest}
 */
proto.reportpb.ListTaxWithholdingDivRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setAccountNo(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountName(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setTaxCountry(value);
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
proto.reportpb.ListTaxWithholdingDivRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.reportpb.ListTaxWithholdingDivRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.reportpb.ListTaxWithholdingDivRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.reportpb.ListTaxWithholdingDivRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getAccountNo();
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
  f = message.getTaxCountry();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional google.type.Date from_date = 1;
 * @return {?proto.google.type.Date}
 */
proto.reportpb.ListTaxWithholdingDivRequest.prototype.getFromDate = function() {
  return /** @type{?proto.google.type.Date} */ (
    jspb.Message.getWrapperField(this, google_type_date_pb.Date, 1));
};


/**
 * @param {?proto.google.type.Date|undefined} value
 * @return {!proto.reportpb.ListTaxWithholdingDivRequest} returns this
*/
proto.reportpb.ListTaxWithholdingDivRequest.prototype.setFromDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.reportpb.ListTaxWithholdingDivRequest} returns this
 */
proto.reportpb.ListTaxWithholdingDivRequest.prototype.clearFromDate = function() {
  return this.setFromDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.reportpb.ListTaxWithholdingDivRequest.prototype.hasFromDate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.type.Date to_date = 2;
 * @return {?proto.google.type.Date}
 */
proto.reportpb.ListTaxWithholdingDivRequest.prototype.getToDate = function() {
  return /** @type{?proto.google.type.Date} */ (
    jspb.Message.getWrapperField(this, google_type_date_pb.Date, 2));
};


/**
 * @param {?proto.google.type.Date|undefined} value
 * @return {!proto.reportpb.ListTaxWithholdingDivRequest} returns this
*/
proto.reportpb.ListTaxWithholdingDivRequest.prototype.setToDate = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.reportpb.ListTaxWithholdingDivRequest} returns this
 */
proto.reportpb.ListTaxWithholdingDivRequest.prototype.clearToDate = function() {
  return this.setToDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.reportpb.ListTaxWithholdingDivRequest.prototype.hasToDate = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string correspondent = 3;
 * @return {string}
 */
proto.reportpb.ListTaxWithholdingDivRequest.prototype.getCorrespondent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.reportpb.ListTaxWithholdingDivRequest} returns this
 */
proto.reportpb.ListTaxWithholdingDivRequest.prototype.setCorrespondent = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string account_no = 4;
 * @return {string}
 */
proto.reportpb.ListTaxWithholdingDivRequest.prototype.getAccountNo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.reportpb.ListTaxWithholdingDivRequest} returns this
 */
proto.reportpb.ListTaxWithholdingDivRequest.prototype.setAccountNo = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string account_name = 5;
 * @return {string}
 */
proto.reportpb.ListTaxWithholdingDivRequest.prototype.getAccountName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.reportpb.ListTaxWithholdingDivRequest} returns this
 */
proto.reportpb.ListTaxWithholdingDivRequest.prototype.setAccountName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string tax_country = 6;
 * @return {string}
 */
proto.reportpb.ListTaxWithholdingDivRequest.prototype.getTaxCountry = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.reportpb.ListTaxWithholdingDivRequest} returns this
 */
proto.reportpb.ListTaxWithholdingDivRequest.prototype.setTaxCountry = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.reportpb.ListTaxWithholdingDivResponse.repeatedFields_ = [1];



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
proto.reportpb.ListTaxWithholdingDivResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.reportpb.ListTaxWithholdingDivResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.reportpb.ListTaxWithholdingDivResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.reportpb.ListTaxWithholdingDivResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    taxWithholdingsList: jspb.Message.toObjectList(msg.getTaxWithholdingsList(),
    proto.reportpb.TaxWithholdingDiv.toObject, includeInstance)
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
 * @return {!proto.reportpb.ListTaxWithholdingDivResponse}
 */
proto.reportpb.ListTaxWithholdingDivResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.reportpb.ListTaxWithholdingDivResponse;
  return proto.reportpb.ListTaxWithholdingDivResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.reportpb.ListTaxWithholdingDivResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.reportpb.ListTaxWithholdingDivResponse}
 */
proto.reportpb.ListTaxWithholdingDivResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.reportpb.TaxWithholdingDiv;
      reader.readMessage(value,proto.reportpb.TaxWithholdingDiv.deserializeBinaryFromReader);
      msg.addTaxWithholdings(value);
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
proto.reportpb.ListTaxWithholdingDivResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.reportpb.ListTaxWithholdingDivResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.reportpb.ListTaxWithholdingDivResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.reportpb.ListTaxWithholdingDivResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTaxWithholdingsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.reportpb.TaxWithholdingDiv.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TaxWithholdingDiv tax_withholdings = 1;
 * @return {!Array<!proto.reportpb.TaxWithholdingDiv>}
 */
proto.reportpb.ListTaxWithholdingDivResponse.prototype.getTaxWithholdingsList = function() {
  return /** @type{!Array<!proto.reportpb.TaxWithholdingDiv>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.reportpb.TaxWithholdingDiv, 1));
};


/**
 * @param {!Array<!proto.reportpb.TaxWithholdingDiv>} value
 * @return {!proto.reportpb.ListTaxWithholdingDivResponse} returns this
*/
proto.reportpb.ListTaxWithholdingDivResponse.prototype.setTaxWithholdingsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.reportpb.TaxWithholdingDiv=} opt_value
 * @param {number=} opt_index
 * @return {!proto.reportpb.TaxWithholdingDiv}
 */
proto.reportpb.ListTaxWithholdingDivResponse.prototype.addTaxWithholdings = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.reportpb.TaxWithholdingDiv, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.reportpb.ListTaxWithholdingDivResponse} returns this
 */
proto.reportpb.ListTaxWithholdingDivResponse.prototype.clearTaxWithholdingsList = function() {
  return this.setTaxWithholdingsList([]);
};


goog.object.extend(exports, proto.reportpb);
