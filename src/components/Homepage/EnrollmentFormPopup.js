// src/components/Homepage/EnrollmentFormPopup.js

import React, { useState } from 'react';

const EnrollmentFormPopup = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleButtonClick = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    const handleEnrollSubmit = (event) => {
        event.preventDefault();
        // Add logic to handle enrollment submission
        // For example, send form data to backend API
        // Reset form state if needed
        // Close the popup
        setIsPopupOpen(false);
    };

    return (
        <div>
            {/* Button to trigger the popup */}
            <button onClick={handleButtonClick}>Enroll Now</button>
            {/* Popup form */}
            {isPopupOpen && (
                <div className="popup">
                    {/* Your popup content here */}
                    <div className="popup-content">
                        <h2>Enrollment Form</h2>
                        <form onSubmit={handleEnrollSubmit}>
                            {/* Form fields */}
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" required />
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required />
                            {/* Additional form fields */}
                            <button type="submit">Enroll</button>
                        </form>
                        {/* Button to close the popup */}
                        <button onClick={handleClosePopup}>Cancel</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EnrollmentFormPopup;
