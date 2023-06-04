import React from 'react';
import icon1 from '../../../assets/icons/clock.svg'
import icon2 from '../../../assets/icons/marker.svg'
import icon3 from '../../../assets/icons/phone.svg'
import InfoCards from './InfoCards';



const BannerCard = () => {
    const bannerCards = [
        {
            id: 1,
            title:"Opening Hours",
            details:'Lorem Ipsum is simply',
            icon:icon1,
            bgClass: "bg-gradient-to-r from-primary to-secondary"

        },
        {
            id: 2,
            title:"Visit our location",
            details:'Brooklyn, NY 10036, United States',
            icon:icon2,
            bgClass:"bg-neutral"
        },
        {
            id: 3,
            title:"Contact us now",
            details:'+000 123 456789',
            icon:icon3,
            bgClass: "bg-gradient-to-r from-primary to-secondary"
        }
    ]
    return (
        <div className='grid gap-6 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 mt-8'>
            {
                bannerCards.map(bannerCard=><InfoCards
                key={bannerCard.id}
                bannerCard={bannerCard}
                ></InfoCards>)
            }
        </div>
    );
};

export default BannerCard;