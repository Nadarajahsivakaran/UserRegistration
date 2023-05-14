import React from "react";

const Border = (props) => {
  return (
    <div
      className="mx-auto px-3"
      style={{ maxWidth: "500px", color: props.color }}
    >
      <div className="row">
        <div className="col-2">Version1.0</div>
        <div className="col-4"></div>
        <div className="col-2">About Us</div>
        <div className="col-2">Privacy</div>
        <div className="col-2">Terms</div>
      </div>
    </div>
  );
};

export default Border;
