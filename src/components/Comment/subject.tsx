import { useState } from "react";
import { Subject as SubjectModel } from '@/states/model/comment';
import { useGetSubjectByIdQuery } from "@/states/apis/subject";
interface SubjectProps {
    id: string;
}

export default function Subject(props: SubjectProps) {
    let subjectContent = <div>Loading...</div>

    const { data: resp, isLoading, isSuccess, isError, error } = useGetSubjectByIdQuery(props.id)
    if (isSuccess) {
        subjectContent = <span>Replies:{resp?.data.subject.reply_count}</span>
    }
    if (isError) {
        subjectContent = <span>error Replies:0</span>
    }


    return (
        <div>
            {subjectContent}
        </div>
    )
}