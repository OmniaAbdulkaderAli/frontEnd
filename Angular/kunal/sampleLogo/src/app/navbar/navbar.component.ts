import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  hidden:boolean= false;

  constructor() { }

  ngOnInit(): void {
  }

  show(){
this.hidden=!this.hidden;
console.log("test")

  }
}
