import React from 'react';
import CourseCard from '../components/CoursesPage/CourseCard';

const CoursesPage = () => {
    const courses = [
        {
            title: 'Agile Project Management by Google',
            description: 'This is the fifth course in the Google Project Management Certificate program. This course will explore the history, approach, and philosophy of Agile project management, including the Scrum framework. You will learn how to differentiate and blend Agile and other project management approaches.',
            pricing: '179/month',
            syllabus: [
                'Popular Agile Frameworks',
                'Introduction to Scrum Video. 5 min',
                'The founding principles of Scrum Reading. 20 min',
                'Introduction to Kanban, XP, and Lean Video 8 min',
                'Blending project management approaches Video. 5 min',
                'The Spotify model Reading 20 min',
                'Test your knowledge: Agile frameworks Practice Quiz. 4 questions'
            ],
            instructor: 'James Pawelski, Ph.D. University of Pennsylvania'
        },
        {
            title: 'Foundations of Positive Psychology Specialization by Penn',
            description: 'The University of Pennsylvania and Dr. Martin E.P. Seligman welcome you to Foundations of Positive Psychology. Our five-course specialization provides you with the key theories and research in the field of positive psychology as well as opportunities for application.',
            pricing: '179/month',
            syllabus: [
                'Positive Psychology: Martin E. P. Seligman’s Visionary Science Course 1 16 hours 4.9(5,776 ratings)',
                'Positive Psychology: Applications and Interventions Course 2 16 hours 4.8(2,044 ratings)',
                'Positive Psychology: Character, Grit and Research Methods Course 3 23 hours 4.4(1,128 ratings)',
                'Positive Psychology: Resilience Skills Course 4 15 hours 4.9(2,064 ratings)',
                'Positive Psychology Specialization Project: Design Your Life for Well-being University of Pennsylvania'
            ],
            instructor: 'Martin E.P. Seligman, Ph.D. University of Pennsylvania'
        },
        {
            title: 'Object-Oriented Data Structures in C++ by Illinois',
            description: 'This course teaches learners how to write a program in the C++ language, including how to set up a development environment for writing and debugging C++ code and how to implement data structures as C++ classes. It is the first course in the Accelerated CS Fundamentals specialization, and subsequent courses in this specialization will be using C++ as the language for implementing the data structures covered in class.',
            pricing: '179/month',
            syllabus: [
                'Orientation; Writing a C++ Program Module 1 7 hours to complete',
                'Understanding the C++ Memory Model Module 2 3 hours to complete',
                'Developing C++ Classes Module 3 3 hours to complete',
                'Engineering C++ Software Solutions Module 4 6 hours to complete'
            ],
            instructor: 'Wade Fagen-Ulmschneider University of Illinois at Urbana-Champaign'
        }
    ];

    return (
        <div>
            <h2>Courses</h2>
            {courses.map((course, index) => (
                <CourseCard key={index} course={course} />
            ))}
        </div>
    );
}

export default CoursesPage;
