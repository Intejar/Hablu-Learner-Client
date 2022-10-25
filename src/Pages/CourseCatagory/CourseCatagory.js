import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseCatagory = () => {
    const course = useLoaderData();
    return (
        <div>
            <h1>this catagory has : {course.length}</h1>
        </div>
    );
};

export default CourseCatagory;