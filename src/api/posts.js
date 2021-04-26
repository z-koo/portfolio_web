import client from "./client";

export const getPosts = () => client.get("/posts");

export const getPostById = (id) => client.get(`/posts/${id}`);

export const createPost = (post) => client.post("/posts/", post);
