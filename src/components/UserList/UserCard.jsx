// UserCard component to display individual user details

export default function UserCard({ user }) {
  return (
    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 flex flex-col sm:flex-row sm:items-center justify-between shadow-sm hover:shadow-md transition ">
      <div>
        <span className="font-semibold text-lg text-purple-800">
          {user.name}
        </span>
        <span className="ml-2 text-sm text-gray-500">({user.role})</span>
        <div className="text-gray-600 text-sm">{user.location}</div>
      </div>
      <div className="mt-2 sm:mt-0">
        <span
          className={
            user.active ? "text-green-600 font-bold" : "text-red-500 font-bold"
          }
        >
          {user.active ? "Active" : "Inactive"}
        </span>
      </div>
    </div>
  );
}
