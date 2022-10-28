import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://hablu-learner-server.vercel.app/course-category')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            {
                categories.map(category =><button className="my-3 btn btn-block" key={category.id}><Link to={`/category/${category.id}`}>{category.name}</Link> </button>)
            }
        </div>
    );
};

export default LeftNav;