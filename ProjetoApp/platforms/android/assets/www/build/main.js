webpackJsonp([7],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__usuario_add_usuario_add__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_usuario__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsuarioDetailsPage = (function () {
    function UsuarioDetailsPage(navCtrl, navParams, alertCtrl, usuarioProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.usuarioProvider = usuarioProvider;
        this.usuario = navParams.get('item');
    }
    UsuarioDetailsPage.prototype.ionViewDidLoad = function () {
    };
    UsuarioDetailsPage.prototype.editarItem = function (event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__usuario_add_usuario_add__["a" /* UsuarioAddPage */], {
            item: this.usuario
        });
    };
    UsuarioDetailsPage.prototype.removerItem = function (event) {
        var _this = this;
        var confirmar = this.alertCtrl.create({
            title: 'Confirmação',
            message: 'Deseja excluir esse registro?',
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function () {
                    }
                },
                {
                    text: 'Excluir',
                    handler: function () {
                        _this.usuarioProvider.removerUsuario(_this.usuario);
                        _this.navCtrl.pop();
                    }
                }
            ]
        });
        confirmar.present();
    };
    return UsuarioDetailsPage;
}());
UsuarioDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-usuario-details',template:/*ion-inline-start:"C:\WF\University\Ionic_2sem2017\ProjetoApp\src\pages\usuario-details\usuario-details.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>{{usuario.nome}}</ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="editarItem($event)">\n\n        <ion-icon name="build"></ion-icon>\n\n      </button>\n\n      <button ion-button icon-only (click)="removerItem($event)">\n\n        <ion-icon name="trash"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-card>\n\n\n\n    <img src="{{usuario.img}}">\n\n\n\n    <ion-item>\n\n      <ion-icon name="contact" item-start large></ion-icon>\n\n      <h2>{{usuario.nome}}</h2>\n\n      <p>Username: {{usuario.username}}</p>\n\n      <p>ID: {{usuario.id}}</p>\n\n    </ion-item>\n\n  </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\WF\University\Ionic_2sem2017\ProjetoApp\src\pages\usuario-details\usuario-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_usuario__["a" /* UsuarioProvider */]])
], UsuarioDetailsPage);

//# sourceMappingURL=usuario-details.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutorDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__autor_add_autor_add__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_autor__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AutorDetailsPage = (function () {
    function AutorDetailsPage(navCtrl, navParams, alertCtrl, autorProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.autorProvider = autorProvider;
        this.autor = navParams.get('item');
    }
    AutorDetailsPage.prototype.editarItem = function (event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__autor_add_autor_add__["a" /* AutorAddPage */], {
            item: this.autor
        });
    };
    AutorDetailsPage.prototype.removerItem = function (event) {
        var _this = this;
        var confirmar = this.alertCtrl.create({
            title: 'Confirmação',
            message: 'Deseja excluir esse registro?',
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function () {
                    }
                },
                {
                    text: 'Excluir',
                    handler: function () {
                        _this.autorProvider.removerAutor(_this.autor);
                        _this.navCtrl.pop();
                    }
                }
            ]
        });
        confirmar.present();
    };
    return AutorDetailsPage;
}());
AutorDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-autor-details',template:/*ion-inline-start:"C:\WF\University\Ionic_2sem2017\ProjetoApp\src\pages\autor-details\autor-details.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>{{autor.nome}}</ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="editarItem($event)">\n\n        <ion-icon name="build"></ion-icon>\n\n      </button>\n\n      <button ion-button icon-only (click)="removerItem($event)">\n\n        <ion-icon name="trash"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-card>\n\n\n\n    <img src="{{autor.img}}">\n\n\n\n    <ion-item>\n\n      <ion-icon name="book" item-start large></ion-icon>\n\n      <h2>{{autor.nome}}</h2>\n\n    </ion-item>\n\n  </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\WF\University\Ionic_2sem2017\ProjetoApp\src\pages\autor-details\autor-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_autor__["a" /* AutorProvider */]])
], AutorDetailsPage);

