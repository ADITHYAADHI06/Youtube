import React, { useState } from 'react'
import ButtonList from './ButtonList'

const ButtonListContainer = () => {

    const [ClickedButton, SetClickedButton] = useState("All");

    let buttonNames = ["All", "Javascript", "Games", "Latest", "Mixers", "Hot", "Live", "Music", "Videos", "Top Rated"];
    return (
        <div className=' flex my-6 gap-5 '>
            {
                buttonNames.map((Title, i) => <ButtonList key={i} Title={Title} ClickedButton={ClickedButton} SetClickedButton={SetClickedButton} />)
            }
        </div>
    )
}

export default ButtonListContainer