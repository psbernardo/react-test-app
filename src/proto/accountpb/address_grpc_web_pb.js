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
proto.accountpb = require('./address_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.accountpb.AddressServiceClient =
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
proto.accountpb.AddressServicePromiseClient =
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
 *   !proto.accountpb.Address,
 *   !proto.accountpb.CreateAddressResponse>}
 */
const methodDescriptor_AddressService_CreateAddress = new grpc.web.MethodDescriptor(
  '/accountpb.AddressService/CreateAddress',
  grpc.web.MethodType.UNARY,
  proto.accountpb.Address,
  proto.accountpb.CreateAddressResponse,
  /**
   * @param {!proto.accountpb.Address} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.CreateAddressResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.Address,
 *   !proto.accountpb.CreateAddressResponse>}
 */
const methodInfo_AddressService_CreateAddress = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.CreateAddressResponse,
  /**
   * @param {!proto.accountpb.Address} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.CreateAddressResponse.deserializeBinary
);


/**
 * @param {!proto.accountpb.Address} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.CreateAddressResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.CreateAddressResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.AddressServiceClient.prototype.createAddress =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.AddressService/CreateAddress',
      request,
      metadata || {},
      methodDescriptor_AddressService_CreateAddress,
      callback);
};


/**
 * @param {!proto.accountpb.Address} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.CreateAddressResponse>}
 *     A native promise that resolves to the response
 */
proto.accountpb.AddressServicePromiseClient.prototype.createAddress =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.AddressService/CreateAddress',
      request,
      metadata || {},
      methodDescriptor_AddressService_CreateAddress);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.accountpb.Address,
 *   !proto.accountpb.UpdateAddressResponse>}
 */
const methodDescriptor_AddressService_UpdateAddress = new grpc.web.MethodDescriptor(
  '/accountpb.AddressService/UpdateAddress',
  grpc.web.MethodType.UNARY,
  proto.accountpb.Address,
  proto.accountpb.UpdateAddressResponse,
  /**
   * @param {!proto.accountpb.Address} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.UpdateAddressResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.Address,
 *   !proto.accountpb.UpdateAddressResponse>}
 */
const methodInfo_AddressService_UpdateAddress = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.UpdateAddressResponse,
  /**
   * @param {!proto.accountpb.Address} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.UpdateAddressResponse.deserializeBinary
);


/**
 * @param {!proto.accountpb.Address} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.UpdateAddressResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.UpdateAddressResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.AddressServiceClient.prototype.updateAddress =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.AddressService/UpdateAddress',
      request,
      metadata || {},
      methodDescriptor_AddressService_UpdateAddress,
      callback);
};


/**
 * @param {!proto.accountpb.Address} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.UpdateAddressResponse>}
 *     A native promise that resolves to the response
 */
proto.accountpb.AddressServicePromiseClient.prototype.updateAddress =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.AddressService/UpdateAddress',
      request,
      metadata || {},
      methodDescriptor_AddressService_UpdateAddress);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.accountpb.ReadAddressRequest,
 *   !proto.accountpb.ReadAddressResponse>}
 */
const methodDescriptor_AddressService_ReadAddress = new grpc.web.MethodDescriptor(
  '/accountpb.AddressService/ReadAddress',
  grpc.web.MethodType.UNARY,
  proto.accountpb.ReadAddressRequest,
  proto.accountpb.ReadAddressResponse,
  /**
   * @param {!proto.accountpb.ReadAddressRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.ReadAddressResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.ReadAddressRequest,
 *   !proto.accountpb.ReadAddressResponse>}
 */
const methodInfo_AddressService_ReadAddress = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.ReadAddressResponse,
  /**
   * @param {!proto.accountpb.ReadAddressRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.ReadAddressResponse.deserializeBinary
);


/**
 * @param {!proto.accountpb.ReadAddressRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.ReadAddressResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.ReadAddressResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.AddressServiceClient.prototype.readAddress =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.AddressService/ReadAddress',
      request,
      metadata || {},
      methodDescriptor_AddressService_ReadAddress,
      callback);
};


/**
 * @param {!proto.accountpb.ReadAddressRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.ReadAddressResponse>}
 *     A native promise that resolves to the response
 */
proto.accountpb.AddressServicePromiseClient.prototype.readAddress =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.AddressService/ReadAddress',
      request,
      metadata || {},
      methodDescriptor_AddressService_ReadAddress);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.accountpb.ReadFirstPrimaryAddressRequest,
 *   !proto.accountpb.ReadFirstPrimaryAddressResponse>}
 */
