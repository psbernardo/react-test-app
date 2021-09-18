/**
 * @fileoverview gRPC-Web generated client stub for trnspb
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
proto.trnspb = require('./transaction_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.trnspb.TransactionServiceClient =
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
proto.trnspb.TransactionServicePromiseClient =
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
 *   !proto.trnspb.Transaction,
 *   !proto.trnspb.TransactionResponse>}
 */
const methodDescriptor_TransactionService_CreateTransaction = new grpc.web.MethodDescriptor(
  '/trnspb.TransactionService/CreateTransaction',
  grpc.web.MethodType.UNARY,
  proto.trnspb.Transaction,
  proto.trnspb.TransactionResponse,
  /**
   * @param {!proto.trnspb.Transaction} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trnspb.TransactionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.trnspb.Transaction,
 *   !proto.trnspb.TransactionResponse>}
 */
const methodInfo_TransactionService_CreateTransaction = new grpc.web.AbstractClientBase.MethodInfo(
  proto.trnspb.TransactionResponse,
  /**
   * @param {!proto.trnspb.Transaction} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trnspb.TransactionResponse.deserializeBinary
);


/**
 * @param {!proto.trnspb.Transaction} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.trnspb.TransactionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.trnspb.TransactionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.trnspb.TransactionServiceClient.prototype.createTransaction =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/trnspb.TransactionService/CreateTransaction',
      request,
      metadata || {},
      methodDescriptor_TransactionService_CreateTransaction,
      callback);
};


/**
 * @param {!proto.trnspb.Transaction} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.trnspb.TransactionResponse>}
 *     A native promise that resolves to the response
 */
proto.trnspb.TransactionServicePromiseClient.prototype.createTransaction =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/trnspb.TransactionService/CreateTransaction',
      request,
      metadata || {},
      methodDescriptor_TransactionService_CreateTransaction);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.trnspb.Transaction,
 *   !proto.trnspb.TransactionResponse>}
 */
const methodDescriptor_TransactionService_ProcessPendingTransaction = new grpc.web.MethodDescriptor(
  '/trnspb.TransactionService/ProcessPendingTransaction',
  grpc.web.MethodType.UNARY,
  proto.trnspb.Transaction,
  proto.trnspb.TransactionResponse,
  /**
   * @param {!proto.trnspb.Transaction} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trnspb.TransactionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.trnspb.Transaction,
 *   !proto.trnspb.TransactionResponse>}
 */
const methodInfo_TransactionService_ProcessPendingTransaction = new grpc.web.AbstractClientBase.MethodInfo(
  proto.trnspb.TransactionResponse,
  /**
   * @param {!proto.trnspb.Transaction} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trnspb.TransactionResponse.deserializeBinary
);


/**
 * @param {!proto.trnspb.Transaction} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.trnspb.TransactionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.trnspb.TransactionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.trnspb.TransactionServiceClient.prototype.processPendingTransaction =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/trnspb.TransactionService/ProcessPendingTransaction',
      request,
      metadata || {},
      methodDescriptor_TransactionService_ProcessPendingTransaction,
      callback);
};


/**
 * @param {!proto.trnspb.Transaction} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.trnspb.TransactionResponse>}
 *     A native promise that resolves to the response
 */
proto.trnspb.TransactionServicePromiseClient.prototype.processPendingTransaction =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/trnspb.TransactionService/ProcessPendingTransaction',
      request,
      metadata || {},
      methodDescriptor_TransactionService_ProcessPendingTransaction);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.trnspb.BatchProcessPendingTransactionRequest,
 *   !proto.trnspb.BatchProcessPendingTransactionResponse>}
 */
