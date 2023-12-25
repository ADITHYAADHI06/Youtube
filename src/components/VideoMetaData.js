import React, { useEffect, useState } from 'react'
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { TfiDownload } from 'react-icons/tfi';
import { PiShareFatLight } from 'react-icons/pi';
import { BsThreeDots } from 'react-icons/bs';
import { YOUTUBE_CHANNEL_API } from '../utils/constants';
import { formatYouTubeComments } from '../utils/FormatNumbers';

const VideoMetaData = (props) => {

    const { channelId, channelTitle, Videotitle, likeCount } = props;
    const [channel, SetChannel] = useState(null);


    const getChannel = async () => {
        const res = await fetch(`${YOUTUBE_CHANNEL_API}${process.env.REACT_APP_YOUTUBE_API_KEY}&id=${channelId}`)
        const data = await res.json();
        // console.log(data);
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
            <h2 className='my-3 sm:text-xl md:text-2xl font-semibold'>{Videotitle}</h2>
            <div className='flex justify-between flex-col gap-5 sm:gap-0 sm:flex-row '>
                <div className='flex justify-between   gap-1 sm:gap-20 min-[380px]:gap-4 '>
                    <div className='flex justify-between gap-2 min-[380px]:gap-5 sm:gap-3'>
                        <img className='h-8 w-8 sm:w-12 sm:h-12 rounded-full m-auto' src={thumbnails?.default?.url} alt="channel_logo" />
                        <div className='my-auto'>
                            <h4 className='font-semibold text-[15px] min-[380px]:text-sm sm:text-base md:text-lg mb-0 '>{channelTitle}</h4>
                            <p className='text-gray-700 text-xs min-[380px]:text-sm sm:text-sm md:text-sm'>{formatYouTubeComments(subscriberCount)} subscribers</p>
                        </div>
                    </div>
                    <div className='my-auto'>
                        <button className='px-4 py-2 text-xs min-[380px]:text-sm bg-black  text-white font-semibold rounded-3xl '>Subscribe</button>
                    </div>
                </div>
                <div className='flex items-center text-sm sm:text-lg gap-2'>
                    <div className='flex gap-3 items-center flex-row bg-gray-200  px-4 py-1 font-semibold rounded-3xl'>
                        <span> <AiOutlineLike className='inline w-4 h-4 min-[380px]:w-[18px] min-[380px]:h-[18px] sm:w-6 sm:h-6 min-[1279px]:h-5 min-[1279px]:w-5 mr-3' /><span className='text-xs lg:text-lg my-auto hidden min-[380px]:inline '>{likeCount} </span></span>  <span className='text-xs sm:text-2xl  min-[1279px]:text-xl min-[1279px]:text-xl font-normal text-gray-400 inline'>|</span> <AiOutlineDislike className='my-auto w-[18px] h-[18px] sm:w-6 sm:h-6 mt-[6px] min-[1279px]:h-5 min-[1279px]:w-5' />
                    </div>
                    <div className='px-4 py-1 sm:hidden lg:inline bg-gray-200 font-semibold rounded-3xl'><PiShareFatLight className='inline hidden min-[380px]:inline' />  Share </div>
                    <div className='px-4 py-1 sm:hidden lg:inline  bg-gray-200 font-semibold rounded-3xl'><TfiDownload className='inline hidden min-[380px]:inline' />  Download</div>
                    <div className='px-5 py-2  bg-gray-200 font-semibold rounded-full'><BsThreeDots /></div>
                </div>
            </div>
        </>
    )
}

export default VideoMetaData