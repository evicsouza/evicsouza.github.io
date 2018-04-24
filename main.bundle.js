webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/animal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AnimalService = /** @class */ (function () {
    function AnimalService(angularFirestore) {
        this.angularFirestore = angularFirestore;
        this.animalCollection = this.angularFirestore.collection("animal");
    }
    AnimalService.prototype.getAnimal = function () {
        var _this = this;
        var resultados = [];
        var meuObservable = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.animalCollection.snapshotChanges().subscribe(function (result) {
                result.map(function (documents) {
                    var id = documents.payload.doc.id;
                    var data = documents.payload.doc.data();
                    var document = __assign({ id: id }, data);
                    resultados.push(document);
                });
                observer.next(resultados);
                observer.complete();
            });
        });
        return meuObservable;
    };
    AnimalService.prototype.salvar = function (animal) {
        this.animalCollection.add(animal).then(function (resultado) {
            animal.id = resultado.id;
        });
    };
    AnimalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], AnimalService);
    return AnimalService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_inputtext__ = __webpack_require__("./node_modules/primeng/inputtext.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_inputtext___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_inputtext__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_password__ = __webpack_require__("./node_modules/primeng/password.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_password___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_primeng_password__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_button__ = __webpack_require__("./node_modules/primeng/button.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_primeng_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_components_dialog_dialog__ = __webpack_require__("./node_modules/primeng/components/dialog/dialog.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_components_dialog_dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_primeng_components_dialog_dialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_tabmenu__ = __webpack_require__("./node_modules/primeng/tabmenu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_tabmenu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_primeng_tabmenu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__usuario_service__ = __webpack_require__("./src/app/usuario.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__tela_inicial_tela_inicial_component__ = __webpack_require__("./src/app/tela-inicial/tela-inicial.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__banco_de_dados_banco_de_dados_component__ = __webpack_require__("./src/app/banco-de-dados/banco-de-dados.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__environments_BancoFirebaseConfig__ = __webpack_require__("./src/environments/BancoFirebaseConfig.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__feed_feed_component__ = __webpack_require__("./src/app/feed/feed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__feed_feed_module__ = __webpack_require__("./src/app/feed/feed.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//ANGULAR










//ROTAS

//SERVIÇO







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_13__tela_inicial_tela_inicial_component__["a" /* TelaInicialComponent */],
                __WEBPACK_IMPORTED_MODULE_14__banco_de_dados_banco_de_dados_component__["a" /* BancoDeDadosComponent */],
                __WEBPACK_IMPORTED_MODULE_16__feed_feed_component__["a" /* FeedComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_9_primeng_tabmenu__["TabMenuModule"],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5_primeng_inputtext__["InputTextModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_password__["PasswordModule"],
                __WEBPACK_IMPORTED_MODULE_7_primeng_button__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_10__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_8_primeng_components_dialog_dialog__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_3_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_15__environments_BancoFirebaseConfig__["a" /* BancoFirebaseConfig */]),
                __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__["b" /* AngularFirestoreModule */].enablePersistence(),
                __WEBPACK_IMPORTED_MODULE_17__feed_feed_module__["a" /* FeedModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__usuario_service__["a" /* UsuarioService */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__["a" /* AngularFirestore */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tela_inicial_tela_inicial_component__ = __webpack_require__("./src/app/tela-inicial/tela-inicial.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feed_feed_component__ = __webpack_require__("./src/app/feed/feed.component.ts");



var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__tela_inicial_tela_inicial_component__["a" /* TelaInicialComponent */] },
    { path: 'feed', component: __WEBPACK_IMPORTED_MODULE_2__feed_feed_component__["a" /* FeedComponent */] },
];
var routing = __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forRoot(APP_ROUTES);


/***/ }),

/***/ "./src/app/banco-de-dados/banco-de-dados.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/banco-de-dados/banco-de-dados.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  banco-de-dados works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/banco-de-dados/banco-de-dados.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BancoDeDadosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BancoDeDadosComponent = /** @class */ (function () {
    function BancoDeDadosComponent() {
    }
    BancoDeDadosComponent.prototype.ngOnInit = function () {
    };
    BancoDeDadosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-banco-de-dados',
            template: __webpack_require__("./src/app/banco-de-dados/banco-de-dados.component.html"),
            styles: [__webpack_require__("./src/app/banco-de-dados/banco-de-dados.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BancoDeDadosComponent);
    return BancoDeDadosComponent;
}());



/***/ }),

/***/ "./src/app/feed/adicionar-animal/adicionar-animal.component.css":
/***/ (function(module, exports) {

module.exports = "div{\r\n    font-family: arial, monospace;\r\n    background-color: rgb(238, 212, 183);\r\n}\r\n.button{\r\n    background-color: #FF82AB;\r\n    border: #FF82AB;\r\n}"

/***/ }),

/***/ "./src/app/feed/adicionar-animal/adicionar-animal.component.html":
/***/ (function(module, exports) {

module.exports = "<br/> <br/> <br/>\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-4\"></div>\r\n    <div class=\"ui-g-5\">\r\n        <h3>Insira os dados do seu animal</h3>\r\n        <p>\r\n        Nome: <br/>\r\n        <input #campoNome=\"ngModel\" type=\"text\" pInputText [(ngModel)]=\"animal.nome\"/> <br/>\r\n        </p>\r\n        <p>\r\n        Seu animal é: <br/>\r\n        <p-radioButton label=\"Carrocho\" value=\"cachorro\" [(ngModel)]=\"animal.tipo\"></p-radioButton> <br/>\r\n        <p-radioButton label=\"Gato\" value=\"gato\" [(ngModel)]=\"animal.tipo\"></p-radioButton> <br/>\r\n        </p>\r\n        <p>\r\n        Faixa etária: <br/>\r\n        <p-radioButton label=\"Filhote\" value=\"filhote\" [(ngModel)]=\"animal.faixaEtaria\"></p-radioButton> <br/>\r\n        <p-radioButton label=\"Adulto\" value=\"adulto\" [(ngModel)]=\"animal.faixaEtaria\"></p-radioButton> <br/>\r\n        </p>\r\n        <p>\r\n        Sexo: <br/>\r\n        <p-radioButton label=\"Feminino\" value=\"feminino\" [(ngModel)]=\"animal.sexo\"></p-radioButton> <br/>\r\n        <p-radioButton label=\"Masculino\" value=\"masculino\" [(ngModel)]=\"animal.sexo\"></p-radioButton> <br/>\r\n        </p>\r\n        <p>\r\n        Cor: <br/>\r\n        <input type=\"text\" pInputText [(ngModel)]=\"animal.cor\"/> <br/>\r\n        </p>\r\n        <p>\r\n        Descrição: <br/>\r\n        <textarea [rows]=\"5\" [cols]=\"30\" pInputTextarea autoResize=\"autoResize\" [(ngModel)]=\"animal.descricao\"></textarea>\r\n        </p>\r\n        <div class=\"ui-g-4\"></div>\r\n\r\n        <button pButton type=\"button\" label=\"Salvar\" (click)=\"salvar()\" class=\"button ui-button-success\"></button>\r\n \r\n    </div>\r\n    <div class=\"ui-g-4\"></div>\r\n</div>"

/***/ }),

/***/ "./src/app/feed/adicionar-animal/adicionar-animal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdicionarAnimalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animal_service__ = __webpack_require__("./src/app/animal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdicionarAnimalComponent = /** @class */ (function () {
    function AdicionarAnimalComponent(animalService) {
        this.animalService = animalService;
        this.animal = { nome: " ", tipo: " ", sexo: " ", cor: " ", faixaEtaria: " ", descrição: " " };
    }
    AdicionarAnimalComponent.prototype.ngOnInit = function () {
        this.animalService.getAnimal();
    };
    AdicionarAnimalComponent.prototype.salvar = function () {
        console.log("ooi");
    };
    AdicionarAnimalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-adicionar-animal',
            template: __webpack_require__("./src/app/feed/adicionar-animal/adicionar-animal.component.html"),
            styles: [__webpack_require__("./src/app/feed/adicionar-animal/adicionar-animal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__animal_service__["a" /* AnimalService */]])
    ], AdicionarAnimalComponent);
    return AdicionarAnimalComponent;
}());



/***/ }),

/***/ "./src/app/feed/feed.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/feed/feed.component.html":
/***/ (function(module, exports) {

module.exports = "<p-tabMenu [model]=\"items\"></p-tabMenu>\r\n<p></p>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/feed/feed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FeedComponent = /** @class */ (function () {
    function FeedComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    FeedComponent.prototype.ngOnInit = function () {
        //this.email = sessionStorage.getItem("emailUsuario");
        //usuario = this.usuarioServico.carregar(email);
        this.items = [
            { label: 'Meu perfil', icon: 'fas fa-user', routerLink: ["/feed/perfil"] },
            { label: 'Meus animais', icon: 'fas fa-book', routerLink: ["/feed/meus-animais"] },
            { label: 'Adicionar animal', icon: 'fas fa-plus-square', routerLink: ["/feed/adicionar-animal"] },
        ];
    };
    FeedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-feed',
            template: __webpack_require__("./src/app/feed/feed.component.html"),
            styles: [__webpack_require__("./src/app/feed/feed.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]])
    ], FeedComponent);
    return FeedComponent;
}());



/***/ }),

/***/ "./src/app/feed/feed.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__feed_routing_module__ = __webpack_require__("./src/app/feed/feed.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__perfil_perfil_component__ = __webpack_require__("./src/app/feed/perfil/perfil.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__meus_animais_meus_animais_component__ = __webpack_require__("./src/app/feed/meus-animais/meus-animais.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__adicionar_animal_adicionar_animal_component__ = __webpack_require__("./src/app/feed/adicionar-animal/adicionar-animal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_inputtext__ = __webpack_require__("./node_modules/primeng/inputtext.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_inputtext___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_primeng_inputtext__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_listbox__ = __webpack_require__("./node_modules/primeng/listbox.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_listbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_primeng_listbox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_radiobutton__ = __webpack_require__("./node_modules/primeng/radiobutton.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_radiobutton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_primeng_radiobutton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__animal_service__ = __webpack_require__("./src/app/animal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_primeng_button__ = __webpack_require__("./node_modules/primeng/button.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_primeng_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_primeng_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_primeng_inputtextarea__ = __webpack_require__("./node_modules/primeng/inputtextarea.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_primeng_inputtextarea___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_primeng_inputtextarea__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var FeedModule = /** @class */ (function () {
    function FeedModule() {
    }
    FeedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_0__feed_routing_module__["a" /* FeedRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6_primeng_inputtext__["InputTextModule"],
                __WEBPACK_IMPORTED_MODULE_7_primeng_listbox__["ListboxModule"],
                __WEBPACK_IMPORTED_MODULE_8_primeng_radiobutton__["RadioButtonModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_button__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_12_primeng_inputtextarea__["InputTextareaModule"],
            ],
            exports: [],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__perfil_perfil_component__["a" /* PerfilComponent */],
                __WEBPACK_IMPORTED_MODULE_4__meus_animais_meus_animais_component__["a" /* MeusAnimaisComponent */],
                __WEBPACK_IMPORTED_MODULE_5__adicionar_animal_adicionar_animal_component__["a" /* AdicionarAnimalComponent */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__animal_service__["a" /* AnimalService */]],
        })
    ], FeedModule);
    return FeedModule;
}());



/***/ }),

/***/ "./src/app/feed/feed.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__adicionar_animal_adicionar_animal_component__ = __webpack_require__("./src/app/feed/adicionar-animal/adicionar-animal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__meus_animais_meus_animais_component__ = __webpack_require__("./src/app/feed/meus-animais/meus-animais.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__perfil_perfil_component__ = __webpack_require__("./src/app/feed/perfil/perfil.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__feed_component__ = __webpack_require__("./src/app/feed/feed.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//COMPONENTES




var feedRoutes = [
    { path: 'feed', component: __WEBPACK_IMPORTED_MODULE_5__feed_component__["a" /* FeedComponent */], children: [
            { path: 'perfil', component: __WEBPACK_IMPORTED_MODULE_4__perfil_perfil_component__["a" /* PerfilComponent */] },
            { path: 'meus-animais', component: __WEBPACK_IMPORTED_MODULE_3__meus_animais_meus_animais_component__["a" /* MeusAnimaisComponent */] },
            { path: 'adicionar-animal', component: __WEBPACK_IMPORTED_MODULE_2__adicionar_animal_adicionar_animal_component__["a" /* AdicionarAnimalComponent */] },
        ] }
];
var FeedRoutingModule = /** @class */ (function () {
    function FeedRoutingModule() {
    }
    FeedRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(feedRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"]]
        })
    ], FeedRoutingModule);
    return FeedRoutingModule;
}());



