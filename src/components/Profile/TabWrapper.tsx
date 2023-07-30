import { Tab } from '@headlessui/react';

import NoteWrapper from "@/components/Profile/NoteGrid";
import AlbumWrapper from "@/components/Profile/AlbumGrid";

const TabWrapper = () => {
    return (
        <div className="w-full px-2 py-4 sm:px-0 bg-white">
            <Tab.Group>
                <Tab.List className="flex flex-row justify-center gap-4 p-1 space-x-1 bg-blue-900/20 rounded-xl w-36 mx-auto">
                    <Tab className={({ selected }) =>
                        selected ? ' text-black  text-xl underline' : 'text-gray-500 text-xl'
                    }>Notes</Tab>
                    <Tab className={({ selected }) =>
                        selected ? ' text-black text-xl underline' : ' text-gray-500 text-xl'
                    }>Album</Tab>
                </Tab.List>
                <Tab.Panels className="mt-2 mx-auto w-240">
                    <Tab.Panel><NoteWrapper></NoteWrapper></Tab.Panel>
                    <Tab.Panel><AlbumWrapper></AlbumWrapper></Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}

export default TabWrapper
