import React, { useState } from 'react'
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';


const commentData = [
    {
        name: "akshay",
        comment: "orem lorem lorem  fheej he loemrem lorem",
        timespan: "2 weeks ago",
        reply: [
            {
                name: "shetty",
                comment: "hoi banni",
                timespan: "2 weeks ago",
                reply: [
                    {
                        name: "adithya",
                        comment: "heyy hello",
                        timespan: "2 weeks ago",
                        reply: [{
                            name: "shetty",
                            comment: "hoi banni",
                            timespan: "2 weeks ago",
                            reply: [
                                {
                                    name: "adithya",
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
                name: "shetty",
                comment: "hoi banni",
                timespan: "2 weeks ago",
                reply: [
                    {
                        name: "adithya",
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
        name: "akshay saini",
        comment: "orem lorem lorem  fheej he loemrem lorem",
        timespan: "2 weeks ago",
        reply: [
            {
                name: "shetty",
                comment: "hoi banni",
                timespan: "2 weeks ago",
                reply: [
                    {
                        name: "adithya",
                        comment: "heyy hello",
                        timespan: "2 weeks ago",
                        reply: [

                        ]

                    }
                ]

            },
            {
                name: "shetty",
                comment: "hoi banni",
                timespan: "2 weeks ago",
                reply: [
                    {
                        name: "adithya",
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
        name: "ak",
        comment: "orem lorem lorem  fheej he loemrem lorem",
        timespan: "2 weeks ago",
        reply: [
            {
                name: "shetty",
                comment: "hoi banni",
                timespan: "2 weeks ago",
                reply: [
                    {
                        name: "adithya",
                        comment: "heyy hello",
                        timespan: "2 weeks ago",
                        reply: [

                        ]

                    }
                ]

            },
            {
                name: "shetty",
                comment: "hoi banni",
                timespan: "2 weeks ago",
                reply: [
                    {
                        name: "adithya",
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
        name: "Adithya",
        comment: "orem lorem lorem  fheej he loemrem lorem",
        timespan: "2 weeks ago",
        reply: [
            {
                name: "shetty",
                comment: "hoi banni",
                timespan: "2 weeks ago",
                reply: [
                    {
                        name: "adithya",
                        comment: "heyy hello",
                        timespan: "2 weeks ago",
                        reply: [

                        ]

                    }
                ]

            },
            {
                name: "shetty",
                comment: "hoi banni",
                timespan: "2 weeks ago",
                reply: [
                    {
                        name: "adithya",
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
                            <div className='flex'>
                                <p className='font-semibold'>@{comment.name}</p>
                                <p className=''> {comment.timespan}</p>
                            </div>
                            <p>{comment.comment}</p>
                            <div className='flex gap-3 items-center font-semibold'>
                                <span> <AiOutlineLike className='inline-block w-6 h-6 mr-3' /><span className='text-lg'>1K </span></span>  <span className='text-2xl font-normal text-gray-400 inline-block'>|</span> <AiOutlineDislike className='my-auto w-6 h-6 mt-[6px]' />
                            </div>
                            <button onClick={() => { setRepliesName(`${comment.name}`); setshowReplies(!showReplies) }}>replies</button>
                        </div>
                    </div>
                    <div>
                        <BsThreeDotsVertical className="inline-block text-xl" />
                    </div>
                </div>
                {
                    showRepliesName === comment.name && showReplies ? (<div className='pl-14'>
                        <CommentList comments={comment?.reply} />
                        {/* {(comment?.reply !== "[]") && comment.reply.map((comment) => { return <CommentCard comment={comment} /> })} */}
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
            <div className='flex gap-8'>
                <div>{1000} Comments</div>
                <div>Sort by</div>
            </div>
            <div className='my-5'>
                <CommentList comments={commentData} />
            </div>
        </div>
    )
}

export default CommentsContainer