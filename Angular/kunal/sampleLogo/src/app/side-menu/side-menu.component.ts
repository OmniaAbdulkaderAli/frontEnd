import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  showMe: boolean = false;
  isActive: boolean = true;
  open: boolean = true;

  next = ['fas', 'fa-angle-double-right']
  previous = ['fas', 'fa-angle-double-left ']

  arrowRight = ['fas', 'fa-chevron-right'];
  arrowDown = ['fas', 'fa-chevron-down'];
  openarrow = ['fas', 'fa-angle-double-left']
  closearrow = ['fas', 'fa-angle-double-right']
  hide = ['hide']
  show = ['show']

  toggle: boolean = true;

  constructor() { }

  ngOnInit(): void {


  }


  change() {

    this.open = !this.open;
    if (this.isActive == false && this.open == true) {

      this.test()
    }


  }

  test() {
    this.showMe = !this.showMe;
    this.isActive = !this.isActive


  }

}
