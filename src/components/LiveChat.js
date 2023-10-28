import React, { useEffect, useState } from 'react'
import Live_Comment from './Live_Comment'
import { useDispatch, useSelector } from 'react-redux';
import { addmsg } from '../store/chatSlice';
import { generateRandomMsg, generateRandomName } from '../utils/helper';

const LiveChat = () => {
    const dispatch = useDispatch();
    let liveMsgs = useSelector((state) => state.live.liveMsgs)

    useEffect(() => {
        let timer = setInterval(() => {
            // Api Polling Req
            dispatch(addmsg({ name: generateRandomName(), msg: generateRandomMsg(10) }))
        }, 2000)
        return () => clearInterval(timer);
    }, []);


    if (!liveMsgs.length) {
        return null;
    }
    return (
        <>
            <div className=' p-3 pl-4'>
                {
                    liveMsgs.map((c) => <Live_Comment name={c.name} msg={c.msg} />)
                }
            </div>

        </>

    )
}

export default LiveChat