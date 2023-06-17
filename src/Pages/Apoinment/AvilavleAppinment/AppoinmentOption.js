import React from 'react';


const AppoinmentOption = ({option,setTreatment }) => {
 
    const { name, slots } = option;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body text-center">
                    <h2 className=" text-2xl font-bold text-cyan-400 text-center">{name}</h2>
                    <p>{slots.length > 0 ? slots[0] : 'Try Another day'}</p>
                    <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                    <div className="card-actions justify-center">
                       <label disabled={slots.length === 0}  onClick={() => setTreatment(option)} htmlFor="my_modal_6" className="btn">Book Appointment</label>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppoinmentOption;