/**
 * @fileoverview gRPC-Web generated client stub for admpb
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
proto.admpb = require('./calendar_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.admpb.CalendarServiceClient =
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
proto.admpb.CalendarServicePromiseClient =
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
 *   !proto.admpb.ListCalendarRequest,
 *   !proto.admpb.ListCalendarResponse>}
 */
const methodDescriptor_CalendarService_ListCalendar = new grpc.web.MethodDescriptor(
  '/admpb.CalendarService/ListCalendar',
  grpc.web.MethodType.UNARY,
  proto.admpb.ListCalendarRequest,
  proto.admpb.ListCalendarResponse,
  /**
   * @param {!proto.admpb.ListCalendarRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.ListCalendarResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admpb.ListCalendarRequest,
 *   !proto.admpb.ListCalendarResponse>}
 */
const methodInfo_CalendarService_ListCalendar = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admpb.ListCalendarResponse,
  /**
   * @param {!proto.admpb.ListCalendarRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.ListCalendarResponse.deserializeBinary
);


/**
 * @param {!proto.admpb.ListCalendarRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admpb.ListCalendarResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admpb.ListCalendarResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admpb.CalendarServiceClient.prototype.listCalendar =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admpb.CalendarService/ListCalendar',
      request,
      metadata || {},
      methodDescriptor_CalendarService_ListCalendar,
      callback);
};


/**
 * @param {!proto.admpb.ListCalendarRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admpb.ListCalendarResponse>}
 *     Promise that resolves to the response
 */
proto.admpb.CalendarServicePromiseClient.prototype.listCalendar =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admpb.CalendarService/ListCalendar',
      request,
      metadata || {},
      methodDescriptor_CalendarService_ListCalendar);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admpb.UpdateSettleRequest,
 *   !proto.admpb.UpdateSettleResponse>}
 */
const methodDescriptor_CalendarService_UpdateSettle = new grpc.web.MethodDescriptor(
  '/admpb.CalendarService/UpdateSettle',
  grpc.web.MethodType.UNARY,
  proto.admpb.UpdateSettleRequest,
  proto.admpb.UpdateSettleResponse,
  /**
   * @param {!proto.admpb.UpdateSettleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.UpdateSettleResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admpb.UpdateSettleRequest,
 *   !proto.admpb.UpdateSettleResponse>}
 */
const methodInfo_CalendarService_UpdateSettle = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admpb.UpdateSettleResponse,
  /**
   * @param {!proto.admpb.UpdateSettleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.UpdateSettleResponse.deserializeBinary
);


/**
 * @param {!proto.admpb.UpdateSettleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admpb.UpdateSettleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admpb.UpdateSettleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admpb.CalendarServiceClient.prototype.updateSettle =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admpb.CalendarService/UpdateSettle',
      request,
      metadata || {},
      methodDescriptor_CalendarService_UpdateSettle,
      callback);
};


/**
 * @param {!proto.admpb.UpdateSettleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admpb.UpdateSettleResponse>}
 *     Promise that resolves to the response
 */
proto.admpb.CalendarServicePromiseClient.prototype.updateSettle =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admpb.CalendarService/UpdateSettle',
      request,
      metadata || {},
      methodDescriptor_CalendarService_UpdateSettle);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admpb.UpdateTradeRequest,
 *   !proto.admpb.UpdateTradeResponse>}
 */
const methodDescriptor_CalendarService_UpdateTrade = new grpc.web.MethodDescriptor(
  '/admpb.CalendarService/UpdateTrade',
  grpc.web.MethodType.UNARY,
  proto.admpb.UpdateTradeRequest,
  proto.admpb.UpdateTradeResponse,
  /**
   * @param {!proto.admpb.UpdateTradeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.UpdateTradeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admpb.UpdateTradeRequest,
 *   !proto.admpb.UpdateTradeResponse>}
 */
const methodInfo_CalendarService_UpdateTrade = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admpb.UpdateTradeResponse,
  /**
   * @param {!proto.admpb.UpdateTradeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.UpdateTradeResponse.deserializeBinary
);


/**
 * @param {!proto.admpb.UpdateTradeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admpb.UpdateTradeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admpb.UpdateTradeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admpb.CalendarServiceClient.prototype.updateTrade =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admpb.CalendarService/UpdateTrade',
      request,
      metadata || {},
      methodDescriptor_CalendarService_UpdateTrade,
      callback);
};


/**
 * @param {!proto.admpb.UpdateTradeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admpb.UpdateTradeResponse>}
 *     Promise that resolves to the response
 */
proto.admpb.CalendarServicePromiseClient.prototype.updateTrade =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admpb.CalendarService/UpdateTrade',
      request,
      metadata || {},
      methodDescriptor_CalendarService_UpdateTrade);
};


module.exports = proto.admpb;

