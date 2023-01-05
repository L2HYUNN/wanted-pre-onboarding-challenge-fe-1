import axios, { AxiosError } from "axios";
import { PostFormProps, PostFormReturnProps } from "../types/apiTypes";

const axiosClient = axios.create({
  baseURL: "http://localhost:8080",
});

export const postJoin = async (data: PostFormProps) => {
  try {
    const response = await axiosClient.post<PostFormReturnProps>(
      "/users/create",
      data
    );
    return response;
  } catch (error: unknown) {
    if (error instanceof AxiosError<string>)
      return error.response?.data.details;
  }
};

export const postLogin = async (data: PostFormProps) => {
  try {
    const response = await axiosClient.post<PostFormReturnProps>(
      "/users/login",
      data
    );
    return response;
  } catch (error: unknown) {
    if (error instanceof AxiosError<string>)
      return error.response?.data.details;
  }
};
