import React, { useEffect, useState } from 'react';
import ReviewRow from './ReviewRow';

const Review = () => {


    const [services, setServices] = useState([])



    useEffect(() => {
        const url = `https://young-beyond-90942.herokuapp.com/review`
        fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <h1 className='text-3xl text-center font-bold mt-8 text-indigo-900 mt-10 mb-5'>Review</h1>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 '>
                {
                    services.map(service => <ReviewRow

                        key={service._id}
                        service={service}
                    ></ReviewRow>)
                }
            </div>
        </div>
    );
};

export default Review;