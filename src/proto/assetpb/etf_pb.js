// source: proto/assetpb/etf.proto
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

goog.exportSymbol('proto.proto.CreateEtfResponse', null, global);
goog.exportSymbol('proto.proto.Etf', null, global);
goog.exportSymbol('proto.proto.ListEtfRequest', null, global);
goog.exportSymbol('proto.proto.ListEtfResponse', null, global);
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
proto.proto.Etf = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.Etf, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.Etf.displayName = 'proto.proto.Etf';
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
proto.proto.ListEtfRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ListEtfRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ListEtfRequest.displayName = 'proto.proto.ListEtfRequest';
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
proto.proto.CreateEtfResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.CreateEtfResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.CreateEtfResponse.displayName = 'proto.proto.CreateEtfResponse';
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
proto.proto.ListEtfResponse = function(opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.proto.ListEtfResponse.repeatedFields_,
    null
  );
};
goog.inherits(proto.proto.ListEtfResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ListEtfResponse.displayName = 'proto.proto.ListEtfResponse';
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
  proto.proto.Etf.prototype.toObject = function(opt_includeInstance) {
    return proto.proto.Etf.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.Etf} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.Etf.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        symbol: jspb.Message.getFieldWithDefault(msg, 1, ''),
        cusip: jspb.Message.getFieldWithDefault(msg, 2, ''),
        symbolDescription: jspb.Message.getFieldWithDefault(msg, 3, ''),
        inverse: jspb.Message.getFieldWithDefault(msg, 4, ''),
        leveragedFactor: jspb.Message.getFieldWithDefault(msg, 5, ''),
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
 * @return {!proto.proto.Etf}
 */
proto.proto.Etf.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.Etf();
  return proto.proto.Etf.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.Etf} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.Etf}
 */
proto.proto.Etf.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setSymbol(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setCusip(value);
        break;
      case 3:
        var value = /** @type {string} */ (reader.readString());
        msg.setSymbolDescription(value);
        break;
      case 4:
        var value = /** @type {string} */ (reader.readString());
        msg.setInverse(value);
        break;
      case 5:
        var value = /** @type {string} */ (reader.readString());
        msg.setLeveragedFactor(value);
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
proto.proto.Etf.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.Etf.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.Etf} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.Etf.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSymbol();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getCusip();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getSymbolDescription();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
  f = message.getInverse();
  if (f.length > 0) {
    writer.writeString(4, f);
  }
  f = message.getLeveragedFactor();
  if (f.length > 0) {
    writer.writeString(5, f);
  }
};

/**
 * optional string symbol = 1;
 * @return {string}
 */
proto.proto.Etf.prototype.getSymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.Etf} returns this
 */
proto.proto.Etf.prototype.setSymbol = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string cusip = 2;
 * @return {string}
 */
proto.proto.Etf.prototype.getCusip = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.Etf} returns this
 */
proto.proto.Etf.prototype.setCusip = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional string symbol_description = 3;
 * @return {string}
 */
proto.proto.Etf.prototype.getSymbolDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.Etf} returns this
 */
proto.proto.Etf.prototype.setSymbolDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};

/**
 * optional string inverse = 4;
 * @return {string}
 */
proto.proto.Etf.prototype.getInverse = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.Etf} returns this
 */
proto.proto.Etf.prototype.setInverse = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};

/**
 * optional string leveraged_factor = 5;
 * @return {string}
 */
proto.proto.Etf.prototype.getLeveragedFactor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.Etf} returns this
 */
proto.proto.Etf.prototype.setLeveragedFactor = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
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
  proto.proto.ListEtfRequest.prototype.toObject = function(
    opt_includeInstance
  ) {
    return proto.proto.ListEtfRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ListEtfRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ListEtfRequest.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        symbol: jspb.Message.getFieldWithDefault(msg, 1, ''),
        cusip: jspb.Message.getFieldWithDefault(msg, 2, ''),
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
 * @return {!proto.proto.ListEtfRequest}
 */
proto.proto.ListEtfRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ListEtfRequest();
  return proto.proto.ListEtfRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ListEtfRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ListEtfRequest}
 */
proto.proto.ListEtfRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setSymbol(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setCusip(value);
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
proto.proto.ListEtfRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ListEtfRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ListEtfRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ListEtfRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSymbol();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getCusip();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
};

/**
 * optional string symbol = 1;
 * @return {string}
 */
proto.proto.ListEtfRequest.prototype.getSymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ListEtfRequest} returns this
 */
proto.proto.ListEtfRequest.prototype.setSymbol = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string cusip = 2;
 * @return {string}
 */
proto.proto.ListEtfRequest.prototype.getCusip = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ListEtfRequest} returns this
 */
proto.proto.ListEtfRequest.prototype.setCusip = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
  proto.proto.CreateEtfResponse.prototype.toObject = function(
    opt_includeInstance
  ) {
    return proto.proto.CreateEtfResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.CreateEtfResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.CreateEtfResponse.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        etf: (f = msg.getEtf()) && proto.proto.Etf.toObject(includeInstance, f),
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
 * @return {!proto.proto.CreateEtfResponse}
 */
proto.proto.CreateEtfResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.CreateEtfResponse();
  return proto.proto.CreateEtfResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.CreateEtfResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.CreateEtfResponse}
 */
proto.proto.CreateEtfResponse.deserializeBinaryFromReader = function(
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
        var value = new proto.proto.Etf();
        reader.readMessage(value, proto.proto.Etf.deserializeBinaryFromReader);
        msg.setEtf(value);
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
proto.proto.CreateEtfResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.CreateEtfResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.CreateEtfResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.CreateEtfResponse.serializeBinaryToWriter = function(
  message,
  writer
) {
  var f = undefined;
  f = message.getEtf();
  if (f != null) {
    writer.writeMessage(1, f, proto.proto.Etf.serializeBinaryToWriter);
  }
};

/**
 * optional Etf etf = 1;
 * @return {?proto.proto.Etf}
 */
proto.proto.CreateEtfResponse.prototype.getEtf = function() {
  return /** @type{?proto.proto.Etf} */ (jspb.Message.getWrapperField(
    this,
    proto.proto.Etf,
    1
  ));
};

/**
 * @param {?proto.proto.Etf|undefined} value
 * @return {!proto.proto.CreateEtfResponse} returns this
 */
proto.proto.CreateEtfResponse.prototype.setEtf = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.CreateEtfResponse} returns this
 */
proto.proto.CreateEtfResponse.prototype.clearEtf = function() {
  return this.setEtf(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.CreateEtfResponse.prototype.hasEtf = function() {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.ListEtfResponse.repeatedFields_ = [1];

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
  proto.proto.ListEtfResponse.prototype.toObject = function(
    opt_includeInstance
  ) {
    return proto.proto.ListEtfResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ListEtfResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ListEtfResponse.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        etfsList: jspb.Message.toObjectList(
          msg.getEtfsList(),
          proto.proto.Etf.toObject,
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
 * @return {!proto.proto.ListEtfResponse}
 */
proto.proto.ListEtfResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ListEtfResponse();
  return proto.proto.ListEtfResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ListEtfResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ListEtfResponse}
 */
proto.proto.ListEtfResponse.deserializeBinaryFromReader = function(
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
        var value = new proto.proto.Etf();
        reader.readMessage(value, proto.proto.Etf.deserializeBinaryFromReader);
        msg.addEtfs(value);
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
proto.proto.ListEtfResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ListEtfResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ListEtfResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ListEtfResponse.serializeBinaryToWriter = function(
  message,
  writer
) {
  var f = undefined;
  f = message.getEtfsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(1, f, proto.proto.Etf.serializeBinaryToWriter);
  }
};

/**
 * repeated Etf etfs = 1;
 * @return {!Array<!proto.proto.Etf>}
 */
proto.proto.ListEtfResponse.prototype.getEtfsList = function() {
  return /** @type{!Array<!proto.proto.Etf>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    proto.proto.Etf,
    1
  ));
};

/**
 * @param {!Array<!proto.proto.Etf>} value
 * @return {!proto.proto.ListEtfResponse} returns this
 */
proto.proto.ListEtfResponse.prototype.setEtfsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};

/**
 * @param {!proto.proto.Etf=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.Etf}
 */
proto.proto.ListEtfResponse.prototype.addEtfs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    1,
    opt_value,
    proto.proto.Etf,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.ListEtfResponse} returns this
 */
proto.proto.ListEtfResponse.prototype.clearEtfsList = function() {
  return this.setEtfsList([]);
};

goog.object.extend(exports, proto.proto);
