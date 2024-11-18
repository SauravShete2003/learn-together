import toast from "react-hot-toast";
import { setAuthToken } from "../../services/api";
function LogOut() {
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setAuthToken(null);
    toast.success("Logout Successfully");
    setTimeout(() => {
      window.location.href = "/login";
    }, 2000);
  };
  return (
    <>
      <button className="logout-button" onClick={handleLogout} type="button">
        LogOut
      </button>
    </>
  );
}

export default LogOut;
