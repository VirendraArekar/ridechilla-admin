import axios from "axios";
// const API = axios.create({baseURL: process.env.REACT_APP_BASEURL});
// const API = axios.create({baseURL: 'http://localhost/api/v1'});
const API = axios.create({baseURL: 'http://195.35.7.26:8080/api/v1'});

API.interceptors.request.use((req) => {
    if (localStorage.getItem("user")) {
      req.headers.Authorization = `Bearer ${
        JSON.parse(localStorage.getItem("user")).token
      }`;
    }
    return req;
  });

export default API