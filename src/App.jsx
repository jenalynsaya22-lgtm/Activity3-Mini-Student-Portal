import { useState } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import { INITIAL_STUDENTS } from "./data/students.js";

import Home from "./pages/Home.jsx";
import Register from "./pages/Register.jsx";
import Students from "./pages/Students.jsx";
import StudentDetail from "./pages/StudentDetail.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  const [students, setStudents] = useState(INITIAL_STUDENTS);

  function addStudent(student) {
    setStudents((prev) => [...prev, student]);
  }

  return (
    <>
      <nav className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/students">Students</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/register"
          element={<Register students={students} onAdd={addStudent} />}
        />

        <Route
          path="/students"
          element={<Students students={students} />}
        />

        <Route
          path="/students/:id"
          element={<StudentDetail students={students} />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}