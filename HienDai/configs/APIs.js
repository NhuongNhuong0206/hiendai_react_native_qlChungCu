import axios from "axios";

const BASE_URL = "https://phanhoangtrieu.pythonanywhere.com/";

export const endpoints = {
    login: "o/token/",
    home: (userId) => `User/${userId}/home/`,
    getUser: "User/get_user/",
    postInfoUser: "Info/create_passForgot/",
    changPass: "Info/reset_password/",
};

export const authAPI = (token) => {
    return axios.create({
        baseURL: BASE_URL,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

export default axios.create({
    baseURL: BASE_URL,
});
