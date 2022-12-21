import React from 'react';
import treatment from '../../assets/images/treatment.png'
const DentalCare = () => {
    return (
        <div className="card lg:card-side bg-base-100 mt-32 items-center">
            <figure className='lg:w-1/2'><img className='w-1/2 lg:w-3/4 rounded h-' src={treatment} alt="Movie" /></figure>
            <div className="md:w-1/2 lg:w-1/2 card-body">
                <h2 className="card-title text-5xl font-bold mb-6">Exceptional Dental Care, on Your Terms</h2>
                <p className='grow-0'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button className="w-1/3 text-white btn btn-primary">Get Started</button>
            </div>
        </div>
    );
};

export default DentalCare;