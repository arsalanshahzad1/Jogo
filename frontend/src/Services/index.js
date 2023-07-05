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
    const getdata = async (body) => await api.get(`get-blockchain-users?filter=${body}`);
    const getRound = async (body) => await api.get(`get-blockchain-users?round=${body}`);


    const getStatistics = async () => await api.get(`get-blockchain-users-month-vice`);
    const getStatisticsMonthly = async () => await api.get(`get-blockchain-users-month-vice?all_months`);
   
   
   
    //Returning all the API
    return {
        addUser,
        getAll,
        getdata,
        getRound,
        getStatistics,
        getStatisticsMonthly
    };
};

const apis = createBackendServer("https://jogo-media.pluton.ltd");

export default apis;