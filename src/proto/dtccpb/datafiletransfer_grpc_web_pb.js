/**
 * @fileoverview gRPC-Web generated client stub for dtccpb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!

/* eslint-disable */
// @ts-nocheck

const grpc = {};
grpc.web = require('grpc-web');

var google_type_date_pb = require('../../google/type/date_pb.js');

var proto_commonpb_common_pb = require('../../proto/commonpb/common_pb.js');

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
const proto = {};
proto.dtccpb = require('./datafiletransfer_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.dtccpb.DataFileTransferServiceClient = function(
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
proto.dtccpb.DataFileTransferServicePromiseClient = function(
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
 *   !proto.dtccpb.DataFileTransfer,
 *   !proto.dtccpb.ListDataFileTransferResponse>}
 */
const methodDescriptor_DataFileTransferService_ListDataFileTransfer = new grpc.web.MethodDescriptor(
  '/dtccpb.DataFileTransferService/ListDataFileTransfer',
  grpc.web.MethodType.UNARY,
  proto.dtccpb.DataFileTransfer,
  proto.dtccpb.ListDataFileTransferResponse,
  /**
   * @param {!proto.dtccpb.DataFileTransfer} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.dtccpb.ListDataFileTransferResponse.deserializeBinary
);

/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dtccpb.DataFileTransfer,
 *   !proto.dtccpb.ListDataFileTransferResponse>}
 */
const methodInfo_DataFileTransferService_ListDataFileTransfer = new grpc.web.AbstractClientBase.MethodInfo(
  proto.dtccpb.ListDataFileTransferResponse,
  /**
   * @param {!proto.dtccpb.DataFileTransfer} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.dtccpb.ListDataFileTransferResponse.deserializeBinary
);

/**
 * @param {!proto.dtccpb.DataFileTransfer} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.dtccpb.ListDataFileTransferResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.dtccpb.ListDataFileTransferResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.dtccpb.DataFileTransferServiceClient.prototype.listDataFileTransfer = function(
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/dtccpb.DataFileTransferService/ListDataFileTransfer',
    request,
    metadata || {},
    methodDescriptor_DataFileTransferService_ListDataFileTransfer,
    callback
  );
};

/**
 * @param {!proto.dtccpb.DataFileTransfer} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.dtccpb.ListDataFileTransferResponse>}
 *     A native promise that resolves to the response
 */
proto.dtccpb.DataFileTransferServicePromiseClient.prototype.listDataFileTransfer = function(
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + '/dtccpb.DataFileTransferService/ListDataFileTransfer',
    request,
    metadata || {},
    methodDescriptor_DataFileTransferService_ListDataFileTransfer
  );
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.dtccpb.DataFileTransfer,
 *   !proto.dtccpb.ListDataFileTransferDetailsResponse>}
 */
const methodDescriptor_DataFileTransferService_ListDataFileTransferDetails = new grpc.web.MethodDescriptor(
  '/dtccpb.DataFileTransferService/ListDataFileTransferDetails',
  grpc.web.MethodType.UNARY,
  proto.dtccpb.DataFileTransfer,
  proto.dtccpb.ListDataFileTransferDetailsResponse,
  /**
   * @param {!proto.dtccpb.DataFileTransfer} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.dtccpb.ListDataFileTransferDetailsResponse.deserializeBinary
);

/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dtccpb.DataFileTransfer,
 *   !proto.dtccpb.ListDataFileTransferDetailsResponse>}
 */
const methodInfo_DataFileTransferService_ListDataFileTransferDetails = new grpc.web.AbstractClientBase.MethodInfo(
  proto.dtccpb.ListDataFileTransferDetailsResponse,
  /**
   * @param {!proto.dtccpb.DataFileTransfer} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.dtccpb.ListDataFileTransferDetailsResponse.deserializeBinary
);

/**
 * @param {!proto.dtccpb.DataFileTransfer} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.dtccpb.ListDataFileTransferDetailsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.dtccpb.ListDataFileTransferDetailsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.dtccpb.DataFileTransferServiceClient.prototype.listDataFileTransferDetails = function(
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ +
      '/dtccpb.DataFileTransferService/ListDataFileTransferDetails',
    request,
    metadata || {},
    methodDescriptor_DataFileTransferService_ListDataFileTransferDetails,
    callback
  );
};

/**
 * @param {!proto.dtccpb.DataFileTransfer} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.dtccpb.ListDataFileTransferDetailsResponse>}
 *     A native promise that resolves to the response
 */
proto.dtccpb.DataFileTransferServicePromiseClient.prototype.listDataFileTransferDetails = function(
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ +
      '/dtccpb.DataFileTransferService/ListDataFileTransferDetails',
    request,
    metadata || {},
    methodDescriptor_DataFileTransferService_ListDataFileTransferDetails
  );
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.dtccpb.DataFileTransfer,
 *   !proto.commonpb.CommonResponse>}
 */
const methodDescriptor_DataFileTransferService_ProcessDataFileTransfer = new grpc.web.MethodDescriptor(
  '/dtccpb.DataFileTransferService/ProcessDataFileTransfer',
  grpc.web.MethodType.UNARY,
  proto.dtccpb.DataFileTransfer,
  proto_commonpb_common_pb.CommonResponse,
  /**
   * @param {!proto.dtccpb.DataFileTransfer} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_commonpb_common_pb.CommonResponse.deserializeBinary
);

/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dtccpb.DataFileTransfer,
 *   !proto.commonpb.CommonResponse>}
 */
const methodInfo_DataFileTransferService_ProcessDataFileTransfer = new grpc.web.AbstractClientBase.MethodInfo(
  proto_commonpb_common_pb.CommonResponse,
  /**
   * @param {!proto.dtccpb.DataFileTransfer} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_commonpb_common_pb.CommonResponse.deserializeBinary
);

/**
 * @param {!proto.dtccpb.DataFileTransfer} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.commonpb.CommonResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.commonpb.CommonResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.dtccpb.DataFileTransferServiceClient.prototype.processDataFileTransfer = function(
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/dtccpb.DataFileTransferService/ProcessDataFileTransfer',
    request,
    metadata || {},
    methodDescriptor_DataFileTransferService_ProcessDataFileTransfer,
    callback
  );
};

/**
 * @param {!proto.dtccpb.DataFileTransfer} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.commonpb.CommonResponse>}
 *     A native promise that resolves to the response
 */
proto.dtccpb.DataFileTransferServicePromiseClient.prototype.processDataFileTransfer = function(
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + '/dtccpb.DataFileTransferService/ProcessDataFileTransfer',
    request,
    metadata || {},
    methodDescriptor_DataFileTransferService_ProcessDataFileTransfer
  );
};

module.exports = proto.dtccpb;
