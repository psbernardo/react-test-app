/**
 * @fileoverview gRPC-Web generated client stub for accountpb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var proto_accountpb_subaccount_pb = require('../../proto/accountpb/subaccount_pb.js')

var proto_accountpb_address_pb = require('../../proto/accountpb/address_pb.js')

var proto_accountpb_owner_pb = require('../../proto/accountpb/owner_pb.js')

var proto_accountpb_contactinfo_pb = require('../../proto/accountpb/contactinfo_pb.js')

var proto_commonpb_note_pb = require('../../proto/commonpb/note_pb.js')

var google_type_date_pb = require('../../google/type/date_pb.js')
const proto = {};
proto.accountpb = require('./client_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.accountpb.ClientServiceClient =
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
proto.accountpb.ClientServicePromiseClient =
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
 *   !proto.accountpb.GetNewClientIdRequest,
 *   !proto.accountpb.GetNewClientIdResponse>}
 */
const methodDescriptor_ClientService_GetNewClientId = new grpc.web.MethodDescriptor(
  '/accountpb.ClientService/GetNewClientId',
  grpc.web.MethodType.UNARY,
  proto.accountpb.GetNewClientIdRequest,
  proto.accountpb.GetNewClientIdResponse,
  /**
   * @param {!proto.accountpb.GetNewClientIdRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.GetNewClientIdResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.GetNewClientIdRequest,
 *   !proto.accountpb.GetNewClientIdResponse>}
 */
const methodInfo_ClientService_GetNewClientId = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.GetNewClientIdResponse,
  /**
   * @param {!proto.accountpb.GetNewClientIdRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.GetNewClientIdResponse.deserializeBinary
);


/**
 * @param {!proto.accountpb.GetNewClientIdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.GetNewClientIdResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.GetNewClientIdResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.ClientServiceClient.prototype.getNewClientId =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.ClientService/GetNewClientId',
      request,
      metadata || {},
      methodDescriptor_ClientService_GetNewClientId,
      callback);
};


/**
 * @param {!proto.accountpb.GetNewClientIdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.GetNewClientIdResponse>}
 *     A native promise that resolves to the response
 */
proto.accountpb.ClientServicePromiseClient.prototype.getNewClientId =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.ClientService/GetNewClientId',
      request,
      metadata || {},
      methodDescriptor_ClientService_GetNewClientId);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.accountpb.Client,
 *   !proto.accountpb.CreateClientResponse>}
 */
const methodDescriptor_ClientService_CreateClient = new grpc.web.MethodDescriptor(
  '/accountpb.ClientService/CreateClient',
  grpc.web.MethodType.UNARY,
  proto.accountpb.Client,
  proto.accountpb.CreateClientResponse,
  /**
   * @param {!proto.accountpb.Client} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.CreateClientResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.Client,
 *   !proto.accountpb.CreateClientResponse>}
 */
const methodInfo_ClientService_CreateClient = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.CreateClientResponse,
  /**
   * @param {!proto.accountpb.Client} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.CreateClientResponse.deserializeBinary
);


/**
 * @param {!proto.accountpb.Client} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.CreateClientResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.CreateClientResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.ClientServiceClient.prototype.createClient =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.ClientService/CreateClient',
      request,
      metadata || {},
      methodDescriptor_ClientService_CreateClient,
      callback);
};


/**
 * @param {!proto.accountpb.Client} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.CreateClientResponse>}
 *     A native promise that resolves to the response
 */
proto.accountpb.ClientServicePromiseClient.prototype.createClient =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.ClientService/CreateClient',
      request,
      metadata || {},
      methodDescriptor_ClientService_CreateClient);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.accountpb.Client,
 *   !proto.accountpb.UpdateClientResponse>}
 */
const methodDescriptor_ClientService_UpdateClient = new grpc.web.MethodDescriptor(
  '/accountpb.ClientService/UpdateClient',
  grpc.web.MethodType.UNARY,
  proto.accountpb.Client,
  proto.accountpb.UpdateClientResponse,
  /**
   * @param {!proto.accountpb.Client} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.UpdateClientResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.Client,
 *   !proto.accountpb.UpdateClientResponse>}
 */
const methodInfo_ClientService_UpdateClient = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.UpdateClientResponse,
  /**
   * @param {!proto.accountpb.Client} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.UpdateClientResponse.deserializeBinary
);


/**
 * @param {!proto.accountpb.Client} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.UpdateClientResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.UpdateClientResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.ClientServiceClient.prototype.updateClient =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.ClientService/UpdateClient',
      request,
      metadata || {},
      methodDescriptor_ClientService_UpdateClient,
      callback);
};


/**
 * @param {!proto.accountpb.Client} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.UpdateClientResponse>}
 *     A native promise that resolves to the response
 */
proto.accountpb.ClientServicePromiseClient.prototype.updateClient =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.ClientService/UpdateClient',
      request,
      metadata || {},
      methodDescriptor_ClientService_UpdateClient);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.accountpb.ReadClientRequest,
 *   !proto.accountpb.ReadClientResponse>}
 */
