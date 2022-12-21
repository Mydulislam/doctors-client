import React from 'react';

const Service = ({ service }) => {
    const {title, description,icon} = service;
    return (
        <div className="card bg-base-100 shadow-xl px-5">
            <figure><img src={icon} alt="healthIcon" /></figure>
            <div className="card-body block ">
                <h2 className="card-title text-center block">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Service;