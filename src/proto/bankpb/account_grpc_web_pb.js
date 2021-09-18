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

var google_type_date_pb = require('../../google/type/date_pb.js')
const proto = {};
proto.bankpb = require('./account_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.bankpb.AccountServiceClient =
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
proto.bankpb.AccountServicePromiseClient =
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
 *   !proto.bankpb.Account,
 *   !proto.bankpb.CreateAccountResponse>}
 */
const methodDescriptor_AccountService_CreateAccount = new grpc.web.MethodDescriptor(
  '/bankpb.AccountService/CreateAccount',
  grpc.web.MethodType.UNARY,
  proto.bankpb.Account,
  proto.bankpb.CreateAccountResponse,
  /**
   * @param {!proto.bankpb.Account} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bankpb.CreateAccountResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bankpb.Account,
 *   !proto.bankpb.CreateAccountResponse>}
 */
const methodInfo_AccountService_CreateAccount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bankpb.CreateAccountResponse,
  /**
   * @param {!proto.bankpb.Account} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bankpb.CreateAccountResponse.deserializeBinary
);


/**
 * @param {!proto.bankpb.Account} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bankpb.CreateAccountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bankpb.CreateAccountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bankpb.AccountServiceClient.prototype.createAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bankpb.AccountService/CreateAccount',
      request,
      metadata || {},
      methodDescriptor_AccountService_CreateAccount,
      callback);
};


/**
 * @param {!proto.bankpb.Account} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bankpb.CreateAccountResponse>}
 *     A native promise that resolves to the response
 */
proto.bankpb.AccountServicePromiseClient.prototype.createAccount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bankpb.AccountService/CreateAccount',
      request,
      metadata || {},
      methodDescriptor_AccountService_CreateAccount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bankpb.Account,
 *   !proto.bankpb.UpdateAccountResponse>}
 */
const methodDescriptor_AccountService_UpdateAccount = new grpc.web.MethodDescriptor(
  '/bankpb.AccountService/UpdateAccount',
  grpc.web.MethodType.UNARY,
  proto.bankpb.Account,
  proto.bankpb.UpdateAccountResponse,
  /**
   * @param {!proto.bankpb.Account} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bankpb.UpdateAccountResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bankpb.Account,
 *   !proto.bankpb.UpdateAccountResponse>}
 */
const methodInfo_AccountService_UpdateAccount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bankpb.UpdateAccountResponse,
  /**
   * @param {!proto.bankpb.Account} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bankpb.UpdateAccountResponse.deserializeBinary
);


/**
 * @param {!proto.bankpb.Account} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bankpb.UpdateAccountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bankpb.UpdateAccountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bankpb.AccountServiceClient.prototype.updateAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bankpb.AccountService/UpdateAccount',
      request,
      metadata || {},
      methodDescriptor_AccountService_UpdateAccount,
      callback);
};


/**
 * @param {!proto.bankpb.Account} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bankpb.UpdateAccountResponse>}
 *     A native promise that resolves to the response
 */
proto.bankpb.AccountServicePromiseClient.prototype.updateAccount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bankpb.AccountService/UpdateAccount',
      request,
      metadata || {},
      methodDescriptor_AccountService_UpdateAccount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bankpb.ReadAccountRequest,
 *   !proto.bankpb.ReadAccountResponse>}
 */
const methodDescriptor_AccountService_ReadAccount = new grpc.web.MethodDescriptor(
  '/bankpb.AccountService/ReadAccount',
  grpc.web.MethodType.UNARY,
  proto.bankpb.ReadAccountRequest,
  proto.bankpb.ReadAccountResponse,
  /**
   * @param {!proto.bankpb.ReadAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bankpb.ReadAccountResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bankpb.ReadAccountRequest,
 *   !proto.bankpb.ReadAccountResponse>}
 */
const methodInfo_AccountService_ReadAccount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bankpb.ReadAccountResponse,
  /**
   * @param {!proto.bankpb.ReadAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bankpb.ReadAccountResponse.deserializeBinary
);


/**
 * @param {!proto.bankpb.ReadAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bankpb.ReadAccountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bankpb.ReadAccountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bankpb.AccountServiceClient.prototype.readAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bankpb.AccountService/ReadAccount',
      request,
      metadata || {},
      methodDescriptor_AccountService_ReadAccount,
      callback);
};


/**
 * @param {!proto.bankpb.ReadAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bankpb.ReadAccountResponse>}
 *     A native promise that resolves to the response
 */
proto.bankpb.AccountServicePromiseClient.prototype.readAccount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bankpb.AccountService/ReadAccount',
      request,
      metadata || {},
      methodDescriptor_AccountService_ReadAccount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bankpb.ListAccountRequest,
 *   !proto.bankpb.ListAccountResponse>}
 */
