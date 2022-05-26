import React, { useEffect, useState } from 'react';
import PartsCard from './PartsCard';


const Parts = () => {

    const [services, setServices] = useState([])
    


    useEffect( ()=>{
    fetch('https://young-beyond-90942.herokuapp.com/service')
    .then(res => res.json())
    .then(data => setServices(data.slice(0, 6)))
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