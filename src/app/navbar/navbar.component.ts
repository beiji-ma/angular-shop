import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user = JSON.parse(window.localStorage.getItem('user_info') || '{}')

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  signout(e: any) {
    e.preventDefault()
    window.localStorage.removeItem('auth_token')
    this.router.navigate(['/signin'])
  }
}
