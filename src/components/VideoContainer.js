// import React, { useEffect, useState } from 'react'
// import { YOUTUBE_API } from '../utils/constants'
// import VideoCard from './VideoCard';
// import { useDispatch, useSelector } from 'react-redux';
// import { setVideos } from "../store/mainSlice"
// import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'
// import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

// const VideoContainer = () => {
//     const dispatch = useDispatch();

//     const [page, setpage] = useState(1);
//     const [loading, setLoading] = useState(true);


//     const videos = useSelector((state) => state.main.videos);

//     const getVideos = async () => {
//         try {
//             setLoading(true);
//             const res = await fetch(YOUTUBE_API + process.env.REACT_APP_YOUTUBE_API_KEY);
//             const data = await res.json();
//             dispatch(setVideos(data));
//         } catch (error) {
//             console.log(error);
//         } finally {
//             setLoading(false);
//         }

//     }

//     useEffect(() => {
//         getVideos();
//     }, [])


//     {
//         loading && (<div className='lg:px-5 grid grid-cols-12 place-content-center mt-5  sm:gap-5 lg:gap-8 min-[1350px]:gap-8 '>
//             <div className='h-64 card col-span-12 sm:col-span-6 md:col-span-6 min-[1000px]:col-span-4 min-[1350px]:col-span-3 mb-8 md:mb-5 lg:mb-8 p-1 bg-gray-200'></div>
//             <div className='h-64 card col-span-12 sm:col-span-6 md:col-span-6 min-[1000px]:col-span-4 min-[1350px]:col-span-3 mb-8 md:mb-5 lg:mb-8 p-1  bg-gray-200'></div>
//             <div className='h-64 card col-span-12 sm:col-span-6 md:col-span-6 min-[1000px]:col-span-4 min-[1350px]:col-span-3 mb-8 md:mb-5 lg:mb-8 p-1  bg-gray-200'></div>
//             <div className='h-64 card col-span-12 sm:col-span-6 md:col-span-6 min-[1000px]:col-span-4 min-[1350px]:col-span-3 mb-8 md:mb-5 lg:mb-8 p-1  bg-gray-200 '></div>
//             <div className='h-64 card col-span-12 sm:col-span-6 md:col-span-6 min-[1000px]:col-span-4 min-[1350px]:col-span-3 mb-8 md:mb-5 lg:mb-8 p-1  bg-gray-200 '></div>
//             <div className='h-64 card col-span-12 sm:col-span-6 md:col-span-6 min-[1000px]:col-span-4 min-[1350px]:col-span-3 mb-8 md:mb-5 lg:mb-8 p-1  bg-gray-200 '></div>
//             <div className='h-64 card col-span-12 sm:col-span-6 md:col-span-6 min-[1000px]:col-span-4 min-[1350px]:col-span-3 mb-8 md:mb-5 lg:mb-8 p-1  bg-gray-200 '></div>
//             <div className='h-64 card col-span-12 sm:col-span-6 md:col-span-6 min-[1000px]:col-span-4 min-[1350px]:col-span-3 mb-8 md:mb-5 lg:mb-8 p-1  bg-gray-200 '></div>
//             <div className='h-64 card col-span-12 sm:col-span-6 md:col-span-6 min-[1000px]:col-span-4 min-[1350px]:col-span-3 mb-8 md:mb-5 lg:mb-8 p-1  bg-gray-200 '></div>
//             <div className='h-64 card col-span-12 sm:col-span-6 md:col-span-6 min-[1000px]:col-span-4 min-[1350px]:col-span-3 mb-8 md:mb-5 lg:mb-8 p-1  bg-gray-200 '></div>
//         </div>)
//     }

//     return (
//         <>
//             <div className='lg:px-5 grid grid-cols-12 place-content-center mt-5  sm:gap-5 lg:gap-5 min-[1350px]:gap-2 '>
//                 {!loading &&
//                     videos?.items?.slice(page * 10 - 10, page * 10).map((video) => <VideoCard key={video?.id} video={video} />)
//                 }
//             </div>
//             <div className='pagination gap-3 flex justify-center my-2 mb-4'>
//                 <button
//                     className="previous-page px-2 py-1 border border-black text-black flex items-center justify-center rounded-md hover:bg-black hover:text-white"
//                     onClick={() => {
//                         if (page !== 1) {
//                             setpage(page - 1);
//                         }
//                     }}
//                 ><MdOutlineKeyboardArrowLeft /></button>
//                 {
//                     Array(videos?.items?.length / 10).fill("").map((_, i) => {
//                         return (
//                             <button className={page === i + 1 ? 'border border-black bg-black text-white px-2 py-1 rounded-md' : 'border border-black text-black px-2 py-1 rounded-md hover:bg-black hover:text-white'} key={i} onClick={() => {
//                                 if (page !== i + 1) {
//                                     setpage(i + 1);
//                                 }
//                             }}>{i + 1}</button>
//                         )

//                     })
//                 }
//                 <button
//                     className="next-page px-2 py-1 flex border border-black rounded-md text-black items-center justify-center hover:bg-black hover:text-white"
//                     aria-label="Next"
//                     onClick={() => {
//                         if (page !== 5) {
//                             setpage(page + 1);
//                         }
//                     }}
//                 ><MdOutlineKeyboardArrowRight /> </button>

//             </div>
//         </>

//     )
// }

// export default VideoContainer



import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utils/constants'
import VideoCard from './VideoCard';
import { useDispatch, useSelector } from 'react-redux';
import { setVideos } from "../store/mainSlice"
import HomeShimmer from './shimmer/HomeSHimmer';

const VideoContainer = () => {
    const dispatch = useDispatch();

    const [page, setpage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [homepageVideos, sethomepageVideos] = useState([]);

    const videos = useSelector((state) => state.main.videos);

    const getVideos = async () => {
        try {
            console.log("1st time videos length 0 so data added");
            const res = await fetch(YOUTUBE_API + process.env.REACT_APP_YOUTUBE_API_KEY);
            const data = await res.json();
            dispatch(setVideos(data));
            setLoading(false);

        } catch (error) {
            console.log(error);
            setLoading(false);
        } finally {
            setLoading(false);
        }
    }

    const InfinityScroll = () => {
        let scrollHeigth = document.body.scrollHeight;
        let innerHeight = window.innerHeight;
        let scrollTop = document.documentElement.scrollTop;
        if (page < 6) {
            if (scrollTop + innerHeight + 1 >= scrollHeigth) {
                setpage(page + 1);
            }
        }
    }

    useEffect(() => {
        if (videos.length === 0) {
            getVideos();
        }

        if (videos?.items && Array.isArray(videos.items)) {
            let newVideos = videos.items.slice(page * 8 - 8, page * 8);
            if (Array.isArray(newVideos)) {
                sethomepageVideos((prevHomeVideos) => [...prevHomeVideos, ...newVideos]);
            }
        }

        window.addEventListener("scroll", InfinityScroll);
        return () => { window.removeEventListener("scroll", InfinityScroll); }
    }, [videos, page])


    if (loading) {
        return <HomeShimmer />
    }

    return (
        <>
            <div className='lg:px-5 grid grid-cols-12 place-content-center mt-5  sm:gap-5 lg:gap-5 min-[1350px]:gap-2 '>
                {!loading &&
                    homepageVideos?.map((video) => <VideoCard key={video?.id} video={video} />)
                }
            </div>
        </>
    )
}

export default VideoContainer
