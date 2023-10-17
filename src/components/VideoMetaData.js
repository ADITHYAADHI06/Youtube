import React, { useEffect, useState } from 'react'
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { TfiDownload } from 'react-icons/tfi';
import { PiShareFatLight } from 'react-icons/pi';
import { BsThreeDots } from 'react-icons/bs';
import { YOUTUBE_CHANNEL_API } from '../utils/constants';

const VideoMetaData = (props) => {

    const { channelId, channelTitle, Videotitle, likeCount } = props;
    const [channel, SetChannel] = useState(null);


    const getChannel = async () => {
        const res = await fetch(`${YOUTUBE_CHANNEL_API}${process.env.REACT_APP_YOUTUBE_API_KEY}&id=${channelId}`)
        const data = await res.json();
        console.log(data);
        SetChannel(data);
    }

    useEffect(() => {
        getChannel();
    }, []);

    if (!channel) return null

    let { snippet, statistics } = channel?.items?.[0];
    let { thumbnails } = snippet;
    let { subscriberCount } = statistics;

    return (
        <>
            <h2 className='my-3 text-2xl font-semibold'>{Videotitle}</h2>
            <div className='flex justify-between '>
                <div className='flex gap-4'>
                    <img className='w-12 h-12' src={thumbnails?.default?.url} alt="channel_logo" />
                    <div className='my-auto'>
                        <h4 className='font-semibold text-lg mb-0 '>{channelTitle}</h4>
                        <p className='text-gray-700 text-sm'>{subscriberCount / 1000}k subscribers</p>
                    </div>
                    <div className='my-auto'>
                        <button className='px-4 py-2 text-sm bg-black  text-white font-semibold rounded-3xl '>Subscribe</button>
                    </div>
                </div>
                <div className='flex items-center text-lg gap-2'>
                    <div className='flex gap-3 items-center bg-gray-200  px-4 py-1 font-semibold rounded-3xl'>
                        <span> <AiOutlineLike className='inline-block w-6 h-6 mr-3' /><span className='text-lg'>{parseInt(likeCount / 1000)}K </span></span>  <span className='text-2xl font-normal text-gray-400 inline-block'>|</span> <AiOutlineDislike className='my-auto w-6 h-6 mt-[6px]' />
                    </div>
                    <div className='px-4 py-1 bg-gray-200 font-semibold rounded-3xl'><PiShareFatLight className='inline-block' />  Share </div>
                    <div className='px-4 py-1 bg-gray-200 font-semibold rounded-3xl'><TfiDownload className='inline-block' />  Download</div>
                    <div className='px-5 py-2 bg-gray-200 font-semibold rounded-full'><BsThreeDots /></div>
                </div>
            </div>
        </>
    )
}

export default VideoMetaData