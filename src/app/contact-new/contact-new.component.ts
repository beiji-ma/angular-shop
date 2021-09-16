import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-new',
  templateUrl: './contact-new.component.html',
  styleUrls: ['./contact-new.component.css']
})
export class ContactNewComponent implements OnInit {

  formData = {
    name: '',
    author: '',
    description: '',
    category: ''
  }

  constructor() { }

  ngOnInit(): void {
  }
  addContact() {

  }
}
