import { PostWrap } from '@/states/model/feed';
import api from './feedApi';
import { BaseResponse } from '@/states/model/base';


export const postApi = api.injectEndpoints({
    endpoints: (build) => ({
        getPost: build.query<BaseResponse<PostWrap>, string>({
            query: (id) => ({
                url: 'feed/post/' + id,
                method: 'GET',
            }),
            providesTags: (result, _error, id) => [{ type: 'Post', id }],
        }),
    })
})


export const { useGetPostQuery } = postApi;
export const { endpoints: { getPost } } = postApi;