import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useNavigation } from 'react-day-picker';
import { useLoaderData } from 'react-router-dom';
import Loading from '../../../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise);
const Payment = () => {
    const bookingData = useLoaderData();
    const navigation = useNavigation()
    const { treatment, appointDate, selectedSlot, price } = bookingData;
    console.log(bookingData)

    if(navigation.state === "loading"){
        return <Loading></Loading>
    }
    
    return (
        <div>
            <h1 className='text-3xl'>Payment for {treatment}</h1>
            <p>Please pay <strong>${price}</strong> for your appointment on {appointDate} at {selectedSlot}</p>
            <div className='w-96 py-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm 
                    bookingData={bookingData}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;