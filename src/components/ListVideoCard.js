import React from 'react'
import { Link } from 'react-router-dom';

const ListVideoCard = ({ video }) => {
    const { snippet, statistics, id, } = video;
    // console.log(video);
    const { channelTitle, description, publishedAt, thumbnails, tags, title, liveBroadcastContent } = snippet;
    console.log(liveBroadcastContent);
    // console.log(video.contentDetails.duration);
    const durationString = video.contentDetails.duration;
    const a = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let durationArray = []
    // console.log(durationString.length);
    for (let i = 0; i < durationString.length; i++) {
        if (durationString[i] === "H") {
            if (a.includes(durationString[i - 2])) {
                durationArray.push(durationString[i - 2]);
            }
            if (a.includes(durationString[i - 1])) {
                durationArray.push(durationString[i - 1]);
            }
        }
        if (durationString[i] === "M") {
            if (a.includes(durationString[i - 2])) {
                durationArray.push(durationString[i - 2]);
            }
            if (a.includes(durationString[i - 1])) {
                durationArray.push(durationString[i - 1]);
            }
        }
    }

    // console.log(durationArray);
    return (
        <Link to={`watch?v=${id}`} >
            <div className='w-full  grid  grid-cols-12 gap-1  sm:gap-5 mb-10 sm:mb-6'>
                <div className='h-80  sm:h-40 md:h-52  min-[900px]:h-64 min-[1050px]:h-80  xl:h-72   min-[1380px]:h-[350px] relative col-span-12 sm:col-span-5 -z-10 '>
                    <img src={thumbnails?.maxres?.url || thumbnails?.standard?.url || thumbnails?.high?.url || thumbnails?.medium?.url} className='h-full w-full object-fill rounded-2xl' alt='title' />
                    {
                        liveBroadcastContent === "live" ? <span className='bg-red-600 rounded-md text-white py-0 px-3  absolute bottom-2 right-2'>Live</span> : <span className='bg-black py-0 px-3 rounded-lg text-white absolute bottom-2 right-1'>{durationArray[0]}{durationArray?.[1] ?? 0}:{durationArray?.[2] ?? 0}{durationArray?.[3] ?? 0}</span>
                    }


                </div>
                <div className='sm:hidden col-span-12'>
                    <h3 className='text-lg sm:text-lg  xl:text-lg   min-[1380px]:text-xl font-normal'>{title}</h3>
                    <p className='text-gray-500 text-xs sm:text-sm lg:text-base '>{channelTitle} | 14K Views | 4 Years ago</p>
                </div>
                <div className='hidden sm:block sm:col-span-7'>
                    <h3 className='text-xl sm:text-lg lg:text-xl  xl:text-xl   min-[1380px]:text-2xl font-normal'>{title}</h3>
                    <p className='text-gray-500 text-xs sm:text-sm lg:text-sm xl:text-[14px]   min-[1380px]:text-[14px] xl:mt-1  '>14K Views | 4 Years ago</p>
                    <p className='text-gray-500 text-sm my-2  xl:text-[14px]   min-[1380px]:text-[18px] xl:my-5'>{channelTitle}</p>
                    <p className='text-black-700 hidden sm:block sm:text-xs md:text-sm lg:text-sm xl:text-[14px]   min-[1380px]:text-base'>{description.slice(0, 128)}</p>
                </div>
            </div>
        </Link>

    )
}

export default ListVideoCard