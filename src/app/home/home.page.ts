import { Component } from '@angular/core';
import { routeComponent } from '../interfaces/route.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  name: string = 'LuisFe Morales';

  menu: routeComponent[] = [
    {
      name: 'Action Sheet',
      route: '/action-sheet',
      icon: 'rocket',
      color: 'primary'
    },
    {
      name: 'Alert',
      route: '/alert',
      icon: 'alert',
      color: 'warning'
    },
    {
      name: 'Buttons',
      route: '/buttons',
      icon: 'cash',
      color: 'success'
    }
  ];

  constructor() {}

}
