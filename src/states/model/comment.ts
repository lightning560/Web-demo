import { Image, Video, Tag, Cursor } from './base';
import { UserInfo } from './user';


export interface RepiesCursorWrap {
    replies?: Reply[];
    total: number;
    cursor: Cursor;
}

export interface SubjectWrap {
    subject: Subject;
}

export interface Subject {
    id: string;
    owner_uid: string;
    belong_id: string;
    biz_type: string;
    created_at?: number;
    updated_at?: number;
    floor_count?: number;
    reply_count?: number;
    state?: number;
}


export interface FloorsCursorWrap {
    floors?: Floor[];
    total: number;
    cursor: Cursor;
}

export interface Floor {
    root_reply: Reply;
    replies?: Reply[];
    total?: number;
    cursor?: Cursor;
}

export interface Reply {
    id: string;
    owner_uid: string;
    subject_id: string;
    biz_type: string;
    floor_id: string;
    content: string;
    at_uid?: string;
    state?: number;
    created_at?: number;
    updated_at?: number;
    deleted?: number;
    like_count?: number;
    dislike_count?: number;
    device?: string;
    floor_attr?: FloorAttr;
    user_info?: UserInfo;
    at_user_info?: UserInfo;
}
export interface FloorAttr {
    reply_count?: number;
    pin_admin?: number;
    pin_owner?: number;
    fold?: number;
    hot?: number;
}