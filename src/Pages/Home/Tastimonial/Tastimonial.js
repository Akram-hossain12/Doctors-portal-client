import React from 'react';
import comma from '../../../assets/icons/quote.svg';
import patiant1 from '../../../assets/images/people1.png';
import patiant2 from '../../../assets/images/people2.png';
import patiant3 from '../../../assets/images/people3.png';
import PationtCard from './PationtCard';


const Tastimonial = () => {

    const PatientInfo=[
        {
            id: 1,
            title:"Winson Herry",
            address:"California",
            details:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img:patiant1,
            bgClass: "bg-gradient-to-r from-primary to-secondary"

        },
        {
            id: 2,
            title:"Herry Winson",
            address:"California",
            details:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: patiant2,
            bgClass:"bg-neutral"
        },
        {
            id: 3,
            title:"Her Winsonry",
            address:"California",
            details:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: patiant3,
            bgClass: "bg-gradient-to-r from-primary to-secondary"
        }
    ]

    return (
        <div className='mt-24'>
            <div className='flex justify-between '>
                <div> 
                    <h1 className='text-secondary font-bold'>Testimonial</h1> 
                    <h2 className='text-3xl '>What Our Patients Says</h2>
                </div>
                <div>
                    <img className='w-48' src={comma} alt="" />
                </div>
            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6'>
                 {
                    PatientInfo.map(Patient=><PationtCard
                    key={Patient.id}
                    patient={Patient}
                    ></PationtCard>)
                 }
            </div>
        </div>
    );
};

export default Tastimonial;