import { useMemo } from "react";

// Custom hook to filter users based on criteria
export function useFilteredUsers(users, searchTerm, selectedRole) {
  return useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    return users.filter((u) => {
      const matchesName = u.name.toLowerCase().includes(term);
      const matchesRole = selectedRole === "All" || u.role === selectedRole;
      return matchesName && matchesRole;
    });
  }, [users, searchTerm, selectedRole]);
}
