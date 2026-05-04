// ============ pages/AddUserPage.tsx ============
import { FormInput } from "./Forminput";
import { useFormSubmit } from "../hooks/customFormSubmit";
import { addProductMutaion } from "../Api/Reactquery";
import Button from "./Button";
import type { Productinterface } from "../interfaces/React-queru-interface/productInterface";
import { productSchema } from "../schemas/product.schems";
import { useHeaderStore } from "../Globelstate/Store";

export default function Productform() {
  const addProduct = addProductMutaion();
  const { header } = useHeaderStore();
  const { register, handleSubmit, errors, setValue, control } =
    useFormSubmit<Productinterface>({
      schema: productSchema,
      defaultValues: {
        name: "",
        quantity: 0,
        categorey: "",
        images: [],
        sellerid: "69db444e762c730bf60bc594",
      },
      mutationFn: addProduct.mutateAsync,
      onSuccess: (data) => {
        console.log("User added:", data);
        alert("product created successfully!");
      },
    });
  console.log("errors", errors);
  //   if (errors) {
  //     alert("error in input field");
  //   }

  return (
    <div
      className={`w-full p-6 border-4 border-gray-600 ${header ? "mt-15" : "mt-0"}`}
    >
      <h1 className="text-2xl font-bold mb-6 text-center">Add New Product</h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 lg:grid grid-cols-2 gap-5 "
      >
        {/* Name Field */}
        <FormInput
          name="name"
          register={register}
          label="Name"
          placeholder="Enter your full name"
          required
        />

        {/* Email Field */}
        <FormInput
          name="quantity"
          register={register}
          label="quantity"
          type="number"
          placeholder="Enter the quantity"
          required
        />

        {/* Password Field */}
        <FormInput
          name="categorey"
          register={register}
          label="Categorey"
          type="text"
          placeholder="Enter the categorey type"
          required
        />

        <FormInput
          name="images"
          register={register}
          setValue={setValue}
          control={control}
          label="Product Images"
          type="file"
          required
          multiple={true}
          accept="image/*"
        />
        <div className=" lg:col-span-2 flex justify-center gap-2 mt-2  ">
          <Button className="w-1/6 " variant={"submit"} size={"default"}>
            Submit
          </Button>
          <Button className="w-1/6" variant={"reset"} size={"default"}>
            Reset
          </Button>
        </div>
        {/* Submit Button */}

        {/* 
        {isSuccess && (
          <div className="mt-4 p-3 bg-green-100 text-green-700 rounded text-center">
            ✓ User created successfully!
          </div>
        )}

        {isError && (
          <div className="mt-4 p-3 bg-red-100 text-red-700 rounded text-center"></div>
        )} */}
      </form>
    </div>
  );
}
