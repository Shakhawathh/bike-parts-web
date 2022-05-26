import React from 'react';
import { toast } from 'react-toastify';

const UseAdmin = ({user,refetch}) => {
    const {email ,role} = user
    const makeAdmin = () =>{
        fetch(`http://localhost:5000/user/admin/${email}`,
        {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }
        )
        .then(res => res.json())
        .then(data =>{
            refetch()
            toast.success(`Successfully create an admin`)
        })
    }
    return (
        <tr>
        <th>1</th>
        <td>{email}</td>
        <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs bg-[#001858]">Make admin</button>}</td>
        <td><button class="btn btn-xs bg-[#001858]">Remove User</button></td>
    </tr>
    );
};

export default UseAdmin;