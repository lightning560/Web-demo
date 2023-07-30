import { VideoCircleIcon } from '@/components/Icons/VideoCircleIcon';
import { HeartIcon } from '@heroicons/react/24/outline';
import Image from 'next/image'
import Link from 'next/link'
import { Image as BaseImage } from '@/states/model/base';
import { UserInfo } from '@/states/model/user';

interface GalleryCardProps {
    id?: string;
    type: string;
    cover?: BaseImage;
    title?: string;
    likeCount?: number;
    author?: UserInfo;
}

const GalleryCard = (props: GalleryCardProps) => {
    function getHref(id: string | number | undefined) {
        return "/post/" + id;
    }
    return (

        <div className="flex flex-col flex-nowrap w-52 aspect-square">
            <Link href={"post/" + props.id}>
                <div className="relative">
                    <img className="mt-8 mx-auto" alt="i" src={props.cover?.url}></img>
                    <div className="absolute top-0 right-0 ...">
                        {props.type == "video" ? <VideoCircleIcon /> : null}
                    </div>
                </div>
                <div>{props.title}</div>
            </Link>
            <div className="flex flex-row flex-nowrap w-52 justify-between">
                <Image alt="avatar" width='30' height='30' src={props.author?.avatar?.url as string}></Image>
                <span className="">{props.author?.name}</span>
                <HeartIcon className='w-6 h-6' />
                <span>{props.likeCount}</span>
            </div>
        </div>
    )
};

export default GalleryCard;