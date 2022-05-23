import React from 'react';

const Reply = () => {
    return (
        <div>
            <div class="hero min-h-screen  mt-10 ">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 bg-[#FFD803]">
                        <div class="card-body">
                            <div class="form-control ">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" class="input input-bordered" />
                               
                            </div>
                            <div>
                            <label class="label">
                                    <span class="label-text">Comments</span>
                                </label>
                            <input type="text" placeholder="comments" class="input input-bordered input-lg w-full max-w-xs" />
                            </div>
                            <div>
                            <label class="label">
                                    <span class="label-text">Website</span>
                                </label>
                            <input type="text" placeholder="Website" class="input input-bordered input-md w-full max-w-xs" />
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn bg-[#001858] text-white">Post Comment</button>
                            </div>
                        </div>
                    </div>
                    <div class="text-center lg:text-left">
                        <h1 class="text-5xl font-bold">Leave a Reply</h1>
                        <p class="py-6">Your email address will not be published. Required fields are marked *.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reply;