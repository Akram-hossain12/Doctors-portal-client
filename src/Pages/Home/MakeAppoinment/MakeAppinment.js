import React from 'react';
import appoinment from '../../../assets/images/appointment.png'
import doctor from '../../../assets/images/doctor-small.png'
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const MakeAppinment = () => {
    return (
        <div className='mt-40'  style={{ backgroundImage: `url(${appoinment})` }}>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} alt='' className="lg:w-1/2 hidden  lg:block -mt-24 rounded-lg " />
                    <div className=''>
                        <h2 className='text-xl font-bold text-secondary'>Appointment</h2>
                        <h1 className="text-5xl font-bold text-white my-5">Make an appointment Today.</h1>
                        <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                       <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAppinment;