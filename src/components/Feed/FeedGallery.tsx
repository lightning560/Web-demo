import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import axios from 'axios'
import { Masonry } from "masonic";
import { useInView } from 'react-intersection-observer'
import {
    useInfiniteQuery,
    QueryClient,
    QueryClientProvider,
} from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { appConfig } from '@/common/config'

const queryClient = new QueryClient()

export default function FeedGallery() {
    return (
        <QueryClientProvider client={queryClient}>
            <Example />
        </QueryClientProvider>
    )
}

const _galleryCard = (props: any) => {
    console.log("_galleryCard+props:" + props.data)
    return (
        <>
            <div className="flex flex-col flex-nowrap w-52 aspect-square">
                <Link href="/post/1">
                    <img className="mt-8 mx-auto" alt="i" src={props.data.cover}></img>
                    <div>abc</div>
                </Link>
                <div className="flex flex-row flex-nowrap justify-between">
                    <Image alt="avatar" width='30' height='30' src="https://dummyimage.com/30x30"></Image>
                    <span className="">nickname</span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </span>
                    <span>894</span>
                </div>
            </div>
        </>
    )
};

function Example() {
    let cards: any[] = []
    const { ref, inView } = useInView()
    const {
        status,
        data,
        error,
        isFetching,
        isFetchingNextPage,
        isFetchingPreviousPage,
        fetchNextPage,
        fetchPreviousPage,
        hasNextPage,
        hasPreviousPage,
    } = useInfiniteQuery(
        ['projects'],
        async ({ pageParam = 1 }) => {
            const res = await axios.get(appConfig.BASE_URL + 'feed/cards?page=' + pageParam)
            return res.data
        },
        {
            getPreviousPageParam: (firstPage) => firstPage.previousPage ?? undefined,
            getNextPageParam: (lastPage) => lastPage.nextPage ?? undefined,
        },
    )

    React.useEffect(() => {
        if (inView) {
            // fetchNextPage()
            fnp().then((res) => {
                // console.log(res?.pages[0].data)
                for (const i in res?.pages[0].data) {
                    console.log(i)
                }
                cards = cards.concat(res?.pages[0].data)
                console.log(cards)
            })
            // cards = cards.concat(fnp())
        }
    }, [inView])

    let fnp = async () => {
        const res = await fetchNextPage()
        return res.data
    }

    return (
        <div>
            {status === 'loading' ? (
                <p>Loading...</p>
            ) : status === 'error' ? (
                // error.message
                <span>Error: {error as String}</span>
            ) : (
                <>
                    <Masonry
                        // Provides the data for our grid items
                        items={cards}
                        // Adds 8px of space between the grid cells
                        columnGutter={8}
                        // Sets the minimum column width to 172px
                        columnWidth={272}
                        // Pre-renders 5 windows worth of content
                        overscanBy={5}
                        // This is the grid item component
                        render={_galleryCard}
                    />
                    <div>
                        <button
                            className='btn btn-primary'
                            ref={ref}
                            onClick={() => fetchNextPage()}
                        // disabled={!hasNextPage || isFetchingNextPage}
                        >
                            {isFetchingNextPage
                                ? 'Loading more...'
                                : hasNextPage
                                    ? 'Load Newer'
                                    : 'Nothing more to load'}
                        </button>
                    </div>
                    <div>
                        {isFetching && !isFetchingNextPage
                            ? 'Background Updating...'
                            : null}
                    </div>
                </>
            )}
            <ReactQueryDevtools initialIsOpen />
        </div>
    )
}
