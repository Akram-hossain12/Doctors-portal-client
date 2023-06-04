import React from 'react';
import icon1 from '../../../assets/images/cavity.png';
import icon2 from '../../../assets/images/fluoride.png';
import icon3 from '../../../assets/images/whitening.png'
import ServicesCard from './ServicesCard';
import ServicesBanner from './ServicesBanner';



const Services = () => {
    const ServicesInfo=[
        {
            id: 1,
            title:" Cavity Filling",
            details:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon:icon1,
            bgClass: "bg-gradient-to-r from-primary to-secondary"

        },
        {
            id: 2,
            title:"Fluoride Treatment",
            details:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon:icon2,
            bgClass:"bg-neutral"
        },
        {
            id: 3,
            title:"Teeth Whitening",
            details:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon:icon3,
            bgClass: "bg-gradient-to-r from-primary to-secondary"
        }
    ]
    return (
        <div className='mt-24'>
            <h1 className='text-xl text-center font-bold text-secondary'>OUR SERVICES</h1>
            <h2 className='text-3xl text-center mt-2 mb-16'> Services We Provide</h2>
           <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-6'>
           {
                ServicesInfo.map(service=><ServicesCard
                key={service.id}
                service={service}
                ></ServicesCard>)
            }
           </div>
           <ServicesBanner></ServicesBanner>
        </div>
    );
};

export default Services;