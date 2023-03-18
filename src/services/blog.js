import http from "./http";


export const getBlogs = () => {
    return http.get("/posts")
    
}

export const getOneBlog = (id) => {
    return http.get("/posts/" + id)
}

