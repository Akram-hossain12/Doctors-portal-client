import React from 'react';
import bg from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const ContactUs = () => {
    return (
        <div className='mt-40 mb-10'>
            <div  style={{ backgroundImage: `url(${bg})` }} className="hero pt-10">
                <div className="hero-content flex-col">
                    <div className="text-center ">
                        <h1 className=" text-center text-sky-500 font-bold">Contact Us</h1>
                        <p className="pt-3 text-white text-3xl">Stay connected with us.</p>
                    </div>
                    <div className="card w-full  ">
                        <div className="card-body">
                            <div className="form-control ">
                              
                                <input type="text" placeholder="email" className="input input-bordered lg:w-96" />
                            </div>
                            <div className="form-control">
                              
                                <input type="text" placeholder="subject" className="input input-bordered" />
                            
                            </div>
                            <textarea placeholder="massege" className="textarea textarea-bordered textarea-lg" ></textarea>
                            <div className="form-control mt-6 text-center">
                               <PrimaryButton>submit</PrimaryButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;