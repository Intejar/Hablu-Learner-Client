import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../../Shared/CourseCard/CourseCard';

const CourseCatagory = () => {
    const Courses = useLoaderData();
    return (
        <div >
            <h1>this catagory has : {Courses
                .length}</h1>
            <div className='grid grid-cols-12 gap-2 p-10'>
                {
                    Courses.map(course => <CourseCard key={course.id} course={course} ></CourseCard>)
                }
            </div>
        </div>
    );
};

export default CourseCatagory;