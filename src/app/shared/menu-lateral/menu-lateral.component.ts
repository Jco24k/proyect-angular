import { Component, OnInit } from '@angular/core';
import { AuthToken } from 'src/app/common/interfaces/auth.token.interface';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css'],
})
export class MenuLateralComponent implements OnInit {
  ocultar = true;
  sub = "test";
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    const user: AuthToken = this.loginService.getDataToken();
    this.sub = user.sub;
  }

  ocultarMenu(): void {
    this.ocultar = false;
  }

  logout():void{
    this.loginService.logout();
  }
}
