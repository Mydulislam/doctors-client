import React from 'react';
import watch from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
import InfoCard from './InfoCard';
const InfoCards = () => {
    const infoCard = [
        {
            "id" : 1,
            "title" : 'Opening Hours',
            "description" : 'Lorem Ipsum is simply dummy text of the pri',
            "icon" : watch,
            "bgClass" : 'bg-gradient-to-l from-secondary to-primary btn-primary'
        },
        {
            "id" : 2,
            "title" : 'Our Location',
            "description" : 'Lorem Ipsum is simply dummy text of the pri',
            "icon" : marker,
            "bgClass" : 'bg-accent'
        },
        {
            "id" : 3,
            "title" : 'Contact Us',
            "description" : 'Lorem Ipsum is simply dummy text of the pri',
            "icon" : phone,
            "bgClass" : 'bg-gradient-to-l from-secondary to-primary btn-primary'
        },
    ]
    return (
        <div className='my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                infoCard.map(card => <InfoCard 
                    key = {card.id}
                    card = {card}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;