/**
 * @fileoverview gRPC-Web generated client stub for commonpb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_type_date_pb = require('../../google/type/date_pb.js')
const proto = {};
proto.commonpb = require('./list_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.commonpb.ListServiceClient =
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
proto.commonpb.ListServicePromiseClient =
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
 *   !proto.commonpb.ReadPrimaryOwnerRequest,
 *   !proto.commonpb.ReadPrimaryOwnerResponse>}
 */
const methodDescriptor_ListService_ReadPrimaryOwner = new grpc.web.MethodDescriptor(
  '/commonpb.ListService/ReadPrimaryOwner',
  grpc.web.MethodType.UNARY,
  proto.commonpb.ReadPrimaryOwnerRequest,
  proto.commonpb.ReadPrimaryOwnerResponse,
  /**
   * @param {!proto.commonpb.ReadPrimaryOwnerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.ReadPrimaryOwnerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.commonpb.ReadPrimaryOwnerRequest,
 *   !proto.commonpb.ReadPrimaryOwnerResponse>}
 */
const methodInfo_ListService_ReadPrimaryOwner = new grpc.web.AbstractClientBase.MethodInfo(
  proto.commonpb.ReadPrimaryOwnerResponse,
  /**
   * @param {!proto.commonpb.ReadPrimaryOwnerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.ReadPrimaryOwnerResponse.deserializeBinary
);


/**
 * @param {!proto.commonpb.ReadPrimaryOwnerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.commonpb.ReadPrimaryOwnerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.commonpb.ReadPrimaryOwnerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.commonpb.ListServiceClient.prototype.readPrimaryOwner =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/commonpb.ListService/ReadPrimaryOwner',
      request,
      metadata || {},
      methodDescriptor_ListService_ReadPrimaryOwner,
      callback);
};


/**
 * @param {!proto.commonpb.ReadPrimaryOwnerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.commonpb.ReadPrimaryOwnerResponse>}
 *     A native promise that resolves to the response
 */
proto.commonpb.ListServicePromiseClient.prototype.readPrimaryOwner =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/commonpb.ListService/ReadPrimaryOwner',
      request,
      metadata || {},
      methodDescriptor_ListService_ReadPrimaryOwner);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.commonpb.ListAccountRequest,
 *   !proto.commonpb.ListAccountResponse>}
 */
const methodDescriptor_ListService_ListAccount = new grpc.web.MethodDescriptor(
  '/commonpb.ListService/ListAccount',
  grpc.web.MethodType.UNARY,
  proto.commonpb.ListAccountRequest,
  proto.commonpb.ListAccountResponse,
  /**
   * @param {!proto.commonpb.ListAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.ListAccountResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.commonpb.ListAccountRequest,
 *   !proto.commonpb.ListAccountResponse>}
 */
const methodInfo_ListService_ListAccount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.commonpb.ListAccountResponse,
  /**
   * @param {!proto.commonpb.ListAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.ListAccountResponse.deserializeBinary
);


/**
 * @param {!proto.commonpb.ListAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.commonpb.ListAccountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.commonpb.ListAccountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.commonpb.ListServiceClient.prototype.listAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/commonpb.ListService/ListAccount',
      request,
      metadata || {},
      methodDescriptor_ListService_ListAccount,
      callback);
};


/**
 * @param {!proto.commonpb.ListAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.commonpb.ListAccountResponse>}
 *     A native promise that resolves to the response
 */
proto.commonpb.ListServicePromiseClient.prototype.listAccount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/commonpb.ListService/ListAccount',
      request,
      metadata || {},
      methodDescriptor_ListService_ListAccount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.commonpb.ListBankAccountRequest,
 *   !proto.commonpb.ListBankAccountResponse>}
 */
const methodDescriptor_ListService_ListBankAccount = new grpc.web.MethodDescriptor(
  '/commonpb.ListService/ListBankAccount',
  grpc.web.MethodType.UNARY,
  proto.commonpb.ListBankAccountRequest,
  proto.commonpb.ListBankAccountResponse,
  /**
   * @param {!proto.commonpb.ListBankAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.ListBankAccountResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.commonpb.ListBankAccountRequest,
 *   !proto.commonpb.ListBankAccountResponse>}
 */
const methodInfo_ListService_ListBankAccount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.commonpb.ListBankAccountResponse,
  /**
   * @param {!proto.commonpb.ListBankAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.ListBankAccountResponse.deserializeBinary
);


/**
 * @param {!proto.commonpb.ListBankAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.commonpb.ListBankAccountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.commonpb.ListBankAccountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.commonpb.ListServiceClient.prototype.listBankAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/commonpb.ListService/ListBankAccount',
      request,
      metadata || {},
      methodDescriptor_ListService_ListBankAccount,
      callback);
};


/**
 * @param {!proto.commonpb.ListBankAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.commonpb.ListBankAccountResponse>}
 *     A native promise that resolves to the response
 */
proto.commonpb.ListServicePromiseClient.prototype.listBankAccount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/commonpb.ListService/ListBankAccount',
      request,
      metadata || {},
      methodDescriptor_ListService_ListBankAccount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.commonpb.ListSecurityRequest,
 *   !proto.commonpb.ListSecurityResponse>}
 */
