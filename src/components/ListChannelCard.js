import React from 'react'

const ListChannelCard = ({ channel }) => {
    console.log(channel);

    const { customUrl, description, thumbnails, title } = channel.items[0].snippet;
    const { subscriberCount } = channel.items[0].statistics
    return (
        <>
            <div className='grid grid-cols-12 pb-3 pt-3 '>
                <div className='col-span-3'>
                    <img className='rounded-full h-48 w-48' src={thumbnails?.maxres?.url || thumbnails?.standard?.url || thumbnails?.high?.url || thumbnails?.medium?.url} alt='ch-logo ' />
                </div>
                <div className='col-span-8 my-auto'>
                    <h3 className='text-2xl font-normal'>{title}</h3>
                    <p className='text-gray-500 text-sm mt-2'>{customUrl} . {subscriberCount / 1000}k subscribers</p>
                    <p className='text-gray-500 mb-2 text-sm'>{description.slice(0, 100)} more...</p>
                </div>
                <div className='col-span-1m my-auto'><button className='bg-black text-white py-2 px-4 rounded-3xl'>Subscribe</button></div>
            </div>
            <hr className='mb-7 bg-black h-[1px]' />
        </>
    )
}

export default ListChannelCard