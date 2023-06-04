import { format } from 'date-fns';
import React from 'react';

const AvailableAppoinment = ({selectedDate,setSelectedDate}) => {
    return (
        <div>
            <h1 className='text-center text-sky-600'>Available Appointments on {format(selectedDate,'PP')}</h1>
            
        </div>
    );
};

export default AvailableAppoinment;