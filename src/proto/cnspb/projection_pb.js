// source: proto/cnspb/projection.proto
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
goog.exportSymbol('proto.cnspb.ListProjectionDetailRequest', null, global);
goog.exportSymbol('proto.cnspb.ListProjectionDetailResponse', null, global);
goog.exportSymbol('proto.cnspb.ListProjectionRequest', null, global);
goog.exportSymbol('proto.cnspb.ListProjectionResponse', null, global);
goog.exportSymbol('proto.cnspb.Projection', null, global);
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
proto.cnspb.Projection = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cnspb.Projection, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cnspb.Projection.displayName = 'proto.cnspb.Projection';
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
proto.cnspb.ListProjectionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cnspb.ListProjectionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cnspb.ListProjectionRequest.displayName =
    'proto.cnspb.ListProjectionRequest';
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
proto.cnspb.ListProjectionResponse = function(opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.cnspb.ListProjectionResponse.repeatedFields_,
    null
  );
};
goog.inherits(proto.cnspb.ListProjectionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cnspb.ListProjectionResponse.displayName =
    'proto.cnspb.ListProjectionResponse';
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
proto.cnspb.ListProjectionDetailRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cnspb.ListProjectionDetailRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cnspb.ListProjectionDetailRequest.displayName =
    'proto.cnspb.ListProjectionDetailRequest';
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
proto.cnspb.ListProjectionDetailResponse = function(opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.cnspb.ListProjectionDetailResponse.repeatedFields_,
    null
  );
};
goog.inherits(proto.cnspb.ListProjectionDetailResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cnspb.ListProjectionDetailResponse.displayName =
    'proto.cnspb.ListProjectionDetailResponse';
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
  proto.cnspb.Projection.prototype.toObject = function(opt_includeInstance) {
    return proto.cnspb.Projection.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.cnspb.Projection} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.cnspb.Projection.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        projectionId: jspb.Message.getFieldWithDefault(msg, 1, 0),
        settleDate:
          (f = msg.getSettleDate()) &&
          google_type_date_pb.Date.toObject(includeInstance, f),
        previousClosingBalance: jspb.Message.getFieldWithDefault(msg, 3, ''),
        previousCnsSettlement: jspb.Message.getFieldWithDefault(msg, 4, ''),
        openingBalance: jspb.Message.getFieldWithDefault(msg, 5, ''),
        settlingTrades: jspb.Message.getFieldWithDefault(msg, 7, ''),
        closingBalance: jspb.Message.getFieldWithDefault(msg, 8, ''),
        settlementShortPosition: jspb.Message.getFieldWithDefault(msg, 9, ''),
        settlement: jspb.Message.getFieldWithDefault(msg, 10, ''),
        projection: jspb.Message.getFieldWithDefault(msg, 11, ''),
        settlementVsProjection: jspb.Message.getFieldWithDefault(msg, 12, ''),
        status: jspb.Message.getFieldWithDefault(msg, 13, ''),
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
 * @return {!proto.cnspb.Projection}
 */
proto.cnspb.Projection.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cnspb.Projection();
  return proto.cnspb.Projection.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cnspb.Projection} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cnspb.Projection}
 */
