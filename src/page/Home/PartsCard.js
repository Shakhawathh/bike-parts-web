import React from 'react';
import { Link, useNavigate,  } from 'react-router-dom';

const PartsCard = ({ service}) => {
  const {_id, p_name, img, description, min, available_quantity, price } = service
  const navigate = useNavigate()

  const navigateToPurchase = id =>{
    navigate(`/PartsCard/${id}`)
  }
  
  return (
    <div className="card  w-96 shadow-2xl text-black  mx-auto">
      <figure><img className='w-60' src={img} alt="" /></figure>
      <div className="text-justify mx-4 mt-1 px-2">
        <h2 className="card-title"><span className='text-xl font-semibold text-right '>Name:</span>{p_name}</h2>
        <p><span className='text-xl font-semibold text-right whitespace-normal pt-2 '>Description:</span> {description}</p>
        <p><span className='text-xl font-semibold text-right '>Minium order:</span> {min}</p>
        <p><span className='text-xl font-semibold text-right '>Available:</span> {available_quantity}</p>
        <p><span className='text-xl font-semibold text-right '>Per unit price</span>: ${price}</p>
        <div className=" mt-2 mr-2 justify-center ">
          <button
          onClick={() => navigateToPurchase(_id)}
          className="btn bg-[#001858] text-white"><Link to='/Purchase'>Buy Now</Link></button>
        </div>
      </div>
    </div>
  );
};

export default PartsCard;