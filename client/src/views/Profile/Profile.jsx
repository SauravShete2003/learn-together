import { useState , useEffect } from "react";
import toast from "react-hot-toast";
function Profile() {
  const [user, setUser] = useState(null);

useEffect(()=>{
  const storedUser = JSON.parse(localStorage.getItem('user'));
  if(storedUser) {
    setUser(storedUser);
    // toast.success("User data fetch Successfully");
    }
},[])
  
  if(!user){
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Welcome {user.name}</h1>
      <p>Skills : {user.skills.join()}</p>
      <p>Bio : {user.bio}</p>
    </div>
  )
}

export default Profile
