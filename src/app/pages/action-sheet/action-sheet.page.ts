import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {
  name: string = 'LuisFe Morales';

  constructor(
    private actionSheetController: ActionSheetController,
    private actionSheetController2: ActionSheetController,
  ) { }

  ngOnInit() {
  }

  async openActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      mode: 'ios',
      cssClass: 'my-action-sheet',
      translucent: true,
      header: 'Test',
      subHeader: 'This is a test action sheet',
      buttons: [{
        text: 'Like',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      },
      {
        text: 'More',
        icon: 'eye',
        handler: () => {
          console.log('Read more clicked');
        }
      },
      {
        text: 'Trash',
        icon: 'trash',
        role: 'destructive',
        handler: () => {
          console.log('Trash clicked');
        }
      },
      {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
    });

    await actionSheet.present();
  }

  async openActionSheet2(name: string) {
    const actionSheet2 = await this.actionSheetController2.create({
      mode: 'ios',
      translucent: true,
      header: name,
      subHeader: 'This is a test action sheet',
      buttons: [{
        text: 'Call',
        icon: 'call',
        handler: () => {
          console.log('Call clicked');
        }
      },
      {
        text: 'Edit',
        icon: 'create',
        handler: () => {
          console.log('Edit clicked');
        }
      },
      {
        text: 'Delete',
        icon: 'trash',
        role: 'destructive',
        handler: () => {
          console.log('Trash clicked');
        }
      },
      {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
    });

    await actionSheet2.present();
  }
}
