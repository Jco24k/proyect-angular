import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { MenuLateralComponent } from 'src/app/shared/menu-lateral/menu-lateral.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {

  }
}
