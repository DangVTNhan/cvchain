/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal'
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination'
import { Archievement } from '../startport/archievement'

export const protobufPackage = 'DangVTNhan.startport.startport'

/** this line is used by starport scaffolding # 3 */
export interface QueryArchievementsRequest {
  pagination: PageRequest | undefined
}

export interface QueryArchievementsResponse {
  Archievement: Archievement[]
  pagination: PageResponse | undefined
}

export interface QueryArchievementRequest {
  id: string
}

export interface QueryArchievementResponse {
  Archievement: Archievement | undefined
}

const baseQueryArchievementsRequest: object = {}

export const QueryArchievementsRequest = {
  encode(message: QueryArchievementsRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryArchievementsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryArchievementsRequest } as QueryArchievementsRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryArchievementsRequest {
    const message = { ...baseQueryArchievementsRequest } as QueryArchievementsRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryArchievementsRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryArchievementsRequest>): QueryArchievementsRequest {
    const message = { ...baseQueryArchievementsRequest } as QueryArchievementsRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryArchievementsResponse: object = {}

export const QueryArchievementsResponse = {
  encode(message: QueryArchievementsResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.Archievement) {
      Archievement.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryArchievementsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryArchievementsResponse } as QueryArchievementsResponse
    message.Archievement = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Archievement.push(Archievement.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryArchievementsResponse {
    const message = { ...baseQueryArchievementsResponse } as QueryArchievementsResponse
    message.Archievement = []
    if (object.Archievement !== undefined && object.Archievement !== null) {
      for (const e of object.Archievement) {
        message.Archievement.push(Archievement.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryArchievementsResponse): unknown {
    const obj: any = {}
    if (message.Archievement) {
      obj.Archievement = message.Archievement.map((e) => (e ? Archievement.toJSON(e) : undefined))
    } else {
      obj.Archievement = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryArchievementsResponse>): QueryArchievementsResponse {
    const message = { ...baseQueryArchievementsResponse } as QueryArchievementsResponse
    message.Archievement = []
    if (object.Archievement !== undefined && object.Archievement !== null) {
      for (const e of object.Archievement) {
        message.Archievement.push(Archievement.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryArchievementRequest: object = { id: '' }

export const QueryArchievementRequest = {
  encode(message: QueryArchievementRequest, writer: Writer = Writer.create()): Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryArchievementRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryArchievementRequest } as QueryArchievementRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryArchievementRequest {
    const message = { ...baseQueryArchievementRequest } as QueryArchievementRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id)
    } else {
      message.id = ''
    }
    return message
  },

  toJSON(message: QueryArchievementRequest): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<QueryArchievementRequest>): QueryArchievementRequest {
    const message = { ...baseQueryArchievementRequest } as QueryArchievementRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = ''
    }
    return message
  }
}

const baseQueryArchievementResponse: object = {}

export const QueryArchievementResponse = {
  encode(message: QueryArchievementResponse, writer: Writer = Writer.create()): Writer {
    if (message.Archievement !== undefined) {
      Archievement.encode(message.Archievement, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryArchievementResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryArchievementResponse } as QueryArchievementResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Archievement = Archievement.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryArchievementResponse {
    const message = { ...baseQueryArchievementResponse } as QueryArchievementResponse
    if (object.Archievement !== undefined && object.Archievement !== null) {
      message.Archievement = Archievement.fromJSON(object.Archievement)
    } else {
      message.Archievement = undefined
    }
    return message
  },

  toJSON(message: QueryArchievementResponse): unknown {
    const obj: any = {}
    message.Archievement !== undefined && (obj.Archievement = message.Archievement ? Archievement.toJSON(message.Archievement) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryArchievementResponse>): QueryArchievementResponse {
    const message = { ...baseQueryArchievementResponse } as QueryArchievementResponse
    if (object.Archievement !== undefined && object.Archievement !== null) {
      message.Archievement = Archievement.fromPartial(object.Archievement)
    } else {
      message.Archievement = undefined
    }
    return message
  }
}

/** Query defines the gRPC querier service. */
export interface Query {
  /** this line is used by starport scaffolding # 2 */
  Archievement(request: QueryArchievementRequest): Promise<QueryArchievementResponse>
  /** Queries a list of archievements items. */
  Archievements(request: QueryArchievementsRequest): Promise<QueryArchievementsResponse>
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  Archievement(request: QueryArchievementRequest): Promise<QueryArchievementResponse> {
    const data = QueryArchievementRequest.encode(request).finish()
    const promise = this.rpc.request('DangVTNhan.startport.startport.Query', 'Archievement', data)
    return promise.then((data) => QueryArchievementResponse.decode(new Reader(data)))
  }

  Archievements(request: QueryArchievementsRequest): Promise<QueryArchievementsResponse> {
    const data = QueryArchievementsRequest.encode(request).finish()
    const promise = this.rpc.request('DangVTNhan.startport.startport.Query', 'Archievements', data)
    return promise.then((data) => QueryArchievementsResponse.decode(new Reader(data)))
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>
}

type Builtin = Date | Function | Uint8Array | string | number | undefined
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>
