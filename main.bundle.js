webpackJsonp([1,4],{

/***/ 146:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 146;


/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(179);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__heroes_browser_services_heroes_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(_store, _heroes) {
        var _this = this;
        this._store = _store;
        this._heroes = _heroes;
        this._store.select('heroes').subscribe(function (d) { return _this.state = d; });
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._heroes.loadFavorites().
            subscribe(function (data) { return _this._heroes.loadMore(); });
    };
    AppComponent.prototype.getSidebar = function () {
        return (this.state.section === 'sidebar') ? this.state.selected : undefined;
    };
    AppComponent.prototype.getDetails = function () {
        return (this.state.section === 'details') ? this.state.selected : undefined;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_1" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(252),
        styles: [__webpack_require__(236)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__heroes_browser_services_heroes_service__["a" /* HeroesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__heroes_browser_services_heroes_service__["a" /* HeroesService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__heroes_browser_heroes_browser_module__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__heroes_browser_store_heroes_reducer__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_store__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__heroes_browser_services_my_cache_service__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__heroes_browser_services_heroes_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_7__ngrx_store__["a" /* StoreModule */].provideStore({ heroes: __WEBPACK_IMPORTED_MODULE_6__heroes_browser_store_heroes_reducer__["a" /* heroes */] }),
            __WEBPACK_IMPORTED_MODULE_0__heroes_browser_heroes_browser_module__["a" /* HeroesBrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__heroes_browser_services_heroes_service__["a" /* HeroesService */], __WEBPACK_IMPORTED_MODULE_8__heroes_browser_services_my_cache_service__["a" /* MyCacheService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookletComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BookletComponent = (function () {
    function BookletComponent() {
        this.imageLoaded = false;
    }
    return BookletComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], BookletComponent.prototype, "item", void 0);
BookletComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-booklet',
        template: __webpack_require__(253),
        styles: [__webpack_require__(237)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [])
], BookletComponent);

//# sourceMappingURL=booklet.component.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_heroes_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_super_hero__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharacterCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CharacterCardComponent = (function () {
    function CharacterCardComponent(_heroes) {
        this._heroes = _heroes;
        this.imageLoaded = false;
    }
    CharacterCardComponent.prototype.showDetails = function (hero) {
        this._heroes.selectHero(hero.id);
    };
    CharacterCardComponent.prototype.isFavorite = function () {
        if (this.hero === undefined) {
            return false;
        }
        else {
            return this._heroes.isFavorite(this.hero.id);
        }
    };
    return CharacterCardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_super_hero__["a" /* SuperHero */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_super_hero__["a" /* SuperHero */]) === "function" && _a || Object)
], CharacterCardComponent.prototype, "hero", void 0);
CharacterCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_1" /* Component */])({
        selector: 'app-character-card',
        template: __webpack_require__(254),
        styles: [__webpack_require__(238)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_2__angular_core__["_2" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__services_heroes_service__["a" /* HeroesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_heroes_service__["a" /* HeroesService */]) === "function" && _b || Object])
], CharacterCardComponent);

var _a, _b;
//# sourceMappingURL=character-card.component.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_heroes_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_super_hero__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetailsBarComponent = (function () {
    function DetailsBarComponent(_heroes, _http) {
        this._heroes = _heroes;
        this._http = _http;
        this.selected = undefined;
    }
    DetailsBarComponent.prototype.animate = function () {
        return (this.selected) ? 'ready' : '';
    };
    DetailsBarComponent.prototype.closeBar = function () {
        this._heroes.selectHero();
    };
    DetailsBarComponent.prototype.showDetails = function () {
        this._heroes.showDetails();
    };
    DetailsBarComponent.prototype.loading = function () {
        return this.getRelated() === undefined;
    };
    DetailsBarComponent.prototype.getRelated = function () {
        return (this.selected) ? this.selected['related'] : undefined;
    };
    DetailsBarComponent.prototype.isFavorite = function () {
        if (this.selected === undefined) {
            return false;
        }
        else {
            return this._heroes.isFavorite(this.selected.id);
        }
    };
    DetailsBarComponent.prototype.consoleLogDetails = function () {
        console.log(this.selected);
    };
    return DetailsBarComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__models_super_hero__["a" /* SuperHero */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_super_hero__["a" /* SuperHero */]) === "function" && _a || Object)
], DetailsBarComponent.prototype, "selected", void 0);
DetailsBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_1" /* Component */])({
        selector: 'app-details-bar',
        template: __webpack_require__(255),
        styles: [__webpack_require__(239)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_3__angular_core__["_2" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_heroes_service__["a" /* HeroesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_heroes_service__["a" /* HeroesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _c || Object])
], DetailsBarComponent);

var _a, _b, _c;
//# sourceMappingURL=details-bar.component.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_heroes_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_super_hero__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailsComponent = (function () {
    function DetailsComponent(_heroes) {
        this._heroes = _heroes;
    }
    DetailsComponent.prototype.closeDetails = function () {
        this._heroes.hideDetails();
    };
    DetailsComponent.prototype.saveFavorite = function () {
        this._heroes.saveFavorite(this.selected);
    };
    DetailsComponent.prototype.removeFavorite = function () {
        this._heroes.removeFavorite(this.selected);
    };
    DetailsComponent.prototype.getDescription = function () {
        return (this.selected.description) ? this.selected.description : 'No Description Available in the Database.';
    };
    DetailsComponent.prototype.getDetails = function () {
        if (this.selected) {
            if (this.selected['related'] !== undefined) {
                return this.selected['related'];
            }
        }
        return undefined;
    };
    DetailsComponent.prototype.isFavorite = function () {
        if (this.selected === undefined) {
            return false;
        }
        else {
            return this._heroes.isFavorite(this.selected.id);
        }
    };
    DetailsComponent.prototype.hasComics = function () {
        if (this.selected) {
            if (this.selected['comics']) {
                if (this.selected['comics'].length > 0) {
                    return true;
                }
            }
        }
        return false;
    };
    DetailsComponent.prototype.hasSeries = function () {
        if (this.selected) {
            if (this.selected['seriesList']) {
                if (this.selected['seriesList'].length > 0) {
                    return true;
                }
            }
        }
        return false;
    };
    return DetailsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_super_hero__["a" /* SuperHero */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_super_hero__["a" /* SuperHero */]) === "function" && _a || Object)
], DetailsComponent.prototype, "selected", void 0);
DetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_1" /* Component */])({
        selector: 'app-details',
        template: __webpack_require__(256),
        styles: [__webpack_require__(240)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_2__angular_core__["_2" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__services_heroes_service__["a" /* HeroesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_heroes_service__["a" /* HeroesService */]) === "function" && _b || Object])
], DetailsComponent);

