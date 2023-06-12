import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';




const Login = () => {
   
    const { register,formState: { errors }, handleSubmit,reset } = useForm();
    const hendalLogin = data =>{
            console.log(data)
            reset()
    }
    
   
    return (
        <div className=' h-[600px] flex items-center justify-center'>
            <div className='w-96 p-2'>
                <h1 className='text-2xl text-center'>Login</h1>
                <form onSubmit={handleSubmit(hendalLogin)}>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-bold">Email</span>
                        </label>
                        <input {...register("email",{required:true})} type="email" placeholder="Type here" className="input input-bordered w-full" />
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Password</span>
                        </label>
                        <input {...register("password",{required:'password must be 8 carecter'})} type="password" placeholder="Type here" className="input input-bordered w-full " />
                        {errors.password && <p className='text-red-500 mx-1'>{errors.password?.message}</p>}
                        <label className="label">
                            <span className="label-text">Forgate Password?</span>
                        </label>
                    </div>

                    <input className='btn  w-full mt-2' value='Login' type="submit" />
                </form>

                <span className="label-text">New to Doctors Portal? <Link to='/sginup'
                    className='text-sky-400'>create an account!</Link></span>

                <div className="divider">OR</div>

                <input className='btn btn-outline w-full mt-2' value='CONTINUE WITH GOOGLE' type="submit" />

            </div>


        </div>
    );
};

export default Login;