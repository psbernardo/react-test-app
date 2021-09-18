/**
 * @fileoverview gRPC-Web generated client stub for accountpb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.accountpb = require('./generalledger_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.accountpb.GeneralLedgerServiceClient =
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
proto.accountpb.GeneralLedgerServicePromiseClient =
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
 *   !proto.accountpb.GeneralLedger,
 *   !proto.accountpb.CreateGeneralLedgerResponse>}
 */
const methodDescriptor_GeneralLedgerService_CreateGeneralLedger = new grpc.web.MethodDescriptor(
  '/accountpb.GeneralLedgerService/CreateGeneralLedger',
  grpc.web.MethodType.UNARY,
  proto.accountpb.GeneralLedger,
  proto.accountpb.CreateGeneralLedgerResponse,
  /**
   * @param {!proto.accountpb.GeneralLedger} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.CreateGeneralLedgerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.GeneralLedger,
 *   !proto.accountpb.CreateGeneralLedgerResponse>}
 */
const methodInfo_GeneralLedgerService_CreateGeneralLedger = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.CreateGeneralLedgerResponse,
  /**
   * @param {!proto.accountpb.GeneralLedger} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.CreateGeneralLedgerResponse.deserializeBinary
);


/**
 * @param {!proto.accountpb.GeneralLedger} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.CreateGeneralLedgerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.CreateGeneralLedgerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.GeneralLedgerServiceClient.prototype.createGeneralLedger =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.GeneralLedgerService/CreateGeneralLedger',
      request,
      metadata || {},
      methodDescriptor_GeneralLedgerService_CreateGeneralLedger,
      callback);
};


/**
 * @param {!proto.accountpb.GeneralLedger} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.CreateGeneralLedgerResponse>}
 *     A native promise that resolves to the response
 */
proto.accountpb.GeneralLedgerServicePromiseClient.prototype.createGeneralLedger =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.GeneralLedgerService/CreateGeneralLedger',
      request,
      metadata || {},
      methodDescriptor_GeneralLedgerService_CreateGeneralLedger);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.accountpb.GeneralLedger,
 *   !proto.accountpb.UpdateGeneralLedgerResponse>}
 */
const methodDescriptor_GeneralLedgerService_UpdateGeneralLedger = new grpc.web.MethodDescriptor(
  '/accountpb.GeneralLedgerService/UpdateGeneralLedger',
  grpc.web.MethodType.UNARY,
  proto.accountpb.GeneralLedger,
  proto.accountpb.UpdateGeneralLedgerResponse,
  /**
   * @param {!proto.accountpb.GeneralLedger} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.UpdateGeneralLedgerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.GeneralLedger,
 *   !proto.accountpb.UpdateGeneralLedgerResponse>}
 */
const methodInfo_GeneralLedgerService_UpdateGeneralLedger = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.UpdateGeneralLedgerResponse,
  /**
   * @param {!proto.accountpb.GeneralLedger} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.UpdateGeneralLedgerResponse.deserializeBinary
);


/**
 * @param {!proto.accountpb.GeneralLedger} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.UpdateGeneralLedgerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.UpdateGeneralLedgerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.GeneralLedgerServiceClient.prototype.updateGeneralLedger =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.GeneralLedgerService/UpdateGeneralLedger',
      request,
      metadata || {},
      methodDescriptor_GeneralLedgerService_UpdateGeneralLedger,
      callback);
};


/**
 * @param {!proto.accountpb.GeneralLedger} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.UpdateGeneralLedgerResponse>}
 *     A native promise that resolves to the response
 */
proto.accountpb.GeneralLedgerServicePromiseClient.prototype.updateGeneralLedger =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.GeneralLedgerService/UpdateGeneralLedger',
      request,
      metadata || {},
      methodDescriptor_GeneralLedgerService_UpdateGeneralLedger);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.accountpb.GeneralLedger,
 *   !proto.accountpb.ListGeneralLedgerResponse>}
 */
const methodDescriptor_GeneralLedgerService_ListGeneralLedger = new grpc.web.MethodDescriptor(
  '/accountpb.GeneralLedgerService/ListGeneralLedger',
  grpc.web.MethodType.UNARY,
  proto.accountpb.GeneralLedger,
  proto.accountpb.ListGeneralLedgerResponse,
  /**
   * @param {!proto.accountpb.GeneralLedger} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.ListGeneralLedgerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.GeneralLedger,
 *   !proto.accountpb.ListGeneralLedgerResponse>}
 */
const methodInfo_GeneralLedgerService_ListGeneralLedger = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.ListGeneralLedgerResponse,
  /**
   * @param {!proto.accountpb.GeneralLedger} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.ListGeneralLedgerResponse.deserializeBinary
);


/**
 * @param {!proto.accountpb.GeneralLedger} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.ListGeneralLedgerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.ListGeneralLedgerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.GeneralLedgerServiceClient.prototype.listGeneralLedger =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.GeneralLedgerService/ListGeneralLedger',
      request,
      metadata || {},
      methodDescriptor_GeneralLedgerService_ListGeneralLedger,
      callback);
};


/**
 * @param {!proto.accountpb.GeneralLedger} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.ListGeneralLedgerResponse>}
 *     A native promise that resolves to the response
 */
proto.accountpb.GeneralLedgerServicePromiseClient.prototype.listGeneralLedger =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.GeneralLedgerService/ListGeneralLedger',
      request,
      metadata || {},
      methodDescriptor_GeneralLedgerService_ListGeneralLedger);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.accountpb.ReadGeneralLedgerRequest,
 *   !proto.accountpb.ReadGeneralLedgerResponse>}
 */
