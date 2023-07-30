import { HeartIcon, StarIcon, ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";

import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";


interface LikeIconProps {
    likeCount: number;
    isLiked: boolean;
}

export default function LikeIcon(props: LikeIconProps) {
    return (<>
        <span className="text-sm font-light text-gray-600 dark:text-gray-400">
            {props.isLiked ? <HeartIconSolid className="w-6 h-6 text-red-600 dark:text-red-400" />
                : <HeartIcon className="w-6 h-6 text-gray-600 dark:text-gray-400" />}

        </span>
        <span className="text-sm font-light text-gray-600 dark:text-gray-400">{props.likeCount}</span>

    </>);
}