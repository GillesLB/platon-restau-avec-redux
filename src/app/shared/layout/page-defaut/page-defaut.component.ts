import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-defaut',
  templateUrl: './page-defaut.component.html',
  styleUrls: ['./page-defaut.component.css']
})
export class PageDefautComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  test() {
    alert('Ok !');
  }
}
