import React, { useEffect, useState } from 'react';
import Post from './Post';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/posts')
        .then(res=> res.json())
        .then(data =>{
            console.log(data);
            setPosts(data);
        })
    },[])
    return (
        <div className='p-4 lg:p-16'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {
                    posts.map(post =><Post
                        key={post._id}
                        post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;