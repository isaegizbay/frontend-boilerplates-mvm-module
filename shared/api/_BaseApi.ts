import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const createAxiosInstance = () => {
  const a = axios.create({
    baseURL: 'https://someapi.domain/api/v1',
  });

  a.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  a.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    }
  );
  return a;
};

export class BaseApi {
  private static axios: AxiosInstance = createAxiosInstance();

  protected static async get<T = any>(
    path: string,
    config?: AxiosRequestConfig
  ): Promise<T> {
    try {
      const response = await this.axios.get<T>(path, config);
      return response.data;
    } catch (error) {
      console.error('Error in BaseApi class');
      throw error;
    }
  }

  protected static async post<T = any>(
    path: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    try {
      const response = await this.axios.post<T>(path, data, config);
      return response.data;
    } catch (error) {
      console.error('Error in BaseApi class');
      throw error;
    }
  }

  protected static async put<T = any>(
    path: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    try {
      const response = await this.axios.put<T>(path, data, config);
      return response.data;
    } catch (error) {
      console.error('Error in BaseApi class');
      throw error;
    }
  }

  protected static async patch<T = any>(
    path: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    try {
      const response = await this.axios.patch<T>(path, data, config);
      return response.data;
    } catch (error) {
      console.error('Error in BaseApi class');
      throw error;
    }
  }

  protected static async delete<T = any>(
    path: string,
    config?: AxiosRequestConfig
  ): Promise<T> {
    try {
      const response = await this.axios.delete<T>(path, config);
      return response.data;
    } catch (error) {
      console.error('Error in BaseApi class');
      throw error;
    }
  }
}
