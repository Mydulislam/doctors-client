import React from 'react';
import fluride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whinting from '../../assets/images/whitening.png'
import Service from './Service';
const Services = () => {
    const serviceInfo = [
        {
            id: 1,
            title: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: fluride
        },
        {
            id: 2,
            title: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: cavity
        },
        {
            id: 3,
            title: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: whinting
        },
    ]
    return (
        <div className='text-center mt-32'>
            <h4 className='my-2 text-primary font-bold uppercase text-xl'>Our services</h4>
            <h1 className='text-4xl'>Services We Provide</h1>
            <div className='mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    serviceInfo.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>

        </div>
    );
};

export default Services;