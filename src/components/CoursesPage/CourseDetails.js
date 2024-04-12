import React from 'react';

const CourseDetails = ({ course }) => {
    return (
        <div className="p-4">
            <h2 className="text-2xl font-semibold text-heading mb-4">{course.title}</h2>
            <p className="text-subtitle mb-4">{course.description}</p>
            <p className="text-subtitle mb-4">Instructors: {course.instructors}</p>
            <p className="text-subtitle mb-4">Pricing: {course.pricing}</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded">Enroll Now</button>
        </div>
    );
}

export default CourseDetails;
