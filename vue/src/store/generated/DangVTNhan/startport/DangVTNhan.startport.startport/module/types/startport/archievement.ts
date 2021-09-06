/* eslint-disable */
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'DangVTNhan.startport.startport'

/** proto/blog/post.proto */

export interface Archievement {
  creator: string
  id: number
  title: string
  organization: string
  toAccount: string
}

const baseArchievement: object = { creator: '', id: 0, title: '', organization: '', toAccount: '' }

export const Archievement = {
  encode(message: Archievement, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    if (message.title !== '') {
      writer.uint32(26).string(message.title)
    }
    if (message.organization !== '') {
      writer.uint32(34).string(message.organization)
    }
    if (message.toAccount !== '') {
      writer.uint32(42).string(message.toAccount)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Archievement {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseArchievement } as Archievement
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        case 3:
          message.title = reader.string()
          break
        case 4:
          message.organization = reader.string()
          break
        case 5:
          message.toAccount = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Archievement {
    const message = { ...baseArchievement } as Archievement
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
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

  toJSON(message: Archievement): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    message.title !== undefined && (obj.title = message.title)
    message.organization !== undefined && (obj.organization = message.organization)
    message.toAccount !== undefined && (obj.toAccount = message.toAccount)
    return obj
  },

  fromPartial(object: DeepPartial<Archievement>): Archievement {
    const message = { ...baseArchievement } as Archievement
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
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