const methodDescriptor_ClientService_ReadClient = new grpc.web.MethodDescriptor(
  '/accountpb.ClientService/ReadClient',
  grpc.web.MethodType.UNARY,
  proto.accountpb.ReadClientRequest,
  proto.accountpb.ReadClientResponse,
  /**
   * @param {!proto.accountpb.ReadClientRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.ReadClientResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.ReadClientRequest,
 *   !proto.accountpb.ReadClientResponse>}
 */
const methodInfo_ClientService_ReadClient = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.ReadClientResponse,
  /**
   * @param {!proto.accountpb.ReadClientRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.ReadClientResponse.deserializeBinary
);


/**
 * @param {!proto.accountpb.ReadClientRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.ReadClientResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.ReadClientResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.ClientServiceClient.prototype.readClient =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.ClientService/ReadClient',
      request,
      metadata || {},
      methodDescriptor_ClientService_ReadClient,
      callback);
};


/**
 * @param {!proto.accountpb.ReadClientRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.ReadClientResponse>}
 *     A native promise that resolves to the response
 */
proto.accountpb.ClientServicePromiseClient.prototype.readClient =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.ClientService/ReadClient',
      request,
      metadata || {},
      methodDescriptor_ClientService_ReadClient);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.accountpb.DeleteClientRequest,
 *   !proto.accountpb.DeleteClientResponse>}
 */
const methodDescriptor_ClientService_DeleteClient = new grpc.web.MethodDescriptor(
  '/accountpb.ClientService/DeleteClient',
  grpc.web.MethodType.UNARY,
  proto.accountpb.DeleteClientRequest,
  proto.accountpb.DeleteClientResponse,
  /**
   * @param {!proto.accountpb.DeleteClientRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.DeleteClientResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.DeleteClientRequest,
 *   !proto.accountpb.DeleteClientResponse>}
 */
const methodInfo_ClientService_DeleteClient = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.DeleteClientResponse,
  /**
   * @param {!proto.accountpb.DeleteClientRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.DeleteClientResponse.deserializeBinary
);


/**
 * @param {!proto.accountpb.DeleteClientRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.DeleteClientResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.DeleteClientResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.ClientServiceClient.prototype.deleteClient =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.ClientService/DeleteClient',
      request,
      metadata || {},
      methodDescriptor_ClientService_DeleteClient,
      callback);
};


/**
 * @param {!proto.accountpb.DeleteClientRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.DeleteClientResponse>}
 *     A native promise that resolves to the response
 */
proto.accountpb.ClientServicePromiseClient.prototype.deleteClient =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.ClientService/DeleteClient',
      request,
      metadata || {},
      methodDescriptor_ClientService_DeleteClient);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.accountpb.ListClientRequest,
 *   !proto.accountpb.ListClientResponse>}
 */
const methodDescriptor_ClientService_ListClient = new grpc.web.MethodDescriptor(
  '/accountpb.ClientService/ListClient',
  grpc.web.MethodType.UNARY,
  proto.accountpb.ListClientRequest,
  proto.accountpb.ListClientResponse,
  /**
   * @param {!proto.accountpb.ListClientRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.ListClientResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.ListClientRequest,
 *   !proto.accountpb.ListClientResponse>}
 */
const methodInfo_ClientService_ListClient = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.ListClientResponse,
  /**
   * @param {!proto.accountpb.ListClientRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.ListClientResponse.deserializeBinary
);


/**
 * @param {!proto.accountpb.ListClientRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.ListClientResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.ListClientResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.ClientServiceClient.prototype.listClient =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.ClientService/ListClient',
      request,
      metadata || {},
      methodDescriptor_ClientService_ListClient,
      callback);
};


/**
 * @param {!proto.accountpb.ListClientRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.ListClientResponse>}
 *     A native promise that resolves to the response
 */
proto.accountpb.ClientServicePromiseClient.prototype.listClient =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.ClientService/ListClient',
      request,
      metadata || {},
      methodDescriptor_ClientService_ListClient);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.accountpb.ListClientAuditRequest,
 *   !proto.accountpb.ListClientAuditResponse>}
 */
