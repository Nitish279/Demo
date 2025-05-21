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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center py-10">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-center text-purple-700 mb-8 tracking-tight">
          User Directory
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
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