const methodDescriptor_ListService_ListSecurity = new grpc.web.MethodDescriptor(
  '/commonpb.ListService/ListSecurity',
  grpc.web.MethodType.UNARY,
  proto.commonpb.ListSecurityRequest,
  proto.commonpb.ListSecurityResponse,
  /**
   * @param {!proto.commonpb.ListSecurityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.ListSecurityResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.commonpb.ListSecurityRequest,
 *   !proto.commonpb.ListSecurityResponse>}
 */
const methodInfo_ListService_ListSecurity = new grpc.web.AbstractClientBase.MethodInfo(
  proto.commonpb.ListSecurityResponse,
  /**
   * @param {!proto.commonpb.ListSecurityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.ListSecurityResponse.deserializeBinary
);


/**
 * @param {!proto.commonpb.ListSecurityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.commonpb.ListSecurityResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.commonpb.ListSecurityResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.commonpb.ListServiceClient.prototype.listSecurity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/commonpb.ListService/ListSecurity',
      request,
      metadata || {},
      methodDescriptor_ListService_ListSecurity,
      callback);
};


/**
 * @param {!proto.commonpb.ListSecurityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.commonpb.ListSecurityResponse>}
 *     A native promise that resolves to the response
 */
proto.commonpb.ListServicePromiseClient.prototype.listSecurity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/commonpb.ListService/ListSecurity',
      request,
      metadata || {},
      methodDescriptor_ListService_ListSecurity);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.commonpb.ListSystemCodeRequest,
 *   !proto.commonpb.ListSystemCodeResponse>}
 */
const methodDescriptor_ListService_ListSystemCode = new grpc.web.MethodDescriptor(
  '/commonpb.ListService/ListSystemCode',
  grpc.web.MethodType.UNARY,
  proto.commonpb.ListSystemCodeRequest,
  proto.commonpb.ListSystemCodeResponse,
  /**
   * @param {!proto.commonpb.ListSystemCodeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.ListSystemCodeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.commonpb.ListSystemCodeRequest,
 *   !proto.commonpb.ListSystemCodeResponse>}
 */
const methodInfo_ListService_ListSystemCode = new grpc.web.AbstractClientBase.MethodInfo(
  proto.commonpb.ListSystemCodeResponse,
  /**
   * @param {!proto.commonpb.ListSystemCodeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.ListSystemCodeResponse.deserializeBinary
);


/**
 * @param {!proto.commonpb.ListSystemCodeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.commonpb.ListSystemCodeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.commonpb.ListSystemCodeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.commonpb.ListServiceClient.prototype.listSystemCode =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/commonpb.ListService/ListSystemCode',
      request,
      metadata || {},
      methodDescriptor_ListService_ListSystemCode,
      callback);
};


/**
 * @param {!proto.commonpb.ListSystemCodeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.commonpb.ListSystemCodeResponse>}
 *     A native promise that resolves to the response
 */
proto.commonpb.ListServicePromiseClient.prototype.listSystemCode =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/commonpb.ListService/ListSystemCode',
      request,
      metadata || {},
      methodDescriptor_ListService_ListSystemCode);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.commonpb.LazyLoadRequest,
 *   !proto.commonpb.LazyLoadAccountResponse>}
 */
const methodDescriptor_ListService_LazyLoadAccount = new grpc.web.MethodDescriptor(
  '/commonpb.ListService/LazyLoadAccount',
  grpc.web.MethodType.UNARY,
  proto.commonpb.LazyLoadRequest,
  proto.commonpb.LazyLoadAccountResponse,
  /**
   * @param {!proto.commonpb.LazyLoadRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.LazyLoadAccountResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.commonpb.LazyLoadRequest,
 *   !proto.commonpb.LazyLoadAccountResponse>}
 */
const methodInfo_ListService_LazyLoadAccount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.commonpb.LazyLoadAccountResponse,
  /**
   * @param {!proto.commonpb.LazyLoadRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.LazyLoadAccountResponse.deserializeBinary
);


/**
 * @param {!proto.commonpb.LazyLoadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.commonpb.LazyLoadAccountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.commonpb.LazyLoadAccountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.commonpb.ListServiceClient.prototype.lazyLoadAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/commonpb.ListService/LazyLoadAccount',
      request,
      metadata || {},
      methodDescriptor_ListService_LazyLoadAccount,
      callback);
};


/**
 * @param {!proto.commonpb.LazyLoadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.commonpb.LazyLoadAccountResponse>}
 *     A native promise that resolves to the response
 */
proto.commonpb.ListServicePromiseClient.prototype.lazyLoadAccount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/commonpb.ListService/LazyLoadAccount',
      request,
      metadata || {},
      methodDescriptor_ListService_LazyLoadAccount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.commonpb.LazyLoadSecurityRequest,
 *   !proto.commonpb.LazyLoadSecurityResponse>}
 */
const methodDescriptor_ListService_LazyLoadSecurity = new grpc.web.MethodDescriptor(
  '/commonpb.ListService/LazyLoadSecurity',
  grpc.web.MethodType.UNARY,
  proto.commonpb.LazyLoadSecurityRequest,
  proto.commonpb.LazyLoadSecurityResponse,
  /**
   * @param {!proto.commonpb.LazyLoadSecurityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.LazyLoadSecurityResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.commonpb.LazyLoadSecurityRequest,
 *   !proto.commonpb.LazyLoadSecurityResponse>}
 */
const methodInfo_ListService_LazyLoadSecurity = new grpc.web.AbstractClientBase.MethodInfo(
  proto.commonpb.LazyLoadSecurityResponse,
  /**
   * @param {!proto.commonpb.LazyLoadSecurityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.LazyLoadSecurityResponse.deserializeBinary
);


/**
 * @param {!proto.commonpb.LazyLoadSecurityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.commonpb.LazyLoadSecurityResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.commonpb.LazyLoadSecurityResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.commonpb.ListServiceClient.prototype.lazyLoadSecurity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/commonpb.ListService/LazyLoadSecurity',
      request,
      metadata || {},
      methodDescriptor_ListService_LazyLoadSecurity,
      callback);
};


/**
 * @param {!proto.commonpb.LazyLoadSecurityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.commonpb.LazyLoadSecurityResponse>}
 *     A native promise that resolves to the response
 */
proto.commonpb.ListServicePromiseClient.prototype.lazyLoadSecurity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/commonpb.ListService/LazyLoadSecurity',
      request,
      metadata || {},
      methodDescriptor_ListService_LazyLoadSecurity);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.commonpb.LazyLoadRequest,
 *   !proto.commonpb.LazyLoadAccountResponse>}
 */
const methodDescriptor_ListService_LazyLoadClientAccount = new grpc.web.MethodDescriptor(
  '/commonpb.ListService/LazyLoadClientAccount',
  grpc.web.MethodType.UNARY,
  proto.commonpb.LazyLoadRequest,
  proto.commonpb.LazyLoadAccountResponse,
  /**
   * @param {!proto.commonpb.LazyLoadRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.LazyLoadAccountResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.commonpb.LazyLoadRequest,
 *   !proto.commonpb.LazyLoadAccountResponse>}
 */
const methodInfo_ListService_LazyLoadClientAccount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.commonpb.LazyLoadAccountResponse,
  /**
   * @param {!proto.commonpb.LazyLoadRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.LazyLoadAccountResponse.deserializeBinary
);


/**
 * @param {!proto.commonpb.LazyLoadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.commonpb.LazyLoadAccountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.commonpb.LazyLoadAccountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.commonpb.ListServiceClient.prototype.lazyLoadClientAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/commonpb.ListService/LazyLoadClientAccount',
      request,
      metadata || {},
      methodDescriptor_ListService_LazyLoadClientAccount,
      callback);
};


/**
 * @param {!proto.commonpb.LazyLoadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.commonpb.LazyLoadAccountResponse>}
 *     A native promise that resolves to the response
 */
proto.commonpb.ListServicePromiseClient.prototype.lazyLoadClientAccount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/commonpb.ListService/LazyLoadClientAccount',
      request,
      metadata || {},
      methodDescriptor_ListService_LazyLoadClientAccount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.commonpb.LazyLoadRequest,
 *   !proto.commonpb.LazySystemCodeTypeResponse>}
 */
