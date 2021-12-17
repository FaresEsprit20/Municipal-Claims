webpackJsonp([1],{

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EspaceAgentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__consulter_taches_consulter_taches__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings_settings__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__connecter_connecter__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_post_provider__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__valider_valider__ = __webpack_require__(234);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var EspaceAgentPage = /** @class */ (function () {
    function EspaceAgentPage(navCtrl, loadingCtrl, authService, postPvdr, storage) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.postPvdr = postPvdr;
        this.storage = storage;
        this.cin = "";
        this.loading = this.loadingCtrl.create({
            cssClass: 'my-loading-class',
            spinner: 'bubbles',
            duration: 3000
        });
    }
    EspaceAgentPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad EspaceAgentPage');
        this.storage.get('session_storage').then(function (result) {
            _this.dt = result;
            _this.cin = _this.dt[0].cin;
            console.log(_this.cin + 'here');
            _this.loadNotif(_this.cin);
        });
    };
    EspaceAgentPage.prototype.loadNotif = function (cin) {
        var _this = this;
        var body = {
            cin: cin,
            aksi: 'tache_notif'
        };
        console.log(body);
        this.postPvdr.postData(body).subscribe(function (data) {
            _this.nb = data;
            console.log(data);
            console.log(_this.nb);
        });
    };
    EspaceAgentPage.prototype.onGoToConsulter = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__consulter_taches_consulter_taches__["a" /* ConsulterTachesPage */]);
    };
    EspaceAgentPage.prototype.onGoToValider = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__valider_valider__["a" /* ValiderPage */]);
    };
    EspaceAgentPage.prototype.onParametres = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__settings_settings__["a" /* SettingsPage */]);
    };
    EspaceAgentPage.prototype.onDeconnect = function () {
        var body = {
            aksi: 'add_Connection'
        };
        var type = "application/json; charset= UTF-8";
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': type });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.postPvdr.postData(body).subscribe(function (data) {
            console.log('connexion fermée');
        });
    };
    EspaceAgentPage.prototype.onLogOut = function () {
        var _this = this;
        console.log(this.authService.authenticated());
        this.loading.present();
        setTimeout(function () {
            _this.onDeconnect();
            _this.authService.signOut();
            console.log(_this.authService.authenticated());
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__connecter_connecter__["a" /* ConnecterPage */]);
            _this.navCtrl.popToRoot();
            _this.loading.dismiss();
        }, 1000);
        console.log('storage nettoyé');
    };
    EspaceAgentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-espace-agent',template:/*ion-inline-start:"C:\xampp\htdocs\project-mobile\mobile-project-pfe\src\pages\espace-agent\espace-agent.html"*/'<ion-header>\n  <ion-navbar color="tertiary" hideBackButton *navbar>\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle="left">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title>Espace-Agent</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding text-center>\n\n<ion-row justify-content-center novalidate align-items-center style="height: 100%">\n      \n  <button ion-button block [outline]=true icon-start (click)="onGoToValider()" color="secondary">\n    Valider Tâche\n  </button>\n\n  \n  <button ion-button block [outline]=true icon-start (click)="onGoToConsulter()" color="secondary">\n    Consulter Tâches &nbsp;\n    <ion-badge item-end>{{ this.nb }}</ion-badge>\n      </button>\n\n    <button ion-button block [outline]=true icon-start  (click)="onParametres()" color="secondary">\n\n    Paramètres\n    </button>\n\n    <button ion-button block [outline]=true icon-start  (click)="onLogOut()" color="secondary">\n\n    Déconnecter\n    </button>\n\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\project-mobile\mobile-project-pfe\src\pages\espace-agent\espace-agent.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_8__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_7__providers_post_provider__["a" /* PostProvider */], __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], EspaceAgentPage);
    return EspaceAgentPage;
}());

//# sourceMappingURL=espace-agent.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InscriptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__connecter_connecter__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_inscription_provider__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var InscriptionPage = /** @class */ (function () {
    function InscriptionPage(navCtrl, postPvdr, loadingCtrl, http, toastCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.postPvdr = postPvdr;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.cin = "";
        this.fullname = "";
        this.mailadress = "";
        this.password = "";
        this.password_repeat = "";
        this.Form = formBuilder.group({
            cin: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[0-9]*'), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(8)])],
            fullname: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[a-zA-Z _]+[a-zA-Z _]'), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(7), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(30)])],
            mailadress: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].email])],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(15)])],
            password_repeat: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(15), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, this.equalto('password')])]
        });
        this.loading = this.loadingCtrl.create({
            cssClass: 'my-loading-class',
            spinner: 'bubbles',
            duration: 3000
        });
    }
    InscriptionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InscriptionPage');
    };
    InscriptionPage.prototype.addRgister = function () {
        var _this = this;
        var body = {
            cin: this.cin,
            fullname: this.fullname,
            mailadress: this.mailadress,
            password: this.password
        };
        var type = "application/json; charset= UTF-8";
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]({ 'Content-Type': type });
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.postPvdr.postData(body).subscribe(function (data) {
            if (data.success) {
                var toast = _this.toastCtrl.create({
                    message: 'Félicitations ; Vous êtes inscrit !',
                    duration: 4000
                });
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__connecter_connecter__["a" /* ConnecterPage */]);
                toast.present();
            }
            else if (data.success == false) {
                var toast = _this.toastCtrl.create({
                    message: 'Utilisateur déja incrit !',
                    duration: 4000
                });
                toast.present();
            }
        });
    };
    InscriptionPage.prototype.onSubmit = function (form) {
        var _this = this;
        this.cin = this.Form.controls.cin.value;
        console.log(this.cin);
        this.fullname = this.Form.controls.fullname.value;
        console.log(this.fullname);
        this.mailadress = this.Form.controls.mailadress.value;
        console.log(this.mailadress);
        this.password = this.Form.controls.password.value;
        console.log(this.password);
        this.addRgister();
        this.loading.present();
        setTimeout(function () {
            console.log(form.value);
            _this.loading.dismiss();
        }, 2000);
        this.Form.reset();
    };
    InscriptionPage.prototype.equalto = function (field_name) {
        return function (control) {
            var input = control.value;
            var isValid = control.root.value[field_name] == input;
            if (!isValid)
                return { 'equalTo': { isValid: isValid } };
            else
                return null;
        };
    };
    InscriptionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inscription',template:/*ion-inline-start:"C:\xampp\htdocs\project-mobile\mobile-project-pfe\src\pages\inscription\inscription.html"*/'<ion-header>\n\n  <ion-navbar color="tertiary">\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle="left">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Inscription</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content  padding >\n\n  <ion-row justify-content-center align-items-center style="height: 100%">\n    <p>\n      Inscrivez-Vous\n    </p>\n    <form #f="ngForm" novalidate  [formGroup]="Form" (ngSubmit)="onSubmit(f)">\n\n      <ion-item>\n        <ion-label stacked>CIN  :  </ion-label>\n        <ion-input  name="cin" type="number"  formControlName="cin" clearInput [(ngModel)]="cin" required   ></ion-input>\n      </ion-item>\n\n      <ion-item no-lines *ngIf="( Form.get(\'cin\').hasError(\'required\') ) && Form.get(\'cin\').touched">\n\n        <div class="error">\n          Champ Obligatoire\n        </div>\n      </ion-item>\n\n      <ion-item class="error" *ngIf="!Form.controls.cin.valid  && (Form.controls.cin.dirty)">\n\n        <div class="error">\n          cin de 8 chiffres !\n        </div>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>Nom et Prénom :  </ion-label>\n        <ion-input  name="fullname" type="text" formControlName="fullname" placeholder="exp : Abir Tounsi " clearInput [(ngModel)]="fullname" required></ion-input>\n      </ion-item>\n\n      <ion-item no-lines *ngIf="( Form.get(\'fullname\').hasError(\'required\') ) && Form.get(\'fullname\').touched">\n\n        <div class="error" *ngIf="Form.get(\'fullname\').hasError(\'required\') && Form.get(\'fullname\').touched">\n          Champ Obligatoire\n        </div>\n      </ion-item>\n\n      <ion-item class="error" *ngIf="!Form.controls.fullname.valid  && (Form.controls.fullname.dirty)">\n\n        <div class="error">\n          Non valide\n        </div>\n      </ion-item>\n\n\n      <ion-item>\n        <ion-label stacked>Email :  </ion-label>\n        <ion-input  name="mailadress"  type="email" formControlName="mailadress"  placeholder="abir.tounsi@gmail.com " clearInput [(ngModel)]="mailadress" required></ion-input>\n      </ion-item>\n\n      <ion-item class="error" *ngIf="!Form.controls.mailadress.valid  && (Form.controls.mailadress.dirty)">\n\n        <div class="error">\n          Non valide\n        </div>\n      </ion-item>\n\n      <ion-item no-lines *ngIf="( Form.get(\'mailadress\').hasError(\'required\') ) && Form.get(\'mailadress\').touched">\n\n        <div class="error" *ngIf="Form.get(\'mailadress\').hasError(\'required\') && Form.get(\'mailadress\').touched">\n          Champ Obligatoire\n        </div>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>Mot de passe  :</ion-label>\n        <ion-input name="password" type="password" formControlName="password" placeholder="Mot de passe" clearInput [(ngModel)]="password" required></ion-input>\n      </ion-item>\n\n      <ion-item no-lines *ngIf="( Form.get(\'password\').hasError(\'required\') ) && Form.get(\'password\').touched">\n\n        <div class="error" *ngIf="Form.get(\'password\').hasError(\'required\') && Form.get(\'password\').touched">\n          Champ Obligatoire\n        </div>\n      </ion-item>\n\n      <ion-item class="error" *ngIf="!Form.controls.password.valid  && (Form.controls.password.dirty)">\n\n        <div class="error">\n          Non Valide !\n        </div>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>Retaper le Mot de passe  : </ion-label>\n        <ion-input name="password-repeat" type="password" formControlName="password_repeat"  placeholder="Retaper le Mot de passe" clearInput  [(ngModel)]="password_repeat" required></ion-input>\n      </ion-item>\n\n      <ion-item no-lines *ngIf="( Form.get(\'password_repeat\').hasError(\'equalTo\') || Form.get(\'password_repeat\').hasError(\'required\') ) && Form.get(\'password_repeat\').touched">\n\n        <div class="error" *ngIf="Form.get(\'password_repeat\').hasError(\'required\') && Form.get(\'password_repeat\').touched">\n          Champ Obligatoire\n        </div>\n        <div class="error" *ngIf="Form.get(\'password_repeat\').hasError(\'equalTo\') && Form.get(\'password_repeat\').touched">\n          Mots de Passes incompatibles\n        </div>\n      </ion-item>\n\n      <ion-item class="error" *ngIf="!Form.controls.password_repeat.valid  && (Form.controls.password_repeat.dirty)">\n\n        <div class="error">\n          Non Valide !\n        </div>\n      </ion-item>\n\n      <ion-col text-center>\n        <button ion-button block color="success" type="submit"  [disabled]="Form.invalid">\n          Inscrivez-Vous\n        </button>\n      </ion-col>\n\n      <ion-col text-center>\n        <button ion-button block color="danger" type="reset" >\n          Initialiser\n        </button>\n      </ion-col>\n    </form>\n  </ion-row>\n</ion-content>\n\n<style type="text/css">\n  .error\n  {\n    color:red;\n  }\n</style>\n'/*ion-inline-end:"C:\xampp\htdocs\project-mobile\mobile-project-pfe\src\pages\inscription\inscription.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_inscription_provider__["a" /* InscriptionProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], InscriptionPage);
    return InscriptionPage;
}());

