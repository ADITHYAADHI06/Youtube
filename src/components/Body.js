import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'
import Head from './Head'

const Body = () => {
    return (
        <>
            <Head />
            <div className='flex w-screen relative'>
                <SideBar />
                <Outlet />
            </div>
        </>
    )
}

export default Body