/**
 * @fileoverview gRPC-Web generated client stub for reportpb
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

var proto_commonpb_file_pb = require('../../proto/commonpb/file_pb.js')
const proto = {};
proto.reportpb = require('./statementdisclosure_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.reportpb.StatementDisclosureServiceClient =
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
proto.reportpb.StatementDisclosureServicePromiseClient =
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
 *   !proto.reportpb.ListStatementDisclosureRequest,
 *   !proto.reportpb.ListStatementDisclosureResponse>}
 */
const methodDescriptor_StatementDisclosureService_ListStatementDisclosure = new grpc.web.MethodDescriptor(
  '/reportpb.StatementDisclosureService/ListStatementDisclosure',
  grpc.web.MethodType.UNARY,
  proto.reportpb.ListStatementDisclosureRequest,
  proto.reportpb.ListStatementDisclosureResponse,
  /**
   * @param {!proto.reportpb.ListStatementDisclosureRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.ListStatementDisclosureResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reportpb.ListStatementDisclosureRequest,
 *   !proto.reportpb.ListStatementDisclosureResponse>}
 */
const methodInfo_StatementDisclosureService_ListStatementDisclosure = new grpc.web.AbstractClientBase.MethodInfo(
  proto.reportpb.ListStatementDisclosureResponse,
  /**
   * @param {!proto.reportpb.ListStatementDisclosureRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.ListStatementDisclosureResponse.deserializeBinary
);


/**
 * @param {!proto.reportpb.ListStatementDisclosureRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.reportpb.ListStatementDisclosureResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.reportpb.ListStatementDisclosureResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reportpb.StatementDisclosureServiceClient.prototype.listStatementDisclosure =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/reportpb.StatementDisclosureService/ListStatementDisclosure',
      request,
      metadata || {},
      methodDescriptor_StatementDisclosureService_ListStatementDisclosure,
      callback);
};


/**
 * @param {!proto.reportpb.ListStatementDisclosureRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.reportpb.ListStatementDisclosureResponse>}
 *     A native promise that resolves to the response
 */
proto.reportpb.StatementDisclosureServicePromiseClient.prototype.listStatementDisclosure =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/reportpb.StatementDisclosureService/ListStatementDisclosure',
      request,
      metadata || {},
      methodDescriptor_StatementDisclosureService_ListStatementDisclosure);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.reportpb.ReadStatementDisclosureRequest,
 *   !proto.reportpb.ReadStatementDisclosureResponse>}
 */
const methodDescriptor_StatementDisclosureService_ReadStatementDisclosure = new grpc.web.MethodDescriptor(
  '/reportpb.StatementDisclosureService/ReadStatementDisclosure',
  grpc.web.MethodType.UNARY,
  proto.reportpb.ReadStatementDisclosureRequest,
  proto.reportpb.ReadStatementDisclosureResponse,
  /**
   * @param {!proto.reportpb.ReadStatementDisclosureRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.ReadStatementDisclosureResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reportpb.ReadStatementDisclosureRequest,
 *   !proto.reportpb.ReadStatementDisclosureResponse>}
 */
const methodInfo_StatementDisclosureService_ReadStatementDisclosure = new grpc.web.AbstractClientBase.MethodInfo(
  proto.reportpb.ReadStatementDisclosureResponse,
  /**
   * @param {!proto.reportpb.ReadStatementDisclosureRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.ReadStatementDisclosureResponse.deserializeBinary
);


/**
 * @param {!proto.reportpb.ReadStatementDisclosureRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.reportpb.ReadStatementDisclosureResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.reportpb.ReadStatementDisclosureResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reportpb.StatementDisclosureServiceClient.prototype.readStatementDisclosure =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/reportpb.StatementDisclosureService/ReadStatementDisclosure',
      request,
      metadata || {},
      methodDescriptor_StatementDisclosureService_ReadStatementDisclosure,
      callback);
};


/**
 * @param {!proto.reportpb.ReadStatementDisclosureRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.reportpb.ReadStatementDisclosureResponse>}
 *     A native promise that resolves to the response
 */
proto.reportpb.StatementDisclosureServicePromiseClient.prototype.readStatementDisclosure =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/reportpb.StatementDisclosureService/ReadStatementDisclosure',
      request,
      metadata || {},
      methodDescriptor_StatementDisclosureService_ReadStatementDisclosure);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.reportpb.StatementDisclosure,
 *   !proto.reportpb.CreateStatementDisclosureResponse>}
 */
