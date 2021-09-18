/**
 * @fileoverview gRPC-Web generated client stub for regulatorypb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!

/* eslint-disable */
// @ts-nocheck

const grpc = {};
grpc.web = require('grpc-web');

var google_type_date_pb = require('../../google/type/date_pb.js');

var proto_positionpb_position_pb = require('../../proto/positionpb/position_pb.js');

var proto_reportpb_activity_pb = require('../../proto/reportpb/activity_pb.js');
const proto = {};
proto.regulatorypb = require('./quarterlyreport_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.regulatorypb.QuarterlyReportServiceClient = function(
  hostname,
  credentials,
  options
) {
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
proto.regulatorypb.QuarterlyReportServicePromiseClient = function(
  hostname,
  credentials,
  options
) {
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
 *   !proto.regulatorypb.ListQuarterlyReportRequest,
 *   !proto.regulatorypb.ListQuarterlyReportFormCustodyResponse>}
 */
const methodDescriptor_QuarterlyReportService_ListQuarterlyReportFormCustody = new grpc.web.MethodDescriptor(
  '/regulatorypb.QuarterlyReportService/ListQuarterlyReportFormCustody',
  grpc.web.MethodType.UNARY,
  proto.regulatorypb.ListQuarterlyReportRequest,
  proto.regulatorypb.ListQuarterlyReportFormCustodyResponse,
  /**
   * @param {!proto.regulatorypb.ListQuarterlyReportRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.regulatorypb.ListQuarterlyReportFormCustodyResponse.deserializeBinary
);

/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.regulatorypb.ListQuarterlyReportRequest,
 *   !proto.regulatorypb.ListQuarterlyReportFormCustodyResponse>}
 */
const methodInfo_QuarterlyReportService_ListQuarterlyReportFormCustody = new grpc.web.AbstractClientBase.MethodInfo(
  proto.regulatorypb.ListQuarterlyReportFormCustodyResponse,
  /**
   * @param {!proto.regulatorypb.ListQuarterlyReportRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.regulatorypb.ListQuarterlyReportFormCustodyResponse.deserializeBinary
);

/**
 * @param {!proto.regulatorypb.ListQuarterlyReportRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.regulatorypb.ListQuarterlyReportFormCustodyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.regulatorypb.ListQuarterlyReportFormCustodyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.regulatorypb.QuarterlyReportServiceClient.prototype.listQuarterlyReportFormCustody = function(
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ +
      '/regulatorypb.QuarterlyReportService/ListQuarterlyReportFormCustody',
    request,
    metadata || {},
    methodDescriptor_QuarterlyReportService_ListQuarterlyReportFormCustody,
    callback
  );
};

/**
 * @param {!proto.regulatorypb.ListQuarterlyReportRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.regulatorypb.ListQuarterlyReportFormCustodyResponse>}
 *     A native promise that resolves to the response
 */
proto.regulatorypb.QuarterlyReportServicePromiseClient.prototype.listQuarterlyReportFormCustody = function(
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ +
      '/regulatorypb.QuarterlyReportService/ListQuarterlyReportFormCustody',
    request,
    metadata || {},
    methodDescriptor_QuarterlyReportService_ListQuarterlyReportFormCustody
  );
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.regulatorypb.ListQuarterlyReportDetailsRequest,
 *   !proto.regulatorypb.ListQuarterlyReportFormCustodyDetailsResponse>}
 */
const methodDescriptor_QuarterlyReportService_ListQuarterlyReportFormCustodyDetails = new grpc.web.MethodDescriptor(
  '/regulatorypb.QuarterlyReportService/ListQuarterlyReportFormCustodyDetails',
  grpc.web.MethodType.UNARY,
  proto.regulatorypb.ListQuarterlyReportDetailsRequest,
  proto.regulatorypb.ListQuarterlyReportFormCustodyDetailsResponse,
  /**
   * @param {!proto.regulatorypb.ListQuarterlyReportDetailsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.regulatorypb.ListQuarterlyReportFormCustodyDetailsResponse.deserializeBinary
);

/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.regulatorypb.ListQuarterlyReportDetailsRequest,
 *   !proto.regulatorypb.ListQuarterlyReportFormCustodyDetailsResponse>}
 */
const methodInfo_QuarterlyReportService_ListQuarterlyReportFormCustodyDetails = new grpc.web.AbstractClientBase.MethodInfo(
  proto.regulatorypb.ListQuarterlyReportFormCustodyDetailsResponse,
  /**
   * @param {!proto.regulatorypb.ListQuarterlyReportDetailsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.regulatorypb.ListQuarterlyReportFormCustodyDetailsResponse.deserializeBinary
);

/**
 * @param {!proto.regulatorypb.ListQuarterlyReportDetailsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.regulatorypb.ListQuarterlyReportFormCustodyDetailsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.regulatorypb.ListQuarterlyReportFormCustodyDetailsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.regulatorypb.QuarterlyReportServiceClient.prototype.listQuarterlyReportFormCustodyDetails = function(
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ +
      '/regulatorypb.QuarterlyReportService/ListQuarterlyReportFormCustodyDetails',
    request,
    metadata || {},
    methodDescriptor_QuarterlyReportService_ListQuarterlyReportFormCustodyDetails,
    callback
  );
};

/**
 * @param {!proto.regulatorypb.ListQuarterlyReportDetailsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.regulatorypb.ListQuarterlyReportFormCustodyDetailsResponse>}
 *     A native promise that resolves to the response
 */
proto.regulatorypb.QuarterlyReportServicePromiseClient.prototype.listQuarterlyReportFormCustodyDetails = function(
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ +
      '/regulatorypb.QuarterlyReportService/ListQuarterlyReportFormCustodyDetails',
    request,
    metadata || {},
    methodDescriptor_QuarterlyReportService_ListQuarterlyReportFormCustodyDetails
  );
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.regulatorypb.ListQuarterlyReportRequest,
 *   !proto.regulatorypb.ListQuarterlyReportNonRegularWaySdResponse>}
 */
const methodDescriptor_QuarterlyReportService_ListQuarterlyReportNonRegularWaySd = new grpc.web.MethodDescriptor(
  '/regulatorypb.QuarterlyReportService/ListQuarterlyReportNonRegularWaySd',
  grpc.web.MethodType.UNARY,
  proto.regulatorypb.ListQuarterlyReportRequest,
  proto.regulatorypb.ListQuarterlyReportNonRegularWaySdResponse,
  /**
   * @param {!proto.regulatorypb.ListQuarterlyReportRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.regulatorypb.ListQuarterlyReportNonRegularWaySdResponse.deserializeBinary
);

/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.regulatorypb.ListQuarterlyReportRequest,
 *   !proto.regulatorypb.ListQuarterlyReportNonRegularWaySdResponse>}
 */
const methodInfo_QuarterlyReportService_ListQuarterlyReportNonRegularWaySd = new grpc.web.AbstractClientBase.MethodInfo(
  proto.regulatorypb.ListQuarterlyReportNonRegularWaySdResponse,
  /**
   * @param {!proto.regulatorypb.ListQuarterlyReportRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.regulatorypb.ListQuarterlyReportNonRegularWaySdResponse.deserializeBinary
);

/**
 * @param {!proto.regulatorypb.ListQuarterlyReportRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.regulatorypb.ListQuarterlyReportNonRegularWaySdResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.regulatorypb.ListQuarterlyReportNonRegularWaySdResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.regulatorypb.QuarterlyReportServiceClient.prototype.listQuarterlyReportNonRegularWaySd = function(
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ +
      '/regulatorypb.QuarterlyReportService/ListQuarterlyReportNonRegularWaySd',
    request,
    metadata || {},
    methodDescriptor_QuarterlyReportService_ListQuarterlyReportNonRegularWaySd,
    callback
  );
};

/**
 * @param {!proto.regulatorypb.ListQuarterlyReportRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.regulatorypb.ListQuarterlyReportNonRegularWaySdResponse>}
 *     A native promise that resolves to the response
 */
proto.regulatorypb.QuarterlyReportServicePromiseClient.prototype.listQuarterlyReportNonRegularWaySd = function(
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ +
      '/regulatorypb.QuarterlyReportService/ListQuarterlyReportNonRegularWaySd',
    request,
    metadata || {},
    methodDescriptor_QuarterlyReportService_ListQuarterlyReportNonRegularWaySd
  );
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.regulatorypb.ListQuarterlyReportDetailsRequest,
 *   !proto.regulatorypb.ListQuarterlyReportNonRegularWaySdDetailsResponse>}
 */
const methodDescriptor_QuarterlyReportService_ListQuarterlyReportNonRegularWaySdDetails = new grpc.web.MethodDescriptor(
  '/regulatorypb.QuarterlyReportService/ListQuarterlyReportNonRegularWaySdDetails',
  grpc.web.MethodType.UNARY,
  proto.regulatorypb.ListQuarterlyReportDetailsRequest,
  proto.regulatorypb.ListQuarterlyReportNonRegularWaySdDetailsResponse,
  /**
   * @param {!proto.regulatorypb.ListQuarterlyReportDetailsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.regulatorypb.ListQuarterlyReportNonRegularWaySdDetailsResponse.deserializeBinary
);

/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.regulatorypb.ListQuarterlyReportDetailsRequest,
 *   !proto.regulatorypb.ListQuarterlyReportNonRegularWaySdDetailsResponse>}
 */
const methodInfo_QuarterlyReportService_ListQuarterlyReportNonRegularWaySdDetails = new grpc.web.AbstractClientBase.MethodInfo(
  proto.regulatorypb.ListQuarterlyReportNonRegularWaySdDetailsResponse,
  /**
   * @param {!proto.regulatorypb.ListQuarterlyReportDetailsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.regulatorypb.ListQuarterlyReportNonRegularWaySdDetailsResponse.deserializeBinary
);

/**
 * @param {!proto.regulatorypb.ListQuarterlyReportDetailsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.regulatorypb.ListQuarterlyReportNonRegularWaySdDetailsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.regulatorypb.ListQuarterlyReportNonRegularWaySdDetailsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.regulatorypb.QuarterlyReportServiceClient.prototype.listQuarterlyReportNonRegularWaySdDetails = function(
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ +
      '/regulatorypb.QuarterlyReportService/ListQuarterlyReportNonRegularWaySdDetails',
    request,
    metadata || {},
    methodDescriptor_QuarterlyReportService_ListQuarterlyReportNonRegularWaySdDetails,
    callback
  );
};

/**
 * @param {!proto.regulatorypb.ListQuarterlyReportDetailsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.regulatorypb.ListQuarterlyReportNonRegularWaySdDetailsResponse>}
 *     A native promise that resolves to the response
 */
proto.regulatorypb.QuarterlyReportServicePromiseClient.prototype.listQuarterlyReportNonRegularWaySdDetails = function(
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ +
      '/regulatorypb.QuarterlyReportService/ListQuarterlyReportNonRegularWaySdDetails',
    request,
    metadata || {},
    methodDescriptor_QuarterlyReportService_ListQuarterlyReportNonRegularWaySdDetails
  );
};

module.exports = proto.regulatorypb;
