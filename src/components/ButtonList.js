import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { SetsearchText } from '../store/mainSlice'
import { YOUTUBE_MAIN_API } from '../utils/constants'
import { setSearchResultVidoes } from '../store/videoSlice'

const ButtonList = ({ Title, ClickedButton, SetClickedButton }) => {

    const dispatch = useDispatch();

    const handleButtonList = async () => {
        SetClickedButton(Title);
        dispatch(SetsearchText(Title));
        const res = await fetch(YOUTUBE_MAIN_API + Title + "&key=" + process.env.REACT_APP_YOUTUBE_API_KEY);
        const data = await res.json();
        dispatch(setSearchResultVidoes(data.items))
    }
    return (
        <Link to={`results?v=${Title}`}>
            <div className={Title === ClickedButton ? "px-3 py-1 lg:px-4 lg:py-2 bg-black text-white font-normal rounded-lg" : 'px-3 py-1 lg:px-4 lg:py-2 font-normal bg-gray-200 rounded-lg hover:bg-black hover:text-white'} onClick={() => { handleButtonList(); }}>
                {Title}
            </div>
        </Link>
    )
}

export default ButtonList