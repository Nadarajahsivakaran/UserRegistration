import React from "react";
import { Button as Btn } from "react-bootstrap";

const Button = (props) => {
  return (
    <Btn
      type="submit"
      className="p-3 mb-3"
      style={{ width: "100%", backgroundColor: "#205387" }}
    >
      {props.name}
    </Btn>
  );
};

export default Button;
