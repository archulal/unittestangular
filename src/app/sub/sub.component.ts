import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.scss']
})
export class SubComponent implements OnInit {

  count: any;
  message: any;
  constructor() { }

  ngOnInit() {
    this.count = 0;
  }
  add() {
    this.count++;
  }
  sub() {
    this.count--;
  }
  submit(name) {
    console.log('name', name);
    this.message = 'Welcome ' + name + ' !';
  }
}
