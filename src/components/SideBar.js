import React from 'react'
import { useSelector } from 'react-redux'

const SideBar = () => {
    const isMenuOpen = useSelector((state) => state.app.isMenuOpen)


    if (!isMenuOpen) {
        return null
    }
    return (
        <div className='w-60 p-4 px-7 h-[90vh] shadow-lg font-bold'>
            <ul >
                <li>Home</li>
                <li>Sub</li>
                <li>History</li>
                <li>Active</li>
                <li>Back</li>
            </ul>
        </div>
    )
}

export default SideBar