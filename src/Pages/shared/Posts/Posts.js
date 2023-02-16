import React from 'react';
import Post from './Post';

const Posts = () => {
    return (
        <div className='p-4 lg:p-16'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                <Post></Post>
                <Post></Post>
                <Post></Post>
            </div>
        </div>
    );
};

export default Posts;