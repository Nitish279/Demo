import React, { useState, useMemo } from "react";
import "./App.css";

const users = [
  { id: 1, name: "Arjun", role: "Admin", location: "Bangalore", active: true },
  { id: 2, name: "Divya", role: "User", location: "Chennai", active: false },
  { id: 3, name: "Ravi", role: "Manager", location: "Hyderabad", active: true },
  { id: 4, name: "Sneha", role: "User", location: "Bangalore", active: true },
  { id: 5, name: "Nikhil", role: "Admin", location: "Chennai", active: false },
  {
    id: 6,
    name: "Priya",
    role: "Manager",
    location: "Bangalore",
    active: true,
  },
];

export default function App() {
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("All");

  // derive the list of roles dynamically
  const setOfRoles = new Set(users.map((u) => u.role));
  const roles = ["All", ...Array.from(setOfRoles)];

  // filter users by name + role
  const filtered = users.filter((u) => {
    const matchesName = u.name.toLowerCase().includes(search.toLowerCase());
    const matchesRole = role === "All" || u.role === role;
    return matchesName && matchesRole;
  });

  return (
    <div style={{ padding: 20, maxWidth: 500 }}>
      <h2>User Directory</h2>

      <div style={{ marginBottom: 16 }}>
        <input
          type="text"
          placeholder="Search by name…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: "100%", padding: 8, boxSizing: "border-box" }}
        />
      </div>

      <div style={{ marginBottom: 16 }}>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={{ width: "100%", padding: 8 }}
        >
          {roles.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>

      <table
        width="100%"
        border="1"
        cellPadding="8"
        style={{ borderCollapse: "collapse" }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Location</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((u) => (
            <tr key={u.id}>
              <td>{u.name}</td>
              <td>{u.role}</td>
              <td>{u.location}</td>
              <td>{u.active ? "✔️" : "❌"}</td>
            </tr>
          ))}
          {filtered.length === 0 && (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
