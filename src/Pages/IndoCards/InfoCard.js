import React from 'react';

const InfoCard = ({card}) => {
    const {title,description,icon,bgClass} = card;
    return (
        <div className={`card lg:card-side  shadow-xl ${bgClass} text-white p-6 lg:p-6`}>
            <figure><img src={icon} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;