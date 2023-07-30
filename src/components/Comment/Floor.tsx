import Image from "next/image";
import LikeIcon from "./LikeIcon";
import FavorIcon from "./FavorIcon";
import ReplyIcon from "./ReplyIcon";
import { Image as BaseImage } from "@/states/model/base";
import { formatDate, formatTimeStamp } from "@/utils/time";
import { Reply as ReplyModel } from '../../states/model/comment';
import { useState } from "react";
import { getRepliesReq, useGetRepliesQuery } from "@/states/apis/comment";
import Reply from "./Reply";

export interface FloorProps {
    rootReply: ReplyModel
    replies: ReplyModel[]
}

function formatReplyTime(timestamp: number): string {
    const format = 'yyyy-MM-dd HH:mm';
    let formattedDate = formatTimeStamp(timestamp as number, format);
    return formattedDate;
}
export default function Floor(props: FloorProps) {
    const [repliesOffset, setRepliesOffset] = useState(0);
    const [repliesLimit, setRepliesLimit] = useState(2);
    const [repliesSortBy, setRepliesSortBy] = useState("time");
    const [repliesSortOrder, setRepliesSortOrder] = useState("desc");

    let repliesData = [] as ReplyModel[]
    repliesData = props.replies
    function getMoreReplies(floorId: string) {
        let req: getRepliesReq = {
            subjectId: props.rootReply.id,
            floorId: floorId,
            offset: repliesOffset,
            limit: repliesLimit,
            by: repliesSortBy,
            order: repliesSortOrder
        }
        const { data: resp, isLoading, isSuccess, isError, error } = useGetRepliesQuery(req)
        if (isSuccess) {
        }
    }

    const [showMoreReplies, setShowMoreReplies] = useState(false);
    const rootReplyCmp = <section className="flex flex-row bg-white">
        <div className="shrink-0 w-16">
            <Image className="hidden object-cover w-10 h-10 mx-3 mt-4 rounded-full sm:block" width={40} height={40} src={props.rootReply.user_info?.avatar?.url!} alt="avatar"></Image>
        </div>
        <div className="flex flex-col ">
            <div className="    dark:bg-gray-800">
                <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center">
                        <a className="font-bold text-gray-700 cursor-pointer dark:text-gray-200">{props.rootReply.user_info?.name}</a>
                        {/* Mar 10, 2019 */}
                        <span className="pl-4 text-sm font-light text-gray-600 dark:text-gray-400">{formatReplyTime(props.rootReply.created_at!)}</span>
                    </div>
                    <a href="#" className="text-gray-400 dark:text-blue-400 hover:underline">#100</a>
                </div>
                <div className="mt-2">
                    <p className="mt-2 text-gray-600 dark:text-gray-300">{props.rootReply.content}++Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
                </div>
                <div className="flex items-center justify-start space-x-2">
                    <LikeIcon likeCount={props.rootReply.like_count as number} isLiked={true} />
                    <FavorIcon />
                    <ReplyIcon />
                </div>
            </div>
        </div>
    </section>

    return (
        <>
            {rootReplyCmp}
            <span className="pl-8"> view more replies ({repliesData.length}) </span>
            {repliesData.map((reply, _) =>
                <Reply key={reply.id} reply={reply}></Reply>)
            }
        </>
    )
}