/***/ }),

/***/ "./src/app/feed/meus-animais/meus-animais.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/feed/meus-animais/meus-animais.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n<p>\r\n  oi\r\n</p>"

/***/ }),

/***/ "./src/app/feed/meus-animais/meus-animais.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeusAnimaisComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MeusAnimaisComponent = /** @class */ (function () {
    function MeusAnimaisComponent() {
    }
    MeusAnimaisComponent.prototype.ngOnInit = function () {
    };
    MeusAnimaisComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-meus-animais',
            template: __webpack_require__("./src/app/feed/meus-animais/meus-animais.component.html"),
            styles: [__webpack_require__("./src/app/feed/meus-animais/meus-animais.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MeusAnimaisComponent);
    return MeusAnimaisComponent;
}());



/***/ }),

/***/ "./src/app/feed/perfil/perfil.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/feed/perfil/perfil.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  perfil works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/feed/perfil/perfil.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PerfilComponent = /** @class */ (function () {
    function PerfilComponent() {
    }
    PerfilComponent.prototype.ngOnInit = function () {
    };
    PerfilComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-perfil',
            template: __webpack_require__("./src/app/feed/perfil/perfil.component.html"),
            styles: [__webpack_require__("./src/app/feed/perfil/perfil.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PerfilComponent);
    return PerfilComponent;
}());



/***/ }),

/***/ "./src/app/tela-inicial/tela-inicial.component.css":
/***/ (function(module, exports) {

module.exports = "body{\r\n    font-family: arial, monospace;\r\n    background-color: rgb(238, 212, 183);\r\n}\r\n.login{\r\n    padding: 50px 220px;\r\n    background-color: #EED5B7;\r\n}\r\n.button{\r\n    background-color: #FF82AB;\r\n    border: #FF82AB;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/tela-inicial/tela-inicial.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\r\n<div class=\"ui-g\">\r\n    <div class=\"login ui-g-12 ui-g-nopad\">\r\n        <div class=\"ui-g-4\">logo</div>\r\n        <div class=\"ui-inputgroup\">\r\n        <form #formLogin=\"ngForm\">\r\n        <table id=\"login\">\r\n        <tr>    \r\n            <th> Email </th>\r\n        <td>\r\n            <input #campoEmail=\"ngModel\" type=\"text\" pInputText [(ngModel)]=\"usuario.email\" name=\"emailEntrar\"/>\r\n        </td>\r\n        <th> Senha </th>\r\n        <td>\r\n            <input #campoSenha=\"ngModel\" type=\"password\" pInputText [(ngModel)]=\"usuario.senha\" name=\"senhaEntrar\"/>\r\n        </td>\r\n        <td>\r\n            <button pButton type=\"button\" label=\"Entrar\" (click)=\"entrar()\" class=\"ui-button-success\"></button>\r\n        </td>\r\n        </tr>\r\n        </table>\r\n        </form>\r\n        </div>\r\n    </div>\r\n        <div class=\"ui-g-5 cadastro\"></div>\r\n           <div class=\"ui-inputgroup\">\r\n            <form #formCadasrtro=\"ngForm\">\r\n            <table id=\"cadastro\">\r\n            <tr></tr>\r\n            <tr>  \r\n                <th><h3>Criar nova conta</h3></th>\r\n            </tr>\r\n            <tr>  \r\n                <th> Nome </th>\r\n            </tr><tr>\r\n            <td>\r\n                <input #campoNome=\"ngModel\" type=\"text\" pInputText [(ngModel)]=\"usuarioCadastro.nome\" name=\"nome\"/>\r\n            </td></tr>\r\n            <tr>\r\n                <th> Email </th>\r\n            </tr><tr>\r\n            <td>\r\n                <input #campoEmailNovo=\"ngModel\" type=\"text\" pInputText [(ngModel)]=\"usuarioCadastro.email\" name=\"email\"/>\r\n            </td></tr><tr>\r\n            <th> Senha </th>\r\n            </tr><tr>\r\n            <td>\r\n                <input #campoSenhaNova=\"ngModel\" type=\"password\" pInputText [(ngModel)]=\"usuarioCadastro.senha\" name=\"senha\"/>\r\n            </td></tr><tr>\r\n            <td>\r\n                <button pButton type=\"button\" label=\"Salvar\" (click)=\"salvar()\" class=\"button ui-button\"></button>\r\n            </td></tr>\r\n            </table>\r\n            </form>\r\n        </div>\r\n</div>\r\n</body>"

/***/ }),

