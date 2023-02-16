import React from 'react';
import { FiEdit } from "react-icons/fi";

const About = () => {
    return (
        <div className='my-8'>
            <div className='flex justify-end'>
                <label htmlFor='edit-modal' className='btn btn-outline mr-4 border-sky-500 text-sky-500'><FiEdit className='text-sky-500'></FiEdit> Edit</label>
                <input type="checkbox" id="edit-modal" className="modal-toggle" />
                <div className="modal sm:modal-middle">
                    <div className="modal-box relative">
                        <label htmlFor="edit-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <form action="">
                            <div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="name" className="input input-bordered input-info" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" className="input input-bordered input-info" />
                                </div>
                            </div>
                            <div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">University</span>
                                    </label>
                                    <input type="text" placeholder="university" className="input input-bordered input-info" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Address</span>
                                    </label>
                                    <textarea className="textarea textarea-info" placeholder="Address"></textarea>
                                </div>
                            </div>
                            <input type="submit" className='btn btn-outline border-info
                             mt-4 text-sky-500' />

                        </form>
                    </div>
                </div>
            </div>
            <div className="hero">
                <div className="hero-content ">
                    <div className="card  shadow-2xl ">
                        <form action="">
                            <div className="card-body md:flex-row flex-wrap">
                                <div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" placeholder="name" className="input input-bordered input-info" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="text" placeholder="email" className="input input-bordered input-info" />
                                    </div>
                                </div>
                                <div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">University</span>
                                        </label>
                                        <input type="text" placeholder="university" className="input input-bordered input-info" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Address</span>
                                        </label>
                                        <textarea className="textarea textarea-info" placeholder="Address"></textarea>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;