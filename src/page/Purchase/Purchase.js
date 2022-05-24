import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { PartsCardId } = useParams()
    const [service,setService] = useState({})


    useEffect(() =>{
        const url=`http://localhost:5000/service/${PartsCardId}`

        fetch(url)
        .then(res =>res.json())
        .then(data => setService(data))
    },[])
    


    return (
        <div>
            <h1 className='text-3xl font-bold text-indigo-900 mt-5 mb-5'>purchase:{PartsCardId}</h1>
            <div className="hero-content flex-col lg:flex-row">
                <figure><img className="max-w-sm w-50 rounded-lg shadow-2xl" alt="Album" /></figure>

                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">name</span>
                        </label>
                        <input type="text" placeholder="name" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">email:{}</span>
                        </label>
                        <input type="text" placeholder="email" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text">Product name</span>
                        </label>
                        <input type="text" placeholder="Product name" className="input input-bordered w-full max-w-xs" />

                        <label className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input type="text" placeholder="Number" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input type="text" placeholder="Address" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text">Products quantity</span>
                        </label>
                        <input type="text" placeholder="quantity" className="input input-bordered w-full max-w-xs" />



                    </div>
                    <div className="form-control mt-6 w-full max-w-xs">
                        <button className="btn btn-primary">place order</button>
                    </div>
                </div>




            </div>
        </div>
    );
};

export default Purchase;