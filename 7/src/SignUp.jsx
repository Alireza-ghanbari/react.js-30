import React, { useState } from "react";
import { Form, Formik, Field } from "formik";
import { fromValidation } from "./Schema";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function SignUp() {
  const [formData, setFormData] = useState(null);
  console.log(formData);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={fromValidation}
      onSubmit={(values, actions) => {
        setFormData(values);
        actions.resetForm();
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form>
          <Field type="text" name="name" placeholder="Enter name" />
          {errors.name && touched.name && <p>{errors.name}</p>}
          <Field type="text" name="email" placeholder="Enter email" />
          {errors.email && touched.email && <p>{errors.email}</p>}
          <Field type="password" name="password" placeholder="Enter password" />
          {errors.password && touched.password && <p>{errors.password}</p>}
          <Field
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
          />
          {errors.confirmPassword && touched.confirmPassword && (
            <p>{errors.confirmPassword}</p>
          )}

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}
