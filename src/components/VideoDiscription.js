import React, { useState } from 'react'

const VideoDiscription = ({ publishedAt, viewCount, description }) => {
    const [descriptionState, SetDescriptionState] = useState(false);


    const handleDescription = () => {
        SetDescriptionState(!descriptionState)
    }
    return (
        <>
            <div className='text-[13px] sm:text-sm'>{viewCount} views 22 spet 2023</div>
            {
                descriptionState ? <div className='text-xs sm:text-sm mt-2'>{description}</div> : null
            }
            <button className='text-xs sm:text-sm' onClick={() => { handleDescription() }}>{descriptionState ? "... less" : "... more"}</button>
        </>
    )
}

export default VideoDiscription