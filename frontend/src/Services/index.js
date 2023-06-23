import axios from "axios";


const createBackendServer = (baseURL) => {
  const api = axios.create({
    baseURL: `${baseURL}/api/`,
    withCredentials: false,
    headers: {
      Accept: "application/json"
  },
    timeout: 60 * 1000,
  });
  
 
 //Interceptor
    api.interceptors.response.use(
        (response) => response,
        (error) => {
            const message = error?.response?.data?.message;
            error.message = message ?? error.message
            if (error?.response?.data?.errors)
                error.errors = error?.response?.data?.errors;
            return Promise.reject(error)
        })

    const headers = {
        "Content-Type": "multipart/form-data",
    };

    const addUser = async (body) => await api.post(`blockchain-user-data`,body);
    const getAll = async () => await api.get(`get-blockchain-users`);
    const getToday = async () => await api.get(`get-blockchain-users?filter=today`);
    const getWeek = async () => await api.get(`get-blockchain-users?filter=week`);
    const getMonth = async () => await api.get(`get-blockchain-users?filter=month`);
    const getYear = async () => await api.get(`get-blockchain-users?filter=year`);
    const getRound = async (value) => await api.get(`get-blockchain-users?round=${value}`);

    //Returning all the API
    return {
        addUser,
        getAll,
        getToday,
        getWeek,
        getMonth,
        getYear,
        getRound  
    };
};

const apis = createBackendServer("http://jogo-media.pluton.ltd");

export default apis;