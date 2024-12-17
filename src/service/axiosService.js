import axios from "axios";

//axios service 공통 추가 필요 2024.12.13
export const axiosService = () => {

    return axios.create({
        baseURL: process.env.REACT_APP_BASEURL
    })
}