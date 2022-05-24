import React from 'react';

const Reply = () => {
    return (
        <div>
            <div className="hero min-h-screen  mt-10 ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 bg-[#FFD803]">
                        <div className="card-body">
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" className="input input-bordered" />
                               
                            </div>
                            <div>
                            <label className="label">
                                    <span className="label-text">Comments</span>
                                </label>
                            <input type="text" placeholder="comments" className="input input-bordered input-lg w-full max-w-xs" />
                            </div>
                            <div>
                            <label className="label">
                                    <span className="label-text">Website</span>
                                </label>
                            <input type="text" placeholder="Website" className="input input-bordered input-md w-full max-w-xs" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#001858] text-white">Post Comment</button>
                            </div>
                        </div>
                    </div>
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Leave a Reply</h1>
                        <p className="py-6">Your email address will not be published. Required fields are marked *.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reply;