// import { useFormik } from "formik";
// import React, { useState } from "react";
// import { fromValidation } from "./Schema";

// const initialValues = {
//   name: "",
//   age: "",
//   email: "",
//   password: "",
// };

// export default function App() {
//   const [formData, setFormData] = useState(null);

//   const {
//     handleChange,
//     handleBlur,
//     handleSubmit,
//     resetForm,
//     isSubmitting,
//     touched,
//     values,
//     errors,
//   } = useFormik({
//     initialValues,
//     validationSchema: fromValidation,
//     onSubmit: (values) => {
//       setFormData(values);
//       resetForm()
//     },
//   });

//   console.log(formData);

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:{" "}
//           <input
//             type="text"
//             placeholder="Enter Name"
//             name="name"
//             onChange={handleChange}
//             onBlur={handleBlur}
//             value={values.name}
//           />
//         </label>
//         {errors.name && touched.name && <p>{errors.name}</p>}
//         <label>
//           Age:{" "}
//           <input
//             type="number"
//             placeholder="Enter Age"
//             name="age"
//             onChange={handleChange}
//             onBlur={handleBlur}
//             value={values.age}
//           />
//         </label>
//         {errors.age && touched.age && <p>{errors.age}</p>}
//         <label>
//           Email:{" "}
//           <input
//             type="text"
//             placeholder="Enter Email"
//             name="email"
//             onChange={handleChange}
//             onBlur={handleBlur}
//             value={values.email}
//           />
//         </label>
//         {errors.email && touched.email && <p>{errors.email}</p>}
//         <label>
//           Password:{" "}
//           <input
//             type="password"
//             placeholder="Enter Password"
//             name="password"
//             onChange={handleChange}
//             onBlur={handleBlur}
//             value={values.password}
//           />
//         </label>
//         {errors.password && touched.password && <p>{errors.password}</p>}

//         <button disabled={isSubmitting} type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }


import React from 'react'
import SignUp from './SignUp'

export default function App() {
  return (
    <>
      <SignUp />
    </>
  )
}
