import { BaseResponse, Ids } from "@/states/model/base";
import { CollectionCardsWrap, CollectionWrap, ProductWrap } from "@/states/model/mall";
import mallApi from "./mallApi";


export const collectionApi = mallApi.injectEndpoints({
    endpoints: (build) => ({
        getProductById: build.query<BaseResponse<ProductWrap>, string>({
            query: (id) => ({
                url: 'mall/product/${id}',
                method: 'GET',
                // type: 'application/json',
            }),
            providesTags: (result, error, id) => [{ type: 'Product', id }],

        }),
        getCollectionById: build.query<BaseResponse<CollectionWrap>, string>({
            query: (id) => ({
                url: 'mall/collection/' + id,
                method: 'GET',
            }),
            providesTags: (result, error, id) => [{ type: 'Collection', id }],
        }),
        getCardsByIds: build.query<BaseResponse<CollectionCardsWrap>, Ids>({
            query: (req) => ({
                url: 'mall/collection/cards',
                method: 'POST',
                body: req,
            }),
            providesTags: (result, error, arg) => result
                ? [
                    // ...result.data.floors?.map(({ replies?.id }) => ({ type: 'Floor', id })),
                    { type: 'CollectionCards' as const, id: 'PARTIAL-LIST' },
                ]
                : [{ type: 'CollectionCards' as const, id: 'PARTIAL-LIST' }],
        })
    })
})

export const { useGetProductByIdQuery, useGetCardsByIdsQuery, useGetCollectionByIdQuery } = collectionApi;
export const { endpoints: { getProductById, getCardsByIds, getCollectionById } } = collectionApi;