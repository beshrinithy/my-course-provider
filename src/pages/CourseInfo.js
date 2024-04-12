// src/pages/CourseInfo.js
import React from 'react';
import CourseDetails from '../components/CoursesPage/CourseDetails';
import Syllabus from '../components/CourseInfo/Syllabus';
import Pricing from '../components/CourseInfo/Pricing';
import Instructors from '../components/CourseInfo/Instructors';

const CourseInfo = () => {
    // Mock data for testing
    const course = {
        id: 1,
        title: 'Course 1',
        description: 'Description for Course 1',
        syllabus: ['Topic 1', 'Topic 2', 'Topic 3'],
        price: '$99.99',
        instructors: [
            { name: 'Instructor 1', bio: 'Bio for Instructor 1' },
            { name: 'Instructor 2', bio: 'Bio for Instructor 2' }
        ]
    };

    return (
        <div>
            <CourseDetails course={course} />
            <Syllabus course={course} />
            <Pricing course={course} />
            <Instructors course={course} />
        </div>
    );
};

export default CourseInfo;
