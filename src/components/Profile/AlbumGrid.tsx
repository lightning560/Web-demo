
import Image from 'next/image'
const AlbumGrid = () => {
    const Album =
        <div className="flex flex-col w-100 gap-4 border-solid border-2 border-gray-100 p-4 rounded hover:shadow-lg">
            <div className="flex flex-row justify-between">
                <p>trip</p>
                <p className="text-gray-600">笔记46</p>
            </div>
            <div className="flex flex-row gap-2">
                <Image alt="1" src="https://dummyimage.com/80" className="rounded w-20 h-20" width={80} height={80}></Image>
                <Image alt="1" src="https://dummyimage.com/80" className="roundes w-20 h-20" width={80} height={80}></Image>
                <Image alt="1" src="https://dummyimage.com/80" className="roundes w-20 h-20" width={80} height={80}></Image>
                <Image alt="1" src="https://dummyimage.com/80" className="roundes w-20 h-20" width={80} height={80}></Image>
            </div>
        </div>

    return (
        <div className="grid grid-cols-2 place-content-center gap-4">
            {Array.from({ length: 10 }, (_, i) => (Album))}
        </div>
    )
}

export default AlbumGrid
