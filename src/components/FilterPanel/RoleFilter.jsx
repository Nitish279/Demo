// RoleFilter component for filtering users by role

export default function RoleFilter({ users, selected, onSelect }) {
  // build dynamic options
  const roles = Array.from(new Set(users.map((u) => u.role))).sort(); // e.g. ["Admin","Manager","User"]

  return (
    <select
      value={selected}
      onChange={(e) => onSelect(e.target.value)}
      className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 w-full sm:w-48 transition"
    >
      <option>All</option>
      {roles.map((role) => (
        <option key={role}>{role}</option>
      ))}
    </select>
  );
}