//# sourceMappingURL=inscription.js.map

/***/ }),

/***/ 170:
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
webpackEmptyAsyncContext.id = 170;

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/side-menu/side-menu.module": [
		700,
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
webpackAsyncContext.id = 215;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuivreReclamationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__single_reclamation_single_reclamation__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_post_provider__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SuivreReclamationPage = /** @class */ (function () {
    function SuivreReclamationPage(navCtrl, postPvdr, http, storage, toastCtrl, appCtrl) {
        this.navCtrl = navCtrl;
        this.postPvdr = postPvdr;
        this.http = http;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.cin = "";
        this.rec_id = "";
        this.type_rec = "";
        this.description = "";
        this.adresse = "";
        this.etat_rec = "";
        this.datetime = "";
        this.gouvernorat = "";
        this.commune = "";
        this.cin_admin = "";
        this.postal = "";
        this.fichiers = "";
        this.server = this.postPvdr.server;
    }
    //evenement d'entrée
    SuivreReclamationPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log('ionViewWillEnter SettingsPage');
        this.storage.get('session_storage').then(function (result) {
            _this.dt = result;
            _this.cin = _this.dt[0].cin;
            console.log(_this.cin + 'here');
            _this.load(_this.cin);
        });
    };
    SuivreReclamationPage.prototype.load = function (cin) {
        var _this = this;
        var body = {
            cin: cin,
            aksi: 'suivre_reclamation'
        };
        console.log(body);
        this.postPvdr.postData(body).subscribe(function (data) {
            _this.items = data.items;
            console.log(data.items);
        });
    };
    SuivreReclamationPage.prototype.onLoadReclamation = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__single_reclamation_single_reclamation__["a" /* SingleReclamationPage */], { item: item });
    };
    SuivreReclamationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-suivre-reclamation',template:/*ion-inline-start:"C:\xampp\htdocs\project-mobile\mobile-project-pfe\src\pages\suivre-reclamation\suivre-reclamation.html"*/'<ion-header>\n  <ion-navbar color="tertiary">\n    <ion-title>Suivre-réclamations</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="background">\n \n  <ion-list>\n\n    <ion-item *ngFor="let item of items">\n    <ion-thumbnail item-start *ngIf="item.photo!= null">\n      <img src="{{server+item.photo}}">\n    </ion-thumbnail>\n    <h2>Réclamation ID : {{item.rec_id}} </h2>\n    <p>Type  :  {{item.type_rec}}</p>\n    <button ion-button clear item-end (click)="onLoadReclamation(item)" >voir</button>\n  </ion-item>\n\n</ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\project-mobile\mobile-project-pfe\src\pages\suivre-reclamation\suivre-reclamation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_post_provider__["a" /* PostProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
    ], SuivreReclamationPage);
    return SuivreReclamationPage;
}());

//# sourceMappingURL=suivre-reclamation.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleReclamationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_post_provider__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reclamation_reclamation__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SingleReclamationPage = /** @class */ (function () {
    function SingleReclamationPage(navCtrl, navParams, postPvdr, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.postPvdr = postPvdr;
        this.http = http;
        this.cin = "";
        this.rec_id = "";
        this.server = this.postPvdr.server;
        this.items = this.navParams.get("item");
        this.cin = this.items.cin_cit;
        console.log(this.cin);
        this.rec_id = this.items.rec_id;
        console.log(this.rec_id);
        console.log(this.items);
    }
    SingleReclamationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SingleReclamationPage');
        this.loadtache(this.items.rec_id);
    };
    SingleReclamationPage.prototype.onGo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__reclamation_reclamation__["a" /* ReclamationPage */], { item: this.rec_id });
    };
    SingleReclamationPage.prototype.loadtache = function (id) {
        var _this = this;
        var body = {
            id: id,
            aksi: 'load_tc'
        };
        console.log(body);
        this.postPvdr.postData(body).subscribe(function (data) {
            _this.itemss = data.items;
            console.log(_this.itemss);
        });
    };
    SingleReclamationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-single-reclamation',template:/*ion-inline-start:"C:\xampp\htdocs\project-mobile\mobile-project-pfe\src\pages\single-reclamation\single-reclamation.html"*/'<ion-header>\n\n  <ion-navbar color="tertiary">\n    <ion-title>INFORMATIONS</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-list >\n\n    <ion-card>\n      <ion-item>\n\n        <h3>Réclamation ID: </h3>\n        <p>{{this.items.rec_id}}</p><br />\n        <h3>Type Réclamation: </h3>\n        <p>{{ this.items.type_rec}}</p><br />\n        <h3>Etat Réclamation: </h3>\n        <p>{{ this.items.etat_reclamation}}</p><br />\n        <h3>Sujet:</h3>\n        <p>{{ this.items.sujet }}</p><br />\n        <h3>Gouvernorat: </h3>\n        <p>{{ this.items.nom_gouv }}</p><br />\n        <h3>Commune: </h3>\n        <p>{{ this.items.nom_com }}</p><br />\n        <h3>CIN Administrateur: </h3>\n        <p>{{ this.items.cin_admin }}</p><br />\n\n      </ion-item>\n\n      <h2 style="text-align:center" *ngIf="this.items.photo !=null"> PHOTO </h2>\n      <p style="text-align:center" *ngIf="this.items.photo !=null"><img src="{{server+this.items.photo}}"></p><br />\n\n      <ion-card-content>\n\n        <h3 *ngIf="this.items.adresse !=null">Adresse:</h3>\n        <p *ngIf="this.items.adresse !=null">{{ this.items.adresse }}</p><br />\n        <h3 *ngIf="this.items.postal !=null">Code Postal: </h3>\n        <p *ngIf="this.items.postal !=null">{{ this.items.postal }}</p><br />\n        <h3 *ngIf="this.items.laptitude !=null">Latitude: </h3>\n        <p *ngIf="this.items.laptitude !=null">{{ this.items.laptitude }}</p><br />\n        <h3 *ngIf="this.items.longitude !=null">Longitude: </h3>\n        <p *ngIf="this.items.longitude !=null">{{ this.items.longitude }}</p><br />\n\n      </ion-card-content>\n      \n      <ion-item >\n        <button ion-button color="tertiary" (click)="onGo()"> Justification Taches </button>\n      </ion-item>\n      <br /><br />\n      \n      <ion-row>\n\n        <ion-col align-self-center text-center>\n          <ion-note>\n            {{ this.items.datetimes }}\n          </ion-note>\n        </ion-col>\n\n      </ion-row>\n\n    </ion-card>\n\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\project-mobile\mobile-project-pfe\src\pages\single-reclamation\single-reclamation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_post_provider__["a" /* PostProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], SingleReclamationPage);
    return SingleReclamationPage;
}());

//# sourceMappingURL=single-reclamation.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReclamationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_post_provider__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ReclamationPage = /** @class */ (function () {
    function ReclamationPage(navCtrl, postPvdr, navParams, http, storage) {
        this.navCtrl = navCtrl;
        this.postPvdr = postPvdr;
        this.navParams = navParams;
        this.http = http;
        this.storage = storage;
        this.cin = "";
        this.rec_id = "";
        this.type_rec = "";
        this.description = "";
        this.adresse = "";
        this.etat_rec = "";
        this.datetime = "";
        this.gouvernorat = "";
        this.commune = "";
        this.cin_admin = "";
        this.postal = "";
        this.fichiers = "";
        this.server = this.postPvdr.server;
        this.itemss = this.navParams.get("item");
        this.tache_id = this.itemss;
        console.log(this.tache_id);
        console.log(this.itemss);
    }
    //evenement d'entrée
    ReclamationPage.prototype.ionViewWillEnter = function () {
        console.log('ionViewWillEnter ReclamationPage');
        this.loadtache();
    };
    ReclamationPage.prototype.loadtache = function () {
        var _this = this;
        var body = {
            id: this.tache_id,
            aksi: 'load_tx'
        };
        console.log(body);
        this.postPvdr.postData(body).subscribe(function (data) {
            _this.items = data.items;
            console.log(_this.items);
        });
    };
    ReclamationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reclamation',template:/*ion-inline-start:"C:\xampp\htdocs\project-mobile\mobile-project-pfe\src\pages\reclamation\reclamation.html"*/'<ion-header>\n\n  <ion-navbar color="tertiary">\n    <ion-title>Informations</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n<ion-list *ngFor="let item of items">\n  \n  <ion-item >\n    <h3>Etat_Tache: </h3>\n    <p>{{ item.etat_tache }}</p><br />\n  <h2 style="text-align:center"> PHOTO </h2>\n  <p style="text-align:center"><img src="{{server+item.justification}}"></p><br />\n  </ion-item>\n  \n\n</ion-list>\n  \n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\project-mobile\mobile-project-pfe\src\pages\reclamation\reclamation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_post_provider__["a" /* PostProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], ReclamationPage);
    return ReclamationPage;
}());

//# sourceMappingURL=reclamation.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EffectuerReclamationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__connecter_connecter__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reclamation_manuelle_reclamation_manuelle__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reclamation_automatique_reclamation_automatique__ = __webpack_require__(226);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EffectuerReclamationPage = /** @class */ (function () {
    function EffectuerReclamationPage(navCtrl, navParams, loadingCtrl, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.loading = this.loadingCtrl.create({
            cssClass: 'my-loading-class',
            spinner: 'bubbles',
            duration: 3000
        });
    }
    EffectuerReclamationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EffectuerReclamationPage');
    };
    EffectuerReclamationPage.prototype.ngOnInit = function () {
    };
    EffectuerReclamationPage.prototype.onGoTorecauto = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__reclamation_automatique_reclamation_automatique__["a" /* ReclamationAutomatiquePage */]);
    };
    EffectuerReclamationPage.prototype.onGotorecmanu = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__reclamation_manuelle_reclamation_manuelle__["a" /* ReclamationManuellePage */]);
    };
    EffectuerReclamationPage.prototype.onLogOut = function () {
        var _this = this;
        this.loading.present();
        setTimeout(function () {
            _this.authService.signOut();
            console.log(_this.authService.authenticated());
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__connecter_connecter__["a" /* ConnecterPage */]);
            _this.navCtrl.popToRoot();
            _this.loading.dismiss();
        }, 1000);
    };
    EffectuerReclamationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-effectuer-reclamation',template:/*ion-inline-start:"C:\xampp\htdocs\project-mobile\mobile-project-pfe\src\pages\effectuer-reclamation\effectuer-reclamation.html"*/'<ion-header>\n\n  <ion-navbar color="tertiary" hideBackButton *navbar>\n\n\n\n    <ion-buttons left>\n\n      <button ion-button icon-only menuToggle="left">\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n\n\n    <ion-title>Effectuer Réclamation</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content padding text-center>\n\n\n\n<ion-row justify-content-center novalidate align-items-center style="height: 100%">\n\n      <button ion-button block [outline]=true icon-start (click)="onGoTorecauto()" color="secondary">\n\n  Localisation Automatique\n\n      </button>\n\n\n\n    <button ion-button block [outline]=true icon-start (click)="onGotorecmanu()" color="secondary">\n\n  Localisation Manuelle\n\n    </button>\n\n\n\n    <button ion-button block [outline]=true icon-start  (click)="onLogOut()" color="secondary">\n\n\n\n    Déconnecter\n\n    </button>\n\n\n\n  </ion-row>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\project-mobile\mobile-project-pfe\src\pages\effectuer-reclamation\effectuer-reclamation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]])
    ], EffectuerReclamationPage);
    return EffectuerReclamationPage;
}());

