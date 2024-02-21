import { Component, OnInit } from '@angular/core';
import { PickerController } from '@ionic/angular';

@Component({
  selector: 'app-picker',
  templateUrl: './picker.page.html',
  styleUrls: ['./picker.page.scss'],
})
export class PickerPage implements OnInit {

  constructor(
    private _pickerCtrl: PickerController
    ) { 
  }

  ngOnInit() {
  }

  async selectPizza() {
    const pickerPizza = await this._pickerCtrl.create({
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Done'
        }
      ],
      columns: [
        {
          name: 'Pizza',
          options: [
            { text: 'Pepperoni', value: 'pepperoni' },
            { text: 'Margarita', value: 'margarita' },
            { text: 'Ham and Pineapple', value: 'hamandpineapple' },
            { text: 'Meat Lovers', value: 'meatlovers' }
          ]
        }
      ]
    });

    await pickerPizza.present();
  }

  async selectBurger() {
    const pickerBurger = await this._pickerCtrl.create({
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Done'
        }
      ],
      columns: [
        {
          name: 'Burger',
          options: [
            { text: 'Cheeseburger', value: 'cheeseburger' },
            { text: 'Hamburger', value: 'hamburger' },
            { text: 'Bacon Cheeseburger', value: 'baconcheeseburger' },
            { text: 'Veggie Burger', value: 'veggieburger' }
          ]
        }
      ]
    });

    await pickerBurger.present();
  }
}
