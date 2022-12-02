import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const AddaProduct = () => {
      const { user } = useContext(AuthContext);
      const { register, handleSubmit, formState: { errors } } = useForm();
      const time = new Date();

      const [categories, setCategories] = useState([])
      useEffect(() => {
            axios.get('http://localhost:5000/category')
                  .then(res => setCategories(res.data));
      }, [])

      const handleAddProduct = data => {


            const product = {
                  product: data.name,
                  img: data.photo,
                  category: data.category,
                  categoryId: data.categoryId,
                  location: data.location,
                  price: data.resale,
                  originalprice: data.original,
                  condition: data.condition,
                  yearofuse: data.used,
                  yearofpurchase: data.purchase,
                  seller: data.seller,
                  email: data.email,
                  phone: data.phone,
                  time: data.time



            }

            fetch('http://localhost:5000/products', {
                  method: 'POST',
                  headers: {
                        'content-type': 'application/json',
                  },
                  body: JSON.stringify(product)
            })
                  .then(res => res.json())
                  .then(result => {
                        console.log(result)
                        toast.success('Product added successfully');

                  })

      }

      return (
            <div className='p-10'>
                  <h2 className='text-3xl text-center underline underline-offset-8 font-bold'>Add a Product</h2>
                  <div className='mt-3 p-10 bg-neutral   rounded-2xl'>
                        <form onSubmit={handleSubmit(handleAddProduct)}>
                              <div className="form-control w-full">
                                    <label className="label "><span className="label-text text-white">Product Name</span></label>
                                    <input type='text' {...register("name", {
                                          required: 'Product name is required'
                                    })} className="input input-bordered w-full" />
                                    {errors.name && <p className='text-error'>{errors.name.message}</p>}
                              </div>
                              <div className="form-control w-full">
                                    <label className="label "><span className="label-text text-white">Product Image URL</span></label>
                                    <input type='text' {...register("photo", {
                                          required: 'Product Photo URL is required'
                                    })} className="input input-bordered w-full" />
                                    {errors.photo && <p className='text-error'>{errors.photo.message}</p>}
                              </div>
                              <div className="form-control w-full">
                                    <label className="label"><span className="label-text text-white">Product Category</span></label>
                                    <select className="select select-bordered w-full" {...register("category", {
                                          required: 'Category URL is required'
                                    })}>

                                          {
                                                categories.map(category => <option key={category._id} title={category._id}>{category.title}</option>)
                                          }
                                    </select>
                              </div>
                              <div className="form-control w-full">
                                    <label className="label"><span className="label-text text-white">Please select categoryID(Please hove on the id)</span></label>
                                    <select className="select select-bordered w-full" {...register("categoryId", {
                                          required: 'Category ID is required'
                                    })}>

                                          {
                                                categories.map(category => <option key={category._id} title={category.title}>{category._id}</option>)
                                          }
                                    </select>
                              </div>
                              <div className="form-control w-full">
                                    <label className="label"><span className="label-text text-white">Product Condition</span></label>
                                    <select className="select select-bordered w-full" {...register("condition", {
                                          required: 'Product condition data is required'
                                    })}>

                                          <option value="excellent">Excellent</option>
                                          <option value="good">Good</option>
                                          <option value="fair">Fair</option>
                                    </select>
                              </div>
                              <div className="form-control w-full">
                                    <label className="label "><span className="label-text text-white">Location</span></label>
                                    <input type='text' {...register("location", {
                                          required: 'Location is required'
                                    })} className="input input-bordered w-full" />
                                    {errors.location && <p className='text-error'>{errors.location.message}</p>}
                              </div>
                              <div className="form-control w-full">
                                    <label className="label "><span className="label-text text-white">Resale Price</span></label>
                                    <input type='text' {...register("resale", {
                                          required: 'Resale price is required'
                                    })} className="input input-bordered w-full" />
                                    {errors.resale && <p className='text-error'>{errors.resale.message}</p>}
                              </div>
                              <div className="form-control w-full">
                                    <label className="label "><span className="label-text text-white">Original Price</span></label>
                                    <input type='text' {...register("original", {
                                          required: 'Original price is required'
                                    })} className="input input-bordered w-full" />
                                    {errors.original && <p className='text-error'>{errors.original.message}</p>}
                              </div>
                              <div className="form-control w-full">
                                    <label className="label "><span className="label-text text-white">User For</span></label>
                                    <input type='text' {...register("used", {
                                          required: 'Product used data required'
                                    })} className="input input-bordered w-full" />
                                    {errors.used && <p className='text-error'>{errors.used.message}</p>}
                              </div>
                              <div className="form-control w-full">
                                    <label className="label "><span className="label-text text-white">Year of Purchase</span></label>
                                    <input type='text' {...register("purchase", {
                                          required: 'Product purchased year data required'
                                    })} className="input input-bordered w-full" />
                                    {errors.purchase && <p className='text-error'>{errors.purchase.message}</p>}
                              </div>
                              <div className="form-control w-full">
                                    <label className="label "><span className="label-text text-white">Your Name</span></label>
                                    <input type='text' {...register("seller", {
                                          required: 'Seller name is required'
                                    })} className="input input-bordered w-full" />
                                    {errors.seller && <p className='text-error'>{errors.seller.message}</p>}
                              </div>
                              <div className="form-control w-full">
                                    <label className="label "><span className="label-text text-white">Your Email</span></label>
                                    <input defaultValue={user?.email} type='text' {...register("email", {
                                          required: 'Seller email is required'
                                    })} className="input input-bordered w-full" />
                                    {errors.email && <p className='text-error'>{errors.email.message}</p>}
                              </div>
                              <div className="form-control w-full">
                                    <label className="label "><span className="label-text text-white">Contact Number</span></label>
                                    <input type='text' {...register("phone", {
                                          required: 'Seller phone number is required'
                                    })} className="input input-bordered w-full" />
                                    {errors.phone && <p className='text-error'>{errors.phone.message}</p>}
                              </div>
                              <div className="form-control w-full">
                                    <label className="label "><span className="label-text text-white">Time</span></label>
                                    <input type='text' defaultValue={time} {...register("time", {
                                          required: 'Time is required'
                                    })} className="input input-bordered w-full" />
                                    {errors.time && <p className='text-error'>{errors.time.message}</p>}
                              </div>
                              <input className='btn btn-accent w-full mt-3' value="Add Product" type="submit" />
                        </form>
                  </div >
            </div >
      );
};

export default AddaProduct;

