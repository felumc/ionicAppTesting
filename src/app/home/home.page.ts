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
    },
    {
      name: 'Cards',
      route: '/cards',
      icon: 'card',
      color: 'danger'
    },
    {
      name: 'Chips',
      route: '/chips',
      icon: 'chatbubbles',
      color: 'tertiary'
    },
    {
      name: 'Avatar',
      route: '/avatar',
      icon: 'person',
      color: 'secondary'
    },
    {
      name: 'Datetime',
      route: '/datetime',
      icon: 'calendar',
      color: 'medium'
    },
    {
      name: 'List',
      route: '/list',
      icon: 'list',
      color: 'dark'
    },
    {
      name: 'Picker',
      route: '/picker',
      icon: 'location',
      color: 'danger'
    },
    {
      name: 'items',
      route: '/items',
      icon: 'cart',
      color: 'success'
    },
    {
      name: 'fab',
      route: '/fab',
      icon: 'balloon',
      color: 'warning'
    }
  ];

  constructor() {}

}
