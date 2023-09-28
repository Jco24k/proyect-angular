import { Injectable } from '@angular/core';
import axios, { AxiosInstance, AxiosResponse, HttpStatusCode } from 'axios';
import { ISendData } from '../interfaces/http-adapter.interface';
import { switchAlert } from '../alert';
import { ILoginResponse } from 'src/app/components/login/interfaces/login-response.interface';

@Injectable({
  providedIn: 'root',
})
export class AxiosAdapter {
  private axiosInstance: AxiosInstance = axios.create();
  private url: string = 'http://159.65.96.86:8080/';
  async post<T>({ path, data }: ISendData<T>): Promise<any> {
    try {
      const response = await this.axiosInstance.post<T>(
        this.url + path,
        data,
      );
      return response.data as unknown as ILoginResponse;
    } catch (error) {
      console.log(error);
      if (error.response.data.status === HttpStatusCode.Unauthorized) {
        switchAlert({
          icon: 'error',
          text: 'Imgrese datos correctos',
          title: ' Error la intentar authenticarte',
        });
      }
    }
  }
}
