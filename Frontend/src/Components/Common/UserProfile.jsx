const UserProfile = ({ userData }) => {
  // Access user data properties (e.g., name, email)
  const { name, email } = userData;

  return (
    <div className="user-profile">
      <h2>{name}</h2>
      <p>{email}</p>
      {/* Add more user profile information as needed */}
    </div>
  );
};

export default UserProfile;
