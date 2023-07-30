import type { NextPage } from 'next'
import ProfileTab from "@/components/Profile/ProfileTab"
import Author from "@/components/Profile/Author"

const profile: NextPage = () => {
    return (
        <div className="w-240 mx-auto flex flex-col bg-slate-50">
            <div className="flex">
                <Author></Author>
            </div>
            <div className="flex w-240 ">
                <ProfileTab />
            </div>
        </div>
    );
}

export default profile