//# sourceMappingURL=autor-details.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SobrePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SobrePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SobrePage = (function () {
    function SobrePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SobrePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SobrePage');
    };
    return SobrePage;
}());
SobrePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-sobre',template:/*ion-inline-start:"C:\WF\University\Ionic_2sem2017\ProjetoApp\src\pages\sobre\sobre.html"*/'<!--\n\n  Generated template for the SobrePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M"\n\n  crossorigin="anonymous">\n\n<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"\n\n  crossorigin="anonymous"></script>\n\n<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4"\n\n  crossorigin="anonymous"></script>\n\n<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1"\n\n  crossorigin="anonymous"></script>\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Sobre nós</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <div class="card">\n\n    <div class="card-header">\n\n      O Projeto:\n\n    </div>\n\n    <div class="card-body">\n\n      <div class="card" style="width: 20rem;">\n\n        <img class="card-img-top" src="../assets/images/Unip.jpg" alt="Card image cap">\n\n        <div class="card-body">\n\n          <h4 class="card-title">Universidade Paulista</h4>\n\n          <p class="card-text">Campus: Bauru-SP</p>\n\n          <a href="#" class="btn btn-primary">Saiba mais</a>\n\n        </div>\n\n      </div>\n\n\n\n    </div>\n\n    <p>O AMS (APLICATIVO MOBILE SUSTENTÁVEL) é um aplicativo mobile que projeta para o usuário uma biblioteca virtual, ou seja os usuários, podem alugar diversos livros sobre sustentabilidade ou ate mesmo incluir livros. Tem como principal função elevar informações sobre sustentabilidade no meio ambiente, isso tudo utilizando o aparelho celular.</p>\n\n    <p>Professor: PROF. M.E VICTOR DE ASSIS RODRIGUES</p>\n\n\n\n  </div>\n\n\n\n<br>\n\n  <div class="card">\n\n    <div class="card-header">\n\n      Desenvolvedores:\n\n    </div>\n\n    <div class="card-body">\n\n      <div class="card" style="width: 20rem;">\n\n        <img class="card-img-top" src="../assets/images/Marcos.jpg" alt="Card image cap">\n\n        <div class="card-body">\n\n          <h4 class="card-title">Marcos Aurélio C. Filho</h4>\n\n          <p class="card-text">RA: C1910C-4</p>\n\n          <a href="#" class="btn btn-primary">Saiba mais</a>\n\n        </div>\n\n      </div>\n\n      <br>\n\n      <div class="card" style="width: 20rem;">\n\n        <img class="card-img-top" src="../assets/images/Gabriel.jpg" alt="Card image cap">\n\n        <div class="card-body">\n\n          <h4 class="card-title">Gabriel G. Montanher</h4>\n\n          <p class="card-text">RA: C2226E-7</p>\n\n          <a href="#" class="btn btn-primary">Saiba mais</a>\n\n        </div>\n\n      </div>\n\n      <br>\n\n      <div class="card" style="width: 20rem;">\n\n        <img class="card-img-top" src="../assets/images/Regiane.jpg" alt="Card image cap">\n\n        <div class="card-body">\n\n          <h4 class="card-title">Regiane B. Noronha</h4>\n\n          <p class="card-text">RA: A73IBG-7</p>\n\n          <a href="#" class="btn btn-primary">Saiba mais</a>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\WF\University\Ionic_2sem2017\ProjetoApp\src\pages\sobre\sobre.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], SobrePage);

//# sourceMappingURL=sobre.js.map

/***/ }),

/***/ 116:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/autor-add/autor-add.module": [
		279,
		6
	],
	"../pages/autor-details/autor-details.module": [
		280,
		5
	],
	"../pages/livro-add/livro-add.module": [
		275,
		4
	],
	"../pages/livro-details/livro-details.module": [
		276,
		3
	],
	"../pages/sobre/sobre.module": [
		281,
		2
	],
	"../pages/usuario-add/usuario-add.module": [
		277,
		1
	],
	"../pages/usuario-details/usuario-details.module": [
		278,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__livro_details_livro_details__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_livro__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, navParams, livroProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.livroProvider = livroProvider;
        this.selectedItem = navParams.get('item');
    }
    HomePage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__livro_details_livro_details__["a" /* LivroDetailsPage */], {
            item: item
        });
    };
    HomePage.prototype.ionViewWillEnter = function () {
        this.items = this.livroProvider.getLivros();
        this.itemsFilter = this.items.filter(function (i) {
            if (i.destaque == true) {
                return true;
            }
            return false;
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\WF\University\Ionic_2sem2017\ProjetoApp\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      <ion-icon name="ios-leaf"></ion-icon> Leitura Sustentável</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <h3>Seja bem vindo!</h3>\n\n  <p>\n\n    O Aplicativo Leitura Sustentável oferece uma biblioteca online de livros voltados a sustentabilidade e ao meio ambiente.\n\n  </p>\n\n  <h3>\n\n    <ion-icon name="star"></ion-icon>   Livros em destaque</h3>\n\n  <ion-list>\n\n    <ion-item>\n\n      <button ion-item *ngFor="let item of itemsFilter" (click)="itemTapped($event, item)">\n\n        <ion-thumbnail item-start>\n\n          <img src="{{item.img}}">\n\n        </ion-thumbnail>\n\n        <h2>{{item.titulo}}</h2>\n\n        <p>Ano: {{item.ano}}</p>\n\n        <button ion-button clear item-end>Ver</button>\n\n      </button>\n\n    </ion-item> \n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\WF\University\Ionic_2sem2017\ProjetoApp\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_livro__["a" /* LivroProvider */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LivroListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_livro__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__livro_add_livro_add__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__livro_details_livro_details__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LivroListPage = (function () {
    function LivroListPage(navCtrl, navParams, livroProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.livroProvider = livroProvider;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        this.visibilidade = false;
    }
    LivroListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__livro_details_livro_details__["a" /* LivroDetailsPage */], {
            item: item
        });
    };
    LivroListPage.prototype.voltarPagina = function () {
        this.navCtrl.pop();
    };
    LivroListPage.prototype.novoItem = function (event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__livro_add_livro_add__["a" /* LivroAddPage */], {});
    };
    LivroListPage.prototype.abrirPesquisa = function (event) {
        this.visibilidade = true;
    };
    LivroListPage.prototype.pesquisar = function (event) {
        var _this = this;
        this.itemsFilter = this.items.filter(function (i) {
            if (i.titulo.indexOf(_this.pesquisa) >= 0) {
                return true;
            }
            return false;
        });
    };
    LivroListPage.prototype.cancelarPesquisa = function () {
        this.visibilidade = false;
        this.pesquisa = "";
        this.pesquisar(null);
    };
    LivroListPage.prototype.ionViewDidLoad = function () {
        console.log("1 - ionViewDidLoad");
    };
    LivroListPage.prototype.ionViewWillEnter = function () {
        console.log("2 - ionViewWillEnter");
        this.items = this.livroProvider.getLivros();
        this.itemsFilter = this.items;
    };
    LivroListPage.prototype.ionViewDidEnter = function () {
        //this.items = this.livroProvider.getLivros();
        console.log("3 - ionViewDidEnter");
    };
    LivroListPage.prototype.ionViewWillLeave = function () {
        console.log("4 - ionViewWillLeave");
    };
    LivroListPage.prototype.ionViewDidLeave = function () {
        console.log("5 - ionViewDidLeave");
    };
    LivroListPage.prototype.ionViewWillUnload = function () {
        console.log("6 - ionViewWillUnload");
    };
    LivroListPage.prototype.ionViewCanEnter = function () {
        console.log("7 - ionViewCanEnter");
    };
    LivroListPage.prototype.ionViewCanLeave = function () {
        console.log("8 - ionViewCanLeave");
    };
    return LivroListPage;
}());
LivroListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-livro-list',template:/*ion-inline-start:"C:\WF\University\Ionic_2sem2017\ProjetoApp\src\pages\livro-list\livro-list.html"*/'<ion-header>\n\n  <ion-navbar color="33cc33" *ngIf="!visibilidade">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Listagem de Livros</ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="abrirPesquisa($event)">\n\n        <ion-icon name="search"></ion-icon>\n\n      </button>\n\n      <button ion-button icon-only (click)="novoItem($event)">\n\n        <ion-icon name="add"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n  <ion-navbar *ngIf="visibilidade">\n\n    <ion-searchbar [(ngModel)]="pesquisa"\n\n                   [showCancelButton]="shouldShowCancel"\n\n                   (ionInput)="pesquisar($event)"\n\n                   (ionClear)="cancelarPesquisa()">\n\n    </ion-searchbar>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <ion-list>\n\n    <ion-item>\n\n      <button ion-item *ngFor="let item of itemsFilter" (click)="itemTapped($event, item)">\n\n        <ion-thumbnail item-start>\n\n          <img src="{{item.img}}">\n\n        </ion-thumbnail>\n\n        <h2>{{item.titulo}}</h2>\n\n        <p>{{item.ano}}</p>\n\n        <button ion-button clear item-end>Ver</button>\n\n      </button>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\WF\University\Ionic_2sem2017\ProjetoApp\src\pages\livro-list\livro-list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_livro__["a" /* LivroProvider */]])
], LivroListPage);

//# sourceMappingURL=livro-list.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_usuario__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__usuario_add_usuario_add__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__usuario_details_usuario_details__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UsuarioListPage = (function () {
    function UsuarioListPage(navCtrl, navParams, UsuarioProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.UsuarioProvider = UsuarioProvider;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        this.visibilidade = false;
    }
    UsuarioListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__usuario_details_usuario_details__["a" /* UsuarioDetailsPage */], {
            item: item
        });
    };
    UsuarioListPage.prototype.voltarPagina = function () {
        this.navCtrl.pop();
    };
    UsuarioListPage.prototype.novoItem = function (event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__usuario_add_usuario_add__["a" /* UsuarioAddPage */], {});
    };
    UsuarioListPage.prototype.abrirPesquisa = function (event) {
        this.visibilidade = true;
    };
    UsuarioListPage.prototype.pesquisar = function (event) {
        var _this = this;
        this.itemsFilter = this.items.filter(function (i) {
            if (i.username.indexOf(_this.pesquisa) >= 0) {
                return true;
            }
            return false;
        });
    };
    UsuarioListPage.prototype.cancelarPesquisa = function () {
        this.visibilidade = false;
        this.pesquisa = "";
        this.pesquisar(null);
    };
    UsuarioListPage.prototype.ionViewWillEnter = function () {
        this.items = this.UsuarioProvider.getUsuarios();
        this.itemsFilter = this.items;
    };
    return UsuarioListPage;
}());
UsuarioListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-usuario-list',template:/*ion-inline-start:"C:\WF\University\Ionic_2sem2017\ProjetoApp\src\pages\usuario-list\usuario-list.html"*/'<ion-header>\n\n  <ion-navbar *ngIf="!visibilidade">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Listagem de Usuários</ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="abrirPesquisa($event)">\n\n        <ion-icon name="search"></ion-icon>\n\n      </button>\n\n      <button ion-button icon-only (click)="novoItem($event)">\n\n        <ion-icon name="add"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n  <ion-navbar *ngIf="visibilidade">\n\n    <ion-searchbar [(ngModel)]="pesquisa"\n\n                   [showCancelButton]="shouldShowCancel"\n\n                   (ionInput)="pesquisar($event)"\n\n                   (ionClear)="cancelarPesquisa()">\n\n    </ion-searchbar>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <ion-list>\n\n    <ion-item>\n\n      <button ion-item *ngFor="let item of itemsFilter" (click)="itemTapped($event, item)">\n\n        <ion-thumbnail item-start>\n\n          <img src="{{item.img}}">\n\n        </ion-thumbnail>\n\n        <h2>{{item.nome}}</h2>\n\n        <p>{{item.username}}</p>\n\n        <button ion-button clear item-end>Ver</button>\n\n      </button>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\WF\University\Ionic_2sem2017\ProjetoApp\src\pages\usuario-list\usuario-list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_usuario__["a" /* UsuarioProvider */]])
], UsuarioListPage);

//# sourceMappingURL=usuario-list.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutorListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_autor__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__autor_add_autor_add__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__autor_details_autor_details__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AutorListPage = (function () {
    function AutorListPage(navCtrl, navParams, AutorProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.AutorProvider = AutorProvider;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        this.visibilidade = false;
    }
    AutorListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__autor_details_autor_details__["a" /* AutorDetailsPage */], {
            item: item
        });
    };
    AutorListPage.prototype.voltarPagina = function () {
        this.navCtrl.pop();
    };
    AutorListPage.prototype.novoItem = function (event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__autor_add_autor_add__["a" /* AutorAddPage */], {});
    };
    AutorListPage.prototype.abrirPesquisa = function (event) {
        this.visibilidade = true;
    };
    AutorListPage.prototype.pesquisar = function (event) {
        var _this = this;
        this.itemsFilter = this.items.filter(function (i) {
            if (i.nome.indexOf(_this.pesquisa) >= 0) {
                return true;
            }
            return false;
        });
    };
    AutorListPage.prototype.cancelarPesquisa = function () {
        this.visibilidade = false;
        this.pesquisa = "";
        this.pesquisar(null);
    };
    AutorListPage.prototype.ionViewWillEnter = function () {
        this.items = this.AutorProvider.getAutores();
        this.itemsFilter = this.items;
    };
    return AutorListPage;
}());
AutorListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-autor-list',template:/*ion-inline-start:"C:\WF\University\Ionic_2sem2017\ProjetoApp\src\pages\autor-list\autor-list.html"*/'<ion-header>\n\n  <ion-navbar *ngIf="!visibilidade">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Listagem de Autores</ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="abrirPesquisa($event)">\n\n        <ion-icon name="search"></ion-icon>\n\n      </button>\n\n      <button ion-button icon-only (click)="novoItem($event)">\n\n        <ion-icon name="add"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n  <ion-navbar *ngIf="visibilidade">\n\n    <ion-searchbar [(ngModel)]="pesquisa"\n\n                   [showCancelButton]="shouldShowCancel"\n\n                   (ionInput)="pesquisar($event)"\n\n                   (ionClear)="cancelarPesquisa()">\n\n    </ion-searchbar>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <ion-list>\n\n    <ion-item>\n\n      <button ion-item *ngFor="let item of itemsFilter" (click)="itemTapped($event, item)">\n\n        <ion-thumbnail item-start>\n\n          <img src="{{item.img}}">\n\n        </ion-thumbnail>\n\n        <h2>{{item.nome}}</h2>\n\n        <button ion-button clear item-end>Ver</button>\n\n      </button>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\WF\University\Ionic_2sem2017\ProjetoApp\src\pages\autor-list\autor-list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_autor__["a" /* AutorProvider */]])
], AutorListPage);

//# sourceMappingURL=autor-list.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_sobre_sobre__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_livro_list_livro_list__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_livro__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_livro_add_livro_add__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_livro_details_livro_details__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_usuario_list_usuario_list__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_usuario__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_usuario_add_usuario_add__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_usuario_details_usuario_details__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_autor_list_autor_list__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_autor__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_autor_add_autor_add__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_autor_details_autor_details__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_livro_list_livro_list__["a" /* LivroListPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_livro_add_livro_add__["a" /* LivroAddPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_livro_details_livro_details__["a" /* LivroDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_usuario_list_usuario_list__["a" /* UsuarioListPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_usuario_add_usuario_add__["a" /* UsuarioAddPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_usuario_details_usuario_details__["a" /* UsuarioDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_autor_list_autor_list__["a" /* AutorListPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_autor_add_autor_add__["a" /* AutorAddPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_autor_details_autor_details__["a" /* AutorDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_sobre_sobre__["a" /* SobrePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/livro-add/livro-add.module#LivroAddPageModule', name: 'LivroAddPage', segment: 'livro-add', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/livro-details/livro-details.module#LivroDetailsPageModule', name: 'LivroDetailsPage', segment: 'livro-details', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/usuario-add/usuario-add.module#UsuarioAddPageModule', name: 'UsuarioAddPage', segment: 'usuario-add', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/usuario-details/usuario-details.module#UsuarioDetailsPageModule', name: 'UsuarioDetailsPage', segment: 'usuario-details', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/autor-add/autor-add.module#AutorAddPageModule', name: 'AutorAddPage', segment: 'autor-add', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/autor-details/autor-details.module#AutorDetailsPageModule', name: 'AutorDetailsPage', segment: 'autor-details', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/sobre/sobre.module#SobrePageModule', name: 'SobrePage', segment: 'sobre', priority: 'low', defaultHistory: [] }
                ]
            }),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_livro_list_livro_list__["a" /* LivroListPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_livro_add_livro_add__["a" /* LivroAddPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_livro_details_livro_details__["a" /* LivroDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_usuario_list_usuario_list__["a" /* UsuarioListPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_usuario_add_usuario_add__["a" /* UsuarioAddPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_usuario_details_usuario_details__["a" /* UsuarioDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_autor_list_autor_list__["a" /* AutorListPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_autor_add_autor_add__["a" /* AutorAddPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_autor_details_autor_details__["a" /* AutorDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_sobre_sobre__["a" /* SobrePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_10__providers_livro__["a" /* LivroProvider */],
            __WEBPACK_IMPORTED_MODULE_14__providers_usuario__["a" /* UsuarioProvider */],
            __WEBPACK_IMPORTED_MODULE_18__providers_autor__["a" /* AutorProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_livro_list_livro_list__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_usuario_list_usuario_list__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_autor_list_autor_list__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_sobre_sobre__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Livros', component: __WEBPACK_IMPORTED_MODULE_5__pages_livro_list_livro_list__["a" /* LivroListPage */] },
            { title: 'Autores', component: __WEBPACK_IMPORTED_MODULE_7__pages_autor_list_autor_list__["a" /* AutorListPage */] },
            { title: 'Usuários', component: __WEBPACK_IMPORTED_MODULE_6__pages_usuario_list_usuario_list__["a" /* UsuarioListPage */] },
            { title: 'Sobre', component: __WEBPACK_IMPORTED_MODULE_8__pages_sobre_sobre__["a" /* SobrePage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\WF\University\Ionic_2sem2017\ProjetoApp\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\WF\University\Ionic_2sem2017\ProjetoApp\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_livro__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListPage = ListPage_1 = (function () {
    function ListPage(navCtrl, navParams, livroProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.livroProvider = livroProvider;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        this.items2 = livroProvider.getLivros();
        console.log(this.items2);
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    return ListPage;
}());
ListPage = ListPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"C:\WF\University\Ionic_2sem2017\ProjetoApp\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon [name]="item.icon" item-left></ion-icon>\n\n      {{item.title}}\n\n      <div class="item-note" item-right>\n\n        {{item.note}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n  <div *ngIf="selectedItem" padding>\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\WF\University\Ionic_2sem2017\ProjetoApp\src\pages\list\list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_livro__["a" /* LivroProvider */]])
], ListPage);

var ListPage_1;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LivroProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LivroProvider = (function () {
    function LivroProvider() {
        this.livros = [];
        if (this.livros.length == 0)
            this.popularLivros();
    }
    LivroProvider.prototype.popularLivros = function () {
        this.livros.push({ id: 1, titulo: "A sustentabilidade Ambiental", ano: 2017, img: "assets/capas/livro1.jpg", destaque: false });
        this.livros.push({ id: 2, titulo: "Complexidade e Sustentabilidade", ano: 2013, img: "assets/capas/livro2.jpg", destaque: false });
        this.livros.push({ id: 3, titulo: "Cuidado e Sustentabilidade", ano: 2013, img: "assets/capas/livro3.jpg", destaque: false });
        this.livros.push({ id: 4, titulo: "Educação e Sustentabilidade", ano: 2015, img: "assets/capas/livro4.jpg", destaque: false });
        this.livros.push({ id: 5, titulo: "Minha Casa Sustentável", ano: 2010, img: "assets/capas/livro5.jpg", destaque: false });
        this.livros.push({ id: 6, titulo: "O homem que salvou Nova York da falta de agua", ano: 2015, img: "assets/capas/livro6.jpg", destaque: false });
        this.livros.push({ id: 7, titulo: "Os desafios da sustentabilidade", ano: 2007, img: "assets/capas/livro7.jpg", destaque: false });
        this.livros.push({ id: 8, titulo: "Saúde, ambiente e sustentabilidade", ano: 2006, img: "assets/capas/livro8.jpg", destaque: false });
        this.livros.push({ id: 9, titulo: "Sustentabilidade", ano: 2010, img: "assets/capas/livro9.jpg", destaque: false });
        this.livros.push({ id: 10, titulo: "Sustentabilidade - a economia mais humana", ano: 2009, img: "assets/capas/livro10.jpg", destaque: false });
    };
    LivroProvider.prototype.getInstancia = function () {
        return {
            id: this.getNextID(),
            titulo: "",
            ano: null,
            img: "",
            destaque: false
        };
    };
    LivroProvider.prototype.getLivros = function () {
        return this.livros;
    };
    LivroProvider.prototype.adicionarLivro = function (livro) {
        this.livros.push(livro);
    };
    LivroProvider.prototype.removerLivro = function (livro) {
        var position = this.livros.findIndex(function (l) {
            return l.id == livro.id;
        });
        this.livros.splice(position, 1);
    };
    LivroProvider.prototype.getNextID = function () {
        var nextId = 0;
        if (this.livros.length > 0) {
            nextId = Math.max.apply(Math, this.livros.map(function (o) { return o.id; }));
        }
        return ++nextId;
    };
    LivroProvider.prototype.alterarLivro = function (livro) {
        var position = this.livros.findIndex(function (l) {
            return l.id == livro.id;
        });
        this.livros[position].titulo = livro.titulo;
        this.livros[position].ano = livro.ano;
        this.livros[position].img = livro.img;
        this.livros[position].destaque = livro.destaque;
    };
    return LivroProvider;
}());
LivroProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], LivroProvider);

//# sourceMappingURL=livro.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UsuarioProvider = (function () {
    function UsuarioProvider() {
        this.usuarios = [];
        if (this.usuarios.length == 0)
            this.popularUsuarios();
    }
    UsuarioProvider.prototype.popularUsuarios = function () {
        this.usuarios.push({ id: 1, nome: "Marcos Aurélio", username: "marcos.aurelio", senha: "mudar@123", img: "assets/images/Marcos.jpg" });
        this.usuarios.push({ id: 2, nome: "Gabriel Montanher", username: "gabriel.montanher", senha: "mudar@123", img: "assets/images/Gabriel.jpg" });
        this.usuarios.push({ id: 3, nome: "Regiane Noronha", username: "regiane.noronha", senha: "mudar@123", img: "assets/images/Regiane.jpg" });
    };
    UsuarioProvider.prototype.getInstancia = function () {
        return {
            id: this.getNextID(),
            nome: "",
            username: "",
            senha: "",
            img: "assets/images/user.png"
        };
    };
    UsuarioProvider.prototype.getUsuarios = function () {
        return this.usuarios;
    };
    UsuarioProvider.prototype.adicionarUsuario = function (usuario) {
        this.usuarios.push(usuario);
    };
    UsuarioProvider.prototype.removerUsuario = function (usuario) {
        var position = this.usuarios.findIndex(function (u) {
            return u.id == usuario.id;
        });
        this.usuarios.splice(position, 1);
    };
    UsuarioProvider.prototype.getNextID = function () {
        var nextId = 0;
        if (this.usuarios.length > 0) {
            nextId = Math.max.apply(Math, this.usuarios.map(function (o) { return o.id; }));
        }
        return ++nextId;
    };
    UsuarioProvider.prototype.alterarUsuario = function (usuario) {
        var position = this.usuarios.findIndex(function (u) {
            return u.id == usuario.id;
        });
        this.usuarios[position].nome = usuario.nome;
        this.usuarios[position].username = usuario.username;
        this.usuarios[position].senha = usuario.senha;
        this.usuarios[position].img = usuario.img;
    };
    return UsuarioProvider;
}());
UsuarioProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], UsuarioProvider);

