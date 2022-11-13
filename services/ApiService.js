import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const getPosts = () => instance.get("/posts");
export const getPostById = (id) => instance.get(`/posts/${id}`);

export const getUserById = (id) => instance.get(`/users/${id}`);

export const getCommentsByPostId = (id) =>
  instance.get(`/posts/${id}/comments`);
