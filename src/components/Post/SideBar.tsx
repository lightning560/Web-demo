import Image from 'next/image';

const SideBar = () => {
    const note1 = (
        <div className="flex flex-row h-20" >
            <Image alt="avatar" width='80' height='80' src="https://dummyimage.com/80x80"></Image>
            <div className="flex flex-col place-content-between">
                <span className="">nickname</span>
                <div className="flex flex-row">
                    <span><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg></span>
                    <span>894</span>
                </div>
            </div>
        </div>
    );

    const NoteList = Array.from({ length: 10 }, (_, index) => (<div key={index.toString()} className="flex">{note1}</div>))

    return (
        <div className="flex flex-col bg-white gap-4">
            <p className="pl-4">笔记作者</p>
            <div className="flex flex-row pl-4 gap-8">
                <div className="flex">
                    <Image alt='' className=" w-15 h-15 rounded-full" width='60' height='60' src="https://dummyimage.com/60"></Image>
                </div>
                <div className="flex self-center"><p className="text-xl">name</p></div>
            </div>
            <div className="h-6 bg-slate-50"></div>
            <p className="pl-4">相关笔记</p>
            <section className="flex flex-col h-120 gap-4 overflow-auto">

                {NoteList}
            </section>
            <p className="flex place-content-center my-4 text-blue-500">相关笔记</p>
        </div >
    )
}

export default SideBar