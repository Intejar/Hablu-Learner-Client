import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaUsers , FaAngleDoubleRight } from "react-icons/fa";
import PrivateRoute from '../../Routes/PrivateRoute/PrivateRoute';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';


const Courses = () => {
    const {user} = useContext(AuthContext)
    const courses = useLoaderData()
    const { _id, title, details, image_url, total_view, rating, category_id } = courses
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{details}</p>
                <div className="card-actions justify-between">
                    <div className='flex'>
                        <FaUsers className='text-blue-700 text-xl gap-2'></FaUsers>
                        <span className='font-semibold'>{total_view} learners</span>
                    </div>
                    <Link to={`/category/${category_id}`}><FaAngleDoubleRight className='text-xl'></FaAngleDoubleRight></Link>
                </div>
                <div className='flex justify-center'>
                    <button className="btn btn-wide"> <Link to='/checkout' title={title}>Premium Subscription</Link> </button>
                </div>
            </div>
        </div>
    );
};

export default Courses;