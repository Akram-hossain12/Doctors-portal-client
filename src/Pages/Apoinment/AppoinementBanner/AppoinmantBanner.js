
import bannerImg from '../../../assets/images/chair.png'
import background from '../../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';

import { format } from 'date-fns';



const AppoinmantBanner = ({selectedDate,setSelectedDate}) => {


    return (
        <header>
            <div className='lg:max-w-[1390px] lg:min-h-[551px] flex items-center' style={{ backgroundImage: `url(${background})` }} >
                <div className="hero ">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={bannerImg} alt='/' className="w-1/2 rounded-lg shadow-2xl" />
                        <div className='mr-6'>
                            <DayPicker
                                mode='single'
                                selected={selectedDate}
                                onSelect= {setSelectedDate}  
                              
                            ></DayPicker>

                       <p>you select date {format(selectedDate,'PP')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppoinmantBanner;