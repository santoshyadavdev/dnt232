import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dnt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      console.log('hello');
    }, 3000);
  }

}
