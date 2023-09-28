import { SweetAlertIcon } from 'sweetalert2';

export enum EFormLogin {
  email = 'email',
  password = 'pass',
}

export class LoginResponse {
  username: string;
  password: string;

  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
}
