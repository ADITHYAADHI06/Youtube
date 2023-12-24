import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { closeSidebar } from "../store/appSlice"
import VideoMetaData from './VideoMetaData';
import VideoDiscription from './VideoDiscription';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';
import { addmsg } from '../store/chatSlice';
import { BsThreeDotsVertical, BsChevronDown } from 'react-icons/bs';
import { IoMdSend } from 'react-icons/io';
import useSingleVideo from '../customhooks/useSingleVideo';
import { useSearchParams } from 'react-router-dom';
import useLiveChatStatus from '../customhooks/useLiveChatStatus';

const Watchpage = () => {

    const [inputValue, setInputValue] = useState("");
    const dispatch = useDispatch();

    const [searchparams] = useSearchParams();

    //geting data from custom hook.
    let singleVideo = useSingleVideo();
    let [liveChat, setLiveChat] = useLiveChatStatus(singleVideo?.snippet?.liveBroadcastContent)

    const handleLiveMsg = () => {
        dispatch(addmsg({ name: "ADITHYA SHETTY", msg: inputValue }))
        setInputValue("")
    }

    useEffect(() => {
        dispatch(closeSidebar());
    }, []);


    if (!singleVideo) return null;
    console.log(singleVideo);

    let { snippet, contentDetails, statistics } = singleVideo;
    let { publishedAt, channelId, title, description, channelTitle, tags, liveBroadcastContent } = snippet;
    let { duration } = contentDetails;
    let { viewCount, likeCount, commentCount } = statistics;
    return (
        <div className='w-screen grid grid-cols-12 px-2 md:px-8 lg:px-2 gap-8 mt-8'>
            <div className='col-span-12  min-[1279px]:col-span-8 flex flex-col justify-center min-[1279px]:ml-6'>
                <div className='px min-[380px]:px-0 md:px-6 lg:px-0'>
                    <iframe className='w-full h-[280px] sm:h-[400px] md:h-[380px] lg:h-[550px] min-[1170px]:h-[400px] min-[1279px]:h-[450px] min-[1300px]:h-[600px] rounded-xl' src={`https://www.youtube-nocookie.com/embed/${searchparams.get("v")}?si=yjXv64NvH11-y6zG`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <div>
                    <VideoMetaData channelId={channelId} Videotitle={title} channelTitle={channelTitle} likeCount={likeCount} />
                </div>
                <div className='my-3 p-3 bg-gray-100 rounded-lg'>
                    <VideoDiscription publishedAt={publishedAt} viewCount={viewCount} description={description} />
                </div>
                <div className='block min-[1279px]:hidden bg-slate-100 border h-max border-black rounded-3xl'>

                    {
                        liveChat ? (<>
                            <div className='px-4 flex justify-between py-3'>
                                <div className='flex gap-2'>
                                    <p className='text-xl'>Top Chat</p>
                                    <BsChevronDown className='inline-block text-xl my-auto' />
                                </div>
                                <div>
                                    <BsThreeDotsVertical className='inline-block text-xl' />
                                </div>
                            </div>
                            <div className='w-full mb-1 h-[415px] border border-y-black overflow-y-scroll flex flex-col-reverse'>
                                <LiveChat />
                            </div>
                            <div className='w-full flex px-4 gap-4 pt-2 pb-0'>
                                <div>
                                    <img
                                        className="h-10 my-auto"
                                        alt="user"
                                        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
                                    />
                                </div>
                                <div className='w-full'>
                                    <p className='mb-2'>Adithya Shetty</p>
                                    <form onSubmit={(e) => { e.preventDefault(); handleLiveMsg() }}>
                                        <input className='w-full py-2 px-3 border border-b-black bg-slate-100 outline-none' type='text' placeholder='text' value={inputValue} onChange={(e) => { setInputValue(e.target.value) }} />
                                        <div className='flex justify-end items-center gap-2'>
                                            <p>{inputValue.length}/200</p>
                                            <button className='py-2 px-2' ><IoMdSend className='ml-auto text-black text-2xl' /> </button>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </>
                        ) : <></>
                    }


                    <div className={liveChat ? 'w-full flex justify-center font-semibold border-none rounded-3xl' : 'w-full flex justify-center font-semibold border rounded-b-3xl border-t-black'} >
                        <button className={liveChat ? "px-1 py-1 min-[380px]:py-2 min-[380px]:px-4 text-base min-[380px]:text-xl w-full hover:bg-gray-200  hover:rounded-3xl" : 'px-1 py-1 min-[380px]:py-2 min-[380px]:px-4 text-base min-[380px]:text-xl w-full hover:bg-gray-200  hover:rounded-b-3xl'} onClick={() => { setLiveChat(!liveChat) }} >{liveChat ? "Show Live Chat" : "Hide Chat"}</button>
                    </div>
                </div>
                <CommentsContainer />
            </div>
            <div className='hidden custom-display  col-span-4 mr-9 bg-slate-100 border h-max border-black rounded-3xl'>

                {
                    liveChat ? (<>
                        <div className='px-4 flex justify-between py-3'>
                            <div className='flex gap-2'>
                                <p className='text-xl'>Top Chat</p>
                                <BsChevronDown className='inline-block text-xl my-auto' />
                            </div>
                            <div>
                                <BsThreeDotsVertical className='inline-block text-xl' />
                            </div>
                        </div>
                        <div className='w-full mb-1 h-[415px] border border-y-black overflow-y-scroll flex flex-col-reverse'>
                            <LiveChat />
                        </div>
                        <div className='w-full flex px-4 gap-4 pt-2 pb-0'>
                            <div>
                                <img
                                    className="h-10 my-auto"
                                    alt="user"
                                    src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
                                />
                            </div>
                            <div className='w-full'>
                                <p className='mb-2'>Adithya Shetty</p>
                                <form onSubmit={(e) => { e.preventDefault(); handleLiveMsg() }}>
                                    <input className='w-full py-2 px-3 border border-b-black bg-slate-100 outline-none' type='text' placeholder='text' value={inputValue} onChange={(e) => { setInputValue(e.target.value) }} />
                                    <div className='flex justify-end items-center gap-2'>
                                        <p>{inputValue.length}/200</p>
                                        <button className='py-2 px-2' ><IoMdSend className='ml-auto text-black text-2xl' /> </button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </>
                    ) : <></>
                }


                <div className={liveChat ? 'w-full flex justify-center font-semibold border-none rounded-3xl' : 'w-full flex justify-center font-semibold border rounded-b-3xl border-t-black'} >
                    <button className={liveChat ? "py-2 px-4 text-xl w-full hover:bg-gray-200  hover:rounded-3xl" : 'py-2 px-4 text-xl w-full hover:bg-gray-200  hover:rounded-b-3xl'} onClick={() => { setLiveChat(!liveChat) }} >{liveChat ? "Show Live Chat" : "Hide Chat"}</button>
                </div>
            </div>
        </div>
    )
}

export default Watchpage