const methodDescriptor_TransactionService_BatchProcessPendingTransaction = new grpc.web.MethodDescriptor(
  '/trnspb.TransactionService/BatchProcessPendingTransaction',
  grpc.web.MethodType.UNARY,
  proto.trnspb.BatchProcessPendingTransactionRequest,
  proto.trnspb.BatchProcessPendingTransactionResponse,
  /**
   * @param {!proto.trnspb.BatchProcessPendingTransactionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trnspb.BatchProcessPendingTransactionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.trnspb.BatchProcessPendingTransactionRequest,
 *   !proto.trnspb.BatchProcessPendingTransactionResponse>}
 */
const methodInfo_TransactionService_BatchProcessPendingTransaction = new grpc.web.AbstractClientBase.MethodInfo(
  proto.trnspb.BatchProcessPendingTransactionResponse,
  /**
   * @param {!proto.trnspb.BatchProcessPendingTransactionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trnspb.BatchProcessPendingTransactionResponse.deserializeBinary
);


/**
 * @param {!proto.trnspb.BatchProcessPendingTransactionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.trnspb.BatchProcessPendingTransactionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.trnspb.BatchProcessPendingTransactionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.trnspb.TransactionServiceClient.prototype.batchProcessPendingTransaction =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/trnspb.TransactionService/BatchProcessPendingTransaction',
      request,
      metadata || {},
      methodDescriptor_TransactionService_BatchProcessPendingTransaction,
      callback);
};


/**
 * @param {!proto.trnspb.BatchProcessPendingTransactionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.trnspb.BatchProcessPendingTransactionResponse>}
 *     A native promise that resolves to the response
 */
proto.trnspb.TransactionServicePromiseClient.prototype.batchProcessPendingTransaction =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/trnspb.TransactionService/BatchProcessPendingTransaction',
      request,
      metadata || {},
      methodDescriptor_TransactionService_BatchProcessPendingTransaction);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.trnspb.BatchCreateTransactionRequest,
 *   !proto.trnspb.BatchCreateTransactionResponse>}
 */
const methodDescriptor_TransactionService_BatchCreateTransaction = new grpc.web.MethodDescriptor(
  '/trnspb.TransactionService/BatchCreateTransaction',
  grpc.web.MethodType.UNARY,
  proto.trnspb.BatchCreateTransactionRequest,
  proto.trnspb.BatchCreateTransactionResponse,
  /**
   * @param {!proto.trnspb.BatchCreateTransactionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trnspb.BatchCreateTransactionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.trnspb.BatchCreateTransactionRequest,
 *   !proto.trnspb.BatchCreateTransactionResponse>}
 */
const methodInfo_TransactionService_BatchCreateTransaction = new grpc.web.AbstractClientBase.MethodInfo(
  proto.trnspb.BatchCreateTransactionResponse,
  /**
   * @param {!proto.trnspb.BatchCreateTransactionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trnspb.BatchCreateTransactionResponse.deserializeBinary
);


/**
 * @param {!proto.trnspb.BatchCreateTransactionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.trnspb.BatchCreateTransactionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.trnspb.BatchCreateTransactionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.trnspb.TransactionServiceClient.prototype.batchCreateTransaction =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/trnspb.TransactionService/BatchCreateTransaction',
      request,
      metadata || {},
      methodDescriptor_TransactionService_BatchCreateTransaction,
      callback);
};


/**
 * @param {!proto.trnspb.BatchCreateTransactionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.trnspb.BatchCreateTransactionResponse>}
 *     A native promise that resolves to the response
 */
proto.trnspb.TransactionServicePromiseClient.prototype.batchCreateTransaction =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/trnspb.TransactionService/BatchCreateTransaction',
      request,
      metadata || {},
      methodDescriptor_TransactionService_BatchCreateTransaction);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.trnspb.Transaction,
 *   !proto.trnspb.TransactionResponse>}
 */
