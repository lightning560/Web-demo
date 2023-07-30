import { useEffect, useState } from 'react';
import { useGetFeedCardsQuery } from '@/states/apis/postCardsApi';
type Props = { inView: boolean };

const GalleryRefreshBottom = ({ inView }: Props) => {
  useEffect(() => {
    if (inView) {
    }
    console.log('RefreshBottom: inView:', inView);
  }, [inView])
  return (
    <>
      {inView ? <div className="">✅</div>
        : <div className="">❌</div>}
    </>
  );
};

export default GalleryRefreshBottom;