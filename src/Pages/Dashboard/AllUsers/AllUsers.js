import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const AllUsers = () => {
      const [allUsers, setAllUsers] = useState([])
      const url = 'http://localhost:5000/users';

      useEffect(() => {
            axios.get(url)
                  .then(res => {
                        setAllUsers(res.data)
                  })
      }, [])

      if (!allUsers) {
            return null;
      }

      const handleMakeAdmin = id => {
            fetch(`http://localhost:5000/users/admin/${id}`, {
                  method: 'PUT',
                  headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                  }
            })
                  .then(res => res.json())
                  .then(data => {
                        if (data.modifiedCount > 0) {
                              toast.success('Admin added successfully')
                        }
                  })
      }

      return (
            <div className='p-10'>
                  <h2 className='text-3xl text-center underline underline-offset-8 font-bold'>All User</h2>

                  <div className="overflow-x-auto mt-3 p-10 bg-neutral rounded-2xl">
                        <table className="table w-full">
                              <thead>
                                    <tr>
                                          <th></th>
                                          <th>Name</th>
                                          <th>Email</th>
                                          <th>Role</th>
                                          <th></th>
                                          <th></th>
                                    </tr>
                              </thead>
                              <tbody>

                                    {
                                          allUsers.map((user, i) => <tr className="hover">
                                                <th>{i + 1}</th>
                                                <td className='flex items-center'>
                                                      <div className="avatar items-center">
                                                            <div className="w-10 rounded-full">
                                                                  <img src={user?.img} title={user?.name} alt='' />
                                                            </div>
                                                      </div>
                                                      <p className='ml-2'>{user?.name}</p>
                                                </td>
                                                <td>{user?.email}</td>
                                                <td>{user?.role ? user.role : 'Buyer'}</td>
                                                <td>{user?.role !== 'Admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs'>Make Admin</button>}</td>
                                                <td>{user?.role !== 'Admin' && <button className='btn btn-xs btn-error'>Delete</button>}</td>
                                          </tr>)
                                    }

                              </tbody>
                        </table>
                  </div>


            </div>
      );
};

export default AllUsers;