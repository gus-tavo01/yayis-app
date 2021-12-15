import todosApi from "../api/todosApi";

export const getLists = (params) => todosApi.get("/lists", { params });
export const postList = (list) => todosApi.post("/lists", list);

const todosService = { getLists, postList };

export default todosService;
