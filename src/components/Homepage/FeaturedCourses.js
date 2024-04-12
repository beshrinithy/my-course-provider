import React, { useState } from 'react';

const FeaturedCourses = () => {
    const [showPopup, setShowPopup] = useState(false);

    const courses = [
        {
            title: 'Data Analytics and Databases on AWS',
            description: 'Data is everywhere. If you or your company don\'t know what data you have and what insights you can uncover through your data, you are at a competitive disadvantage.'
        },
        {
            title: 'Capstone: Following the AWS Well Architected Framework',
            description: 'This course provides a thorough review of the AWS Well-Architected Framework to help you understand how to make informed decisions about your architecture in a cloud-native way and understand the impact of design decisions.'
        }
    ];

    const handleEnrollClick = () => {
        setShowPopup(true);
    };

    return (
        <div>
            <h2>Featured Courses</h2>
            {courses.map((course, index) => (
                <div key={index} className="p-4 border border-gray-300 mb-4">
                    <h3 className="text-lg font-semibold text-heading mb-2">{course.title}</h3>
                    <p className="text-subtitle mb-4">{course.description}</p>
                    <button onClick={handleEnrollClick} className="bg-blue-500 text-white py-2 px-4 rounded">Enroll Now</button>
                </div>
            ))}
            {showPopup && (
                <div className="popup">
                    <form>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" />

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" />

                        <button type="submit">Enroll</button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default FeaturedCourses;
