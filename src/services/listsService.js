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

export const addTodo = async (listId, todo) => {
  return todosApi.post(`/v1/lists/${listId}/todos`, todo);
};

export const removeTodo = async (listId, todoId) => {
  return todosApi.delete(`/v1/lists/${listId}/todos/${todoId}`);
};

export const updateTodo = async (listId, todoId, patch) => {
  return todosApi.patch(`/v1/lists/${listId}/todos/${todoId}`, patch);
};

const listsService = {
  get,
  create,
  update,
  remove,
  setToken,
  addTodo,
  removeTodo,
  updateTodo,
};

export default listsService;
