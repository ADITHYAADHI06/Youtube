import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { YOUTUBE_SINGLEChannelBYID_API, YOUTUBE_SINGLEPlayListBYID_API, YOUTUBE_SINGLEVIDEOBYID_API } from '../utils/constants';
import { setResultVideos } from '../store/videoSlice';
import SearchResultContainer from './SearchResultContainer';
import ButtonListContainer from './ButtonListContainer';

const ResultPage = () => {
    const dispatch = useDispatch();
    const searchResultVidoes = useSelector((store) => store.video.searchResultVidoes)
    // console.log(searchResultVidoes);

    if (searchResultVidoes.length === 0) {
        // console.log("called");
        return null;
    }

    const fetchResultCompleteDetails = async (id) => {
        const res = await fetch(YOUTUBE_SINGLEVIDEOBYID_API + id + "&key=" + process.env.REACT_APP_YOUTUBE_API_KEY);
        const data = res.json();
        return data;
    }
    const fetchResultPlayListCompleteDetails = async (id) => {
        const res = await fetch(YOUTUBE_SINGLEPlayListBYID_API + id + "&key=" + process.env.REACT_APP_YOUTUBE_API_KEY);
        const data = res.json();
        return data;
    }
    const fetchResultChannelCompleteDetails = async (id) => {
        const res = await fetch(YOUTUBE_SINGLEChannelBYID_API + id + "&key=" + process.env.REACT_APP_YOUTUBE_API_KEY);
        const data = res.json();
        return data;
    }

    const resultMainData = async () => {
        let VideoIDArray = searchResultVidoes.map((item) => {
            if (item.id.kind === "youtube#video") {
                return fetchResultCompleteDetails(item.id.videoId);
            }
            if (item.id.kind === "youtube#playlist") {
                return fetchResultPlayListCompleteDetails(item.id.playlistId);
            }
            if (item.id.kind === "youtube#channel") {
                return fetchResultChannelCompleteDetails(item.id.channelId);
            }
        })
        let videosDetails = await Promise.all(VideoIDArray);
        dispatch(setResultVideos(videosDetails))
    }

    resultMainData();

    return (
        <div className='w-screen flex justify-center'>
            <SearchResultContainer />
        </div>
    )
}

export default ResultPage