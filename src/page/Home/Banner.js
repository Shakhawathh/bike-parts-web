import React from 'react';
import banner from '../../Image/moto.jpg'

const Banner = () => {
    return (
        <div>
            <div class="carousel w-full mb-12">
                <div id="item1" class="carousel-item w-full">
                    <img class="w-full" src={banner} alt="bike" />
                    
                </div>
                
            </div>
            
        </div>
    );
};

export default Banner;