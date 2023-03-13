'use strict';
import axios from 'axios';

const jsonConfig: object = {
  timeout: 30000,
  headers: { 'Content-Type': 'application/json' },
};

const postConfig: object = {
  timeout: 30000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  },
};

export const getAxios = async (url: string, params: object) => {
  try {
    const res = await axios({
      method: 'get',
      url,
      ...jsonConfig,
      params: params,
      data: {},
    });
    return res.data;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const postAxios = async (url: string, params: object) => {
  try {
    const res = await axios({
      method: 'post',
      url,
      ...postConfig,
      data: params,
    });
    return res.data;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const postAxiosJsonHeader = async (url: string, params: object) => {
  try {
    const res = await axios({
      method: 'post',
      url,
      ...jsonConfig,
      data: params,
    });
    return res.data;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const getAxiosWithMessage = async (
  url: string,
  params: object,
  successCallback: any,
  errorCallback: any,
) => {
  await axios({
    method: 'get',
    url,
    ...jsonConfig,
    params: params,
    data: {},
  })
    .then(res => successCallback(res.data))
    .catch(error => {
      if (error.response) {
        errorCallback(error.response);
      }
    });
};

export const postAxiosJsonWithMessage = async (
  url: string,
  params: object,
  successCallback: any,
  errorCallback: any,
) => {
  await axios({
    method: 'post',
    url,
    ...jsonConfig,
    data: params,
  })
    .then(res => successCallback(res.data))
    .catch(error => {
      if (error.response) {
        errorCallback(error.response);
      }
    });
};
