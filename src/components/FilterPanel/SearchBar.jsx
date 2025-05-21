// SearchBar component for filtering users by name

export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search by name…"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="search-bar"
    />
  );
}