const methodDescriptor_ListService_LazyLoadSystemCodeType = new grpc.web.MethodDescriptor(
  '/commonpb.ListService/LazyLoadSystemCodeType',
  grpc.web.MethodType.UNARY,
  proto.commonpb.LazyLoadRequest,
  proto.commonpb.LazySystemCodeTypeResponse,
  /**
   * @param {!proto.commonpb.LazyLoadRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.LazySystemCodeTypeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.commonpb.LazyLoadRequest,
 *   !proto.commonpb.LazySystemCodeTypeResponse>}
 */
const methodInfo_ListService_LazyLoadSystemCodeType = new grpc.web.AbstractClientBase.MethodInfo(
  proto.commonpb.LazySystemCodeTypeResponse,
  /**
   * @param {!proto.commonpb.LazyLoadRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.LazySystemCodeTypeResponse.deserializeBinary
);


/**
 * @param {!proto.commonpb.LazyLoadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.commonpb.LazySystemCodeTypeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.commonpb.LazySystemCodeTypeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.commonpb.ListServiceClient.prototype.lazyLoadSystemCodeType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/commonpb.ListService/LazyLoadSystemCodeType',
      request,
      metadata || {},
      methodDescriptor_ListService_LazyLoadSystemCodeType,
      callback);
};


/**
 * @param {!proto.commonpb.LazyLoadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.commonpb.LazySystemCodeTypeResponse>}
 *     A native promise that resolves to the response
 */
proto.commonpb.ListServicePromiseClient.prototype.lazyLoadSystemCodeType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/commonpb.ListService/LazyLoadSystemCodeType',
      request,
      metadata || {},
      methodDescriptor_ListService_LazyLoadSystemCodeType);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.commonpb.LazyLoadRequest,
 *   !proto.commonpb.ListSystemNumberSubTypeResponse>}
 */
const methodDescriptor_ListService_LazyLoadSystemNumberSubType = new grpc.web.MethodDescriptor(
  '/commonpb.ListService/LazyLoadSystemNumberSubType',
  grpc.web.MethodType.UNARY,
  proto.commonpb.LazyLoadRequest,
  proto.commonpb.ListSystemNumberSubTypeResponse,
  /**
   * @param {!proto.commonpb.LazyLoadRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.ListSystemNumberSubTypeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.commonpb.LazyLoadRequest,
 *   !proto.commonpb.ListSystemNumberSubTypeResponse>}
 */
const methodInfo_ListService_LazyLoadSystemNumberSubType = new grpc.web.AbstractClientBase.MethodInfo(
  proto.commonpb.ListSystemNumberSubTypeResponse,
  /**
   * @param {!proto.commonpb.LazyLoadRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.ListSystemNumberSubTypeResponse.deserializeBinary
);


/**
 * @param {!proto.commonpb.LazyLoadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.commonpb.ListSystemNumberSubTypeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.commonpb.ListSystemNumberSubTypeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.commonpb.ListServiceClient.prototype.lazyLoadSystemNumberSubType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/commonpb.ListService/LazyLoadSystemNumberSubType',
      request,
      metadata || {},
      methodDescriptor_ListService_LazyLoadSystemNumberSubType,
      callback);
};


/**
 * @param {!proto.commonpb.LazyLoadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.commonpb.ListSystemNumberSubTypeResponse>}
 *     A native promise that resolves to the response
 */
proto.commonpb.ListServicePromiseClient.prototype.lazyLoadSystemNumberSubType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/commonpb.ListService/LazyLoadSystemNumberSubType',
      request,
      metadata || {},
      methodDescriptor_ListService_LazyLoadSystemNumberSubType);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.commonpb.LazyLoadRequest,
 *   !proto.commonpb.ListSystemCodeCountryResponse>}
 */
const methodDescriptor_ListService_LazyLoadSystemCodeCountry = new grpc.web.MethodDescriptor(
  '/commonpb.ListService/LazyLoadSystemCodeCountry',
  grpc.web.MethodType.UNARY,
  proto.commonpb.LazyLoadRequest,
  proto.commonpb.ListSystemCodeCountryResponse,
  /**
   * @param {!proto.commonpb.LazyLoadRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.ListSystemCodeCountryResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.commonpb.LazyLoadRequest,
 *   !proto.commonpb.ListSystemCodeCountryResponse>}
 */
const methodInfo_ListService_LazyLoadSystemCodeCountry = new grpc.web.AbstractClientBase.MethodInfo(
  proto.commonpb.ListSystemCodeCountryResponse,
  /**
   * @param {!proto.commonpb.LazyLoadRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.ListSystemCodeCountryResponse.deserializeBinary
);


/**
 * @param {!proto.commonpb.LazyLoadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.commonpb.ListSystemCodeCountryResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.commonpb.ListSystemCodeCountryResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.commonpb.ListServiceClient.prototype.lazyLoadSystemCodeCountry =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/commonpb.ListService/LazyLoadSystemCodeCountry',
      request,
      metadata || {},
      methodDescriptor_ListService_LazyLoadSystemCodeCountry,
      callback);
};


/**
 * @param {!proto.commonpb.LazyLoadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.commonpb.ListSystemCodeCountryResponse>}
 *     A native promise that resolves to the response
 */
proto.commonpb.ListServicePromiseClient.prototype.lazyLoadSystemCodeCountry =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/commonpb.ListService/LazyLoadSystemCodeCountry',
      request,
      metadata || {},
      methodDescriptor_ListService_LazyLoadSystemCodeCountry);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.commonpb.LazyLoadRequest,
 *   !proto.commonpb.ListSystemCodeResponse>}
 */
