import http from "./http";

export const getBlogs = () => {
    return http.get("/blog")
    
}

export const getOneBlog = (id) => {
    return http.get("/blog/" + id)
}

