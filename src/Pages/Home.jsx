import React from "react";
import Navbar from "../Components/Navbar";
import Profile from "../Components/Profile";
import Border from "../Components/Border";
import { useSelector } from "react-redux";
import Spinner from "../Components/Spinner";

const Home = () => {
  const { activeUser } = useSelector((state) => state.auth);
  return (
    <div>
      <Navbar />
      {activeUser ? (
        <>
          <div className="mb-5">
            <Profile />
          </div>
          <Border />
        </>
      ) : (
        <>
          <Spinner />
        </>
      )}
    </div>
  );
};

export default Home;
