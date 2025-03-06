import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CourseDetails from "./pages/CourseDetails"; // Import Course Details Page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course/:courseId" element={<CourseDetails />} /> {/* Course Details Route */}
      </Routes>
    </Router>
  );
}

export default App;
