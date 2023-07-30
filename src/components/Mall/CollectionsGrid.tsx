import { useGetCardsByIdsQuery } from '@/states/apis/Collection'
import { CollectionCard } from '@/states/model/mall'
import Link from 'next/link'

export default function CollectionsGrid() {
    let cardsData = [] as CollectionCard[]
    let cardsContent = <div>Loading...</div>
    function getCollectionCards() {
        let req: string[] = ["3", "4", "5"]
        const { data: resp, isLoading, isSuccess, isError, error } = useGetCardsByIdsQuery({ ids: req })
        if (isSuccess) {
            cardsData = resp?.data.collection_cards!
            console.log("getCollectionCards isSuccess")
            console.log(cardsData)
            cardsContent =
                <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
                    <li>
                        <a href="#" className="relative block group">
                            <img
                                // src="https://sns-img-qc.xhscdn.com/774d37e0-69f2-9856-b6da-09b07ddefaee?imageView2/2/w/648/format/webp"
                                src={cardsData[0].cover?.url}
                                alt=""
                                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                            />

                            <div
                                className="absolute inset-0 flex flex-col items-start justify-end p-6"
                            >
                                <h3 className="text-xl font-medium text-white">{cardsData[0].name}</h3>
                                <span
                                    className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                                >
                                    Shop Now
                                </span>
                            </div>
                        </a>
                    </li>

                    <li>
                        <a href="#" className="relative block group">
                            <img
                                src={cardsData[1].cover?.url}
                                alt=""
                                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                            />

                            <div
                                className="absolute inset-0 flex flex-col items-start justify-end p-6"
                            >
                                <h3 className="text-xl font-medium text-white">{cardsData[1].name}</h3>

                                <span
                                    className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                                >
                                    Shop Now
                                </span>
                            </div>
                        </a>
                    </li>

                    <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
                        <Link href={"/collection/1"} className="relative block group">
                            <img
                                src={cardsData[2].cover?.url}
                                alt=""
                                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                            />

                            <div
                                className="absolute inset-0 flex flex-col items-start justify-end p-6"
                            >
                                <h3 className="text-xl font-medium text-white">{cardsData[2].name}</h3>

                                <span
                                    className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                                >
                                    Shop Now
                                </span>
                            </div>
                        </Link>
                    </li>
                </ul>
        }
        if (isError) {
            console.log("getCollectionCards isError")
            console.log(error)
        }
        if (isLoading) {
            console.log("getCollectionCards isLoading")
        }
        if (error) {
            console.log("getCollectionCards error")
            console.log(error)
        }
    }
    getCollectionCards()
    return (
        <section>
            <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
                <header className="text-center">
                    <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                        New Collection
                    </h2>

                    <p className="max-w-md mx-auto mt-4 text-gray-500">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
                        praesentium cumque iure dicta incidunt est ipsam, officia dolor fugit
                        natus?
                    </p>
                </header>
                {cardsContent}
            </div>
        </section>

    )
}