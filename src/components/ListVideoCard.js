import React from 'react'

const ListVideoCard = ({ video }) => {
    const { snippet, statistics } = video;
    const { channelTitle, description, publishedAt, thumbnails, tags, title } = snippet;

    return (

        <div className='w-full  grid  grid-cols-12 gap-5 mb-6'>
            <div className='h-52 col-span-4 '>
                <img src={thumbnails.maxres.url} className='h-full w-full object-fill rounded-2xl' alt='title' />
            </div>
            <div className='col-span-8'>
                <h3 className='text-xl font-normal'>{title}</h3>
                <p className='text-gray-500 '>14K Views | 4 Years ago</p>
                <p className='text-gray-500 my-2'>{channelTitle}</p>
                <p className='text-black-700'>{description.slice(0, 128)}</p>
            </div>
        </div>

    )
}

export default ListVideoCard