var _a, _b;
//# sourceMappingURL=details.component.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_heroes_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FilterComponent = (function () {
    function FilterComponent(_heroes) {
        this._heroes = _heroes;
        this.filter = '';
    }
    FilterComponent.prototype.updateFilter = function (value) {
        this._heroes.search(value);
    };
    FilterComponent.prototype.clearCache = function () {
        this._heroes.clearCache()
            .then(function () { return alert('Cache cleared'); });
    };
    FilterComponent.prototype.removeFilter = function () {
        this._heroes.search('');
    };
    FilterComponent.prototype.toggleFavorites = function () {
        if (this.isShowingFavorites()) {
            this._heroes.search('');
        }
        else {
            this._heroes.showFavorites();
        }
    };
    FilterComponent.prototype.getClasses = function () {
        return this.isShowingFavorites() ? 'btn-fav active btn btn-sm btn-default' : 'btn-fav btn btn-sm btn-default';
    };
    FilterComponent.prototype.isShowingFavorites = function () {
        return this._heroes.isShowingFavorites();
    };
    return FilterComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], FilterComponent.prototype, "filter", void 0);
FilterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* Component */])({
        selector: 'app-filter',
        template: __webpack_require__(257),
        styles: [__webpack_require__(241)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["_2" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_heroes_service__["a" /* HeroesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_heroes_service__["a" /* HeroesService */]) === "function" && _a || Object])
], FilterComponent);

var _a;
//# sourceMappingURL=filter.component.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_heroes_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroesGridComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeroesGridComponent = (function () {
    function HeroesGridComponent(_heroes) {
        this._heroes = _heroes;
        this.heroes = [];
    }
    HeroesGridComponent.prototype.onScroll = function () {
        this._heroes.loadMore();
    };
    return HeroesGridComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array)
], HeroesGridComponent.prototype, "heroes", void 0);
HeroesGridComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* Component */])({
        selector: 'app-heroes-grid',
        template: __webpack_require__(258),
        styles: [__webpack_require__(242)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["_2" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_heroes_service__["a" /* HeroesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_heroes_service__["a" /* HeroesService */]) === "function" && _a || Object])
], HeroesGridComponent);

var _a;
//# sourceMappingURL=heroes-grid.component.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingComponent = (function () {
    function LoadingComponent() {
        this.loading = false;
    }
    return LoadingComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Boolean)
], LoadingComponent.prototype, "loading", void 0);
LoadingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-loading',
        template: __webpack_require__(259),
        styles: [__webpack_require__(243)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [])
], LoadingComponent);

//# sourceMappingURL=loading.component.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_heroes_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiniCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MiniCardComponent = (function () {
    function MiniCardComponent(_heroes) {
        this._heroes = _heroes;
        this.imageLoaded = false;
    }
    MiniCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._heroes.getImage(this.related.id).subscribe(function (image) {
            _this.image = image;
        });
    };
    MiniCardComponent.prototype.select = function (id) {
        this._heroes.selectHero(id);
    };
    MiniCardComponent.prototype.isFavorite = function () {
        return this._heroes.isFavorite(this.related.id);
    };
    MiniCardComponent.prototype.getClasses = function () {
        return (this.isFavorite()) ? 'mini-card col-3 pull-left p-1 favorite' : 'mini-card col-3 pull-left p-1';
    };
    return MiniCardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], MiniCardComponent.prototype, "related", void 0);
MiniCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* Component */])({
        selector: 'app-mini-card',
        template: __webpack_require__(260),
        styles: [__webpack_require__(244)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["_2" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_heroes_service__["a" /* HeroesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_heroes_service__["a" /* HeroesService */]) === "function" && _a || Object])
], MiniCardComponent);

var _a;
//# sourceMappingURL=mini-card.component.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoResultsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NoResultsComponent = (function () {
    function NoResultsComponent() {
        this.list = [1];
    }
    return NoResultsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array)
], NoResultsComponent.prototype, "list", void 0);
NoResultsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-no-results',
        template: __webpack_require__(261),
        styles: [__webpack_require__(245)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [])
], NoResultsComponent);

//# sourceMappingURL=no-results.component.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelatedHeroesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RelatedHeroesComponent = (function () {
    function RelatedHeroesComponent() {
    }
    RelatedHeroesComponent.prototype.loading = function () {
        return this.related === undefined;
    };
    return RelatedHeroesComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array)
], RelatedHeroesComponent.prototype, "related", void 0);
RelatedHeroesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-related-heroes',
        template: __webpack_require__(262),
        styles: [__webpack_require__(246)]
    }),
    __metadata("design:paramtypes", [])
], RelatedHeroesComponent);

//# sourceMappingURL=related-heroes.component.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_details_bar_details_bar_component__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_filter_filter_component__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_character_card_character_card_component__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_heroes_grid_heroes_grid_component__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_infinite_scroll__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_details_details_component__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_loading_loading_component__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_mini_card_mini_card_component__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_related_heroes_related_heroes_component__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_no_results_no_results_component__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_booklet_booklet_component__ = __webpack_require__(164);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroesBrowserModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var HeroesBrowserModule = (function () {
    function HeroesBrowserModule() {
    }
    return HeroesBrowserModule;
}());
HeroesBrowserModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7_ngx_infinite_scroll__["a" /* InfiniteScrollModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__components_filter_filter_component__["a" /* FilterComponent */], __WEBPACK_IMPORTED_MODULE_5__components_character_card_character_card_component__["a" /* CharacterCardComponent */], __WEBPACK_IMPORTED_MODULE_6__components_heroes_grid_heroes_grid_component__["a" /* HeroesGridComponent */], __WEBPACK_IMPORTED_MODULE_1__components_details_bar_details_bar_component__["a" /* DetailsBarComponent */], __WEBPACK_IMPORTED_MODULE_8__components_details_details_component__["a" /* DetailsComponent */], __WEBPACK_IMPORTED_MODULE_9__components_loading_loading_component__["a" /* LoadingComponent */], __WEBPACK_IMPORTED_MODULE_10__components_mini_card_mini_card_component__["a" /* MiniCardComponent */], __WEBPACK_IMPORTED_MODULE_11__components_related_heroes_related_heroes_component__["a" /* RelatedHeroesComponent */], __WEBPACK_IMPORTED_MODULE_12__components_no_results_no_results_component__["a" /* NoResultsComponent */], __WEBPACK_IMPORTED_MODULE_13__components_booklet_booklet_component__["a" /* BookletComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_12__components_no_results_no_results_component__["a" /* NoResultsComponent */], __WEBPACK_IMPORTED_MODULE_4__components_filter_filter_component__["a" /* FilterComponent */], __WEBPACK_IMPORTED_MODULE_6__components_heroes_grid_heroes_grid_component__["a" /* HeroesGridComponent */], __WEBPACK_IMPORTED_MODULE_1__components_details_bar_details_bar_component__["a" /* DetailsBarComponent */], __WEBPACK_IMPORTED_MODULE_8__components_details_details_component__["a" /* DetailsComponent */], __WEBPACK_IMPORTED_MODULE_9__components_loading_loading_component__["a" /* LoadingComponent */]]
    })
], HeroesBrowserModule);

