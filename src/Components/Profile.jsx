import React from "react";
import { useSelector } from "react-redux";
import ImageUpload from "./ImageUpload";

const Profile = () => {
  const { activeUser } = useSelector((state) => state.auth);

  return (
    <>
      <div className="mx-auto" style={{ width: "40%" }}>
        <div className="row">
          <div className="col-6">
            <ImageUpload />
          </div>
          <div className="col-6 my-auto">
            <h2
              className="text-dark"
              style={{ fontSize: "30px", fontWeight: 900 }}
            >
              Welcome
            </h2>
            <h2 style={{ fontSize: "40px", fontWeight: 900 }}>
              {activeUser.name}
            </h2>
          </div>
        </div>
        <div className="row p-3">
          <div
            className="col-6 text-start text-dark"
            style={{ fontSize: "20px", fontWeight: 900 }}
          >
            Email Addresss
          </div>
          <div className="col-6 text-end">{activeUser.email}</div>
        </div>
        <div className="row p-3">
          <div
            className="col-6 text-start text-dark"
            style={{ fontSize: "20px", fontWeight: 900 }}
          >
            Name
          </div>
          <div className="col-6 text-end">{activeUser.name}</div>
          <div className="row p-3">
            <div
              className="col-6 text-start text-dark"
              style={{ fontSize: "20px", fontWeight: 900 }}
            >
              Gender
            </div>
            <div className="col-6 text-end">{activeUser.gender}</div>
          </div>
          <div className="row p-3">
            <div
              className="col-6 text-start text-dark"
              style={{ fontSize: "20px", fontWeight: 900 }}
            >
              Date of Birth
            </div>
            <div className="col-6 text-end">{activeUser.dob}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
