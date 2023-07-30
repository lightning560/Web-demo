import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";
export default function ReplyIcon() {
    return (<>
        <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform rounded cursor-pointer hover:bg-gray-500">
            <ChatBubbleOvalLeftEllipsisIcon className="w-6 h-6 text-gray-600 dark:text-gray-400" />
        </a>
    </>);
}