import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/interfaces/route.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  employees: Employee[] = [];

  constructor(
  ) { 
    this.employees = [
      {
        name: 'LuisFe',
        lastname: 'Morales',
        salary: 1000,
        email: 'luis@test.com',
        isActive: true
      },
      {
        name: 'Hendrick',
        lastname: 'Lopez',
        salary: 2000,
        email: 'hen@test.com',
        isActive: false
      }
    ]
  }

  ngOnInit() {
  }

}
