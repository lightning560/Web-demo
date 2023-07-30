import { Image } from "./base";

export type User = {
    id: number;
    name: string;
    avatar: string;
    role: string;
    isVerified: boolean;
    isBlocked: boolean;
    createdAt: string;
    updatedAt: string;
}


export type UserInfo = {
    id?: string;
    uid: string;
    name: string;
    sex?: number;
    avatar?: Image;
    sign?: string;
    state?: number;
    level?: number;
}