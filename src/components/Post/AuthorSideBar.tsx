import { Image as BaseImage } from '@/states/model/base';
import Image from 'next/image';

interface AuthorProps {
    name: string;
    avatar: BaseImage;
}

const AuthorSideBar = (props: AuthorProps) => {
    return (
        <>
            <div className="flex flex-col bg-white gap-4">
                <p className="pl-4">笔记作者</p>
                <div className="flex flex-row pl-4 gap-8">
                    <div className="flex">
                        <Image alt='' className=" w-15 h-15 rounded-full" width='60' height='60' src={props.avatar.url}></Image>
                    </div>
                    <div className="flex self-center"><p className="text-xl">{props.name}</p></div>
                </div>
                <div className="h-6 bg-slate-50"></div>
            </div>
        </>)
}

export default AuthorSideBar