import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  public contacts: any = []

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    const token: any = window.localStorage.getItem('auth_token')
    // console.log(token)
    this.http.get('http://localhost:4000/users')
      .toPromise()
      .then((data: any) => {
        console.log(data.data.books[0])
        this.contacts = data.data.books
      })
      .catch(err => {
        console.log(err)
      })
  }

}
