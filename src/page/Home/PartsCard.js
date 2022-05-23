import React from 'react';

const PartsCard = ({img}) => {
    return (
        <div className="card  w-96 bg-[#96e2e2] shadow-xl ">
        <figure><img className='w-60' src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default PartsCard;