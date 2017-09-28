import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UsuarioProvider} from "../../providers/usuario";
import {IUsuario} from "../../interfaces/IUsuario";

@IonicPage()
@Component({
  selector: 'page-usuario-add',
  templateUrl: 'usuario-add.html',
})
export class UsuarioAddPage {

  usuario:IUsuario;
  modoEdicao : boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public UsuarioProvider:UsuarioProvider) {

    this.usuario = navParams.get("item");

    if (this.usuario == null) {
      this.modoEdicao = false;
      this.usuario = this.UsuarioProvider.getInstancia();
    }
    else
      this.modoEdicao = true;
  }

  ionViewDidLoad() {
  }

  salvar(evento){

    console.log(this.usuario);

    if (!this.modoEdicao)
      this.UsuarioProvider.adicionarUsuario(this.usuario);
    else
      this.UsuarioProvider.adicionarUsuario(this.usuario);

    this.navCtrl.pop();
  }

  cancelar() {
    this.navCtrl.pop();
  }

}