const methodDescriptor_AddressService_ReadFirstPrimaryAddress = new grpc.web.MethodDescriptor(
  '/accountpb.AddressService/ReadFirstPrimaryAddress',
  grpc.web.MethodType.UNARY,
  proto.accountpb.ReadFirstPrimaryAddressRequest,
  proto.accountpb.ReadFirstPrimaryAddressResponse,
  /**
   * @param {!proto.accountpb.ReadFirstPrimaryAddressRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.ReadFirstPrimaryAddressResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.ReadFirstPrimaryAddressRequest,
 *   !proto.accountpb.ReadFirstPrimaryAddressResponse>}
 */
const methodInfo_AddressService_ReadFirstPrimaryAddress = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.ReadFirstPrimaryAddressResponse,
  /**
   * @param {!proto.accountpb.ReadFirstPrimaryAddressRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.ReadFirstPrimaryAddressResponse.deserializeBinary
);


/**
 * @param {!proto.accountpb.ReadFirstPrimaryAddressRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.ReadFirstPrimaryAddressResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.ReadFirstPrimaryAddressResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.AddressServiceClient.prototype.readFirstPrimaryAddress =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.AddressService/ReadFirstPrimaryAddress',
      request,
      metadata || {},
      methodDescriptor_AddressService_ReadFirstPrimaryAddress,
      callback);
};


/**
 * @param {!proto.accountpb.ReadFirstPrimaryAddressRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.ReadFirstPrimaryAddressResponse>}
 *     A native promise that resolves to the response
 */
proto.accountpb.AddressServicePromiseClient.prototype.readFirstPrimaryAddress =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.AddressService/ReadFirstPrimaryAddress',
      request,
      metadata || {},
      methodDescriptor_AddressService_ReadFirstPrimaryAddress);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.accountpb.DeleteAddressRequest,
 *   !proto.accountpb.DeleteAddressResponse>}
 */
const methodDescriptor_AddressService_DeleteAddress = new grpc.web.MethodDescriptor(
  '/accountpb.AddressService/DeleteAddress',
  grpc.web.MethodType.UNARY,
  proto.accountpb.DeleteAddressRequest,
  proto.accountpb.DeleteAddressResponse,
  /**
   * @param {!proto.accountpb.DeleteAddressRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.DeleteAddressResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.DeleteAddressRequest,
 *   !proto.accountpb.DeleteAddressResponse>}
 */
const methodInfo_AddressService_DeleteAddress = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.DeleteAddressResponse,
  /**
   * @param {!proto.accountpb.DeleteAddressRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.DeleteAddressResponse.deserializeBinary
);


/**
 * @param {!proto.accountpb.DeleteAddressRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.DeleteAddressResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.DeleteAddressResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.AddressServiceClient.prototype.deleteAddress =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.AddressService/DeleteAddress',
      request,
      metadata || {},
      methodDescriptor_AddressService_DeleteAddress,
      callback);
};


/**
 * @param {!proto.accountpb.DeleteAddressRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.DeleteAddressResponse>}
 *     A native promise that resolves to the response
 */
proto.accountpb.AddressServicePromiseClient.prototype.deleteAddress =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.AddressService/DeleteAddress',
      request,
      metadata || {},
      methodDescriptor_AddressService_DeleteAddress);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.accountpb.BatchCreateAddressRequest,
 *   !proto.accountpb.BatchCreateAddressResponse>}
 */
const methodDescriptor_AddressService_BatchCreateAddress = new grpc.web.MethodDescriptor(
  '/accountpb.AddressService/BatchCreateAddress',
  grpc.web.MethodType.UNARY,
  proto.accountpb.BatchCreateAddressRequest,
  proto.accountpb.BatchCreateAddressResponse,
  /**
   * @param {!proto.accountpb.BatchCreateAddressRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.BatchCreateAddressResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.BatchCreateAddressRequest,
 *   !proto.accountpb.BatchCreateAddressResponse>}
 */
const methodInfo_AddressService_BatchCreateAddress = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.BatchCreateAddressResponse,
  /**
   * @param {!proto.accountpb.BatchCreateAddressRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.BatchCreateAddressResponse.deserializeBinary
);


/**
 * @param {!proto.accountpb.BatchCreateAddressRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.BatchCreateAddressResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.BatchCreateAddressResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.AddressServiceClient.prototype.batchCreateAddress =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.AddressService/BatchCreateAddress',
      request,
      metadata || {},
      methodDescriptor_AddressService_BatchCreateAddress,
      callback);
};


/**
 * @param {!proto.accountpb.BatchCreateAddressRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.BatchCreateAddressResponse>}
 *     A native promise that resolves to the response
 */
proto.accountpb.AddressServicePromiseClient.prototype.batchCreateAddress =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.AddressService/BatchCreateAddress',
      request,
      metadata || {},
      methodDescriptor_AddressService_BatchCreateAddress);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.accountpb.ListAddressAuditRequest,
 *   !proto.accountpb.ListAddressAuditResponse>}
 */