const methodDescriptor_TransactionService_CorrectTransaction = new grpc.web.MethodDescriptor(
  '/trnspb.TransactionService/CorrectTransaction',
  grpc.web.MethodType.UNARY,
  proto.trnspb.Transaction,
  proto.trnspb.TransactionResponse,
  /**
   * @param {!proto.trnspb.Transaction} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trnspb.TransactionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.trnspb.Transaction,
 *   !proto.trnspb.TransactionResponse>}
 */
const methodInfo_TransactionService_CorrectTransaction = new grpc.web.AbstractClientBase.MethodInfo(
  proto.trnspb.TransactionResponse,
  /**
   * @param {!proto.trnspb.Transaction} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trnspb.TransactionResponse.deserializeBinary
);


/**
 * @param {!proto.trnspb.Transaction} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.trnspb.TransactionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.trnspb.TransactionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.trnspb.TransactionServiceClient.prototype.correctTransaction =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/trnspb.TransactionService/CorrectTransaction',
      request,
      metadata || {},
      methodDescriptor_TransactionService_CorrectTransaction,
      callback);
};


/**
 * @param {!proto.trnspb.Transaction} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.trnspb.TransactionResponse>}
 *     A native promise that resolves to the response
 */
proto.trnspb.TransactionServicePromiseClient.prototype.correctTransaction =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/trnspb.TransactionService/CorrectTransaction',
      request,
      metadata || {},
      methodDescriptor_TransactionService_CorrectTransaction);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.trnspb.CancelTransactionRequest,
 *   !proto.trnspb.TransactionResponse>}
 */
const methodDescriptor_TransactionService_CancelTransaction = new grpc.web.MethodDescriptor(
  '/trnspb.TransactionService/CancelTransaction',
  grpc.web.MethodType.UNARY,
  proto.trnspb.CancelTransactionRequest,
  proto.trnspb.TransactionResponse,
  /**
   * @param {!proto.trnspb.CancelTransactionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trnspb.TransactionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.trnspb.CancelTransactionRequest,
 *   !proto.trnspb.TransactionResponse>}
 */
const methodInfo_TransactionService_CancelTransaction = new grpc.web.AbstractClientBase.MethodInfo(
  proto.trnspb.TransactionResponse,
  /**
   * @param {!proto.trnspb.CancelTransactionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trnspb.TransactionResponse.deserializeBinary
);


/**
 * @param {!proto.trnspb.CancelTransactionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.trnspb.TransactionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.trnspb.TransactionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.trnspb.TransactionServiceClient.prototype.cancelTransaction =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/trnspb.TransactionService/CancelTransaction',
      request,
      metadata || {},
      methodDescriptor_TransactionService_CancelTransaction,
      callback);
};


/**
 * @param {!proto.trnspb.CancelTransactionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.trnspb.TransactionResponse>}
 *     A native promise that resolves to the response
 */
proto.trnspb.TransactionServicePromiseClient.prototype.cancelTransaction =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/trnspb.TransactionService/CancelTransaction',
      request,
      metadata || {},
      methodDescriptor_TransactionService_CancelTransaction);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.trnspb.ReadTransactionRequest,
 *   !proto.trnspb.ReadTransactionResponse>}
 */
const methodDescriptor_TransactionService_ReadTransaction = new grpc.web.MethodDescriptor(
  '/trnspb.TransactionService/ReadTransaction',
  grpc.web.MethodType.UNARY,
  proto.trnspb.ReadTransactionRequest,
  proto.trnspb.ReadTransactionResponse,
  /**
   * @param {!proto.trnspb.ReadTransactionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trnspb.ReadTransactionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.trnspb.ReadTransactionRequest,
 *   !proto.trnspb.ReadTransactionResponse>}
 */
const methodInfo_TransactionService_ReadTransaction = new grpc.web.AbstractClientBase.MethodInfo(
  proto.trnspb.ReadTransactionResponse,
  /**
   * @param {!proto.trnspb.ReadTransactionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trnspb.ReadTransactionResponse.deserializeBinary
);


/**
 * @param {!proto.trnspb.ReadTransactionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.trnspb.ReadTransactionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.trnspb.ReadTransactionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.trnspb.TransactionServiceClient.prototype.readTransaction =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/trnspb.TransactionService/ReadTransaction',
      request,
      metadata || {},
      methodDescriptor_TransactionService_ReadTransaction,
      callback);
};


/**
 * @param {!proto.trnspb.ReadTransactionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.trnspb.ReadTransactionResponse>}
 *     A native promise that resolves to the response
 */
proto.trnspb.TransactionServicePromiseClient.prototype.readTransaction =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/trnspb.TransactionService/ReadTransaction',
      request,
      metadata || {},
      methodDescriptor_TransactionService_ReadTransaction);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.trnspb.Transaction,
 *   !proto.trnspb.TransactionResponse>}
 */
