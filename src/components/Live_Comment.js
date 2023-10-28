import React from 'react'

const Live_Comment = ({ name, msg }) => {
    return (
        <div className='flex  gap-2 items-center'>
            <img
                className="h-10 my-auto"
                alt="user"
                src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
            />
            <p>{name}</p>
            <p>{msg}</p>
        </div>
    )
}

export default Live_Comment