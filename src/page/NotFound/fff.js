// import React from 'react';

// const fff = () => {
//     return (
//         <div>
//             <h1 className='text-3xl font-bold text-indigo-900 mt-5 mb-5'>purchase</h1>
//             <div className="hero-content flex-col lg:flex-row">
//                 <figure><img src={service.img} className="max-w-sm w-50 rounded-lg  bg-[#a1ecec] shadow-2xl" alt="Album" /></figure>
//                 <p>{service.p_name}</p>
//                 <p>{service.description}</p>
//                 <p>{service.price}</p>
//                 <p>{service.available_quantity}</p>
//                 <p></p>

//                 <div className="card-body">
//                     <div className="form-control ">


//                         <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                          
//                             <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
//                             <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
//                             <input type="text" name="product-name" disabled value={service.p_name} className="input input-bordered w-full max-w-xs" />
//                             <input type="text" name="price" disabled value={service.price} className="input input-bordered w-full max-w-xs" />
//                             <input type="text" name="min-quantity" placeholder="min-quantity" value={service.min} className="input input-bordered w-full max-w-xs" />
//                             <input type="text" name="available" value={service.available_quantity} className="input input-bordered w-full max-w-xs" />
//                             <input type="text" name="quantity" placeholder="product-quantity" className="input input-bordered w-full max-w-xs" />
//                             <input type="text" name="phone" placeholder="phone" className="input input-bordered w-full max-w-xs" />
//                             <input type="text" name="address" placeholder="address" className="input input-bordered w-full max-w-xs" />
//                             <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
//                         </form>

//                     </div>

//                 </div>




//             </div>
//         </div>
    
//     );
// };

// export default fff;