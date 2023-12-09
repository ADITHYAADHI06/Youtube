import React from 'react'

const ListChannelCard = ({ channel }) => {
    // console.log(channel);

    const { customUrl, description, thumbnails, title } = channel.items[0].snippet;
    const { subscriberCount } = channel.items[0].statistics
    return (
        <>
            <div className='grid grid-cols-12 pb-3 pt-3 '>
                <div className='col-span-3 md:col-span-3'>
                    <img className='rounded-full h-28 w-28 sm:h-48 sm:w-48' src={thumbnails?.maxres?.url || thumbnails?.standard?.url || thumbnails?.high?.url || thumbnails?.medium?.url} alt='ch-logo ' />
                </div>
                <div className='col-span-7 my-auto'>
                    <h3 className='text-xl sm:text-2xl font-normal'>{title}</h3>
                    <p className='text-gray-500 text-xs sm:text-sm mt-2'>{customUrl} . {subscriberCount / 1000}k subscribers</p>
                    <p className='text-gray-500 mb-2 text-xs sm:text-sm'>{description.slice(0, 100)} more...</p>
                </div>
                <div className='col-span-2 md:col-span-2 my-auto'><button className='bg-black text-white py-1 px-4 sm:py-2 sm:px-4 rounded-3xl'>Subscribe</button></div>
            </div>
            <hr className='mb-7 bg-black h-[1px]' />
        </>
    )
}

export default ListChannelCard