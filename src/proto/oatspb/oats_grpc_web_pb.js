/**
 * @fileoverview gRPC-Web generated client stub for oatspb
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
proto.oatspb = require('./oats_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.oatspb.ReportServiceClient =
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
proto.oatspb.ReportServicePromiseClient =
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
 *   !proto.oatspb.UpdateReportRequest,
 *   !proto.oatspb.Report>}
 */
const methodDescriptor_ReportService_UpdateReport = new grpc.web.MethodDescriptor(
  '/oatspb.ReportService/UpdateReport',
  grpc.web.MethodType.UNARY,
  proto.oatspb.UpdateReportRequest,
  proto.oatspb.Report,
  /**
   * @param {!proto.oatspb.UpdateReportRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.oatspb.Report.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.oatspb.UpdateReportRequest,
 *   !proto.oatspb.Report>}
 */
const methodInfo_ReportService_UpdateReport = new grpc.web.AbstractClientBase.MethodInfo(
  proto.oatspb.Report,
  /**
   * @param {!proto.oatspb.UpdateReportRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.oatspb.Report.deserializeBinary
);


/**
 * @param {!proto.oatspb.UpdateReportRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.oatspb.Report)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.oatspb.Report>|undefined}
 *     The XHR Node Readable Stream
 */
proto.oatspb.ReportServiceClient.prototype.updateReport =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/oatspb.ReportService/UpdateReport',
      request,
      metadata || {},
      methodDescriptor_ReportService_UpdateReport,
      callback);
};


/**
 * @param {!proto.oatspb.UpdateReportRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.oatspb.Report>}
 *     A native promise that resolves to the response
 */
proto.oatspb.ReportServicePromiseClient.prototype.updateReport =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/oatspb.ReportService/UpdateReport',
      request,
      metadata || {},
      methodDescriptor_ReportService_UpdateReport);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.oatspb.ListReportRequest,
 *   !proto.oatspb.ListReportResponse>}
 */
const methodDescriptor_ReportService_ListReport = new grpc.web.MethodDescriptor(
  '/oatspb.ReportService/ListReport',
  grpc.web.MethodType.UNARY,
  proto.oatspb.ListReportRequest,
  proto.oatspb.ListReportResponse,
  /**
   * @param {!proto.oatspb.ListReportRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.oatspb.ListReportResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.oatspb.ListReportRequest,
 *   !proto.oatspb.ListReportResponse>}
 */
const methodInfo_ReportService_ListReport = new grpc.web.AbstractClientBase.MethodInfo(
  proto.oatspb.ListReportResponse,
  /**
   * @param {!proto.oatspb.ListReportRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.oatspb.ListReportResponse.deserializeBinary
);


/**
 * @param {!proto.oatspb.ListReportRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.oatspb.ListReportResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.oatspb.ListReportResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.oatspb.ReportServiceClient.prototype.listReport =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/oatspb.ReportService/ListReport',
      request,
      metadata || {},
      methodDescriptor_ReportService_ListReport,
      callback);
};


/**
 * @param {!proto.oatspb.ListReportRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.oatspb.ListReportResponse>}
 *     A native promise that resolves to the response
 */
proto.oatspb.ReportServicePromiseClient.prototype.listReport =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/oatspb.ReportService/ListReport',
      request,
      metadata || {},
      methodDescriptor_ReportService_ListReport);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.oatspb.ListRejectCodeRequest,
 *   !proto.oatspb.ListRejectCodeResponse>}
 */
const methodDescriptor_ReportService_ListRejectCode = new grpc.web.MethodDescriptor(
  '/oatspb.ReportService/ListRejectCode',
  grpc.web.MethodType.UNARY,
  proto.oatspb.ListRejectCodeRequest,
  proto.oatspb.ListRejectCodeResponse,
  /**
   * @param {!proto.oatspb.ListRejectCodeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.oatspb.ListRejectCodeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.oatspb.ListRejectCodeRequest,
 *   !proto.oatspb.ListRejectCodeResponse>}
 */
const methodInfo_ReportService_ListRejectCode = new grpc.web.AbstractClientBase.MethodInfo(
  proto.oatspb.ListRejectCodeResponse,
  /**
   * @param {!proto.oatspb.ListRejectCodeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.oatspb.ListRejectCodeResponse.deserializeBinary
);


/**
 * @param {!proto.oatspb.ListRejectCodeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.oatspb.ListRejectCodeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.oatspb.ListRejectCodeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.oatspb.ReportServiceClient.prototype.listRejectCode =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/oatspb.ReportService/ListRejectCode',
      request,
      metadata || {},
      methodDescriptor_ReportService_ListRejectCode,
      callback);
};


/**
 * @param {!proto.oatspb.ListRejectCodeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.oatspb.ListRejectCodeResponse>}
 *     A native promise that resolves to the response
 */
proto.oatspb.ReportServicePromiseClient.prototype.listRejectCode =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/oatspb.ReportService/ListRejectCode',
      request,
      metadata || {},
      methodDescriptor_ReportService_ListRejectCode);
};


module.exports = proto.oatspb;