//# sourceMappingURL=heroes-browser.module.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Comic; });
var Comic = (function () {
    // upc: string;
    // urls: any[];
    // variantDescription: string;
    // variants: any[];
    function Comic(data) {
        // this.characters = data.characters;
        // this.collectedIssues = data.collectedIssues;
        // this.collections = data.collectedIssues;
        // this.creators = data.creators;
        // this.dates = data.dates;
        this.description = data.description;
        // this.diamondCode = data.diamondCode;
        // this.digitalId = data.digitalId;
        // this.ean = data.ean;
        // this.events = data.events;
        // this.format = data.format;
        this.id = data.id;
        // this.images = data.images;
        // this.isbn = data.isbn;
        // this.issn = data.issn;
        // this.issueNumber = data.issueNumber;
        // this.modified = data.modified;
        // this.pageCount = data.pageCount;
        // this.prices = data.prices;
        // this.resourceURI = data.resourceURI;
        // this.series = data.series;
        // this.stories = data.stories;
        // this.textObjects = data.textObjects;
        this.thumbnail = data.thumbnail;
        this.title = data.title;
        // this.upc = data.upc;
        // this.urls = data.urls;
        // this.variantDescription = data.variantDescription;
        // this.variants = data.variants;
    }
    Comic.prototype.getThumbnail = function () {
        return this.thumbnail['path'] + '.' + this.thumbnail['extension'];
    };
    return Comic;
}());

//# sourceMappingURL=comic.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Query; });
var Query = (function () {
    function Query(filter, offset, limit) {
        if (limit === void 0) { limit = 50; }
        this.filter = filter;
        this.offset = offset;
        this.limit = limit;
    }
    Query.prototype.getQueryString = function () {
        if (this.filter.length > 0) {
            return "nameStartsWith=" + this.filter + "&limit=" + this.limit + "&offset=" + this.offset;
        }
        else {
            return "limit=" + this.limit + "&offset=" + this.offset;
        }
    };
    return Query;
}());

//# sourceMappingURL=query.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Series; });
var Series = (function () {
    function Series(data) {
        this.description = data.description;
        this.id = data.id;
        this.thumbnail = data.thumbnail;
        this.title = data.title;
    }
    Series.prototype.getThumbnail = function () {
        return this.thumbnail['path'] + '.' + this.thumbnail['extension'];
    };
    return Series;
}());

//# sourceMappingURL=series.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_super_hero__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_query__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__heroes_actions__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return heroes; });



var defaultData = {
    list: [],
    query: new __WEBPACK_IMPORTED_MODULE_1__models_query__["a" /* Query */]('', 0),
    selected: undefined,
    section: 'grid',
    loading: false,
    moreData: true,
    favorites: [],
    onlyFavorites: false,
    scrolled: false,
    all: {}
};
var heroes = function (state, action) {
    if (state === void 0) { state = defaultData; }
    var newState;
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_2__heroes_actions__["n" /* ADD_HEROES */]:
            if (!state.loading) {
                newState = state;
            }
            else {
                newState = Object.assign({}, state, {
                    list: state.list.concat(action.payload.heroes),
                    loading: false,
                    moreData: (action.payload.heroes.length === 50),
                    all: addHeroes(state, action.payload.heroes),
                    scrolled: false,
                    query: new __WEBPACK_IMPORTED_MODULE_1__models_query__["a" /* Query */](state.query.filter, state.query.offset + action.payload.heroes.length)
                });
            }
            break;
        case __WEBPACK_IMPORTED_MODULE_2__heroes_actions__["o" /* UPDATE_FILTER */]:
            newState = Object.assign({}, state, { onlyFavorites: false, moreData: true, loading: true, query: new __WEBPACK_IMPORTED_MODULE_1__models_query__["a" /* Query */](action.payload, 0), list: [] });
            break;
        case __WEBPACK_IMPORTED_MODULE_2__heroes_actions__["p" /* ADD_ALL */]:
            var newAll_1 = Object.assign({}, state.all);
            action.payload.forEach(function (hero) {
                if (newAll_1[hero.id] === undefined) {
                    newAll_1[hero.id] = hero;
                }
            });
            newState = Object.assign({}, state, { all: newAll_1 });
            break;
        case __WEBPACK_IMPORTED_MODULE_2__heroes_actions__["q" /* SCROLLED */]:
            if (!state.moreData || state.onlyFavorites) {
                newState = state;
            }
            else {
                newState = Object.assign({}, state, { loading: true, scrolled: true });
            }
            break;
        case __WEBPACK_IMPORTED_MODULE_2__heroes_actions__["r" /* ONLY_FAVORITES */]:
            newState = Object.assign({}, state, { query: new __WEBPACK_IMPORTED_MODULE_1__models_query__["a" /* Query */]('', 0), onlyFavorites: true, list: state.favorites.map(function (x) { return __WEBPACK_IMPORTED_MODULE_0__models_super_hero__["a" /* SuperHero */].clone(x); }) });
            break;
        case __WEBPACK_IMPORTED_MODULE_2__heroes_actions__["s" /* SELECT_HERO */]:
            var section = (state.section === 'grid') ? 'sidebar' : state.section;
            newState = Object.assign({}, state, { selected: action.payload, section: section });
            break;
        case __WEBPACK_IMPORTED_MODULE_2__heroes_actions__["t" /* UNSELECT_HERO */]:
            newState = Object.assign({}, state, { selected: undefined, section: 'grid' });
            break;
        case __WEBPACK_IMPORTED_MODULE_2__heroes_actions__["u" /* ADD_COMICS_TO_SELECTED */]:
            var selected2 = __WEBPACK_IMPORTED_MODULE_0__models_super_hero__["a" /* SuperHero */].clone(state.selected);
            selected2['comics'] = action.payload;
            newState = Object.assign({}, state, { selected: selected2 });
            break;
        case __WEBPACK_IMPORTED_MODULE_2__heroes_actions__["v" /* ADD_SERIES_TO_SELECTED */]:
            var selected3 = __WEBPACK_IMPORTED_MODULE_0__models_super_hero__["a" /* SuperHero */].clone(state.selected);
            selected3['seriesList'] = action.payload;
            newState = Object.assign({}, state, { selected: selected3 });
            break;
        case __WEBPACK_IMPORTED_MODULE_2__heroes_actions__["w" /* ADD_RELATED */]:
            var obj = state.all[state.selected.id];
            obj['related'] = action.payload;
            var selected1 = __WEBPACK_IMPORTED_MODULE_0__models_super_hero__["a" /* SuperHero */].clone(state.selected);
            selected1['related'] = action.payload.slice();
            var all = Object.assign({}, state.all, (_a = {}, _a[state.selected.id] = obj, _a));
            newState = Object.assign({}, state, { all: all, selected: selected1 });
            break;
        case __WEBPACK_IMPORTED_MODULE_2__heroes_actions__["x" /* ADD_FAVORITES */]:
            var newList = state.list.map(function (hero) { return __WEBPACK_IMPORTED_MODULE_0__models_super_hero__["a" /* SuperHero */].clone(hero); });
            var selected = __WEBPACK_IMPORTED_MODULE_0__models_super_hero__["a" /* SuperHero */].clone(state.selected);
            if (state.selected) {
                selected['related'] = state.selected['related'];
            }
            newState = Object.assign({}, state, { favorites: action.payload.slice(), list: newList, selected: selected });
            break;
        case __WEBPACK_IMPORTED_MODULE_2__heroes_actions__["y" /* SHOW_DETAILS */]:
            newState = Object.assign({}, state, { section: 'details' });
            break;
        case __WEBPACK_IMPORTED_MODULE_2__heroes_actions__["z" /* HIDE_DETAILS */]:
            newState = Object.assign({}, state, { section: 'grid' });
            break;
        default:
            newState = state;
    }
    console.log(action.type, newState);
    return newState;
    var _a;
};
function addHeroes(state, heroes) {
    var res = Object.assign({}, state.all);
    heroes.forEach(function (h) { return res[h.id] = h; });
    return res;
}
//# sourceMappingURL=heroes.reducer.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_series__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_heroes_actions__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_cache_service__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_comic__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_super_hero__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__store_heroes_actions__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngrx_store__ = __webpack_require__(63);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









// CONFIG VARS
var apikey = '2ffa799140459e091b3ee3bcb05531e7';
var url = 'https://gateway.marvel.com:443/v1/public';
var HeroesService = (function () {
    function HeroesService(_store, _myCache) {
        var _this = this;
        this._store = _store;
        this._myCache = _myCache;
        this._store.select('heroes').subscribe(function (d) { return _this.state = d; });
    }
    HeroesService.prototype._getCharacter = function (id) {
        return this._myCache.get('character', url + "/characters/" + id + "?apikey=" + apikey);
    };
    HeroesService.prototype._getSearch = function (query) {
        return this._myCache.get('characters', url + "/characters?apikey=" + apikey + "&" + query.getQueryString());
    };
    HeroesService.prototype._getComics = function (id) {
        return this._myCache.get('comics', url + "/characters/" + id + "/comics?apikey=" + apikey + "&limit=20");
    };
    HeroesService.prototype._getSeries = function (id) {
        return this._myCache.get('comics', url + "/characters/" + id + "/series?apikey=" + apikey + "&limit=20");
    };
    HeroesService.prototype._addComics = function (id) {
        var _this = this;
        this._getComics(id)
            .map(function (data) {
            return data.data.map(_mapComics);
        })
            .subscribe(function (d) {
            _this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_1__store_heroes_actions__["a" /* AddComicsToSelected */](d));
        });
    };
    HeroesService.prototype._addRelatedAndSeries = function (id) {
        var _this = this;
        this._getSeries(id)
            .subscribe(function (data) {
            var series = data.data.map(_mapSeries);
            _this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_1__store_heroes_actions__["b" /* AddSeriesToSelected */](series));
            _this._mapRelated(data)
                .subscribe(function (related) {
                _this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_1__store_heroes_actions__["c" /* AddRelated */](related));
            });
        });
    };
    HeroesService.prototype.getImage = function (id) {
        var h = this.state.all[id];
        if (h) {
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["Observable"].create(function (observer) {
                observer.next(h.getThumbnail());
                observer.complete();
            });
        }
        else {
            return this._getCharacter(id)
                .map(function (data) {
                return data.data[0].thumbnail.path + '.' + data.data[0].thumbnail.extension;
            });
        }
    };
    HeroesService.prototype.loadMore = function () {
        if (this.state.scrolled === false && !this.state.onlyFavorites) {
            this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__store_heroes_actions__["d" /* Scrolled */]());
            this._search();
        }
    };
    HeroesService.prototype.search = function (value) {
        this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__store_heroes_actions__["e" /* UpdateFilter */](value));
        this._search();
    };
    HeroesService.prototype._mapMoreHeroes = function (data) {
        var heroes = data.data.map(_mapHeroes);
        this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__store_heroes_actions__["f" /* AddHeroes */]({ heroes: heroes }));
    };
    HeroesService.prototype._search = function () {
        var _this = this;
        if (this.lastSearch !== undefined) {
            this.lastSearch.unsubscribe();
        }
        this.lastSearch = this._getSearch(this.state.query)
            .subscribe(function (data) { return _this._mapMoreHeroes(data); });
    };
    HeroesService.prototype.clearCache = function () {
        return this._myCache.clearCache();
    };
    HeroesService.prototype.showDetails = function () {
        this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_1__store_heroes_actions__["g" /* ShowDetails */]());
    };
    HeroesService.prototype.loadFavorites = function () {
        var _this = this;
        return this._myCache.get('favorites')
            .map(function (data) {
            var favorites = (data.data === null) ? [] : data.data;
            _this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_1__store_heroes_actions__["h" /* AddFavorites */](favorites));
            return data;
        });
    };
    HeroesService.prototype.isFavorite = function (id) {
        return (this.state.favorites.find(function (x) { return x.id === id; }) !== undefined);
    };
    HeroesService.prototype.saveFavorite = function (hero) {
        var _this = this;
        var key = 'favorites';
        this._myCache.get(key)
            .switchMap(function (d) {
            var favorites = d.data || [];
            if (favorites.length === 0 || favorites.find(function (x) { return x.id === hero.id; }) === undefined) {
                favorites.push(hero);
                return _this._myCache.set(key, favorites);
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["Observable"].create(function (observer) { observer.next(d); observer.cmplete(); });
            }
        }).subscribe(function (data) {
            _this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_1__store_heroes_actions__["h" /* AddFavorites */](data.data));
        });
    };
    HeroesService.prototype.removeFavorite = function (hero) {
        var _this = this;
        var key = 'favorites';
        this._myCache.get(key)
            .switchMap(function (d) {
            var favorites = d.data || [];
            if (favorites.length === 0 || favorites.find(function (x) { return x.id === hero.id; }) === undefined) {
                return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["Observable"].create(function (observer) { observer.next({ type: 'void', data: null }); observer.complete(); });
            }
            else {
                var toRemove = favorites.find(function (x) { return x.id === hero.id; });
                var i = favorites.indexOf(toRemove);
                return _this._myCache.set(key, favorites.slice(0, i).concat(favorites.slice(i + 1, favorites.length)));
            }
        }).subscribe(function (data) {
            if (data.type !== 'void') {
                _this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_1__store_heroes_actions__["h" /* AddFavorites */](data.data));
            }
        });
    };
    HeroesService.prototype.showFavorites = function () {
        this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_1__store_heroes_actions__["i" /* OnlyFavorites */]());
    };
    HeroesService.prototype.isShowingFavorites = function () {
        return this.state.onlyFavorites;
    };
    HeroesService.prototype.selectHero = function (id) {
        if (id === undefined) {
            this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_1__store_heroes_actions__["j" /* UnselectHero */]());
        }
        else {
            var hero = this.state.all[id];
            this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_1__store_heroes_actions__["k" /* SelectHero */](hero));
            this._addRelatedAndSeries(this.state.selected.id);
            this._addComics(this.state.selected.id);
        }
    };
    HeroesService.prototype._mapRelated = function (data) {
        var _this = this;
        var res = [];
        var observables = [];
        data.data.forEach(function (serie) {
            serie['characters']['items'].forEach(function (c) {
                var id = parseInt(c.resourceURI.split('/').pop());
                var e = { name: c.name, id: id };
                if (!res.find(function (x) { return x.id === e.id; }) && !_selected(_this.state, id)) {
                    res.push(e);
                }
                if (_this.state.all[id] === undefined) {
                    observables.push(_this._getCharacter(id));
                }
            });
        });
        if (observables.length > 0) {
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["Observable"].combineLatest.apply(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["Observable"], observables).map(function (res) {
                var heroes = res.map(function (data) {
                    return new __WEBPACK_IMPORTED_MODULE_4__models_super_hero__["a" /* SuperHero */](data.data[0]);
                });
                _this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_1__store_heroes_actions__["l" /* AddAll */](heroes));
                return true;
            })
                .map(function () { return res; });
        }
        else {
            return _makeDummyObservable(res);
        }
    };
    HeroesService.prototype.hideDetails = function () {
        this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_1__store_heroes_actions__["m" /* HideDetails */]());
    };
    return HeroesService;
}());
HeroesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__ngrx_store__["b" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__my_cache_service__["a" /* MyCacheService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__my_cache_service__["a" /* MyCacheService */]) === "function" && _b || Object])
], HeroesService);

