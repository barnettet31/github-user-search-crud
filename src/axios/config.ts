import axios from "axios";
const axiosApi = axios.create({
    baseURL: "https://api.github.com/users",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/vnd.github.v3+json"
    }
})

export default axiosApi;