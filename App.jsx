import React, { useState } from "react";
import StudentCard from "./components/StudentCard";
import Filter from "./components/Filter";

const students = [
  { id: 1, name: "Michel", major: "Informatika", gpa: 3.7 },
  { id: 2, name: "Ivan", major: "Sistem Informasi", gpa: 3.8 },
  { id: 3, name: "Arya", major: "Informatika", gpa: 3.9 },
  { id: 4, name: "Angel", major: "Sistem Informasi", gpa: 3.4 },
  { id: 5, name: "Rizky", major: "Teknologi Informasi", gpa: 3.6 },
  { id: 6, name: "Nina", major: "Teknologi Informasi", gpa: 3.1 },
];

function App() {
  const [selectedMajor, setSelectedMajor] = useState("All");

  const filteredStudents = students.filter(
    (s) => selectedMajor === "All" || s.major === selectedMajor
  );

  return (
    <div style={{ maxWidth: 600, margin: "40px auto", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#dee5edff" }}>Student Management Dashboard</h1>
      <div style={{ marginBottom: 24, textAlign: "center" }}>
        <Filter selectedMajor={selectedMajor} onChange={setSelectedMajor} />
      </div>
      {filteredStudents.length === 0 ? (
        <p style={{ textAlign: "center", color: "#e74c3c" }}>Tidak ada mahasiswa pada jurusan ini.</p>
      ) : (
        filteredStudents.map((student) => (
          <StudentCard key={student.id} student={student}>
            {student.gpa > 3.5 && (
              <span className="badge" style={{ color: "green", fontWeight: "bold" }}>
                🎓 Cum Laude
              </span>
            )}
          </StudentCard>
        ))
      )}
    </div>
  );
}

export default App;