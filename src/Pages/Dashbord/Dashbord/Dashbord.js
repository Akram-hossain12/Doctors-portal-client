import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Dashbord = () => {
    const{user}= useContext(AuthContext)
    return (
        <div>
            <h1 className='text-xl text-red-400'>coming soon.......</h1>
        </div>
    );
};

export default Dashbord;