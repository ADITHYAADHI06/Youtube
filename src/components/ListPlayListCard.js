import React from 'react'

const ListPlayListCard = ({ channel }) => {
    // console.log(channel?.items[0]);

    const { contentDetails, snippet, kind } = channel?.items[0];
    const { channelTitle, description, thumbnails, title } = channel?.items[0]?.snippet

    return (
        <div className='w-full  grid  grid-cols-12 gap-5 mb-6'>
            <div className='relative h-52 col-span-4 -z-10'>
                <img src={thumbnails?.maxres?.url || thumbnails?.standard?.url || thumbnails?.high?.url || thumbnails?.medium?.url} className='h-full w-full object-fill rounded-2xl' alt='title' />
                <span className='bg-black py-0 px-3 rounded-lg text-white absolute bottom-2 right-1'>{contentDetails.itemCount} videos</span>
            </div>
            <div className='col-span-8'>
                <h3 className='text-xl font-normal'>{title}</h3>
                <p className='text-gray-500 mb-2'>{channelTitle} {kind === "youtube#playlist" ? ". Playlist" : ""}</p>
                <p className='text-black-700'>{description.slice(0, 128)}</p>
            </div>
        </div>
    )
}

export default ListPlayListCard




// const ListVideoCard = ({ video }) => {
//     const { snippet, statistics } = video;
//     const { channelTitle, description, publishedAt, thumbnails, tags, title } = snippet;

//     return (

//         <div className='w-full  grid  grid-cols-12 gap-5 mb-6'>
//             <div className='h-52 col-span-4 '>
//                 <img src={thumbnails.maxres.url} className='h-full w-full object-fill rounded-2xl' alt='title' />
//             </div>
//             <div className='col-span-8'>
//                 <h3 className='text-xl font-normal'>{title}</h3>
//                 <p className='text-gray-500 '>14K Views | 4 Years ago</p>
//                 <p className='text-gray-500 my-2'>{channelTitle}</p>
//                 <p className='text-black-700'>{description.slice(0, 128)}</p>
//             </div>
//         </div>

//     )
// }
