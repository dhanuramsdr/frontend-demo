// ============ pages/AddUserPage.tsx ============
import { FormInput } from "./Forminput";
import { useFormSubmit } from "../hooks/customFormSubmit";
import { registerSchema, type registerData } from "../schemas/user.schema";
import { userRegisterMutaion } from "../Api/Reactquery";
import Button from "./Button";

export function AddUserPage() {
  const addUser = userRegisterMutaion();

  const { register, handleSubmit, errors, isSuccess, isError, error } =
    useFormSubmit<registerData>({
      schema: registerSchema,
      defaultValues: {
        name: "",
        email: "",
        password: "",
        roles: "User",
      },
      mutationFn: addUser.mutateAsync,
      onSuccess: (data) => {
        console.log("User added:", data);
        alert("User created successfully!");
      },
    });
  console.log("errors", errors);
  //   if (errors) {
  //     alert("error in input field");
  //   }

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Add New User</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <FormInput
          name="name"
          register={register}
          label="Full Name"
          placeholder="Enter your full name"
          required
        />

        {/* Email Field */}
        <FormInput
          name="email"
          register={register}
          label="Email Address"
          type="email"
          placeholder="user@example.com"
          required
        />

        {/* Password Field */}
        <FormInput
          name="password"
          register={register}
          label="Password"
          type="password"
          placeholder="Create a password"
          required
        />

        {/* Submit Button */}
        <Button className="w-full" variant={"default"} size={"default"}>
          Submit
        </Button>

        {/* Success Message */}
        {isSuccess && (
          <div className="mt-4 p-3 bg-green-100 text-green-700 rounded text-center">
            ✓ User created successfully!
          </div>
        )}

        {/* Error Message */}
        {isError && (
          <div className="mt-4 p-3 bg-red-100 text-red-700 rounded text-center"></div>
        )}
      </form>
    </div>
  );
}
