import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { toggleSidebar } from '../store/appSlice';


const VideoCard = ({ video }) => {

    const dispatch = useDispatch();
    const toggleMenuHandler = () => {
        dispatch(toggleSidebar());
    }

    const { snippet, statistics, id } = video;
    const { title, thumbnails, channelTitle, publishedAt, channelId } = snippet;
    const { viewCount } = statistics;

    return (
        <Link to={`watch?v=${id}`} onClick={toggleMenuHandler} className='card col-span-12 sm:col-span-6 md:col-span-6 min-[1000px]:col-span-4 mb-0 md:mb-5 lg:mb-8'>
            <div className='h-72 lg:h-[305px] '>
                <img className='h-full w-full rounded-2xl' src={thumbnails?.maxres?.url || thumbnails?.high?.url} alt="thumbnail" />
            </div>
            <div className='title'>
                <h1 className='text-xl font-semibold'>{title}</h1>
                <p className='text-gray-700 '>{channelTitle}</p>
                <p className='text-gray-700 '><span>{viewCount % 100}K Views</span> <span>*</span> <span>3 days ago</span></p>
            </div>
        </Link>
    )
}

export default VideoCard