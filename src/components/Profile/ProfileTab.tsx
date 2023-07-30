
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import clsx from 'clsx';
import NoteGrid from './NoteGrid';
import AlbumGrid from './AlbumGrid';

// import 'react-tabs/style/react-tabs.css';
function ProfileTab() {
    const [tabIndex, setTabIndex] = useState(0);
    const active = "text-black  text-xl underline inline-block";
    const unactive = "text-gray-500 text-xl inline-block";
    return (
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className="mx-auto">
            <TabList className="flex flex-row justify-center gap-4 p-1 space-x-1  rounded-xl w-36 mx-auto">
                <Tab className={clsx({ [active]: tabIndex == 0 }, { [unactive]: tabIndex != 0 })}><p>Note</p></Tab>
                <Tab className={clsx({ [active]: tabIndex == 1 }, { [unactive]: tabIndex != 1 })}><p>Album</p></Tab>
            </TabList>

            <TabPanel>
                <NoteGrid />
            </TabPanel>
            <TabPanel>
                <AlbumGrid />
            </TabPanel>
        </Tabs >
    );
};
export default ProfileTab;

