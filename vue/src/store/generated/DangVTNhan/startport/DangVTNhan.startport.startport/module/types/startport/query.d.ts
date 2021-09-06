import { Reader, Writer } from 'protobufjs/minimal';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { Archievement } from '../startport/archievement';
export declare const protobufPackage = "DangVTNhan.startport.startport";
/** this line is used by starport scaffolding # 3 */
export interface QueryArchievementsRequest {
    pagination: PageRequest | undefined;
}
export interface QueryArchievementsResponse {
    Archievement: Archievement[];
    pagination: PageResponse | undefined;
}
export interface QueryArchievementRequest {
    id: string;
}
export interface QueryArchievementResponse {
    Archievement: Archievement | undefined;
}
export declare const QueryArchievementsRequest: {
    encode(message: QueryArchievementsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryArchievementsRequest;
    fromJSON(object: any): QueryArchievementsRequest;
    toJSON(message: QueryArchievementsRequest): unknown;
    fromPartial(object: DeepPartial<QueryArchievementsRequest>): QueryArchievementsRequest;
};
export declare const QueryArchievementsResponse: {
    encode(message: QueryArchievementsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryArchievementsResponse;
    fromJSON(object: any): QueryArchievementsResponse;
    toJSON(message: QueryArchievementsResponse): unknown;
    fromPartial(object: DeepPartial<QueryArchievementsResponse>): QueryArchievementsResponse;
};
export declare const QueryArchievementRequest: {
    encode(message: QueryArchievementRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryArchievementRequest;
    fromJSON(object: any): QueryArchievementRequest;
    toJSON(message: QueryArchievementRequest): unknown;
    fromPartial(object: DeepPartial<QueryArchievementRequest>): QueryArchievementRequest;
};
export declare const QueryArchievementResponse: {
    encode(message: QueryArchievementResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryArchievementResponse;
    fromJSON(object: any): QueryArchievementResponse;
    toJSON(message: QueryArchievementResponse): unknown;
    fromPartial(object: DeepPartial<QueryArchievementResponse>): QueryArchievementResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** this line is used by starport scaffolding # 2 */
    Archievement(request: QueryArchievementRequest): Promise<QueryArchievementResponse>;
    /** Queries a list of archievements items. */
    Archievements(request: QueryArchievementsRequest): Promise<QueryArchievementsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Archievement(request: QueryArchievementRequest): Promise<QueryArchievementResponse>;
    Archievements(request: QueryArchievementsRequest): Promise<QueryArchievementsResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
