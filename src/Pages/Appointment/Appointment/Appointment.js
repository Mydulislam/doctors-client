import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppoints from '../AvailableAppoints/AvailableAppoints';

const Appointment = () => {
    const [selectedDate, setSelectDate] = useState(new Date())
    return (
        <div>
            <AppointmentBanner
                selectedDate={selectedDate}
                setSelectDate={setSelectDate}
            >
            </AppointmentBanner>


            <AvailableAppoints
                selectedDate={selectedDate}
            >
            </AvailableAppoints>
        </div>
    );
};

export default Appointment;