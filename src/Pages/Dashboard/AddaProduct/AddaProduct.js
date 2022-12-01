import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../contexts/AuthProvider';

const AddaProduct = () => {
      const { user } = useContext(AuthContext);
      console.log(user)
      const { register, handleSubmit, formState: { errors } } = useForm();
      const time = new Date();
      const imgHostingKey = process.env.REACT_APP_imgbb_key;
      const [categories, setCategories] = useState([])
      useEffect(() => {
            axios.get('http://localhost:5000/category')
                  .then(res => setCategories(res.data));
      }, [])

      const handleAddProduct = () => {

      }

      return (
            <div className='p-10'>
                  <h2 className='text-3xl text-center underline underline-offset-8 font-bold'>Add a Product</h2>
                  <div>
                        <form onSubmit={handleSubmit(handleAddProduct)}>
                              <div className="form-control w-full max-w-xs">
                                    <label className="label"><span className="label-text">Product Name</span></label>
                                    <input type='text' {...register("name", {
                                          required: 'Product Name is required'
                                    })} className="input input-bordered w-full" />
                                    {errors.name && <p className='text-error'>{errors.name.message}</p>}
                              </div>
                              <div className="form-control w-full max-w-xs">
                                    <label className="label"><span className="label-text">Category</span></label>
                                    <select className="select select-bordered w-full max-w-xs" {...register("specialty", {
                                          required: true
                                    })}>

                                          {
                                                categories.map(category => <option
                                                      key={category._id}
                                                      value={category.title}
                                                >{category.title}</option>)
                                          }

                                    </select>
                              </div>
                              <div className="form-control w-full max-w-xs">
                                    <label className="label"><span className="label-text">Product Photo</span></label>
                                    <input type='file' {...register("img", {
                                          required: 'Product photo is required'
                                    })} className="input input-bordered w-full" />
                                    {errors.img && <p className='text-error'>{errors.img.message}</p>}
                              </div>

                              <div className="form-control w-full max-w-xs">
                                    <label className="label"><span className="label-text">Location</span></label>
                                    <input type='text' {...register("location", {
                                          required: 'Location is required'
                                    })} className="input input-bordered w-full" />
                                    {errors.location && <p className='text-error'>{errors.location.message}</p>}
                              </div>
                              <div className="form-control w-full max-w-xs">
                                    <label className="label"><span className="label-text">Resale Price</span></label>
                                    <input type='text' {...register("resale", {
                                          required: 'Resale price is required'
                                    })} className="input input-bordered w-full" />
                                    {errors.resale && <p className='text-error'>{errors.resale.message}</p>}
                              </div>
                              <div className="form-control w-full max-w-xs">
                                    <label className="label"><span className="label-text">Original Price</span></label>
                                    <input type='text' {...register("original", {
                                          required: 'Original price is required'
                                    })} className="input input-bordered w-full" />
                                    {errors.original && <p className='text-error'>{errors.original.message}</p>}
                              </div>
                              <div className="form-control w-full max-w-xs">
                                    <label className="label"><span className="label-text">Used For</span></label>
                                    <input type='text' {...register("usedfor", {
                                          required: 'Used info required'
                                    })} className="input input-bordered w-full" />
                                    {errors.usedfor && <p className='text-error'>{errors.usedfor.message}</p>}
                              </div>
                              <div className="form-control w-full max-w-xs">
                                    <label className="label"><span className="label-text">Seller Name</span></label>
                                    <input defaultValue={user?.displayName} disabled type='text' {...register("seller", {
                                          required: 'Used info required'
                                    })} className="input input-bordered w-full" />
                                    {errors.seller && <p className='text-error'>{errors.seller.message}</p>}
                              </div>
                              <div className="form-control w-full max-w-xs">
                                    <label className="label"><span className="label-text">Seller Email</span></label>
                                    <input defaultValue={user?.email} disabled type='text' {...register("email", {
                                          required: true
                                    })} className="input input-bordered w-full" />
                                    {errors.email && <p className='text-error'>{errors.email.message}</p>}
                              </div>
                              <div className="form-control w-full max-w-xs">
                                    <label className="label"><span className="label-text">Time</span></label>
                                    <input defaultValue={time} disabled type='text' {...register("time", {
                                          required: 'Time is required'
                                    })} className="input input-bordered w-full" />
                                    {errors.time && <p className='text-error'>{errors.time.message}</p>}
                              </div>

                              <input className='btn btn-accent w-full mt-3' value="Add Product" type="submit" />
                        </form>
                  </div>
            </div>
      );
};

export default AddaProduct;