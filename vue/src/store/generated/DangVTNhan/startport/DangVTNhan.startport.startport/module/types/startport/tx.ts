/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'

export const protobufPackage = 'DangVTNhan.startport.startport'

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateAchievement {
  creator: string
  title: string
  organization: string
  toAccount: string
}

export interface MsgCreateAchievementResponse {
  id: number
}

const baseMsgCreateAchievement: object = { creator: '', title: '', organization: '', toAccount: '' }

export const MsgCreateAchievement = {
  encode(message: MsgCreateAchievement, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.title !== '') {
      writer.uint32(18).string(message.title)
    }
    if (message.organization !== '') {
      writer.uint32(26).string(message.organization)
    }
    if (message.toAccount !== '') {
      writer.uint32(34).string(message.toAccount)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateAchievement {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateAchievement } as MsgCreateAchievement
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.title = reader.string()
          break
        case 3:
          message.organization = reader.string()
          break
        case 4:
          message.toAccount = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateAchievement {
    const message = { ...baseMsgCreateAchievement } as MsgCreateAchievement
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title)
    } else {
      message.title = ''
    }
    if (object.organization !== undefined && object.organization !== null) {
      message.organization = String(object.organization)
    } else {
      message.organization = ''
    }
    if (object.toAccount !== undefined && object.toAccount !== null) {
      message.toAccount = String(object.toAccount)
    } else {
      message.toAccount = ''
    }
    return message
  },

  toJSON(message: MsgCreateAchievement): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.title !== undefined && (obj.title = message.title)
    message.organization !== undefined && (obj.organization = message.organization)
    message.toAccount !== undefined && (obj.toAccount = message.toAccount)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateAchievement>): MsgCreateAchievement {
    const message = { ...baseMsgCreateAchievement } as MsgCreateAchievement
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title
    } else {
      message.title = ''
    }
    if (object.organization !== undefined && object.organization !== null) {
      message.organization = object.organization
    } else {
      message.organization = ''
    }
    if (object.toAccount !== undefined && object.toAccount !== null) {
      message.toAccount = object.toAccount
    } else {
      message.toAccount = ''
    }
    return message
  }
}

const baseMsgCreateAchievementResponse: object = { id: 0 }

export const MsgCreateAchievementResponse = {
  encode(message: MsgCreateAchievementResponse, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateAchievementResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateAchievementResponse } as MsgCreateAchievementResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateAchievementResponse {
    const message = { ...baseMsgCreateAchievementResponse } as MsgCreateAchievementResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgCreateAchievementResponse): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateAchievementResponse>): MsgCreateAchievementResponse {
    const message = { ...baseMsgCreateAchievementResponse } as MsgCreateAchievementResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateAchievement(request: MsgCreateAchievement): Promise<MsgCreateAchievementResponse>
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  CreateAchievement(request: MsgCreateAchievement): Promise<MsgCreateAchievementResponse> {
    const data = MsgCreateAchievement.encode(request).finish()
    const promise = this.rpc.request('DangVTNhan.startport.startport.Msg', 'CreateAchievement', data)
    return promise.then((data) => MsgCreateAchievementResponse.decode(new Reader(data)))
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>
}

declare var self: any | undefined
declare var window: any | undefined
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis
  if (typeof self !== 'undefined') return self
  if (typeof window !== 'undefined') return window
  if (typeof global !== 'undefined') return global
  throw 'Unable to locate global object'
})()

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER')
  }
  return long.toNumber()
}

if (util.Long !== Long) {
  util.Long = Long as any
  configure()
}
