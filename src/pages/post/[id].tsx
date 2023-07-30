import ImageSwiper from "@/components/Post/ImageSwiper";
import Article from "@/components/Post/Article"
import Comment from "@/components/Comment/Comment"
import SideBar from "@/components/Post/SideBar"
import VideoPlayer from "@/components/Video/VideoPlayer";
import ReplyInput from "@/components/Post/ReplyInput";
import { useRouter } from 'next/router';
import { useGetPostQuery } from "@/states/apis/post";
import { Video, Image } from '../../states/model/base';
import AuthorSideBar from "@/components/Post/AuthorSideBar";

const item = (props: any) => {
    const router = useRouter();
    let id = router.query.id
    console.log("router.query.id" + router.query.id)

    const { data: resp, isLoading, isSuccess, isError, error } = useGetPostQuery(id as string)
    console.log(resp)
    let post = resp?.data.post
    console.log(post)
    console.log("createdAt:", post?.created_at)
    if (isLoading) {
        return <div>Loading...</div>
    }
    return (
        <>
            {isSuccess ? (
                <div className="w-228 mx-auto flex flex-row bg-slate-50" >
                    <main className="w-140">
                        {post?.type == "image" ? (
                            <ImageSwiper images={resp?.data.post.images as Image[]} ></ImageSwiper>
                        ) : null}

                        {post?.type == "video" ? (
                            <VideoPlayer type="video/mp4" url={post?.video?.url as string} />
                        ) : null}
                        {/* <VideoPlayer type="video/mp4" url={post?.video?.url as string} /> */}
                        <Article timestamp={post?.created_at} title={post?.title} content={post?.content}></Article>
                        <Comment id={post?.comment_id as string}></Comment>
                        <ReplyInput />
                    </main>
                    <div className="w-8"></div>
                    <div className="w-80">
                        <AuthorSideBar name={post?.author_info?.name as string} avatar={post?.author_info?.avatar as Image} />
                        <SideBar />
                    </div>
                </div >
            ) : <div>not success</div>}
        </>


    );
}

export default item