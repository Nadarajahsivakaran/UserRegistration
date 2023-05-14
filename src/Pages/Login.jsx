import React, { useEffect } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import Border from "../Components/Border";
import Input from "../Components/Input";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Features/authSlice";
import Button from "../Components/Button";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const initialValues = {
    username: "",
    password: "",
  };
  useEffect(() => {
    if (isLoggedIn) navigate("Home");
  }, [dispatch, isLoggedIn, navigate]);

  const onSubmit = (values) => {
    dispatch(login(values));
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("User Name is required")
      .email("User Name is not valid!"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <MDBContainer fluid style={{ backgroundColor: "#205387" }}>
      <MDBRow className="d-flex justify-content-center align-items-center h-100 py-5">
        <MDBCol col="12">
          <div
            className="mx-auto text-start text-white px-2"
            style={{ maxWidth: "500px" }}
          >
            <h2>Welcome Back</h2>
            <h4>Login to your account</h4>
          </div>

          <MDBCard
            className="bg-white mb-2 mx-auto "
            style={{ borderRadius: "1rem", maxWidth: "40%" }}
          >
            <MDBCardBody className="p-5 w-100 d-flex flex-column">
              <h2
                className="fw-bold mb-2 text-center mb-4"
                style={{ color: "#205387", fontSize: "35px", fontWeight: 900 }}
              >
                ABC COMPANY
              </h2>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                }) => (
                  <form onSubmit={handleSubmit}>
                    <Input
                      placeholder="Jone.Doe@gmail.com"
                      labelName="User Name"
                      name="username"
                      value={values.username}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.username && errors.username ? (
                      <div className="text-danger">{errors.username}</div>
                    ) : null}

                    <Input
                      labelName="Password"
                      name="password"
                      type="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.password && errors.password ? (
                      <div className="text-danger">{errors.password}</div>
                    ) : null}
                    <Button name="Login" />
                  </form>
                )}
              </Formik>
              <h4 className="fw-bold mb-2 text-center text-dark mb-4">
                Still Have No Account?{" "}
                <Link to="/Register" style={{ color: "ORANGE" }}>
                  SIGNUP
                </Link>{" "}
                Now
              </h4>
            </MDBCardBody>
          </MDBCard>

          <Border color="white" />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
