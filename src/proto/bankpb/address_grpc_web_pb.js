/**
 * @fileoverview gRPC-Web generated client stub for bankpb
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
proto.bankpb = require('./address_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.bankpb.BankAddressServiceClient =
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
proto.bankpb.BankAddressServicePromiseClient =
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
 *   !proto.bankpb.CreateBankAddressRequest,
 *   !proto.bankpb.CreateBankAddressResponse>}
 */
const methodDescriptor_BankAddressService_CreateBankAddress = new grpc.web.MethodDescriptor(
  '/bankpb.BankAddressService/CreateBankAddress',
  grpc.web.MethodType.UNARY,
  proto.bankpb.CreateBankAddressRequest,
  proto.bankpb.CreateBankAddressResponse,
  /**
   * @param {!proto.bankpb.CreateBankAddressRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bankpb.CreateBankAddressResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bankpb.CreateBankAddressRequest,
 *   !proto.bankpb.CreateBankAddressResponse>}
 */
const methodInfo_BankAddressService_CreateBankAddress = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bankpb.CreateBankAddressResponse,
  /**
   * @param {!proto.bankpb.CreateBankAddressRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bankpb.CreateBankAddressResponse.deserializeBinary
);


/**
 * @param {!proto.bankpb.CreateBankAddressRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bankpb.CreateBankAddressResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bankpb.CreateBankAddressResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bankpb.BankAddressServiceClient.prototype.createBankAddress =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bankpb.BankAddressService/CreateBankAddress',
      request,
      metadata || {},
      methodDescriptor_BankAddressService_CreateBankAddress,
      callback);
};


/**
 * @param {!proto.bankpb.CreateBankAddressRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bankpb.CreateBankAddressResponse>}
 *     A native promise that resolves to the response
 */
proto.bankpb.BankAddressServicePromiseClient.prototype.createBankAddress =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bankpb.BankAddressService/CreateBankAddress',
      request,
      metadata || {},
      methodDescriptor_BankAddressService_CreateBankAddress);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bankpb.UpdateBankAddressRequest,
 *   !proto.bankpb.UpdateBankAddressResponse>}
 */
const methodDescriptor_BankAddressService_UpdateBankAddress = new grpc.web.MethodDescriptor(
  '/bankpb.BankAddressService/UpdateBankAddress',
  grpc.web.MethodType.UNARY,
  proto.bankpb.UpdateBankAddressRequest,
  proto.bankpb.UpdateBankAddressResponse,
  /**
   * @param {!proto.bankpb.UpdateBankAddressRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bankpb.UpdateBankAddressResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bankpb.UpdateBankAddressRequest,
 *   !proto.bankpb.UpdateBankAddressResponse>}
 */
const methodInfo_BankAddressService_UpdateBankAddress = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bankpb.UpdateBankAddressResponse,
  /**
   * @param {!proto.bankpb.UpdateBankAddressRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bankpb.UpdateBankAddressResponse.deserializeBinary
);


/**
 * @param {!proto.bankpb.UpdateBankAddressRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bankpb.UpdateBankAddressResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bankpb.UpdateBankAddressResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bankpb.BankAddressServiceClient.prototype.updateBankAddress =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bankpb.BankAddressService/UpdateBankAddress',
      request,
      metadata || {},
      methodDescriptor_BankAddressService_UpdateBankAddress,
      callback);
};


/**
 * @param {!proto.bankpb.UpdateBankAddressRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bankpb.UpdateBankAddressResponse>}
 *     A native promise that resolves to the response
 */
proto.bankpb.BankAddressServicePromiseClient.prototype.updateBankAddress =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bankpb.BankAddressService/UpdateBankAddress',
      request,
      metadata || {},
      methodDescriptor_BankAddressService_UpdateBankAddress);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bankpb.ReadBankAddressRequest,
 *   !proto.bankpb.ReadBankAddressResponse>}
 */
const methodDescriptor_BankAddressService_ReadBankAddress = new grpc.web.MethodDescriptor(
  '/bankpb.BankAddressService/ReadBankAddress',
  grpc.web.MethodType.UNARY,
  proto.bankpb.ReadBankAddressRequest,
  proto.bankpb.ReadBankAddressResponse,
  /**
   * @param {!proto.bankpb.ReadBankAddressRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bankpb.ReadBankAddressResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bankpb.ReadBankAddressRequest,
 *   !proto.bankpb.ReadBankAddressResponse>}
 */
const methodInfo_BankAddressService_ReadBankAddress = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bankpb.ReadBankAddressResponse,
  /**
   * @param {!proto.bankpb.ReadBankAddressRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bankpb.ReadBankAddressResponse.deserializeBinary
);


/**
 * @param {!proto.bankpb.ReadBankAddressRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bankpb.ReadBankAddressResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bankpb.ReadBankAddressResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bankpb.BankAddressServiceClient.prototype.readBankAddress =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bankpb.BankAddressService/ReadBankAddress',
      request,
      metadata || {},
      methodDescriptor_BankAddressService_ReadBankAddress,
      callback);
};


/**
 * @param {!proto.bankpb.ReadBankAddressRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bankpb.ReadBankAddressResponse>}
 *     A native promise that resolves to the response
 */
proto.bankpb.BankAddressServicePromiseClient.prototype.readBankAddress =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bankpb.BankAddressService/ReadBankAddress',
      request,
      metadata || {},
      methodDescriptor_BankAddressService_ReadBankAddress);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bankpb.DeleteBankAddressRequest,
 *   !proto.bankpb.DeleteBankAddressResponse>}
 */
