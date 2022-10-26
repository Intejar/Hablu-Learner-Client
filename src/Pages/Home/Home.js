import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../../Shared/CourseCard/CourseCard';

const Home = () => {
    const courses = useLoaderData()
    return (
        <div>
            <div className='grid grid-cols-12 gap-2 p-10'>
                {
                    courses.map(course => <CourseCard key={course._id} course={course}></CourseCard>)
                }
            </div>
        </div>
    );
};

export default Home;