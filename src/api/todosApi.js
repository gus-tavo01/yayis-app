import axios from "axios";

const successCb = (response) => response.data;
const errorCb = (error) => {
  const errorPayload = {
    errorMessage: error.toJSON().message,
  };

  const payload = error.response?.data || errorPayload;

  console.log("## axios error CB");

  return payload;
};

const api = axios.create({
  baseURL: process.env.REACT_APP_TODOS_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
api.interceptors.response.use(successCb, errorCb);

export default api;
