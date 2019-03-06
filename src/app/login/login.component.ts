import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  userInfo = {
    username: '',
    password: ''
  };
  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() {
    if (this.userInfo.username === 'test' && this.userInfo.password === 'test') {
      localStorage.setItem('currentUser', 'true');
      this.router.navigate(['/todo']);
    }
  }
}
