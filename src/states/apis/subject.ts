
import { BaseResponse } from '../model/base';
import { SubjectWrap } from "../model/comment";
import commentApi from './commentApi';

export const subjectApi = commentApi.injectEndpoints({
    endpoints: (build) => ({
        getSubjectById: build.query<BaseResponse<SubjectWrap>, string>({
            query: (id) => ({
                url: 'comment/subject/' + id,
                method: 'GET',
            }),
            providesTags: (result, _error, id) => [{ type: 'Subject', id }],
        }),
    })
})


export const { useGetSubjectByIdQuery } = subjectApi;
export const { endpoints: { getSubjectById } } = subjectApi;