import React from 'react'

const ListChannelCard = ({ channel }) => {
    console.log(channel);

    const { customUrl, description, thumbnails, title } = channel.items[0].snippet;
    const { subscriberCount } = channel.items[0].statistics
    return (
        <div className='grid grid-cols-12'>
            <div className='col-span-3'></div>
            <div className='col-span-8'></div>
            <div className='col-span-1'></div>
        </div>
    )
}

export default ListChannelCard