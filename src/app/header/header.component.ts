import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean;
  constructor(private router: Router) { }

  ngOnInit() {
    this.checkLoggedIn();
  }

  checkLoggedIn() {
    if (localStorage.getItem('currentUser')) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

  logout() {
    localStorage.setItem('currentUser', '');
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

}
