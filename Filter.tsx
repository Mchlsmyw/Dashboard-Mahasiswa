interface FilterProps {
  selected: string;
  onChange: (value: string) => void;
}

export default function Filter({ selected, onChange }: FilterProps) {
  const majors = ["All", "Informatika", "Sistem Informasi", "Teknologi Informasi", "Management"];

  return (
    <div className="mb-4">
      <label className="font-semibold mr-2">Filter Jurusan:</label>
      <select
        value={selected}
        onChange={(e) => onChange(e.target.value)}
        className="border p-2 rounded"
      >
        {majors.map((m) => (
          <option key={m} value={m}>
            {m}
          </option>
        ))}
      </select>
    </div>
  );
}