// PRIVATE UTILITIES
function _makeDummyObservable(data) {
    return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["Observable"].create(function (observer) {
        observer.next(data);
        observer.complete();
    });
}
function _mapHeroes(data) {
    var h = new __WEBPACK_IMPORTED_MODULE_4__models_super_hero__["a" /* SuperHero */](data);
    return h;
}
function _mapComics(data) {
    return new __WEBPACK_IMPORTED_MODULE_3__models_comic__["a" /* Comic */](data);
}
function _mapSeries(data) {
    return new __WEBPACK_IMPORTED_MODULE_0__models_series__["a" /* Series */](data);
}
function _selected(state, id) {
    if (state) {
        if (state.selected === undefined) {
            return false;
        }
        else {
            return state.selected.id === id;
        }
    }
    else {
        return false;
    }
}
var _a, _b;
//# sourceMappingURL=heroes.service.js.map

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "body {\n  background: #EEE; }\n\nheader {\n  position: fixed;\n  width: 100%;\n  top: 0;\n  z-index: 1000;\n  box-shadow: #999 0px 3px 5px 1px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".comic-wrapper {\n  width: 100%;\n  height: 165px;\n  background-size: cover;\n  box-shadow: 1px 1px 1px #666;\n  box-shadow: 6px 5px 2px #666;\n  background-color: #999;\n  position: relative; }\n  .comic-wrapper .fa-spinner {\n    position: absolute;\n    top: 80px;\n    left: 43%;\n    font-size: 24px; }\n\n.label {\n  font-size: 12px;\n  margin-top: 14px;\n  padding: 0 2px;\n  min-height: 80px;\n  line-height: 16px;\n  font-weight: bold; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "@media (max-height: 667px) {\n  .character-card .main .inner {\n    height: 136px !important; } }\n\n.character-card {\n  overflow: hidden;\n  box-shadow: #999 0px 3px 5px 1px;\n  cursor: pointer;\n  border-radius: 4px;\n  font-size: 12px; }\n  .character-card .main {\n    border: #CCC 4px solid;\n    position: relative; }\n    .character-card .main .inner {\n      height: 236px;\n      background-color: #CCC; }\n    .character-card .main .favorite {\n      font-size: 32px;\n      position: absolute;\n      top: 10px;\n      right: 10px; }\n    .character-card .main .image-not-loaded {\n      position: relative;\n      top: 50%;\n      font-size: 48px;\n      text-align: center;\n      width: 100%; }\n  .character-card .footer {\n    padding: 8px;\n    width: 100%;\n    height: 40px;\n    overflow: hidden;\n    background-color: black;\n    color: white;\n    z-index: 1000; }\n\n.character-card:hover {\n  box-shadow: #a17d05 0px 3px 5px 1px; }\n  .character-card:hover .footer {\n    text-decoration: underline; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "@media (max-width: 732px) {\n  #details-bar {\n    width: 100% !important;\n    margin-right: -737px !important; }\n  #details-bar.ready {\n    margin-right: 0 !important; } }\n\n#details-bar {\n  position: fixed;\n  height: 100%;\n  top: 0;\n  right: 0;\n  width: 500px;\n  z-index: 2000;\n  margin-right: -505px;\n  transition: margin-right 300ms;\n  box-shadow: #333 -5px 2px 15px; }\n  #details-bar .favorite {\n    padding: 20px;\n    font-size: 50px;\n    text-shadow: 0px 0px 6px #000; }\n  #details-bar #image.image-not-available {\n    background: #CCC bottom left;\n    background-size: cover; }\n  #details-bar #image.image-not-available2 {\n    background: #CCC bottom right;\n    background-size: cover; }\n  #details-bar #image {\n    height: 25vh;\n    background-position: center -40px;\n    position: relative; }\n    #details-bar #image h3 {\n      position: absolute;\n      padding: 8px;\n      font-size: 16px;\n      bottom: 8px;\n      right: 16px;\n      background: #000;\n      color: #FFF; }\n  #details-bar #main {\n    overflow: hidden; }\n    #details-bar #main .description {\n      height: 120px;\n      overflow: scroll;\n      overflow-x: hidden; }\n  #details-bar .wrapper {\n    position: relative;\n    height: 100%; }\n    #details-bar .wrapper #close {\n      position: absolute;\n      top: 0;\n      right: 0;\n      padding: 20px;\n      font-size: 24px;\n      z-index: 4000;\n      cursor: pointer;\n      color: #ccc; }\n    #details-bar .wrapper #button-wrapper {\n      position: absolute;\n      bottom: 30px;\n      padding: 0 20px;\n      width: 100%;\n      right: 0px; }\n      #details-bar .wrapper #button-wrapper button {\n        color: white; }\n\n#details-bar.ready {\n  margin-right: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "#details {\n  width: 100%;\n  min-height: 100vh;\n  overflow: hidden; }\n  #details header {\n    width: 100%;\n    height: 80px; }\n    #details header span#back {\n      cursor: pointer; }\n    #details header span#back:hover {\n      text-decoration: underline; }\n    #details header .separator {\n      height: 8px; }\n  #details h3 {\n    margin-bottom: 16px; }\n  #details .main #comic-container,\n  #details .main .series-container {\n    overflow: hidden; }\n  #details .main .loading {\n    margin-bottom: 20px; }\n  #details .main .col-left .favorite {\n    padding: 20px;\n    font-size: 50px;\n    text-shadow: 0px 0px 6px #000; }\n  #details .main .col-left .image-container {\n    min-height: 30vh;\n    width: 100%;\n    background: center center;\n    background-size: cover;\n    margin-bottom: 20px; }\n  #details .main .col-left .button-wrapper {\n    margin: 20px 0;\n    width: 100%;\n    padding: 0 20px; }\n    #details .main .col-left .button-wrapper button {\n      width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".heroes-filter {\n  padding: 4px;\n  background: black;\n  color: white; }\n  .heroes-filter .btn-fav {\n    position: fixed;\n    bottom: 30px;\n    right: 52px;\n    border-radius: 50%;\n    width: 75px;\n    height: 75px;\n    font-size: 25px;\n    cursor: pointer;\n    background: #999;\n    padding: 20px;\n    box-shadow: 0px 6px 8px #666; }\n  .heroes-filter .btn-fav:hover {\n    -webkit-transform: scale(0.98) translateY(2px);\n            transform: scale(0.98) translateY(2px);\n    box-shadow: none; }\n  .heroes-filter .btn-fav.active {\n    background-color: #f9ca2c;\n    color: #666; }\n  .heroes-filter .wrapper {\n    position: relative; }\n    .heroes-filter .wrapper .remove-filter {\n      position: relative;\n      top: 2px;\n      left: 12px;\n      cursor: pointer;\n      font-size: 20px;\n      color: white; }\n    .heroes-filter .wrapper .btn {\n      cursor: pointer;\n      position: absolute;\n      right: 4px;\n      top: -38px; }\n    .heroes-filter .wrapper input {\n      background: black;\n      color: #BBB;\n      text-indent: 14px;\n      border: none;\n      display: inline-block;\n      width: 90%; }\n    .heroes-filter .wrapper input:focus {\n      outline: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".heroes-grid {\n  padding-top: 120px !important;\n  height: 100vh;\n  overflow: scroll;\n  overflow-x: hidden; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "#loading-modal {\n  top: 50%;\n  position: fixed;\n  opacity: 0.8;\n  font-size: 38px;\n  text-align: center;\n  width: 100%;\n  text-align: center; }\n  #loading-modal .wrapper {\n    border-radius: 10px;\n    margin: 0 auto;\n    padding: 40px 50px;\n    background: #AAA;\n    display: inline-block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".mini-card {\n  position: relative; }\n  .mini-card .fake-image {\n    min-height: 100px;\n    border: 1px solid #000;\n    position: relative;\n    background: #999; }\n    .mini-card .fake-image .fa-spinner {\n      position: absolute;\n      top: 20%;\n      left: 45%; }\n  .mini-card .fa-star {\n    position: absolute;\n    top: 12px;\n    right: 12px;\n    font-size: 19px;\n    text-shadow: 0px 0px 5px;\n    color: #f9ca2c;\n    z-index: 50; }\n  .mini-card .image {\n    height: 100px;\n    border: 1px solid black;\n    background: top center;\n    background-size: cover;\n    cursor: pointer; }\n  .mini-card .wrapper {\n    overflow: hidden;\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    left: 0; }\n    .mini-card .wrapper .name {\n      padding: 4px;\n      background: #000;\n      color: #fff;\n      width: 100%;\n      font-size: 12px;\n      overflow: hidden; }\n\n.mini-card.favorite .wrapper .name {\n  padding: 4px;\n  background: #ebb707;\n  border-left: solid 1px #000;\n  border-right: solid 1px #000;\n  border-bottom: solid 1px #000;\n  color: #333;\n  font-weight: bold;\n  width: 100%;\n  font-size: 12px;\n  overflow: hidden; }\n\n.mini-card:hover {\n  background: #666; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "#no-results {\n  background: no-repeat center center #DDD url(" + __webpack_require__(530) + ");\n  opacity: 0.3;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 0;\n  width: 100%;\n  height: 100%; }\n  #no-results p {\n    z-index: 50;\n    opacity: 1;\n    color: #000;\n    text-align: center;\n    width: 100%;\n    position: fixed;\n    top: 15%;\n    font-size: 35px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "@media (max-height: 666px) {\n  #mini-cards-container {\n    height: 148px !important; } }\n\n@media (min-height: 667px) {\n  #mini-cards-container {\n    height: 220px !important; } }\n\n@media (min-height: 668px) {\n  #mini-cards-container {\n    height: 45vh !important; } }\n\n#related-heroes #mini-cards-container {\n  overflow: scroll;\n  overflow-x: hidden; }\n\n#related-heroes .loading {\n  text-align: center;\n  padding-top: 100px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 252:
/***/ (function(module, exports) {

module.exports = "<header [style.display]=\"(state.section === 'details') ? 'none' : 'block'\">\n    <h1 class=\"main-title b-color-1\">Marvel Heroes</h1>\n    <app-filter [filter]=\"state.query.filter\"></app-filter>\n</header>\n<app-heroes-grid [style.display]=\"(state.section === 'details') ? 'none' : 'block'\" [heroes]=\"state.list\"></app-heroes-grid>\n<app-details-bar [selected]=\"getSidebar()\"></app-details-bar>\n<app-details [selected]=\"getDetails()\"></app-details>\n<app-loading [loading]=\"state.loading\"></app-loading>\n<app-no-results [list]=\"state.list\"></app-no-results>"

/***/ }),

/***/ 253:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!imageLoaded\" class=\"comic-wrapper\">\n    <span class=\"comic-wrapper\" class=\"fa fa-spinner spin image-not-loaded\"></span>\n</div>\n<div *ngIf=\"imageLoaded\" class=\"comic-wrapper\" [style.background-image]=\"'url('+item.getThumbnail()+')'\"></div>\n<div class=\"label\">{{item.title}}</div>\n\n<img [style.display]=\"'none'\" (load)=\"imageLoaded=true\" [src]=\"item.getThumbnail()\" />"

/***/ }),

