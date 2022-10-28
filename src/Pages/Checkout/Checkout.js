import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import Navbar from '../../Shared/Navbar/Navbar';

const Checkout = () => {
    const { user } = useContext(AuthContext)
    const name = localStorage.getItem('name');
    const price = localStorage.getItem('price');
    return (
        <div>
            <Navbar></Navbar>
            <div className='hero min-h-screen bg-slate-400'>
                <div className="card w-96 bg-neutral text-neutral-content">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Learner Purchase</h2>
                        <p className='text-xl'>{name}</p>
                        <p className='text-md'>price: {price}</p>
                        <div className="card-actions justify-end">
                            <button className="btn bg-orange-700"><Link to='/'>courses</Link></button>
                            {/* The button to open modal */}
                            <label htmlFor="my-modal-6" className="btn bg-orange-700 modal-button">purchase</label>

                            {/* Put this part before </body> tag */}
                            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                            <div className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box">
                                    <h3 className="font-bold text-lg text-blue-500">Congratulations {user.displayName} !</h3>
                                    <p className="py-4 text-blue-500">You've purchased {name} course. Happy Learning with Hablu Learner!</p>
                                    <div className="modal-action">
                                        <label htmlFor="my-modal-6" className="btn">Yay!</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;