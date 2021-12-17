webpackJsonp([0],{

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideMenuPageModule", function() { return SideMenuPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__side_menu__ = __webpack_require__(701);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SideMenuPageModule = /** @class */ (function () {
    function SideMenuPageModule() {
    }
    SideMenuPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__side_menu__["a" /* SideMenuPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__side_menu__["a" /* SideMenuPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__side_menu__["a" /* SideMenuPage */],
            ]
        })
    ], SideMenuPageModule);
    return SideMenuPageModule;
}());

//# sourceMappingURL=side-menu.module.js.map

/***/ }),

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideMenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__connecter_connecter__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inscription_inscription__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SideMenuPage = /** @class */ (function () {
    function SideMenuPage(navCtrl, menuCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.alertCtrl = alertCtrl;
        this.MENU = {
            DARK: 'menu-dark',
        };
    }
    SideMenuPage.prototype.onGoToConnecter = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__connecter_connecter__["a" /* ConnecterPage */]);
    };
    SideMenuPage.prototype.onGoToInscrire = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__inscription_inscription__["a" /* InscriptionPage */]);
    };
    SideMenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-side-menu',template:/*ion-inline-start:"C:\xampp\htdocs\project-mobile\mobile-project-pfe\src\pages\side-menu\side-menu.html"*/'<ion-header>\n<ion-navbar color="tertiary" text-center>\n<ion-row>\n<ion-col>\n<button  ion-button block class = "suivre" [outline]=true icon-start (click)="onGoToConnecter()"  color="secondary">\n<ion-icon name="star"></ion-icon>\n  Se Connecter\n</button>\n</ion-col>\n<ion-col>\n<button ion-button block class = "suivre" [outline]=true  icon-start (click)="onGoToInscrire()" color="secondary">\n<ion-icon name="star"></ion-icon>\n   S\'Inscrire\n</button>\n</ion-col>\n</ion-row>\n</ion-navbar>\n</ion-header>\n<ion-content padding text-center class="background" >\n\n<p>\n  Nous Simplifions La Vie Pour Vous !\n</p>\n\n  <ion-slides class="home-slide" pager="true"  autoplay=5000  control loop>\n\n    <ion-slide class="swiper-slide">\n\n          <img src="./assets/img/background/je.jpg" class="portrait"/>\n          <h2>Utilisation Facile</h2>\n          <h4>IHM compréhensible à tous !</h4>\n\n    </ion-slide>\n\n    <ion-slide class="swiper-slide">\n\n      <img src="./assets/img/background/fe.jpg" class="portrait"/>\n  <h2>Belle Expérience</h2>\n    </ion-slide>\n\n    <ion-slide class="swiper-slide">\n\n\n        <img src="./assets/img/background/se.jpg"  class="portrait"/>\n          <h2>Application Portable</h2>\n        <h4> Disponible pour tous les terminaux mobiles .</h4>\n    </ion-slide>\n\n</ion-slides>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\project-mobile\mobile-project-pfe\src\pages\side-menu\side-menu.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], SideMenuPage);
    return SideMenuPage;
}());

//# sourceMappingURL=side-menu.js.map

/***/ })

});
//# sourceMappingURL=0.js.map