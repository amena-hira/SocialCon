import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import upload from '../../images/upload.svg';

const AddPost = () => {
    const { user } = useContext(AuthContext);
    const [messageValue, setMessageValue] = useState(false);
    const [imagesValue, setImagesValue] = useState(false);
    const [imageLength, setImageLength] = useState('');
    const handleAddPost = (event) =>{
        event.preventDefault();
        const form = event.target;
        const postMessage = form.postMessage.value;
        const images = form.images.files;
        console.log(postMessage, images, 12);
        form.reset();
        setMessageValue('');
        setImagesValue('');
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
                                    <textarea className="textarea textarea-info" name='postMessage' placeholder="Post Message" onChange={()=>{setMessageValue(true)}}></textarea>
                                </div>
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text">Images</span>
                                    </label>
                                    <label>
                                        <input multiple type="file" name='images' className='hidden' onChange={(e)=>{setImagesValue(true);setImageLength(e.target.files)}}/>
                                        <img src={upload} className='h-6 w-6' alt="" />
                                        {imageLength.length>0 && <label>{imageLength.length} Images</label>}
                                        {imageLength.length === 0 && <span className='text-xs text-sky-900'>**Once select multiple</span>}
                                    </label>
                                    {
                                        messageValue && imagesValue && user?.uid?
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