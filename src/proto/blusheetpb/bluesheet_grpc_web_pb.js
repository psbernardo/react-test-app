/**
 * @fileoverview gRPC-Web generated client stub for bluesheetpb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_type_date_pb = require('../../google/type/date_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.bluesheetpb = require('./bluesheet_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.bluesheetpb.BluesheetServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.bluesheetpb.BluesheetServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bluesheetpb.ListBluesheetRequest,
 *   !proto.bluesheetpb.ListBluesheetResponse>}
 */
const methodDescriptor_BluesheetService_ListBluesheet = new grpc.web.MethodDescriptor(
  '/bluesheetpb.BluesheetService/ListBluesheet',
  grpc.web.MethodType.UNARY,
  proto.bluesheetpb.ListBluesheetRequest,
  proto.bluesheetpb.ListBluesheetResponse,
  /**
   * @param {!proto.bluesheetpb.ListBluesheetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bluesheetpb.ListBluesheetResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bluesheetpb.ListBluesheetRequest,
 *   !proto.bluesheetpb.ListBluesheetResponse>}
 */
const methodInfo_BluesheetService_ListBluesheet = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bluesheetpb.ListBluesheetResponse,
  /**
   * @param {!proto.bluesheetpb.ListBluesheetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bluesheetpb.ListBluesheetResponse.deserializeBinary
);


/**
 * @param {!proto.bluesheetpb.ListBluesheetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bluesheetpb.ListBluesheetResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bluesheetpb.ListBluesheetResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bluesheetpb.BluesheetServiceClient.prototype.listBluesheet =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bluesheetpb.BluesheetService/ListBluesheet',
      request,
      metadata || {},
      methodDescriptor_BluesheetService_ListBluesheet,
      callback);
};


/**
 * @param {!proto.bluesheetpb.ListBluesheetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bluesheetpb.ListBluesheetResponse>}
 *     Promise that resolves to the response
 */
proto.bluesheetpb.BluesheetServicePromiseClient.prototype.listBluesheet =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bluesheetpb.BluesheetService/ListBluesheet',
      request,
      metadata || {},
      methodDescriptor_BluesheetService_ListBluesheet);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bluesheetpb.CreateBluesheetRequest,
 *   !proto.bluesheetpb.CreateBluesheetResponse>}
 */
const methodDescriptor_BluesheetService_CreateBluesheet = new grpc.web.MethodDescriptor(
  '/bluesheetpb.BluesheetService/CreateBluesheet',
  grpc.web.MethodType.UNARY,
  proto.bluesheetpb.CreateBluesheetRequest,
  proto.bluesheetpb.CreateBluesheetResponse,
  /**
   * @param {!proto.bluesheetpb.CreateBluesheetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bluesheetpb.CreateBluesheetResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bluesheetpb.CreateBluesheetRequest,
 *   !proto.bluesheetpb.CreateBluesheetResponse>}
 */
const methodInfo_BluesheetService_CreateBluesheet = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bluesheetpb.CreateBluesheetResponse,
  /**
   * @param {!proto.bluesheetpb.CreateBluesheetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bluesheetpb.CreateBluesheetResponse.deserializeBinary
);


/**
 * @param {!proto.bluesheetpb.CreateBluesheetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bluesheetpb.CreateBluesheetResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bluesheetpb.CreateBluesheetResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bluesheetpb.BluesheetServiceClient.prototype.createBluesheet =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bluesheetpb.BluesheetService/CreateBluesheet',
      request,
      metadata || {},
      methodDescriptor_BluesheetService_CreateBluesheet,
      callback);
};


/**
 * @param {!proto.bluesheetpb.CreateBluesheetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bluesheetpb.CreateBluesheetResponse>}
 *     Promise that resolves to the response
 */
proto.bluesheetpb.BluesheetServicePromiseClient.prototype.createBluesheet =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bluesheetpb.BluesheetService/CreateBluesheet',
      request,
      metadata || {},
      methodDescriptor_BluesheetService_CreateBluesheet);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bluesheetpb.UpdateBlueSheetRequest,
 *   !proto.bluesheetpb.UpdateBlueSheetResponse>}
 */
