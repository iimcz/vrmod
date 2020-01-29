import { Component, OnInit } from '@angular/core';
import { baseUrl } from '../app.site-config';

@Component({
  selector: 'vrmod-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  private myUrl = baseUrl;

  constructor() { }

  ngOnInit() {
  }

}
