import React from 'react';

const InfoCards = ({ bannerCard }) => {
  
    const { title, icon,bgClass, details } = bannerCard;
    return (
        <div>
            <div  className={`card card-side h-[190px] items-center w-[460px] ${bgClass}`}>
                <figure className="px-10 ">
                    <img src={icon} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body text-white">
                    <h2 className="card-title">{title}</h2>
                    <p>{details}</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCards;