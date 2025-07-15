import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

import { transform, isFunction } from "./helper.ts";
// import userStore from "@/store/user";

let instance: AxiosInstance;
let currentBaseURL: string;

// 创建 Axios 实例
const createAxiosInstance = (baseURL: string) => {
  instance = axios.create({
    baseURL,
    timeout: 30000,
    headers: {
      "Content-Type": "application/json",
    },
  });

  // 添加请求拦截器
  instance.interceptors.request.use(
    (config: AxiosRequestConfig | any) => {
      // 用参数传入
      // const origin = userStore.getClientOrigin() || window.location.origin;
      // const platform = userStore.getClientOrigin() ? "web" : "";
      // const channelId = userStore.getChannelId() ? userStore.getChannelId() : "";
      // config.headers["client-origin"] = `${origin}`;
      // config.headers["client-channel-id"] = `${channelId}`;
      // config.headers["platform"] = `${platform}`;
      // config.headers["Authorization"] = `Thor ${userStore.getToken()}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // 添加响应拦截器
  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};

export const request = <T = any>(
  config: AxiosRequestConfig,
  baseURL: string,
  options?: any,
  callback?: Function,
): Promise<T> => {
  console.log('000---request---', config, baseURL, options, callback);
  if (!currentBaseURL || currentBaseURL !== baseURL) {
    createAxiosInstance(baseURL);
    currentBaseURL = baseURL;
  }

  return new Promise((resolve, reject) => {
    instance
      .request<any, AxiosResponse<any>>(config)
      .then((res: any) => {
        const { transformRequestHook } = transform;
        if (transformRequestHook && isFunction(transformRequestHook)) {
          let ret = transformRequestHook(res, options, callback);
          if (ret) {
            resolve(ret);
          }
        }
      })
      .catch((e) => {
        reject(e);
      });
  });
}

module.exports = {
  request,
};
