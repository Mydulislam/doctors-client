import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
    const { name:treatmentName, slots, price } = treatment;
    const date = format(selectedDate, "PP");
    // modal e input field e email anar jonno
    const { user } = useContext(AuthContext)
    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const selectedSlot = form.selectedSlot.value;
        const email = form.email.value;
        const phone = form.phone.value;
        console.log(name, selectedSlot, email, phone, date);
        const booking = {
            appointDate: date,
            treatment: treatmentName,
            patient: name,
            selectedSlot,
            email,
            phone,
            price
        }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setTreatment(null);
                    toast.success('Booking confirmed');
                    refetch()
                }
                else{
                    toast.error(data.message)
                }
            })

    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{treatmentName}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-6 mt-6'>
                        <input type="text" value={date} className="input input-bordered w-full" disabled />
                        <select name='selectedSlot' className="select select-bordered w-full">
                            {
                                slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' defaultValue={user?.displayName} disabled type="text" placeholder="Your name" className="input input-bordered w-full" />
                        <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Email address" className="input input-bordered w-full" />
                        <input name='phone' type="number" placeholder="Phone number" className="input input-bordered w-full" />
                        <input className='btn input-bordered btn-accent w-full' type="submit" value='Submit' />

                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;