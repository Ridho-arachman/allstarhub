import axios from "axios";

// Membuat instance Axios
const axiosInstance = axios.create({
  baseURL: "https://api.example.com", // Ganti dengan URL API kamu
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
