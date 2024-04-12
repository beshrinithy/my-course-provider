import React, { useState } from 'react';

const CourseCard = ({ course }) => {
    const [showPopup, setShowPopup] = useState(false);

    const handleEnrollClick = () => {
        setShowPopup(true);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Add logic here to handle form submission and enroll user in the course
        // For example, you can send a request to your backend to enroll the user
        // Once the user is enrolled, you can close the popup
        setShowPopup(false);
    };

    return (
        <div className="p-4 border border-gray-300 mb-4">
            <h2 className="text-lg font-semibold text-heading mb-2">{course.title}</h2>
            <p className="text-subtitle mb-2">{course.description}</p>
            <p className="text-subtitle mb-2">Instructor: {course.instructor}</p>
            <p className="text-subtitle mb-2">Syllabus: {course.syllabus}</p>
            <p className="text-subtitle mb-4">Pricing: {course.pricing}</p>
            <button onClick={handleEnrollClick} className="bg-blue-500 text-white py-2 px-4 rounded">Enroll Now</button>
            {showPopup && (
                <div className="popup">
                    <form onSubmit={handleFormSubmit}>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />

                        <button type="submit">Enroll</button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default CourseCard;
