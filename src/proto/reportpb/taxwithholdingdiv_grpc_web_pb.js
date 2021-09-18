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
const proto = {};
proto.reportpb = require('./taxwithholdingdiv_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.reportpb.TaxWithholdingDivServiceClient =
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
proto.reportpb.TaxWithholdingDivServicePromiseClient =
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
 *   !proto.reportpb.ListTaxWithholdingDivRequest,
 *   !proto.reportpb.ListTaxWithholdingDivResponse>}
 */
const methodDescriptor_TaxWithholdingDivService_ListTaxWithholdingDiv = new grpc.web.MethodDescriptor(
  '/reportpb.TaxWithholdingDivService/ListTaxWithholdingDiv',
  grpc.web.MethodType.UNARY,
  proto.reportpb.ListTaxWithholdingDivRequest,
  proto.reportpb.ListTaxWithholdingDivResponse,
  /**
   * @param {!proto.reportpb.ListTaxWithholdingDivRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.ListTaxWithholdingDivResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reportpb.ListTaxWithholdingDivRequest,
 *   !proto.reportpb.ListTaxWithholdingDivResponse>}
 */
const methodInfo_TaxWithholdingDivService_ListTaxWithholdingDiv = new grpc.web.AbstractClientBase.MethodInfo(
  proto.reportpb.ListTaxWithholdingDivResponse,
  /**
   * @param {!proto.reportpb.ListTaxWithholdingDivRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.ListTaxWithholdingDivResponse.deserializeBinary
);


/**
 * @param {!proto.reportpb.ListTaxWithholdingDivRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.reportpb.ListTaxWithholdingDivResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.reportpb.ListTaxWithholdingDivResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reportpb.TaxWithholdingDivServiceClient.prototype.listTaxWithholdingDiv =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/reportpb.TaxWithholdingDivService/ListTaxWithholdingDiv',
      request,
      metadata || {},
      methodDescriptor_TaxWithholdingDivService_ListTaxWithholdingDiv,
      callback);
};


/**
 * @param {!proto.reportpb.ListTaxWithholdingDivRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.reportpb.ListTaxWithholdingDivResponse>}
 *     A native promise that resolves to the response
 */
proto.reportpb.TaxWithholdingDivServicePromiseClient.prototype.listTaxWithholdingDiv =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/reportpb.TaxWithholdingDivService/ListTaxWithholdingDiv',
      request,
      metadata || {},
      methodDescriptor_TaxWithholdingDivService_ListTaxWithholdingDiv);
};


module.exports = proto.reportpb;

