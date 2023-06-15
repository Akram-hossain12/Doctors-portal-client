import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';




const Login = () => {
   
    const { register, handleSubmit,reset } = useForm();
    const {LoginUser}=useContext(AuthContext);
    const [loginError,setLoginError]=useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const hendalLogin = data =>{
              setLoginError('')
             LoginUser(data.email,data.password)
             .then(res=>{
                const user =res.user;
                toast("Login Successfully")
                console.log(user)
                navigate(from, {replace: true});
                reset()
             })
             .catch(err=>{
                setLoginError(err.message)
                console.error(err)
            })
            
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
                        {loginError && <p className='text-red-500 mx-1'>{loginError}</p>}
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