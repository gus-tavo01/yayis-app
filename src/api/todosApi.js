import axios from "axios";

const successCb = (response) => response.data;
const errorCb = (error) => {
  const errorPayload = {
    errorMessage: error.toJSON().message,
  };

  const payload = error.response?.data || errorPayload;

  console.log("# on axios error CB");

  return payload;
};

const api = axios.create({
  baseURL: "apiUrl", // TODO: get from env
  headers: {
    "Content-Type": "application/json",
  },
});
api.interceptors.response.use(successCb, errorCb);

// export default api;

const fakeApi = {
  get: async (params) => [
    { id: "333ll", name: "Test", description: "Test description", todos: [] },
    { id: "444", name: "Cena", description: "Test description", todos: [] },
    { id: "555", name: "Comida", description: "Test description", todos: [] },
    { id: "666", name: "Desayuno", description: "Test description", todos: [] },
    { id: "777", name: "Postre", description: "Test description", todos: [] },
  ],
};

export default fakeApi;