const methodDescriptor_TransactionService_CreatePendingTransaction = new grpc.web.MethodDescriptor(
  '/trnspb.TransactionService/CreatePendingTransaction',
  grpc.web.MethodType.UNARY,
  proto.trnspb.Transaction,
  proto.trnspb.TransactionResponse,
  /**
   * @param {!proto.trnspb.Transaction} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trnspb.TransactionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.trnspb.Transaction,
 *   !proto.trnspb.TransactionResponse>}
 */
const methodInfo_TransactionService_CreatePendingTransaction = new grpc.web.AbstractClientBase.MethodInfo(
  proto.trnspb.TransactionResponse,
  /**
   * @param {!proto.trnspb.Transaction} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trnspb.TransactionResponse.deserializeBinary
);


/**
 * @param {!proto.trnspb.Transaction} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.trnspb.TransactionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.trnspb.TransactionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.trnspb.TransactionServiceClient.prototype.createPendingTransaction =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/trnspb.TransactionService/CreatePendingTransaction',
      request,
      metadata || {},
      methodDescriptor_TransactionService_CreatePendingTransaction,
      callback);
};


/**
 * @param {!proto.trnspb.Transaction} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.trnspb.TransactionResponse>}
 *     A native promise that resolves to the response
 */
proto.trnspb.TransactionServicePromiseClient.prototype.createPendingTransaction =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/trnspb.TransactionService/CreatePendingTransaction',
      request,
      metadata || {},
      methodDescriptor_TransactionService_CreatePendingTransaction);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.trnspb.GetFeeRequest,
 *   !proto.trnspb.GetFeeResponse>}
 */
const methodDescriptor_TransactionService_GetTafFee = new grpc.web.MethodDescriptor(
  '/trnspb.TransactionService/GetTafFee',
  grpc.web.MethodType.UNARY,
  proto.trnspb.GetFeeRequest,
  proto.trnspb.GetFeeResponse,
  /**
   * @param {!proto.trnspb.GetFeeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trnspb.GetFeeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.trnspb.GetFeeRequest,
 *   !proto.trnspb.GetFeeResponse>}
 */
const methodInfo_TransactionService_GetTafFee = new grpc.web.AbstractClientBase.MethodInfo(
  proto.trnspb.GetFeeResponse,
  /**
   * @param {!proto.trnspb.GetFeeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trnspb.GetFeeResponse.deserializeBinary
);


/**
 * @param {!proto.trnspb.GetFeeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.trnspb.GetFeeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.trnspb.GetFeeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.trnspb.TransactionServiceClient.prototype.getTafFee =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/trnspb.TransactionService/GetTafFee',
      request,
      metadata || {},
      methodDescriptor_TransactionService_GetTafFee,
      callback);
};


/**
 * @param {!proto.trnspb.GetFeeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.trnspb.GetFeeResponse>}
 *     A native promise that resolves to the response
 */
proto.trnspb.TransactionServicePromiseClient.prototype.getTafFee =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/trnspb.TransactionService/GetTafFee',
      request,
      metadata || {},
      methodDescriptor_TransactionService_GetTafFee);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.trnspb.GetFeeRequest,
 *   !proto.trnspb.GetFeeResponse>}
 */
