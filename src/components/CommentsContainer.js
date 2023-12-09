import React, { useState } from 'react'
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';


const commentData = [
    {
        name: "Dhanush S",
        comment: "Good Video, I liked it ❤️",
        timespan: "2 weeks ago",
        reply: [
            {
                name: "Rajesh G",
                comment: "Its good",
                timespan: "2 weeks ago",
                reply: [
                    {
                        name: "Abhijith",
                        comment: "heyy hello",
                        timespan: "2 weeks ago",
                        reply: [{
                            name: "Suman Shetty",
                            comment: "Hi",
                            timespan: "2 weeks ago",
                            reply: [
                                {
                                    name: "eshwar",
                                    comment: "heyy hello",
                                    timespan: "2 weeks ago",
                                    reply: [

                                    ]

                                }
                            ]

                        },]
                    }
                ]

            },
            {
                name: "Faijhu",
                comment: "Namsthe Brooo ....",
                timespan: "2 weeks ago",
                reply: [
                    {
                        name: "Mohan",
                        comment: "Hello",
                        timespan: "2 weeks ago",
                        reply: [

                        ]

                    }
                ]
            }
        ]
    },
    {
        name: "akshay",
        comment: "Thank you for the help!",
        timespan: "2 weeks ago",
        reply: [
            {
                name: "praveen",
                comment: "Hey",
                timespan: "2 weeks ago",
                reply: [
                    {
                        name: "adithya",
                        comment: "Hi Everyone",
                        timespan: "2 weeks ago",
                        reply: [

                        ]

                    }
                ]

            },
            {
                name: "loki",
                comment: "hello Viewers",
                timespan: "2 weeks ago",
                reply: [
                    {
                        name: "adithya",
                        comment: "heyy ",
                        timespan: "2 weeks ago",
                        reply: [

                        ]

                    }
                ]

            }
        ]
    },

    {
        name: "kash gowda",
        comment: "Big Fan of You",
        timespan: "2 weeks ago",
        reply: [
            {
                name: "Rahul",
                comment: "hey",
                timespan: "2 weeks ago",
                reply: [
                    {
                        name: "Arjun",
                        comment: "heyy hello",
                        timespan: "2 weeks ago",
                        reply: [

                        ]

                    }
                ]

            },
            {
                name: "Kitty",
                comment: "hello Everyone",
                timespan: "2 weeks ago",
                reply: [
                    {
                        name: "Raju",
                        comment: "heyy hello",
                        timespan: "2 weeks ago",
                        reply: [

                        ]

                    }
                ]

            }
        ]
    },
    {
        name: "Hithesh raj",
        comment: "Thank you so much I love it",
        timespan: "2 weeks ago",
        reply: [
            {
                name: "shetty",
                comment: "hey",
                timespan: "2 weeks ago",
                reply: [
                    {
                        name: "Dammu",
                        comment: "heyy hello",
                        timespan: "2 weeks ago",
                        reply: [

                        ]

                    }
                ]

            },
            {
                name: "Dinesh",
                comment: "hi",
                timespan: "2 weeks ago",
                reply: [
                    {
                        name: "gopi",
                        comment: "heyy hello",
                        timespan: "2 weeks ago",
                        reply: [

                        ]

                    }
                ]

            }
        ]
    },
]



const CommentsContainer = () => {


    const CommentCard = ({ comment, setRepliesName, showRepliesName }) => {
        const [showReplies, setshowReplies] = useState(false);
        return (
            <div >
                <div className='flex justify-between'>
                    <div className='flex gap-4  my-6 rounded-lg'>
                        <div className=''><img alt='user' className='w-10 h-10' src={`https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png`} /></div>
                        <div>
                            <div className='flex text-sm sm:text-base'>
                                <p className='font-semibold'>@{comment.name} </p>
                                <p className='ml-2'>{comment.timespan}</p>
                            </div>
                            <p className='text-base sm:text-lg'>{comment.comment}</p>
                            <div className='flex gap-3 items-center font-semibold'>
                                <span> <AiOutlineLike className='inline-block h-4 w-4 sm:w-6 sm:h-6 mr-3' /><span className='text-sm sm:text-lg'>1K </span></span>  <span className='text-xs sm:text-2xl font-normal text-gray-400 inline-block'>|</span> <AiOutlineDislike className='my-auto h-4 w-4 sm:w-6 sm:h-6 mt-[6px]' />
                            </div>
                            <button onClick={() => { setRepliesName(`${comment.name}`); setshowReplies(!showReplies) }} className='text-blue-600 text-[13px] sm:text-base'>replies</button>
                        </div>
                    </div>
                    <div>
                        <BsThreeDotsVertical className="inline-block text-xl mt-7" />
                    </div>
                </div>
                {
                    showRepliesName === comment.name && showReplies ? (<div className='pl-3 lg:pl-14'>
                        <CommentList comments={comment?.reply} />
                    </div>) : <> </>
                }

            </div>
        )
    }



    const CommentList = ({ comments }) => {
        const [showRepliesName, setRepliesName] = useState("");

        // const handleReplies = () => {
        //     setRepliesName(!showRepliesName);
        // }
        return (
            <>
                {
                    comments.map((comment) => {
                        return <CommentCard comment={comment} showRepliesName={showRepliesName} setRepliesName={setRepliesName} />
                    })
                }
            </>
        )
    }




    return (
        <div>
            <div className='flex justify-between px-2 sm:px-6 pt-5'>
                <div>{1000} Comments</div>
                <div>Sort by</div>
            </div>
            <div className='mb-5'>
                <CommentList comments={commentData} />
            </div>
        </div>
    )
}

export default CommentsContainer