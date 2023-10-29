import React from 'react'
import { Link } from 'react-router-dom';

const ListVideoCard = ({ video }) => {
    const { snippet, statistics, id, } = video;
    console.log(video);
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
            <div className='w-full  grid  grid-cols-12 gap-5 mb-6'>
                <div className='h-52 relative col-span-4 -z-10 '>
                    <img src={thumbnails?.maxres?.url || thumbnails?.standard?.url || thumbnails?.high?.url || thumbnails?.medium?.url} className='h-full w-full object-fill rounded-2xl' alt='title' />
                    {
                        liveBroadcastContent === "live" ? <span className='bg-red-600 rounded-md text-white py-0 px-3  absolute bottom-2 right-2'>Live</span> : <span className='bg-black py-0 px-3 rounded-lg text-white absolute bottom-2 right-1'>{durationArray[0]}{durationArray?.[1] ?? 0}:{durationArray?.[2] ?? 0}{durationArray?.[3] ?? 0}</span>
                    }


                </div>
                <div className='col-span-8'>
                    <h3 className='text-xl font-normal'>{title}</h3>
                    <p className='text-gray-500 '>14K Views | 4 Years ago</p>
                    <p className='text-gray-500 my-2'>{channelTitle}</p>
                    <p className='text-black-700'>{description.slice(0, 128)}</p>
                </div>
            </div>
        </Link>

    )
}

export default ListVideoCard