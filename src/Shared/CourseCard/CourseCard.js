import React from 'react';

const CourseCard = ({ course }) => {
    const { _id, title, details, image_url, total_view } = course
    return (
        <div className="card col-span-12 md:col-span-4 lg:card-side col-span-4 bg-base-100 shadow-xl">
            <figure><img src={image_url} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{details}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;