/***/ 254:
/***/ (function(module, exports) {

module.exports = "<div [id]=\"'id-'+hero.id\" class=\"character-card\" (click)=\"showDetails(hero)\">\n  <div class=\"main\">\n    <img [style.display]=\"'none'\" (load)=\"imageLoaded=true\" [src]=\"hero.getThumbnail()\" />\n    <div *ngIf=\"imageLoaded\" [class]=\"'inner '+hero.getCssClass()\" [style.background-image]=\"'url('+hero.getThumbnail()+')'\">\n      <span *ngIf=\"isFavorite()\" class=\"fa fa-star favorite\"></span>\n    </div>\n    <div class=\"inner\" *ngIf=\"!imageLoaded\">\n      <span class=\"fa fa-spinner spin image-not-loaded\"></span>\n      <span *ngIf=\"isFavorite()\" class=\"fa fa-star favorite\"></span>\n    </div>\n  </div>\n  <div class=\"footer\">{{hero.name}}</div>\n</div>"

/***/ }),

/***/ 255:
/***/ (function(module, exports) {

module.exports = "<div id=\"details-bar\" [class]=\"'b-color-3-t '+animate()\">\n  <div class=\"wrapper\" *ngIf=\"selected !== undefined\">\n    <span id=\"close\" (click)=\"closeBar()\" class=\"fa fa-window-close\"></span>\n    <div id=\"image\" (click)=\"consoleLogDetails()\" [class]=\"selected.getCssClass()\" [style.background-image]=\"'url('+selected.getThumbnail()+')'\">\n      <span *ngIf=\"isFavorite()\" class=\"fa fa-star favorite\"></span>\n      <h3>{{selected.name}}</h3>\n    </div>\n    <div class=\"p-4\" id=\"main\">\n      <div id=\"description\">\n        <p class=\"description\">{{selected.description ? selected.description : 'No Description Available in the DB.'}}</p>\n      </div>\n      <app-related-heroes [related]=\"getRelated()\"></app-related-heroes>\n      <div id=\"button-wrapper\">\n        <button [disabled]=\"loading() === true\" class=\"btn b-color-1 btn-block\" (click)=\"showDetails()\">More Details</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 256:
/***/ (function(module, exports) {

module.exports = "<div id=\"details\" class=\"b-color-3\" *ngIf=\"selected\">\n\n  <header>\n    <h1 class=\"main-title\">\n      <span id=\"back\" (click)=\"closeDetails()\">Back</span>\n    </h1>\n    <div class=\"separator b-color-2\"></div>\n  </header>\n\n  <div class=\"main pt-0 pl-4 pr-4\">\n\n    <div class=\"col-sm-7 col-md-8 col-right float-sm-right\">\n      <h2>{{selected.name}}</h2>\n      <div class=\"description mb-4\">{{getDescription()}}</div>\n      <h3>Comics</h3>\n      <div id=\"comic-container\" class=\"mb-4\">\n        <div class=\"loading\" *ngIf=\"selected.comics === undefined\"><span class=\"fa fa-spinner spin\"></span> loading</div>\n        <div *ngIf=\"!hasComics()\">There are not Comics in the Database.</div>\n        <div class=\"comic mb-4 col-6 col-sm-6 col-md-3 col-lg-3 col-xl-2 float-left\" *ngFor=\"let item of selected.comics\">\n          <app-booklet [item]=\"item\"></app-booklet>\n        </div>\n\n      </div>\n      <h3>Also appears in...</h3>\n      <div class=\"series-container mb-4\">\n          <div class=\"loading\" *ngIf=\"selected.seriesList === undefined\"><span class=\"fa fa-spinner spin\"></span> loading</div>\n          <div *ngIf=\"!hasSeries()\">There are not Series in the Database.</div>\n          <div class=\"comic mb-4 col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3 float-left\" *ngFor=\"let item of selected.seriesList\">\n            <app-booklet [item]=\"item\"></app-booklet>\n          </div>\n      </div>\n    </div>\n\n    <div class=\"col-sm-5 col-md-4 col-left float-sm-left\">\n      <div class=\"image-container img-thumbnail\" [style.background-image]=\"'url('+selected.getThumbnail()+')'\">\n        <span *ngIf=\"isFavorite()\" class=\"fa fa-star favorite\"></span>\n      </div>\n      <app-related-heroes [related]=\"getDetails()\"></app-related-heroes>\n      <div class=\"button-wrapper\">\n        <button *ngIf=\"!isFavorite()\" class=\"btn b-color-1\" (click)=\"saveFavorite()\"><span class=\"fa fa-star\"></span> Save as Favorite</button>\n        <button *ngIf=\"isFavorite()\" class=\"btn b-color-1\" (click)=\"removeFavorite()\"><span class=\"fa fa-star-o\"></span> Remove as Favorite</button>\n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ 257:
/***/ (function(module, exports) {

module.exports = "<div class=\"heroes-filter\">\n<div class=\"wrapper\">\n    <span (click)=\"removeFilter()\" *ngIf=\"filter.length > 0\" class=\"fa fa-window-close remove-filter\"></span>\n    <input [value]=\"filter\" (keyup)=\"updateFilter($event.target.value)\" type=\"text\" placeholder=\"Filter results here...\" />\n    <button (click)=\"clearCache()\" class=\"btn btn-sm btn-default\"><span class=\"fa fa-trash\"></span> Cache</button>\n</div>\n<div *ngIf=\"!isShowingFavorites()\" (click)=\"toggleFavorites()\" [class]=\"getClasses()\"><span class=\"fa fa-star-o\"></span></div>\n<div *ngIf=\"isShowingFavorites()\" (click)=\"toggleFavorites()\" [class]=\"getClasses()\"><span class=\"fa fa-star\"></span></div>\n</div>"

/***/ }),

/***/ 258:
/***/ (function(module, exports) {

module.exports = "<div class=\"heroes-grid p-sm-4\" infiniteScroll [infiniteScrollDistance]=\"2\" [infiniteScrollThrottle]=\"300\" (scrolled)=\"onScroll()\"\n  [scrollWindow]=\"false\">\n  <div *ngFor=\"let hero of heroes; let i = index \">\n    <div class=\"col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 mt-1 p-2 p-md-3 pull-left\">\n      <app-character-card [hero]=\"hero\"></app-character-card>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 259:
/***/ (function(module, exports) {

module.exports = "<div id=\"loading-modal\" *ngIf=\"loading\">\n  <div class=\"wrapper\">\n    <span class=\"fa fa-spinner fa-spin\"></span>\n  </div>\n</div>"

/***/ }),

/***/ 260:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"image\" [class]=\"getClasses()\">\n  <span class=\"fa fa-star\" *ngIf=\"isFavorite()\"></span>\n  <div class=\"fake-image\" *ngIf=\"!imageLoaded\">\n    <span class=\"fa fa-spinner spin image-not-loaded\"></span>\n    <div class=\"wrapper\">\n      <div class=\"name\">{{related.name}}</div>\n    </div>\n  </div>\n  <div *ngIf=\"imageLoaded\" (click)=\"select(related.id)\" class=\"image\" [style.background-image]=\"'url('+image+')'\">\n    <div class=\"wrapper p-1\">\n      <div class=\"name\">{{related.name}}</div>\n    </div>\n  </div>\n</div>\n\n<img [style.display]=\"'none'\" (load)=\"imageLoaded=true\" [src]=\"image\" />"

/***/ }),

/***/ 261:
/***/ (function(module, exports) {

module.exports = "<div id=\"no-results\" *ngIf=\"list.length === 0\">\n  <p>No results!</p>\n</div>"

/***/ }),

/***/ 262:
/***/ (function(module, exports) {

module.exports = "<div id=\"related-heroes\">\n  <h4>Related Heroes</h4>\n  <div class=\"loading\" *ngIf=\"loading()\"><span class=\"fa fa-spinner spin\"></span> loading</div>\n  <div *ngIf=\"!loading()\" id=\"mini-cards-container\">\n    <app-mini-card *ngFor=\"let item of related\" [related]=\"item\"></app-mini-card>\n    <p *ngIf=\"related.length === 0\">No Information Available in the DB.</p>\n  </div>\n</div>"

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuperHero; });
var SuperHero = (function () {
    function SuperHero(data) {
        this.comics = undefined;
        this.related = undefined;
        this.seriesList = undefined;
        this.comics = data.comics;
        this.description = data.description;
        this.events = data.events;
        this.id = data.id;
        this.modified = data.modified;
        this.name = data.name;
        this.resourceURI = data.resourceURI;
        this.series = data.series;
        this.stories = data.stories;
        this.thumbnail = data.thumbnail;
        this.urls = data.urls;
        this.related = (data['related'] && data['related'] instanceof Array) ? data['related'] : undefined;
        this.comics = (data['comics'] && data['comics'] instanceof Array) ? data['comics'] : undefined;
        this.seriesList = (data['seriesList'] && data['seriesList'] instanceof Array) ? data['seriesList'] : undefined;
    }
    SuperHero.prototype.getThumbnail = function () {
        return this.thumbnail.path + '.' + this.thumbnail.extension;
    };
    SuperHero.prototype.getCssClass = function () {
        var path = this.thumbnail.path.split('/');
        var filename = path[path.length - 1];
        var res = 'image-available';
        if (filename === 'image_not_available') {
            res = 'image-not-available';
        }
        else if (filename === '4c002e0305708') {
            res = 'image-not-available2';
        }
        return res;
    };
    SuperHero.clone = function (hero) {
        var props = Object.assign({}, hero);
        return new SuperHero(props);
    };
    return SuperHero;
}());

//# sourceMappingURL=super-hero.js.map

/***/ }),

/***/ 530:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "no-results.b34c7caf067be40360ee.png";

/***/ }),

