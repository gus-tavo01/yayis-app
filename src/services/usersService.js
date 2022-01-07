import todosApi from "../api/todosApi";

export const setToken = (token) => {
  todosApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const get = async (params) => todosApi.get(`/v1/users`, { params });

export const create = async () => {};

export const remove = async () => {};

export const update = async () => {};

const usersService = { create, remove, update, get, setToken };

export default usersService;
