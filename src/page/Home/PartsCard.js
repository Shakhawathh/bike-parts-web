import React from 'react';
import { Link,  } from 'react-router-dom';

const PartsCard = ({ service}) => {
  const {_id, name, img, description, min, available_quantity, price } = service

  
  return (
    <div className="card  w-96 bg-[#96e2e2] shadow-xl ">
      <figure><img className='w-60' src={img} alt="" /></figure>
      <div className="text-justify mx-4 mt-1">
        <h2 className="card-title"><span className='text-xl font-semibold text-right '>Name:</span>{name}</h2>
        <p><span className='text-xl font-semibold text-right '>Description:</span> {description}</p>
        <p><span className='text-xl font-semibold text-right '>Minium order:</span> {min}</p>
        <p><span className='text-xl font-semibold text-right '>Available:</span> {available_quantity}</p>
        <p><span className='text-xl font-semibold text-right '>Per unit price</span>: ${price}</p>
        <div className=" mt-2 mr-2 justify-center ">
          <button
        
          className="btn bg-[#001858] text-white"><Link to='/Purchase'>Buy Now</Link></button>
        </div>
      </div>
    </div>
  );
};

export default PartsCard;