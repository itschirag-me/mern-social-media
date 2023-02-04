import { useFormik } from "formik";
import React from "react";
import { HiOutlineMail, HiOutlineKey } from "react-icons/hi";
import Input from "../components/Input";
import * as Yup from "yup"

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
        email: Yup.string().email("Please enter valid email").required("Please enter email"),
        password: Yup.string().min(6, "Password should be at least 6").required("Please enter password")
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const formData = [
    {
      name: "email",
      type: "email",
      placeholder: "Enter email",
      icon: <HiOutlineMail />,
      value: formik.values.email,
      error: formik.errors.email,
      touch: formik.touched.email,
    },
    {
        name: "password",
        type: "password",
        placeholder: "Enter Password",
        icon: <HiOutlineKey />,
        value: formik.values.password,
        error: formik.errors.password,
        touch: formik.touched.password,
      },
  ];

  console.log(formik)

  return (
    <div className="w-full h-screen flex items-center justify-center p-2 xl:text-sm lg:text-sm md:text-xs text-xs">
      <div className="xl:w-1/4 lg:w-1/4 md:w-1/2 sm:w-1/2 w-full p-6 py-4 border-none xl:border lg:border md:border rounded-sm">
        {formData.map((input) => (
          <Input
            key={input.name}
            type={input.type}
            name={input.name}
            className=""
            onBlur={formik.handleBlur}
            placeholder={input.placeholder}
            icon={input.icon}
            value={input.value}
            onChange={formik.handleChange}
            errorMessage={input.error && input.touch ? input.error : ""}
          />
        ))}
      </div>
    </div>
  );
};

export default Login;