/***/ 532:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(147);


/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return ADD_HEROES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return UPDATE_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return SELECT_HERO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return UNSELECT_HERO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return SHOW_DETAILS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return HIDE_DETAILS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return SCROLLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return ADD_RELATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return ADD_FAVORITES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return ONLY_FAVORITES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return ADD_ALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return ADD_COMICS_TO_SELECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return ADD_SERIES_TO_SELECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return AddHeroes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddComicsToSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AddSeriesToSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return AddAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return OnlyFavorites; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Scrolled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return UpdateFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return SelectHero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return UnselectHero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ShowDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return HideDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AddRelated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return AddFavorites; });
var ADD_HEROES = '[Heroes Browser] Add Heroes';
var UPDATE_FILTER = '[Heroes Browser] Update Filter';
var SELECT_HERO = '[Heroes Browser] Select Hero';
var UNSELECT_HERO = '[Heroes Browser] Unselect Hero';
var SHOW_DETAILS = '[Heroes Browser] Show Details';
var HIDE_DETAILS = '[Heroes Browser] Hide Details';
var SCROLLED = '[Heroes Browser] Scrolled';
var ADD_RELATED = '[Heroes Browser] Add Related';
var ADD_FAVORITES = '[Heroes Browser] Add Favorites';
var ONLY_FAVORITES = '[Heroes Browser] Only Favorites';
var ADD_ALL = '[Heroes Browser] Add All';
var ADD_COMICS_TO_SELECTED = '[Heroes Browser] Add Comics To Selected';
var ADD_SERIES_TO_SELECTED = '[Heroes Browser] Add Series To Selected';
var AddHeroes = (function () {
    function AddHeroes(payload) {
        this.payload = payload;
        this.type = ADD_HEROES;
    }
    return AddHeroes;
}());

