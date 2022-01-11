import todosApi from "../api/todosApi";

export const login = async (credentials) =>
  todosApi.post(`/v1/users/login`, credentials);

const authService = { login };

export default authService;
