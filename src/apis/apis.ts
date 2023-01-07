import axios, { AxiosError } from "axios";
import {
  DeleteToDoProps,
  PostFormProps,
  PostFormReturnProps,
  PostToDoReturnProp,
} from "../types/apiTypes";
import tokenLoader from "../utils/tokenLoader";

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

export const getTodos = async () => {
  try {
    const token = tokenLoader();
    const response = await axiosClient.get("/todos", {
      headers: { Authorization: token },
    });
    return response;
  } catch (error: unknown) {
    if (error instanceof AxiosError<string>)
      return error.response?.data.details;
  }
};

export const getTodo = async (id: string) => {
  try {
    const token = tokenLoader();
    const response = await axiosClient.get(`/todos/${id}`, {
      headers: { Authorization: token },
    });
    return response;
  } catch (error: unknown) {
    if (error instanceof AxiosError<string>)
      return error.response?.data.details;
  }
};

export const postCreateTodo = async (data: PostFormProps) => {
  try {
    const token = tokenLoader();
    const response = await axiosClient.post<PostToDoReturnProp>(
      "/todos",
      data,
      {
        headers: { Authorization: token },
      }
    );
    return response;
  } catch (error: unknown) {
    if (error instanceof AxiosError<string>)
      return error.response?.data.details;
  }
};

export const deleteTodo = async (id: string) => {
  try {
    const token = tokenLoader();
    const response = await axiosClient.delete<DeleteToDoProps>(`/todos/${id}`, {
      headers: { Authorization: token },
    });
    return response;
  } catch (error: unknown) {
    if (error instanceof AxiosError<string>) return error.response?.data.data;
  }
};
