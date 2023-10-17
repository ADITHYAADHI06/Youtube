import React, { useState } from 'react'

const VideoDiscription = ({ publishedAt, viewCount, description }) => {
    const [descriptionState, SetDescriptionState] = useState(false);


    const handleDescription = () => {
        SetDescriptionState(!descriptionState)
    }
    return (
        <>
            <div className=''>{viewCount} views 22 spet 2023</div>
            {
                descriptionState ? <div className=''>{description}</div> : null
            }
            <button onClick={() => { handleDescription() }}>{descriptionState ? "... less" : "... more"}</button>
        </>
    )
}

export default VideoDiscription