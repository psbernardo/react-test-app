/**
 * @fileoverview gRPC-Web generated client stub for proto
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var google_type_date_pb = require('../../google/type/date_pb.js')
const proto = {};
proto.proto = require('./wallet_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.proto.WalletServiceClient =
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
proto.proto.WalletServicePromiseClient =
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
 *   !proto.proto.Wallet,
 *   !proto.proto.CreateWalletResponse>}
 */
const methodDescriptor_WalletService_CreateWallet = new grpc.web.MethodDescriptor(
  '/proto.WalletService/CreateWallet',
  grpc.web.MethodType.UNARY,
  proto.proto.Wallet,
  proto.proto.CreateWalletResponse,
  /**
   * @param {!proto.proto.Wallet} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.CreateWalletResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.Wallet,
 *   !proto.proto.CreateWalletResponse>}
 */
const methodInfo_WalletService_CreateWallet = new grpc.web.AbstractClientBase.MethodInfo(
  proto.proto.CreateWalletResponse,
  /**
   * @param {!proto.proto.Wallet} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.CreateWalletResponse.deserializeBinary
);


/**
 * @param {!proto.proto.Wallet} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.CreateWalletResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.CreateWalletResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.WalletServiceClient.prototype.createWallet =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.WalletService/CreateWallet',
      request,
      metadata || {},
      methodDescriptor_WalletService_CreateWallet,
      callback);
};


/**
 * @param {!proto.proto.Wallet} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.CreateWalletResponse>}
 *     A native promise that resolves to the response
 */
proto.proto.WalletServicePromiseClient.prototype.createWallet =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.WalletService/CreateWallet',
      request,
      metadata || {},
      methodDescriptor_WalletService_CreateWallet);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.UpdateWalletRequest,
 *   !proto.proto.UpdateWalletResponse>}
 */
const methodDescriptor_WalletService_UpdateWallet = new grpc.web.MethodDescriptor(
  '/proto.WalletService/UpdateWallet',
  grpc.web.MethodType.UNARY,
  proto.proto.UpdateWalletRequest,
  proto.proto.UpdateWalletResponse,
  /**
   * @param {!proto.proto.UpdateWalletRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.UpdateWalletResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.UpdateWalletRequest,
 *   !proto.proto.UpdateWalletResponse>}
 */
const methodInfo_WalletService_UpdateWallet = new grpc.web.AbstractClientBase.MethodInfo(
  proto.proto.UpdateWalletResponse,
  /**
   * @param {!proto.proto.UpdateWalletRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.UpdateWalletResponse.deserializeBinary
);


/**
 * @param {!proto.proto.UpdateWalletRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.UpdateWalletResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.UpdateWalletResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.WalletServiceClient.prototype.updateWallet =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.WalletService/UpdateWallet',
      request,
      metadata || {},
      methodDescriptor_WalletService_UpdateWallet,
      callback);
};


/**
 * @param {!proto.proto.UpdateWalletRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.UpdateWalletResponse>}
 *     A native promise that resolves to the response
 */
proto.proto.WalletServicePromiseClient.prototype.updateWallet =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.WalletService/UpdateWallet',
      request,
      metadata || {},
      methodDescriptor_WalletService_UpdateWallet);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.ReadWalletRequest,
 *   !proto.proto.ReadWalletResponse>}
 */
const methodDescriptor_WalletService_ReadWallet = new grpc.web.MethodDescriptor(
  '/proto.WalletService/ReadWallet',
  grpc.web.MethodType.UNARY,
  proto.proto.ReadWalletRequest,
  proto.proto.ReadWalletResponse,
  /**
   * @param {!proto.proto.ReadWalletRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.ReadWalletResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.ReadWalletRequest,
 *   !proto.proto.ReadWalletResponse>}
 */
const methodInfo_WalletService_ReadWallet = new grpc.web.AbstractClientBase.MethodInfo(
  proto.proto.ReadWalletResponse,
  /**
   * @param {!proto.proto.ReadWalletRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.ReadWalletResponse.deserializeBinary
);


/**
 * @param {!proto.proto.ReadWalletRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.ReadWalletResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.ReadWalletResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.WalletServiceClient.prototype.readWallet =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.WalletService/ReadWallet',
      request,
      metadata || {},
      methodDescriptor_WalletService_ReadWallet,
      callback);
};


/**
 * @param {!proto.proto.ReadWalletRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.ReadWalletResponse>}
 *     A native promise that resolves to the response
 */
proto.proto.WalletServicePromiseClient.prototype.readWallet =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.WalletService/ReadWallet',
      request,
      metadata || {},
      methodDescriptor_WalletService_ReadWallet);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.ListWalletRequest,
 *   !proto.proto.ListWalletResponse>}
 */
const methodDescriptor_WalletService_ListWallet = new grpc.web.MethodDescriptor(
  '/proto.WalletService/ListWallet',
  grpc.web.MethodType.UNARY,
  proto.proto.ListWalletRequest,
  proto.proto.ListWalletResponse,
  /**
   * @param {!proto.proto.ListWalletRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.ListWalletResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.ListWalletRequest,
 *   !proto.proto.ListWalletResponse>}
 */
const methodInfo_WalletService_ListWallet = new grpc.web.AbstractClientBase.MethodInfo(
  proto.proto.ListWalletResponse,
  /**
   * @param {!proto.proto.ListWalletRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.ListWalletResponse.deserializeBinary
);


/**
 * @param {!proto.proto.ListWalletRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.ListWalletResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.ListWalletResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.WalletServiceClient.prototype.listWallet =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.WalletService/ListWallet',
      request,
      metadata || {},
      methodDescriptor_WalletService_ListWallet,
      callback);
};


/**
 * @param {!proto.proto.ListWalletRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.ListWalletResponse>}
 *     A native promise that resolves to the response
 */
proto.proto.WalletServicePromiseClient.prototype.listWallet =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.WalletService/ListWallet',
      request,
      metadata || {},
      methodDescriptor_WalletService_ListWallet);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.ListWalletAuditRequest,
 *   !proto.proto.ListWalletAuditResponse>}
 */
const methodDescriptor_WalletService_ListWalletAudit = new grpc.web.MethodDescriptor(
  '/proto.WalletService/ListWalletAudit',
  grpc.web.MethodType.UNARY,
  proto.proto.ListWalletAuditRequest,
  proto.proto.ListWalletAuditResponse,
  /**
   * @param {!proto.proto.ListWalletAuditRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.ListWalletAuditResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.ListWalletAuditRequest,
 *   !proto.proto.ListWalletAuditResponse>}
 */
const methodInfo_WalletService_ListWalletAudit = new grpc.web.AbstractClientBase.MethodInfo(
  proto.proto.ListWalletAuditResponse,
  /**
   * @param {!proto.proto.ListWalletAuditRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.ListWalletAuditResponse.deserializeBinary
);


/**
 * @param {!proto.proto.ListWalletAuditRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.ListWalletAuditResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.ListWalletAuditResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.WalletServiceClient.prototype.listWalletAudit =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.WalletService/ListWalletAudit',
      request,
      metadata || {},
      methodDescriptor_WalletService_ListWalletAudit,
      callback);
};


/**
 * @param {!proto.proto.ListWalletAuditRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.ListWalletAuditResponse>}
 *     A native promise that resolves to the response
 */
proto.proto.WalletServicePromiseClient.prototype.listWalletAudit =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.WalletService/ListWalletAudit',
      request,
      metadata || {},
      methodDescriptor_WalletService_ListWalletAudit);
};


module.exports = proto.proto;

