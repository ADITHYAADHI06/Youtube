import { useEffect, useState } from "react";

const useLiveChatStatus = (liveStatus) => {
    const [liveChat, setLiveChat] = useState(false);

    useEffect(() => {
        setLiveChat(liveStatus === "live" ? true : false);
    }, [liveStatus]);

    return [liveChat, setLiveChat];
}

export default useLiveChatStatus;