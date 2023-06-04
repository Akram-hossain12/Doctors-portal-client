
import { useState } from 'react';
import AppoinmantBanner from '../AppoinementBanner/AppoinmantBanner';
import AvailableAppoinment from '../AvilavleAppinment/AvailableAppoinment';

const Apoinment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div>
      <AppoinmantBanner
      selectedDate={selectedDate}
      setSelectedDate={setSelectedDate}
      ></AppoinmantBanner>
      <AvailableAppoinment
       selectedDate={selectedDate}
       setSelectedDate={setSelectedDate}
      ></AvailableAppoinment>
    </div>
  );
};

export default Apoinment;