import { useState } from "react";
import { useUsers } from "./hooks/useUsers";
import { useFilteredUsers } from "./hooks/useFilteredUsers";
import SearchBar from "./components/FilterPanel/SearchBar";
import RoleFilter from "./components/FilterPanel/RoleFilter";
import UserList from "./components/UserList/UserList";

// Main App component entry point
export default function App() {
  const users = useUsers();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("All");

  const filtered = useFilteredUsers(users, searchTerm, selectedRole);

  return (
    <div className="app-root">
      <div className="app-container">
        <h1 className="app-title">User Directory</h1>
        <div className="app-filters">
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
          <RoleFilter
            users={users}
            selected={selectedRole}
            onSelect={setSelectedRole}
          />
        </div>
        <UserList users={filtered} />
      </div>
    </div>
  );
}