//# sourceMappingURL=effectuer-reclamation.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReclamationManuellePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__espace_citoyen_espace_citoyen__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_post_provider__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ReclamationManuellePage = /** @class */ (function () {
    function ReclamationManuellePage(navCtrl, postPvdr, storage, toastCtrl, camera, appCtrl, formBuilder, http, loadingCtrl, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.postPvdr = postPvdr;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.camera = camera;
        this.appCtrl = appCtrl;
        this.formBuilder = formBuilder;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.myphoto = '';
        this.cin = "";
        this.type_rec = "";
        this.gouvernorat = "";
        this.commune = "";
        this.postal = "";
        this.description = "";
        this.adresse = "";
        this.Form = formBuilder.group({
            gouvernorat: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            commune: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            type_rec: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            postal: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[0-9]*'), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(4)])],
            adresse: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(60)])],
            description: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])]
        });
        this.loading = this.loadingCtrl.create({
            cssClass: 'my-loading-class',
            spinner: 'bubbles',
            duration: 3000
        });
    }
    ReclamationManuellePage.prototype.ionViewWillEnter = function () {
        console.log('ionViewWillEnter ReclamationManuellePage');
    };
    //actionsheet
    ReclamationManuellePage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Choix du média',
            buttons: [
                {
                    text: 'Caméra',
                    icon: 'camera',
                    handler: function () {
                        _this.takePhoto();
                        console.log('Caméra clicked');
                    }
                }, {
                    text: 'Gallerie',
                    icon: 'image',
                    handler: function () {
                        _this.openGallery();
                        console.log('Gallerie clicked');
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    ReclamationManuellePage.prototype.takePhoto = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.cameraData = imageData;
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
    };
    //Gallerie
    ReclamationManuellePage.prototype.openGallery = function () {
        var _this = this;
        var options = {
            quality: 100,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.cameraData = imageData;
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
    };
    ReclamationManuellePage.prototype.loadCommune = function () {
        var _this = this;
        var body = {
            gouvernorat: this.gouv,
            aksi: 'load_commune'
        };
        console.log(body);
        var type = "application/json; charset= UTF-8";
        var headers = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Headers */]({ 'Content-Type': type });
        var options = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.postPvdr.postData(body).subscribe(function (data) {
            _this.items = data.items;
            console.log(data.items);
        });
    };
    ReclamationManuellePage.prototype.loadRecManuelle = function () {
        var _this = this;
        this.storage.get('session_storage').then(function (result) {
            _this.dt = result;
            _this.cin = _this.dt[0].cin;
            console.log(_this.cin + 'here');
            _this.addReclamationManuelle(_this.cin);
        });
    };
    ReclamationManuellePage.prototype.addReclamationManuelle = function (cin) {
        var body = {
            cin: cin,
            description: this.description,
            commune: this.commune,
            gouvernorat: this.gouvernorat,
            postal: this.postal,
            adresse: this.adresse,
            type_rec: this.type_rec,
            images: this.cameraData,
            aksi: 'add_RecManuelle'
        };
        console.log(body);
        var type = "application/json; charset= UTF-8";
        var headers = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Headers */]({ 'Content-Type': type });
        var options = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.postPvdr.postData(body).subscribe(function (data) {
        });
    };
    ReclamationManuellePage.prototype.onSubmit = function (form) {
        var _this = this;
        this.type_rec = this.Form.controls.type_rec.value;
        console.log(this.type_rec);
        this.gouvernorat = this.Form.controls.gouvernorat.value;
        console.log(this.gouvernorat);
        this.commune = this.Form.controls.commune.value;
        console.log(this.commune);
        this.postal = this.Form.controls.postal.value;
        console.log(this.postal);
        this.description = this.Form.controls.description.value;
        console.log(this.description);
        this.adresse = this.Form.controls.adresse.value;
        console.log(this.adresse);
        if (this.base64Image != '' && this.base64Image != null && this.cameraData != null) {
            console.log('obligatoire');
            this.loadRecManuelle();
            this.loading.present();
            setTimeout(function () {
                console.log(form.value);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__espace_citoyen_espace_citoyen__["a" /* EspaceCitoyenPage */]);
                var toast = _this.toastCtrl.create({
                    message: 'Félicitations ; Votre réclamation a été effectué !',
                    duration: 3000
                });
                toast.present();
                _this.loading.dismiss();
            }, 2000);
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Echec ! ; Veuillez Capturer ou importer une photo !',
                duration: 3000
            });
            toast.present();
        }
    };
    ReclamationManuellePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reclamation-manuelle',template:/*ion-inline-start:"C:\xampp\htdocs\project-mobile\mobile-project-pfe\src\pages\reclamation-manuelle\reclamation-manuelle.html"*/'<ion-header>\n\n\n\n      <ion-navbar color="tertiary">\n\n            <ion-title>Localisation Manuelle</ion-title>\n\n      </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n      <ion-row justify-content-center align-items-center style="height: 100%">\n\n            <p>\n\n                  Commencer La Réclamation\n\n            </p>\n\n\n\n            <form #f="ngForm" novalidate [formGroup]="Form">\n\n\n\n                  <ion-item>\n\n                        <ion-label multiple="true" stacked>Gouvernorat : </ion-label>\n\n                        <ion-select formControlName="gouvernorat" [(ngModel)]="gouv" (ionChange)="loadCommune();">\n\n                              <ion-option>Ariana</ion-option>\n\n                              <ion-option>Béja</ion-option>\n\n                              <ion-option>Ben Arous</ion-option>\n\n                              <ion-option>Bizerte</ion-option>\n\n                              <ion-option>Gafsa</ion-option>\n\n                              <ion-option>Gabès</ion-option>\n\n                              <ion-option>Jendouba</ion-option>\n\n                              <ion-option>Kairouan</ion-option>\n\n                              <ion-option>Kasserine</ion-option>\n\n                              <ion-option>Kébili</ion-option>\n\n                              <ion-option>Kef</ion-option>\n\n                              <ion-option>Mahdia</ion-option>\n\n                              <ion-option>Manouba</ion-option>\n\n                              <ion-option>Médenine</ion-option>\n\n                              <ion-option>Monastir</ion-option>\n\n                              <ion-option>Nabeul</ion-option>\n\n                              <ion-option>Sfax</ion-option>\n\n                              <ion-option>Sidi Bouzid</ion-option>\n\n                              <ion-option>Siliana</ion-option>\n\n                              <ion-option>Sousse</ion-option>\n\n                              <ion-option>Tataouine</ion-option>\n\n                              <ion-option>Tozeur</ion-option>\n\n                              <ion-option>Tunis</ion-option>\n\n                              <ion-option>Zaghouan</ion-option>\n\n                        </ion-select>\n\n                  </ion-item>\n\n\n\n                  <ion-item no-lines\n\n                        *ngIf="( Form.get(\'gouvernorat\').hasError(\'required\') ) && Form.get(\'gouvernorat\').touched">\n\n                        <div class="error">\n\n                              Champ Obligatoire\n\n                        </div>\n\n                  </ion-item>\n\n\n\n\n\n                  <ion-item>\n\n                        <ion-label multiple="true" stacked>Commune : </ion-label>\n\n                        <ion-select formControlName="commune" ngModel>\n\n                              <ion-option *ngFor="let item of items">{{item.nom_com}}</ion-option>\n\n                        </ion-select>\n\n                  </ion-item>\n\n                  <ion-item no-lines\n\n                        *ngIf="( Form.get(\'commune\').hasError(\'required\') ) && Form.get(\'commune\').touched">\n\n                        <div class="error">\n\n                              Champ Obligatoire\n\n                        </div>\n\n                  </ion-item>\n\n\n\n\n\n                  <ion-item>\n\n                        <ion-label multiple="true" stacked>Type réclamation : </ion-label>\n\n                        <ion-select formControlName="type_rec" ngModel>\n\n                              <ion-option>Eclairage public</ion-option>\n\n                              <ion-option>Voirie</ion-option>\n\n                              <ion-option>Proprieté</ion-option>\n\n                              <ion-option>Santé et hygiène</ion-option>\n\n                              <ion-option>Espaces verts</ion-option>\n\n                              <ion-option>Constructions anarchiques</ion-option>\n\n                              <ion-option>Occupations illégales</ion-option>\n\n                              <ion-option>Autres réclamations</ion-option>\n\n                        </ion-select>\n\n                  </ion-item>\n\n                  <ion-item no-lines\n\n                        *ngIf="( Form.get(\'type_rec\').hasError(\'required\') ) && Form.get(\'type_rec\').touched">\n\n                        <div class="error">\n\n                              Champ Obligatoire\n\n                        </div>\n\n                  </ion-item>\n\n\n\n                  <ion-item>\n\n                        <ion-label stacked>code postal</ion-label>\n\n                        <ion-input type="number" placeholder="champ facultatif" formControlName="postal" ngModel>\n\n                        </ion-input>\n\n                  </ion-item>\n\n                  <ion-item class="error" *ngIf="!Form.controls.postal.valid  && (Form.controls.postal.dirty)">\n\n                        <div class="error">\n\n                              Champ de 4 chiffres !\n\n                        </div>\n\n                  </ion-item>\n\n                  <ion-item no-lines *ngIf="( Form.get(\'postal\').hasError(\'required\') ) && Form.get(\'postal\').touched">\n\n                        <div class="error">\n\n                              Champ Obligatoire\n\n                        </div>\n\n                  </ion-item>\n\n\n\n                  <ion-item>\n\n                        <ion-textarea formControlName="adresse" placeholder="Adresse de la réclamation" clearInput\n\n                              ngModel></ion-textarea>\n\n                  </ion-item>\n\n                  <ion-item no-lines\n\n                        *ngIf="( Form.get(\'adresse\').hasError(\'required\') ) && Form.get(\'adresse\').touched">\n\n                        <div class="error">\n\n                              Champ Obligatoire\n\n                        </div>\n\n                  </ion-item>\n\n\n\n                  <ion-item>\n\n                        <ion-textarea formControlName="description" placeholder="Sujet de la réclamation" clearInput\n\n                              ngModel></ion-textarea>\n\n                  </ion-item>\n\n                  <ion-item class="error"\n\n                        *ngIf="!Form.controls.description.valid  && (Form.controls.description.dirty)">\n\n\n\n                        <div class="error">\n\n                              Non Valide !\n\n                        </div>\n\n                  </ion-item>\n\n\n\n                  <ion-item no-lines\n\n                        *ngIf="( Form.get(\'description\').hasError(\'required\') ) && Form.get(\'description\').touched">\n\n                        <div class="error">\n\n                              Champ Obligatoire\n\n                        </div>\n\n                  </ion-item>\n\n\n\n                  <ion-item>\n\n                        <button ion-button color="tertiary" (click)="presentActionSheet()"> Choix du Média </button>\n\n                  </ion-item>\n\n\n\n                  <ion-item *ngIf="base64Image!=null">\n\n                        <img src="{{base64Image}}" title="pict">\n\n                  </ion-item>\n\n\n\n\n\n\n\n                  <ion-col text-center>\n\n                        <button ion-button block color="success" type="submit" (click)="onSubmit(f)"\n\n                              [disabled]="Form.invalid">\n\n                              Effectuer Réclamation\n\n                        </button>\n\n                  </ion-col>\n\n                  <ion-col text-center>\n\n                        <button ion-button block color="danger" type="reset">\n\n                              Annuler\n\n                        </button>\n\n                  </ion-col>\n\n\n\n            </form>\n\n      </ion-row>\n\n</ion-content>\n\n\n\n\n\n<style type="text/css">\n\n      .error {\n\n            color: red;\n\n      }\n\n</style>'/*ion-inline-end:"C:\xampp\htdocs\project-mobile\mobile-project-pfe\src\pages\reclamation-manuelle\reclamation-manuelle.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__providers_post_provider__["a" /* PostProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */]])
    ], ReclamationManuellePage);
    return ReclamationManuellePage;
}());

