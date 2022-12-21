import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import bgImg from '../../../assets/images/bg.png'
const AppointmentBanner = ({selectedDate, setSelectDate}) => {
    
    return (
        <header className='my-6'
            style={
                {
                    background: `url(${bgImg})`,
                    backgroundSize:'cover',
                    backgroundPosition:'center'
                }
            }
        >
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='chair' />
                    <div className='mr-6'>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectDate}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;