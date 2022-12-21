import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, {useState } from 'react';
import Loading from '../../../Shared/Loading/Loading';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentsOptions from './AppointmentsOptions';

const AvailableAppoints = ({ selectedDate }) => {
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP')
    const {data:appointmentOptions=[], refetch, isLoading} = useQuery({
        queryKey:['appointmentOptions', date],
        queryFn:()=> fetch(`https://doctor-server-gilt.vercel.app/appointmentOptions?date=${date}`)
                     .then(res => res.json())
    })
    
    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <section className='mt-16'>
            <h1 className='text-center text-secondary font-bold'>Available Appointments on {format(selectedDate, 'PP')}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-6'>
                {
                    appointmentOptions.map(option => <AppointmentsOptions
                        key={option._id}
                        option={option}
                        setTreatment={setTreatment}
                    ></AppointmentsOptions>
                    )
                }
            </div>

            {   treatment &&
                <BookingModal
                treatment={treatment}
                selectedDate={selectedDate}
                refetch={refetch}
                setTreatment = {setTreatment}
            >
            </BookingModal>
            }
        </section>
    );
};

export default AvailableAppoints;