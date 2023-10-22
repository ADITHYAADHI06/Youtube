import React from 'react'

const commentData = [
    {
        name: "akshay saini",
        comment: "orem lorem lorem  fheej he loemrem lorem",
        reply: [
            {
                name: "shetty",
                comment: "hoi banni",
                reply: [
                    {
                        name: "adithya",
                        comment: "heyy hello",
                        reply: [{
                            name: "shetty",
                            comment: "hoi banni",
                            reply: [
                                {
                                    name: "adithya",
                                    comment: "heyy hello",
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
                reply: [
                    {
                        name: "adithya",
                        comment: "heyy hello",
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
        reply: [
            {
                name: "shetty",
                comment: "hoi banni",
                reply: [
                    {
                        name: "adithya",
                        comment: "heyy hello",
                        reply: [

                        ]

                    }
                ]

            },
            {
                name: "shetty",
                comment: "hoi banni",
                reply: [
                    {
                        name: "adithya",
                        comment: "heyy hello",
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
        reply: []
    },
    {
        name: "akshay saini",
        comment: "orem lorem lorem  fheej he loemrem lorem",
        reply: []
    },
    {
        name: "akshay saini",
        comment: "orem lorem lorem  fheej he loemrem lorem",
        reply: []
    },

]



const CommentsContainer = () => {

    const CommentCard = ({ comment }) => {
        return (
            <div>
                <div className='flex gap-4 bg-gray-300 my-2 rounded-lg'>
                    <div className=''><img alt='user' className='w-10 h-10' src={`https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png`} /></div>
                    <div>
                        <p className='font-semibold'>{comment.name}</p>
                        <p>{comment.comment}</p>
                    </div>
                </div>
                <div className='pl-4'>
                    <CommentList comments={comment?.reply} />
                    {/* {(comment?.reply !== "[]") && comment.reply.map((comment) => { return <CommentCard comment={comment} /> })} */}
                </div>
            </div>
        )
    }

    const CommentList = ({ comments }) => {
        return (
            <>
                {
                    comments.map((comment) => {
                        return <CommentCard comment={comment} />
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