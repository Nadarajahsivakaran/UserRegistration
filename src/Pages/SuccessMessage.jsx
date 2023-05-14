import Card from "react-bootstrap/Card";
import Button from "../Components/Button";
import Border from "../Components/Border";
import { Link } from "react-router-dom";

function SuccessMessage() {
  return (
    <div
      className=" justify-content-center align-items-center h-100 py-5 "
      style={{ backgroundColor: "#205387" }}
    >
      <Card className="mx-auto p-3 mt-5" style={{ width: "40%" }}>
        <Card.Body>
          <div className="justify-content-center align-items-center">
            <img
              src="data:image/png;base64,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"
              alt="Correct"
              style={{ width: "25%", display: "block", margin: "auto" }}
            />
          </div>

          <Card.Title
            className="text-center text-dark p-3"
            style={{ fontSize: "35px", fontWeight: 900 }}
          >
            Congratulations
          </Card.Title>
          <Card.Subtitle
            className="mb-2 text-dark text-center p-4"
            style={{ fontSize: "20px", fontWeight: 900 }}
          >
            Your Account has been created successfully
          </Card.Subtitle>
          <Link to="/">
            <Button name="Go To Login"></Button>
          </Link>
        </Card.Body>
      </Card>

      <Border />
    </div>
  );
}

export default SuccessMessage;
