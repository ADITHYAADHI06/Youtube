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
        <Link to={`watch?v=${id}`} onClick={toggleMenuHandler} className='card col-span-3 '>
            <div className='h-56 '>
                <img className='h-full w-full rounded-2xl' src={thumbnails?.maxres?.url} alt="thumbnail" />
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