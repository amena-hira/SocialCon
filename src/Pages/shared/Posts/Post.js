import React, { useState } from 'react';
import { AiOutlineLike } from "react-icons/ai";
import { FaCommentDots } from "react-icons/fa";

const Post = ({ post }) => {
    const { _id, postMessage, imageUrl, like, comment } = post;
    const [commentText, setCommentText] = useState('');
    const addLike = () => {
        fetch(`http://localhost:5000/posts/${_id}`, {
            method: 'PATCH',
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            window.location.reload();
        })
    }
    const addComment = () =>{
        console.log(commentText)
        fetch(`http://localhost:5000/posts/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({comment: commentText})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            window.location.reload();
        })
    }
    return (
        <div className="card glass">
            <figure>
                {/* <img src={post1} alt="" /> */}
                <div className='inline-block p-4 bg-bg_color rounded-2xl'>
                    <img className="rounded-3xl" src={`http://localhost:5000/${imageUrl[0]}`} alt="" />
                    <div className="small-images flex gap-x-2 mt-2" style={{ width: 'min-content', minWidth: '100%' }}>
                        {imageUrl.map((imagePath, index) => <div key={index}><img className="rounded-xl" src={`http://localhost:5000/${imagePath}`} alt="" /></div>)}
                    </div>

                </div>
            </figure>
            <div className="card-body">
                <p className='pb-4'>{postMessage.slice(0, 100)}.....</p>
                <div className="card-actions items-center justify-between ">

                    <div className="tooltip tooltip-open tooltip-right" data-tip={like > 0 ? like : 0}>
                        <button onClick={addLike} ><AiOutlineLike className='text-sky-500 w-6 h-6'></AiOutlineLike></button>
                    </div>

                    <div className="form-control">
                        <label className="input-group ">
                            <input onChange={(e)=>setCommentText(e.target.value)} type="text" name='comment' placeholder="Comment Here" className="input input-bordered w-full" />
                            <span className='' onClick={addComment}><FaCommentDots className='text-sky-500'></FaCommentDots> </span>
                        </label>
                    </div>
                </div>
                {comment &&
                    <div className="">
                        <div className="w-full border p-2 rounded border-sky-600">
                            {comment}
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default Post;