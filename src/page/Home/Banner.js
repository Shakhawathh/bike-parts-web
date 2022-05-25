import React from 'react';
import banner from '../../Image/bike.jpg'

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full mb-12">
                <div id="item1" className="carousel-item w-full">
                    <img className="w-full" src={banner} alt="bike" />
                    
                </div>
                
            </div>
            
        </div>
    );
};

export default Banner;