export interface Ids {
    ids: string[]
}

export interface BaseResponse<T> {
    code: number
    message: string
    data: T
}

export interface PageListResponse<T> {
    page: number
    per_page: number
    total: number
    total_pages: number
    data: T[]
}

export interface Cursor {
    offset: number
    limit: number
}

export type Image = {
    id: string;
    name: string;
    url: string;
    height: number;
    width: number;
    size: number; // kb
    created_at: string;
    updated_at: string;
}

export interface Tag {
    tag_id?: number;
    name?: string;
    biz_type?: string;
}

export interface Video {
    id?: number;
    url?: string;
    type?: string;
    cover?: Image;
    hash?: string;
    name?: string;
    sizeKB?: number;
    width?: number;
    height?: number;
    length?: number;
    created_at?: number;
}