import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import upload from '../../images/upload.svg';

const AddPost = () => {
    const { user } = useContext(AuthContext);
    const [messageValue, setMessageValue] = useState(false);
    const [imagesValue, setImagesValue] = useState(false);
    const [imageLength, setImageLength] = useState('');
    const navigate = useNavigate();
    const imageHostKey = '208a9a18630bc4383a20e988785eacb9';

    const handleAddPost = (event) => {
        event.preventDefault();
        const form = event.target;
        const postMessage = form.postMessage.value;
        // const images = form.images.files; // For multiple images
        const image = form.images.files[0];
        const formImgData = new FormData();
        formImgData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formImgData
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.data.url)
                const posts = {
                    postMessage,
                    imageUrl: data.data.url,
                    like: 0,
                    comment: []
                }
                fetch('https://social-media-server-amena-hira.vercel.app/posts', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(posts)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        form.reset();
                        setMessageValue('');
                        setImagesValue('');
                        navigate('/media')

                    })

            })

        // For Multiple Images
        // let formData = new FormData();
        // formData.append('postMessage', postMessage)
        // Array.from(images).forEach(item => {
        //     formData.append('image', item)
        // })

    }
    return (
        <div className=''>
            <div className="hero py-20">
                <div className="hero-content flex-col lg:flex-row-reverse gap-20">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Insert your mind!</h1>
                        <p className="py-6">Stories you read when you're the right age never quite leave you. You may forget who wrote them or what the story was called. Sometimes you'll forget precisely what happened, but if a story touches you it will stay with you, haunting the places in your mind that you rarely ever visit.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm lg:max-w-xl shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleAddPost} className='flex justify-between'>
                                <div className="form-control">
                                    <textarea className="textarea textarea-info" name='postMessage' placeholder="Post Message" onChange={() => { setMessageValue(true) }}></textarea>
                                </div>
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text">Images</span>
                                    </label>
                                    <label>
                                        <input multiple type="file" name='images' className='hidden' onChange={(e) => { setImagesValue(true); setImageLength(e.target.files) }} />
                                        <img src={upload} className='h-6 w-6' alt="" />
                                        {imageLength.length > 0 && <label>{imageLength.length} Image</label>}
                                        {/* Multiple Images */}
                                        {/* {imageLength.length === 0 && <span className='text-xs text-sky-900'>**Once select multiple</span>} */}
                                    </label>
                                    {
                                        messageValue && imagesValue && user?.uid ?
                                            <input type='submit' className="mt-3 btn mt-6 bg-sky-500 border-none hover:bg-sky-900 text-white max-w-xl lg:hidden" value="Submit" />
                                            :
                                            <button type="button" className="mt-3 px-8 py-3 text-white bg-sky-300 rounded focus:outline-none max-w-xl lg:hidden" disabled>Submit</button>
                                    }
                                </div>
                                {
                                    messageValue && imagesValue && user?.uid ?
                                        <div className="mt-6">
                                            <button className='btn bg-sky-500 border-none hover:bg-sky-900 text-white max-w-xl hidden lg:block'>Submit</button>
                                        </div>
                                        :
                                        <div className="mt-6">
                                            <button type="button" className="px-8 py-3 text-white bg-sky-300 rounded focus:outline-none max-w-xl hidden lg:block" disabled>Submit</button>
                                        </div>
                                }
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddPost;