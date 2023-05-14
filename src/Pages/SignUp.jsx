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
import { Formik, Field } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../Features/authSlice";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "../Components/Button";

function SignUp() {
  const { isSuccess } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    mobile_number: "",
    dob: null,
    password: "",
    confirm_password: "",
  };

  useEffect(() => {
    if (isSuccess) navigate("/Success");
  }, [isSuccess, navigate]);

  const onSubmit = (values) => {
    dispatch(register(JSON.parse(JSON.stringify(values))));
  };

  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required("First Name is required"),
    last_name: Yup.string().required("Second Name is required"),
    email: Yup.string()
      .required("Email is required")
      .email("email is not valid!"),
    dob: Yup.string().required("Date Of Birth is required"),
    mobile_number: Yup.string()
      .required("Mobile number is required")
      .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits long"),
    password: Yup.string()
      .required("Password is required")
      .min(5, "Password must be at least 5 characters")
      .max(20, "Password must be at most 20 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character"
      ),
    confirm_password: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  return (
    <MDBContainer fluid style={{ backgroundColor: "#205387" }}>
      <MDBRow className="d-flex justify-content-center align-items-center h-100 py-5">
        <MDBCol col="12">
          <div
            className="mx-auto text-start text-white px-3"
            style={{ maxWidth: "500px" }}
          >
            <h2>
              <Link to="/">
                <i
                  className="fa fa-chevron-left text-white"
                  aria-hidden="true"
                ></i>
              </Link>
              Create Account
            </h2>
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
                    <div className="row">
                      <div className="col-6">
                        <Input
                          placeholder="Jone.Doe@gmail.com"
                          labelName="First Name"
                          name="first_name"
                          value={values.userName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.first_name && errors.first_name ? (
                          <div className="text-danger">{errors.first_name}</div>
                        ) : null}
                      </div>
                      <div className="col-6">
                        <Input
                          labelName="Second Name"
                          name="last_name"
                          value={values.last_name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.last_name && errors.last_name ? (
                          <div className="text-danger">{errors.last_name}</div>
                        ) : null}
                      </div>
                    </div>
                    <Input
                      labelName="Email Address"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.email && errors.email ? (
                      <div className="text-danger">{errors.email}</div>
                    ) : null}
                    <div className="row">
                      <label
                        className="col-form-label text-start text-dark"
                        style={{ fontSize: "20px", fontWeight: 900 }}
                      >
                        mobile_number
                      </label>
                      <div className="col-3">
                        <Input placeholder="+94" />
                      </div>
                      <div className="col-9">
                        <Input
                          name="mobile_number"
                          value={values.mobile_number}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.mobile_number && errors.mobile_number ? (
                          <div className="text-danger">
                            {errors.mobile_number}
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <Input
                      type="password"
                      labelName="Password"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.password && errors.password ? (
                      <div className="text-danger">{errors.password}</div>
                    ) : null}
                    <Input
                      type="password"
                      labelName="Confirm Password"
                      name="confirm_password"
                      value={values.confirm_password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.confirm_password && errors.confirm_password ? (
                      <div className="text-danger">
                        {errors.confirm_password}
                      </div>
                    ) : null}

                    <div className="mb-4">
                      <label
                        className="text-start text-dark"
                        htmlFor="dateOfBirth"
                        style={{ fontSize: "20px", fontWeight: 900 }}
                      >
                        Date of Birth
                      </label>
                      <Field name="dob">
                        {({ field, form }) => (
                          <DatePicker
                            className="form-control p-2"
                            selected={field.value}
                            onChange={(date) =>
                              form.setFieldValue(field.name, date)
                            }
                            dateFormat="yyyy-MM-dd"
                          />
                        )}
                      </Field>
                      {errors.dob && touched.dob && (
                        <div className="text-danger">{errors.dob}</div>
                      )}
                    </div>

                    <Button name="Create Account" />
                  </form>
                )}
              </Formik>
            </MDBCardBody>
          </MDBCard>

          <Border color="white" />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default SignUp;
