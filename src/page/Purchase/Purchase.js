import React from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const {PartsCardId} = useParams()

   
    return (
        <div>
            <h1 className='text-3xl font-bold text-indigo-900 mt-5 mb-5'>purchase</h1>
            <div class="hero-content flex-col lg:flex-row">
                <figure><img  class="max-w-sm w-50 rounded-lg shadow-2xl" alt="Album" /></figure>

                <div class="card-body">
                    <div class="form-control">

                        

                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" class="input input-bordered w-full max-w-xs" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" class="input input-bordered w-full max-w-xs" />
                        <label class="label">
                            <span class="label-text">Product name</span>
                        </label>
                        <input type="text" placeholder="Product name" class="input input-bordered w-full max-w-xs" />
                        
                        <label class="label">
                            <span class="label-text">Phone Number</span>
                        </label>
                        <input type="text" placeholder="Number" class="input input-bordered w-full max-w-xs" />
                        <label class="label">
                            <span class="label-text">Address</span>
                        </label>
                        <input type="text" placeholder="Address" class="input input-bordered w-full max-w-xs" />
                        <label class="label">
                            <span class="label-text">Products quantity</span>
                        </label>
                        <input type="text" placeholder="quantity" class="input input-bordered w-full max-w-xs" />

                        
                        
                    </div>
                    <div class="form-control mt-6 w-full max-w-xs">
                        <button class="btn btn-primary">place order</button>
                    </div>
                </div>




            </div>
        </div>
    );
};

export default Purchase;