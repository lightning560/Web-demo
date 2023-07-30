import { BaseResponse } from "../model/base";
import { FloorsCursorWrap, SubjectWrap, RepiesCursorWrap } from '../model/comment';
import commentApi from "./commentApi";


export interface getFloorsReq {
    subjectId: string;
    offset: number;
    limit: number;
    by: string;
    order: string;
}

export interface getRepliesReq {
    subjectId: string;
    floorId: string;
    offset: number;
    limit: number;
    by: string;
    order: string;
}


export const floorApi = commentApi.injectEndpoints({
    endpoints: (build) => ({
        getFloors: build.query<BaseResponse<FloorsCursorWrap>, getFloorsReq>({
            query: (req) => ({
                url: 'comment/floors/' + req.subjectId + "/" + req.offset + "/" + req.limit + "/" + req.by + "/" + req.order,
                method: 'GET',
            }),
            providesTags: (result, error, arg) => result
                ? [
                    // ...result.data.floors?.map(({ replies?.id }) => ({ type: 'Floor', id })),
                    { type: 'Floor' as const, id: 'PARTIAL-LIST' },
                ]
                : [{ type: 'Floor' as const, id: 'PARTIAL-LIST' }],
        }),
        getReplies: build.query<BaseResponse<RepiesCursorWrap>, getRepliesReq>({
            query: (req) => ({
                url: 'comment/floors/' + req.subjectId + "/" + req.floorId + "/" + req.offset + "/" + req.limit + "/" + req.by + "/" + req.order,
                method: 'GET',
            }),
            providesTags: (result, error, arg) => result
                ? [
                    // ...result.data.floors?.map(({ replies?.id }) => ({ type: 'Floor', id })),
                    { type: 'Floor' as const, id: 'PARTIAL-LIST' },
                ]
                : [{ type: 'Floor' as const, id: 'PARTIAL-LIST' }],
        }),

    })
})


export const { useGetFloorsQuery, useGetRepliesQuery } = floorApi;
export const { endpoints: { getFloors, getReplies } } = floorApi;