import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EFormLogin, LoginResponse } from './interfaces/form-login.enum';
import { AxiosAdapter } from 'src/app/common/adapters/axios.adapter';
import { ILoginResponse } from './interfaces/login-response.interface';
import { EPathEndPoint } from 'src/app/common/enums/path-endpoint.enum';
import { switchAlert } from 'src/app/common/alert';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  constructor(
    private readonly http: AxiosAdapter,
    private readonly loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formLogin = this.initForm();
  }

  initForm(): FormGroup {
    return new FormGroup({
      [EFormLogin.email]: new FormControl('', [
        Validators.required,
        Validators.maxLength(50),
        Validators.email,
      ]),
      [EFormLogin.password]: new FormControl('', [
        Validators.required,
        Validators.maxLength(30),
      ]),
    });
  }

  async login() {
    if (this.formLogin.valid) {
      const data = new LoginResponse(
        this.getFormValue(EFormLogin.email),
        this.getFormValue(EFormLogin.password)
      );
      const response = await this.http.post({
        path: EPathEndPoint.login,
        data,
      });
      this.loginService.saveToken(response);
      this.router.navigate(['/dashboard']);
    } else {
      const text = Object.keys(this.formLogin.controls).find((key) => {
        const input = this.formLogin.get(key);
        return input.invalid;
      });
      switchAlert({
        icon: 'error',
        title: 'Error en los Datos!',
        text: `Ingresar los datos correcto: ${text}`,
      });
    }
  }

  getFormValue(fieldName: EFormLogin) {
    return this.formLogin.get(fieldName).value;
  }
}
