import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AutorProvider } from "../../providers/autor";
import { IAutor } from "../../interfaces/IAutor";

@IonicPage()
@Component({
  selector: 'page-autor-add',
  templateUrl: 'autor-add.html',
})
export class AutorAddPage {
  //titulo:string;
  //ano:number;
  autor: IAutor;
  modoEdicao: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public autorProvider: AutorProvider) {

    this.autor = navParams.get("item");

    if (this.autor == null) {
      this.modoEdicao = false;
      this.autor = this.autorProvider.getInstancia();
    }
    else
      this.modoEdicao = true;
  }

  salvar(evento) {

    if (!this.modoEdicao)
      this.autorProvider.alterarAutor(this.autor);
    else
      this.autorProvider.alterarAutor(this.autor);

    this.navCtrl.pop();
  }

  cancelar() {
    this.navCtrl.pop();
  }

}
