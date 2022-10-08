import React from 'react';
import photo from '../../Image/businessmen.png'

const PartsInformation = () => {
    return (
        <div className='mt-10 bg-slate-300 shadow-2xl'>
            <div className="hero min-h-screen  rounded  ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={photo} />
                    <div className='text-black'>
                        <h1 className="text-5xl font-bold">Thank you for your purchase from Moto Parts</h1>
                        
                        <p className="py-6">Please let us know if we can do anything else to help!.</p>
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartsInformation;