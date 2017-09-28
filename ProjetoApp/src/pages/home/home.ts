import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LivroDetailsPage } from "../livro-details/livro-details";
import { LivroProvider } from "../../providers/livro";
import { ILivro } from "../../interfaces/ILivro";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  selectedItem: any;
  icons: string[];
  items: Array<ILivro>;
  itemsFilter: Array<ILivro>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public livroProvider: LivroProvider) {
    this.selectedItem = navParams.get('item');
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(LivroDetailsPage, {
      item: item
    });
  }

  ionViewWillEnter() {
    this.items = this.livroProvider.getLivros();
    this.itemsFilter = this.items.filter((i) => {
      if (i.destaque == true) {
        return true;
      }
      return false;
    })
  }
}
