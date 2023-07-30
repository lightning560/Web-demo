import { useState } from "react";
import Floor from "./Floor"
import Reply from "./Reply";
import { Reply as ReplyModel, Floor as FloorModel, FloorsCursorWrap } from '../../states/model/comment';
import { getRepliesReq, useGetFloorsQuery, useGetRepliesQuery } from "@/states/apis/comment";
import { getFloorsReq } from '../../states/apis/comment';
import Subject from "./subject";

interface CommentProps {
    id: string;
}

export default function Comment(props: CommentProps) {

    const [floorOffset, setFloorOffset] = useState(0);
    const [floorLimit, setFloorLimit] = useState(5);
    const [floorSortBy, setFloorSortBy] = useState("reply");
    const [FloorSortOrder, setSortOrder] = useState("desc");

    let floorsData = [] as FloorModel[]
    let floorsContent = <div>Loading...</div>
    function getFloors() {
        let req: getFloorsReq = {
            subjectId: props.id,
            offset: floorOffset,
            limit: floorLimit,
            by: floorSortBy,
            order: FloorSortOrder
        }
        const { data: resp, isLoading, isSuccess, isError, error } = useGetFloorsQuery(req)
        if (isSuccess) {
            if (floorsData.length == 0) {
                floorsData = resp?.data.floors!
            } else {
                floorsData = floorsData.concat(resp?.data.floors!)
            }
            floorsContent = <div>
                {floorsData.map((floor) =>
                    <Floor key={floor.root_reply.id} rootReply={floor.root_reply} replies={(floor.replies as ReplyModel[]) as ReplyModel[]} />
                )}
            </div>
        }
    }
    getFloors()
    return (
        <div>
            <Subject id={props.id} />
            {floorsContent}
            {/* <Floor /> */}
        </div>
    );
};