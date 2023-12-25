
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const useSingleVideo = () => {
    const [singleVideo, SetsingleVideo] = useState(null);

    const [searchparams] = useSearchParams();

    const fecthData = async () => {
        try {
            const res = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${searchparams.get("v")}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
            const data = await res.json();
            SetsingleVideo(data?.items?.[0]);
        } catch (error) {
            console.log(error);
            SetsingleVideo(error);
        }
    }

    useEffect(() => {
        fecthData();
    }, []);

    return singleVideo
}

export default useSingleVideo;