//# sourceMappingURL=reclamation-manuelle.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReclamationAutomatiquePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_geocoder__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__espace_citoyen_espace_citoyen__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_post_provider__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_catch__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var ReclamationAutomatiquePage = /** @class */ (function () {
    function ReclamationAutomatiquePage(navCtrl, storage, toastCtrl, postPvdr, plt, appCtrl, geolocation, platform, formBuilder, loadingCtrl, camera, transfer, actionSheetCtrl, file, http, nativeGeocoder) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.postPvdr = postPvdr;
        this.plt = plt;
        this.appCtrl = appCtrl;
        this.geolocation = geolocation;
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.camera = camera;
        this.transfer = transfer;
        this.actionSheetCtrl = actionSheetCtrl;
        this.file = file;
        this.http = http;
        this.nativeGeocoder = nativeGeocoder;
        this.geoencoderOptions = {
            useLocale: true,
            maxResults: 5
        };
        this.myphoto = '';
        this.cin = "";
        this.type_rec = "";
        this.description = "";
        this.gouvernorat = "";
        this.commune = "";
        this.postal = "";
        this.adresse = "";
        this.Form = formBuilder.group({
            gouvernorat: ['', __WEBPACK_IMPORTED_MODULE_8__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_8__angular_forms__["f" /* Validators */].required])],
            commune: ['', __WEBPACK_IMPORTED_MODULE_8__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_8__angular_forms__["f" /* Validators */].required])],
            type_rec: ['', __WEBPACK_IMPORTED_MODULE_8__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_8__angular_forms__["f" /* Validators */].required])],
            description: ['', __WEBPACK_IMPORTED_MODULE_8__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_8__angular_forms__["f" /* Validators */].required])],
            position: ['',]
        });
        this.loading = this.loadingCtrl.create({
            cssClass: 'my-loading-class',
            spinner: 'bubbles',
            duration: 3000
        });
        this.platform.ready().then(function () {
            //set options
            var options = {
                timeout: 20000 // milliseconds
            };
            //use the geolocation 
            _this.geolocation.getCurrentPosition(options).then(function (data) {
                _this.laptitude = data.coords.latitude;
                _this.longitude = data.coords.longitude;
                _this.geoAccuracy = data.coords.accuracy;
                //this.getGeoencoder(this.laptitude,this.longitude);
                _this.getGeoencoder(_this.laptitude, _this.longitude);
            }).catch(function (err) {
                console.log("Erreur", err);
            });
            _this.watchLocation();
        });
    }
    ReclamationAutomatiquePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReclamationAutomatiquePage');
    };
    //actionsheet
    ReclamationAutomatiquePage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Choix du média',
            buttons: [
                {
                    text: 'Caméra',
                    icon: 'camera',
                    handler: function () {
                        _this.takePhoto();
                        console.log('Caméra clicked');
                    }
                }, {
                    text: 'Gallerie',
                    icon: 'image',
                    handler: function () {
                        _this.openGallery();
                        console.log('Gallerie clicked');
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    ReclamationAutomatiquePage.prototype.takePhoto = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.cameraData = imageData;
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
    };
    //Gallerie
    ReclamationAutomatiquePage.prototype.openGallery = function () {
        var _this = this;
        var options = {
            quality: 100,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.cameraData = imageData;
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
    };
    //geocoder method to fetch address from coordinates passed as arguments
    ReclamationAutomatiquePage.prototype.getGeoencoder = function (latitude, longitude) {
        var _this = this;
        this.nativeGeocoder.reverseGeocode(latitude, longitude, this.geoencoderOptions)
            .then(function (result) {
            _this.geoAddress = _this.generateAddress(result[0]);
            _this.adresse = _this.generateAddress(result[0]);
            alert(_this.geoAddress);
            alert(_this.adresse);
        })
            .catch(function (error) {
            alert('Error getting location' + JSON.stringify(error));
        });
    };
    //Return Comma saperated address
    ReclamationAutomatiquePage.prototype.generateAddress = function (addressObj) {
        var obj = [];
        var address = "";
        for (var key in addressObj) {
            obj.push(addressObj[key]);
        }
        obj.reverse();
        for (var val in obj) {
            if (obj[val].length)
                address += obj[val] + ', ';
        }
        return address.slice(0, -2);
    };
    //Start location update watch
    ReclamationAutomatiquePage.prototype.watchLocation = function () {
        var _this = this;
        this.isWatching = true;
        this.watchLocationUpdates = this.geolocation.watchPosition();
        this.watchLocationUpdates.subscribe(function (resp) {
            _this.laptitude = resp.coords.latitude;
            _this.longitude = resp.coords.longitude;
        });
    };
    //Stop location update watch
    ReclamationAutomatiquePage.prototype.stopLocationWatch = function () {
        this.isWatching = false;
        this.watchLocationUpdates.unsubscribe();
    };
    ReclamationAutomatiquePage.prototype.loadCommune = function () {
        var _this = this;
        var body = {
            gouvernorat: this.gouv,
            aksi: 'load_commune'
        };
        console.log(body);
        var type = "application/json; charset= UTF-8";
        var headers = new __WEBPACK_IMPORTED_MODULE_11__angular_http__["a" /* Headers */]({ 'Content-Type': type });
        var options = new __WEBPACK_IMPORTED_MODULE_11__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.postPvdr.postData(body).subscribe(function (data) {
            _this.items = data.items;
            console.log(data.items);
        });
    };
    ReclamationAutomatiquePage.prototype.loadRecAuto = function () {
        var _this = this;
        this.storage.get('session_storage').then(function (result) {
            _this.dt = result;
            _this.cin = _this.dt[0].cin;
            console.log(_this.cin + 'here');
            _this.addReclamationAutomatique(_this.cin);
        });
    };
    ReclamationAutomatiquePage.prototype.addReclamationAutomatique = function (cin) {
        var body = {
            cin: cin,
            description: this.description,
            gouvernorat: this.gouv,
            commune: this.commune,
            postal: this.postal,
            adresse: this.adresse,
            type_rec: this.type_rec,
            images: this.cameraData,
            laptitude: this.laptitude,
            longitude: this.longitude,
            aksi: 'add_RecAutomatique'
        };
        var type = "application/json; charset= UTF-8";
        var headers = new __WEBPACK_IMPORTED_MODULE_11__angular_http__["a" /* Headers */]({ 'Content-Type': type });
        var options = new __WEBPACK_IMPORTED_MODULE_11__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.postPvdr.postData(body).subscribe(function (data) {
        });
    };
    ReclamationAutomatiquePage.prototype.onSubmit = function (form) {
        var _this = this;
        this.type_rec = this.Form.controls.type_rec.value;
        console.log(this.type_rec);
        this.description = this.Form.controls.description.value;
        this.gouvernorat = this.Form.controls.gouvernorat.value;
        console.log(this.gouvernorat);
        this.commune = this.Form.controls.commune.value;
        console.log(this.commune);
        console.log(this.description);
        console.log(this.laptitude);
        console.log(this.longitude);
        if (this.base64Image != '' && this.laptitude != null && this.longitude != null) {
            console.log('obligatoire');
            this.loadRecAuto();
            this.loading.present();
            setTimeout(function () {
                console.log(form.value);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__espace_citoyen_espace_citoyen__["a" /* EspaceCitoyenPage */]);
                var toast = _this.toastCtrl.create({
                    message: 'Félicitations ; Votre réclamation a été effectué !',
                    duration: 3000
                });
                toast.present();
                _this.loading.dismiss();
            }, 2000);
        }
        else if (this.base64Image == '') {
            var toast = this.toastCtrl.create({
                message: 'Echec ! ; Veuillez Capturer ou importer une photo !',
                duration: 3000
            });
            toast.present();
        }
        else if (this.laptitude == null && this.longitude == null) {
            var toast = this.toastCtrl.create({
                message: 'Echec ! ; Erreur de géolocation !',
                duration: 3000
            });
            toast.present();
        }
    };
    ReclamationAutomatiquePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reclamation-automatique',template:/*ion-inline-start:"C:\xampp\htdocs\project-mobile\mobile-project-pfe\src\pages\reclamation-automatique\reclamation-automatique.html"*/'<ion-header>\n\n\n\n      <ion-navbar color="tertiary">\n\n            <ion-title>Localisation Automatique</ion-title>\n\n      </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n      <ion-row justify-content-center align-items-center style="height: 100%">\n\n            <p>\n\n                  Commencer La Réclamation\n\n            </p>\n\n            <form #f="ngForm" novalidate [formGroup]="Form">\n\n\n\n                  <ion-item>\n\n                        <ion-label multiple="true" stacked>Type réclamation : </ion-label>\n\n                        <ion-select formControlName="type_rec" ngModel>\n\n                              <ion-option>Eclairage public</ion-option>\n\n                              <ion-option>Voirie</ion-option>\n\n                              <ion-option>Proprieté</ion-option>\n\n                              <ion-option>Santé et hygiène</ion-option>\n\n                              <ion-option>Espaces verts</ion-option>\n\n                              <ion-option>Constructions anarchiques</ion-option>\n\n                              <ion-option>Occupations illégales</ion-option>\n\n                              <ion-option>Autres réclamations</ion-option>\n\n                        </ion-select>\n\n                  </ion-item>\n\n\n\n                  <ion-item no-lines\n\n                        *ngIf="( Form.get(\'type_rec\').hasError(\'required\') ) && Form.get(\'type_rec\').touched">\n\n                        <div class="error">\n\n                              Champ Obligatoire\n\n                        </div>\n\n                  </ion-item>\n\n                  <ion-item>\n\n                        <ion-label multiple="true" stacked>Gouvernorat : </ion-label>\n\n                        <ion-select formControlName="gouvernorat" [(ngModel)]="gouv" (ionChange)="loadCommune();">\n\n                              <ion-option>Ariana</ion-option>\n\n                              <ion-option>Ben Arous</ion-option>\n\n                              <ion-option>Béja</ion-option>\n\n                              <ion-option>Bizerte</ion-option>\n\n                              <ion-option>Gafsa</ion-option>\n\n                              <ion-option>Gabès</ion-option>\n\n                              <ion-option>Jendouba</ion-option>\n\n                              <ion-option>Kairouan</ion-option>\n\n                              <ion-option>Kasserine</ion-option>\n\n                              <ion-option>Kébili</ion-option>\n\n                              <ion-option>Kef</ion-option>\n\n                              <ion-option>Mahdia</ion-option>\n\n                              <ion-option>Manouba</ion-option>\n\n                              <ion-option>Médenine</ion-option>\n\n                              <ion-option>Monastir</ion-option>\n\n                              <ion-option>Nabeul</ion-option>\n\n                              <ion-option>Sfax</ion-option>\n\n                              <ion-option>Sidi Bouzid</ion-option>\n\n                              <ion-option>Siliana</ion-option>\n\n                              <ion-option>Sousse</ion-option>\n\n                              <ion-option>Tataouine</ion-option>\n\n                              <ion-option>Tozeur</ion-option>\n\n                              <ion-option>Tunis</ion-option>\n\n                              <ion-option>Zaghouan</ion-option>\n\n                        </ion-select>\n\n                  </ion-item>\n\n\n\n                  <ion-item no-lines\n\n                        *ngIf="( Form.get(\'gouvernorat\').hasError(\'required\') ) && Form.get(\'gouvernorat\').touched">\n\n                        <div class="error">\n\n                              Champ Obligatoire\n\n                        </div>\n\n                  </ion-item>\n\n\n\n\n\n                  <ion-item>\n\n                        <ion-label multiple="true" stacked>Commune : </ion-label>\n\n                        <ion-select formControlName="commune" ngModel>\n\n                              <ion-option *ngFor="let item of items">{{item.nom_com}}</ion-option>\n\n                        </ion-select>\n\n                  </ion-item>\n\n                  <ion-item no-lines\n\n                        *ngIf="( Form.get(\'commune\').hasError(\'required\') ) && Form.get(\'commune\').touched">\n\n                        <div class="error">\n\n                              Champ Obligatoire\n\n                        </div>\n\n                  </ion-item>\n\n                  <ion-item>\n\n                        <ion-textarea formControlName="description" placeholder="Sujet de la réclamation" ngModel\n\n                              clearInput></ion-textarea>\n\n                  </ion-item>\n\n                  <ion-item class="error"\n\n                        *ngIf="!Form.controls.description.valid  && (Form.controls.description.dirty)">\n\n\n\n                        <div class="error">\n\n                              Non Valide !\n\n                        </div>\n\n                  </ion-item>\n\n                  <ion-item no-lines\n\n                        *ngIf="( Form.get(\'description\').hasError(\'required\') ) && Form.get(\'description\').touched">\n\n                        <div class="error">\n\n                              Champ Obligatoire\n\n                        </div>\n\n                  </ion-item>\n\n\n\n                  <ion-item>\n\n                        <button ion-button color="tertiary" (click)="presentActionSheet()"> Choix du Média </button>\n\n                  </ion-item>\n\n\n\n                  <ion-item *ngIf="base64Image!=\'\'">\n\n                        <img src="{{base64Image}}" title="pict">\n\n                  </ion-item>\n\n\n\n                  <ion-item>\n\n                        Latitude : {{ this.laptitude }}\n\n                  </ion-item>\n\n\n\n                  <ion-item>\n\n                        Longitude : {{ this.longitude }}\n\n                        </ion-item>\n\n\n\n                        \n\n\n\n                        <ion-col text-center>\n\n                              <button ion-button block color="success" type="submit" (click)="onSubmit(f)"\n\n                                    [disabled]="Form.invalid">\n\n                                    Effectuer Réclamation\n\n                              </button>\n\n                        </ion-col>\n\n                        <ion-col text-center>\n\n                              <button ion-button block color="danger" type="reset">\n\n                                    Annuler\n\n                              </button>\n\n                        </ion-col>\n\n            </form>\n\n\n\n      </ion-row>\n\n</ion-content>\n\n\n\n\n\n<style type="text/css">\n\n      .error {\n\n            color: red;\n\n      }\n\n</style>'/*ion-inline-end:"C:\xampp\htdocs\project-mobile\mobile-project-pfe\src\pages\reclamation-automatique\reclamation-automatique.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_10__providers_post_provider__["a" /* PostProvider */], __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_11__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_geocoder__["a" /* NativeGeocoder */]])
    ], ReclamationAutomatiquePage);
    return ReclamationAutomatiquePage;
}());

//# sourceMappingURL=reclamation-automatique.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_settings__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_post_provider__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ChangePasswordPage = /** @class */ (function () {
    function ChangePasswordPage(navCtrl, toastCtrl, formBuilder, postPvdr, storage) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.postPvdr = postPvdr;
        this.storage = storage;
        console.log("Hello UserPreferencesProvider Provider");
        this.Form = formBuilder.group({
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(15)])],
            password_repeat: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(15), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, this.equalto('password')])]
        });
    }
    ChangePasswordPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log('ionViewWillEnter ChangePasswordPage');
        this.storage.get('session_storage').then(function (result) {
            _this.dt = result;
            _this.cin = _this.dt[0].cin;
            console.log(_this.cin);
            console.log(result);
        });
    };
    ChangePasswordPage.prototype.changePassword = function () {
        var _this = this;
        var body = {
            password: this.password,
            cin: this.cin,
            aksi: 'password'
        };
        var type = "application/json; charset= UTF-8";
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Content-Type': type });
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.postPvdr.postData(body).subscribe(function (data) {
            if (data.success) {
                console.log('mot de passse enregistré !');
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__settings_settings__["a" /* SettingsPage */]);
            }
        });
    };
    ChangePasswordPage.prototype.onSubmit = function (form) {
        this.password = this.Form.get('password').value;
        console.log(form.value);
        this.changePassword();
        var toast = this.toastCtrl.create({
            message: 'Mot de Passe changé !',
            duration: 4000
        });
        toast.present();
    };
    ChangePasswordPage.prototype.equalto = function (field_name) {
        return function (control) {
            var input = control.value;
            var isValid = control.root.value[field_name] == input;
            if (!isValid)
                return { 'equalTo': { isValid: isValid } };
            else
                return null;
        };
    };
    ChangePasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-change-password',template:/*ion-inline-start:"C:\xampp\htdocs\project-mobile\mobile-project-pfe\src\pages\change-password\change-password.html"*/'<ion-header>\n\n  <ion-navbar color="tertiary" >\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle="left">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Paramètres</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n    <p align="center">\n      Modifier Le Mot de Passe\n    </p>\n      <ion-row justify-content-center align-items-center style="height: 100%">\n    <form #f="ngForm"  (ngSubmit)="onSubmit(f)" [formGroup]="Form" text-center center>\n\n      <ion-item>\n        <ion-label stacked>Mot de passe  :</ion-label>\n        <ion-input name="password" type="password" formControlName="password" placeholder="Mot de passe" clearInput ngModel required></ion-input>\n      </ion-item>\n\n      <ion-item no-lines *ngIf="( Form.get(\'password\').hasError(\'required\') ) && Form.get(\'password\').touched">\n\n        <div class="error" *ngIf="Form.get(\'password\').hasError(\'required\') && Form.get(\'password\').touched">\n          Champ Obligatoire\n        </div>\n      </ion-item>\n\n      <ion-item class="error" *ngIf="!Form.controls.password.valid  && (Form.controls.password.dirty)">\n\n        <div class="error">\n          Non Valide !\n        </div>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>Retaper le Mot de passe  : </ion-label>\n        <ion-input name="password-repeat" type="password" formControlName="password_repeat"  placeholder="Retaper le Mot de passe" clearInput  ngModel required></ion-input>\n      </ion-item>\n\n      <ion-item no-lines *ngIf="( Form.get(\'password_repeat\').hasError(\'equalTo\') || Form.get(\'password_repeat\').hasError(\'required\') ) && Form.get(\'password_repeat\').touched">\n\n        <div class="error" *ngIf="Form.get(\'password_repeat\').hasError(\'required\') && Form.get(\'password_repeat\').touched">\n          Champ Obligatoire\n        </div>\n        <div class="error" *ngIf="Form.get(\'password_repeat\').hasError(\'equalTo\') && Form.get(\'password_repeat\').touched">\n          Mots de Passes incompatibles\n        </div>\n      </ion-item>\n\n      <ion-item class="error" *ngIf="!Form.controls.password_repeat.valid  && (Form.controls.password_repeat.dirty)">\n\n        <div class="error">\n          Non Valide !\n        </div>\n      </ion-item>\n\n      <ion-col text-center>\n        <button ion-button block type="submit" color="success" [disabled]="!Form.valid">\n          Enregistrer\n        </button>\n      </ion-col>\n    </form>\n  </ion-row>\n</ion-content>\n\n<style type="text/css">\n  .error\n  {\n    color:red;\n  }\n</style>\n'/*ion-inline-end:"C:\xampp\htdocs\project-mobile\mobile-project-pfe\src\pages\change-password\change-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_5__providers_post_provider__["a" /* PostProvider */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
    ], ChangePasswordPage);
    return ChangePasswordPage;
}());

//# sourceMappingURL=change-password.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsulterTachesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tache_tache__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_post_provider__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ConsulterTachesPage = /** @class */ (function () {
    function ConsulterTachesPage(navCtrl, postPvdr, http, storage) {
        this.navCtrl = navCtrl;
        this.postPvdr = postPvdr;
        this.http = http;
        this.storage = storage;
        this.cin = "";
        this.server = this.postPvdr.server;
    }
    ConsulterTachesPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log('ionViewWillEnter ConsulterTachesPage');
        this.storage.get('session_storage').then(function (result) {
            _this.dt = result;
            _this.cin = _this.dt[0].cin;
            console.log(_this.cin + 'here');
            _this.loadTache(_this.cin);
        });
    };
    ConsulterTachesPage.prototype.onLoadTache = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tache_tache__["a" /* TachePage */], { item: item });
    };
    ConsulterTachesPage.prototype.loadTache = function (cin) {
        var _this = this;
        var body = {
            cin: cin,
            aksi: 'suivre_tache'
        };
        console.log(body);
        this.postPvdr.postData(body).subscribe(function (data) {
            _this.items = data.items;
            console.log(data.items);
        });
    };
    ConsulterTachesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-consulter-taches',template:/*ion-inline-start:"C:\xampp\htdocs\project-mobile\mobile-project-pfe\src\pages\consulter-taches\consulter-taches.html"*/'<ion-header>\n\n  <ion-navbar color="tertiary">\n    <ion-title>Consulter-Taches</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  \n  <ion-list>\n  \n    <ion-item *ngFor="let item of items">\n      <ion-thumbnail item-start *ngIf="item.justification !=null">\n        <img src="{{server+item.justification}}">\n      </ion-thumbnail>\n      <h2>Numéro Tache :  </h2>\n      <p>{{item.tache_id}}</p>\n      <button ion-button clear item-end (click)="onLoadTache(item)">voir</button>\n    </ion-item>\n  \n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\project-mobile\mobile-project-pfe\src\pages\consulter-taches\consulter-taches.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_post_provider__["a" /* PostProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], ConsulterTachesPage);
    return ConsulterTachesPage;
}());

//# sourceMappingURL=consulter-taches.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TachePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_post_provider__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TachePage = /** @class */ (function () {
    function TachePage(navCtrl, navParams, postPvdr, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.postPvdr = postPvdr;
        this.http = http;
        this.cin = "";
        this.tache_id = "";
        this.server = this.postPvdr.server;
        this.items = this.navParams.get("item");
        this.cin = this.items.cin_agent;
        console.log(this.cin);
        this.tache_id = this.items.tache_id;
        console.log(this.tache_id);
        console.log(this.items);
    }
    TachePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tache',template:/*ion-inline-start:"C:\xampp\htdocs\project-mobile\mobile-project-pfe\src\pages\tache\tache.html"*/'<ion-header>\n\n      <ion-navbar color="tertiary">\n\n            <ion-title>INFORMATIONS</ion-title>\n\n      </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n      <ion-list>\n\n            <ion-card>\n\n                  <ion-item>\n\n                        <h3>Tache ID: </h3>\n\n                        <p>{{ this.items.tache_id }}</p><br />\n\n                        <h3>CIN Administrateur: </h3>\n\n                        <p>{{ this.items.cin_admin }}</p><br />\n\n                        <h3>Etat: </h3>\n\n                        <p>{{ this.items.etat_tache }}</p><br />\n\n                        <h3>Sujet:</h3>\n\n                        <p>{{ this.items.sujet_tache }}</p><br />\n\n                        <h3>Adresse:</h3>\n\n                        <p>{{ this.items.adresse }}</p><br />\n\n\n\n                  </ion-item>\n\n                \n\n                  <ion-card-content>\n\n                        <h2 style="text-align:center" *ngIf="this.items.justification !=null"> PHOTO FIN DE TRAVAUX </h2>\n\n                        <p style="text-align:center" *ngIf="this.items.justification !=null"><img src="{{server+this.items.justification}}"></p><br /><br />\n\n                  </ion-card-content>\n\n\n\n                  <ion-row>\n\n                        <ion-col align-self-center text-center>\n\n                              <ion-note>\n\n                                    {{ this.items.datetimes }}\n\n                              </ion-note>\n\n                        </ion-col>\n\n                  </ion-row>\n\n\n\n            </ion-card>\n\n      </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\project-mobile\mobile-project-pfe\src\pages\tache\tache.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_post_provider__["a" /* PostProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], TachePage);
    return TachePage;
}());

//# sourceMappingURL=tache.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValiderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_post_provider__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__espace_agent_espace_agent__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ValiderPage = /** @class */ (function () {
    function ValiderPage(navCtrl, http, camera, storage, actionSheetCtrl, postPvdr, toastCtrl, formBuilder, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.camera = camera;
        this.storage = storage;
        this.actionSheetCtrl = actionSheetCtrl;
        this.postPvdr = postPvdr;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.cin = "";
        this.tache_id = "";
        this.etat_tache = "";
        this.photo = "";
        this.Form = formBuilder.group({
            tache_id: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
            etat_tache: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
        });
        this.loading = this.loadingCtrl.create({
            cssClass: 'my-loading-class',
            spinner: 'bubbles',
            duration: 3000
        });
    }
    ValiderPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log('ionViewWillEnter ValiderPage');
        this.storage.get('session_storage').then(function (result) {
            _this.dt = result;
            _this.cin = _this.dt[0].cin;
            console.log(_this.cin + 'here');
            _this.onTache(_this.cin);
        });
    };
    ValiderPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Choix du média',
            buttons: [
                {
                    text: 'Caméra',
                    icon: 'camera',
                    handler: function () {
                        _this.takePhoto();
                        console.log('Caméra clicked');
                    }
                }, {
                    text: 'Gallerie',
                    icon: 'image',
                    handler: function () {
                        _this.openGallery();
                        console.log('Gallerie clicked');
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    ValiderPage.prototype.takePhoto = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.cameraData = imageData;
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
    };
    //Gallerie
    ValiderPage.prototype.openGallery = function () {
        var _this = this;
        var options = {
            quality: 100,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.cameraData = imageData;
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
    };
    ValiderPage.prototype.onTache = function (cin) {
        var _this = this;
        var body = {
            cin: cin,
            aksi: 'load_tache'
        };
        console.log(body);
        var type = "application/json; charset= UTF-8";
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': type });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.postPvdr.postData(body).subscribe(function (data) {
            _this.items = data.items;
            console.log(data.items);
        });
    };
    ValiderPage.prototype.loadTache = function () {
        var _this = this;
        this.storage.get('session_storage').then(function (result) {
            _this.dt = result;
            _this.cin = _this.dt[0].cin;
            console.log(_this.cin + 'here');
            _this.onValidate(_this.cin);
        });
    };
    ValiderPage.prototype.onValidate = function (cin) {
        var body = {
            cin: cin,
            tache_id: this.tache_id,
            etat_tache: this.etat_tache,
            images: this.cameraData,
            aksi: 'valider'
        };
        var type = "application/json; charset= UTF-8";
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': type });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.postPvdr.postData(body).subscribe(function (data) {
        });
    };
    ValiderPage.prototype.onSubmit = function (form) {
        var _this = this;
        this.tache_id = this.Form.controls.tache_id.value;
        console.log(this.tache_id);
        this.etat_tache = this.Form.controls.etat_tache.value;
        console.log(this.etat_tache);
        if (this.base64Image != '' && this.base64Image != null && this.cameraData != null) {
            this.loadTache();
            this.loading.present();
            setTimeout(function () {
                console.log(form.value);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__espace_agent_espace_agent__["a" /* EspaceAgentPage */]);
                var toast = _this.toastCtrl.create({
                    message: 'Félicitations ; Votre tache a été validée avec succés !',
                    duration: 3000
                });
                toast.present();
                _this.loading.dismiss();
            }, 2000);
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Echec ! ; Veuillez Capturer ou Importer une photo !',
                duration: 3000
            });
            toast.present();
        }
    };
    ValiderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-valider',template:/*ion-inline-start:"C:\xampp\htdocs\project-mobile\mobile-project-pfe\src\pages\valider\valider.html"*/'<ion-header>\n\n      <ion-navbar color="tertiary">\n\n            <ion-title>Valider Taches</ion-title>\n\n      </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n      <ion-list>\n\n\n\n            <ion-row justify-content-center align-items-center style="height: 100%">\n\n                  <p>\n\n                        Commencer La Validation\n\n                  </p>\n\n                  <form #f="ngForm" novalidate [formGroup]="Form">\n\n                        <ion-item>\n\n                              <ion-label multiple="true" stacked>Tache ID: </ion-label>\n\n                              <ion-select formControlName="tache_id" [(ngModel)]="tache" required>\n\n                                    <ion-option *ngFor="let item of items">{{item.tache_id}}</ion-option>\n\n                              </ion-select>\n\n                        </ion-item>\n\n\n\n                        <ion-item no-lines\n\n                              *ngIf="( Form.get(\'tache_id\').hasError(\'required\') ) && Form.get(\'tache_id\').touched">\n\n                              <div class="error">\n\n                                    Champ Obligatoire\n\n                              </div>\n\n                        </ion-item>\n\n\n\n                        <ion-item>\n\n                              <ion-label multiple="true" stacked>Etat-Tache : </ion-label>\n\n                              <ion-select formControlName="etat_tache" ngModel>\n\n                                    <ion-option>En Cours </ion-option>\n\n                                    <ion-option>Terminée </ion-option>\n\n                              </ion-select>\n\n                        </ion-item>\n\n\n\n                        <ion-item no-lines\n\n                              *ngIf="( Form.get(\'etat_tache\').hasError(\'required\') ) && Form.get(\'etat_tache\').touched">\n\n                              <div class="error">\n\n                                    Champ Obligatoire\n\n                              </div>\n\n                        </ion-item>\n\n\n\n\n\n                        <ion-item>\n\n                              <button ion-button color="tertiary" (click)="presentActionSheet()"> Choix du Média</button>\n\n                              \n\n                        </ion-item>\n\n\n\n                        <ion-item *ngIf="base64Image!=null">\n\n                              <img src="{{base64Image}}" title="pict">\n\n                        </ion-item>\n\n\n\n\n\n                        <ion-col text-center>\n\n                              <button ion-button block color="success" type="submit" (click)="onSubmit(f)"\n\n                                    [disabled]="Form.invalid">\n\n                                    Valider Tache\n\n                              </button>\n\n                        </ion-col>\n\n                        <ion-col text-center>\n\n                              <button ion-button block color="danger" type="reset">\n\n                                    Annuler\n\n                              </button>\n\n                        </ion-col>\n\n                  </form>\n\n\n\n            </ion-row>\n\n\n\n      </ion-list>\n\n\n\n</ion-content>\n\n\n\n\n\n<style type="text/css">\n\n      .error {\n\n            color: red;\n\n      }\n\n</style>'/*ion-inline-end:"C:\xampp\htdocs\project-mobile\mobile-project-pfe\src\pages\valider\valider.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_post_provider__["a" /* PostProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], ValiderPage);
    return ValiderPage;
}());

