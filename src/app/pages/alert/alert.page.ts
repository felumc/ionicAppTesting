import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { alumno } from 'src/app/interfaces/route.interface';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  misAlumnos : alumno[] = [];

  constructor(
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'This is an alert message.'
    });

    await alert.present();
  }

  async presentAlertWithButtons() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'With Buttons',
      message: 'This is an alert message.',
      buttons: ['OK', 'Cancel']
    });

    await alert.present();
  }

  async selectPizza() {
    const alert = await this.alertController.create({
      header: 'Select Pizza',
      inputs: [
        {
          name: 'pizza',
          type: 'radio',
          label: 'Pepperoni',
          value: 'pepperoni',
          checked: true
        },
        {
          name: 'pizza',
          type: 'radio',
          label: 'Cheese',
          value: 'cheese'
        },
        {
          name: 'pizza',
          type: 'radio',
          label: 'Mushroom',
          value: 'mushroom'
        },
        {
          name: 'pizza',
          type: 'radio',
          label: 'Sausage',
          value: 'sausage'
        },
        {
          name: 'pizza',
          type: 'radio',
          label: 'Onion',
          value: 'onion'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log('Radio data:', data);
          }
        }
      ]
    });

    await alert.present();
  }

  async login() {
    const alert = await this.alertController.create({
      header: 'Login',
      inputs: [
        {
          name: 'username',
          type: 'text',
          placeholder: 'Username'
        },
        {
          name: 'password',
          type: 'password',
          placeholder: 'Password'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Login',
          handler: (data) => {
            console.log('Login data:', data);
          }
        }
      ]
    });

    await alert.present();
  }

  async register() {
    const alert = await this.alertController.create({
      header: 'Register',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Nombre del alumno'
        },
        {
          name: 'matricula',
          type: 'text',
          placeholder: 'Matricula'
        },
        {
          name: 'email',
          type: 'email',
          placeholder: 'Email'
        },
        {
          name: 'password',
          type: 'password',
          placeholder: 'Password'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        }, {
          text: 'Register',
          handler: (data) => {
            console.log('Register data:', data);
            this.misAlumnos.push(data);
          }
        }
      ]
    });
    
    await alert.present();
  }

  async deleteUser(matricula: string) {
    const alert = await this.alertController.create({
      header: 'Eliminar Alumno',
      message: '¿Estás seguro de eliminar este alumno?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        }, {
          text: 'Eliminar',
          handler: () => {
            console.log('Eliminar Alumno');
            this.misAlumnos = this.misAlumnos.filter((alumno) => alumno.matricula !== matricula);
          }
        }
      ]
    });

    await alert.present();
  }
}