const methodDescriptor_BluesheetService_UpdateBlueSheet = new grpc.web.MethodDescriptor(
  '/bluesheetpb.BluesheetService/UpdateBlueSheet',
  grpc.web.MethodType.UNARY,
  proto.bluesheetpb.UpdateBlueSheetRequest,
  proto.bluesheetpb.UpdateBlueSheetResponse,
  /**
   * @param {!proto.bluesheetpb.UpdateBlueSheetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bluesheetpb.UpdateBlueSheetResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bluesheetpb.UpdateBlueSheetRequest,
 *   !proto.bluesheetpb.UpdateBlueSheetResponse>}
 */
const methodInfo_BluesheetService_UpdateBlueSheet = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bluesheetpb.UpdateBlueSheetResponse,
  /**
   * @param {!proto.bluesheetpb.UpdateBlueSheetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bluesheetpb.UpdateBlueSheetResponse.deserializeBinary
);


/**
 * @param {!proto.bluesheetpb.UpdateBlueSheetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bluesheetpb.UpdateBlueSheetResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bluesheetpb.UpdateBlueSheetResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bluesheetpb.BluesheetServiceClient.prototype.updateBlueSheet =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bluesheetpb.BluesheetService/UpdateBlueSheet',
      request,
      metadata || {},
      methodDescriptor_BluesheetService_UpdateBlueSheet,
      callback);
};


/**
 * @param {!proto.bluesheetpb.UpdateBlueSheetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bluesheetpb.UpdateBlueSheetResponse>}
 *     Promise that resolves to the response
 */
proto.bluesheetpb.BluesheetServicePromiseClient.prototype.updateBlueSheet =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bluesheetpb.BluesheetService/UpdateBlueSheet',
      request,
      metadata || {},
      methodDescriptor_BluesheetService_UpdateBlueSheet);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bluesheetpb.ListSymbolCusipRequest,
 *   !proto.bluesheetpb.ListSymbolCusipResponse>}
 */
const methodDescriptor_BluesheetService_ListSymbolCusip = new grpc.web.MethodDescriptor(
  '/bluesheetpb.BluesheetService/ListSymbolCusip',
  grpc.web.MethodType.UNARY,
  proto.bluesheetpb.ListSymbolCusipRequest,
  proto.bluesheetpb.ListSymbolCusipResponse,
  /**
   * @param {!proto.bluesheetpb.ListSymbolCusipRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bluesheetpb.ListSymbolCusipResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bluesheetpb.ListSymbolCusipRequest,
 *   !proto.bluesheetpb.ListSymbolCusipResponse>}
 */
const methodInfo_BluesheetService_ListSymbolCusip = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bluesheetpb.ListSymbolCusipResponse,
  /**
   * @param {!proto.bluesheetpb.ListSymbolCusipRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bluesheetpb.ListSymbolCusipResponse.deserializeBinary
);


/**
 * @param {!proto.bluesheetpb.ListSymbolCusipRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bluesheetpb.ListSymbolCusipResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bluesheetpb.ListSymbolCusipResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bluesheetpb.BluesheetServiceClient.prototype.listSymbolCusip =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bluesheetpb.BluesheetService/ListSymbolCusip',
      request,
      metadata || {},
      methodDescriptor_BluesheetService_ListSymbolCusip,
      callback);
};


/**
 * @param {!proto.bluesheetpb.ListSymbolCusipRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bluesheetpb.ListSymbolCusipResponse>}
 *     Promise that resolves to the response
 */
proto.bluesheetpb.BluesheetServicePromiseClient.prototype.listSymbolCusip =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bluesheetpb.BluesheetService/ListSymbolCusip',
      request,
      metadata || {},
      methodDescriptor_BluesheetService_ListSymbolCusip);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bluesheetpb.GetNewBluesheetIdRequest,
 *   !proto.bluesheetpb.GetNewBluesheetIdResponse>}
 */
const methodDescriptor_BluesheetService_GetNewBluesheetId = new grpc.web.MethodDescriptor(
  '/bluesheetpb.BluesheetService/GetNewBluesheetId',
  grpc.web.MethodType.UNARY,
  proto.bluesheetpb.GetNewBluesheetIdRequest,
  proto.bluesheetpb.GetNewBluesheetIdResponse,
  /**
   * @param {!proto.bluesheetpb.GetNewBluesheetIdRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bluesheetpb.GetNewBluesheetIdResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bluesheetpb.GetNewBluesheetIdRequest,
 *   !proto.bluesheetpb.GetNewBluesheetIdResponse>}
 */
const methodInfo_BluesheetService_GetNewBluesheetId = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bluesheetpb.GetNewBluesheetIdResponse,
  /**
   * @param {!proto.bluesheetpb.GetNewBluesheetIdRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bluesheetpb.GetNewBluesheetIdResponse.deserializeBinary
);


/**
 * @param {!proto.bluesheetpb.GetNewBluesheetIdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bluesheetpb.GetNewBluesheetIdResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bluesheetpb.GetNewBluesheetIdResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bluesheetpb.BluesheetServiceClient.prototype.getNewBluesheetId =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bluesheetpb.BluesheetService/GetNewBluesheetId',
      request,
      metadata || {},
      methodDescriptor_BluesheetService_GetNewBluesheetId,
      callback);
};


/**
 * @param {!proto.bluesheetpb.GetNewBluesheetIdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bluesheetpb.GetNewBluesheetIdResponse>}
 *     Promise that resolves to the response
 */
proto.bluesheetpb.BluesheetServicePromiseClient.prototype.getNewBluesheetId =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bluesheetpb.BluesheetService/GetNewBluesheetId',
      request,
      metadata || {},
      methodDescriptor_BluesheetService_GetNewBluesheetId);
};


module.exports = proto.bluesheetpb;

