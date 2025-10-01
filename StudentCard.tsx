import type { ReactNode } from "react";
import type { Student } from "../App";

interface StudentCardProps {
  student: Student;
  children?: ReactNode;
}

export default function StudentCard({ student, children }: StudentCardProps) {
  return (
    <div className="border rounded-lg p-4 shadow-sm mb-3 bg-white">
      <h3 className="font-bold text-lg">{student.name}</h3>
      <p>Jurusan: {student.major}</p>
      <p>GPA: {student.gpa}</p>
      {children}
    </div>
  );
}
