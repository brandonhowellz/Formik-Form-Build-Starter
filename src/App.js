import React from "react";
import { useFormik } from "formik";

function App() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    // Logic to be executed on form submission
    onSubmit: values => {
      // You can perform login logic here
      if (values.email === "example@example.com" && values.password === "password") {
        alert("Login Successful");
      } else {
        alert("Login Failed");
      }
    },
    // Validation rules for the form inputs
    validate: values => {
      const errors = {};

      // Validate email field
      if (!values.email) {
        errors.email = "Field required";
      } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
        errors.email = "Username should be an email";
      }

      // Validate password field
      if (!values.password) {
        errors.password = "Field required";
      }

      return errors;
    },
  });

  return (
    <div>
      {/* Form element */}
      <form onSubmit={formik.handleSubmit}>
        {/* Email input */}
        <label htmlFor="emailField">Email:</label>
        <input
          type="text"
          id="emailField"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {/* Email error message */}
        <div id="emailError" style={{ color: "red" }}>
          {formik.touched.email && formik.errors.email}
        </div>

        {/* Password input */}
        <label htmlFor="pswField">Password:</label>
        <input
          type="password"
          id="pswField"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {/* Password error message */}
        <div id="pswError" style={{ color: "red" }}>
          {formik.touched.password && formik.errors.password}
        </div>

        {/* Submit button */}
        <button type="submit" id="submitBtn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
