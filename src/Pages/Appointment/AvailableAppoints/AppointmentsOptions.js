import React from 'react';

const AppointmentsOptions = ({ option,setTreatment}) => {
    const { name, slots, price } = option
    return (
        <div className="card shadow-xl">
            <div className="card-body text-center mt-10">
                <h2 className="card-title block text-secondary font-bold">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try another day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces':'space'} Available</p>
                <p><small>Price: ${price}</small></p>
                <div className="card-actions justify-center">
                    <label disabled={slots.length === 0} onClick={()=>setTreatment(option)} htmlFor="booking-modal" className="btn btn-primary text-white">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentsOptions;