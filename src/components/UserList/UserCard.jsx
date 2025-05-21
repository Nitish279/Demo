// UserCard component to display individual user details

export default function UserCard({ user }) {
  return (
    <div className="user-card">
      <div>
        <span className="user-name">{user.name}</span>
        <span className="user-role">({user.role})</span>
        <div className="user-location">{user.location}</div>
      </div>
      <div>
        <span className={user.active ? "user-active" : "user-inactive"}>
          {user.active ? "Active" : "Inactive"}
        </span>
      </div>
    </div>
  );
}
