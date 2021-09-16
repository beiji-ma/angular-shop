import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signinForm = {
    email: '',
    password: ''
  }

  err_message = ''

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  signin() {
    // console.log('sss')
    this.http.post('http://localhost:3000/api/login', this.signinForm)
      .toPromise()
      .then((data: any) => {
        // console.log(data)
        window.localStorage.setItem('auth_token', data.token)
        this.router.navigate(['/'])
      })
      .catch(err => {
        // console.log(err)
        if (err.status === 401) {
          this.err_message = '登录失败，邮箱或密码错误！'
        }
      })
  }
}
