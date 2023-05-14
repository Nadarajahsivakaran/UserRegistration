import React from "react";

const Input = (props) => {
  return (
    <div className=" mb-3">
      <label
        className="mb-1 col-form-label text-start text-dark"
        style={{ fontSize: "20px", fontWeight: 900 }}
      >
        {props.labelName}
      </label>
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        className="form-control p-2"
        placeholder={props.placeholder}
        onChange={props.onChange}
        onBlur={props.onBlur}
        style={{
          border: "2px solid #9b9a9a",
          fontSize: "18px",
          fontWeight: 900,
        }}
      />
    </div>
  );
};

export default Input;
