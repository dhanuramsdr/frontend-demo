import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import type {
  loginInterface,
  registerInterface,
} from "../interfaces/React-queru-interface/userInterface";
import type { Productinterface } from "../interfaces/React-queru-interface/productInterface";
import { useUserDetails } from "../Globelstate/Store";

const API_URL = import.meta.env.VITE_REACT_APP_API;
//VITE_REACT_APP_API=http://localhost:3500/api/v1
//user
export const userRegisterMutaion = () => {
  return useMutation({
    mutationFn: async (data: registerInterface) => {
      const response = await axios.post(`${API_URL}/user/register`, data);
      return response.data;
    },

    onSuccess(data) {
      console.log(data);
    },
    onError(error) {
      console.log(error);
    },
  });
};

export const userLoginMutaion = () => {
  const { setUserDetails } = useUserDetails();
  return useMutation({
    mutationFn: async (data: loginInterface) => {
      const response = await axios.post(`${API_URL}/user/login`, data);
      return response.data;
    },
    onSuccess(data) {
      console.log(data);
      if (data.user) {
        setUserDetails({
          id: data.user._id,
          name: data.user.name,
          email: data.user.email,
          role: data.user.role,
        });
        localStorage.setItem("role", data.user.role);
      }
    },
    onError(error) {
      console.log(error);
    },
  });
};

//product
export const addProductMutaion = () => {
  return useMutation({
    mutationFn: async (data: Productinterface) => {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("quantity", data.quantity.toString());
      formData.append("categorey", data.categorey);
      formData.append("sellerid", data.sellerid);

      // Append images - important: use 'images' as field name (matches multer config)
      if (data.images && data.images.length > 0) {
        // For multiple files, append each with the same field name
        data.images.forEach((image: File) => {
          formData.append("image", image);
        });
      }
      const response = await axios.post(
        `${API_URL}/product/product`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      return response.data;
    },
    onSuccess(data) {
      console.log(data);
    },
    onError(error) {
      console.log(error);
    },
  });
};

export const getProductMutaion = () => {
  return useQuery({
    queryKey: ["getProducts"],
    queryFn: async () => {
      const response = await axios.get(`${API_URL}/product/allproduct`);
      return response.data.products;
    },
  });
};

export const getProductName = () => {
  return useQuery({
    queryKey: ["gerProductsName"],
    queryFn: async () => {
      const response = await axios.get(`${API_URL}/product/allproductname`);
      return response.data;
    },
  });
};

export const getUsersName = () => {
  return useQuery({
    queryKey: ["getusername"],
    queryFn: async () => {
      const response = await axios.get(`${API_URL}/user/getalluser`);
      return response.data.users;
    },
  });
};

// export const Reactquery = () => {
// const mutaion = useMutation({
//     mutationFn: async (data:userInterface) => {
//       const response = axios.post(`${API_URL}/user/login`, data);
//       return (await response).data;
//     },
//     onSuccess: (data) => {
//       console.log(data);
//     },
//     onError: (err) => {
//       console.error("this is a error ", err.message);
//     },
//   });
// };
