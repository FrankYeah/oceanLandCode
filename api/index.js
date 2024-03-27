import axios from 'axios';

const baseUrl = 'http://feifeistoryhouse.org:8090/seaWithKeelung'

export const getAllStore = async () => {
    return (await axios.get(`${baseUrl}/api/dataItem`)).data;
};

export const getStoreById = (id) => {
    return axios.get(`${baseUrl}/api/dataItem/${id}`);
};

export const getStoreByType = async (dataType) => {
    return (await axios.get(`${baseUrl}/api/dataItem/dataType/${dataType}`)).data;
};