const methodDescriptor_ClientService_ListClientAudit = new grpc.web.MethodDescriptor(
  '/accountpb.ClientService/ListClientAudit',
  grpc.web.MethodType.UNARY,
  proto.accountpb.ListClientAuditRequest,
  proto.accountpb.ListClientAuditResponse,
  /**
   * @param {!proto.accountpb.ListClientAuditRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.ListClientAuditResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.ListClientAuditRequest,
 *   !proto.accountpb.ListClientAuditResponse>}
 */
const methodInfo_ClientService_ListClientAudit = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.ListClientAuditResponse,
  /**
   * @param {!proto.accountpb.ListClientAuditRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.ListClientAuditResponse.deserializeBinary
);


/**
 * @param {!proto.accountpb.ListClientAuditRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.ListClientAuditResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.ListClientAuditResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.ClientServiceClient.prototype.listClientAudit =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.ClientService/ListClientAudit',
      request,
      metadata || {},
      methodDescriptor_ClientService_ListClientAudit,
      callback);
};


/**
 * @param {!proto.accountpb.ListClientAuditRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.ListClientAuditResponse>}
 *     A native promise that resolves to the response
 */
proto.accountpb.ClientServicePromiseClient.prototype.listClientAudit =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.ClientService/ListClientAudit',
      request,
      metadata || {},
      methodDescriptor_ClientService_ListClientAudit);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.accountpb.ListCommonIdRequest,
 *   !proto.accountpb.ListCommonIdResponse>}
 */
const methodDescriptor_ClientService_ListCommonId = new grpc.web.MethodDescriptor(
  '/accountpb.ClientService/ListCommonId',
  grpc.web.MethodType.UNARY,
  proto.accountpb.ListCommonIdRequest,
  proto.accountpb.ListCommonIdResponse,
  /**
   * @param {!proto.accountpb.ListCommonIdRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.ListCommonIdResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.ListCommonIdRequest,
 *   !proto.accountpb.ListCommonIdResponse>}
 */
const methodInfo_ClientService_ListCommonId = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.ListCommonIdResponse,
  /**
   * @param {!proto.accountpb.ListCommonIdRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.ListCommonIdResponse.deserializeBinary
);


/**
 * @param {!proto.accountpb.ListCommonIdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.ListCommonIdResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.ListCommonIdResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.ClientServiceClient.prototype.listCommonId =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.ClientService/ListCommonId',
      request,
      metadata || {},
      methodDescriptor_ClientService_ListCommonId,
      callback);
};


/**
 * @param {!proto.accountpb.ListCommonIdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.ListCommonIdResponse>}
 *     A native promise that resolves to the response
 */
proto.accountpb.ClientServicePromiseClient.prototype.listCommonId =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.ClientService/ListCommonId',
      request,
      metadata || {},
      methodDescriptor_ClientService_ListCommonId);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.accountpb.ImportClientRequest,
 *   !proto.accountpb.ImportClientResponse>}
 */
const methodDescriptor_ClientService_ImportClient = new grpc.web.MethodDescriptor(
  '/accountpb.ClientService/ImportClient',
  grpc.web.MethodType.UNARY,
  proto.accountpb.ImportClientRequest,
  proto.accountpb.ImportClientResponse,
  /**
   * @param {!proto.accountpb.ImportClientRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.ImportClientResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.ImportClientRequest,
 *   !proto.accountpb.ImportClientResponse>}
 */
const methodInfo_ClientService_ImportClient = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.ImportClientResponse,
  /**
   * @param {!proto.accountpb.ImportClientRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.ImportClientResponse.deserializeBinary
);


/**
 * @param {!proto.accountpb.ImportClientRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.ImportClientResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.ImportClientResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.ClientServiceClient.prototype.importClient =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.ClientService/ImportClient',
      request,
      metadata || {},
      methodDescriptor_ClientService_ImportClient,
      callback);
};


/**
 * @param {!proto.accountpb.ImportClientRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.ImportClientResponse>}
 *     A native promise that resolves to the response
 */
proto.accountpb.ClientServicePromiseClient.prototype.importClient =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.ClientService/ImportClient',
      request,
      metadata || {},
      methodDescriptor_ClientService_ImportClient);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.accountpb.ImportClearRequest,
 *   !proto.accountpb.ImportClearResponse>}
 */
const methodDescriptor_ClientService_ImportClear = new grpc.web.MethodDescriptor(
  '/accountpb.ClientService/ImportClear',
  grpc.web.MethodType.UNARY,
  proto.accountpb.ImportClearRequest,
  proto.accountpb.ImportClearResponse,
  /**
   * @param {!proto.accountpb.ImportClearRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.ImportClearResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.ImportClearRequest,
 *   !proto.accountpb.ImportClearResponse>}
 */
const methodInfo_ClientService_ImportClear = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.ImportClearResponse,
  /**
   * @param {!proto.accountpb.ImportClearRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.ImportClearResponse.deserializeBinary
);


/**
 * @param {!proto.accountpb.ImportClearRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.ImportClearResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.ImportClearResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.ClientServiceClient.prototype.importClear =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.ClientService/ImportClear',
      request,
      metadata || {},
      methodDescriptor_ClientService_ImportClear,
      callback);
};


/**
 * @param {!proto.accountpb.ImportClearRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.ImportClearResponse>}
 *     A native promise that resolves to the response
 */
proto.accountpb.ClientServicePromiseClient.prototype.importClear =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.ClientService/ImportClear',
      request,
      metadata || {},
      methodDescriptor_ClientService_ImportClear);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.accountpb.ImportDeleteRequest,
 *   !proto.accountpb.ImportDeleteResponse>}
 */
