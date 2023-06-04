import React from 'react';
import Banner from '../Banner/Banner';

import Services from '../Services/Services';
import BannerCard from '../Banner/BannerCard';
import MakeAppinment from '../MakeAppoinment/MakeAppinment';
import Tastimonial from '../Tastimonial/Tastimonial';
import ContactUs from '../ContactUs/ContactUs';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <BannerCard></BannerCard>
            <Services></Services>
            <MakeAppinment></MakeAppinment>
            <Tastimonial></Tastimonial>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;