//# sourceMappingURL=valider.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InscriptionProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InscriptionProvider = /** @class */ (function () {
    function InscriptionProvider(http) {
        this.http = http;
    }
    InscriptionProvider.prototype.postData = function (body) {
        var type = "application/json; charset= utf-8";
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ 'Content-Type': type });
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post("http://localhost/project-mobile/server_api/inscription.php", JSON.stringify(body), options)
            .map(function (res) { return res.json(); });
    };
    InscriptionProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], InscriptionProvider);
    return InscriptionProvider;
}());

//# sourceMappingURL=inscription-provider.js.map

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostProvider = /** @class */ (function () {
    function PostProvider(http) {
        this.http = http;
        this.server = 'http://192.168.43.129/project-mobile/server_api/';
    }
    //nom reseau :  Carte Ethernet Ethernet 11 
    //192.168.42.83
    //192.168.137.1 for emulator
    //192.168.1.13
    //wajdi 192.168.43.129
    PostProvider.prototype.postData = function (body) {
        var type = "application/json; charset= utf-8";
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ 'Content-Type': type });
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post('http://192.168.43.129/project-mobile/server_api/file_aksi.php', JSON.stringify(body), options)
            .map(function (res) { return res.json(); });
    };
    PostProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], PostProvider);
    return PostProvider;
}());

//# sourceMappingURL=post-provider.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppState = /** @class */ (function () {
    function AppState() {
        this._state = {};
    }
    Object.defineProperty(AppState.prototype, "state", {
        // already return a clone of the current state
        get: function () {
            return this._state = this.clone(this._state);
        },
        // never allow mutation
        set: function (value) {
            throw new Error('do not mutate the `.state` directly');
        },
        enumerable: true,
        configurable: true
    });
    AppState.prototype.get = function (prop) {
        // use our state getter for the clone
        var state = this.state;
        return state.hasOwnProperty(prop) ? state[prop] : state;
    };
    AppState.prototype.set = function (prop, value) {
        // internally mutate our state
        return this._state[prop] = value;
    };
    AppState.prototype.clone = function (object) {
        // simple object clone
        return JSON.parse(JSON.stringify(object));
    };
    AppState = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], AppState);
    return AppState;
}());

//# sourceMappingURL=app.global.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuitterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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


var QuitterPage = /** @class */ (function () {
    function QuitterPage(navCtrl, navParams, loadingCtrl, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.loading = this.loadingCtrl.create({
            cssClass: 'my-loading-class',
            spinner: 'bubbles',
            duration: 3000
        });
        this.loading.present();
        setTimeout(function () {
            _this.exitApp();
            _this.loading.dismiss();
        }, 2000);
    }
    QuitterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QuitterPage');
    };
    QuitterPage.prototype.exitApp = function () {
        this.platform.exitApp();
    };
    QuitterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-quitter',template:/*ion-inline-start:"C:\xampp\htdocs\project-mobile\mobile-project-pfe\src\pages\quitter\quitter.html"*/'<!--\n  Generated template for the QuitterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\project-mobile\mobile-project-pfe\src\pages\quitter\quitter.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]])
    ], QuitterPage);
    return QuitterPage;
}());

//# sourceMappingURL=quitter.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(374);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_card_io__ = __webpack_require__(699);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_global__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_connecter_connecter__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_inscription_inscription__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_settings_settings__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_espace_citoyen_espace_citoyen__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_consulter_taches_consulter_taches__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_espace_agent_espace_agent__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_suivre_reclamation_suivre_reclamation__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_effectuer_reclamation_effectuer_reclamation__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_reclamation_reclamation__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_tache_tache__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_valider_valider__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_geolocation__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_services_auth_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_reclamation_manuelle_reclamation_manuelle__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_reclamation_automatique_reclamation_automatique__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_quitter_quitter__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_change_password_change_password__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_post_provider__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_inscription_provider__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_single_reclamation_single_reclamation__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_native_native_geocoder__ = __webpack_require__(228);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_13__pages_inscription_inscription__["a" /* InscriptionPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_connecter_connecter__["a" /* ConnecterPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_espace_citoyen_espace_citoyen__["a" /* EspaceCitoyenPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_espace_agent_espace_agent__["a" /* EspaceAgentPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_consulter_taches_consulter_taches__["a" /* ConsulterTachesPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_valider_valider__["a" /* ValiderPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_suivre_reclamation_suivre_reclamation__["a" /* SuivreReclamationPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_effectuer_reclamation_effectuer_reclamation__["a" /* EffectuerReclamationPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_reclamation_reclamation__["a" /* ReclamationPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_tache_tache__["a" /* TachePage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_reclamation_automatique_reclamation_automatique__["a" /* ReclamationAutomatiquePage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_reclamation_manuelle_reclamation_manuelle__["a" /* ReclamationManuellePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_quitter_quitter__["a" /* QuitterPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_single_reclamation_single_reclamation__["a" /* SingleReclamationPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_change_password_change_password__["a" /* ChangePasswordPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/side-menu/side-menu.module#SideMenuPageModule', name: 'SideMenuPage', segment: 'side-menu', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_9__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_13__pages_inscription_inscription__["a" /* InscriptionPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_connecter_connecter__["a" /* ConnecterPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_espace_citoyen_espace_citoyen__["a" /* EspaceCitoyenPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_espace_agent_espace_agent__["a" /* EspaceAgentPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_consulter_taches_consulter_taches__["a" /* ConsulterTachesPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_suivre_reclamation_suivre_reclamation__["a" /* SuivreReclamationPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_effectuer_reclamation_effectuer_reclamation__["a" /* EffectuerReclamationPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_reclamation_reclamation__["a" /* ReclamationPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_tache_tache__["a" /* TachePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_valider_valider__["a" /* ValiderPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_reclamation_automatique_reclamation_automatique__["a" /* ReclamationAutomatiquePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_quitter_quitter__["a" /* QuitterPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_single_reclamation_single_reclamation__["a" /* SingleReclamationPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_reclamation_manuelle_reclamation_manuelle__["a" /* ReclamationManuellePage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_change_password_change_password__["a" /* ChangePasswordPage */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_23__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_11__app_global__["a" /* AppState */], __WEBPACK_IMPORTED_MODULE_24__pages_services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_30__providers_post_provider__["a" /* PostProvider */], __WEBPACK_IMPORTED_MODULE_33__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
                __WEBPACK_IMPORTED_MODULE_31__providers_inscription_provider__["a" /* InscriptionProvider */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_card_io__["a" /* CardIO */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicErrorHandler */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_global__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_connecter_connecter__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_inscription_inscription__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_quitter_quitter__ = __webpack_require__(368);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashscreen, global, menuCtrl) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashscreen = splashscreen;
        this.global = global;
        this.menuCtrl = menuCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_connecter_connecter__["a" /* ConnecterPage */];
        this.activePage = new __WEBPACK_IMPORTED_MODULE_5_rxjs__["Subject"]();
        this.initializeApp();
        this.rightMenuItems = [
            { icon: 'home', active: true },
            { icon: 'contact', active: false },
            { icon: 'settings', active: false }
        ];
        this.pages = [
            { title: 'Accueil', component: 'SideMenuPage', active: true, icon: 'home' },
            { title: 'Se Connecter', component: __WEBPACK_IMPORTED_MODULE_6__pages_connecter_connecter__["a" /* ConnecterPage */], active: false, icon: 'contact' },
            { title: 'Inscrivez-vous', component: __WEBPACK_IMPORTED_MODULE_7__pages_inscription_inscription__["a" /* InscriptionPage */], active: false, icon: 'contact' },
            { title: 'Fermer', component: __WEBPACK_IMPORTED_MODULE_8__pages_quitter_quitter__["a" /* QuitterPage */], active: false, icon: 'power' },
        ];
        this.activePage.subscribe(function (selectedPage) {
            _this.pages.map(function (page) {
                page.active = page.title === selectedPage.title;
            });
        });
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.global.set('theme', '');
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashscreen.hide();
            _this.menuCtrl.enable(false, 'right');
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
        this.activePage.next(page);
    };
    MyApp.prototype.rightMenuClick = function (item) {
        this.rightMenuItems.map(function (menuItem) { return menuItem.active = false; });
        item.active = true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\xampp\htdocs\project-mobile\mobile-project-pfe\src\app\app.html"*/'<div class="{{global.state[\'theme\']}}">\n\n  <!--Dark Design Menu-->\n  <ion-menu [content]="content" id="menu-dark">\n    <ion-header class="sidemenuHeader">\n      <ion-toolbar>\n        <ion-item no-lines>\n          <ion-avatar item-left>\n            <h2>E</h2>\n          </ion-avatar>\n          <h2>Bienvenue à E-Reclamation !</h2>\n        </ion-item>\n      </ion-toolbar>\n    </ion-header>\n\n\n    <ion-content class="menu">\n      <ion-list>\n        <button menuClose="left" ion-item *ngFor="let p of pages " (click)="openPage(p)">\n          <ion-icon [name]="p.icon" item-left></ion-icon>  {{p.title}}\n        </button>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n  <ion-nav [root]="rootPage"  #content swipeBackEnabled="false"></ion-nav>\n\n</div>\n'/*ion-inline-end:"C:\xampp\htdocs\project-mobile\mobile-project-pfe\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_0__app_global__["a" /* AppState */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnecterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__espace_citoyen_espace_citoyen__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__espace_agent_espace_agent__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_post_provider__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth_service__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ConnecterPage = /** @class */ (function () {
    function ConnecterPage(navCtrl, formBuilder, postPvdr, authService, http, toastCtrl, storage) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.postPvdr = postPvdr;
        this.authService = authService;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.cin = "";
        this.password = "";
        this.Form = formBuilder.group({
            cin: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].pattern('[0-9]*'), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].maxLength(8)])],
            password: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].maxLength(15)])],
        });
    }
    ConnecterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConnecterPage');
    };
    ConnecterPage.prototype.addLogin = function () {
        var _this = this;
        var body = {
            cin: this.cin,
            password: this.password,
            aksi: 'add_Login'
        };
        var type = "application/json; charset= UTF-8";
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': type });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.postPvdr.postData(body).subscribe(function (data) {
            var alerts = data.msg;
            if (data.success) {
                _this.storage.set('session_storage', data.profiles);
                console.log(data.profiles);
                if (data.occupation) {
                    console.log('connexion réussie');
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__espace_citoyen_espace_citoyen__["a" /* EspaceCitoyenPage */]);
                }
                else if (data.occupation == false) {
                    console.log('connexion réussie');
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__espace_agent_espace_agent__["a" /* EspaceAgentPage */]);
                }
            }
            else if (data.success == false) {
                console.log('connexion échouée');
                var toast = _this.toastCtrl.create({
                    message: alerts,
                    duration: 2000
                });
                toast.present();
            }
        });
    };
    ConnecterPage.prototype.onSubmit = function (form) {
        console.log(this.authService.isAuth);
        this.cin = this.Form.controls.cin.value;
        console.log(this.cin);
        this.password = this.Form.controls.password.value;
        console.log(this.password);
        this.addLogin();
        this.authService.signIn();
        console.log(this.authService.isAuth);
        console.log(form.value);
        this.Form.reset();
    };
    ConnecterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-connecter',template:/*ion-inline-start:"C:\xampp\htdocs\project-mobile\mobile-project-pfe\src\pages\connecter\connecter.html"*/'<ion-header>\n\n  <ion-navbar color="tertiary">\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle="left">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title> Se Connecter </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding class="card-background-page">\n\n<ion-row justify-content-center novalidate align-items-center style="height: 100%">\n  <ion-card>\n  <img src="./assets/img/background/fe.jpg"/>\n  </ion-card>\n  <p>\n    Connectez-Vous\n  </p>\n\n  <form #f="ngForm"  [formGroup]="Form"  (ngSubmit)="onSubmit(f)">\n        <ion-item>\n        <ion-label>CIN  :  </ion-label>\n        <ion-input  name="cin" type="number" formControlName="cin"  clearInput [(ngModel)]="cin" required></ion-input>\n        </ion-item>\n\n        <ion-item no-lines *ngIf="( Form.get(\'cin\').hasError(\'required\') ) && Form.get(\'cin\').touched">\n\n        <div class="error">\n      Champ Obligatoire\n        </div>\n        </ion-item>\n\n        <ion-item class="error" *ngIf="!Form.controls.cin.valid  && (Form.controls.cin.dirty )">\n\n        <div class="error">\n      cin de 8 chiffres !\n        </div>\n        </ion-item>\n\n        <ion-item>\n   <ion-label>Mot de passe  :</ion-label>\n   <ion-input name="password" type="password"  formControlName="password"   clearInput [(ngModel)]="password" required></ion-input>\n        </ion-item>\n\n        <ion-item no-lines *ngIf="( Form.get(\'password\').hasError(\'required\') ) && Form.get(\'password\').touched">\n\n        <div class="error">\n      Champ Obligatoire\n        </div>\n        </ion-item>\n\n                <ion-item class="error" *ngIf="!Form.controls.password.valid  && (Form.controls.password.dirty)">\n\n                <div class="error">\n              minimum/maximum : 6/15  caractères\n                </div>\n                </ion-item>\n\n        <ion-col text-center>\n        <button ion-button type="submit" block color="success"  [disabled]="Form.invalid">\n        Connectez-vous\n        </button>\n        </ion-col>\n\n   </form>\n\n   <ion-row>\n\n\n</ion-row>\n</ion-row>\n</ion-content>\n\n<style type="text/css">\n.error\n{\ncolor:red;\n}\n</style>\n'/*ion-inline-end:"C:\xampp\htdocs\project-mobile\mobile-project-pfe\src\pages\connecter\connecter.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_7__providers_post_provider__["a" /* PostProvider */], __WEBPACK_IMPORTED_MODULE_8__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], ConnecterPage);
    return ConnecterPage;
}());

