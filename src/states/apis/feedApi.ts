import { appConfig } from '@/common/config'
import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'
import { RootState } from '../store'

// Create our baseQuery instance
const feedQuery = fetchBaseQuery({
    baseUrl: appConfig.FEED_URL,

})

const feedQueryWithRetry = retry(feedQuery, { maxRetries: 1 })

const feedApi = createApi({

    reducerPath: 'feedApi',

    baseQuery: feedQueryWithRetry,

    tagTypes: ['Posts', 'Post', "FeedCards", 'Counter'],

    refetchOnMountOrArgChange: false,
    endpoints: () => ({}),
})

export const enhancedApi = feedApi.enhanceEndpoints({
    endpoints: () => ({
        getPost: () => 'test',
    }),
})

export default feedApi;