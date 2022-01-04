import todosApi from "../api/todosApi";

export const get = async (params) => todosApi.get("/v1/themes", { params });

const themesService = { get };

export default themesService;
