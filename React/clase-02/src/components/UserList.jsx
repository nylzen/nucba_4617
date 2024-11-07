export const UserList = ({ users }) => {
  console.log('users', users)
  return (
    <>
      <h1>Users</h1>
      {!users.length ? (
        <p>No users</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </>
  );
};
