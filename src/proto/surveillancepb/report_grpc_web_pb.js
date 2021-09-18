/**
 * @fileoverview gRPC-Web generated client stub for surveillancepb
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
proto.surveillancepb = require('./report_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.surveillancepb.ReportServiceClient =
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
proto.surveillancepb.ReportServicePromiseClient =
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
 *   !proto.surveillancepb.ListReportRequest,
 *   !proto.surveillancepb.ListReportResponse>}
 */
const methodDescriptor_ReportService_ListReport = new grpc.web.MethodDescriptor(
  '/surveillancepb.ReportService/ListReport',
  grpc.web.MethodType.UNARY,
  proto.surveillancepb.ListReportRequest,
  proto.surveillancepb.ListReportResponse,
  /**
   * @param {!proto.surveillancepb.ListReportRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.surveillancepb.ListReportResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.surveillancepb.ListReportRequest,
 *   !proto.surveillancepb.ListReportResponse>}
 */
const methodInfo_ReportService_ListReport = new grpc.web.AbstractClientBase.MethodInfo(
  proto.surveillancepb.ListReportResponse,
  /**
   * @param {!proto.surveillancepb.ListReportRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.surveillancepb.ListReportResponse.deserializeBinary
);


/**
 * @param {!proto.surveillancepb.ListReportRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.surveillancepb.ListReportResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.surveillancepb.ListReportResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.surveillancepb.ReportServiceClient.prototype.listReport =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/surveillancepb.ReportService/ListReport',
      request,
      metadata || {},
      methodDescriptor_ReportService_ListReport,
      callback);
};


/**
 * @param {!proto.surveillancepb.ListReportRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.surveillancepb.ListReportResponse>}
 *     Promise that resolves to the response
 */
proto.surveillancepb.ReportServicePromiseClient.prototype.listReport =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/surveillancepb.ReportService/ListReport',
      request,
      metadata || {},
      methodDescriptor_ReportService_ListReport);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.surveillancepb.Report,
 *   !proto.surveillancepb.UpdateReportResponse>}
 */
const methodDescriptor_ReportService_UpdateReport = new grpc.web.MethodDescriptor(
  '/surveillancepb.ReportService/UpdateReport',
  grpc.web.MethodType.UNARY,
  proto.surveillancepb.Report,
  proto.surveillancepb.UpdateReportResponse,
  /**
   * @param {!proto.surveillancepb.Report} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.surveillancepb.UpdateReportResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.surveillancepb.Report,
 *   !proto.surveillancepb.UpdateReportResponse>}
 */
const methodInfo_ReportService_UpdateReport = new grpc.web.AbstractClientBase.MethodInfo(
  proto.surveillancepb.UpdateReportResponse,
  /**
   * @param {!proto.surveillancepb.Report} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.surveillancepb.UpdateReportResponse.deserializeBinary
);


/**
 * @param {!proto.surveillancepb.Report} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.surveillancepb.UpdateReportResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.surveillancepb.UpdateReportResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.surveillancepb.ReportServiceClient.prototype.updateReport =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/surveillancepb.ReportService/UpdateReport',
      request,
      metadata || {},
      methodDescriptor_ReportService_UpdateReport,
      callback);
};


/**
 * @param {!proto.surveillancepb.Report} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.surveillancepb.UpdateReportResponse>}
 *     Promise that resolves to the response
 */
proto.surveillancepb.ReportServicePromiseClient.prototype.updateReport =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/surveillancepb.ReportService/UpdateReport',
      request,
      metadata || {},
      methodDescriptor_ReportService_UpdateReport);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.surveillancepb.ListDetailsReportRequest,
 *   !proto.surveillancepb.ListReportResponse>}
 */
const methodDescriptor_ReportService_ListDetailsReport = new grpc.web.MethodDescriptor(
  '/surveillancepb.ReportService/ListDetailsReport',
  grpc.web.MethodType.UNARY,
  proto.surveillancepb.ListDetailsReportRequest,
  proto.surveillancepb.ListReportResponse,
  /**
   * @param {!proto.surveillancepb.ListDetailsReportRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.surveillancepb.ListReportResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.surveillancepb.ListDetailsReportRequest,
 *   !proto.surveillancepb.ListReportResponse>}
 */
const methodInfo_ReportService_ListDetailsReport = new grpc.web.AbstractClientBase.MethodInfo(
  proto.surveillancepb.ListReportResponse,
  /**
   * @param {!proto.surveillancepb.ListDetailsReportRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.surveillancepb.ListReportResponse.deserializeBinary
);


/**
 * @param {!proto.surveillancepb.ListDetailsReportRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.surveillancepb.ListReportResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.surveillancepb.ListReportResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.surveillancepb.ReportServiceClient.prototype.listDetailsReport =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/surveillancepb.ReportService/ListDetailsReport',
      request,
      metadata || {},
      methodDescriptor_ReportService_ListDetailsReport,
      callback);
};


/**
 * @param {!proto.surveillancepb.ListDetailsReportRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.surveillancepb.ListReportResponse>}
 *     Promise that resolves to the response
 */
proto.surveillancepb.ReportServicePromiseClient.prototype.listDetailsReport =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/surveillancepb.ReportService/ListDetailsReport',
      request,
      metadata || {},
      methodDescriptor_ReportService_ListDetailsReport);
};


module.exports = proto.surveillancepb;

