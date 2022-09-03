import React from 'react';

const ReviewRow = ({service}) => {
    const {number,rating } = service
    return (
        <div class="card w-96 bg-base-100 shadow-xl mx-auto">
        <div class="card-body">
            <h2 class="font-bold"> Rating :{service.number}</h2>
            <p>{service.rating}</p>
            
        </div>
    </div>
    );
};

export default ReviewRow;