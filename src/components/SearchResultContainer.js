import React from 'react'
import { useSelector } from 'react-redux'
import ListVideoCard from './ListVideoCard'
import ListChannelCard from './ListChannelCard'
import ListPlayListCard from './ListPlayListCard'
import Shimmer from "./Shimmer"

const SearchResultContainer = () => {

    const resultVideos = useSelector((state) => state.video.resultVideos)

    if (resultVideos.length === 0) {
        return <Shimmer />;
    }

    return (
        <div className='px-6 sm:px-10 md:px-10 lg:px-24 min-[1300px]:px-52 py-10 pt-4 lg:pt-12 flex justify-center flex-col'>
            {
                resultVideos.map((item, i) => {
                    if (item.items[0].kind === "youtube#channel") {
                        return <ListChannelCard channel={item} key={i} />
                    }
                    if (item.items[0].kind === "youtube#video") {
                        return <ListVideoCard video={item.items[0]} key={item.items[0].id} />
                    }
                    if (item.items[0].kind === "youtube#playlist") {
                        return <ListPlayListCard channel={item} key={i} />

                    }

                })
            }
        </div>
    )
}

export default SearchResultContainer