import React, { useCallback, useEffect, useState } from "react";

import ReactDOM from "react-dom";
import useWindowScroll from "@react-hook/window-scroll";
import { Masonry } from "masonic";
import { useWindowSize } from "@react-hook/window-size";
import cx from "classnames";
import { v4 as uuidv4 } from 'uuid';
import Link from "next/link";
import Image from 'next/image'
import { FeedCard, useGetFeedCardsQuery } from '@/states/apis/postCardsApi';
import { useInView } from "react-intersection-observer";
import { PageListResponse } from '@common/types';
import GalleryRefreshBottom from "./GalleryRefreshBottom";

const _card = (props: any) => (
    <div className="flex flex-col flex-nowrap w-52 aspect-square">
        <Link href="/post/1">
            <img className="mt-8 mx-auto" alt="i" src={props.data.cover}></img>
            <div>{props.data.title}</div>
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
);

const GalleryRTKQuery = () => {
    let mockData = [
        { cover: "https://sns-img-hw.xhscdn.com/7f13fbe5-a737-fc53-056f-78994dda6d9c?imageView2/2/w/220/format/webp" },
        { cover: "https://sns-img-hw.xhscdn.com/d7c9b1f2-1f5d-536f-3340-97f16dd9b6d2?imageView2/2/w/220/format/webp" },
        { cover: "https://sns-img-hw.xhscdn.com/c3b42868-87cf-0124-679c-4faa07992e79?imageView2/2/w/220/format/webp" },
        { cover: "https://sns-img-hw.xhscdn.com/7cb9b030-f705-11c2-2737-ddba2108e447?imageView2/2/w/220/format/webp" },
        { cover: "https://sns-img-hw.xhscdn.com/e9deba53-64c5-e969-bd98-ffb613c60910?imageView2/2/w/220/format/webp" },
        { cover: "https://sns-img-hw.xhscdn.com/8c85a5c7-40e3-cad6-87c0-7cb2ae69234c?imageView2/2/w/220/format/webp" },
        { cover: "https://sns-img-qc.xhscdn.com/8f317883-237d-0e6a-2df9-2275452a9216?imageView2/2/w/220/format/webp" },
        { cover: "https://sns-img-hw.xhscdn.com/fd8d4a30-5f2a-9155-028b-409db5f61db7?imageView2/2/w/220/format/webp" },
        { cover: "https://sns-img-qc.xhscdn.com/9eb99b41-d387-3a2b-88bb-570d18768c03?imageView2/2/w/220/format/webp" },
    ]
    // const imgs = data.map((i) => <GalleryCard key={uuidv4()} cover={i}></GalleryCard>);
    console.log(mockData[0].cover)

    const [page, setPage] = useState<number>(0)
    let dd: FeedCard[] = []
    // setPage((prev) => prev + 1)
    const { ref, inView, entry } = useInView({
        onChange: (inView, entry) => {
            if (inView) {
                setPage((prev) => prev + 1)
                // refetch()
                addCardsToData()
            }
        }
    })
    const { data: feedCardsResponse, isLoading, refetch, isSuccess } = useGetFeedCardsQuery(page, {
        // pollingInterval: 10000,
        refetchOnMountOrArgChange: false,
        skip: false,
    })
    function addCardsToData() {
        if (typeof feedCardsResponse !== "undefined") {
            dd = [...dd, ...feedCardsResponse.data]
            console.log("dd:", dd)
        }
    }

    // const addFeedCardsCallback = useCallback((feedCardsResponse: PageListResponse<FeedCard>): void => {
    //   setData((prev) => [...prev, ...feedCardsResponse.data])
    // }, [feedCardsResponse])

    return (
        <>
            if(isLoading){
                <div>no data</div>
            }else if(isSuccess){
                addCardsToData()
            }else{ }
            {!dd ?
                <div>no data</div> :
                <Masonry
                    // Provides the data for our grid items
                    items={dd}
                    // Adds 8px of space between the grid cells
                    columnGutter={10}
                    // Sets the minimum column width to 172px
                    columnWidth={216}
                    // Pre-renders 5 windows worth of content
                    overscanBy={5}
                    // This is the grid item component
                    render={_card}
                />
            }
            <div ref={ref}>
                <GalleryRefreshBottom inView={inView} />
            </div>
        </>
    )
}
export default GalleryRTKQuery;