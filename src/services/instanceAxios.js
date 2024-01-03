import axios from "axios";

const instance = () => {
    const instance = axios.create({
        baseURL: "https://localhost:7080/api/",
        timeout: 10000000,
    });

    instance.interceptors.request.use(
        (config) => {
            const token = localStorage.getItem("token");
            if (token) {
                config.headers["Authorization"] = "Bearer " + token;
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    // instance.interceptors.response.use(
    //     (response) => {
    //         return response.data;
    //     },
    //     async (error) => {
    //         const originalRequest = error.config;
    //         if (error.response.status === 401 && !originalRequest._retry) {
    //             originalRequest._retry = true;
    //             var refreshToken = localStorage.getItem("refreshToken");
    //             var token = localStorage.getItem("token");
    //             if (refreshToken) {
    //                 try {
    //                     const response = await axios.post(
    //                         "http://localhost:5107/api/auth/refreshToken",
    //                         { token, refreshToken }
    //                     );
    //                     token = response.data.data.token;
    //                     refreshToken = response.data.data.refreshToken;
    //                     localStorage.setItem("token", token);
    //                     localStorage.setItem("refreshToken", refreshToken);
    //                     originalRequest.headers["Authorization"] = "Bearer " + token;
    //                     return axios(originalRequest);
    //                 } catch (error) {
    //                     // Handle refresh token error
    //                     window.location.href = "/";
    //                     // return Promise.reject(error);
    //                 }
    //             } else {
    //                 window.location.href = "/";
    //                 // Handle missing refresh token error
    //                 // return Promise.reject(error);
    //             }
    //         }
    //         return Promise.reject(error.response.data);
    //     }
    // );

    return instance;
};



export default instance;