import React from 'react'

const VideoCard = ({ video }) => {
    const { snippet, statistics } = video;
    const { title, thumbnails, channelTitle, publishedAt, channelId } = snippet;
    const { viewCount } = statistics;

    return (
        <div className='card col-span-3 '>
            <div className='h-56 '>
                <img className='h-full w-full rounded-2xl' src={thumbnails?.maxres?.url} alt="thumbnail" />
            </div>
            <div className='title'>
                <h1 className='text-xl font-semibold'>{title}</h1>
                <p className='text-gray-700 '>{channelTitle}</p>
                <p className='text-gray-700 '><span>{viewCount % 100}K Views</span> <span>*</span> <sapn>3 days ago</sapn></p>
            </div>
        </div>
    )
}

export default VideoCard