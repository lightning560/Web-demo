import { FeedCardType } from "@/common/enums";
import { PageListResponse } from "@/states/model/base";
import { User } from "@/states/model/user";
import feedApi from './feedApi';

export interface FeedCard {
    id: number;
    title: string;
    content: string;
    cover: string;
    type: FeedCardType;
    image: string;
    tags: string[];
    author: User;
    likeCnt: number;
    isLiked: boolean;
    favorCnt: number;
    isFavorited: boolean;
}


export const postCardsApi = feedApi.injectEndpoints({
    endpoints: (build) => ({
        getPostCards: build.query<PageListResponse<FeedCard>, number | void>({
            query: (page = 1, a = "a") => ({
                url: 'feed/cards?page=' + page + a,
                method: 'GET',
            }),
            providesTags: (result, _error, page) => result
                ? [
                    ...result.data.map(({ id }) => ({ type: 'FeedCards' as const, id })),
                    { type: 'FeedCards' as const, id: 'PARTIAL-LIST' },
                ]
                : [{ type: 'FeedCards' as const, id: 'PARTIAL-LIST' }],
        }),
    })
})

export const { useGetPostCardsQuery } = postCardsApi;
export const { endpoints: { getPostCards } } = postCardsApi;