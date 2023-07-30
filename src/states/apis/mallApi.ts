import { appConfig } from '@/common/config'
import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'
import { RootState } from '../store'

// Create our baseQuery instance
const mallQuery = fetchBaseQuery({
    baseUrl: appConfig.MALL_URL,

})

const mallQueryWithRetry = retry(mallQuery, { maxRetries: 1 })

const mallApi = createApi({

    reducerPath: 'mallApi',

    baseQuery: mallQueryWithRetry,

    tagTypes: ['Collection', "CollectionCards", "Product"],

    refetchOnMountOrArgChange: false,
    endpoints: () => ({}),
})

export const enhancedApi = mallApi.enhanceEndpoints({
    endpoints: () => ({
        getPost: () => 'test',
    }),
})

export default mallApi;