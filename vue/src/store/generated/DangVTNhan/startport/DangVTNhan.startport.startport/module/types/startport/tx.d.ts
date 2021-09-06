import { Reader, Writer } from 'protobufjs/minimal';
export declare const protobufPackage = "DangVTNhan.startport.startport";
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateAchievement {
    creator: string;
    title: string;
    organization: string;
    toAccount: string;
}
export interface MsgCreateAchievementResponse {
    id: number;
}
export declare const MsgCreateAchievement: {
    encode(message: MsgCreateAchievement, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateAchievement;
    fromJSON(object: any): MsgCreateAchievement;
    toJSON(message: MsgCreateAchievement): unknown;
    fromPartial(object: DeepPartial<MsgCreateAchievement>): MsgCreateAchievement;
};
export declare const MsgCreateAchievementResponse: {
    encode(message: MsgCreateAchievementResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateAchievementResponse;
    fromJSON(object: any): MsgCreateAchievementResponse;
    toJSON(message: MsgCreateAchievementResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateAchievementResponse>): MsgCreateAchievementResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    CreateAchievement(request: MsgCreateAchievement): Promise<MsgCreateAchievementResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateAchievement(request: MsgCreateAchievement): Promise<MsgCreateAchievementResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
