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


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.commonpb = require('./note_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.commonpb.NoteServiceClient =
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
proto.commonpb.NoteServicePromiseClient =
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
 *   !proto.commonpb.Note,
 *   !proto.commonpb.CreateNoteResponse>}
 */
const methodDescriptor_NoteService_CreateNote = new grpc.web.MethodDescriptor(
  '/commonpb.NoteService/CreateNote',
  grpc.web.MethodType.UNARY,
  proto.commonpb.Note,
  proto.commonpb.CreateNoteResponse,
  /**
   * @param {!proto.commonpb.Note} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.CreateNoteResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.commonpb.Note,
 *   !proto.commonpb.CreateNoteResponse>}
 */
const methodInfo_NoteService_CreateNote = new grpc.web.AbstractClientBase.MethodInfo(
  proto.commonpb.CreateNoteResponse,
  /**
   * @param {!proto.commonpb.Note} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.CreateNoteResponse.deserializeBinary
);


/**
 * @param {!proto.commonpb.Note} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.commonpb.CreateNoteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.commonpb.CreateNoteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.commonpb.NoteServiceClient.prototype.createNote =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/commonpb.NoteService/CreateNote',
      request,
      metadata || {},
      methodDescriptor_NoteService_CreateNote,
      callback);
};


/**
 * @param {!proto.commonpb.Note} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.commonpb.CreateNoteResponse>}
 *     Promise that resolves to the response
 */
proto.commonpb.NoteServicePromiseClient.prototype.createNote =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/commonpb.NoteService/CreateNote',
      request,
      metadata || {},
      methodDescriptor_NoteService_CreateNote);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.commonpb.ListNoteRequest,
 *   !proto.commonpb.ListNoteResponse>}
 */
const methodDescriptor_NoteService_ListNote = new grpc.web.MethodDescriptor(
  '/commonpb.NoteService/ListNote',
  grpc.web.MethodType.UNARY,
  proto.commonpb.ListNoteRequest,
  proto.commonpb.ListNoteResponse,
  /**
   * @param {!proto.commonpb.ListNoteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.ListNoteResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.commonpb.ListNoteRequest,
 *   !proto.commonpb.ListNoteResponse>}
 */
const methodInfo_NoteService_ListNote = new grpc.web.AbstractClientBase.MethodInfo(
  proto.commonpb.ListNoteResponse,
  /**
   * @param {!proto.commonpb.ListNoteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.ListNoteResponse.deserializeBinary
);


/**
 * @param {!proto.commonpb.ListNoteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.commonpb.ListNoteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.commonpb.ListNoteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.commonpb.NoteServiceClient.prototype.listNote =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/commonpb.NoteService/ListNote',
      request,
      metadata || {},
      methodDescriptor_NoteService_ListNote,
      callback);
};


/**
 * @param {!proto.commonpb.ListNoteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.commonpb.ListNoteResponse>}
 *     Promise that resolves to the response
 */
proto.commonpb.NoteServicePromiseClient.prototype.listNote =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/commonpb.NoteService/ListNote',
      request,
      metadata || {},
      methodDescriptor_NoteService_ListNote);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.commonpb.ReadNoteRequest,
 *   !proto.commonpb.ReadNoteResponse>}
 */
const methodDescriptor_NoteService_ReadNote = new grpc.web.MethodDescriptor(
  '/commonpb.NoteService/ReadNote',
  grpc.web.MethodType.UNARY,
  proto.commonpb.ReadNoteRequest,
  proto.commonpb.ReadNoteResponse,
  /**
   * @param {!proto.commonpb.ReadNoteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.ReadNoteResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.commonpb.ReadNoteRequest,
 *   !proto.commonpb.ReadNoteResponse>}
 */
const methodInfo_NoteService_ReadNote = new grpc.web.AbstractClientBase.MethodInfo(
  proto.commonpb.ReadNoteResponse,
  /**
   * @param {!proto.commonpb.ReadNoteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.ReadNoteResponse.deserializeBinary
);


/**
 * @param {!proto.commonpb.ReadNoteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.commonpb.ReadNoteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.commonpb.ReadNoteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.commonpb.NoteServiceClient.prototype.readNote =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/commonpb.NoteService/ReadNote',
      request,
      metadata || {},
      methodDescriptor_NoteService_ReadNote,
      callback);
};


/**
 * @param {!proto.commonpb.ReadNoteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.commonpb.ReadNoteResponse>}
 *     Promise that resolves to the response
 */
proto.commonpb.NoteServicePromiseClient.prototype.readNote =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/commonpb.NoteService/ReadNote',
      request,
      metadata || {},
      methodDescriptor_NoteService_ReadNote);
};


module.exports = proto.commonpb;

