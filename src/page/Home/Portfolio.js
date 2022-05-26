import React from 'react';

const Portfolio = () => {
    return (
        <div color='bg-[#BAE8E8]'>
            <div>
                <div class='w-screen h-screen  bg-[#BAE8E8] flex'>
                    <div class="w-4/12 bg-[#BAE8E8] h-full">Information</div>
                    <div class="w-8/12 bg-yellow-500 p-2 space-y-2 overflow-y-scroll">
                        <div class="bg-blue-100 w-full h-24 border">Email:Shakhawathh@55gmail.com</div>
                        <div class="bg-blue-100 w-full h-24 border">Name: Shakhawath Hossain Shatu</div>
                        <div class="bg-blue-100 w-full h-24 border">Education: HSC complete in
                            Chinair Bangabhandhu Sheikh Mujib Honours College</div>
                        <div class="bg-blue-100 w-full h-24 border"> Iam working : HTML,CSS,React Js,Javascript,MongoDB,NodeJS,API,Tailwind</div>
                        <div class="bg-blue-100 w-full h-24 border">My demo Website <span className='font-bold '>Click HERE :</span>  (

                            <a className='font-bold' href="https://hungry-banach-74e7b1.netlify.app/">Website 1</a>,
                            <a className='font-bold' href="https://darling-druid-1bca11.netlify.app/">Website 2</a>,
                            <a className='font-bold' href="https://photographer-gallery-8b487.web.app/">Website 3</a>)

                           
                        </div>
                        <div class="bg-blue-100 w-full h-24 border">Address: Brahmanbaria ,
                            Chittagong</div>
                        <div class="bg-blue-100 w-full h-24 border">Phone: 01749126864</div>
                        <div class="bg-blue-100 w-full h-24 border"></div>
                        <div class="bg-blue-100 w-full h-24 border"></div>
                        <div class="bg-blue-100 w-full h-24 border"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;