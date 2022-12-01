import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllSeller = () => {

      const { data: allSellers = [], refetch } = useQuery({
            queryKey: ['allSellers'],
            queryFn: async () => {
                  const res = await fetch('http://localhost:5000/users/sellers');
                  const data = await res.json();
                  return data;
            }
      })

      const handleVerifySeller = id => {
            fetch(`http://localhost:5000/users/sellers/${id}`, {
                  method: 'PATCH',
                  headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                  }
            })
                  .then(res => res.json())
                  .then(data => {
                        if (data.modifiedCount > 0) {
                              toast.success('Seller Verified');
                              refetch();
                        }
                  })
      };

      const handleDeleteUser = id => {
            fetch(`http://localhost:5000/users/${id}`, {
                  method: 'DELETE',
                  headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                  }
            })
                  .then(res => res.json())
                  .then(data => {
                        if (data.acknowledged) {
                              toast.success('User deleted successfully');
                              refetch();
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
                                          allSellers.map((user, i) => <tr key={user._id} className="hover">
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
                                                <td>{user?.role !== 'Admin' && <button onClick={() => handleVerifySeller(user._id)} className='btn btn-success btn-xs'>{user?.verifiedSeller ? 'Verified' : 'Verify'}</button>}</td>
                                                <td>{user?.role !== 'Admin' && <button onClick={() => handleDeleteUser(user._id)} className='btn btn-xs btn-error'>Delete</button>}</td>
                                          </tr>)
                                    }

                              </tbody>
                        </table>
                  </div>


            </div>
      );
};

export default AllSeller;