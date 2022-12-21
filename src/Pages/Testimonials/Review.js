import React from 'react';

const Review = ({ review }) => {
    const { name, reviewText, address, img } = review
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{reviewText}</p>
                <div className="card-actions items-center my-4">
                    <div className="rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img className='w-20 lg:w-16' src={img} alt='' />
                    </div>

                    <div>
                        <div className="badge block badge-outline my-1">{name}</div>
                        <div className="badge block badge-outline">{address}</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Review