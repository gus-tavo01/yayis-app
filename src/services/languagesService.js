import todosApi from "../api/todosApi";

export const get = (params) => todosApi.get("/v1/languages", { params });

const todosService = { get };

export default todosService;
