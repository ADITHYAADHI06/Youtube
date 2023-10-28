import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utils/constants'
import VideoCard from './VideoCard';

const VideoContainer = () => {
    const [videos, setVideos] = useState([]);



    const getVideos = async () => {
        const res = await fetch(YOUTUBE_API + process.env.REACT_APP_YOUTUBE_API_KEY);
        const data = await res.json();
        // console.log(data);
        setVideos(data);
    }

    useEffect(() => {
        getVideos();
    }, [])


    if (videos.length === 0) {
        return null;
    }

    return (
        <div className='grid grid-cols-12 mt-5 gap-4 '>
            {
                videos?.items?.map((video) => <VideoCard key={video?.id} video={video} />)
            }

        </div>
    )
}

export default VideoContainer