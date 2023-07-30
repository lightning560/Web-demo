# Full stack demo-intro

This is a modern full-stack demo developed independently by Leon LiangNing individual .

In terms of functionality, half of it is a feed and half is e-commerce, referenced from the XiaoHongShu[小红书 – 你的生活指南 on the App Store (apple.com)](https://apps.apple.com/us/app/%E5%B0%8F%E7%BA%A2%E4%B9%A6-%E4%BD%A0%E7%9A%84%E7%94%9F%E6%B4%BB%E6%8C%87%E5%8D%97/id741292507).

## projects

- [Golang-framework kit-demo](https://github.com/lightning560/mio) is named mio
- [Golang Backend microservice-demo](https://github.com/lightning560/go-microservice)
- [SRE & Full chain stress test]()
- [Web-demo](https://github.com/lightning560/Web-demo)
- [iOS-demo](https://github.com/lightning560/iOS-demo)
- [Flutter-demo](https://github.com/lightning560/Flutter-demo)

# React-demo

Personal time is limited, demo focus on the development of Golang framework and Golang microservice backend.
React demo is a semi-finished product, only basic functions have been implemented, details and UI have not been dealt with.

# tech-stack

- React
- Typescript

### package manager

pnpm

### state management

- redux
- redux-toolkit

### data fetch

redux-toolkit query

### routing

Next.js

## css

tailwind css 3

### css style

CSS Modules as CSS-in-CSS solutions.

### UI library

daisyUI
(Will change to shadcn.ui and radix-ui in the future.)

## library

- classnames
- swiper
- video.js
- react-tabs
- react-intersection-observer

# features

## feed-gallery

![](/img/Pasted%20image%2020230712173634.webp)

## post

### video post

![](/img/Pasted%20image%2020230712181126.webp)

### image post

![](/img/Pasted%20image%2020230712181409.webp)

## comment

![](/img/Pasted%20image%2020230712180714.webp)

## mall

![](/img/Pasted%20image%2020230712181550.webp)

### product

![](/img/Pasted%20image%2020230712181716.webp)

## me

![](/img/Pasted%20image%2020230713122029.webp)
![](/img/Pasted%20image%2020230713122045.webp)

# implement

## Gallery

### Option 1:egjs/react-infinitegrid

This is a library that can be used directly to completely meet the gallery requirements.

### Option 2:react-intersection-observer

Create a transparent `</div>` at the bottom. As long as this div appears, increase page by 1 by executing the method in onChange, then redux-toolkit-query will initiate a new request based on the change in page.

```go
import { useInView, InView } from 'react-intersection-observer';

const [page, setPage] = useState(1);
const { ref, inView, entry } = useInView({
 onChange: (inView, entry) => {
  setPage(page + 1)
 },
 threshold: 0
});

const { data: res, isLoading, refetch } = useGetFeedCardsQuery(page, {
 // pollingInterval: 10000,
 refetchOnMountOrArgChange: false,
 skip: false,
})

<div ref={ref}>...</div>
```

## net:reduxjs/toolkit/query

```ts
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
```

```ts
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
```

### use

```ts
const { data: resp, isLoading, isSuccess, isError, error } = useGetPostQuery(id as string)
```

## config

### .env.development

```
NEXT_PUBLIC_BASE_URL=http://127.0.0.1:8000/api/v1/
NEXT_PUBLIC_FEED_URL=http://127.0.0.1:9002/v1/
NEXT_PUBLIC_COMMENT_URL=http://127.0.0.1:9003/v1/
NEXT_PUBLIC_MALL_URL=http://127.0.0.1:9004/v1/
```

```ts
export const appConfig = {
 NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
 BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
 FEED_URL: process.env.NEXT_PUBLIC_FEED_URL,
 COMMENT_URL: process.env.NEXT_PUBLIC_COMMENT_URL,
 MALL_URL: process.env.NEXT_PUBLIC_MALL_URL,
};
```

## time format

```ts
export const formatDate = (date: Date, format = 'yyyy-MM-dd HH:mm:ss'): string => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
    const formatMap: { [key: string]: any } = {
        yyyy: year.toString(),
        MM: month.toString().padStart(2, '0'),
        dd: day.toString().padStart(2, '0'),
        HH: hour.toString().padStart(2, '0'),
        mm: minute.toString().padStart(2, '0'),
        ss: second.toString().padStart(2, '0')
    }
    return format.replace(/yyyy|MM|dd|HH|mm|ss/g, (match) => formatMap[match])
}

export const formatTimeStamp = (timeStamp: number, format = 'yyyy-MM-dd HH:mm:ss'): string => {
    let date = new Date(timeStamp as number);
    let formattedDate = formatDate(date, format);
    return formattedDate;
}
```

# layout

## /pages

In Next.js, a page is a React Component exported from a .js, .jsx, .ts, or .tsx file in the pages directory. Each page is associated with a route based on its file name.

## /components

Various components of react

## /common

### config.ts

### constants.ts

### enums.ts

## / states

### /apis

store url and hook of redux-toolkit-query

### /model

store the data model

### /slices

slice of redux-toolkit

## /styles

css
