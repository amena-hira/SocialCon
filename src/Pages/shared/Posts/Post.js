import React from 'react';
import post1 from '../../../images/post1.jpg';
import { AiOutlineLike } from "react-icons/ai";
import { FaCommentDots } from "react-icons/fa";

const Post = ({ post }) => {
    const { postMessage, imageUrl, like, comment } = post;

    const addLike = () =>{
        
    }
    return (
        <div className="card glass">
            <figure>
                {/* <img src={post1} alt="" /> */}
                <div className='inline-block p-4 bg-bg_color rounded-2xl'>
                    <img class="rounded-3xl" src={`http://localhost:5000/${imageUrl[0]}`} alt="" />
                    <div class="small-images flex gap-x-2 mt-2" style={{ width: 'min-content', minWidth: '100%' }}>
                        {imageUrl.map(imagePath => <div><img class="rounded-xl" src={`http://localhost:5000/${imagePath}`} alt="" /></div>)}
                    </div>

                </div>
            </figure>
            <div className="card-body">
                <p className='pb-4'>{postMessage.slice(0, 100)}.....</p>
                <div className="card-actions items-center justify-between ">

                    <div className="tooltip tooltip-open tooltip-right" data-tip={like > 0 ? like : 0}>
                        <button ><AiOutlineLike className='text-sky-500 w-6 h-6'></AiOutlineLike></button>
                    </div>

                    <div className="form-control">
                        <label className="input-group ">
                            <input type="text" placeholder="Comment Here" className="input input-bordered w-full" />
                            <span className=''><FaCommentDots className='text-sky-500'></FaCommentDots> </span>
                        </label>
                    </div>
                </div>
                {comment > 0 &&
                    <div className="card-actions">
                        <div className="w-full border p-2 rounded border-sky-600">
                            It's over Anakin, I have the high ground.
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default Post;