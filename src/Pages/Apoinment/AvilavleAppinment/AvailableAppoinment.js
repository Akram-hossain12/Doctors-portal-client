import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppoinmentOption from './AppoinmentOption';
import BookingModal from '../BookingModal/BookingModal';

const AvailableAppoinment = ({ selectedDate, setSelectedDate }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5001/appionmentOption')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }, [])
    return (
        <div className='my-16'>
            <h1 className='text-center text-cyan-300 text-xl font-bold'>Available Appointments on {format(selectedDate, 'PP')}</h1>
            <p className='text-center text-stone-400'>Please select a service</p>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 mt-11'>
                {
                    appointmentOptions.map(option => <AppoinmentOption
                        key={option._id}
                        option={option}
                        setTreatment={setTreatment}
                    ></AppoinmentOption>)
                }
            </div>
            {
                treatment &&
                <BookingModal

                    selectedDate={selectedDate}
                    treatment={treatment}
                    setTreatment={setTreatment}
                ></BookingModal>
            }
        </div>
    );
};

export default AvailableAppoinment;