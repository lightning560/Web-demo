import { appConfig } from '@/common/config'
import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'
import { RootState } from '../store'

// Create our baseQuery instance
const commentQuery = fetchBaseQuery({
    baseUrl: appConfig.COMMENT_URL,

})

const commentQueryWithRetry = retry(commentQuery, { maxRetries: 1 })

const commentApi = createApi({

    reducerPath: 'commentApi',

    baseQuery: commentQueryWithRetry,

    tagTypes: ["Floor", 'Subject', "Reply"],

    refetchOnMountOrArgChange: false,
    endpoints: () => ({}),
})

export const enhancedApi = commentApi.enhanceEndpoints({
    endpoints: () => ({
        getPost: () => 'test',
    }),
})

export default commentApi;