const methodDescriptor_TransactionService_GetRegFee = new grpc.web.MethodDescriptor(
  '/trnspb.TransactionService/GetRegFee',
  grpc.web.MethodType.UNARY,
  proto.trnspb.GetFeeRequest,
  proto.trnspb.GetFeeResponse,
  /**
   * @param {!proto.trnspb.GetFeeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trnspb.GetFeeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.trnspb.GetFeeRequest,
 *   !proto.trnspb.GetFeeResponse>}
 */
const methodInfo_TransactionService_GetRegFee = new grpc.web.AbstractClientBase.MethodInfo(
  proto.trnspb.GetFeeResponse,
  /**
   * @param {!proto.trnspb.GetFeeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trnspb.GetFeeResponse.deserializeBinary
);


/**
 * @param {!proto.trnspb.GetFeeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.trnspb.GetFeeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.trnspb.GetFeeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.trnspb.TransactionServiceClient.prototype.getRegFee =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/trnspb.TransactionService/GetRegFee',
      request,
      metadata || {},
      methodDescriptor_TransactionService_GetRegFee,
      callback);
};


/**
 * @param {!proto.trnspb.GetFeeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.trnspb.GetFeeResponse>}
 *     A native promise that resolves to the response
 */
proto.trnspb.TransactionServicePromiseClient.prototype.getRegFee =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/trnspb.TransactionService/GetRegFee',
      request,
      metadata || {},
      methodDescriptor_TransactionService_GetRegFee);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.trnspb.GetAmountSignRequest,
 *   !proto.trnspb.GetAmountSignResponse>}
 */
const methodDescriptor_TransactionService_GetAmountSign = new grpc.web.MethodDescriptor(
  '/trnspb.TransactionService/GetAmountSign',
  grpc.web.MethodType.UNARY,
  proto.trnspb.GetAmountSignRequest,
  proto.trnspb.GetAmountSignResponse,
  /**
   * @param {!proto.trnspb.GetAmountSignRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trnspb.GetAmountSignResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.trnspb.GetAmountSignRequest,
 *   !proto.trnspb.GetAmountSignResponse>}
 */
const methodInfo_TransactionService_GetAmountSign = new grpc.web.AbstractClientBase.MethodInfo(
  proto.trnspb.GetAmountSignResponse,
  /**
   * @param {!proto.trnspb.GetAmountSignRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trnspb.GetAmountSignResponse.deserializeBinary
);


/**
 * @param {!proto.trnspb.GetAmountSignRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.trnspb.GetAmountSignResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.trnspb.GetAmountSignResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.trnspb.TransactionServiceClient.prototype.getAmountSign =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/trnspb.TransactionService/GetAmountSign',
      request,
      metadata || {},
      methodDescriptor_TransactionService_GetAmountSign,
      callback);
};


/**
 * @param {!proto.trnspb.GetAmountSignRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.trnspb.GetAmountSignResponse>}
 *     A native promise that resolves to the response
 */
proto.trnspb.TransactionServicePromiseClient.prototype.getAmountSign =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/trnspb.TransactionService/GetAmountSign',
      request,
      metadata || {},
      methodDescriptor_TransactionService_GetAmountSign);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.trnspb.ListFeesRequest,
 *   !proto.trnspb.ListFeesResponse>}
 */
const methodDescriptor_TransactionService_ListFees = new grpc.web.MethodDescriptor(
  '/trnspb.TransactionService/ListFees',
  grpc.web.MethodType.UNARY,
  proto.trnspb.ListFeesRequest,
  proto.trnspb.ListFeesResponse,
  /**
   * @param {!proto.trnspb.ListFeesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trnspb.ListFeesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.trnspb.ListFeesRequest,
 *   !proto.trnspb.ListFeesResponse>}
 */
const methodInfo_TransactionService_ListFees = new grpc.web.AbstractClientBase.MethodInfo(
  proto.trnspb.ListFeesResponse,
  /**
   * @param {!proto.trnspb.ListFeesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trnspb.ListFeesResponse.deserializeBinary
);


/**
 * @param {!proto.trnspb.ListFeesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.trnspb.ListFeesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.trnspb.ListFeesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.trnspb.TransactionServiceClient.prototype.listFees =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/trnspb.TransactionService/ListFees',
      request,
      metadata || {},
      methodDescriptor_TransactionService_ListFees,
      callback);
};


/**
 * @param {!proto.trnspb.ListFeesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.trnspb.ListFeesResponse>}
 *     A native promise that resolves to the response
 */
proto.trnspb.TransactionServicePromiseClient.prototype.listFees =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/trnspb.TransactionService/ListFees',
      request,
      metadata || {},
      methodDescriptor_TransactionService_ListFees);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.trnspb.BatchCreatePendingTransactionRequest,
 *   !proto.trnspb.BatchCreatePendingTransactionResponse>}
 */
const methodDescriptor_TransactionService_BatchCreatePendingTransaction = new grpc.web.MethodDescriptor(
  '/trnspb.TransactionService/BatchCreatePendingTransaction',
  grpc.web.MethodType.UNARY,
  proto.trnspb.BatchCreatePendingTransactionRequest,
  proto.trnspb.BatchCreatePendingTransactionResponse,
  /**
   * @param {!proto.trnspb.BatchCreatePendingTransactionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trnspb.BatchCreatePendingTransactionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.trnspb.BatchCreatePendingTransactionRequest,
 *   !proto.trnspb.BatchCreatePendingTransactionResponse>}
 */
const methodInfo_TransactionService_BatchCreatePendingTransaction = new grpc.web.AbstractClientBase.MethodInfo(
  proto.trnspb.BatchCreatePendingTransactionResponse,
  /**
   * @param {!proto.trnspb.BatchCreatePendingTransactionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trnspb.BatchCreatePendingTransactionResponse.deserializeBinary
);


/**
 * @param {!proto.trnspb.BatchCreatePendingTransactionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.trnspb.BatchCreatePendingTransactionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.trnspb.BatchCreatePendingTransactionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.trnspb.TransactionServiceClient.prototype.batchCreatePendingTransaction =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/trnspb.TransactionService/BatchCreatePendingTransaction',
      request,
      metadata || {},
      methodDescriptor_TransactionService_BatchCreatePendingTransaction,
      callback);
};


/**
 * @param {!proto.trnspb.BatchCreatePendingTransactionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.trnspb.BatchCreatePendingTransactionResponse>}
 *     A native promise that resolves to the response
 */
proto.trnspb.TransactionServicePromiseClient.prototype.batchCreatePendingTransaction =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/trnspb.TransactionService/BatchCreatePendingTransaction',
      request,
      metadata || {},
      methodDescriptor_TransactionService_BatchCreatePendingTransaction);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.trnspb.BatchCancelTransactionRequest,
 *   !proto.trnspb.BatchCancelTransactionResponse>}
 */
const methodDescriptor_TransactionService_BatchCancelTransaction = new grpc.web.MethodDescriptor(
  '/trnspb.TransactionService/BatchCancelTransaction',
  grpc.web.MethodType.UNARY,
  proto.trnspb.BatchCancelTransactionRequest,
  proto.trnspb.BatchCancelTransactionResponse,
  /**
   * @param {!proto.trnspb.BatchCancelTransactionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trnspb.BatchCancelTransactionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.trnspb.BatchCancelTransactionRequest,
 *   !proto.trnspb.BatchCancelTransactionResponse>}
 */
const methodInfo_TransactionService_BatchCancelTransaction = new grpc.web.AbstractClientBase.MethodInfo(
  proto.trnspb.BatchCancelTransactionResponse,
  /**
   * @param {!proto.trnspb.BatchCancelTransactionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trnspb.BatchCancelTransactionResponse.deserializeBinary
);


/**
 * @param {!proto.trnspb.BatchCancelTransactionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.trnspb.BatchCancelTransactionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.trnspb.BatchCancelTransactionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.trnspb.TransactionServiceClient.prototype.batchCancelTransaction =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/trnspb.TransactionService/BatchCancelTransaction',
      request,
      metadata || {},
      methodDescriptor_TransactionService_BatchCancelTransaction,
      callback);
};


/**
 * @param {!proto.trnspb.BatchCancelTransactionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.trnspb.BatchCancelTransactionResponse>}
 *     A native promise that resolves to the response
 */
proto.trnspb.TransactionServicePromiseClient.prototype.batchCancelTransaction =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/trnspb.TransactionService/BatchCancelTransaction',
      request,
      metadata || {},
      methodDescriptor_TransactionService_BatchCancelTransaction);
};


module.exports = proto.trnspb;

