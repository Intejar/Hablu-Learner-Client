import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../../Shared/CourseCard/CourseCard';

const CourseCatagory = () => {
    const Courses = useLoaderData();
    return (
        <div>
            <div className='grid grid-cols-12 gap-2 p-10 content-center'>
                {
                    Courses.map(course => <CourseCard key={course.id} course={course} ></CourseCard>)
                }
            </div>
        </div>
    );
};

export default CourseCatagory;