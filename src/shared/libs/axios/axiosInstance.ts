import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://backofficebacktesting.tgdcompany.com/",
  headers: {
    "Content-Type": "application/json",
  },
});
