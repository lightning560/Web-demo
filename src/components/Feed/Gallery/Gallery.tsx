import * as React from "react";
import { MasonryInfiniteGrid } from "@egjs/react-infinitegrid";
import { useState } from "react";
import axios from "axios";
import { appConfig } from "@/common/config";
import { PostCard } from "@/states/model/feed";
import GalleryCard from "./Card";

export default function App() {
    const [offset, setOffset] = useState(0);
    const limit = 10;
    const [cards, setCards] = useState<PostCard[]>([]);

    async function GetCards() {
        //http://127.0.0.1:9002/v1/feed/cards/0/5/like/ase
        const res = await axios.get("http://127.0.0.1:9002/v1/feed/cards/0/10/like/ase")
        console.log("res", res)
        setOffset(offset + limit)
        setCards([...cards, ...res?.data.data.post_cards])
        console.log("cards", cards)
    }
    return <MasonryInfiniteGrid
        className="container mx-auto"
        gap={5}
        align={"justify"}
        onRequestAppend={(e) => {
            setTimeout(GetCards, 1000)
        }}
        onRenderComplete={(e) => {
            console.log(e);
        }}
    >
        {cards.map((card) => <GalleryCard
            key={card.id}
            id={card.id}
            type={card.type!}
            cover={card.cover}
            title={card.title}
            author={card.author_info}
            likeCount={card.like_count} />
        )}
        {/* {items.map((item) => <Item data-grid-groupkey={item.groupKey} key={item.key} num={item.key} />)} */}
    </MasonryInfiniteGrid>;
}