const methodDescriptor_ListService_LazyLoadExchangeCode = new grpc.web.MethodDescriptor(
  '/commonpb.ListService/LazyLoadExchangeCode',
  grpc.web.MethodType.UNARY,
  proto.commonpb.LazyLoadRequest,
  proto.commonpb.ListSystemCodeResponse,
  /**
   * @param {!proto.commonpb.LazyLoadRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.ListSystemCodeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.commonpb.LazyLoadRequest,
 *   !proto.commonpb.ListSystemCodeResponse>}
 */
const methodInfo_ListService_LazyLoadExchangeCode = new grpc.web.AbstractClientBase.MethodInfo(
  proto.commonpb.ListSystemCodeResponse,
  /**
   * @param {!proto.commonpb.LazyLoadRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.ListSystemCodeResponse.deserializeBinary
);


/**
 * @param {!proto.commonpb.LazyLoadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.commonpb.ListSystemCodeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.commonpb.ListSystemCodeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.commonpb.ListServiceClient.prototype.lazyLoadExchangeCode =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/commonpb.ListService/LazyLoadExchangeCode',
      request,
      metadata || {},
      methodDescriptor_ListService_LazyLoadExchangeCode,
      callback);
};


/**
 * @param {!proto.commonpb.LazyLoadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.commonpb.ListSystemCodeResponse>}
 *     A native promise that resolves to the response
 */
proto.commonpb.ListServicePromiseClient.prototype.lazyLoadExchangeCode =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/commonpb.ListService/LazyLoadExchangeCode',
      request,
      metadata || {},
      methodDescriptor_ListService_LazyLoadExchangeCode);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.commonpb.LazyLoadRequest,
 *   !proto.commonpb.ListSystemCodeResponse>}
 */
const methodDescriptor_ListService_LazyLoadRequestingAnalyst = new grpc.web.MethodDescriptor(
  '/commonpb.ListService/LazyLoadRequestingAnalyst',
  grpc.web.MethodType.UNARY,
  proto.commonpb.LazyLoadRequest,
  proto.commonpb.ListSystemCodeResponse,
  /**
   * @param {!proto.commonpb.LazyLoadRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.ListSystemCodeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.commonpb.LazyLoadRequest,
 *   !proto.commonpb.ListSystemCodeResponse>}
 */
const methodInfo_ListService_LazyLoadRequestingAnalyst = new grpc.web.AbstractClientBase.MethodInfo(
  proto.commonpb.ListSystemCodeResponse,
  /**
   * @param {!proto.commonpb.LazyLoadRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.ListSystemCodeResponse.deserializeBinary
);


/**
 * @param {!proto.commonpb.LazyLoadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.commonpb.ListSystemCodeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.commonpb.ListSystemCodeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.commonpb.ListServiceClient.prototype.lazyLoadRequestingAnalyst =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/commonpb.ListService/LazyLoadRequestingAnalyst',
      request,
      metadata || {},
      methodDescriptor_ListService_LazyLoadRequestingAnalyst,
      callback);
};


/**
 * @param {!proto.commonpb.LazyLoadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.commonpb.ListSystemCodeResponse>}
 *     A native promise that resolves to the response
 */
proto.commonpb.ListServicePromiseClient.prototype.lazyLoadRequestingAnalyst =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/commonpb.ListService/LazyLoadRequestingAnalyst',
      request,
      metadata || {},
      methodDescriptor_ListService_LazyLoadRequestingAnalyst);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.commonpb.LazyLoadRequest,
 *   !proto.commonpb.LazyCusipResponse>}
 */