//# sourceMappingURL=connecter.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);

var AuthService = /** @class */ (function () {
    function AuthService() {
        this.isAuth = false;
    }
    AuthService.prototype.signIn = function () {
        this.isAuth = true;
    };
    AuthService.prototype.signOut = function () {
        this.isAuth = false;
    };
    AuthService.prototype.authenticated = function () {
        return this.isAuth;
    };
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EspaceCitoyenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__suivre_reclamation_suivre_reclamation__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__effectuer_reclamation_effectuer_reclamation__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_settings__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__connecter_connecter__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_post_provider__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var EspaceCitoyenPage = /** @class */ (function () {
    function EspaceCitoyenPage(navCtrl, navParams, loadingCtrl, authService, postPvdr, http, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.postPvdr = postPvdr;
        this.http = http;
        this.storage = storage;
        this.cin = "";
        this.loading = this.loadingCtrl.create({
            cssClass: 'my-loading-class',
            spinner: 'bubbles',
            duration: 3000
        });
    }
    EspaceCitoyenPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad EspaceCitoyenPage');
        this.storage.get('session_storage').then(function (result) {
            _this.dt = result;
            _this.cin = _this.dt[0].cin;
            console.log(_this.cin + 'here');
            _this.loadNotif(_this.cin);
        });
    };
    EspaceCitoyenPage.prototype.loadNotif = function (cin) {
        var _this = this;
        var body = {
            cin: cin,
            aksi: 'suivre_notif'
        };
        console.log(body);
        this.postPvdr.postData(body).subscribe(function (data) {
            _this.nb = data;
            console.log(data);
        });
    };
    EspaceCitoyenPage.prototype.onDeconnect = function () {
        var body = {
            aksi: 'add_Connection'
        };
        var type = "application/json; charset= UTF-8";
        var headers = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Headers */]({ 'Content-Type': type });
        var options = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.postPvdr.postData(body).subscribe(function (data) {
            console.log('connexion fermée');
        });
    };
    EspaceCitoyenPage.prototype.onGoToSuivre = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__suivre_reclamation_suivre_reclamation__["a" /* SuivreReclamationPage */]);
    };
    EspaceCitoyenPage.prototype.onGoToEffectuer = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__effectuer_reclamation_effectuer_reclamation__["a" /* EffectuerReclamationPage */]);
    };
    EspaceCitoyenPage.prototype.onParametres = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__settings_settings__["a" /* SettingsPage */]);
    };
    EspaceCitoyenPage.prototype.onLogOut = function () {
        var _this = this;
        this.loading.present();
        setTimeout(function () {
            _this.onDeconnect();
            _this.authService.signOut();
            console.log(_this.authService.authenticated());
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__connecter_connecter__["a" /* ConnecterPage */]);
            _this.navCtrl.popToRoot();
            _this.loading.dismiss();
        }, 1000);
        console.log('storage nettoyé');
    };
    EspaceCitoyenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-espace-citoyen',template:/*ion-inline-start:"C:\xampp\htdocs\project-mobile\mobile-project-pfe\src\pages\espace-citoyen\espace-citoyen.html"*/'<ion-header>\n  <ion-navbar color="tertiary" hideBackButton *navbar>\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle="left">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Espace-citoyen</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding text-center>\n\n<ion-row justify-content-center novalidate align-items-center style="height: 100%">\n\n    <button ion-button block [outline]=true icon-start (click)="onGoToEffectuer()" color="secondary">\n    Effectuer réclamation\n    </button>\n\n  <button ion-button block [outline]=true icon-start (click)="onGoToSuivre()" color="secondary">\n  Suivre réclamation &nbsp; <ion-badge item-end > {{ this.nb }} </ion-badge>\n  </button>\n\n  <button ion-button block [outline]=true icon-start  (click)="onParametres()" color="secondary">\n  Paramètres\n  </button>\n\n    <button ion-button block [outline]=true icon-start  (click)="onLogOut()" color="secondary">\n    Déconnecter\n   </button>\n\n</ion-row>\n\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\project-mobile\mobile-project-pfe\src\pages\espace-citoyen\espace-citoyen.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_8__providers_post_provider__["a" /* PostProvider */], __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */]])
    ], EspaceCitoyenPage);
    return EspaceCitoyenPage;
}());

//# sourceMappingURL=espace-citoyen.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__change_password_change_password__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_post_provider__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, postPvdr, toastCtrl, formBuilder, storage) {
        this.navCtrl = navCtrl;
        this.postPvdr = postPvdr;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.Form = formBuilder.group({
            mailadress: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
            telephone: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern('[0-9]*'), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(8), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
        });
    }
    SettingsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log('ionViewWillEnter SettingsPage');
        this.storage.get('session_storage').then(function (result) {
            _this.dt = result;
            _this.cin = _this.dt[0].cin;
            console.log(_this.dt[0]);
            console.log(result);
        });
    };
    SettingsPage.prototype.onChangepassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__change_password_change_password__["a" /* ChangePasswordPage */]);
    };
    SettingsPage.prototype.onSettings = function () {
        var body = {
            mailadress: this.mailadress,
            telephone: this.telephone,
            cin: this.cin,
            aksi: 'settings'
        };
        var type = "application/json; charset= UTF-8";
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': type });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.postPvdr.postData(body).subscribe(function (data) {
            if (data.success) {
                console.log('modifications enregistrées');
            }
        });
    };
    SettingsPage.prototype.onSubmit = function (form) {
        console.log(form.value);
        this.mailadress = this.Form.controls.mailadress.value;
        this.telephone = this.Form.controls.telephone.value;
        this.onSettings();
        this.navCtrl.pop();
        var toast = this.toastCtrl.create({
            message: 'Modifications Enregistrées !',
            duration: 4000
        });
        toast.present();
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"C:\xampp\htdocs\project-mobile\mobile-project-pfe\src\pages\settings\settings.html"*/'<ion-header>\n\n  <ion-navbar color="tertiary" hideBackButton *navbar>\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle="left">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Paramètres</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n    <p align="center">\n      Modifier vos informations\n    </p>\n      <ion-row justify-content-center align-items-center style="height: 100%">\n    <form #f="ngForm"  (ngSubmit)="onSubmit(f)" [formGroup]="Form" text-center center >\n\n      <ion-item>\n        <ion-label stacked> Email :  </ion-label>\n        <ion-input  name="mailadress" type="email" formControlName="mailadress"   clearInput  [(ngModel)]="mailadr" ></ion-input>\n      </ion-item>\n\n      <ion-item no-lines *ngIf="( Form.get(\'mailadress\').hasError(\'required\') ) && Form.get(\'mailadress\').touched">\n\n        <div class="error" *ngIf="Form.get(\'mailadress\').hasError(\'required\') && Form.get(\'mailadress\').touched">\n          Champ Obligatoire\n        </div>\n      </ion-item>\n\n      <ion-item class="error" *ngIf="!Form.controls.mailadress.valid  && (Form.controls.mailadress.dirty)">\n\n        <div class="error">\n          Non valide\n        </div>\n      </ion-item>\n\n      <ion-item>\n        <ion-label  stacked>Téléphone</ion-label>\n        <ion-input type="tel" formControlName="telephone"   clearInput  [(ngModel)]="phonetel"></ion-input>\n      </ion-item>\n\n      <ion-item class="error" *ngIf="!Form.controls.telephone.valid  && (Form.controls.telephone.dirty )">\n\n        <div class="error">\n          Non valide\n        </div>\n      </ion-item>\n\n      <ion-col text-center>\n        <button ion-button block type="submit" [disabled]="!f.valid" color="success" >\n          Enregistrer\n        </button>\n      </ion-col><br />\n      <ion-col text-center>\n        <button ion-button color="tertiary" (click)="onChangepassword()"> Changer mot de passe </button>\n      </ion-col>\n    </form>\n\n     \n\n  </ion-row>\n</ion-content>\n\n<style type="text/css">\n  .error\n  {\n    color:red;\n  }\n</style>\n'/*ion-inline-end:"C:\xampp\htdocs\project-mobile\mobile-project-pfe\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__providers_post_provider__["a" /* PostProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ })

},[369]);
//# sourceMappingURL=main.js.map