const methodDescriptor_BankAddressService_DeleteBankAddress = new grpc.web.MethodDescriptor(
  '/bankpb.BankAddressService/DeleteBankAddress',
  grpc.web.MethodType.UNARY,
  proto.bankpb.DeleteBankAddressRequest,
  proto.bankpb.DeleteBankAddressResponse,
  /**
   * @param {!proto.bankpb.DeleteBankAddressRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bankpb.DeleteBankAddressResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bankpb.DeleteBankAddressRequest,
 *   !proto.bankpb.DeleteBankAddressResponse>}
 */
const methodInfo_BankAddressService_DeleteBankAddress = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bankpb.DeleteBankAddressResponse,
  /**
   * @param {!proto.bankpb.DeleteBankAddressRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bankpb.DeleteBankAddressResponse.deserializeBinary
);


/**
 * @param {!proto.bankpb.DeleteBankAddressRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bankpb.DeleteBankAddressResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bankpb.DeleteBankAddressResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bankpb.BankAddressServiceClient.prototype.deleteBankAddress =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bankpb.BankAddressService/DeleteBankAddress',
      request,
      metadata || {},
      methodDescriptor_BankAddressService_DeleteBankAddress,
      callback);
};


/**
 * @param {!proto.bankpb.DeleteBankAddressRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bankpb.DeleteBankAddressResponse>}
 *     A native promise that resolves to the response
 */
proto.bankpb.BankAddressServicePromiseClient.prototype.deleteBankAddress =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bankpb.BankAddressService/DeleteBankAddress',
      request,
      metadata || {},
      methodDescriptor_BankAddressService_DeleteBankAddress);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bankpb.ListBankAddressRequest,
 *   !proto.bankpb.ListBankAddressResponse>}
 */
const methodDescriptor_BankAddressService_ListBankAddress = new grpc.web.MethodDescriptor(
  '/bankpb.BankAddressService/ListBankAddress',
  grpc.web.MethodType.UNARY,
  proto.bankpb.ListBankAddressRequest,
  proto.bankpb.ListBankAddressResponse,
  /**
   * @param {!proto.bankpb.ListBankAddressRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bankpb.ListBankAddressResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bankpb.ListBankAddressRequest,
 *   !proto.bankpb.ListBankAddressResponse>}
 */
const methodInfo_BankAddressService_ListBankAddress = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bankpb.ListBankAddressResponse,
  /**
   * @param {!proto.bankpb.ListBankAddressRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bankpb.ListBankAddressResponse.deserializeBinary
);


/**
 * @param {!proto.bankpb.ListBankAddressRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bankpb.ListBankAddressResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bankpb.ListBankAddressResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bankpb.BankAddressServiceClient.prototype.listBankAddress =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bankpb.BankAddressService/ListBankAddress',
      request,
      metadata || {},
      methodDescriptor_BankAddressService_ListBankAddress,
      callback);
};


/**
 * @param {!proto.bankpb.ListBankAddressRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bankpb.ListBankAddressResponse>}
 *     A native promise that resolves to the response
 */
proto.bankpb.BankAddressServicePromiseClient.prototype.listBankAddress =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bankpb.BankAddressService/ListBankAddress',
      request,
      metadata || {},
      methodDescriptor_BankAddressService_ListBankAddress);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bankpb.ListBankAddressAuditRequest,
 *   !proto.bankpb.ListBankAddressAuditResponse>}
 */
