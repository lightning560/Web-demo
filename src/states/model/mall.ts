import exp from 'constants';
import { Image, Video, Tag } from './base';
export interface CollectionWrap {
    collection: Collection;
}

export interface CollectionCardsWrap {
    collection_cards: CollectionCard[];
}

export interface ProductWrap {
    product: Product;
}

export interface Collection {
    id: string;
    shop_id: string;
    name?: string;
    title?: string;
    cover?: Image;
    video?: Video;
    tags?: Tag[];
    state: number;
    created_at?: number;
    updated_at?: number;
    skus: Skus[];
}

export interface Skus {
    index: number;
    name: string;
    product_id: string;
    product?: Product;
}

export interface CollectionCard {
    id: string;
    shop_id: string;
    name?: string;
    title?: string;
    cover?: Image;
    video?: Video;
    tags?: Tag[];
    state?: number;
    product_id?: string;
    product_card?: ProductCard;
}
export interface Product {
    id: string;
    shop_id: string;
    name?: string;
    title?: string;
    price: number;
    thumb?: Image;
    images: Image[];
    video?: Video;
    overview?: Image[];
    specs?: string;
    tags?: Tag[];
    Inventory?: number;
    state?: number;
    created_at?: number;
    updated_at?: number;
}


export interface ProductCard {
    id: string;
    shop_id: string;
    name?: string;
    title?: string;
    price?: number;
    thumb?: Image;
    video?: Video;
    tags?: Tag[];
    state?: number;
}