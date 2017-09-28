import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AutorProvider } from "../../providers/autor";
import { IAutor } from "../../interfaces/IAutor";
import { AutorAddPage } from "../autor-add/autor-add";
import { AutorDetailsPage } from "../autor-details/autor-details";

@Component({
  selector: 'page-autor-list',
  templateUrl: 'autor-list.html'
})

export class AutorListPage {
  selectedItem: any;
  icons: string[];
  items: Array<IAutor>;
  pesquisa: string;
  visibilidade: boolean;
  itemsFilter: Array<IAutor>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public AutorProvider: AutorProvider) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.visibilidade = false;
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(AutorDetailsPage, {
      item: item
    });
  }

  voltarPagina() {
    this.navCtrl.pop();
  }

  novoItem(event, item) {
    this.navCtrl.push(AutorAddPage, {});
  }

  abrirPesquisa(event) {
    this.visibilidade = true;
  }

  pesquisar(event) {
    this.itemsFilter = this.items.filter((i) => {
      if (i.nome.indexOf(this.pesquisa) >= 0) {
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
    this.items = this.AutorProvider.getAutores();
    this.itemsFilter = this.items;
  }

}
