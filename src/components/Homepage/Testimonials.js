import React from 'react';

const Testimonials = () => {
    return (
        <div className="testimonials">
            <h2 className="text-2xl font-bold mb-4">Testimonials</h2>
            <div className="testimonial">
                <p className="text-lg font-semibold">Felipe M.</p>
                <p className="text-gray-600">Learner since 2018</p>
                <p className="text-gray-800">"To be able to take courses at my own pace and rhythm has been an amazing experience. I can learn whenever it fits my schedule and mood."</p>
            </div>
            <div className="testimonial">
                <p className="text-lg font-semibold">Chaitanya A.</p>
                <p className="text-gray-800">"Learning isn't just about being better at your job: it's so much more than that. Coursera allows me to learn without limits."</p>
            </div>
        </div>
    );
}

export default Testimonials;
