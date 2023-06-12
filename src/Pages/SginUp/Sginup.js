import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const Sginup = () => {
    
    const { register,formState: { errors }, handleSubmit,reset } = useForm();
   const {createUser}=useContext(AuthContext)
    const hendalSginUp = data =>{
        createUser(data.email,data.password)
        .then(result=>{
            const user = result.user;
            console.log(user)
            toast.success('Sgin up successfully,Thanks to sginUp')
           
        })
        .catch(err=>console.error(err))
        console.log(data)
        reset()
     
    }

    return (
        <div className=' h-[600px] flex items-center justify-center'>
            <div className='w-96 p-2'>
                <h1 className='text-2xl text-center'>SginUp</h1>
                <form onSubmit={handleSubmit(hendalSginUp)}>

                <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-bold">Name</span>
                        </label>
                        <input {...register("name")} type="name" placeholder="Type here" className="input input-bordered w-full" />
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-bold">Email</span>
                        </label>
                        <input {...register("email",{ required: 'Please ,enter email!' })} type="email" placeholder="Type here" className="input input-bordered w-full" />
                        {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Password</span>
                        </label>
                        <input {...register("password",{ required:'pasword must 8 or long', minLength: 8 })} type="password" placeholder="Type here" className="input input-bordered w-full " />
                        {errors.password && <p className='text-red-500 mx-1'>{errors.password?.message}</p>}
                        <label className="label">
                            <span className="label-text">Forgate Password?</span>
                        </label>
                    </div>

                    <input className='btn  w-full mt-2' value='SginUp' type="submit" />
                </form>

                <span className="label-text">Alreday have an Account? <Link to='/login'
                    className='text-sky-400'>Please Login.</Link></span>

                <div className="divider">OR</div>

                <input className='btn btn-outline w-full mt-2' value='CONTINUE WITH GOOGLE' type="submit" />

            </div>


        </div>
    );
};

export default Sginup;