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

const proto = {};
proto.commonpb = require('./lazyaccount_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.commonpb.LazyAccountServiceClient =
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
proto.commonpb.LazyAccountServicePromiseClient =
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
 *   !proto.commonpb.EmptyRequest,
 *   !proto.commonpb.LazyCorrespondentResponse>}
 */
const methodDescriptor_LazyAccountService_LazyCorrespondent = new grpc.web.MethodDescriptor(
  '/commonpb.LazyAccountService/LazyCorrespondent',
  grpc.web.MethodType.UNARY,
  proto.commonpb.EmptyRequest,
  proto.commonpb.LazyCorrespondentResponse,
  /**
   * @param {!proto.commonpb.EmptyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.LazyCorrespondentResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.commonpb.EmptyRequest,
 *   !proto.commonpb.LazyCorrespondentResponse>}
 */
const methodInfo_LazyAccountService_LazyCorrespondent = new grpc.web.AbstractClientBase.MethodInfo(
  proto.commonpb.LazyCorrespondentResponse,
  /**
   * @param {!proto.commonpb.EmptyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.LazyCorrespondentResponse.deserializeBinary
);


/**
 * @param {!proto.commonpb.EmptyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.commonpb.LazyCorrespondentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.commonpb.LazyCorrespondentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.commonpb.LazyAccountServiceClient.prototype.lazyCorrespondent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/commonpb.LazyAccountService/LazyCorrespondent',
      request,
      metadata || {},
      methodDescriptor_LazyAccountService_LazyCorrespondent,
      callback);
};


/**
 * @param {!proto.commonpb.EmptyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.commonpb.LazyCorrespondentResponse>}
 *     Promise that resolves to the response
 */
proto.commonpb.LazyAccountServicePromiseClient.prototype.lazyCorrespondent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/commonpb.LazyAccountService/LazyCorrespondent',
      request,
      metadata || {},
      methodDescriptor_LazyAccountService_LazyCorrespondent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.commonpb.LazyAccountRequest,
 *   !proto.commonpb.LazyAccountNameResponse>}
 */
const methodDescriptor_LazyAccountService_LazyAccountName = new grpc.web.MethodDescriptor(
  '/commonpb.LazyAccountService/LazyAccountName',
  grpc.web.MethodType.UNARY,
  proto.commonpb.LazyAccountRequest,
  proto.commonpb.LazyAccountNameResponse,
  /**
   * @param {!proto.commonpb.LazyAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.LazyAccountNameResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.commonpb.LazyAccountRequest,
 *   !proto.commonpb.LazyAccountNameResponse>}
 */
const methodInfo_LazyAccountService_LazyAccountName = new grpc.web.AbstractClientBase.MethodInfo(
  proto.commonpb.LazyAccountNameResponse,
  /**
   * @param {!proto.commonpb.LazyAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.LazyAccountNameResponse.deserializeBinary
);


/**
 * @param {!proto.commonpb.LazyAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.commonpb.LazyAccountNameResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.commonpb.LazyAccountNameResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.commonpb.LazyAccountServiceClient.prototype.lazyAccountName =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/commonpb.LazyAccountService/LazyAccountName',
      request,
      metadata || {},
      methodDescriptor_LazyAccountService_LazyAccountName,
      callback);
};


/**
 * @param {!proto.commonpb.LazyAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.commonpb.LazyAccountNameResponse>}
 *     Promise that resolves to the response
 */
proto.commonpb.LazyAccountServicePromiseClient.prototype.lazyAccountName =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/commonpb.LazyAccountService/LazyAccountName',
      request,
      metadata || {},
      methodDescriptor_LazyAccountService_LazyAccountName);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.commonpb.LazyAccountRequest,
 *   !proto.commonpb.LazyMasterAccountNoResponse>}
 */
const methodDescriptor_LazyAccountService_LazyMasterAccountNo = new grpc.web.MethodDescriptor(
  '/commonpb.LazyAccountService/LazyMasterAccountNo',
  grpc.web.MethodType.UNARY,
  proto.commonpb.LazyAccountRequest,
  proto.commonpb.LazyMasterAccountNoResponse,
  /**
   * @param {!proto.commonpb.LazyAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.LazyMasterAccountNoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.commonpb.LazyAccountRequest,
 *   !proto.commonpb.LazyMasterAccountNoResponse>}
 */
const methodInfo_LazyAccountService_LazyMasterAccountNo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.commonpb.LazyMasterAccountNoResponse,
  /**
   * @param {!proto.commonpb.LazyAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.LazyMasterAccountNoResponse.deserializeBinary
);


/**
 * @param {!proto.commonpb.LazyAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.commonpb.LazyMasterAccountNoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.commonpb.LazyMasterAccountNoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.commonpb.LazyAccountServiceClient.prototype.lazyMasterAccountNo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/commonpb.LazyAccountService/LazyMasterAccountNo',
      request,
      metadata || {},
      methodDescriptor_LazyAccountService_LazyMasterAccountNo,
      callback);
};


/**
 * @param {!proto.commonpb.LazyAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.commonpb.LazyMasterAccountNoResponse>}
 *     Promise that resolves to the response
 */
proto.commonpb.LazyAccountServicePromiseClient.prototype.lazyMasterAccountNo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/commonpb.LazyAccountService/LazyMasterAccountNo',
      request,
      metadata || {},
      methodDescriptor_LazyAccountService_LazyMasterAccountNo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.commonpb.LazyAccountRequest,
 *   !proto.commonpb.LazyAccountNoResponse>}
 */
const methodDescriptor_LazyAccountService_LazyAccountNo = new grpc.web.MethodDescriptor(
  '/commonpb.LazyAccountService/LazyAccountNo',
  grpc.web.MethodType.UNARY,
  proto.commonpb.LazyAccountRequest,
  proto.commonpb.LazyAccountNoResponse,
  /**
   * @param {!proto.commonpb.LazyAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.LazyAccountNoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.commonpb.LazyAccountRequest,
 *   !proto.commonpb.LazyAccountNoResponse>}
 */
const methodInfo_LazyAccountService_LazyAccountNo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.commonpb.LazyAccountNoResponse,
  /**
   * @param {!proto.commonpb.LazyAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.LazyAccountNoResponse.deserializeBinary
);


/**
 * @param {!proto.commonpb.LazyAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.commonpb.LazyAccountNoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.commonpb.LazyAccountNoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.commonpb.LazyAccountServiceClient.prototype.lazyAccountNo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/commonpb.LazyAccountService/LazyAccountNo',
      request,
      metadata || {},
      methodDescriptor_LazyAccountService_LazyAccountNo,
      callback);
};


/**
 * @param {!proto.commonpb.LazyAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.commonpb.LazyAccountNoResponse>}
 *     Promise that resolves to the response
 */
proto.commonpb.LazyAccountServicePromiseClient.prototype.lazyAccountNo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/commonpb.LazyAccountService/LazyAccountNo',
      request,
      metadata || {},
      methodDescriptor_LazyAccountService_LazyAccountNo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.commonpb.LazyAccountRequest,
 *   !proto.commonpb.LazyRepResponse>}
 */
const methodDescriptor_LazyAccountService_LazyRep = new grpc.web.MethodDescriptor(
  '/commonpb.LazyAccountService/LazyRep',
  grpc.web.MethodType.UNARY,
  proto.commonpb.LazyAccountRequest,
  proto.commonpb.LazyRepResponse,
  /**
   * @param {!proto.commonpb.LazyAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.LazyRepResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.commonpb.LazyAccountRequest,
 *   !proto.commonpb.LazyRepResponse>}
 */
const methodInfo_LazyAccountService_LazyRep = new grpc.web.AbstractClientBase.MethodInfo(
  proto.commonpb.LazyRepResponse,
  /**
   * @param {!proto.commonpb.LazyAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.LazyRepResponse.deserializeBinary
);


/**
 * @param {!proto.commonpb.LazyAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.commonpb.LazyRepResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.commonpb.LazyRepResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.commonpb.LazyAccountServiceClient.prototype.lazyRep =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/commonpb.LazyAccountService/LazyRep',
      request,
      metadata || {},
      methodDescriptor_LazyAccountService_LazyRep,
      callback);
};


/**
 * @param {!proto.commonpb.LazyAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.commonpb.LazyRepResponse>}
 *     Promise that resolves to the response
 */
proto.commonpb.LazyAccountServicePromiseClient.prototype.lazyRep =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/commonpb.LazyAccountService/LazyRep',
      request,
      metadata || {},
      methodDescriptor_LazyAccountService_LazyRep);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.commonpb.LazyAccountRequest,
 *   !proto.commonpb.LazyBranchResponse>}
 */
const methodDescriptor_LazyAccountService_LazyBranch = new grpc.web.MethodDescriptor(
  '/commonpb.LazyAccountService/LazyBranch',
  grpc.web.MethodType.UNARY,
  proto.commonpb.LazyAccountRequest,
  proto.commonpb.LazyBranchResponse,
  /**
   * @param {!proto.commonpb.LazyAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.LazyBranchResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.commonpb.LazyAccountRequest,
 *   !proto.commonpb.LazyBranchResponse>}
 */
const methodInfo_LazyAccountService_LazyBranch = new grpc.web.AbstractClientBase.MethodInfo(
  proto.commonpb.LazyBranchResponse,
  /**
   * @param {!proto.commonpb.LazyAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.LazyBranchResponse.deserializeBinary
);


/**
 * @param {!proto.commonpb.LazyAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.commonpb.LazyBranchResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.commonpb.LazyBranchResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.commonpb.LazyAccountServiceClient.prototype.lazyBranch =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/commonpb.LazyAccountService/LazyBranch',
      request,
      metadata || {},
      methodDescriptor_LazyAccountService_LazyBranch,
      callback);
};


/**
 * @param {!proto.commonpb.LazyAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.commonpb.LazyBranchResponse>}
 *     Promise that resolves to the response
 */
proto.commonpb.LazyAccountServicePromiseClient.prototype.lazyBranch =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/commonpb.LazyAccountService/LazyBranch',
      request,
      metadata || {},
      methodDescriptor_LazyAccountService_LazyBranch);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.commonpb.LazyFirstCorrespondentRequest,
 *   !proto.commonpb.LazyFirstCorrespondentResponse>}
 */
const methodDescriptor_LazyAccountService_LazyFirstCorrespondent = new grpc.web.MethodDescriptor(
  '/commonpb.LazyAccountService/LazyFirstCorrespondent',
  grpc.web.MethodType.UNARY,
  proto.commonpb.LazyFirstCorrespondentRequest,
  proto.commonpb.LazyFirstCorrespondentResponse,
  /**
   * @param {!proto.commonpb.LazyFirstCorrespondentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.LazyFirstCorrespondentResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.commonpb.LazyFirstCorrespondentRequest,
 *   !proto.commonpb.LazyFirstCorrespondentResponse>}
 */
const methodInfo_LazyAccountService_LazyFirstCorrespondent = new grpc.web.AbstractClientBase.MethodInfo(
  proto.commonpb.LazyFirstCorrespondentResponse,
  /**
   * @param {!proto.commonpb.LazyFirstCorrespondentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.LazyFirstCorrespondentResponse.deserializeBinary
);


/**
 * @param {!proto.commonpb.LazyFirstCorrespondentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.commonpb.LazyFirstCorrespondentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.commonpb.LazyFirstCorrespondentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.commonpb.LazyAccountServiceClient.prototype.lazyFirstCorrespondent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/commonpb.LazyAccountService/LazyFirstCorrespondent',
      request,
      metadata || {},
      methodDescriptor_LazyAccountService_LazyFirstCorrespondent,
      callback);
};


/**
 * @param {!proto.commonpb.LazyFirstCorrespondentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.commonpb.LazyFirstCorrespondentResponse>}
 *     Promise that resolves to the response
 */
proto.commonpb.LazyAccountServicePromiseClient.prototype.lazyFirstCorrespondent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/commonpb.LazyAccountService/LazyFirstCorrespondent',
      request,
      metadata || {},
      methodDescriptor_LazyAccountService_LazyFirstCorrespondent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.commonpb.LazyAccountRequest,
 *   !proto.commonpb.LazyAdministratorNameResponse>}
 */
const methodDescriptor_LazyAccountService_LazyAdministratorName = new grpc.web.MethodDescriptor(
  '/commonpb.LazyAccountService/LazyAdministratorName',
  grpc.web.MethodType.UNARY,
  proto.commonpb.LazyAccountRequest,
  proto.commonpb.LazyAdministratorNameResponse,
  /**
   * @param {!proto.commonpb.LazyAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.LazyAdministratorNameResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.commonpb.LazyAccountRequest,
 *   !proto.commonpb.LazyAdministratorNameResponse>}
 */
const methodInfo_LazyAccountService_LazyAdministratorName = new grpc.web.AbstractClientBase.MethodInfo(
  proto.commonpb.LazyAdministratorNameResponse,
  /**
   * @param {!proto.commonpb.LazyAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.LazyAdministratorNameResponse.deserializeBinary
);


/**
 * @param {!proto.commonpb.LazyAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.commonpb.LazyAdministratorNameResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.commonpb.LazyAdministratorNameResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.commonpb.LazyAccountServiceClient.prototype.lazyAdministratorName =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/commonpb.LazyAccountService/LazyAdministratorName',
      request,
      metadata || {},
      methodDescriptor_LazyAccountService_LazyAdministratorName,
      callback);
};


/**
 * @param {!proto.commonpb.LazyAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.commonpb.LazyAdministratorNameResponse>}
 *     Promise that resolves to the response
 */
proto.commonpb.LazyAccountServicePromiseClient.prototype.lazyAdministratorName =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/commonpb.LazyAccountService/LazyAdministratorName',
      request,
      metadata || {},
      methodDescriptor_LazyAccountService_LazyAdministratorName);
};


module.exports = proto.commonpb;

