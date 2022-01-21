import todosApi from "../api/todosApi";

export const login = async (credentials) =>
  todosApi.post(`/v1/users/login`, credentials);

export const register = async (email, password) =>
  todosApi.post(`/v1/users`, { email, password });

const authService = { login, register };

export default authService;
