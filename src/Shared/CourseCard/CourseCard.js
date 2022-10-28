import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Courses from '../../Pages/Courses/Courses';



const CourseCard = ({ course }) => {
    const { _id, title, details, image_url, total_view, rating } = course
    return (
        <div className="card col-span-12 md:col-span-6 w-96 bg-blue-100 shadow-xl">
            <figure><img src={image_url} alt="" /></figure>
            <div className=" card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{details}</p>
                <div className="card-actions flex justify-between">
                    <div className='flex justify-center'>
                        <FaStar className='text-yellow-500 text-2xl'></FaStar>
                        <span className='text-xl font-extrabold'>{rating?.number}</span>
                    </div>
                    <div>
                        <button className="btn btn-xs bg-orange-700 sm:btn-sm md:btn-md lg:btn-lg"> <Link to={`/courses/${_id}`}>Learn More</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;