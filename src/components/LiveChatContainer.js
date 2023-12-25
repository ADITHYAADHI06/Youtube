import React, { useState } from 'react'
import LiveChat from './LiveChat';
import { BsChevronDown, BsThreeDotsVertical } from 'react-icons/bs';
import { IoMdSend } from 'react-icons/io';
import { addmsg } from '../store/chatSlice';
import { useDispatch } from 'react-redux';

const LiveChatContainer = () => {
    const [inputValue, setInputValue] = useState("");

    const dispatch = useDispatch()

    const handleLiveMsg = () => {
        dispatch(addmsg({ name: "ADITHYA SHETTY", msg: inputValue }))
        setInputValue("")
    }
    return (
        <>
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
    )
}

export default LiveChatContainer