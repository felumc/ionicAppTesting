import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Cars } from 'src/app/interfaces/route.interface';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.page.html',
  styleUrls: ['./cards.page.scss'],
})
export class CardsPage implements OnInit {

  cars: Cars[] = [
    {
      model: 'Porsche Cayenne',
      price: 120000,
      photoUrl: "https://files.porsche.com/filestore/image/multimedia/none/e3-2nd-cayenne-modelimage-sideshot/model/0a22d5be-8859-11ee-810c-005056bbdc38/porsche-model.png",
      color: 'Midnight Blue'
    },
    {
      model: 'Porsche 911',
      price: 150000,
      photoUrl: "https://files.porsche.com/filestore/image/multimedia/none/992-gt3-rs-modelimage-sideshot/model/cfbb8ed3-1a15-11ed-80f5-005056bbdc38/porsche-model.png",
      color: 'Clear Gray'
    },
    {
      model: 'Porsche Macan T',
      price: 110000,
      photoUrl: "https://files.porsche.com/filestore/image/multimedia/none/pa3-t-modelimage-sideshot/model/7edcc317-7868-11ec-80e7-005056bbdc38/porsche-model.png",
      color: 'Bright White'
    },
    {
      model: 'Porsche Taycan',
      price: 135000,
      photoUrl: "https://images-porsche.imgix.net/-/media/261EF9F86B2B4F45AC57EA8D26C3B081_DEA4D16CCC6B4E25BC7473D4DE1927FB_TA24Q3BIX0010-taycan-side?w=2560&h=802&q=45&crop=faces%2Centropy%2Cedges&auto=format",
      color: 'Cream Green'
    }
  ];

  constructor(
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  async presentAlert(model: string) {
    const alert = await this.alertController.create({
      header: 'Welcome to Porsche',
      message: 'The new ' + model + ' will be delivered in 3 days',
      buttons: ['OK']
    });

    await alert.present();
  }
}
