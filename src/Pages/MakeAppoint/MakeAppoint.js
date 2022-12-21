import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointmentBg from '../../assets/images/appointment.png'
const MakeAppoint = () => {
    return (
        <section className='mt-32'
        style={
            {background: `url(${appointmentBg})`}
        }
        >
            <div className="hero text-white">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} className="-mt-32 hidden md:block lg:w-1/2 h-full rounded-lg" alt=''/>
                    <div>
                        <h3 className="text-primary font-bold text-xl">Appointment</h3>
                        <h1 className="font-bold text-4xl">Make an appointment Today</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppoint;