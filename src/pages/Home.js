import React from 'react';
import Introduction from '../components/Homepage/Introduction';
import FeaturedCourses from '../components/Homepage/FeaturedCourses';
import Testimonials from '../components/Homepage/Testimonials';

const Home = () => {
    // Mock data for testing
    const courses = [
        { id: 1, title: 'Course 1', description: 'Description for Course 1' },
        { id: 2, title: 'Course 2', description: 'Description for Course 2' },
        { id: 3, title: 'Course 3', description: 'Description for Course 3' }
    ];

    const testimonials = [
        { text: 'Testimonial 1', author: 'Author 1' },
        { text: 'Testimonial 2', author: 'Author 2' },
        { text: 'Testimonial 3', author: 'Author 3' }
    ];

    return (
        <div>
            <Introduction />
            <FeaturedCourses courses={courses} />
            <Testimonials testimonials={testimonials} />
        </div>
    );
};

export default Home;
