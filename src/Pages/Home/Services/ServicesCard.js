import React from 'react';

const ServicesCard = ({ service }) => {
    const { title, details,icon } = service;
    return (
        <div>
            <div class=" bg-base-100  card w-[440px] h-[310px] shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={icon} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{title}</h2>
                <p>{ details}</p>
                
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;