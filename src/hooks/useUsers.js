import { useState, useEffect } from "react";
import { fetchUsers } from "../services/userService";

// Custom hook to fetch or manage users
export function useUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // simulate async fetch
    setUsers(fetchUsers());
  }, []);
  return users;
}

// Custom hook to fetch users from userService
// Returns an array of user objects
// Usage: const users = useUsers();
