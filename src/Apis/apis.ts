import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:8080",
});

interface PostLoginProps {
  [k: string]: FormDataEntryValue;
}

export const postJoin = async (data: PostLoginProps) => {
  try {
    const response = await axiosClient.post("/users/create", data);
    return response;
  } catch ({
    response: {
      data: { details },
    },
  }) {
    return details;
  }
};
