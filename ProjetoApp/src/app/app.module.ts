import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SobrePage } from '../pages/sobre/sobre';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LivroListPage } from "../pages/livro-list/livro-list";
import { LivroProvider } from "../providers/livro";
import { LivroAddPage } from "../pages/livro-add/livro-add";
import { LivroDetailsPage } from "../pages/livro-details/livro-details";

import { UsuarioListPage } from "../pages/usuario-list/usuario-list";
import { UsuarioProvider } from "../providers/usuario";
import { UsuarioAddPage } from "../pages/usuario-add/usuario-add";
import { UsuarioDetailsPage } from "../pages/usuario-details/usuario-details";

import { AutorListPage } from "../pages/autor-list/autor-list";
import { AutorProvider } from "../providers/autor";
import { AutorAddPage } from "../pages/autor-add/autor-add";
import { AutorDetailsPage } from "../pages/autor-details/autor-details";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LivroListPage,
    LivroAddPage,
    LivroDetailsPage,
    UsuarioListPage,
    UsuarioAddPage,
    UsuarioDetailsPage,
    AutorListPage,
    AutorAddPage,
    AutorDetailsPage,
    SobrePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LivroListPage,
    LivroAddPage,
    LivroDetailsPage,
    UsuarioListPage,
    UsuarioAddPage,
    UsuarioDetailsPage,
    AutorListPage,
    AutorAddPage,
    AutorDetailsPage,
    SobrePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    LivroProvider,
    UsuarioProvider,
    AutorProvider
  ]
})
export class AppModule { }
