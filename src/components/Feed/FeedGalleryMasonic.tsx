import Image from 'next/image'
import GalleryCard from '../X/Gallery/GalleryCard';
import { useInView, InView } from 'react-intersection-observer';
import RefreshBottom from './GalleryRefreshBottom';
import { FeedCard, feedCardsApi, useGetFeedCardsQuery } from '@/states/apis/postCardsApi';
import { v4 as uuidv4 } from 'uuid';
import { useCallback, useMemo, useState } from 'react';

const Masonry = () => {
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
    const [items, setItems] = useState(res);
    console.log("items:", items)
    return (
        <>
        </>)
}