const methodDescriptor_StatementDisclosureService_CreateStatementDisclosure = new grpc.web.MethodDescriptor(
  '/reportpb.StatementDisclosureService/CreateStatementDisclosure',
  grpc.web.MethodType.UNARY,
  proto.reportpb.StatementDisclosure,
  proto.reportpb.CreateStatementDisclosureResponse,
  /**
   * @param {!proto.reportpb.StatementDisclosure} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.CreateStatementDisclosureResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reportpb.StatementDisclosure,
 *   !proto.reportpb.CreateStatementDisclosureResponse>}
 */
const methodInfo_StatementDisclosureService_CreateStatementDisclosure = new grpc.web.AbstractClientBase.MethodInfo(
  proto.reportpb.CreateStatementDisclosureResponse,
  /**
   * @param {!proto.reportpb.StatementDisclosure} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.CreateStatementDisclosureResponse.deserializeBinary
);


/**
 * @param {!proto.reportpb.StatementDisclosure} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.reportpb.CreateStatementDisclosureResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.reportpb.CreateStatementDisclosureResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reportpb.StatementDisclosureServiceClient.prototype.createStatementDisclosure =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/reportpb.StatementDisclosureService/CreateStatementDisclosure',
      request,
      metadata || {},
      methodDescriptor_StatementDisclosureService_CreateStatementDisclosure,
      callback);
};


/**
 * @param {!proto.reportpb.StatementDisclosure} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.reportpb.CreateStatementDisclosureResponse>}
 *     A native promise that resolves to the response
 */
proto.reportpb.StatementDisclosureServicePromiseClient.prototype.createStatementDisclosure =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/reportpb.StatementDisclosureService/CreateStatementDisclosure',
      request,
      metadata || {},
      methodDescriptor_StatementDisclosureService_CreateStatementDisclosure);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.reportpb.StatementDisclosure,
 *   !proto.reportpb.UpdateStatementDisclosureResponse>}
 */
const methodDescriptor_StatementDisclosureService_UpdateStatementDisclosure = new grpc.web.MethodDescriptor(
  '/reportpb.StatementDisclosureService/UpdateStatementDisclosure',
  grpc.web.MethodType.UNARY,
  proto.reportpb.StatementDisclosure,
  proto.reportpb.UpdateStatementDisclosureResponse,
  /**
   * @param {!proto.reportpb.StatementDisclosure} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.UpdateStatementDisclosureResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reportpb.StatementDisclosure,
 *   !proto.reportpb.UpdateStatementDisclosureResponse>}
 */
const methodInfo_StatementDisclosureService_UpdateStatementDisclosure = new grpc.web.AbstractClientBase.MethodInfo(
  proto.reportpb.UpdateStatementDisclosureResponse,
  /**
   * @param {!proto.reportpb.StatementDisclosure} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.UpdateStatementDisclosureResponse.deserializeBinary
);


/**
 * @param {!proto.reportpb.StatementDisclosure} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.reportpb.UpdateStatementDisclosureResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.reportpb.UpdateStatementDisclosureResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reportpb.StatementDisclosureServiceClient.prototype.updateStatementDisclosure =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/reportpb.StatementDisclosureService/UpdateStatementDisclosure',
      request,
      metadata || {},
      methodDescriptor_StatementDisclosureService_UpdateStatementDisclosure,
      callback);
};


/**
 * @param {!proto.reportpb.StatementDisclosure} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.reportpb.UpdateStatementDisclosureResponse>}
 *     A native promise that resolves to the response
 */
proto.reportpb.StatementDisclosureServicePromiseClient.prototype.updateStatementDisclosure =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/reportpb.StatementDisclosureService/UpdateStatementDisclosure',
      request,
      metadata || {},
      methodDescriptor_StatementDisclosureService_UpdateStatementDisclosure);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.reportpb.DeleteStatementDisclosureRequest,
 *   !proto.reportpb.DeleteStatementDisclosureResponse>}
 */
