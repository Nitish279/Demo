// RoleFilter component for filtering users by role

export default function RoleFilter({ users, selected, onSelect }) {
  // build dynamic options
  const roles = Array.from(new Set(users.map((u) => u.role))).sort(); // e.g. ["Admin","Manager","User"]

  return (
    <select
      value={selected}
      onChange={(e) => onSelect(e.target.value)}
      className="role-filter"
    >
      <option>All</option>
      {roles.map((role) => (
        <option key={role}>{role}</option>
      ))}
    </select>
  );
}
