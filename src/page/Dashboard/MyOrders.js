import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {

    const [oders, setOrders] = useState([])
    const [user] = useAuthState(auth)


    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?email=${user.email}`)
                .then(res => res.json())
                .then(data => setOrders(data))
        }
    }, [user])


    return (
        <div>
            <h2>My Orders: {oders.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                   
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>product-Quantity</th>
                            <th>Payment</th>
                            <th>delete</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           oders.map((o,index) =><tr>
                            <th>{index +1}</th>
                            <td>{o.name}</td>
                            <td>{o.quantity}</td>
                            <td>{}</td>
                        </tr>)
                       }
                        
                      
                      
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;