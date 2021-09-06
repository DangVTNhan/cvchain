import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "DangVTNhan.startport.startport";
/** proto/blog/post.proto */
export interface Archievement {
    creator: string;
    id: number;
    title: string;
    organization: string;
    toAccount: string;
}
export declare const Archievement: {
    encode(message: Archievement, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Archievement;
    fromJSON(object: any): Archievement;
    toJSON(message: Archievement): unknown;
    fromPartial(object: DeepPartial<Archievement>): Archievement;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
