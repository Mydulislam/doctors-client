import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import Loading from '../../../Shared/Loading/Loading';

const MyAppoint = () => {
    // je email diye login kora ace tar appointment list dekhabe table akare
    const {user} = useContext(AuthContext)
    const url = `https://doctor-server-gilt.vercel.app/bookings?email=${user?.email}`;

    const {data:bookings=[], isLoading} = useQuery({
        queryKey:['bookings', user?.email],
        queryFn:()=> fetch(url,{
            headers:{
                authorization: `bearer ${localStorage.getItem('access-token')}`
            }
        })
        .then(res => res.json())
        .then(data =>{
            return data
        })
    })
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h3 className="text-3xl mb-5">My Appointments</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings?.map((booking,index)=><tr key={booking._id}>
                                <th>{index+1}</th>
                                <td>{booking.patient}</td>
                                <td>{booking.treatment}</td>
                                <td>{booking.appointDate}</td>
                                <td>{booking.selectedSlot}</td>
                                <td>
                                    {
                                        booking.price && !booking.paid && 
                                        <Link to={`/dashboard/payment/${booking._id}`}><button className='btn btn-primary btn-sm'>Pay</button> </Link>
                                    }
                                    {
                                        booking.price && booking.paid && 
                                        <span className='text-primary'>Paid</span> 
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppoint;