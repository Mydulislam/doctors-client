import React from 'react';
import quote from '../../assets/icons/quote.svg'
import profile from '../../assets/images/people1.png'
import Review from './Review';
const Testimonials = () => {
    const reviews = [
        {
            id : 1,
            name : 'Winson Herry',
            reviewText : 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            address : 'California',
            img : profile
        },
        {
            id : 2,
            name : 'Winson Herry',
            reviewText : 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            address : 'California',
            img : profile
        },
        {
            id : 3,
            name : 'Winson Herry',
            reviewText : 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            address : 'California',
            img : profile
        },
    ]
    return (
        <section className='mt-32'>
            <div className='flex justify-between'>
                <div>
                    <h3 className='font-bold text-primary'>Testimonial</h3>
                    <h1 className='text-4xl'>What Our Patients Says</h1>
                </div>
                <figure>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </figure>
            </div>
            <div className='my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    reviews.map(review=> <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;