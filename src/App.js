// src/App.js
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Common/Navbar';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseInfo from './pages/CourseInfo';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/course/:id" element={<CourseInfo />} />
            </Routes>
            </div>
        </Router>
    );
}

export default App;
