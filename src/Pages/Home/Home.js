import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../../Shared/CourseCard/CourseCard';

const Home = () => {
    const courses = useLoaderData()
    return (
        <div>
            <h1>this is home:{courses.length}</h1>
            <div className='grid grid-cols-12 gap-2 p-10'>
                {
                    courses.map(course => <CourseCard key={course._id} course={course}></CourseCard>)
                }
            </div>
        </div>
    );
};

export default Home;