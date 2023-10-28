import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { GoHomeFill } from 'react-icons/go';
import { SiShortcut } from 'react-icons/si';
import { MdOutlineOndemandVideo } from 'react-icons/md';
import { BiSolidVideos } from 'react-icons/bi';
// import { MdSlowMotionVideo } from 'react-icons/md';
import { GoVideo } from 'react-icons/go';
import { GrHistory } from 'react-icons/gr';
import { AiOutlineLike } from 'react-icons/ai';
import { BsClockHistory } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const SideBar = () => {
    const isMenuOpen = useSelector((state) => state.app.isMenuOpen)
    const [activePage, setactivePage] = useState("Home");

    if (!isMenuOpen) {
        return null
    }
    return (
        <div className='w-60 py-4 h-[90vh] shadow-lg'>
            <ul >
                <Link to="/"><li className={activePage === "Home" ? " py-2 px-4 pl-8 my-1 font-semibold bg-gray-200 " : "py-2 px-4 pl-8 my-1 hover:bg-gray-200"} onClick={() => { setactivePage("Home") }}><GoHomeFill className='inline-block w-6 h-6 mr-3' /> Home</li></Link>
                <Link to="/"><li className={activePage === "Shorts" ? " py-2 px-4 pl-8 my-1 font-semibold bg-gray-200 " : "py-2 px-4 pl-8 my-1 hover:bg-gray-200"} onClick={() => { setactivePage("Shorts") }}><SiShortcut className='inline-block w-6 h-6 mr-3' /> Shorts</li></Link>
                <Link to="/"><li className={activePage === "Subscriptions" ? " py-2 px-4 pl-8 my-1 font-semibold bg-gray-200 " : "py-2 px-4 pl-8 my-1 hover:bg-gray-200"} onClick={() => { setactivePage("Subscriptions") }}><MdOutlineOndemandVideo className='inline-block w-6 h-6 mr-3' /> Subscriptions</li></Link>
                <hr className='h-[2px] bg-gray-300' />
                <Link to="/"><li className={activePage === "Your Videos" ? " py-2 px-4 pl-8 my-1 font-semibold bg-gray-200 " : "py-2 px-4 pl-8 my-1 hover:bg-gray-200"} onClick={() => { setactivePage("Your Videos") }}><GoVideo className='inline-block w-6 h-6 mr-3' /> Your Videos</li></Link>
                <Link to="/"><li className={activePage === "Library" ? " py-2 px-4 pl-8 my-1 font-semibold bg-gray-200 " : "py-2 px-4 pl-8 my-1 hover:bg-gray-200"} onClick={() => { setactivePage("Library") }}><BiSolidVideos className='inline-block w-6 h-6 mr-3' /> Library</li></Link>
                <Link to="/"><li className={activePage === "History" ? " py-2 px-4 pl-8 my-1 font-semibold bg-gray-200 " : "py-2 px-4 pl-8 my-1 hover:bg-gray-200"} onClick={() => { setactivePage("History") }}><GrHistory className='inline-block w-6 h-6 mr-3' /> History</li></Link>
                <Link to="/"><li className={activePage === "Liked Videos" ? " py-2 px-4 pl-8 my-1 font-semibold bg-gray-200 " : "py-2 px-4 pl-8 my-1 hover:bg-gray-200"} onClick={() => { setactivePage("Liked Videos") }}><AiOutlineLike className='inline-block w-6 h-6 mr-3' /> Liked Videos</li></Link>
                <Link to="/"><li className={activePage === "Watch Later" ? " py-2 px-4 pl-8 my-1 font-semibold bg-gray-200 " : "py-2 px-4 pl-8 my-1 hover:bg-gray-200"} onClick={() => { setactivePage("Watch Later") }}><BsClockHistory className='inline-block w-6 h-6 mr-3' /> Watch Later</li></Link>



            </ul>
        </div>
    )
}

export default SideBar