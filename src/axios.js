import axios from "axios";

const Axios = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

Axios.defaults.headers.common["Content-Type"] = "application/json";

export default Axios;
