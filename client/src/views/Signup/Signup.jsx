import { useState } from "react";
import api from "./../../services/api";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

function Signup() {
  const [formData, setFromData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    try {
      const response = await api.post("/register", formData);
      console.log("Response:", response.data);
      console.log("Form Data:", formData);
      toast.success("Signup Successfull");
      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
      console.log(response.data);
    } catch (error) {
      toast.error("Signup Failed");
    }
  };

  return (
    <div className="auth-container">
      <h1 className="auth-heading">
        👋 Welcome to Learn Together Level Up Your Skills Together! 🚀
      </h1>
      <div className="auth-form-container">
        <input
          type="text"
          className="auth-input"
          placeholder="Enter FullName"
          value={formData.name}
          onChange={(e) => setFromData({ ...formData, name: e.target.value })}
        />

        <input
          type="email"
          className="auth-input"
          value={formData.email}
          placeholder="Enter Your Email"
          onChange={(e) => setFromData({ ...formData, email: e.target.value })}
        />
        <input
          type="password"
          className="auth-input"
          value={formData.password}
          placeholder="Enter Your Password"
          onChange={(e) =>
            setFromData({ ...formData, password: e.target.value })} />

        <button type="button" className="auth-btn" onClick={handleSubmit}>
          Register
        </button>
        <div>
          Already have an account? <Link to={'/login'}>Login</Link> 
        </div>
      </div>
    </div>
  );
}

export default Signup;
