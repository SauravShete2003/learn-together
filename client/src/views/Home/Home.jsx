import React from "react";
import Profile from "../Profile/Profile";
import LogOut from "../../components/LogOut/LogOut";

function Home() {
  return (
    <div>
      <LogOut />
      <Profile />
    </div>
  );
}

export default Home;
