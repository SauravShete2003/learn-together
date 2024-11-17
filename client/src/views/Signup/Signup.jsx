import { useState } from "react";
import api from "./../../services/api";
import toast from "react-hot-toast";

function Signup() {
  const [formData, setFromData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    try {
      const response = await api.post("/signup", formData);
      toast.success("Signup Successfull");
      console.log(response.data);
    } catch (error) {
      toast.error("Signup Failed");
    }
  };

  return (
    <div>
      Signup Page
      <div>
        <input
          type="text"
          placeholder="Enter FullName"
          value={formData.name}
          onChange={(e) => setFromData({ ...formData, name: e.target.value })}
        />

        <input
          type="email"
          value={formData.email}
          placeholder="Enter Your Email"
          onChange={(e) => setFromData({ ...formData, email: e.target.value })}
        />
        <input
          type="password"
          value={formData.password}
          placeholder="Enter Your Password"
          onChange={(e) =>
            setFromData({ ...formData, password: e.target.value })
          }
        />
        <button type="button" onClick={handleSubmit}>
          Register
        </button>
      </div>
    </div>
  );
}

export default Signup;
