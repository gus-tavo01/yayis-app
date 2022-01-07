import axios from "axios";

const successCb = (response) => response.data;
const errorCb = (error) => {
  const errorPayload = {
    errorMessage: error.toJSON().message,
  };

  return error.response?.data || errorPayload;
};

const api = axios.create({
  baseURL: process.env.REACT_APP_TODOS_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
api.interceptors.response.use(successCb, errorCb);

export default api;
