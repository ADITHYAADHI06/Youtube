import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

const ResultPage = () => {
    const mainVideos = useSelector((store) => store.video.main_videos)
    // console.log(mainVideos);

    let VideoIDArray = mainVideos.filter((video) => {
        return video.id.kind === "youtube#video";
    }).map((v) => { return v.id.videoId; })
    let text = VideoIDArray.join("%2C")
    // console.log(text);

    const data = async () => {
        console.log("called");
        const res = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${text}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`);
        const data = await res.json();
        console.log(data);

    }

    useEffect(() => {
        data();
    }, [])

    if (mainVideos === null) {
        return null;
    }
    return (
        <div>
            <div>
                {/* <div>
                    <img alt='img-search' src={ } />
                </div>
                <div>

                </div> */}
            </div>
        </div>
    )
}

export default ResultPage