const methodDescriptor_BankAddressService_ListBankAddressAudit = new grpc.web.MethodDescriptor(
  '/bankpb.BankAddressService/ListBankAddressAudit',
  grpc.web.MethodType.UNARY,
  proto.bankpb.ListBankAddressAuditRequest,
  proto.bankpb.ListBankAddressAuditResponse,
  /**
   * @param {!proto.bankpb.ListBankAddressAuditRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bankpb.ListBankAddressAuditResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bankpb.ListBankAddressAuditRequest,
 *   !proto.bankpb.ListBankAddressAuditResponse>}
 */
const methodInfo_BankAddressService_ListBankAddressAudit = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bankpb.ListBankAddressAuditResponse,
  /**
   * @param {!proto.bankpb.ListBankAddressAuditRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bankpb.ListBankAddressAuditResponse.deserializeBinary
);


/**
 * @param {!proto.bankpb.ListBankAddressAuditRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bankpb.ListBankAddressAuditResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bankpb.ListBankAddressAuditResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bankpb.BankAddressServiceClient.prototype.listBankAddressAudit =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bankpb.BankAddressService/ListBankAddressAudit',
      request,
      metadata || {},
      methodDescriptor_BankAddressService_ListBankAddressAudit,
      callback);
};


/**
 * @param {!proto.bankpb.ListBankAddressAuditRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bankpb.ListBankAddressAuditResponse>}
 *     A native promise that resolves to the response
 */
proto.bankpb.BankAddressServicePromiseClient.prototype.listBankAddressAudit =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bankpb.BankAddressService/ListBankAddressAudit',
      request,
      metadata || {},
      methodDescriptor_BankAddressService_ListBankAddressAudit);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bankpb.ReadComplateBankAddressRequest,
 *   !proto.bankpb.CompleteBankAddress>}
 */
const methodDescriptor_BankAddressService_ReadCompleteBankAddress = new grpc.web.MethodDescriptor(
  '/bankpb.BankAddressService/ReadCompleteBankAddress',
  grpc.web.MethodType.UNARY,
  proto.bankpb.ReadComplateBankAddressRequest,
  proto.bankpb.CompleteBankAddress,
  /**
   * @param {!proto.bankpb.ReadComplateBankAddressRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bankpb.CompleteBankAddress.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bankpb.ReadComplateBankAddressRequest,
 *   !proto.bankpb.CompleteBankAddress>}
 */
const methodInfo_BankAddressService_ReadCompleteBankAddress = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bankpb.CompleteBankAddress,
  /**
   * @param {!proto.bankpb.ReadComplateBankAddressRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bankpb.CompleteBankAddress.deserializeBinary
);


/**
 * @param {!proto.bankpb.ReadComplateBankAddressRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bankpb.CompleteBankAddress)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bankpb.CompleteBankAddress>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bankpb.BankAddressServiceClient.prototype.readCompleteBankAddress =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bankpb.BankAddressService/ReadCompleteBankAddress',
      request,
      metadata || {},
      methodDescriptor_BankAddressService_ReadCompleteBankAddress,
      callback);
};


/**
 * @param {!proto.bankpb.ReadComplateBankAddressRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bankpb.CompleteBankAddress>}
 *     A native promise that resolves to the response
 */
proto.bankpb.BankAddressServicePromiseClient.prototype.readCompleteBankAddress =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bankpb.BankAddressService/ReadCompleteBankAddress',
      request,
      metadata || {},
      methodDescriptor_BankAddressService_ReadCompleteBankAddress);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bankpb.LazyBankAddressRequest,
 *   !proto.bankpb.ListBankAddressResponse>}
 */
const methodDescriptor_BankAddressService_LazyBankAddress = new grpc.web.MethodDescriptor(
  '/bankpb.BankAddressService/LazyBankAddress',
  grpc.web.MethodType.UNARY,
  proto.bankpb.LazyBankAddressRequest,
  proto.bankpb.ListBankAddressResponse,
  /**
   * @param {!proto.bankpb.LazyBankAddressRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bankpb.ListBankAddressResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bankpb.LazyBankAddressRequest,
 *   !proto.bankpb.ListBankAddressResponse>}
 */
const methodInfo_BankAddressService_LazyBankAddress = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bankpb.ListBankAddressResponse,
  /**
   * @param {!proto.bankpb.LazyBankAddressRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bankpb.ListBankAddressResponse.deserializeBinary
);


/**
 * @param {!proto.bankpb.LazyBankAddressRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bankpb.ListBankAddressResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bankpb.ListBankAddressResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bankpb.BankAddressServiceClient.prototype.lazyBankAddress =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bankpb.BankAddressService/LazyBankAddress',
      request,
      metadata || {},
      methodDescriptor_BankAddressService_LazyBankAddress,
      callback);
};


/**
 * @param {!proto.bankpb.LazyBankAddressRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bankpb.ListBankAddressResponse>}
 *     A native promise that resolves to the response
 */
proto.bankpb.BankAddressServicePromiseClient.prototype.lazyBankAddress =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bankpb.BankAddressService/LazyBankAddress',
      request,
      metadata || {},
      methodDescriptor_BankAddressService_LazyBankAddress);
};


module.exports = proto.bankpb;

