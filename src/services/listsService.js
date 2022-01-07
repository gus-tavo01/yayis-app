import todosApi from "../api/todosApi";

export const setToken = (token) => {
  todosApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const get = async (userId, params) => {
  return todosApi.get(`/v1/users/${userId}/lists`, {
    params,
  });
};

export const create = async (userId, list) => {
  return todosApi.post(`/v1/users/${userId}/lists`, list);
};

export const remove = async (userId, listId) => {
  return todosApi.delete(`/v1/users/${userId}/lists/${listId}`);
};

export const update = async (userId, listId, list) => {
  return todosApi.patch(`/v1/users/${userId}/lists/${listId}`, list);
};

const listsService = { get, create, update, remove, setToken };

export default listsService;
