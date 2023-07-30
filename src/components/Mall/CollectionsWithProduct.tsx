
import { appConfig } from '@/common/config';
import { useGetCardsByIdsQuery, useGetProductByIdQuery, useGetCollectionByIdQuery } from '@/states/apis/Collection';
import { Ids } from '@/states/model/base'
import { CollectionCard } from '@/states/model/mall'
import axios from 'axios';
import Link from 'next/link'

export default function CollectionsWithProduct() {
    let cardsData = [] as CollectionCard[]
    let cardsContent = <div>Loading...</div>

    async function axiosGetCollectionCardsByIds() {
        let req: string[] = [
            "1", "2", "3"
        ]
        let ids: Ids = {
            ids: req
        }
        const res = await axios({
            method: 'post',
            url: appConfig.MALL_URL + 'mall/collection/cards',
            data: {
                ids: ["1", "2", "3"]
            }
        });
        // console.log(res.data)
        cardsData = res.data.data.collection_cards
        console.log(cardsData)
    }
    function getCollectionCards() {
        let req: string[] = ["1", "2"]
        const { data: resp, isLoading, isSuccess, isError, error } = useGetCardsByIdsQuery({ ids: req })
        if (isSuccess) {
            cardsData = resp?.data.collection_cards!
            console.log("getCollectionCards isSuccess")
            console.log(cardsData)
            cardsContent = <ul className="grid grid-cols-2 gap-4">
                {cardsData.map((card) =>
                    <li>
                        <Link href={"/collection/" + card.id} className="block group">
                            <img
                                src={card.cover?.url}
                                alt={card.cover?.name}
                                className="object-cover w-full rounded aspect-square"
                            />
                            <div className="mt-3">
                                <h3
                                    className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                                >
                                    {card.name}
                                </h3>

                                <p className="mt-1 text-sm text-gray-700">${card.product_card?.price}</p>
                            </div>
                        </Link>
                    </li>
                )}
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
    // axiosGetCollectionCardsByIds()
    return (
        <section>
            <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
                    <div className="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
                        <div className="max-w-md mx-auto text-center lg:text-left">
                            <header>
                                <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Watches</h2>

                                <p className="mt-4 text-gray-500">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
                                    rerum quam amet provident nulla error!
                                </p>
                            </header>

                            <a
                                href="#"
                                className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-gray-900 border border-gray-900 rounded hover:shadow focus:outline-none focus:ring"
                            >
                                Shop All
                            </a>
                        </div>
                    </div>

                    <div className="lg:col-span-2 lg:py-8">
                        {cardsContent}
                    </div>
                </div>
            </div>
        </section>
    )
}