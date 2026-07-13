import axios from "axios";

export const baseURL = import.meta.env.VITE_BASE_URL;

export const protectedAxiosInstance = axios.create({
    baseURL,
    timeout: 15000,
    withCredentials: true 
});

protectedAxiosInstance.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error){
        return Promise.reject(error);
    }
);


let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
    failedQueue.forEach(prom => {
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve(token);
        }
    });
    failedQueue = [];
};

protectedAxiosInstance.interceptors.response.use(
    function (response) {
        return response;
    },
    async function (error) {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {            
            if (isRefreshing) {
                return new Promise(function(resolve, reject) {
                    failedQueue.push({ resolve, reject });
                })
                .then(() => {
                    return protectedAxiosInstance(originalRequest);
                })
                .catch(err => {
                    return Promise.reject(err);
                });
            }

            originalRequest._retry = true;
            isRefreshing = true;

            try {
                await axios.post(`${baseURL}/auth/refresh`, {}, { withCredentials: true });
                
                isRefreshing = false;
                processQueue(null);
                return protectedAxiosInstance(originalRequest);
            } catch (refreshError) {
                isRefreshing = false;
                processQueue(refreshError, null);
                
                window.location.href = "/";                 
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);