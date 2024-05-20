import axios from "axios";

const BASE_URL = "https://phanhoangtrieu.pythonanywhere.com/";

export const endpoints = {
    login: "o/token",
};

export default axios.create({
    baseURL: BASE_URL,
});