var AddComicsToSelected = (function () {
    function AddComicsToSelected(payload) {
        this.payload = payload;
        this.type = ADD_COMICS_TO_SELECTED;
    }
    return AddComicsToSelected;
}());

var AddSeriesToSelected = (function () {
    function AddSeriesToSelected(payload) {
        this.payload = payload;
        this.type = ADD_SERIES_TO_SELECTED;
    }
    return AddSeriesToSelected;
}());

var AddAll = (function () {
    function AddAll(payload) {
        this.payload = payload;
        this.type = ADD_ALL;
    }
    return AddAll;
}());

var OnlyFavorites = (function () {
    function OnlyFavorites() {
        this.type = ONLY_FAVORITES;
    }
    return OnlyFavorites;
}());

var Scrolled = (function () {
    function Scrolled() {
        this.type = SCROLLED;
    }
    return Scrolled;
}());

var UpdateFilter = (function () {
    function UpdateFilter(payload) {
        this.payload = payload;
        this.type = UPDATE_FILTER;
    }
    return UpdateFilter;
}());

var SelectHero = (function () {
    function SelectHero(payload) {
        this.payload = payload;
        this.type = SELECT_HERO;
    }
    return SelectHero;
}());

var UnselectHero = (function () {
    function UnselectHero() {
        this.type = UNSELECT_HERO;
    }
    return UnselectHero;
}());

var ShowDetails = (function () {
    function ShowDetails() {
        this.type = SHOW_DETAILS;
    }
    return ShowDetails;
}());

var HideDetails = (function () {
    function HideDetails() {
        this.type = HIDE_DETAILS;
    }
    return HideDetails;
}());

var AddRelated = (function () {
    function AddRelated(payload) {
        this.payload = payload;
        this.type = ADD_RELATED;
    }
    return AddRelated;
}());

var AddFavorites = (function () {
    function AddFavorites(payload) {
        this.payload = payload;
        this.type = ADD_FAVORITES;
    }
    return AddFavorites;
}());

//# sourceMappingURL=heroes.actions.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_localforage__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_localforage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_localforage__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyCacheService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyCacheService = (function () {
    function MyCacheService(_http) {
        this._http = _http;
    }
    MyCacheService.prototype.get = function (type, url) {
        if (url) {
            return this._dealWithUrl(type, url);
        }
        else {
            return _dealWithData(type);
        }
    };
    MyCacheService.prototype.set = function (type, data) {
        return _saveToCache(type, data).map(function () { return ({ type: type, data: data }); });
    };
    MyCacheService.prototype.clearCache = function () {
        return __WEBPACK_IMPORTED_MODULE_4_localforage__["clear"]();
    };
    MyCacheService.prototype._dealWithUrl = function (type, url) {
        var _this = this;
        return _getFromCache(type + '-' + url)
            .switchMap(function (res) {
            if (res === null) {
                return _this._askServerAndSaveIt(type, url);
            }
            else {
                return _makeObservableFromData(type, res);
            }
        });
    };
    MyCacheService.prototype._askServerAndSaveIt = function (type, url) {
        return this._http.get(url)
            .switchMap(function (res) {
            var data = res.json().data.results;
            return _saveToCache(type + '-' + url, data)
                .map(function () { return ({ type: type, data: data }); });
        });
    };
    return MyCacheService;
}());
MyCacheService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], MyCacheService);

function _dealWithData(type) {
    return _getFromCache(type)
        .switchMap(function (res) { return _makeObservableFromData(type, res); });
}
function _getFromCache(key) {
    return __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Observable"].fromPromise(__WEBPACK_IMPORTED_MODULE_4_localforage__["getItem"](key));
}
function _saveToCache(key, data) {
    return __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Observable"].fromPromise(__WEBPACK_IMPORTED_MODULE_4_localforage__["setItem"](key, data));
}
function _makeObservableFromData(type, data) {
    return __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Observable"].create(function (observer) {
        observer.next({ type: type, data: data });
        observer.complete();
    });
}
var _a;
//# sourceMappingURL=my-cache.service.js.map

/***/ })

},[532]);
//# sourceMappingURL=main.bundle.js.map