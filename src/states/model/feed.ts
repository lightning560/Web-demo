import { Image, Video, Tag } from './base';
import { UserInfo } from './user';

export interface PostWrap {
    post: Post;
}

// redux-toolkit query
export interface Post {
    id?: string;
    uid?: string;
    title?: string;
    content?: string;
    created_at?: number;
    updated_at?: number;
    cover?: Image;
    type?: string;
    video?: Video;
    images?: Image[];
    tags?: Tag[];
    state?: number;
    like_count?: number;
    share_count?: number;
    favor_count?: number;
    view_count?: number;
    comment_id?: string;
    author_info?: UserInfo;
}
// only for axios response
// must xxx_xx_xxx
export interface PostCard {
    id?: string;
    uid?: string;
    type?: string;
    title?: string;
    cover?: Image;
    like_count?: number;
    tags?: Tag[];
    state?: number;
    author_info?: UserInfo;
}