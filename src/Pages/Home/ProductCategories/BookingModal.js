import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({ modalProduct, setModalProduct }) => {
      const { product, price } = modalProduct;
      const { user } = useContext(AuthContext);
      const handleBooking = event => {
            event.preventDefault();
            const form = event.target;
            const productName = form.product.value;
            const productPrice = form.price.value;
            const name = form.name.value;
            const email = form.email.value;
            const phone = form.phone.value;
            const location = form.location.value;

            const booking = {
                  product: productName,
                  price: productPrice,
                  name,
                  email,
                  phone,
                  location
            }
            fetch('https://used-products-resale-server-khalid-hasan96.vercel.app/bookings', {
                  method: 'POST',
                  headers: {
                        'content-type': 'application/json'
                  },
                  body: JSON.stringify(booking)
            })
                  .then(res => res.json())
                  .then(data => {
                        if (data.acknowledged) {
                              setModalProduct(null);
                              toast.success('Booking Confirmed');
                        }

                  })
      }


      return (
            <>
                  <input type="checkbox" id="booking-modal" className="modal-toggle" />
                  <div className="modal">
                        <div className="modal-box relative">
                              <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                              <h3 className="font-bold text-black text-lg">Booking Details</h3>
                              <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                                    <input name='product' type="text" placeholder="Product Name" defaultValue={product} disabled className="input input-bordered w-full" />
                                    <input name='price' type="text" placeholder="Product Price" defaultValue={price} disabled className="input input-bordered w-full" />
                                    <input name='name' type="text" placeholder="Full Name" defaultValue={user?.displayName} disabled className="input input-bordered w-full" />
                                    <input name='email' type="email" placeholder="Email" defaultValue={user?.email} disabled className="input input-bordered w-full" />
                                    <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                                    <input name='location' type="text" placeholder="Meeting Location" className="input input-bordered w-full" />
                                    <br />
                                    <input className='btn btn-primary w-full' type="submit" value="Submit" />
                              </form>

                        </div>
                  </div>
            </>
      );
};

export default BookingModal;