import { useState } from "react";
import { useParams } from "react-router-dom";
import "./UpdateSkills.css";
import axios from "axios";

function UpdateSkills() {
  const [skills, setSkills] = useState("");
  const [bio, setBio] = useState("");
  const { id } = useParams();

  console.log("Retrieved user ID:", id);

  const UpdateProfile = async () => {
    if (!id) {
      console.error("User ID is undefined. Check the route configuration.");
      return;
    }

    try {
      const response = await axios.put(`/user/${id}`, {
        bio: bio,
        skills: skills.split(",").map((skill) => skill.trim()),
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-heading">Update Skills</h2>
      <div className="auth-form-container">
        <label>
          Bio:
          <input
            type="text"
            value={bio}
            className="auth-input"
            onChange={(e) => setBio(e.target.value)}
          />
        </label>
        <label>
          Skills (comma-separated):
          <input
            type="text"
            value={skills}
            className="auth-input"
            onChange={(e) => setSkills(e.target.value)}
          />
        </label>
        <button onClick={UpdateProfile} type="button" className="auth-btn">
          Update Profile
        </button>
      </div>
    </div>
  );
}

export default UpdateSkills;
