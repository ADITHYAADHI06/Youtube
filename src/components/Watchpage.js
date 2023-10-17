import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { closeSidebar } from "../store/appSlice"
import { useSearchParams } from 'react-router-dom';
import VideoMetaData from './VideoMetaData';
import VideoDiscription from './VideoDiscription';
import Comments from './Commnets';

const Watchpage = () => {
    const [singleVideo, SetsingleVideo] = useState(null);

    const dispatch = useDispatch();
    const [searchparams] = useSearchParams();

    const fetchSingleVideo = async () => {
        const res = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${searchparams.get("v")}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
        const data = await res.json();
        SetsingleVideo(data?.items?.[0]);
    }

    useEffect(() => {
        dispatch(closeSidebar());
        fetchSingleVideo();
    }, []);


    if (!singleVideo) return null;

    let { snippet, contentDetails, statistics } = singleVideo;
    let { publishedAt, channelId, title, description, channelTitle, tags } = snippet;
    console.log(channelId);
    let { duration } = contentDetails;
    let { viewCount, likeCount, commentCount } = statistics;

    return (
        <div className='w-screen grid grid-cols-12 mt-8'>
            <div className='col-span-9 pr-20 flex flex-col ml-14'>
                <div>
                    <iframe className='w-full h-[600px] rounded-xl' src={`https://www.youtube-nocookie.com/embed/${searchparams.get("v")}?si=yjXv64NvH11-y6zG`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <div>
                    <VideoMetaData channelId={channelId} Videotitle={title} channelTitle={channelTitle} likeCount={likeCount} />
                </div>
                <div className='my-3 p-3 bg-gray-100 rounded-lg'>
                    <VideoDiscription publishedAt={publishedAt} viewCount={viewCount} description={description} />
                </div>
                <Comments />
            </div>
            <div className='col-span-3'>reco</div>
        </div>
    )
}

export default Watchpage