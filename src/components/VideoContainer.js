import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utils/constants'
import VideoCard from './VideoCard';
import { useDispatch, useSelector } from 'react-redux';
import { setVideos } from "../store/mainSlice"

const VideoContainer = () => {
    const dispatch = useDispatch();

    const videos = useSelector((state) => state.main.videos);

    const getVideos = async () => {
        const res = await fetch(YOUTUBE_API + process.env.REACT_APP_YOUTUBE_API_KEY);
        const data = await res.json();
        dispatch(setVideos(data))
    }

    useEffect(() => {
        getVideos();
    }, [])


    if (videos.length === 0) {
        return null;
    }

    return (
        <div className='lg:px-5 grid grid-cols-12 place-content-center mt-5  sm:gap-5 lg:gap-5  '>
            {
                videos?.items?.map((video) => <VideoCard key={video?.id} video={video} />)
            }

        </div>
    )
}

export default VideoContainer