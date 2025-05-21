// SearchBar component for filtering users by name

export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search by name…"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 w-full sm:w-64 transition"
    />
  );
}
