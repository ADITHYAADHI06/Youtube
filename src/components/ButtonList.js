import React, { useState } from 'react'

const ButtonList = ({ Title, ClickedButton, SetClickedButton }) => {

    const handleButtonList = () => {
        SetClickedButton(Title)
    }
    return (
        <div className={Title === ClickedButton ? "px-5 py-2 bg-black text-white font-medium rounded-lg" : 'px-5 py-2 font-medium bg-gray-200 rounded-lg'} onClick={handleButtonList}>
            {Title}
        </div>
    )
}

export default ButtonList