const methodDescriptor_ListService_LazyLoadCusip = new grpc.web.MethodDescriptor(
  '/commonpb.ListService/LazyLoadCusip',
  grpc.web.MethodType.UNARY,
  proto.commonpb.LazyLoadRequest,
  proto.commonpb.LazyCusipResponse,
  /**
   * @param {!proto.commonpb.LazyLoadRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.LazyCusipResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.commonpb.LazyLoadRequest,
 *   !proto.commonpb.LazyCusipResponse>}
 */
const methodInfo_ListService_LazyLoadCusip = new grpc.web.AbstractClientBase.MethodInfo(
  proto.commonpb.LazyCusipResponse,
  /**
   * @param {!proto.commonpb.LazyLoadRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.LazyCusipResponse.deserializeBinary
);


/**
 * @param {!proto.commonpb.LazyLoadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.commonpb.LazyCusipResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.commonpb.LazyCusipResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.commonpb.ListServiceClient.prototype.lazyLoadCusip =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/commonpb.ListService/LazyLoadCusip',
      request,
      metadata || {},
      methodDescriptor_ListService_LazyLoadCusip,
      callback);
};


/**
 * @param {!proto.commonpb.LazyLoadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.commonpb.LazyCusipResponse>}
 *     A native promise that resolves to the response
 */
proto.commonpb.ListServicePromiseClient.prototype.lazyLoadCusip =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/commonpb.ListService/LazyLoadCusip',
      request,
      metadata || {},
      methodDescriptor_ListService_LazyLoadCusip);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.commonpb.ListSubAccountNoRequest,
 *   !proto.commonpb.LazySubAccountResponse>}
 */
const methodDescriptor_ListService_LazyLoadSubAcount = new grpc.web.MethodDescriptor(
  '/commonpb.ListService/LazyLoadSubAcount',
  grpc.web.MethodType.UNARY,
  proto.commonpb.ListSubAccountNoRequest,
  proto.commonpb.LazySubAccountResponse,
  /**
   * @param {!proto.commonpb.ListSubAccountNoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.LazySubAccountResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.commonpb.ListSubAccountNoRequest,
 *   !proto.commonpb.LazySubAccountResponse>}
 */
const methodInfo_ListService_LazyLoadSubAcount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.commonpb.LazySubAccountResponse,
  /**
   * @param {!proto.commonpb.ListSubAccountNoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.LazySubAccountResponse.deserializeBinary
);


/**
 * @param {!proto.commonpb.ListSubAccountNoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.commonpb.LazySubAccountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.commonpb.LazySubAccountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.commonpb.ListServiceClient.prototype.lazyLoadSubAcount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/commonpb.ListService/LazyLoadSubAcount',
      request,
      metadata || {},
      methodDescriptor_ListService_LazyLoadSubAcount,
      callback);
};


/**
 * @param {!proto.commonpb.ListSubAccountNoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.commonpb.LazySubAccountResponse>}
 *     A native promise that resolves to the response
 */
proto.commonpb.ListServicePromiseClient.prototype.lazyLoadSubAcount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/commonpb.ListService/LazyLoadSubAcount',
      request,
      metadata || {},
      methodDescriptor_ListService_LazyLoadSubAcount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.commonpb.LazyLoadRequest,
 *   !proto.commonpb.LazyAccountWalletResponse>}
 */
const methodDescriptor_ListService_LazyLoadAccountWallet = new grpc.web.MethodDescriptor(
  '/commonpb.ListService/LazyLoadAccountWallet',
  grpc.web.MethodType.UNARY,
  proto.commonpb.LazyLoadRequest,
  proto.commonpb.LazyAccountWalletResponse,
  /**
   * @param {!proto.commonpb.LazyLoadRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.LazyAccountWalletResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.commonpb.LazyLoadRequest,
 *   !proto.commonpb.LazyAccountWalletResponse>}
 */
const methodInfo_ListService_LazyLoadAccountWallet = new grpc.web.AbstractClientBase.MethodInfo(
  proto.commonpb.LazyAccountWalletResponse,
  /**
   * @param {!proto.commonpb.LazyLoadRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.LazyAccountWalletResponse.deserializeBinary
);


/**
 * @param {!proto.commonpb.LazyLoadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.commonpb.LazyAccountWalletResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.commonpb.LazyAccountWalletResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.commonpb.ListServiceClient.prototype.lazyLoadAccountWallet =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/commonpb.ListService/LazyLoadAccountWallet',
      request,
      metadata || {},
      methodDescriptor_ListService_LazyLoadAccountWallet,
      callback);
};


/**
 * @param {!proto.commonpb.LazyLoadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.commonpb.LazyAccountWalletResponse>}
 *     A native promise that resolves to the response
 */
proto.commonpb.ListServicePromiseClient.prototype.lazyLoadAccountWallet =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/commonpb.ListService/LazyLoadAccountWallet',
      request,
      metadata || {},
      methodDescriptor_ListService_LazyLoadAccountWallet);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.commonpb.ListEmptyRequest,
 *   !proto.commonpb.ListSignetWalletResponse>}
 */
