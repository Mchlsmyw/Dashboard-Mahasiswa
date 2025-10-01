import StudentCard from "./StudentCard";
import { Student } from "../App";

interface StudentListProps {
  students: Student[];
}

export default function StudentList({ students }: StudentListProps) {
  return (
    <div>
      {students.map((s) => (
        <StudentCard key={s.id} student={s}>
          {s.gpa > 3.5 && (
            <span className="inline-block mt-2 bg-green-200 text-green-700 text-sm px-2 py-1 rounded">
              Cum Laude
            </span>
          )}
        </StudentCard>
      ))}
    </div>
  );
}
