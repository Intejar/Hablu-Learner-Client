import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaUsers, FaAngleDoubleRight, FaFileDownload } from "react-icons/fa";
import PrivateRoute from '../../Routes/PrivateRoute/PrivateRoute';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import Navbar from '../../Shared/Navbar/Navbar';


const Courses = () => {
    const { user } = useContext(AuthContext)
    const courses = useLoaderData()
    const { _id, title, details, image_url, total_view, rating, category_id, Price } = courses
    const points = courses.points
    const setData = ()=>{
        localStorage.setItem('name',title)
        localStorage.setItem('price',Price)
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className='hero min-h-screen bg-base-200'>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className='flex justify-between'>
                            <h2 className="card-title text-2xl font-bold">{title}</h2>
                            <div className='flex space-x-2'>
                                <FaUsers className='text-orange-500 text-xl gap-2'></FaUsers>
                                <span className='font-semibold'>{total_view} learners</span>
                            </div>
                        </div>
                        <p>{details}</p>
                        <div className='flex justify-center'>
                            <ul className='list-disc'>
                                {
                                    points.map(point => <li>{point}</li>)
                                }
                            </ul>
                        </div>
                        <div className="card-actions justify-between">
                            <span className='text-xl font-bold text-orange-500'>{Price}</span>
                            <Link to={`/category/${category_id}`}><FaAngleDoubleRight className='text-xl'></FaAngleDoubleRight></Link>
                        </div>
                        <div className='flex justify-center'>
                            <button className="btn btn-wide"> <Link to='/checkout' onClick={setData}>Premium Subscription</Link> </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Courses;