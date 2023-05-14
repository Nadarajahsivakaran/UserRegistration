import React, { useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signout, user } from "../Features/authSlice";
import { useSelector } from "react-redux";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { activeUser } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(user());
  }, [dispatch]);

  const logOut = () => {
    localStorage.removeItem("token");
    dispatch(signout());
    navigate("/");
  };

  return (
    <>
      {activeUser ? (
        <>
          <Nav
            className="p-2"
            style={{ background: "#d9d9d9" }}
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
          >
            <Nav.Item style={{ marginRight: "auto" }}>
              <Nav.Link href="/home">ABC COMPANY</Nav.Link>
            </Nav.Item>
            <Nav.Item style={{ marginLeft: "auto" }}>
              <Nav.Link eventKey="link-2" className="text-dark">{activeUser.name}</Nav.Link>
            </Nav.Item>
          </Nav>
        </>
      ) : (
        <></>
      )}

      <Card style={{ width: "10rem", marginLeft: "auto", marginTop: "20px" }}>
        <ListGroup variant="flush">
          <Link to="/EditProfile">
            <ListGroup.Item
              className="text-dark"
              style={{ background: "#d9d9d9" }}
            >
              Edit Profile
            </ListGroup.Item>
          </Link>

          <ListGroup.Item
            className="text-dark"
            style={{ background: "#d9d9d9" }}
            onClick={logOut}
          >
            Sign Out
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
}

export default Navbar;
