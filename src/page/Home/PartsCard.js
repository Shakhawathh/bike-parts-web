import React from 'react';

const PartsCard = ({ service }) => {
  const { name, img, description, min, available_quantity, price } = service
  return (
    <div className="card  w-96 bg-[#96e2e2] shadow-xl ">
      <figure><img className='w-60' src={img} alt="" /></figure>
      <div className="text-justify mx-4 mt-4">
        <h2 className="card-title">Name: {name}</h2>
        <p><span className='text-xl font-semibold text-right '>Description:</span> {description}</p>
        <p><span className='text-xl font-semibold text-right '>Minium order:</span> {min}</p>
        <p><span className='text-xl font-semibold text-right '>Available:</span> {available_quantity}</p>
        <p><span className='text-xl font-semibold text-right '>Per unit price</span>: ${price}</p>
        <div className=" mt-6 justify-center w-auto">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default PartsCard;