import Image from "next/image";

const NoteGrid = () => {
    const note = (i: number) => {
        return (
            <div key={'NoteWrapper' + i.toString()}>
                <div className="flex group relative">
                    <div className="w-full h-full  absolute inset-0 object-cover object-center group-hover:bg-gray-300"></div>
                    <div className="flex flex-col bottom-0 left-0 z-10 relative group-hover:opacity-80">
                        <Image className="mt-2" alt="i" src="https://dummyimage.com/220x300" width={220} height={300}></Image>
                        <p>abc</p>
                        <div className="flex flex-row">
                            <Image alt="avatar" src="https://dummyimage.com/30x30" width={30} height={30}></Image>
                            <span className="">nickname</span>
                            <span className="grow"></span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </span>
                            <span>894</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    };

    const notes = () => {
        let res: any[] = []
        Array.from({ length: 10 }, (_, index) => (res.push(note(index))))
        return res
    }

    return (
        <div className="grid grid-cols-4 gap-4">
            {notes().map((note) => note)}
        </div >

        // <section class="text-gray-600 body-font">
        //     <div class="container px-5 py-2 mx-auto">
        //         <div class="flex flex-wrap -m-4">
        //             <div class="lg:w-1/3 sm:w-1/2 p-4">
        //                 <div class="flex relative">
        //                     <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/600x360"></img>
        //                     <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
        //                         <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
        //                         <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
        //                         <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div class="lg:w-1/3 sm:w-1/2 p-4">
        //                 <div class="flex relative">
        //                     <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/601x361"></img>
        //                     <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
        //                         <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
        //                         <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
        //                         <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div class="lg:w-1/3 sm:w-1/2 p-4">
        //                 <div class="flex relative">
        //                     <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/603x363"></img>
        //                     <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
        //                         <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
        //                         <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
        //                         <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div class="lg:w-1/3 sm:w-1/2 p-4">
        //                 <div class="flex relative">
        //                     <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/602x362"></img>
        //                     <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
        //                         <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
        //                         <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Neptune</h1>
        //                         <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div class="lg:w-1/3 sm:w-1/2 p-4">
        //                 <div class="flex relative">
        //                     <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/605x365"></img>
        //                     <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
        //                         <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
        //                         <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Holden Caulfield</h1>
        //                         <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div class="lg:w-1/3 sm:w-1/2 p-4">
        //                 <div class="flex relative">
        //                     <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/606x366"></img>
        //                     <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
        //                         <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
        //                         <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Alper Kamu</h1>
        //                         <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>

    )
}
export default NoteGrid
