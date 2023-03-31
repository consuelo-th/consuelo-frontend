import http from "./http";

export const getBlogs = () => {
    return http.get("/api/blog")
    
}

export const getOneBlog = (id) => {
    return http.get("/api/blog/" + id)
}