/***/ "./src/app/tela-inicial/tela-inicial.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TelaInicialComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__usuario_service__ = __webpack_require__("./src/app/usuario.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TelaInicialComponent = /** @class */ (function () {
    function TelaInicialComponent(usuarioService, route, rotaAtiva) {
        this.usuarioService = usuarioService;
        this.route = route;
        this.rotaAtiva = rotaAtiva;
        this.user = this.rotaAtiva.snapshot.params['user'];
        this.usuario = { email: "", senha: "" };
        this.usuarios = [];
        this.msgs = [];
        this.usuarioCadastro = { email: "", nome: "", senha: "" };
    }
    TelaInicialComponent.prototype.ngOnInit = function () {
        this.usuarioService.getUsuarios();
    };
    TelaInicialComponent.prototype.entrar = function () {
        /* let podePassar: boolean = false;
         podePassar = this.usuarioService.verificar(this.usuario);
         if(podePassar == true){
           console.log("entrooouu");
           this.route.navigate(["feed"]);
         }else{
           console.log("pegou mas não pode entrar");
           //this.showError();
         }*/
    };
    TelaInicialComponent.prototype.salvar = function (usuario) {
        this.usuarioService.salvar(this.usuarioCadastro);
        //this.usuarioService.verificarSeFoiSalvo(this.usuarioCadastro);
        //sessionStorage.setItem("emailUsuario", this.usuario.email);
        this.route.navigate(['/feed']);
    };
    TelaInicialComponent.prototype.showError = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'error', summary: 'Login inexistente', detail: 'Verifique o login e a senha ou cadastre-se!' });
    };
    TelaInicialComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-tela-inicial',
            template: __webpack_require__("./src/app/tela-inicial/tela-inicial.component.html"),
            styles: [__webpack_require__("./src/app/tela-inicial/tela-inicial.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__usuario_service__["a" /* UsuarioService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]])
    ], TelaInicialComponent);
    return TelaInicialComponent;
}());



/***/ }),

/***/ "./src/app/usuario.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsuarioService = /** @class */ (function () {
    function UsuarioService(angularFirestore) {
        this.angularFirestore = angularFirestore;
        this.usuarioCollection = this.angularFirestore.collection("usuario");
    }
    UsuarioService.prototype.getUsuarios = function () {
        var _this = this;
        var resultados = [];
        var meuObservable = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.usuarioCollection.snapshotChanges().subscribe(function (result) {
                result.map(function (documents) {
                    var id = documents.payload.doc.id;
                    var data = documents.payload.doc.data();
                    var document = __assign({ id: id }, data);
                    resultados.push(document);
                });
                observer.next(resultados);
                observer.complete();
            });
        });
        return meuObservable;
    };
    /*{
      return this.usuarios;
    }*/
    UsuarioService.prototype.salvar = function (usuario) {
        this.usuarioCollection.add(usuario).then(function (resultado) {
            usuario.id = resultado.id;
        });
    };
    UsuarioService.prototype.verificar = function (usuario) {
        /*let ehValido:boolean = false;
        for(let i:number =0;i<this.usuarios.length;i++){
          if(this.usuarios[i].email == this.usuario.email && this.usuarios[i].senha == this.usuario.senha){
            ehValido = true;
          }
        }
        return ehValido;	*/
    };
    UsuarioService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], UsuarioService);
    return UsuarioService;
}());



/***/ }),

/***/ "./src/environments/BancoFirebaseConfig.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BancoFirebaseConfig; });
var BancoFirebaseConfig = {
    apiKey: "AIzaSyD3XfyexAAjvSdvda5K2GXvN_Sf9djFUSM",
    authDomain: "adopet-3300c.firebaseapp.com",
    databaseURL: "https://adopet-3300c.firebaseio.com",
    projectId: "adopet-3300c",
    storageBucket: "adopet-3300c.appspot.com",
    messagingSenderId: "430521116888"
};


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map