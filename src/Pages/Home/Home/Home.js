import React from 'react';
import Contact from '../../Contact/Contact';
import DentalCare from '../../DentalCare/DentalCare';
import InfoCards from '../../IndoCards/InfoCards';
import MakeAppoint from '../../MakeAppoint/MakeAppoint';
import Services from '../../Services/Services';
import Testimonials from '../../Testimonials/Testimonials';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <DentalCare></DentalCare>
            <MakeAppoint></MakeAppoint>
            <Testimonials></Testimonials>
            <Contact></Contact>
        </div>
        
    );
};

export default Home;