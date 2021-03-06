import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { IUsuario } from "../../interfaces/IUsuario";
import { UsuarioAddPage } from "../usuario-add/usuario-add";
import { UsuarioProvider } from "../../providers/usuario";

@IonicPage()
@Component({
  selector: 'page-usuario-details',
  templateUrl: 'usuario-details.html',
})
export class UsuarioDetailsPage {

  usuario: IUsuario;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController, public usuarioProvider: UsuarioProvider) {
    this.usuario = navParams.get('item');
  }

  ionViewDidLoad() {
  }

  editarItem(event) {
    this.navCtrl.push(UsuarioAddPage, {
      item: this.usuario
    });
  }

  removerItem(event) {

    let confirmar = this.alertCtrl.create({
      title: 'Confirmação',
      message: 'Deseja excluir esse registro?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
          }
        },
        {
          text: 'Excluir',
          handler: () => {
            this.usuarioProvider.removerUsuario(this.usuario);
            this.navCtrl.pop();
          }
        }
      ]
    });

    confirmar.present();
  }

}
