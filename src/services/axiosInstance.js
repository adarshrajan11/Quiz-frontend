import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://your-backend-url.com/api", // Replace with your backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
