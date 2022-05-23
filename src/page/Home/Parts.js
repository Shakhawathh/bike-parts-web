import React from 'react';
import PartsCard from './PartsCard';
import helmat from '../../Image/parts/helmet.png'
import brake from '../../Image/parts/brake.png'
import tire from '../../Image/parts/tire.png'

const Parts = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold text-indigo-900 mb-12 text-center '>Motocycle Parts</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 '>
                <PartsCard img={helmat}></PartsCard>
                <PartsCard img={brake}></PartsCard>
                <PartsCard img={tire}></PartsCard>
            </div>
        </div>
    );

};

export default Parts;