//# sourceMappingURL=usuario.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AutorProvider = (function () {
    function AutorProvider() {
        this.autores = [];
        if (this.autores.length == 0)
            this.popularAutores();
    }
    AutorProvider.prototype.popularAutores = function () {
        this.autores.push({ id: 1, nome: "José de Alencar", img: "assets/autores/Autor1.jpg" });
        this.autores.push({ id: 2, nome: "José Sarney", img: "assets/autores/Autor2.jpg" });
        this.autores.push({ id: 3, nome: "André de Leones", img: "assets/autores/Autor3.jpg" });
        this.autores.push({ id: 4, nome: "Paulo Coelho", img: "assets/autores/Autor4.jpg" });
        this.autores.push({ id: 5, nome: "Tony Bellotto", img: "assets/autores/Autor5.jpg" });
        this.autores.push({ id: 6, nome: "Ana Beatriz Barbosa Silva", img: "assets/autores/Autor6.jpg" });
        this.autores.push({ id: 7, nome: "Lya Luft", img: "assets/autores/Autor7.jpg" });
        this.autores.push({ id: 8, nome: "Jô Soares", img: "assets/autores/Autor8.jpg" });
        this.autores.push({ id: 9, nome: "Jorge Amado", img: "assets/autores/Autor9.jpg" });
        this.autores.push({ id: 10, nome: "Fernando Gabeira", img: "assets/autores/Autor10.jpg" });
        this.autores.push({ id: 11, nome: "Eros Grau", img: "assets/autores/Autor11.jpg" });
        this.autores.push({ id: 12, nome: "Clarice Lispector", img: "assets/autores/Autor12.jpg" });
        this.autores.push({ id: 13, nome: "José Mauro de Vasconcelos", img: "assets/autores/Autor13.jpg" });
    };
    AutorProvider.prototype.getInstancia = function () {
        return {
            id: this.getNextID(),
            nome: "",
            img: "assets/images/user.png"
        };
    };
    AutorProvider.prototype.getAutores = function () {
        return this.autores;
    };
    AutorProvider.prototype.adicionarAutore = function (autor) {
        this.autores.push(autor);
    };
    AutorProvider.prototype.removerAutor = function (autor) {
        var position = this.autores.findIndex(function (u) {
            return u.id == autor.id;
        });
        this.autores.splice(position, 1);
    };
    AutorProvider.prototype.getNextID = function () {
        var nextId = 0;
        if (this.autores.length > 0) {
            nextId = Math.max.apply(Math, this.autores.map(function (o) { return o.id; }));
        }
        return ++nextId;
    };
    AutorProvider.prototype.alterarAutor = function (autor) {
        var position = this.autores.findIndex(function (u) {
            return u.id == autor.id;
        });
        this.autores[position].nome = autor.nome;
        this.autores[position].img = autor.img;
    };
    return AutorProvider;
}());
AutorProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], AutorProvider);

//# sourceMappingURL=autor.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LivroAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_livro__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the LivroAddPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LivroAddPage = (function () {
    function LivroAddPage(navCtrl, navParams, livroProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.livroProvider = livroProvider;
        this.livro = navParams.get("item");
        if (this.livro == null) {
            this.modoEdicao = false;
            this.livro = this.livroProvider.getInstancia();
        }
        else
            this.modoEdicao = true;
    }
    LivroAddPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LivroAddPage');
    };
    LivroAddPage.prototype.salvar = function (evento) {
        console.log(this.livro);
        if (!this.modoEdicao)
            this.livroProvider.adicionarLivro(this.livro);
        else
            this.livroProvider.alterarLivro(this.livro);
        this.navCtrl.pop();
    };
    LivroAddPage.prototype.cancelar = function () {
        this.navCtrl.pop();
    };
    return LivroAddPage;
}());
LivroAddPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-livro-add',template:/*ion-inline-start:"C:\WF\University\Ionic_2sem2017\ProjetoApp\src\pages\livro-add\livro-add.html"*/'<!--\n\n  Generated template for the LivroAddPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Cadastrar Livros</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Título</ion-label>\n\n      <ion-input type="text" [(ngModel)]="livro.titulo"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Ano</ion-label>\n\n      <ion-input type="number" [(ngModel)]="livro.ano"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>Em Destaque</ion-label>\n\n      <ion-checkbox [(ngModel)]="livro.destaque"></ion-checkbox>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n\n  <ion-buttons>\n\n    <button ion-button color="secondary" (click)="salvar($event)">Salvar</button>\n\n    <button ion-button color="light" (click)="cancelar()">Cancelar</button>\n\n  </ion-buttons>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\WF\University\Ionic_2sem2017\ProjetoApp\src\pages\livro-add\livro-add.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_livro__["a" /* LivroProvider */]])
], LivroAddPage);

