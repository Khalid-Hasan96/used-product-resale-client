import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FcGoogle } from "react-icons/fc";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import signup from '../../assets/signup.png';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const Signup = () => {
      const { register, formState: { errors }, handleSubmit } = useForm();
      const [signupError, setSignupError] = useState('');
      const { providerLogin, createUser, updateUser } = useContext(AuthContext);
      const [userEmail, setUserEmail] = useState('');
      const [token] = useToken(userEmail);
      const navigate = useNavigate();

      const googleProvider = new GoogleAuthProvider();

      if (token) {
            navigate('/')
      }

      const handleGoogleSignUp = () => {
            providerLogin(googleProvider)
                  .then(result => {
                        const user = result.user;
                        toast.success('User created successfully');
                        const userInfo = {
                              displayName: user.displayName,
                              email: user.email,
                              photoURL: user.photoURL,
                        }
                        updateUser(userInfo)
                              .then(() => {
                                    saveUser(user.displayName, user.email, user.photoURL);
                              })

                  })
                  .catch(err => {
                        setSignupError(err.message);
                        toast.error(err.message)
                  })
      }

      const handleSignup = data => {
            setSignupError('');
            createUser(data.email, data.password)
                  .then(result => {
                        const user = result.user;
                        toast.success('User created successfully');
                        const userInfo = {
                              displayName: data.name,
                              photoURL: data.photo,
                              role: data.role
                        }
                        updateUser(userInfo)
                              .then(() => {
                                    saveUser(data.name, data.email, data.photo, data.role);
                              })
                  })
                  .catch(err => {
                        setSignupError(err.message)
                        toast.error(err.message)
                  })
      }

      const saveUser = (name, email, photo, role) => {
            const user = { name, email, photo, role };
            fetch('http://localhost:5000/users', {
                  method: 'POST',
                  headers: {
                        'content-type': 'application/json'
                  },
                  body: JSON.stringify(user)
            })
                  .then(res => res.json())
                  .then(data => {
                        setUserEmail(email)
                  })
      }
      return (
            <div className='my-10'>
                  <h2 className='text-3xl text-center underline underline-offset-8 font-bold'>Signup</h2>
                  <div className='max-w-screen-xl mx-auto bg-neutral text-neutral-content rounded-2xl p-10 mt-3 flex flex-col gap-5 lg:flex-row'>
                        <img src={signup} className='w-full lg:w-1/2' alt="" />
                        <div className='border p-5 rounded-xl w-full lg:w-2/4'>
                              <form onSubmit={handleSubmit(handleSignup)}>
                                    <div className="form-control w-full ">
                                          <label className="label"><span className="label-text text-white">Name</span></label>
                                          <input
                                                {...register("name", { required: 'Name is Required' })}
                                                type='text' className="input input-bordered w-full text-black" />
                                          {errors.name && <p className='text-error'>{errors.name?.message}</p>}
                                    </div>
                                    <div className="form-control w-full ">
                                          <label className="label"><span className="label-text text-white">PhotoURL</span></label>
                                          <input
                                                {...register("photo", { required: 'PhotoURL is Required' })}
                                                type='text' className="input input-bordered w-full text-black" />
                                          {errors.photo && <p className='text-error'>{errors.photo?.message}</p>}
                                    </div>
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

                                    </div>
                                    <div>
                                          {signupError && <p className='text-error'>{signupError}</p>}
                                    </div>

                                    <div>
                                          <label className="label"><span className="label-text text-white">Who are you?</span></label>
                                          <select className="select select-bordered w-full text-black"
                                                {...register("role", {
                                                      required: '=Select your role.',
                                                })}
                                          >
                                                <option selected>Buyer</option>
                                                <option>Seller</option>
                                          </select>
                                    </div>

                                    <input className='btn btn-accent w-full mt-5' value="Signup" type="submit" />
                              </form>
                              <p className='mt-2'>Already have an account? Please <Link to='/login' className='underline hover:text-blue-600'>Login</Link> </p>
                              <div className='divider my-10'>OR</div>
                              <button onClick={handleGoogleSignUp} className='btn bg-white text-black w-full text-xl'><span className='text-3xl'><FcGoogle /></span>&nbsp; Google</button>
                        </div>

                  </div>

            </div>
      );
};

export default Signup;