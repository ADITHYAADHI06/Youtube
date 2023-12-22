import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSidebar } from '../store/appSlice';
import { BsSearch } from 'react-icons/bs';
import { IoIosSearch } from 'react-icons/io';
import { YOUTUBE_AUTOSUGGESTIONS_API, YOUTUBE_MAIN_API } from '../utils/constants';
import { addSearchSugestions } from '../store/searchSlice';
import { setSearchResultVidoes } from '../store/videoSlice';
import { Link } from 'react-router-dom';
import { SetsearchText } from "../store/mainSlice"

const Head = () => {
    const [searchSuggetions, SetsearchSuggetions] = useState([]);
    const [showAutoSuggetions, SetshowAutoSuggetions] = useState(false);
    const dispatch = useDispatch();

    const search = useSelector((store) => store.search)

    const searchText = useSelector((store) => store.main.searchText)


    const toggleMenuHandler = () => {
        dispatch(toggleSidebar());
    }
    const getSuggestions = async () => {
        if (searchText) {
            const res = await fetch(YOUTUBE_AUTOSUGGESTIONS_API + searchText);
            const data = await res.json();
            SetsearchSuggetions(data[1]);
            dispatch(addSearchSugestions({ [searchText]: data[1] }))
        }
    }

    const handleSearchQuery = async (suggestion) => {
        dispatch(SetsearchText(suggestion));
        const res = await fetch(YOUTUBE_MAIN_API + suggestion + "&key=" + process.env.REACT_APP_YOUTUBE_API_KEY);
        const data = await res.json();
        dispatch(setSearchResultVidoes(data.items))
    }

    useEffect(() => {
        if (search[searchText]) {
            SetsearchSuggetions(search[searchText]);
        } else {
            let timer = setTimeout(() => { getSuggestions() }, 200);
            return () => {
                clearTimeout(timer);
            }
        }
    }, [searchText]);

    return (
        <div className='grid grid-flow-col grid-cols-12 px-6 min-[1000px]:px-6 pr-4 sm:pr-6 lg:pr-6  py-3 shadow-xl shadow-slate-200'>
            <div className='flex min-[1100px]:justify-center items-center col-span-2 sm:col-span-3 lg:col-span-2  my-auto'>
                <img
                    onClick={() => toggleMenuHandler()}
                    className="h-8 mr-5 cursor-pointer"
                    alt="menu"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
                />
                <Link to="/" onClick={() => { SetsearchText("") }}>
                    <img
                        className="h-[26px] hidden sm:block"
                        alt="youtube-logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
                    />
                </Link>
            </div>
            <div className='col-span-12 sm:col-span-10 flex sm:justify-center my-auto '>
                <div className='s-input w-9/12 sm:w-6/12'>
                    <input type='text' className='px-5 border border-gray-400 rounded-l-full h-full w-full'
                        onFocus={(e) => { SetshowAutoSuggetions(true); if (e.target.value === "") { SetshowAutoSuggetions(false) } }}
                        onChange={(e) => {
                            dispatch(SetsearchText(e.target.value));
                            if (e.target.value !== "") { SetshowAutoSuggetions(true) } else { SetshowAutoSuggetions(false); }
                        }} value={searchText} placeholder='Search'
                    />

                </div>
                {
                    searchSuggetions && showAutoSuggetions && (
                        <div className='absolute top-[70px] sm:top-16  left-0 sm:left-auto sm:mr-12 py-3 w-screen sm:w-screen md:w-[630px] bg-white z-40 text-black border border-gray-100 shadow-lg rounded-xl sm:rounded-sm'>
                            <ul>
                                {searchSuggetions.map((suggestion, i) => {
                                    return <li key={i} onClick={(e) => { console.log(suggestion); e.preventDefault(); handleSearchQuery(suggestion); SetshowAutoSuggetions(false); }} className='py-2 shadow-sm hover:bg-gray-100 text-lg ' >
                                        <IoIosSearch className='inline-block mx-4 text-xl' /><Link to={`results?v=${suggestion}`} > {suggestion}</Link> </li>
                                })}
                            </ul>
                        </div>)
                }

                <button className="bg-gray-200 rounded-r-full px-4 pr-5 py-3 " onClick={searchText !== "" ? (e) => { e.preventDefault(); handleSearchQuery(); SetshowAutoSuggetions(false) } : console.log("empty")} >
                    <Link to={searchText === "" ? "/" : `results?v=${searchText}`} >
                        <BsSearch />
                    </Link>
                </button>
            </div>
            <div className='col-span-1 ml-auto p-0 mt-1'>
                <img
                    className="h-10 my-auto cursor-pointer"
                    alt="user"
                    src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
                />
            </div>
        </div >
    )
}

export default Head