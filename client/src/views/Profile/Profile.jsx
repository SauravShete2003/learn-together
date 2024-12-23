import { useState, useEffect } from "react";
import "./Profile.css";
function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div class="welcome-container">
      <div class="welcome-header">
        <span>
          Welcome to our community, <b>{user.name} </b>
          We’re here to learn, share, and grow together.
        </span>
      </div>
      <div class="welcome-details">
        <p>
          <strong>Skills:</strong> {user.skills.join(", ")}
        </p>
        <p>
          <strong>Bio:</strong> {user.bio}
        </p>
      </div>
    </div>
  );
}

export default Profile;
