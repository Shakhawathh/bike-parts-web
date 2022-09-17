import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import PartsCard from './PartsCard';


const Parts = () => {



    const { data: services, isLoading, refetch } = useQuery('services', () => fetch('https://young-beyond-90942.herokuapp.com/service', 
             ).then(res => res.json()))
             if (isLoading) {
    return <Loading></Loading>}
                      

    return (
        <div>
            <h1 className='text-3xl font-bold text-indigo-900 mb-12 text-center '>Motocycle Parts</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 '>
                {
                    services.slice(0, 6).reverse().map(service=><PartsCard
                    key={service._id}
                    service={service}
                    
                    ></PartsCard>)
                }
            </div>
            
        </div>
    );

};

export default Parts;