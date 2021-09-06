/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { Archievement } from '../startport/archievement';
export const protobufPackage = 'DangVTNhan.startport.startport';
const baseQueryArchievementsRequest = {};
export const QueryArchievementsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryArchievementsRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryArchievementsRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryArchievementsRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryArchievementsResponse = {};
export const QueryArchievementsResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.Archievement) {
            Archievement.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryArchievementsResponse };
        message.Archievement = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Archievement.push(Archievement.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryArchievementsResponse };
        message.Archievement = [];
        if (object.Archievement !== undefined && object.Archievement !== null) {
            for (const e of object.Archievement) {
                message.Archievement.push(Archievement.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.Archievement) {
            obj.Archievement = message.Archievement.map((e) => (e ? Archievement.toJSON(e) : undefined));
        }
        else {
            obj.Archievement = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryArchievementsResponse };
        message.Archievement = [];
        if (object.Archievement !== undefined && object.Archievement !== null) {
            for (const e of object.Archievement) {
                message.Archievement.push(Archievement.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryArchievementRequest = { id: '' };
export const QueryArchievementRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryArchievementRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryArchievementRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryArchievementRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = '';
        }
        return message;
    }
};
const baseQueryArchievementResponse = {};
export const QueryArchievementResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Archievement !== undefined) {
            Archievement.encode(message.Archievement, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryArchievementResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Archievement = Archievement.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryArchievementResponse };
        if (object.Archievement !== undefined && object.Archievement !== null) {
            message.Archievement = Archievement.fromJSON(object.Archievement);
        }
        else {
            message.Archievement = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.Archievement !== undefined && (obj.Archievement = message.Archievement ? Archievement.toJSON(message.Archievement) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryArchievementResponse };
        if (object.Archievement !== undefined && object.Archievement !== null) {
            message.Archievement = Archievement.fromPartial(object.Archievement);
        }
        else {
            message.Archievement = undefined;
        }
        return message;
    }
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    Archievement(request) {
        const data = QueryArchievementRequest.encode(request).finish();
        const promise = this.rpc.request('DangVTNhan.startport.startport.Query', 'Archievement', data);
        return promise.then((data) => QueryArchievementResponse.decode(new Reader(data)));
    }
    Archievements(request) {
        const data = QueryArchievementsRequest.encode(request).finish();
        const promise = this.rpc.request('DangVTNhan.startport.startport.Query', 'Archievements', data);
        return promise.then((data) => QueryArchievementsResponse.decode(new Reader(data)));
    }
}
