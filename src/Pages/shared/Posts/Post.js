import React from 'react';
import post1 from '../../../images/post1.jpg';
import { AiOutlineLike } from "react-icons/ai";
import { FaCommentDots } from "react-icons/fa";

const Post = () => {
    return (
        <div className="card glass">
            <figure><img src={post1} alt="" /></figure>
            <div className="card-body">
                <p className='pb-4'>How to park your car at your garage?</p>
                <div className="card-actions items-center justify-between">
                    <button className=""><AiOutlineLike className='text-sky-500 w-6 h-6'></AiOutlineLike></button>
                    <div className="form-control">
                        <label className="input-group ">
                            <input type="text" placeholder="Comment Here" className="input input-bordered" />
                            <span className=''><FaCommentDots className='text-sky-500'></FaCommentDots> </span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;