const methodDescriptor_StatementDisclosureService_DeleteStatementDisclosure = new grpc.web.MethodDescriptor(
  '/reportpb.StatementDisclosureService/DeleteStatementDisclosure',
  grpc.web.MethodType.UNARY,
  proto.reportpb.DeleteStatementDisclosureRequest,
  proto.reportpb.DeleteStatementDisclosureResponse,
  /**
   * @param {!proto.reportpb.DeleteStatementDisclosureRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.DeleteStatementDisclosureResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reportpb.DeleteStatementDisclosureRequest,
 *   !proto.reportpb.DeleteStatementDisclosureResponse>}
 */
const methodInfo_StatementDisclosureService_DeleteStatementDisclosure = new grpc.web.AbstractClientBase.MethodInfo(
  proto.reportpb.DeleteStatementDisclosureResponse,
  /**
   * @param {!proto.reportpb.DeleteStatementDisclosureRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.DeleteStatementDisclosureResponse.deserializeBinary
);


/**
 * @param {!proto.reportpb.DeleteStatementDisclosureRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.reportpb.DeleteStatementDisclosureResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.reportpb.DeleteStatementDisclosureResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reportpb.StatementDisclosureServiceClient.prototype.deleteStatementDisclosure =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/reportpb.StatementDisclosureService/DeleteStatementDisclosure',
      request,
      metadata || {},
      methodDescriptor_StatementDisclosureService_DeleteStatementDisclosure,
      callback);
};


/**
 * @param {!proto.reportpb.DeleteStatementDisclosureRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.reportpb.DeleteStatementDisclosureResponse>}
 *     A native promise that resolves to the response
 */
proto.reportpb.StatementDisclosureServicePromiseClient.prototype.deleteStatementDisclosure =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/reportpb.StatementDisclosureService/DeleteStatementDisclosure',
      request,
      metadata || {},
      methodDescriptor_StatementDisclosureService_DeleteStatementDisclosure);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.reportpb.DownloadBlankReportRequest,
 *   !proto.commonpb.File>}
 */
const methodDescriptor_StatementDisclosureService_DownloadBlankReport = new grpc.web.MethodDescriptor(
  '/reportpb.StatementDisclosureService/DownloadBlankReport',
  grpc.web.MethodType.UNARY,
  proto.reportpb.DownloadBlankReportRequest,
  proto_commonpb_file_pb.File,
  /**
   * @param {!proto.reportpb.DownloadBlankReportRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_commonpb_file_pb.File.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reportpb.DownloadBlankReportRequest,
 *   !proto.commonpb.File>}
 */
const methodInfo_StatementDisclosureService_DownloadBlankReport = new grpc.web.AbstractClientBase.MethodInfo(
  proto_commonpb_file_pb.File,
  /**
   * @param {!proto.reportpb.DownloadBlankReportRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_commonpb_file_pb.File.deserializeBinary
);


/**
 * @param {!proto.reportpb.DownloadBlankReportRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.commonpb.File)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.commonpb.File>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reportpb.StatementDisclosureServiceClient.prototype.downloadBlankReport =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/reportpb.StatementDisclosureService/DownloadBlankReport',
      request,
      metadata || {},
      methodDescriptor_StatementDisclosureService_DownloadBlankReport,
      callback);
};


/**
 * @param {!proto.reportpb.DownloadBlankReportRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.commonpb.File>}
 *     A native promise that resolves to the response
 */
proto.reportpb.StatementDisclosureServicePromiseClient.prototype.downloadBlankReport =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/reportpb.StatementDisclosureService/DownloadBlankReport',
      request,
      metadata || {},
      methodDescriptor_StatementDisclosureService_DownloadBlankReport);
};


module.exports = proto.reportpb;

