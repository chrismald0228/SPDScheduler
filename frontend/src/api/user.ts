import api from "./client"

export const userApi = {
    getAll: () => api.get("/users/")
};