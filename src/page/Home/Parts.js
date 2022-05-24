import React, { useEffect, useState } from 'react';
import Purchase from '../Purchase/Purchase';
import PartsCard from './PartsCard';


const Parts = () => {

    const [services, setServices] = useState([])
    


    useEffect( ()=>{
    fetch('Fake.json')
    .then(res => res.json())
    .then(data => setServices(data))
    },[])
    return (
        <div>
            <h1 className='text-3xl font-bold text-indigo-900 mb-12 text-center '>Motocycle Parts</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 '>
                {
                    services.map(service=><PartsCard
                    key={service._id}
                    service={service}
                    
                    ></PartsCard>)
                }
            </div>
            
        </div>
    );

};

export default Parts;