proto.cnspb.Projection.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {number} */ (reader.readUint32());
        msg.setProjectionId(value);
        break;
      case 2:
        var value = new google_type_date_pb.Date();
        reader.readMessage(
          value,
          google_type_date_pb.Date.deserializeBinaryFromReader
        );
        msg.setSettleDate(value);
        break;
      case 3:
        var value = /** @type {string} */ (reader.readString());
        msg.setPreviousClosingBalance(value);
        break;
      case 4:
        var value = /** @type {string} */ (reader.readString());
        msg.setPreviousCnsSettlement(value);
        break;
      case 5:
        var value = /** @type {string} */ (reader.readString());
        msg.setOpeningBalance(value);
        break;
      case 7:
        var value = /** @type {string} */ (reader.readString());
        msg.setSettlingTrades(value);
        break;
      case 8:
        var value = /** @type {string} */ (reader.readString());
        msg.setClosingBalance(value);
        break;
      case 9:
        var value = /** @type {string} */ (reader.readString());
        msg.setSettlementShortPosition(value);
        break;
      case 10:
        var value = /** @type {string} */ (reader.readString());
        msg.setSettlement(value);
        break;
      case 11:
        var value = /** @type {string} */ (reader.readString());
        msg.setProjection(value);
        break;
      case 12:
        var value = /** @type {string} */ (reader.readString());
        msg.setSettlementVsProjection(value);
        break;
      case 13:
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
proto.cnspb.Projection.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cnspb.Projection.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cnspb.Projection} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cnspb.Projection.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectionId();
  if (f !== 0) {
    writer.writeUint32(1, f);
  }
  f = message.getSettleDate();
  if (f != null) {
    writer.writeMessage(2, f, google_type_date_pb.Date.serializeBinaryToWriter);
  }
  f = message.getPreviousClosingBalance();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
  f = message.getPreviousCnsSettlement();
  if (f.length > 0) {
    writer.writeString(4, f);
  }
  f = message.getOpeningBalance();
  if (f.length > 0) {
    writer.writeString(5, f);
  }
  f = message.getSettlingTrades();
  if (f.length > 0) {
    writer.writeString(7, f);
  }
  f = message.getClosingBalance();
  if (f.length > 0) {
    writer.writeString(8, f);
  }
  f = message.getSettlementShortPosition();
  if (f.length > 0) {
    writer.writeString(9, f);
  }
  f = message.getSettlement();
  if (f.length > 0) {
    writer.writeString(10, f);
  }
  f = message.getProjection();
  if (f.length > 0) {
    writer.writeString(11, f);
  }
  f = message.getSettlementVsProjection();
  if (f.length > 0) {
    writer.writeString(12, f);
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(13, f);
  }
};

/**
 * optional uint32 projection_id = 1;
 * @return {number}
 */
proto.cnspb.Projection.prototype.getProjectionId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {number} value
 * @return {!proto.cnspb.Projection} returns this
 */
proto.cnspb.Projection.prototype.setProjectionId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};

/**
 * optional google.type.Date settle_date = 2;
 * @return {?proto.google.type.Date}
 */
proto.cnspb.Projection.prototype.getSettleDate = function() {
  return /** @type{?proto.google.type.Date} */ (jspb.Message.getWrapperField(
    this,
    google_type_date_pb.Date,
    2
  ));
};

/**
 * @param {?proto.google.type.Date|undefined} value
 * @return {!proto.cnspb.Projection} returns this
 */
proto.cnspb.Projection.prototype.setSettleDate = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.cnspb.Projection} returns this
 */
proto.cnspb.Projection.prototype.clearSettleDate = function() {
  return this.setSettleDate(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cnspb.Projection.prototype.hasSettleDate = function() {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * optional string previous_closing_balance = 3;
 * @return {string}
 */
proto.cnspb.Projection.prototype.getPreviousClosingBalance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.cnspb.Projection} returns this
 */
proto.cnspb.Projection.prototype.setPreviousClosingBalance = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};

/**
 * optional string previous_cns_settlement = 4;
 * @return {string}
 */
proto.cnspb.Projection.prototype.getPreviousCnsSettlement = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ''));
};

/**
 * @param {string} value
 * @return {!proto.cnspb.Projection} returns this
 */
proto.cnspb.Projection.prototype.setPreviousCnsSettlement = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};

/**
 * optional string opening_balance = 5;
 * @return {string}
 */
proto.cnspb.Projection.prototype.getOpeningBalance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ''));
};

/**
 * @param {string} value
 * @return {!proto.cnspb.Projection} returns this
 */
proto.cnspb.Projection.prototype.setOpeningBalance = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};

/**
 * optional string settling_trades = 7;
 * @return {string}
 */
proto.cnspb.Projection.prototype.getSettlingTrades = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ''));
};

/**
 * @param {string} value
 * @return {!proto.cnspb.Projection} returns this
 */
proto.cnspb.Projection.prototype.setSettlingTrades = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};

/**
 * optional string closing_balance = 8;
 * @return {string}
 */
proto.cnspb.Projection.prototype.getClosingBalance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ''));
};

/**
 * @param {string} value
 * @return {!proto.cnspb.Projection} returns this
 */
proto.cnspb.Projection.prototype.setClosingBalance = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};

/**
 * optional string settlement_short_position = 9;
 * @return {string}
 */
proto.cnspb.Projection.prototype.getSettlementShortPosition = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ''));
};

/**
 * @param {string} value
 * @return {!proto.cnspb.Projection} returns this
 */
proto.cnspb.Projection.prototype.setSettlementShortPosition = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};

/**
 * optional string settlement = 10;
 * @return {string}
 */
proto.cnspb.Projection.prototype.getSettlement = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ''));
};

/**
 * @param {string} value
 * @return {!proto.cnspb.Projection} returns this
 */
proto.cnspb.Projection.prototype.setSettlement = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};

/**
 * optional string projection = 11;
 * @return {string}
 */
proto.cnspb.Projection.prototype.getProjection = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ''));
};

/**
 * @param {string} value
 * @return {!proto.cnspb.Projection} returns this
 */
proto.cnspb.Projection.prototype.setProjection = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};

/**
 * optional string settlement_vs_projection = 12;
 * @return {string}
 */
proto.cnspb.Projection.prototype.getSettlementVsProjection = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ''));
};

/**
 * @param {string} value
 * @return {!proto.cnspb.Projection} returns this
 */
proto.cnspb.Projection.prototype.setSettlementVsProjection = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};

/**
 * optional string status = 13;
 * @return {string}
 */
proto.cnspb.Projection.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ''));
};

/**
 * @param {string} value
 * @return {!proto.cnspb.Projection} returns this
 */
proto.cnspb.Projection.prototype.setStatus = function(value) {
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
  proto.cnspb.ListProjectionRequest.prototype.toObject = function(
    opt_includeInstance
  ) {
    return proto.cnspb.ListProjectionRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.cnspb.ListProjectionRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.cnspb.ListProjectionRequest.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        fromDate:
          (f = msg.getFromDate()) &&
          google_type_date_pb.Date.toObject(includeInstance, f),
        toDate:
          (f = msg.getToDate()) &&
          google_type_date_pb.Date.toObject(includeInstance, f),
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
 * @return {!proto.cnspb.ListProjectionRequest}
 */
proto.cnspb.ListProjectionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cnspb.ListProjectionRequest();
  return proto.cnspb.ListProjectionRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cnspb.ListProjectionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cnspb.ListProjectionRequest}
 */
proto.cnspb.ListProjectionRequest.deserializeBinaryFromReader = function(
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new google_type_date_pb.Date();
        reader.readMessage(
          value,
          google_type_date_pb.Date.deserializeBinaryFromReader
        );
        msg.setFromDate(value);
        break;
      case 2:
        var value = new google_type_date_pb.Date();
        reader.readMessage(
          value,
          google_type_date_pb.Date.deserializeBinaryFromReader
        );
        msg.setToDate(value);
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
proto.cnspb.ListProjectionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cnspb.ListProjectionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cnspb.ListProjectionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cnspb.ListProjectionRequest.serializeBinaryToWriter = function(
  message,
  writer
) {
  var f = undefined;
  f = message.getFromDate();
  if (f != null) {
    writer.writeMessage(1, f, google_type_date_pb.Date.serializeBinaryToWriter);
  }
  f = message.getToDate();
  if (f != null) {
    writer.writeMessage(2, f, google_type_date_pb.Date.serializeBinaryToWriter);
  }
};

/**
 * optional google.type.Date from_date = 1;
 * @return {?proto.google.type.Date}
 */
proto.cnspb.ListProjectionRequest.prototype.getFromDate = function() {
  return /** @type{?proto.google.type.Date} */ (jspb.Message.getWrapperField(
    this,
    google_type_date_pb.Date,
    1
  ));
};

/**
 * @param {?proto.google.type.Date|undefined} value
 * @return {!proto.cnspb.ListProjectionRequest} returns this
 */
proto.cnspb.ListProjectionRequest.prototype.setFromDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.cnspb.ListProjectionRequest} returns this
 */
proto.cnspb.ListProjectionRequest.prototype.clearFromDate = function() {
  return this.setFromDate(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cnspb.ListProjectionRequest.prototype.hasFromDate = function() {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional google.type.Date to_date = 2;
 * @return {?proto.google.type.Date}
 */
proto.cnspb.ListProjectionRequest.prototype.getToDate = function() {
  return /** @type{?proto.google.type.Date} */ (jspb.Message.getWrapperField(
    this,
    google_type_date_pb.Date,
    2
  ));
};

/**
 * @param {?proto.google.type.Date|undefined} value
 * @return {!proto.cnspb.ListProjectionRequest} returns this
 */
proto.cnspb.ListProjectionRequest.prototype.setToDate = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.cnspb.ListProjectionRequest} returns this
 */
proto.cnspb.ListProjectionRequest.prototype.clearToDate = function() {
  return this.setToDate(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cnspb.ListProjectionRequest.prototype.hasToDate = function() {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cnspb.ListProjectionResponse.repeatedFields_ = [1];

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
  proto.cnspb.ListProjectionResponse.prototype.toObject = function(
    opt_includeInstance
  ) {
    return proto.cnspb.ListProjectionResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.cnspb.ListProjectionResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.cnspb.ListProjectionResponse.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        projectionsList: jspb.Message.toObjectList(
          msg.getProjectionsList(),
          proto.cnspb.Projection.toObject,
          includeInstance
        ),
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
 * @return {!proto.cnspb.ListProjectionResponse}
 */
proto.cnspb.ListProjectionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cnspb.ListProjectionResponse();
  return proto.cnspb.ListProjectionResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cnspb.ListProjectionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cnspb.ListProjectionResponse}
 */
proto.cnspb.ListProjectionResponse.deserializeBinaryFromReader = function(
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.cnspb.Projection();
        reader.readMessage(
          value,
          proto.cnspb.Projection.deserializeBinaryFromReader
        );
        msg.addProjections(value);
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
proto.cnspb.ListProjectionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cnspb.ListProjectionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cnspb.ListProjectionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cnspb.ListProjectionResponse.serializeBinaryToWriter = function(
  message,
  writer
) {
  var f = undefined;
  f = message.getProjectionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.cnspb.Projection.serializeBinaryToWriter
    );
  }
};

/**
 * repeated Projection projections = 1;
 * @return {!Array<!proto.cnspb.Projection>}
 */
proto.cnspb.ListProjectionResponse.prototype.getProjectionsList = function() {
  return /** @type{!Array<!proto.cnspb.Projection>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    proto.cnspb.Projection,
    1
  ));
};

/**
 * @param {!Array<!proto.cnspb.Projection>} value
 * @return {!proto.cnspb.ListProjectionResponse} returns this
 */
proto.cnspb.ListProjectionResponse.prototype.setProjectionsList = function(
  value
) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};

/**
 * @param {!proto.cnspb.Projection=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cnspb.Projection}
 */
proto.cnspb.ListProjectionResponse.prototype.addProjections = function(
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    1,
    opt_value,
    proto.cnspb.Projection,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cnspb.ListProjectionResponse} returns this
 */
proto.cnspb.ListProjectionResponse.prototype.clearProjectionsList = function() {
  return this.setProjectionsList([]);
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
  proto.cnspb.ListProjectionDetailRequest.prototype.toObject = function(
    opt_includeInstance
  ) {
    return proto.cnspb.ListProjectionDetailRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.cnspb.ListProjectionDetailRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.cnspb.ListProjectionDetailRequest.toObject = function(
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        fromDate:
          (f = msg.getFromDate()) &&
          google_type_date_pb.Date.toObject(includeInstance, f),
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
 * @return {!proto.cnspb.ListProjectionDetailRequest}
 */
proto.cnspb.ListProjectionDetailRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cnspb.ListProjectionDetailRequest();
  return proto.cnspb.ListProjectionDetailRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cnspb.ListProjectionDetailRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cnspb.ListProjectionDetailRequest}
 */
proto.cnspb.ListProjectionDetailRequest.deserializeBinaryFromReader = function(
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new google_type_date_pb.Date();
        reader.readMessage(
          value,
          google_type_date_pb.Date.deserializeBinaryFromReader
        );
        msg.setFromDate(value);
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
proto.cnspb.ListProjectionDetailRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cnspb.ListProjectionDetailRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cnspb.ListProjectionDetailRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cnspb.ListProjectionDetailRequest.serializeBinaryToWriter = function(
  message,
  writer
) {
  var f = undefined;
  f = message.getFromDate();
  if (f != null) {
    writer.writeMessage(1, f, google_type_date_pb.Date.serializeBinaryToWriter);
  }
};

/**
 * optional google.type.Date from_date = 1;
 * @return {?proto.google.type.Date}
 */
proto.cnspb.ListProjectionDetailRequest.prototype.getFromDate = function() {
  return /** @type{?proto.google.type.Date} */ (jspb.Message.getWrapperField(
    this,
    google_type_date_pb.Date,
    1
  ));
};

/**
 * @param {?proto.google.type.Date|undefined} value
 * @return {!proto.cnspb.ListProjectionDetailRequest} returns this
 */
proto.cnspb.ListProjectionDetailRequest.prototype.setFromDate = function(
  value
) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.cnspb.ListProjectionDetailRequest} returns this
 */
proto.cnspb.ListProjectionDetailRequest.prototype.clearFromDate = function() {
  return this.setFromDate(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cnspb.ListProjectionDetailRequest.prototype.hasFromDate = function() {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cnspb.ListProjectionDetailResponse.repeatedFields_ = [1];

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
  proto.cnspb.ListProjectionDetailResponse.prototype.toObject = function(
    opt_includeInstance
  ) {
    return proto.cnspb.ListProjectionDetailResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.cnspb.ListProjectionDetailResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.cnspb.ListProjectionDetailResponse.toObject = function(
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        projectionDetailsList: jspb.Message.toObjectList(
          msg.getProjectionDetailsList(),
          proto.cnspb.Projection.toObject,
          includeInstance
        ),
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
 * @return {!proto.cnspb.ListProjectionDetailResponse}
 */
proto.cnspb.ListProjectionDetailResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cnspb.ListProjectionDetailResponse();
  return proto.cnspb.ListProjectionDetailResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cnspb.ListProjectionDetailResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cnspb.ListProjectionDetailResponse}
 */
proto.cnspb.ListProjectionDetailResponse.deserializeBinaryFromReader = function(
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.cnspb.Projection();
        reader.readMessage(
          value,
          proto.cnspb.Projection.deserializeBinaryFromReader
        );
        msg.addProjectionDetails(value);
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
proto.cnspb.ListProjectionDetailResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cnspb.ListProjectionDetailResponse.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cnspb.ListProjectionDetailResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cnspb.ListProjectionDetailResponse.serializeBinaryToWriter = function(
  message,
  writer
) {
  var f = undefined;
  f = message.getProjectionDetailsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.cnspb.Projection.serializeBinaryToWriter
    );
  }
};

/**
 * repeated Projection projection_details = 1;
 * @return {!Array<!proto.cnspb.Projection>}
 */
proto.cnspb.ListProjectionDetailResponse.prototype.getProjectionDetailsList = function() {
  return /** @type{!Array<!proto.cnspb.Projection>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    proto.cnspb.Projection,
    1
  ));
};

/**
 * @param {!Array<!proto.cnspb.Projection>} value
 * @return {!proto.cnspb.ListProjectionDetailResponse} returns this
 */
proto.cnspb.ListProjectionDetailResponse.prototype.setProjectionDetailsList = function(
  value
) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};

/**
 * @param {!proto.cnspb.Projection=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cnspb.Projection}
 */
proto.cnspb.ListProjectionDetailResponse.prototype.addProjectionDetails = function(
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    1,
    opt_value,
    proto.cnspb.Projection,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cnspb.ListProjectionDetailResponse} returns this
 */
proto.cnspb.ListProjectionDetailResponse.prototype.clearProjectionDetailsList = function() {
  return this.setProjectionDetailsList([]);
};

goog.object.extend(exports, proto.cnspb);
