import Image from "next/image";
import LikeIcon from "./LikeIcon";
import FavorIcon from "./FavorIcon";
import ReplyIcon from "./ReplyIcon";
import { useState } from "react";
import { Reply as ReplyModel } from '@/states/model/comment';
import { formatTimeStamp } from "@/utils/time";

interface ReplyProps {
    reply: ReplyModel
}
function formatReplyTime(timestamp: number): string {
    const format = 'yyyy-MM-dd HH:mm';
    let formattedDate = formatTimeStamp(timestamp as number, format);
    return formattedDate;
}
export default function Reply(props: ReplyProps) {

    return (
        <section className="flex flex-row bg-white">
            <div className="w-10 mx-3"></div>
            <div className=" shrink-0">
                <Image className="hidden object-cover w-8 h-8 mx-4 my-4 rounded-full sm:block" width={32} height={32} src={props.reply.user_info?.avatar?.url!} alt="avatar"></Image>
            </div>
            <div className="flex flex-col w-184">
                <div className=" rounded-lg dark:bg-gray-800">
                    <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center">
                            <a className="font-bold text-gray-700 cursor-pointer dark:text-gray-200">{props.reply.user_info?.name}</a>
                            {/* Mar 10, 2019 */}
                            <span className="pl-4 text-sm font-light text-gray-600 dark:text-gray-400">{formatReplyTime(props.reply.created_at!)}</span>
                        </div>
                        {/* <a href="#" className="text-gray-400 dark:text-blue-400 hover:underline">#100</a> */}
                    </div>

                    <div className="mt-2">
                        <p className="mt-2 text-gray-600 dark:text-gray-300">{props.reply.content}++Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
                    </div>
                    <div className="flex items-center justify-start space-x-2">
                        <LikeIcon likeCount={props.reply.like_count as number} isLiked={true} />
                        <FavorIcon />
                        <ReplyIcon />
                    </div>
                </div>
            </div>
        </section>
    )
}