const methodDescriptor_GeneralLedgerService_ReadGeneralLedger = new grpc.web.MethodDescriptor(
  '/accountpb.GeneralLedgerService/ReadGeneralLedger',
  grpc.web.MethodType.UNARY,
  proto.accountpb.ReadGeneralLedgerRequest,
  proto.accountpb.ReadGeneralLedgerResponse,
  /**
   * @param {!proto.accountpb.ReadGeneralLedgerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.ReadGeneralLedgerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.ReadGeneralLedgerRequest,
 *   !proto.accountpb.ReadGeneralLedgerResponse>}
 */
const methodInfo_GeneralLedgerService_ReadGeneralLedger = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.ReadGeneralLedgerResponse,
  /**
   * @param {!proto.accountpb.ReadGeneralLedgerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.ReadGeneralLedgerResponse.deserializeBinary
);


/**
 * @param {!proto.accountpb.ReadGeneralLedgerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.ReadGeneralLedgerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.ReadGeneralLedgerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.GeneralLedgerServiceClient.prototype.readGeneralLedger =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.GeneralLedgerService/ReadGeneralLedger',
      request,
      metadata || {},
      methodDescriptor_GeneralLedgerService_ReadGeneralLedger,
      callback);
};


/**
 * @param {!proto.accountpb.ReadGeneralLedgerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.ReadGeneralLedgerResponse>}
 *     A native promise that resolves to the response
 */
proto.accountpb.GeneralLedgerServicePromiseClient.prototype.readGeneralLedger =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.GeneralLedgerService/ReadGeneralLedger',
      request,
      metadata || {},
      methodDescriptor_GeneralLedgerService_ReadGeneralLedger);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.accountpb.DeleteGeneralLedgerRequest,
 *   !proto.accountpb.DeleteGeneralLedgerResponse>}
 */
const methodDescriptor_GeneralLedgerService_DeleteGeneralLedger = new grpc.web.MethodDescriptor(
  '/accountpb.GeneralLedgerService/DeleteGeneralLedger',
  grpc.web.MethodType.UNARY,
  proto.accountpb.DeleteGeneralLedgerRequest,
  proto.accountpb.DeleteGeneralLedgerResponse,
  /**
   * @param {!proto.accountpb.DeleteGeneralLedgerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.DeleteGeneralLedgerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.DeleteGeneralLedgerRequest,
 *   !proto.accountpb.DeleteGeneralLedgerResponse>}
 */
const methodInfo_GeneralLedgerService_DeleteGeneralLedger = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.DeleteGeneralLedgerResponse,
  /**
   * @param {!proto.accountpb.DeleteGeneralLedgerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.DeleteGeneralLedgerResponse.deserializeBinary
);


/**
 * @param {!proto.accountpb.DeleteGeneralLedgerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.DeleteGeneralLedgerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.DeleteGeneralLedgerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.GeneralLedgerServiceClient.prototype.deleteGeneralLedger =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.GeneralLedgerService/DeleteGeneralLedger',
      request,
      metadata || {},
      methodDescriptor_GeneralLedgerService_DeleteGeneralLedger,
      callback);
};


/**
 * @param {!proto.accountpb.DeleteGeneralLedgerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.DeleteGeneralLedgerResponse>}
 *     A native promise that resolves to the response
 */
proto.accountpb.GeneralLedgerServicePromiseClient.prototype.deleteGeneralLedger =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.GeneralLedgerService/DeleteGeneralLedger',
      request,
      metadata || {},
      methodDescriptor_GeneralLedgerService_DeleteGeneralLedger);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.accountpb.Empty,
 *   !proto.accountpb.GeneralLedger>}
 */
const methodDescriptor_GeneralLedgerService_GetNewIdGeneralLedger = new grpc.web.MethodDescriptor(
  '/accountpb.GeneralLedgerService/GetNewIdGeneralLedger',
  grpc.web.MethodType.UNARY,
  proto.accountpb.Empty,
  proto.accountpb.GeneralLedger,
  /**
   * @param {!proto.accountpb.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.GeneralLedger.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.Empty,
 *   !proto.accountpb.GeneralLedger>}
 */
const methodInfo_GeneralLedgerService_GetNewIdGeneralLedger = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.GeneralLedger,
  /**
   * @param {!proto.accountpb.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.GeneralLedger.deserializeBinary
);


/**
 * @param {!proto.accountpb.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.GeneralLedger)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.GeneralLedger>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.GeneralLedgerServiceClient.prototype.getNewIdGeneralLedger =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.GeneralLedgerService/GetNewIdGeneralLedger',
      request,
      metadata || {},
      methodDescriptor_GeneralLedgerService_GetNewIdGeneralLedger,
      callback);
};


/**
 * @param {!proto.accountpb.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.GeneralLedger>}
 *     A native promise that resolves to the response
 */
proto.accountpb.GeneralLedgerServicePromiseClient.prototype.getNewIdGeneralLedger =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.GeneralLedgerService/GetNewIdGeneralLedger',
      request,
      metadata || {},
      methodDescriptor_GeneralLedgerService_GetNewIdGeneralLedger);
};


module.exports = proto.accountpb;

