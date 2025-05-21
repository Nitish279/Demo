import UserCard from "./UserCard";

// UserList component to display a list of users
export default function UserList({ users }) {
  if (!users.length)
    return (
      <p className="text-center text-gray-500 italic py-8">No users found.</p>
    );
  return (
    <ul className="space-y-4">
      {users.map((u) => (
        <UserCard key={u.id} user={u} />
      ))}
    </ul>
  );
}