const methodDescriptor_AccountService_ListAccount = new grpc.web.MethodDescriptor(
  '/bankpb.AccountService/ListAccount',
  grpc.web.MethodType.UNARY,
  proto.bankpb.ListAccountRequest,
  proto.bankpb.ListAccountResponse,
  /**
   * @param {!proto.bankpb.ListAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bankpb.ListAccountResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bankpb.ListAccountRequest,
 *   !proto.bankpb.ListAccountResponse>}
 */
const methodInfo_AccountService_ListAccount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bankpb.ListAccountResponse,
  /**
   * @param {!proto.bankpb.ListAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bankpb.ListAccountResponse.deserializeBinary
);


/**
 * @param {!proto.bankpb.ListAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bankpb.ListAccountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bankpb.ListAccountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bankpb.AccountServiceClient.prototype.listAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bankpb.AccountService/ListAccount',
      request,
      metadata || {},
      methodDescriptor_AccountService_ListAccount,
      callback);
};


/**
 * @param {!proto.bankpb.ListAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bankpb.ListAccountResponse>}
 *     A native promise that resolves to the response
 */
proto.bankpb.AccountServicePromiseClient.prototype.listAccount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bankpb.AccountService/ListAccount',
      request,
      metadata || {},
      methodDescriptor_AccountService_ListAccount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bankpb.ListAccountAuditRequest,
 *   !proto.bankpb.ListAccountAuditResponse>}
 */
const methodDescriptor_AccountService_ListAccountAudit = new grpc.web.MethodDescriptor(
  '/bankpb.AccountService/ListAccountAudit',
  grpc.web.MethodType.UNARY,
  proto.bankpb.ListAccountAuditRequest,
  proto.bankpb.ListAccountAuditResponse,
  /**
   * @param {!proto.bankpb.ListAccountAuditRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bankpb.ListAccountAuditResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bankpb.ListAccountAuditRequest,
 *   !proto.bankpb.ListAccountAuditResponse>}
 */
const methodInfo_AccountService_ListAccountAudit = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bankpb.ListAccountAuditResponse,
  /**
   * @param {!proto.bankpb.ListAccountAuditRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bankpb.ListAccountAuditResponse.deserializeBinary
);


/**
 * @param {!proto.bankpb.ListAccountAuditRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bankpb.ListAccountAuditResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bankpb.ListAccountAuditResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bankpb.AccountServiceClient.prototype.listAccountAudit =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bankpb.AccountService/ListAccountAudit',
      request,
      metadata || {},
      methodDescriptor_AccountService_ListAccountAudit,
      callback);
};


/**
 * @param {!proto.bankpb.ListAccountAuditRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bankpb.ListAccountAuditResponse>}
 *     A native promise that resolves to the response
 */
proto.bankpb.AccountServicePromiseClient.prototype.listAccountAudit =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bankpb.AccountService/ListAccountAudit',
      request,
      metadata || {},
      methodDescriptor_AccountService_ListAccountAudit);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bankpb.ListGlBankRequest,
 *   !proto.bankpb.ListGlBankResponse>}
 */
const methodDescriptor_AccountService_ListGlBank = new grpc.web.MethodDescriptor(
  '/bankpb.AccountService/ListGlBank',
  grpc.web.MethodType.UNARY,
  proto.bankpb.ListGlBankRequest,
  proto.bankpb.ListGlBankResponse,
  /**
   * @param {!proto.bankpb.ListGlBankRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bankpb.ListGlBankResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bankpb.ListGlBankRequest,
 *   !proto.bankpb.ListGlBankResponse>}
 */
const methodInfo_AccountService_ListGlBank = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bankpb.ListGlBankResponse,
  /**
   * @param {!proto.bankpb.ListGlBankRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bankpb.ListGlBankResponse.deserializeBinary
);


/**
 * @param {!proto.bankpb.ListGlBankRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bankpb.ListGlBankResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bankpb.ListGlBankResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bankpb.AccountServiceClient.prototype.listGlBank =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bankpb.AccountService/ListGlBank',
      request,
      metadata || {},
      methodDescriptor_AccountService_ListGlBank,
      callback);
};


/**
 * @param {!proto.bankpb.ListGlBankRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bankpb.ListGlBankResponse>}
 *     A native promise that resolves to the response
 */
proto.bankpb.AccountServicePromiseClient.prototype.listGlBank =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bankpb.AccountService/ListGlBank',
      request,
      metadata || {},
      methodDescriptor_AccountService_ListGlBank);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bankpb.ReadDefaultGlBankRequest,
 *   !proto.bankpb.GlBank>}
 */
const methodDescriptor_AccountService_ReadDefaultGlBank = new grpc.web.MethodDescriptor(
  '/bankpb.AccountService/ReadDefaultGlBank',
  grpc.web.MethodType.UNARY,
  proto.bankpb.ReadDefaultGlBankRequest,
  proto.bankpb.GlBank,
  /**
   * @param {!proto.bankpb.ReadDefaultGlBankRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bankpb.GlBank.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bankpb.ReadDefaultGlBankRequest,
 *   !proto.bankpb.GlBank>}
 */
const methodInfo_AccountService_ReadDefaultGlBank = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bankpb.GlBank,
  /**
   * @param {!proto.bankpb.ReadDefaultGlBankRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bankpb.GlBank.deserializeBinary
);


/**
 * @param {!proto.bankpb.ReadDefaultGlBankRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bankpb.GlBank)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bankpb.GlBank>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bankpb.AccountServiceClient.prototype.readDefaultGlBank =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bankpb.AccountService/ReadDefaultGlBank',
      request,
      metadata || {},
      methodDescriptor_AccountService_ReadDefaultGlBank,
      callback);
};


/**
 * @param {!proto.bankpb.ReadDefaultGlBankRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bankpb.GlBank>}
 *     A native promise that resolves to the response
 */
proto.bankpb.AccountServicePromiseClient.prototype.readDefaultGlBank =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bankpb.AccountService/ReadDefaultGlBank',
      request,
      metadata || {},
      methodDescriptor_AccountService_ReadDefaultGlBank);
};


module.exports = proto.bankpb;

