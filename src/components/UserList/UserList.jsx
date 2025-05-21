import UserCard from "./UserCard";

// UserList component to display a list of users
export default function UserList({ users }) {
  if (!users.length) return <p className="user-list-empty">No users found.</p>;
  return (
    <div className="user-list-table-wrapper">
      <table className="user-list-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Location</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <UserCard key={u.id} user={u} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
