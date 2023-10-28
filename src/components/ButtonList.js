import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ButtonList = ({ Title, ClickedButton, SetClickedButton }) => {

    const handleButtonList = () => {
        SetClickedButton(Title)
    }
    return (
        <Link to="/">
            <div className={Title === ClickedButton ? "px-3 py-1 bg-black text-white font-normal rounded-lg" : 'px-3 py-1 font-normal bg-gray-200 rounded-lg'} onClick={handleButtonList}>
                {Title}
            </div>
        </Link>
    )
}

export default ButtonList