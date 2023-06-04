import React from 'react';

const PationtCard = ({ patient }) => {
    const { title, address, details, img } = patient;

    return (
    
            <div className="card p-7 shadow-xl">
                <div className="card-body">
                    <p>{details}</p>
                </div>
                <div className='flex justify-start items-center ml-10'>
                    <img src={img} className= ' border-4 rounded-full border-sky-500' alt="Shoes" />
                    <div className='ml-5'>
                        <h1>{title}</h1>
                        <p>{address}</p>
                    </div>
                </div>

            </div>
     
    );
};

export default PationtCard;