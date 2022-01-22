import todosApi from "../api/todosApi";

export const setToken = (token) => {
  todosApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const get = async (params) => todosApi.get(`/v1/users`, { params });

export const update = async (userId, patch) =>
  todosApi.patch(`/v1/users/${userId}`, patch);

export const remove = async (userId) => todosApi.delete(`/v1/users/${userId}`);

const usersService = { remove, update, get, setToken };

export default usersService;
