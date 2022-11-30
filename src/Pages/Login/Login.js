import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from "react-icons/fc";
import login from '../../assets/login.png';

const Login = () => {
      const { register, formState: { errors }, handleSubmit } = useForm();
      const [loginError, setLoginError] = useState('');

      const handleLogin = data => {
            console.log(data);

      }
      return (
            <div className='my-10'>
                  <h2 className='text-3xl text-center underline underline-offset-8 font-bold'>Login</h2>
                  <div className='max-w-screen-xl mx-auto bg-neutral text-neutral-content rounded-2xl p-10 mt-10 flex flex-col gap-5 lg:flex-row'>
                        <img src={login} alt="" />
                        <div className='border p-5 rounded-xl w-2/4'>
                              <form onSubmit={handleSubmit(handleLogin)}>
                                    <div className="form-control w-full ">
                                          <label className="label"><span className="label-text text-white">Email</span></label>
                                          <input
                                                {...register("email", { required: 'Email Address is Required' })}
                                                type='email' className="input input-bordered w-full text-black" />
                                          {errors.email && <p className='text-error'>{errors.email?.message}</p>}
                                    </div>
                                    <div className="form-control w-full">
                                          <label className="label"><span className="label-text text-white">Password</span></label>
                                          <input
                                                {...register("password", {
                                                      required: 'Password is Required',
                                                      minLength: { value: 8, message: 'Password must be 8 characters or longer' }
                                                })}
                                                type='password' className="input input-bordered w-full text-black" />
                                          {errors.password && <p className='text-error'>{errors.password?.message}</p>}
                                          <label className="label"><span className="label-text text-white">Forget Password?</span></label>
                                    </div>
                                    <div>
                                          {loginError && <p className='text-error'>{loginError}</p>}
                                    </div>
                                    <input className='btn btn-accent w-full' value="Login" type="submit" />
                              </form>
                              <div className='divider my-10'>OR</div>
                              <button className='btn bg-white text-black w-full'><FcGoogle />  oogle</button>
                        </div>

                  </div>

            </div>
      );
};

export default Login;