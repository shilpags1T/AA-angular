import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginAuthenticationService } from '../_services/login-authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,private loginAuthenticationService:LoginAuthenticationService) { }

  ngOnInit() {
  }

  logout(){
    this.loginAuthenticationService.logout(); 
  }
}