//# sourceMappingURL=livro-add.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LivroDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__livro_add_livro_add__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_livro__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LivroDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LivroDetailsPage = (function () {
    function LivroDetailsPage(navCtrl, navParams, alertCtrl, livroProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.livroProvider = livroProvider;
        this.livro = navParams.get('item');
    }
    LivroDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LivroDetailsPage');
    };
    LivroDetailsPage.prototype.editarItem = function (event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__livro_add_livro_add__["a" /* LivroAddPage */], {
            item: this.livro
        });
    };
    LivroDetailsPage.prototype.removerItem = function (event) {
        var _this = this;
        var confirmar = this.alertCtrl.create({
            title: 'Confirmação',
            message: 'Deseja excluir esse registro?',
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function () {
                        //console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Excluir',
                    handler: function () {
                        _this.livroProvider.removerLivro(_this.livro);
                        _this.navCtrl.pop();
                    }
                }
            ]
        });
        confirmar.present();
    };
    return LivroDetailsPage;
}());
LivroDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-livro-details',template:/*ion-inline-start:"C:\WF\University\Ionic_2sem2017\ProjetoApp\src\pages\livro-details\livro-details.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>{{livro.titulo}}</ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="editarItem($event)">\n\n        <ion-icon name="build"></ion-icon>\n\n      </button>\n\n      <button ion-button icon-only (click)="removerItem($event)">\n\n        <ion-icon name="trash"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-card>\n\n\n\n    <img src="{{livro.img}}">\n\n\n\n    <ion-item>\n\n      <ion-icon name="book" item-start large></ion-icon>\n\n      <h2>{{livro.titulo}}</h2>\n\n      <p>Ano: {{livro.ano}}</p>\n\n    </ion-item>\n\n\n\n  </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\WF\University\Ionic_2sem2017\ProjetoApp\src\pages\livro-details\livro-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_livro__["a" /* LivroProvider */]])
], LivroDetailsPage);

//# sourceMappingURL=livro-details.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_usuario__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsuarioAddPage = (function () {
    function UsuarioAddPage(navCtrl, navParams, UsuarioProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.UsuarioProvider = UsuarioProvider;
        this.usuario = navParams.get("item");
        if (this.usuario == null) {
            this.modoEdicao = false;
            this.usuario = this.UsuarioProvider.getInstancia();
        }
        else
            this.modoEdicao = true;
    }
    UsuarioAddPage.prototype.ionViewDidLoad = function () {
    };
    UsuarioAddPage.prototype.salvar = function (evento) {
        console.log(this.usuario);
        if (!this.modoEdicao)
            this.UsuarioProvider.adicionarUsuario(this.usuario);
        else
            this.UsuarioProvider.adicionarUsuario(this.usuario);
        this.navCtrl.pop();
    };
    UsuarioAddPage.prototype.cancelar = function () {
        this.navCtrl.pop();
    };
    return UsuarioAddPage;
}());
UsuarioAddPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-usuario-add',template:/*ion-inline-start:"C:\WF\University\Ionic_2sem2017\ProjetoApp\src\pages\usuario-add\usuario-add.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Cadastrar Usuario</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Nome</ion-label>\n\n      <ion-input type="text" [(ngModel)]="usuario.nome"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Username</ion-label>\n\n      <ion-input type="text" [(ngModel)]="usuario.username"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Senha</ion-label>\n\n      <ion-input type="password" [(ngModel)]="usuario.senha"></ion-input>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n\n  <ion-buttons>\n\n    <button ion-button color="secondary" (click)="salvar($event)">Salvar</button>\n\n    <button ion-button color="light" (click)="cancelar()">Cancelar</button>\n\n  </ion-buttons>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\WF\University\Ionic_2sem2017\ProjetoApp\src\pages\usuario-add\usuario-add.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_usuario__["a" /* UsuarioProvider */]])
], UsuarioAddPage);

//# sourceMappingURL=usuario-add.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutorAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_autor__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AutorAddPage = (function () {
    function AutorAddPage(navCtrl, navParams, autorProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.autorProvider = autorProvider;
        this.autor = navParams.get("item");
        if (this.autor == null) {
            this.modoEdicao = false;
            this.autor = this.autorProvider.getInstancia();
        }
        else
            this.modoEdicao = true;
    }
    AutorAddPage.prototype.salvar = function (evento) {
        if (!this.modoEdicao)
            this.autorProvider.alterarAutor(this.autor);
        else
            this.autorProvider.alterarAutor(this.autor);
        this.navCtrl.pop();
    };
    AutorAddPage.prototype.cancelar = function () {
        this.navCtrl.pop();
    };
    return AutorAddPage;
}());
AutorAddPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-autor-add',template:/*ion-inline-start:"C:\WF\University\Ionic_2sem2017\ProjetoApp\src\pages\autor-add\autor-add.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Cadastrar Autores</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Nome</ion-label>\n\n      <ion-input type="text" [(ngModel)]="autor.nome"></ion-input>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n\n  <ion-buttons>\n\n    <button ion-button color="secondary" (click)="salvar($event)">Salvar</button>\n\n    <button ion-button color="light" (click)="cancelar()">Cancelar</button>\n\n  </ion-buttons>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\WF\University\Ionic_2sem2017\ProjetoApp\src\pages\autor-add\autor-add.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_autor__["a" /* AutorProvider */]])
], AutorAddPage);

//# sourceMappingURL=autor-add.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map