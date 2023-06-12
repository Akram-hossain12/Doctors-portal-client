import React from 'react';

const ServicesCard = ({ service }) => {
    const { title, details,icon } = service;
    return (
        <div>
            <div className=" bg-base-100  card w-[440px] h-[310px] shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={icon} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                <p>{ details}</p>
                
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;