import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UsuarioProvider } from "../../providers/usuario";
import { IUsuario } from "../../interfaces/IUsuario";
import { UsuarioAddPage } from "../usuario-add/usuario-add";
import { UsuarioDetailsPage } from "../usuario-details/usuario-details";

@Component({
  selector: 'page-usuario-list',
  templateUrl: 'usuario-list.html'
})

export class UsuarioListPage {
  selectedItem: any;
  icons: string[];
  items: Array<IUsuario>;
  pesquisa: string;
  visibilidade: boolean;
  itemsFilter: Array<IUsuario>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public UsuarioProvider: UsuarioProvider) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.visibilidade = false;
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(UsuarioDetailsPage, {
      item: item
    });
  }

  voltarPagina() {
    this.navCtrl.pop();
  }

  novoItem(event, item) {
    this.navCtrl.push(UsuarioAddPage, {});
  }

  abrirPesquisa(event) {
    this.visibilidade = true;
  }

  pesquisar(event) {
    this.itemsFilter = this.items.filter((i) => {
      if (i.username.indexOf(this.pesquisa) >= 0) {
        return true;
      }
      return false;
    })
  }

  cancelarPesquisa() {
    this.visibilidade = false;
    this.pesquisa = "";
    this.pesquisar(null);
  }

  ionViewWillEnter() {
    this.items = this.UsuarioProvider.getUsuarios();
    this.itemsFilter = this.items;
  }

}
