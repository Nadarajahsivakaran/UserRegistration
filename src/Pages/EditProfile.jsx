import React from "react";
import Navbar from "../Components/Navbar";
import Input from "../Components/Input";
import Button from "../Components/Button";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import Spinner from "../Components/Spinner";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { update } from "../Features/authSlice";
import Border from "../Components/Border";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { activeUser, isLoading } = useSelector((state) => state.auth);

  const onSubmit = (values) => {
    dispatch(update(JSON.parse(JSON.stringify(values))));
    navigate("/Home");
  };

  const initialValues = {
    first_name: activeUser.patient?.first_name,
    last_name: activeUser.patient?.last_name,
    email: activeUser.email,
    dob: activeUser.patient?.dob
      ? new Date(activeUser.patient?.dob)
      : new Date(),
    gender: "male",
  };

  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required("First Name is required"),
    last_name: Yup.string().required("Second Name is required"),
    email: Yup.string().required("Email is required"),
    dob: Yup.string().required("Date of Birth  is required"),
    gender: Yup.string().required("Email is required"),
  });

  return (
    <div>
      <Navbar />
      {isLoading ? (
        <>
          <Spinner />
        </>
      ) : (
        <>
          <div className="mx-auto mb-5" style={{ width: "40%" }}>
            <h2 className="text-dark text-center">Edit Profile</h2>
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
                        labelName="First Name"
                        name="first_name"
                        value={values.first_name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.first_name && errors.first_name ? (
                        <div>{errors.first_name}</div>
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
                        <div>{errors.last_name}</div>
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
                    <div>{errors.email}</div>
                  ) : null}

                  <div>
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
                          selected={field.value}
                          onChange={(date) =>
                            form.setFieldValue(field.name, date)
                          }
                          dateFormat="yyyy-MM-dd"
                        />
                      )}
                    </Field>
                    {errors.dob && touched.dob && <div>{errors.dob}</div>}
                  </div>

                  <>
                    <Field name="gender">
                      {({ field }) => (
                        <>
                          <label>
                            <input
                              type="radio"
                              {...field}
                              value="male"
                              checked={field.value === "male"}
                            />
                            Male
                          </label>
                          <label>
                            <input
                              type="radio"
                              {...field}
                              value="female"
                              checked={field.value === "female"}
                            />
                            Female
                          </label>
                          <label>
                            <input
                              type="radio"
                              {...field}
                              value="Other"
                              checked={field.value === "Other"}
                            />
                            Other
                          </label>
                        </>
                      )}
                    </Field>
                  </>

                  <Button name="Update Profile Details" />
                </form>
              )}
            </Formik>
          </div>
          <Border />
        </>
      )}
    </div>
  );
};

export default EditProfile;