const methodDescriptor_ListService_ListSignetWallet = new grpc.web.MethodDescriptor(
  '/commonpb.ListService/ListSignetWallet',
  grpc.web.MethodType.UNARY,
  proto.commonpb.ListEmptyRequest,
  proto.commonpb.ListSignetWalletResponse,
  /**
   * @param {!proto.commonpb.ListEmptyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.ListSignetWalletResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.commonpb.ListEmptyRequest,
 *   !proto.commonpb.ListSignetWalletResponse>}
 */
const methodInfo_ListService_ListSignetWallet = new grpc.web.AbstractClientBase.MethodInfo(
  proto.commonpb.ListSignetWalletResponse,
  /**
   * @param {!proto.commonpb.ListEmptyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.ListSignetWalletResponse.deserializeBinary
);


/**
 * @param {!proto.commonpb.ListEmptyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.commonpb.ListSignetWalletResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.commonpb.ListSignetWalletResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.commonpb.ListServiceClient.prototype.listSignetWallet =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/commonpb.ListService/ListSignetWallet',
      request,
      metadata || {},
      methodDescriptor_ListService_ListSignetWallet,
      callback);
};


/**
 * @param {!proto.commonpb.ListEmptyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.commonpb.ListSignetWalletResponse>}
 *     A native promise that resolves to the response
 */
proto.commonpb.ListServicePromiseClient.prototype.listSignetWallet =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/commonpb.ListService/ListSignetWallet',
      request,
      metadata || {},
      methodDescriptor_ListService_ListSignetWallet);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.commonpb.ListEmptyRequest,
 *   !proto.commonpb.ListHouseAccountResponse>}
 */
const methodDescriptor_ListService_ListHouseAccount = new grpc.web.MethodDescriptor(
  '/commonpb.ListService/ListHouseAccount',
  grpc.web.MethodType.UNARY,
  proto.commonpb.ListEmptyRequest,
  proto.commonpb.ListHouseAccountResponse,
  /**
   * @param {!proto.commonpb.ListEmptyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.ListHouseAccountResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.commonpb.ListEmptyRequest,
 *   !proto.commonpb.ListHouseAccountResponse>}
 */
const methodInfo_ListService_ListHouseAccount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.commonpb.ListHouseAccountResponse,
  /**
   * @param {!proto.commonpb.ListEmptyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.ListHouseAccountResponse.deserializeBinary
);


/**
 * @param {!proto.commonpb.ListEmptyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.commonpb.ListHouseAccountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.commonpb.ListHouseAccountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.commonpb.ListServiceClient.prototype.listHouseAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/commonpb.ListService/ListHouseAccount',
      request,
      metadata || {},
      methodDescriptor_ListService_ListHouseAccount,
      callback);
};


/**
 * @param {!proto.commonpb.ListEmptyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.commonpb.ListHouseAccountResponse>}
 *     A native promise that resolves to the response
 */
proto.commonpb.ListServicePromiseClient.prototype.listHouseAccount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/commonpb.ListService/ListHouseAccount',
      request,
      metadata || {},
      methodDescriptor_ListService_ListHouseAccount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.commonpb.ListCusipRequest,
 *   !proto.commonpb.ListCusipResponse>}
 */
const methodDescriptor_ListService_ListCusip = new grpc.web.MethodDescriptor(
  '/commonpb.ListService/ListCusip',
  grpc.web.MethodType.UNARY,
  proto.commonpb.ListCusipRequest,
  proto.commonpb.ListCusipResponse,
  /**
   * @param {!proto.commonpb.ListCusipRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.ListCusipResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.commonpb.ListCusipRequest,
 *   !proto.commonpb.ListCusipResponse>}
 */
const methodInfo_ListService_ListCusip = new grpc.web.AbstractClientBase.MethodInfo(
  proto.commonpb.ListCusipResponse,
  /**
   * @param {!proto.commonpb.ListCusipRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.ListCusipResponse.deserializeBinary
);


/**
 * @param {!proto.commonpb.ListCusipRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.commonpb.ListCusipResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.commonpb.ListCusipResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.commonpb.ListServiceClient.prototype.listCusip =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/commonpb.ListService/ListCusip',
      request,
      metadata || {},
      methodDescriptor_ListService_ListCusip,
      callback);
};


/**
 * @param {!proto.commonpb.ListCusipRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.commonpb.ListCusipResponse>}
 *     A native promise that resolves to the response
 */
proto.commonpb.ListServicePromiseClient.prototype.listCusip =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/commonpb.ListService/ListCusip',
      request,
      metadata || {},
      methodDescriptor_ListService_ListCusip);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.commonpb.LazyBrokerRequest,
 *   !proto.commonpb.LazyBrokerResponse>}
 */
