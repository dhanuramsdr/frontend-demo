import React from "react";
import { FormInput } from "../component/Forminput";
import { useFormSubmit } from "../hooks/customFormSubmit";
import { loginSchema, type loginData } from "../schemas/user.schema";
import { userLoginMutaion } from "../Api/Reactquery";
import { useNavigate } from "react-router-dom";
import Button from "../component/Button";

function Login() {
  const navigate = useNavigate();
  const loginMutation = userLoginMutaion();
  const { register, error, isError, handleSubmit } = useFormSubmit<loginData>({
    schema: loginSchema,
    defaultValues: {
      email: "",
      password: "",
    },
    mutationFn: loginMutation.mutateAsync,
    onSuccess: (data) => {
      console.log(data);
      alert("login success");
      navigate("/dashboard");
    },
  });
  console.log("error", error);

  return (
    <div className=" border-4 border-blue-400 lg:w-1/2 p-4 mt-32 mx-auto shadow-xl shadow-blue-200 ">
      <h1 className="text-center">Login</h1>
      <form className=" p-4" onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          placeholder="Enter the email"
          label="Email"
          register={register}
          required
        />
        <FormInput
          name="password"
          type="password"
          placeholder="Enter the password"
          label="Password"
          register={register}
          required
        />
        <Button className="w-full" title="Submit" size={"default"}>
          Submit
        </Button>
        {isError && <div className="text-red-400">Error{`${error}`} </div>}
      </form>
    </div>
  );
}

export default Login;
