import React from 'react'
import ButtonListContainer from './ButtonListContainer'
import VideoContainer from './VideoContainer'

const Main = () => {
    return (
        <div className='w-full overflow-x-hidden px-8'>
            <ButtonListContainer />
            <VideoContainer />
        </div>
    )
}

export default Main