const methodDescriptor_ListService_ListBroker = new grpc.web.MethodDescriptor(
  '/commonpb.ListService/ListBroker',
  grpc.web.MethodType.UNARY,
  proto.commonpb.LazyBrokerRequest,
  proto.commonpb.LazyBrokerResponse,
  /**
   * @param {!proto.commonpb.LazyBrokerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.LazyBrokerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.commonpb.LazyBrokerRequest,
 *   !proto.commonpb.LazyBrokerResponse>}
 */
const methodInfo_ListService_ListBroker = new grpc.web.AbstractClientBase.MethodInfo(
  proto.commonpb.LazyBrokerResponse,
  /**
   * @param {!proto.commonpb.LazyBrokerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.LazyBrokerResponse.deserializeBinary
);


/**
 * @param {!proto.commonpb.LazyBrokerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.commonpb.LazyBrokerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.commonpb.LazyBrokerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.commonpb.ListServiceClient.prototype.listBroker =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/commonpb.ListService/ListBroker',
      request,
      metadata || {},
      methodDescriptor_ListService_ListBroker,
      callback);
};


/**
 * @param {!proto.commonpb.LazyBrokerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.commonpb.LazyBrokerResponse>}
 *     A native promise that resolves to the response
 */
proto.commonpb.ListServicePromiseClient.prototype.listBroker =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/commonpb.ListService/ListBroker',
      request,
      metadata || {},
      methodDescriptor_ListService_ListBroker);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.commonpb.ListBankNameRequest,
 *   !proto.commonpb.ListBankNameResponse>}
 */
const methodDescriptor_ListService_ListBankName = new grpc.web.MethodDescriptor(
  '/commonpb.ListService/ListBankName',
  grpc.web.MethodType.UNARY,
  proto.commonpb.ListBankNameRequest,
  proto.commonpb.ListBankNameResponse,
  /**
   * @param {!proto.commonpb.ListBankNameRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.ListBankNameResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.commonpb.ListBankNameRequest,
 *   !proto.commonpb.ListBankNameResponse>}
 */
const methodInfo_ListService_ListBankName = new grpc.web.AbstractClientBase.MethodInfo(
  proto.commonpb.ListBankNameResponse,
  /**
   * @param {!proto.commonpb.ListBankNameRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.ListBankNameResponse.deserializeBinary
);


/**
 * @param {!proto.commonpb.ListBankNameRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.commonpb.ListBankNameResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.commonpb.ListBankNameResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.commonpb.ListServiceClient.prototype.listBankName =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/commonpb.ListService/ListBankName',
      request,
      metadata || {},
      methodDescriptor_ListService_ListBankName,
      callback);
};


/**
 * @param {!proto.commonpb.ListBankNameRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.commonpb.ListBankNameResponse>}
 *     A native promise that resolves to the response
 */
proto.commonpb.ListServicePromiseClient.prototype.listBankName =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/commonpb.ListService/ListBankName',
      request,
      metadata || {},
      methodDescriptor_ListService_ListBankName);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.commonpb.ListPageRequest,
 *   !proto.commonpb.ListPageResponse>}
 */
const methodDescriptor_ListService_ListPage = new grpc.web.MethodDescriptor(
  '/commonpb.ListService/ListPage',
  grpc.web.MethodType.UNARY,
  proto.commonpb.ListPageRequest,
  proto.commonpb.ListPageResponse,
  /**
   * @param {!proto.commonpb.ListPageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.ListPageResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.commonpb.ListPageRequest,
 *   !proto.commonpb.ListPageResponse>}
 */
const methodInfo_ListService_ListPage = new grpc.web.AbstractClientBase.MethodInfo(
  proto.commonpb.ListPageResponse,
  /**
   * @param {!proto.commonpb.ListPageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.ListPageResponse.deserializeBinary
);


/**
 * @param {!proto.commonpb.ListPageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.commonpb.ListPageResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.commonpb.ListPageResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.commonpb.ListServiceClient.prototype.listPage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/commonpb.ListService/ListPage',
      request,
      metadata || {},
      methodDescriptor_ListService_ListPage,
      callback);
};


/**
 * @param {!proto.commonpb.ListPageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.commonpb.ListPageResponse>}
 *     A native promise that resolves to the response
 */
proto.commonpb.ListServicePromiseClient.prototype.listPage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/commonpb.ListService/ListPage',
      request,
      metadata || {},
      methodDescriptor_ListService_ListPage);
};


module.exports = proto.commonpb;

