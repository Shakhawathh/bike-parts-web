import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';


const Purchase = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data)
        fetch('http://localhost:5000/booking',{
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
            console.log(result)
            if(result.success){
                toast("order confirmed")
            }
            else{
                toast("order confirmed")
            }
        })
    }



    const { PartsCardId } = useParams()

    const [service, setService] = useState({})
    const [user, loading, error] = useAuthState(auth)



    useEffect(() => {
        const url = `http://localhost:5000/service/${PartsCardId}`

        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])


   


    return (
        <div className='flex flex-wrap'>
            <div class="card w-96 bg-base-100 shadow-xl row-01">
                <figure class="px-10 pt-10">
                    <img src={service.img} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-left">
                    <p>Name: {service.p_name}</p>
                    <p> Description:{service.description}</p>
                    <p>Per unit Price: ${service.price}</p>
                    <p> Available quantity :{service.available_quantity}</p>
                    <p></p>
                </div>
            </div>
            <div>
            <form className='flex flex-col w-72 mx-10 mt-10' onSubmit={handleSubmit(onSubmit)}>
                <input className='bg-slate-100 text-black'   value={user?.displayName || ''} {...register("name")} />
                <br/>
                <span>Email</span>
                <input className='bg-slate-100 text-dark'  value={user?.email || ''} {...register("email")} />
                <br/>
                <span>phone</span>
                <input className='bg-slate-100 text-dark'  type="number" {...register("phone")} />
                <br/>
                <span>address</span>
                <input className='bg-slate-100 text-dark' type="text" {...register("address")} />
                <br/>
                <span>quantity</span>
                <input className='bg-slate-100 text-dark' placeholder="quantity" type="number"  {...register("quantity" , { min:60 , max: 3000 })} />
                <br/>
                <span>price</span>
                <input className='bg-slate-100 text-dark'  value={service.price}  type="number" {...register("price")} />
                <br/>
                <input className='bg-indigo-700 text-white' type="submit"  value="order"/>
            </form>

            </div>

        </div>
    );
};

export default Purchase;


