import { Injectable } from '@angular/core';
import { ILoginResponse } from '../components/login/interfaces/login-response.interface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  saveToken(data: ILoginResponse): void {
    const { accessToken, tokenType } = data;
    localStorage.setItem('token', accessToken);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }

  getDataToken() {
    const token = this.getToken();
    const tokenPayload = JSON.parse(atob(token.split('.')[1]));
    return tokenPayload;
  }
}