const methodDescriptor_AddressService_ListAddressAudit = new grpc.web.MethodDescriptor(
  '/accountpb.AddressService/ListAddressAudit',
  grpc.web.MethodType.UNARY,
  proto.accountpb.ListAddressAuditRequest,
  proto.accountpb.ListAddressAuditResponse,
  /**
   * @param {!proto.accountpb.ListAddressAuditRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.ListAddressAuditResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.ListAddressAuditRequest,
 *   !proto.accountpb.ListAddressAuditResponse>}
 */
const methodInfo_AddressService_ListAddressAudit = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.ListAddressAuditResponse,
  /**
   * @param {!proto.accountpb.ListAddressAuditRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.ListAddressAuditResponse.deserializeBinary
);


/**
 * @param {!proto.accountpb.ListAddressAuditRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.ListAddressAuditResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.ListAddressAuditResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.AddressServiceClient.prototype.listAddressAudit =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.AddressService/ListAddressAudit',
      request,
      metadata || {},
      methodDescriptor_AddressService_ListAddressAudit,
      callback);
};


/**
 * @param {!proto.accountpb.ListAddressAuditRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.ListAddressAuditResponse>}
 *     A native promise that resolves to the response
 */
proto.accountpb.AddressServicePromiseClient.prototype.listAddressAudit =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.AddressService/ListAddressAudit',
      request,
      metadata || {},
      methodDescriptor_AddressService_ListAddressAudit);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.accountpb.Address,
 *   !proto.accountpb.ListAddressResponse>}
 */
const methodDescriptor_AddressService_ListAddress = new grpc.web.MethodDescriptor(
  '/accountpb.AddressService/ListAddress',
  grpc.web.MethodType.UNARY,
  proto.accountpb.Address,
  proto.accountpb.ListAddressResponse,
  /**
   * @param {!proto.accountpb.Address} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.ListAddressResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.Address,
 *   !proto.accountpb.ListAddressResponse>}
 */
const methodInfo_AddressService_ListAddress = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.ListAddressResponse,
  /**
   * @param {!proto.accountpb.Address} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.ListAddressResponse.deserializeBinary
);


/**
 * @param {!proto.accountpb.Address} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.ListAddressResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.ListAddressResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.AddressServiceClient.prototype.listAddress =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.AddressService/ListAddress',
      request,
      metadata || {},
      methodDescriptor_AddressService_ListAddress,
      callback);
};


/**
 * @param {!proto.accountpb.Address} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.ListAddressResponse>}
 *     A native promise that resolves to the response
 */
proto.accountpb.AddressServicePromiseClient.prototype.listAddress =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.AddressService/ListAddress',
      request,
      metadata || {},
      methodDescriptor_AddressService_ListAddress);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.accountpb.ListAddressAutoFillRequest,
 *   !proto.accountpb.ListAddressAutoFillResponse>}
 */
const methodDescriptor_AddressService_ListAddressAutoFill = new grpc.web.MethodDescriptor(
  '/accountpb.AddressService/ListAddressAutoFill',
  grpc.web.MethodType.UNARY,
  proto.accountpb.ListAddressAutoFillRequest,
  proto.accountpb.ListAddressAutoFillResponse,
  /**
   * @param {!proto.accountpb.ListAddressAutoFillRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.ListAddressAutoFillResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.ListAddressAutoFillRequest,
 *   !proto.accountpb.ListAddressAutoFillResponse>}
 */
const methodInfo_AddressService_ListAddressAutoFill = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.ListAddressAutoFillResponse,
  /**
   * @param {!proto.accountpb.ListAddressAutoFillRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.ListAddressAutoFillResponse.deserializeBinary
);


/**
 * @param {!proto.accountpb.ListAddressAutoFillRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.ListAddressAutoFillResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.ListAddressAutoFillResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.AddressServiceClient.prototype.listAddressAutoFill =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.AddressService/ListAddressAutoFill',
      request,
      metadata || {},
      methodDescriptor_AddressService_ListAddressAutoFill,
      callback);
};


/**
 * @param {!proto.accountpb.ListAddressAutoFillRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.ListAddressAutoFillResponse>}
 *     A native promise that resolves to the response
 */
proto.accountpb.AddressServicePromiseClient.prototype.listAddressAutoFill =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.AddressService/ListAddressAutoFill',
      request,
      metadata || {},
      methodDescriptor_AddressService_ListAddressAutoFill);
};


module.exports = proto.accountpb;