const methodDescriptor_ClientService_ImportDelete = new grpc.web.MethodDescriptor(
  '/accountpb.ClientService/ImportDelete',
  grpc.web.MethodType.UNARY,
  proto.accountpb.ImportDeleteRequest,
  proto.accountpb.ImportDeleteResponse,
  /**
   * @param {!proto.accountpb.ImportDeleteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.ImportDeleteResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.ImportDeleteRequest,
 *   !proto.accountpb.ImportDeleteResponse>}
 */
const methodInfo_ClientService_ImportDelete = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.ImportDeleteResponse,
  /**
   * @param {!proto.accountpb.ImportDeleteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.ImportDeleteResponse.deserializeBinary
);


/**
 * @param {!proto.accountpb.ImportDeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.ImportDeleteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.ImportDeleteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.ClientServiceClient.prototype.importDelete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.ClientService/ImportDelete',
      request,
      metadata || {},
      methodDescriptor_ClientService_ImportDelete,
      callback);
};


/**
 * @param {!proto.accountpb.ImportDeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.ImportDeleteResponse>}
 *     A native promise that resolves to the response
 */
proto.accountpb.ClientServicePromiseClient.prototype.importDelete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.ClientService/ImportDelete',
      request,
      metadata || {},
      methodDescriptor_ClientService_ImportDelete);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.accountpb.ImportProcessRequest,
 *   !proto.accountpb.ImportProcessResponse>}
 */
const methodDescriptor_ClientService_ImportProcess = new grpc.web.MethodDescriptor(
  '/accountpb.ClientService/ImportProcess',
  grpc.web.MethodType.UNARY,
  proto.accountpb.ImportProcessRequest,
  proto.accountpb.ImportProcessResponse,
  /**
   * @param {!proto.accountpb.ImportProcessRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.ImportProcessResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.ImportProcessRequest,
 *   !proto.accountpb.ImportProcessResponse>}
 */
const methodInfo_ClientService_ImportProcess = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.ImportProcessResponse,
  /**
   * @param {!proto.accountpb.ImportProcessRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.ImportProcessResponse.deserializeBinary
);


/**
 * @param {!proto.accountpb.ImportProcessRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.ImportProcessResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.ImportProcessResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.ClientServiceClient.prototype.importProcess =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.ClientService/ImportProcess',
      request,
      metadata || {},
      methodDescriptor_ClientService_ImportProcess,
      callback);
};


/**
 * @param {!proto.accountpb.ImportProcessRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.ImportProcessResponse>}
 *     A native promise that resolves to the response
 */
proto.accountpb.ClientServicePromiseClient.prototype.importProcess =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.ClientService/ImportProcess',
      request,
      metadata || {},
      methodDescriptor_ClientService_ImportProcess);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.accountpb.ImportFilterRequest,
 *   !proto.accountpb.ImportFilterResponse>}
 */
const methodDescriptor_ClientService_ImportFilter = new grpc.web.MethodDescriptor(
  '/accountpb.ClientService/ImportFilter',
  grpc.web.MethodType.UNARY,
  proto.accountpb.ImportFilterRequest,
  proto.accountpb.ImportFilterResponse,
  /**
   * @param {!proto.accountpb.ImportFilterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.ImportFilterResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.ImportFilterRequest,
 *   !proto.accountpb.ImportFilterResponse>}
 */
const methodInfo_ClientService_ImportFilter = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.ImportFilterResponse,
  /**
   * @param {!proto.accountpb.ImportFilterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.ImportFilterResponse.deserializeBinary
);


/**
 * @param {!proto.accountpb.ImportFilterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.ImportFilterResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.ImportFilterResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.ClientServiceClient.prototype.importFilter =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.ClientService/ImportFilter',
      request,
      metadata || {},
      methodDescriptor_ClientService_ImportFilter,
      callback);
};


/**
 * @param {!proto.accountpb.ImportFilterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.ImportFilterResponse>}
 *     A native promise that resolves to the response
 */
proto.accountpb.ClientServicePromiseClient.prototype.importFilter =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.ClientService/ImportFilter',
      request,
      metadata || {},
      methodDescriptor_ClientService_ImportFilter);
};


module.exports = proto.accountpb;

