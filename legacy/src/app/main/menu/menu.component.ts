import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../../security/login/login.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css'],
    standalone: true,
    imports: [RouterLink, RouterLinkActive, LoginComponent]
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
