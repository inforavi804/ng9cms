import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menusidebar',
  templateUrl: './menusidebar.component.html',
  styleUrls: ['./menusidebar.component.scss']
})
export class MenusidebarComponent implements OnInit {

    navbarOpen = true;
    constructor() { }

    ngOnInit(): void {
    }

    toggleNavbar(){
        this.navbarOpen = !this.navbarOpen;
    }

}
