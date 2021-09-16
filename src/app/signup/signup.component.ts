import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm = {
    name: '',
    email: '',
    password: ''
  }

  err_message = ''

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  signup() {
    const formData = this.signupForm
    this.http.post('http://localhost:3000/api/register', formData)
      .toPromise()
      .then((data: any) => {
        console.log(data)
        window.localStorage.setItem('auth_token', data.token)
        this.err_message = ''
        this.router.navigate(['/'])
      })
      .catch(err => {
        if (err.status == 409) {
          this.err_message = "邮箱或者密码错误！"
        }
      })
  }
}
