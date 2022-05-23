import React from 'react';



const Business = () => {
    return (
        <div>  
               <h1 className='text-3xl text-center font-bold mt-8 text-indigo-900'>Millions Business Trust Us </h1>


            <div class="stats shadow mb-10 mt-10 mx-10  ">

                <div class="stat gap-5">
                    <div class="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div class="stat-title font-extrabold text-blue-700	text-2xl"> Annual revenue</div>
                    <div class="stat-value text-indigo-900	"> 120M+</div>

                </div>


                <div class="stat">
                    <div class="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                    </div>
                    <div class="stat-title font-extrabold text-2xl text-blue-700	"> customers</div>
                    <div class="stat-value text-indigo-900	">100+</div>

                </div>
                <div class="stat">
                    <div class="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div class="stat-title  font-extrabold text-2xl text-blue-700"> Reviews</div>
                    <div class="stat-value  text-indigo-900	">33K</div>

                </div>


            </div>
        </div>
    );
};

export default Business;