/**
 * @fileoverview gRPC-Web generated client stub for stockborrowpb
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
proto.stockborrowpb = require('./report_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.stockborrowpb.ReportServiceClient =
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
proto.stockborrowpb.ReportServicePromiseClient =
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
 *   !proto.stockborrowpb.ListReportRequest,
 *   !proto.stockborrowpb.ListReportResponse>}
 */
const methodDescriptor_ReportService_ListReport = new grpc.web.MethodDescriptor(
  '/stockborrowpb.ReportService/ListReport',
  grpc.web.MethodType.UNARY,
  proto.stockborrowpb.ListReportRequest,
  proto.stockborrowpb.ListReportResponse,
  /**
   * @param {!proto.stockborrowpb.ListReportRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockborrowpb.ListReportResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stockborrowpb.ListReportRequest,
 *   !proto.stockborrowpb.ListReportResponse>}
 */
const methodInfo_ReportService_ListReport = new grpc.web.AbstractClientBase.MethodInfo(
  proto.stockborrowpb.ListReportResponse,
  /**
   * @param {!proto.stockborrowpb.ListReportRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockborrowpb.ListReportResponse.deserializeBinary
);


/**
 * @param {!proto.stockborrowpb.ListReportRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stockborrowpb.ListReportResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stockborrowpb.ListReportResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stockborrowpb.ReportServiceClient.prototype.listReport =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stockborrowpb.ReportService/ListReport',
      request,
      metadata || {},
      methodDescriptor_ReportService_ListReport,
      callback);
};


/**
 * @param {!proto.stockborrowpb.ListReportRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stockborrowpb.ListReportResponse>}
 *     Promise that resolves to the response
 */
proto.stockborrowpb.ReportServicePromiseClient.prototype.listReport =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stockborrowpb.ReportService/ListReport',
      request,
      metadata || {},
      methodDescriptor_ReportService_ListReport);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stockborrowpb.ListReportDetailRequest,
 *   !proto.stockborrowpb.ListReportDetailResponse>}
 */
const methodDescriptor_ReportService_ListReportDetail = new grpc.web.MethodDescriptor(
  '/stockborrowpb.ReportService/ListReportDetail',
  grpc.web.MethodType.UNARY,
  proto.stockborrowpb.ListReportDetailRequest,
  proto.stockborrowpb.ListReportDetailResponse,
  /**
   * @param {!proto.stockborrowpb.ListReportDetailRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockborrowpb.ListReportDetailResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stockborrowpb.ListReportDetailRequest,
 *   !proto.stockborrowpb.ListReportDetailResponse>}
 */
const methodInfo_ReportService_ListReportDetail = new grpc.web.AbstractClientBase.MethodInfo(
  proto.stockborrowpb.ListReportDetailResponse,
  /**
   * @param {!proto.stockborrowpb.ListReportDetailRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockborrowpb.ListReportDetailResponse.deserializeBinary
);


/**
 * @param {!proto.stockborrowpb.ListReportDetailRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stockborrowpb.ListReportDetailResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stockborrowpb.ListReportDetailResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stockborrowpb.ReportServiceClient.prototype.listReportDetail =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stockborrowpb.ReportService/ListReportDetail',
      request,
      metadata || {},
      methodDescriptor_ReportService_ListReportDetail,
      callback);
};


/**
 * @param {!proto.stockborrowpb.ListReportDetailRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stockborrowpb.ListReportDetailResponse>}
 *     Promise that resolves to the response
 */
proto.stockborrowpb.ReportServicePromiseClient.prototype.listReportDetail =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stockborrowpb.ReportService/ListReportDetail',
      request,
      metadata || {},
      methodDescriptor_ReportService_ListReportDetail);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stockborrowpb.Report,
 *   !proto.stockborrowpb.UpdateReportResponse>}
 */
const methodDescriptor_ReportService_UpdateReport = new grpc.web.MethodDescriptor(
  '/stockborrowpb.ReportService/UpdateReport',
  grpc.web.MethodType.UNARY,
  proto.stockborrowpb.Report,
  proto.stockborrowpb.UpdateReportResponse,
  /**
   * @param {!proto.stockborrowpb.Report} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockborrowpb.UpdateReportResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stockborrowpb.Report,
 *   !proto.stockborrowpb.UpdateReportResponse>}
 */
const methodInfo_ReportService_UpdateReport = new grpc.web.AbstractClientBase.MethodInfo(
  proto.stockborrowpb.UpdateReportResponse,
  /**
   * @param {!proto.stockborrowpb.Report} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockborrowpb.UpdateReportResponse.deserializeBinary
);


/**
 * @param {!proto.stockborrowpb.Report} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stockborrowpb.UpdateReportResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stockborrowpb.UpdateReportResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stockborrowpb.ReportServiceClient.prototype.updateReport =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stockborrowpb.ReportService/UpdateReport',
      request,
      metadata || {},
      methodDescriptor_ReportService_UpdateReport,
      callback);
};


/**
 * @param {!proto.stockborrowpb.Report} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stockborrowpb.UpdateReportResponse>}
 *     Promise that resolves to the response
 */
proto.stockborrowpb.ReportServicePromiseClient.prototype.updateReport =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stockborrowpb.ReportService/UpdateReport',
      request,
      metadata || {},
      methodDescriptor_ReportService_UpdateReport);
};


module.exports = proto.stockborrowpb;

