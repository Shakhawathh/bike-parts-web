import React from 'react';
import photo from '../../Image/businessmen.png'

const PartsInformation = () => {
    return (
        <div className='mt-10'>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={photo} />
                    <div>
                        <h1 class="text-5xl font-bold">Thank you for your purchase from Moto Parts</h1>
                        <p class="py-6">Please let us know if we can do anything else to help!.</p>
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartsInformation;