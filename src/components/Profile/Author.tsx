import Image from 'next/image';
const Author = () => {
    return (
        <div className="flex flex-row gap-4">
            <div className="flex w-40 h-40 m-4 shrink-0">
                <Image alt="a" src="https://sns-avatar-qc.xhscdn.com/avatar/1000g2jo2hiut8b0j806g5n95a1h4icmoj13k228?imageView2/2/w/540/format/webp|imageMogr2/strip" width={160} height={160} className="rounded-full"></Image>
            </div>
            <div className="flex flex-col content-center my-auto">
                <div className="flex text-xl font-bold"> light</div>
                <div className="flex text-lg text-gray-500"> uper</div>
                <div className="flex text-lg text-gray-500"> 🥳感谢关注 一起变美呀！ 🌍500强高管 Digital marketing manager 🧣：@叫我培培呀 全网同名 📮：1508425512@qq.com</div>
                <div className="flex text-lg text-gray-400">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </span>
                    japan tokyo
                </div>
            </div>
        </div>
    )
}

export default Author
