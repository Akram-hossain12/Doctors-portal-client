import React from 'react';
import bannerImg from '../../../assets/images/chair.png';
import background from '../../../assets/images/bg.png'
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';


const Banner = () => {
    return (
        <div className='lg:max-w-[1390px] lg:min-h-[551px] flex items-center' style={{ backgroundImage: `url(${background})` }} >
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={bannerImg} alt='/' className="w-1/2 rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here.</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;