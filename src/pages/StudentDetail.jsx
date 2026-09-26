import { Link, useParams } from "react-router-dom";
import { yearLabel } from "../data/students.js";

export default function StudentDetail({ students }) {
  const { id } = useParams();

  const student = students.find((s) => s.id === id);

  if (!student) {
    return (
      <section>
        <h1>Student not found</h1>
        <p className="lead">
          No student exists with ID: {id}
        </p>

        <Link to="/students">Back to Students</Link>
      </section>
    );
  }

  return (
    <section>
      <h1>{student.fullName}</h1>

      <div className="card">
        <p>
          <strong>Student ID:</strong> {student.id}
        </p>

        <p>
          <strong>Email:</strong> {student.email}
        </p>

        <p>
          <strong>Course:</strong> {student.course}
        </p>

        <p>
          <strong>Year Level:</strong> {yearLabel(student.yearLevel)}
        </p>
      </div>

      <p>
        <Link to="/students">← Back to Students</Link>
      </p>
    </section>
  );
}