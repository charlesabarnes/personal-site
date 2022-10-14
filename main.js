"use strict";
(self["webpackChunkpersonal_site"] = self["webpackChunkpersonal_site"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 10, vars: 0, consts: [[1, "header"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["[_nghost-%COMP%]   div.header[_ngcontent-%COMP%] {\n  display: none;\n  justify-content: flex-end;\n  margin-right: 30px;\n}\n[_nghost-%COMP%]   div.header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBQVI7QUFDUTtFQUNJLFdBQUE7QUFDWiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXYuaGVhZGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _loading_indicator_loading_indicator_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loading-indicator/loading-indicator.component */ 732);
/* harmony import */ var _home_experience_experience_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/experience/experience.component */ 5092);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _home_projects_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/projects/projects.component */ 2635);
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./portfolio/portfolio.component */ 5574);
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-smart-modal */ 7831);
/* harmony import */ var _startAnimation_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./startAnimation.directive */ 5213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);















const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent },
    { path: '**', redirectTo: '/' },
];
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [
        _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe
    ], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
        ngx_smart_modal__WEBPACK_IMPORTED_MODULE_6__.NgxSmartModalModule.forRoot(),
        _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent,
        _loading_indicator_loading_indicator_component__WEBPACK_IMPORTED_MODULE_2__.LoadingIndicatorComponent,
        _home_experience_experience_component__WEBPACK_IMPORTED_MODULE_3__.ExperienceComponent,
        _home_projects_projects_component__WEBPACK_IMPORTED_MODULE_4__.ProjectsComponent,
        _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_5__.PortfolioComponent,
        _startAnimation_directive__WEBPACK_IMPORTED_MODULE_7__.StartAnimationDirective], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, ngx_smart_modal__WEBPACK_IMPORTED_MODULE_6__.NgxSmartModalModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule] }); })();


/***/ }),

/***/ 5092:
/*!*********************************************************!*\
  !*** ./src/app/home/experience/experience.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExperienceComponent": () => (/* binding */ ExperienceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _loading_indicator_loading_indicator_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../loading-indicator/loading-indicator.component */ 732);
/* harmony import */ var _startAnimation_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../startAnimation.directive */ 5213);





function ExperienceComponent_loading_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "loading");
} }
const _c0 = function (a0) { return { "animation-delay": a0 }; };
const _c1 = function (a0) { return { "width": a0 }; };
function ExperienceComponent_div_3_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const technology_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c0, i_r5 * 125 + "ms"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", technology_r4.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c1, technology_r4.percent + "%"));
} }
function ExperienceComponent_div_3_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const expLevel_r6 = ctx.$implicit;
    const in_r7 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, in_r7 * 125 + "ms"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](expLevel_r6);
} }
function ExperienceComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 7)(5, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "svg", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "title")(8, "desc")(9, "defs");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "g", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "g", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "g", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "path", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "svg", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "title")(17, "desc")(18, "defs");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "g", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "g", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "g", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "path", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " I am a developer based out of St. Louis, Missouri that works mostly in PHP, HTML, CSS, and Javascript/Typescript. Feel free to check out some of my projects below. Reach out to charles@charlesabarnes.com if you have any questions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, ExperienceComponent_div_3_div_26_Template, 4, 7, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, ExperienceComponent_div_3_div_28_Template, 3, 4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.technologies.technologies);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.expLevels);
} }
class ExperienceComponent {
    constructor(http, date) {
        this.http = http;
        this.date = date;
        this.loading = true;
        this.expLevels = ['Familiar', 'Beginner', 'Intermediate', 'Advanced', 'Master'];
    }
    ngOnInit() {
        this.getJobExperience();
    }
    getJobExperience() {
        this.http.get('assets/experience.json').subscribe((technologies) => {
            this.technologies = technologies;
            this.loading = false;
        });
    }
}
ExperienceComponent.ɵfac = function ExperienceComponent_Factory(t) { return new (t || ExperienceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe)); };
ExperienceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ExperienceComponent, selectors: [["app-experience"]], decls: 4, vars: 2, consts: [[4, "ngIf"], ["animations", "animated fadeInLeft"], ["class", "personal", 4, "ngIf"], [1, "personal"], ["animations", "animated fadeInLeft", 1, "details"], ["animations", "animated fadeIn", 1, "headshot"], ["src", "assets/images/me.jfif"], [1, "icons"], ["target", "_blank", "href", "https://github.com/charlesabarnes", 1, "animated", "fadeIn", 2, "animation-delay", "125ms"], ["height", "5vh", "version", "1.1", "viewBox", "0 0 60 60", "width", "5vh", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "sketch", "http://www.bohemiancoding.com/sketch/ns", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink"], ["fill", "none", "fill-rule", "evenodd", "id", "black", "stroke", "none", "stroke-width", "1"], ["id", "slice", "transform", "translate(-900.000000, -500.000000)"], ["fill", "#000000", "id", "github", "transform", "translate(11.000000, 11.000000)"], ["d", "M14.4252739,36.5168887 C14.4252739,36.0671729 14.4094072,34.8772272 14.4003405,33.2968305 C9.2651779,34.440294 8.18170506,30.7588994 8.18170506,30.7588994 C7.34190028,28.5719093 6.13149339,27.9897191 6.13149339,27.9897191 C4.45528384,26.8148801 6.25842744,26.8392833 6.25842744,26.8392833 C8.111438,26.9729198 9.08611021,28.7903759 9.08611021,28.7903759 C10.7328529,31.6827342 13.4064015,30.8483777 14.4592741,30.3638002 C14.6270084,29.1401549 15.1041445,28.3057984 15.6311475,27.8328415 C11.5318575,27.3552363 7.22176626,25.7306815 7.22176626,18.4771257 C7.22176626,16.4109894 7.94143703,14.7213595 9.12237709,13.3977773 C8.93310934,12.9190101 8.29843906,10.9946447 9.30371145,8.38815229 C9.30371145,8.38815229 10.8541203,7.8791716 14.3799404,10.3287864 C15.8521487,9.90928408 17.4320244,9.69778982 19.0028333,9.69081748 C20.5702423,9.69778982 22.1489846,9.90928408 23.624593,10.3287864 C27.1481464,7.8791716 28.6962885,8.38815229 28.6962885,8.38815229 C29.7038276,10.9934827 29.0702907,12.917848 28.8798896,13.3977773 C30.0630963,14.7213595 30.7771004,16.4109894 30.7771004,18.4771257 C30.7771004,25.7492744 26.4602091,27.349426 22.3473191,27.8177347 C23.0114562,28.4022491 23.6007929,29.5573331 23.6007929,31.3236588 C23.6007929,33.8546176 23.5769927,35.8963506 23.5769927,36.5168887 C23.5769927,37.0235453 23.9101946,37.6115458 24.8474666,37.4267788 C32.176775,34.9190612 37.4615385,27.8281932 37.4615385,19.4683597 C37.4615385,9.01333862 29.1949581,0.538461538 18.9994333,0.538461538 C8.80504195,0.538461538 0.538461538,9.01333862 0.538461538,19.4683597 C0.539594878,27.8305174 5.82889166,34.9260335 13.1650001,37.4291029 C14.0875387,37.6022493 14.4252739,37.017735 14.4252739,36.5168887 Z", 1, "icon"], ["target", "_blank", "href", "https://www.linkedin.com/in/charlesabarnes/", 1, "animated", "fadeIn", 2, "animation-delay", "250ms"], ["id", "slice", "transform", "translate(-600.000000, 0.000000)"], ["fill", "#000000", "id", "linkedin", "transform", "translate(16.000000, 17.000000)"], ["d", "M5.88307542,26.8231512 L5.88307542,8.52433895 L0.227370038,8.52433895 L0.227370038,26.8231512 L5.88307542,26.8231512 Z M5.88307542,2.03821455 C5.84938823,0.400659962 4.75801564,-0.846153846 2.98505434,-0.846153846 C1.21163158,-0.846153846 0.0528846154,0.400659962 0.0528846154,2.03821455 C0.0528846154,3.64020234 1.17794439,4.92307692 2.9172185,4.92307692 L2.95090569,4.92307692 C4.75801564,4.92307692 5.88307542,3.64020234 5.88307542,2.03821455 Z M15.1100418,26.8231517 L15.1100418,16.3973729 C15.1100418,15.8394014 15.1503704,15.28143 15.3144472,14.8836682 C15.7630341,13.7682778 16.7839561,12.6136637 18.498199,12.6136637 C20.7438958,12.6136637 22.152278,13.8881587 22.152278,16.3973727 L22.152278,26.8231516 L27.8461538,26.8231517 L27.8461538,16.1183872 C27.8461538,10.3839878 24.7850453,7.71566901 20.7019099,7.71566901 C17.3540813,7.71566901 15.8845724,9.58735929 15.0686083,10.861302 L15.1094893,8.41391226 L9.425462,8.41391226 C9.50722415,10.1657215 9.425462,26.8231516 9.425462,26.8231516 L15.1100418,26.8231517 Z", 1, "icon"], ["animations", "animated fadeIn"], ["animations", "animated fadeInRight", 1, "technologies"], ["class", "technology", "animations", "animated fadeIn", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "indicator"], ["animations", "animated fadeIn", 3, "ngStyle", 4, "ngFor", "ngForOf"], ["animations", "animated fadeIn", 1, "technology", 3, "ngStyle"], [1, "progress-bar"], ["animations", "animated progress fadeInLeft", 3, "ngStyle"], ["animations", "animated fadeIn", 3, "ngStyle"]], template: function ExperienceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ExperienceComponent_loading_0_Template, 1, 0, "loading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ExperienceComponent_div_3_Template, 29, 2, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, _loading_indicator_loading_indicator_component__WEBPACK_IMPORTED_MODULE_0__.LoadingIndicatorComponent, _startAnimation_directive__WEBPACK_IMPORTED_MODULE_1__.StartAnimationDirective], styles: ["[_nghost-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 100px;\n}\n[_nghost-%COMP%]   div.personal[_ngcontent-%COMP%] {\n  margin-top: 10vh;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\n[_nghost-%COMP%]   div.personal[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  flex-basis: 35%;\n  text-align: center;\n  font-size: 2vh;\n  line-height: 2.5vh;\n}\n@media only screen and (max-width: 850px) {\n  [_nghost-%COMP%]   div.personal[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n    flex-basis: 85%;\n    margin-bottom: 50px;\n  }\n}\n[_nghost-%COMP%]   div.personal[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .headshot[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  margin-bottom: 10px;\n}\n[_nghost-%COMP%]   div.personal[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .headshot[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 10vh;\n  height: 10vh;\n  border-radius: 50%;\n}\n[_nghost-%COMP%]   div.personal[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n[_nghost-%COMP%]   div.personal[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  fill: #1694c5;\n}\n[_nghost-%COMP%]   div.personal[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover {\n  fill: #55c2ec;\n}\n[_nghost-%COMP%]   div.personal[_ngcontent-%COMP%]    > div.technologies[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  flex-basis: 55%;\n  position: relative;\n}\n@media only screen and (max-width: 850px) {\n  [_nghost-%COMP%]   div.personal[_ngcontent-%COMP%]    > div.technologies[_ngcontent-%COMP%] {\n    flex-basis: 85%;\n    margin-bottom: 50px;\n  }\n}\n[_nghost-%COMP%]   div.personal[_ngcontent-%COMP%]    > div.technologies[_ngcontent-%COMP%]   div.indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  width: 100%;\n  display: inline-block;\n  flex-basis: 100%;\n  position: absolute;\n  top: 0px;\n  z-index: -1;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n}\n[_nghost-%COMP%]   div.personal[_ngcontent-%COMP%]    > div.technologies[_ngcontent-%COMP%]   div.indicator[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  border-right: 0.05vw dashed rgba(244, 244, 244, 0.3215686275);\n  height: 100%;\n  width: 3px;\n  display: flex;\n  align-items: flex-end;\n}\n@media only screen and (max-width: 850px) {\n  [_nghost-%COMP%]   div.personal[_ngcontent-%COMP%]    > div.technologies[_ngcontent-%COMP%]   div.indicator[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    border-right: 1px dashed rgba(244, 244, 244, 0.3215686275);\n  }\n}\n[_nghost-%COMP%]   div.personal[_ngcontent-%COMP%]    > div.technologies[_ngcontent-%COMP%]   div.indicator[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  transform: rotate(30deg) translateY(20px) translateX(15px);\n  font-size: 1.5vh;\n}\n[_nghost-%COMP%]   div.personal[_ngcontent-%COMP%]    > div.technologies[_ngcontent-%COMP%]    > div.technology[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  flex-basis: 100%;\n  font-size: 1.5vh;\n}\n[_nghost-%COMP%]   div.personal[_ngcontent-%COMP%]    > div.technologies[_ngcontent-%COMP%]    > div.technology[_ngcontent-%COMP%]   div.progress-bar[_ngcontent-%COMP%] {\n  background-color: #1d1d1d;\n  margin: 1vw;\n  border-radius: 1vw;\n}\n[_nghost-%COMP%]   div.personal[_ngcontent-%COMP%]    > div.technologies[_ngcontent-%COMP%]    > div.technology[_ngcontent-%COMP%]   div.progress-bar[_ngcontent-%COMP%]    > div.progress[_ngcontent-%COMP%] {\n  background-color: #1694c5;\n  height: 0.55vh;\n  width: 0px;\n  border-radius: 1vw;\n  animation: slide 1s linear;\n}\n@keyframes slide {\n  0% {\n    width: 0;\n  }\n  100% {\n    width: var(width, 100%);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUFEUjtBQUdJO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUFEUjtBQUVRO0VBS0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBSlo7QUFIWTtFQURKO0lBRVEsZUFBQTtJQUNBLG1CQUFBO0VBTWQ7QUFDRjtBQURZO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUdoQjtBQUZnQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFJcEI7QUFEWTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQUdoQjtBQUZnQjtFQUNJLGFBQUE7QUFJcEI7QUFIb0I7RUFDSSxhQUFBO0FBS3hCO0FBQ0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUtBLGtCQUFBO0FBSFI7QUFEUTtFQUxKO0lBTVEsZUFBQTtJQUNBLG1CQUFBO0VBSVY7QUFDRjtBQUZRO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQUlaO0FBSFk7RUFDSSw2REFBQTtFQUtBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0FBQ2hCO0FBUmdCO0VBRko7SUFHUSwwREFBQTtFQVdsQjtBQUNGO0FBTGdCO0VBQ0ksMERBQUE7RUFDQSxnQkFBQTtBQU9wQjtBQUhRO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFLWjtBQUpZO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFNaEI7QUFMZ0I7RUFDSSx5QkMvRlY7RURnR1UsY0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FBT3BCO0FBR0E7RUFFSTtJQUNJLFFBQUE7RUFETjtFQUlFO0lBQ0ksdUJBQUE7RUFGTjtBQUNGIiwiZmlsZSI6ImV4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi92YXJpYWJsZXMuc2Nzcyc7XHJcbjpob3N0IHtcclxuICAgIGgxIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICB9XHJcbiAgICBkaXYucGVyc29uYWwge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwdmg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93OyBcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgLmRldGFpbHMge1xyXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWJhc2lzOiA4NSU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IDM1JTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDJ2aDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIuNXZoO1xyXG4gICAgICAgICAgICAuaGVhZHNob3Qge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMHZoO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaWNvbnMge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgLmljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6ICMxNjk0YzU7XHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IGxpZ2h0ZW4oICMxNjk0YzUsICRhbW91bnQ6IDIwKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGRpdi5wZXJzb25hbCA+IGRpdi50ZWNobm9sb2dpZXMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgZmxleC1iYXNpczogNTUlO1xyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcclxuICAgICAgICAgICAgZmxleC1iYXNpczogODUlO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZGl2LmluZGljYXRvciB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBmbGV4LWJhc2lzOiAxMDAlO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICAgID5kaXYge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAuMDV2dyBkYXNoZWQgI2Y0ZjRmNDUyO1xyXG4gICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IGRhc2hlZCAjZjRmNGY0NTI7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDNweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZykgdHJhbnNsYXRlWSgyMHB4KSB0cmFuc2xhdGVYKDE1cHgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41dmg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgPmRpdi50ZWNobm9sb2d5IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgICAgICBmbGV4LWJhc2lzOiAxMDAlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXZoO1xyXG4gICAgICAgICAgICBkaXYucHJvZ3Jlc3MtYmFyeyBcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxZDFkMWQ7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDF2dztcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDF2dztcclxuICAgICAgICAgICAgICAgID5kaXYucHJvZ3Jlc3Mge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogLjU1dmg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxdnc7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBzbGlkZSAxcyBsaW5lYXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuXHJcbkBrZXlmcmFtZXMgc2xpZGUge1xyXG5cclxuICAgIDAle1xyXG4gICAgICAgIHdpZHRoOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIDEwMCV7XHJcbiAgICAgICAgd2lkdGg6IHZhcih3aWR0aCwgMTAwJSk7XHJcbiAgICB9XHJcblxyXG5cclxufSIsIiRwcmltYXJ5OiAjMTY5NGM1OyJdfQ== */"] });


/***/ }),

/***/ 5067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./experience/experience.component */ 5092);
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects/projects.component */ 2635);




function HomeComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "li");
} }
class HomeComponent {
    constructor() {
        this.liCount = Array(70).fill(4);
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 15, vars: 1, consts: [[1, "hero", "animated"], [1, "background"], [1, "circles"], [4, "ngFor", "ngForOf"], [1, "scroll-indicator", "animated", "bounce", "infinite", "delay-5s"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " I'm ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Charles Barnes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Fullstack Developer. Frontend Guru. Open Source Advocate.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 1)(8, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, HomeComponent_li_9_Template, 1, 0, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i")(12, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "app-experience")(14, "app-projects");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.liCount);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _experience_experience_component__WEBPACK_IMPORTED_MODULE_0__.ExperienceComponent, _projects_projects_component__WEBPACK_IMPORTED_MODULE_1__.ProjectsComponent], styles: ["[_nghost-%COMP%]   section.hero[_ngcontent-%COMP%] {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: left;\n  z-index: 5;\n  margin-left: 20%;\n  margin-right: 25%;\n  animation-name: bounce, fadeIn;\n}\n[_nghost-%COMP%]   section.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 4em;\n  margin-bottom: 30px;\n}\n[_nghost-%COMP%]   section.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #1694c5;\n}\n[_nghost-%COMP%]   .scroll-indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 10px;\n  right: 50%;\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   .scroll-indicator[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  border: solid #f4f4f4;\n  border-width: 0 5px 5px 0;\n  display: inline-block;\n  padding: 2vh;\n  transform: rotate(45deg);\n}\n[_nghost-%COMP%]   .scroll-indicator[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(2) {\n  transform: rotate(45deg) translateY(-2vh) translateX(-2vh);\n}\n[_nghost-%COMP%]   *[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n}\n[_nghost-%COMP%]   .context[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #fff;\n  font-size: 50px;\n}\n[_nghost-%COMP%]   .area[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  z-index: -1;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: absolute;\n  display: block;\n  list-style: none;\n  width: 5px;\n  height: 5px;\n  top: -50px;\n  border-radius: 25px;\n  z-index: -1;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1) {\n  left: 119vh;\n  animation: falling 18711ms linear infinite, twinkle 4s linear infinite;\n  animation-delay: -1000ms;\n  opacity: 0.2306966539;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgb(22, 148, 197);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgb(255, 255, 255);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2) {\n  left: 40vh;\n  animation: falling 16565ms linear infinite, twinkle 5s linear infinite;\n  animation-delay: -1385ms;\n  opacity: 0.889333056;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgb(22, 148, 197);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgb(255, 255, 255);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3) {\n  left: 12vh;\n  animation: falling 16622ms linear infinite, twinkle 6s linear infinite;\n  animation-delay: -1351ms;\n  opacity: 0.6014032141;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgb(22, 148, 197);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgb(255, 255, 255);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4) {\n  left: 28vh;\n  animation: falling 15937ms linear infinite, twinkle 4s linear infinite;\n  animation-delay: -779ms;\n  opacity: 0.8579753649;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgb(22, 148, 197);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgb(255, 255, 255);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(5) {\n  left: 69vh;\n  animation: falling 8395ms linear infinite, twinkle 7s linear infinite;\n  animation-delay: -793ms;\n  opacity: 0.4069976858;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgb(22, 148, 197);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgb(255, 255, 255);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(6) {\n  left: 84vh;\n  animation: falling 9345ms linear infinite, twinkle 3s linear infinite;\n  animation-delay: -1062ms;\n  opacity: 0.4705586226;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgb(22, 148, 197);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgb(255, 255, 255);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(7) {\n  left: 91vh;\n  animation: falling 11351ms linear infinite, twinkle 7s linear infinite;\n  animation-delay: -491ms;\n  opacity: 0.7001579058;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgb(22, 148, 197);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgb(255, 255, 255);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(8) {\n  left: 145vh;\n  animation: falling 7114ms linear infinite, twinkle 4s linear infinite;\n  animation-delay: -1099ms;\n  opacity: 0.1567686562;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgb(22, 148, 197);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgb(255, 255, 255);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(9) {\n  left: 97vh;\n  animation: falling 17742ms linear infinite, twinkle 3s linear infinite;\n  animation-delay: -1138ms;\n  opacity: 0.0349017145;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgb(22, 148, 197);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgb(255, 255, 255);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(10) {\n  left: 38vh;\n  animation: falling 2978ms linear infinite, twinkle 7s linear infinite;\n  animation-delay: -549ms;\n  opacity: 0.9728802938;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgb(22, 148, 197);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgb(255, 255, 255);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(11) {\n  left: 89vh;\n  animation: falling 16815ms linear infinite, twinkle 3s linear infinite;\n  animation-delay: -1066ms;\n  opacity: 0.1102689086;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgb(22, 148, 197);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgb(255, 255, 255);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(12) {\n  left: 64vh;\n  animation: falling 14694ms linear infinite, twinkle 7s linear infinite;\n  animation-delay: -1446ms;\n  opacity: 0.7476362678;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgb(22, 148, 197);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgb(255, 255, 255);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(13) {\n  left: 131vh;\n  animation: falling 6088ms linear infinite, twinkle 6s linear infinite;\n  animation-delay: -717ms;\n  opacity: 0.4551777454;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgb(22, 148, 197);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgb(255, 255, 255);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(14) {\n  left: 21vh;\n  animation: falling 16382ms linear infinite, twinkle 5s linear infinite;\n  animation-delay: -80ms;\n  opacity: 0.9376481228;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgb(22, 148, 197);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgb(255, 255, 255);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(15) {\n  left: 63vh;\n  animation: falling 6848ms linear infinite, twinkle 7s linear infinite;\n  animation-delay: -1493ms;\n  opacity: 0.1371228711;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgb(22, 148, 197);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgb(255, 255, 255);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(16) {\n  left: 125vh;\n  animation: falling 15937ms linear infinite, twinkle 5s linear infinite;\n  animation-delay: -1336ms;\n  opacity: 0.2847649134;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgb(22, 148, 197);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgb(255, 255, 255);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(17) {\n  left: 88vh;\n  animation: falling 18806ms linear infinite, twinkle 3s linear infinite;\n  animation-delay: -161ms;\n  opacity: 0.4535924508;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgb(22, 148, 197);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgb(255, 255, 255);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(18) {\n  left: 137vh;\n  animation: falling 17549ms linear infinite, twinkle 7s linear infinite;\n  animation-delay: -174ms;\n  opacity: 0.7528466178;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgb(22, 148, 197);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgb(255, 255, 255);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(19) {\n  left: 69vh;\n  animation: falling 15862ms linear infinite, twinkle 6s linear infinite;\n  animation-delay: -639ms;\n  opacity: 0.2184094096;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgb(22, 148, 197);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgb(255, 255, 255);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(20) {\n  left: 118vh;\n  animation: falling 18163ms linear infinite, twinkle 6s linear infinite;\n  animation-delay: -1224ms;\n  opacity: 0.1472828643;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgb(22, 148, 197);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgb(255, 255, 255);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(21) {\n  left: 24vh;\n  animation: falling 15302ms linear infinite, twinkle 6s linear infinite;\n  animation-delay: -923ms;\n  opacity: 0.235685604;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgb(22, 148, 197);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgb(255, 255, 255);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(22) {\n  left: 52vh;\n  animation: falling 11850ms linear infinite, twinkle 6s linear infinite;\n  animation-delay: -1161ms;\n  opacity: 0.3898024692;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgb(22, 148, 197);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgb(255, 255, 255);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(23) {\n  left: 148vh;\n  animation: falling 12405ms linear infinite, twinkle 6s linear infinite;\n  animation-delay: -901ms;\n  opacity: 0.447252565;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgb(22, 148, 197);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgb(255, 255, 255);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(24) {\n  left: 121vh;\n  animation: falling 9837ms linear infinite, twinkle 6s linear infinite;\n  animation-delay: -161ms;\n  opacity: 0.4401777594;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgb(22, 148, 197);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgb(255, 255, 255);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(25) {\n  left: 128vh;\n  animation: falling 10598ms linear infinite, twinkle 6s linear infinite;\n  animation-delay: -291ms;\n  opacity: 0.490854718;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgb(22, 148, 197);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgb(255, 255, 255);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(26) {\n  left: 48vh;\n  animation: falling 15294ms linear infinite, twinkle 7s linear infinite;\n  animation-delay: -333ms;\n  opacity: 0.827741885;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgb(22, 148, 197);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgb(255, 255, 255);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(27) {\n  left: 84vh;\n  animation: falling 16770ms linear infinite, twinkle 7s linear infinite;\n  animation-delay: -606ms;\n  opacity: 0.1344954585;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgb(22, 148, 197);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgb(255, 255, 255);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(28) {\n  left: 114vh;\n  animation: falling 16190ms linear infinite, twinkle 3s linear infinite;\n  animation-delay: -55ms;\n  opacity: 0.6950043074;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgb(22, 148, 197);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgb(255, 255, 255);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(29) {\n  left: 60vh;\n  animation: falling 12554ms linear infinite, twinkle 6s linear infinite;\n  animation-delay: -524ms;\n  opacity: 0.3154179529;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgb(22, 148, 197);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgb(255, 255, 255);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(30) {\n  left: 93vh;\n  animation: falling 16430ms linear infinite, twinkle 4s linear infinite;\n  animation-delay: -297ms;\n  opacity: 0.832910616;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgb(22, 148, 197);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgb(255, 255, 255);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(31) {\n  left: 7vh;\n  animation: falling 19771ms linear infinite, twinkle 3s linear infinite;\n  animation-delay: -333ms;\n  opacity: 0.951921572;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgb(22, 148, 197);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgb(255, 255, 255);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(32) {\n  left: 91vh;\n  animation: falling 19846ms linear infinite, twinkle 3s linear infinite;\n  animation-delay: -665ms;\n  opacity: 0.8161210498;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgb(22, 148, 197);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgb(255, 255, 255);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(33) {\n  left: 27vh;\n  animation: falling 11139ms linear infinite, twinkle 6s linear infinite;\n  animation-delay: -840ms;\n  opacity: 0.1950275937;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgb(22, 148, 197);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgb(255, 255, 255);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(34) {\n  left: 64vh;\n  animation: falling 8344ms linear infinite, twinkle 6s linear infinite;\n  animation-delay: -829ms;\n  opacity: 0.9213023945;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgb(22, 148, 197);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgb(255, 255, 255);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(35) {\n  left: 19vh;\n  animation: falling 15580ms linear infinite, twinkle 4s linear infinite;\n  animation-delay: -827ms;\n  opacity: 0.3494715318;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgb(22, 148, 197);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgb(255, 255, 255);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(36) {\n  left: 68vh;\n  animation: falling 9414ms linear infinite, twinkle 4s linear infinite;\n  animation-delay: -1442ms;\n  opacity: 0.166437341;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgb(22, 148, 197);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgb(255, 255, 255);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(37) {\n  left: 46vh;\n  animation: falling 3605ms linear infinite, twinkle 3s linear infinite;\n  animation-delay: -749ms;\n  opacity: 0.5071121376;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgb(22, 148, 197);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgb(255, 255, 255);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(38) {\n  left: 5vh;\n  animation: falling 9246ms linear infinite, twinkle 3s linear infinite;\n  animation-delay: -448ms;\n  opacity: 0.5221378544;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgb(22, 148, 197);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgb(255, 255, 255);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(39) {\n  left: 106vh;\n  animation: falling 13673ms linear infinite, twinkle 7s linear infinite;\n  animation-delay: -1350ms;\n  opacity: 0.7635249827;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgb(22, 148, 197);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgb(255, 255, 255);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(40) {\n  left: 102vh;\n  animation: falling 19482ms linear infinite, twinkle 7s linear infinite;\n  animation-delay: -1423ms;\n  opacity: 0.4128853576;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgb(22, 148, 197);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgb(255, 255, 255);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(41) {\n  left: 46vh;\n  animation: falling 3943ms linear infinite, twinkle 3s linear infinite;\n  animation-delay: -508ms;\n  opacity: 0.3242006521;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgb(22, 148, 197);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgb(255, 255, 255);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(42) {\n  left: 19vh;\n  animation: falling 12797ms linear infinite, twinkle 3s linear infinite;\n  animation-delay: -174ms;\n  opacity: 0.1233370394;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgb(22, 148, 197);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgb(255, 255, 255);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(43) {\n  left: 115vh;\n  animation: falling 16045ms linear infinite, twinkle 3s linear infinite;\n  animation-delay: -216ms;\n  opacity: 0.8024524435;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgb(22, 148, 197);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgb(255, 255, 255);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(44) {\n  left: 60vh;\n  animation: falling 4131ms linear infinite, twinkle 4s linear infinite;\n  animation-delay: -783ms;\n  opacity: 0.2621378389;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgb(22, 148, 197);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgb(255, 255, 255);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(45) {\n  left: 64vh;\n  animation: falling 19936ms linear infinite, twinkle 3s linear infinite;\n  animation-delay: -1407ms;\n  opacity: 0.7072864135;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgb(22, 148, 197);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgb(255, 255, 255);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(46) {\n  left: 85vh;\n  animation: falling 10948ms linear infinite, twinkle 3s linear infinite;\n  animation-delay: -1300ms;\n  opacity: 0.7545027785;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgb(22, 148, 197);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgb(255, 255, 255);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(47) {\n  left: 90vh;\n  animation: falling 4040ms linear infinite, twinkle 7s linear infinite;\n  animation-delay: -185ms;\n  opacity: 0.7895645015;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgb(22, 148, 197);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgb(255, 255, 255);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(48) {\n  left: 37vh;\n  animation: falling 18310ms linear infinite, twinkle 6s linear infinite;\n  animation-delay: -742ms;\n  opacity: 0.2372056087;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgb(22, 148, 197);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgb(255, 255, 255);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(49) {\n  left: 81vh;\n  animation: falling 3670ms linear infinite, twinkle 7s linear infinite;\n  animation-delay: -1435ms;\n  opacity: 0.5338294126;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgb(22, 148, 197);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgb(255, 255, 255);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(50) {\n  left: 109vh;\n  animation: falling 4445ms linear infinite, twinkle 7s linear infinite;\n  animation-delay: -137ms;\n  opacity: 0.1702971322;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgb(22, 148, 197);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgb(255, 255, 255);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(51) {\n  left: 19vh;\n  animation: falling 9004ms linear infinite, twinkle 4s linear infinite;\n  animation-delay: -202ms;\n  opacity: 0.2908319624;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgb(22, 148, 197);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgb(255, 255, 255);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(52) {\n  left: 52vh;\n  animation: falling 4625ms linear infinite, twinkle 7s linear infinite;\n  animation-delay: -550ms;\n  opacity: 0.7356237415;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgb(22, 148, 197);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgb(255, 255, 255);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(53) {\n  left: 129vh;\n  animation: falling 19078ms linear infinite, twinkle 4s linear infinite;\n  animation-delay: -1254ms;\n  opacity: 0.737105982;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgb(22, 148, 197);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgb(255, 255, 255);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(54) {\n  left: 1vh;\n  animation: falling 13121ms linear infinite, twinkle 3s linear infinite;\n  animation-delay: -342ms;\n  opacity: 0.729493798;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgb(22, 148, 197);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgb(255, 255, 255);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(55) {\n  left: 67vh;\n  animation: falling 13997ms linear infinite, twinkle 3s linear infinite;\n  animation-delay: -61ms;\n  opacity: 0.838389725;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgb(22, 148, 197);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgb(255, 255, 255);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(56) {\n  left: 86vh;\n  animation: falling 11098ms linear infinite, twinkle 4s linear infinite;\n  animation-delay: -576ms;\n  opacity: 0.7600101808;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgb(22, 148, 197);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgb(255, 255, 255);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(57) {\n  left: 123vh;\n  animation: falling 11300ms linear infinite, twinkle 4s linear infinite;\n  animation-delay: -559ms;\n  opacity: 0.4449218603;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgb(22, 148, 197);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgb(255, 255, 255);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(58) {\n  left: 28vh;\n  animation: falling 15556ms linear infinite, twinkle 6s linear infinite;\n  animation-delay: -739ms;\n  opacity: 0.4410845909;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgb(22, 148, 197);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgb(255, 255, 255);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(59) {\n  left: 104vh;\n  animation: falling 6216ms linear infinite, twinkle 6s linear infinite;\n  animation-delay: -717ms;\n  opacity: 0.8014212229;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgb(22, 148, 197);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgb(255, 255, 255);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(60) {\n  left: 78vh;\n  animation: falling 13774ms linear infinite, twinkle 3s linear infinite;\n  animation-delay: -845ms;\n  opacity: 0.0189879671;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgb(22, 148, 197);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgb(255, 255, 255);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(61) {\n  left: 122vh;\n  animation: falling 17061ms linear infinite, twinkle 4s linear infinite;\n  animation-delay: -488ms;\n  opacity: 0.8714930651;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgb(22, 148, 197);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgb(255, 255, 255);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(62) {\n  left: 100vh;\n  animation: falling 7389ms linear infinite, twinkle 6s linear infinite;\n  animation-delay: -929ms;\n  opacity: 0.8096325168;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgb(22, 148, 197);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgb(255, 255, 255);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(63) {\n  left: 141vh;\n  animation: falling 5416ms linear infinite, twinkle 6s linear infinite;\n  animation-delay: -695ms;\n  opacity: 0.2343899657;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgb(22, 148, 197);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgb(255, 255, 255);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(64) {\n  left: 16vh;\n  animation: falling 11825ms linear infinite, twinkle 6s linear infinite;\n  animation-delay: -259ms;\n  opacity: 0.5918712623;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgb(22, 148, 197);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgb(255, 255, 255);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(65) {\n  left: 64vh;\n  animation: falling 10543ms linear infinite, twinkle 6s linear infinite;\n  animation-delay: -71ms;\n  opacity: 0.1100297969;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgb(22, 148, 197);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgb(255, 255, 255);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(66) {\n  left: 42vh;\n  animation: falling 10427ms linear infinite, twinkle 3s linear infinite;\n  animation-delay: -1024ms;\n  opacity: 0.2198415691;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgb(22, 148, 197);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgb(255, 255, 255);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(67) {\n  left: 45vh;\n  animation: falling 5386ms linear infinite, twinkle 5s linear infinite;\n  animation-delay: -373ms;\n  opacity: 0.1412261253;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgb(22, 148, 197);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgb(255, 255, 255);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(68) {\n  left: 120vh;\n  animation: falling 15383ms linear infinite, twinkle 5s linear infinite;\n  animation-delay: -1404ms;\n  opacity: 0.2551458083;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgb(22, 148, 197);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgb(255, 255, 255);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(69) {\n  left: 1vh;\n  animation: falling 16385ms linear infinite, twinkle 6s linear infinite;\n  animation-delay: -1129ms;\n  opacity: 0.3241932586;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgb(22, 148, 197);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgb(255, 255, 255);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(70) {\n  left: 149vh;\n  animation: falling 16929ms linear infinite, twinkle 4s linear infinite;\n  animation-delay: -622ms;\n  opacity: 0.4925331178;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgb(22, 148, 197);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgb(255, 255, 255);\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1) {\n  left: -9vh;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2) {\n  left: -44vh;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3) {\n  left: -37vh;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4) {\n  left: -8vh;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(5) {\n  left: -26vh;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(6) {\n  left: -32vh;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(7) {\n  left: -42vh;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(8) {\n  left: -40vh;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(9) {\n  left: -10vh;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(10) {\n  left: -2vh;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(11) {\n  left: -46vh;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(12) {\n  left: -8vh;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(13) {\n  left: -33vh;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(14) {\n  left: -14vh;\n}\n[_nghost-%COMP%]   .circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(15) {\n  left: -45vh;\n}\n@keyframes falling {\n  0% {\n    transform: translateY(0) rotate(0deg);\n  }\n  100% {\n    transform: translateY(100vh) translateX(50vw) rotate(720deg);\n    opacity: 0;\n  }\n}\n@keyframes twinkle {\n  0% {\n    opacity: auto;\n  }\n  45% {\n    opacity: 1;\n  }\n  55% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7QUFBUjtBQUNRO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0FBQ1o7QUFBWTtFQUNJLGNBQUE7QUFFaEI7QUFFSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFBUjtBQUNRO0VBQ0kscUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0FBQ1o7QUFBWTtFQUNJLDBEQUFBO0FBRWhCO0FBS0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUhKO0FBTUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBSko7QUFRQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FBTko7QUFXQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQVRKO0FBV0k7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQVRSO0FBWVk7RUFDSSxXQUFBO0VBQ0Esc0VBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0FBVmhCO0FBWVk7RUFDSSw2QkFBQTtBQVZoQjtBQVlZO0VBQ0ksOEJBQUE7QUFWaEI7QUFBWTtFQUNJLFVBQUE7RUFDQSxzRUFBQTtFQUNBLHdCQUFBO0VBQ0Esb0JBQUE7QUFFaEI7QUFBWTtFQUNJLDZCQUFBO0FBRWhCO0FBQVk7RUFDSSw4QkFBQTtBQUVoQjtBQVpZO0VBQ0ksVUFBQTtFQUNBLHNFQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtBQWNo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WTtFQUNJLFdBQUE7QUFtekJoQjtBQXB6Qlk7RUFDSSxXQUFBO0FBc3pCaEI7QUF2ekJZO0VBQ0ksVUFBQTtBQXl6QmhCO0FBMXpCWTtFQUNJLFdBQUE7QUE0ekJoQjtBQTd6Qlk7RUFDSSxXQUFBO0FBK3pCaEI7QUFoMEJZO0VBQ0ksV0FBQTtBQWswQmhCO0FBbjBCWTtFQUNJLFdBQUE7QUFxMEJoQjtBQXQwQlk7RUFDSSxXQUFBO0FBdzBCaEI7QUF6MEJZO0VBQ0ksVUFBQTtBQTIwQmhCO0FBNTBCWTtFQUNJLFdBQUE7QUE4MEJoQjtBQS8wQlk7RUFDSSxVQUFBO0FBaTFCaEI7QUFsMUJZO0VBQ0ksV0FBQTtBQW8xQmhCO0FBcjFCWTtFQUNJLFdBQUE7QUF1MUJoQjtBQXgxQlk7RUFDSSxXQUFBO0FBMDFCaEI7QUFqMUJBO0VBRUk7SUFDSSxxQ0FBQTtFQWsxQk47RUEvMEJFO0lBQ0ksNERBQUE7SUFDQSxVQUFBO0VBaTFCTjtBQUNGO0FBNzBCQTtFQUVJO0lBQ0ksYUFBQTtFQTgwQk47RUEzMEJFO0lBQ0ksVUFBQTtFQTYwQk47RUExMEJFO0lBQ0ksWUFBQTtFQTQwQk47RUExMEJFO0lBQ0ksYUFBQTtFQTQwQk47QUFDRiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgc2VjdGlvbi5oZXJvIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIHotaW5kZXg6IDU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDI1JTtcclxuICAgICAgICBhbmltYXRpb24tbmFtZTogIGJvdW5jZSwgZmFkZUluO1xyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0ZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMxNjk0YzU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc2Nyb2xsLWluZGljYXRvciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMTBweDtcclxuICAgICAgICByaWdodDogNTAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBpIHtcclxuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAjZjRmNGY0O1xyXG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IDAgNXB4IDVweCAwO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDJ2aDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgICAgICAmOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlWSgtMnZoKSB0cmFuc2xhdGVYKC0ydmgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICB9XHJcblxyXG5cclxuKntcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4uY29udGV4dCBoMXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG59XHJcblxyXG5cclxuLmFyZWF7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDoxMDB2aDtcclxuICAgIFxyXG4gICBcclxufVxyXG5cclxuLmNpcmNsZXN7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgei1pbmRleDogLTE7XHJcblxyXG4gICAgbGkge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIHdpZHRoOiA1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1cHg7XHJcbiAgICAgICAgdG9wOiAtNTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgICAgIHotaW5kZXg6IC0xO1xyXG5cclxuICAgICAgICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIDcwIHtcclxuICAgICAgICAgICAgJjpudGgtY2hpbGQoI3skaX0pIHtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IHJhbmRvbSgxNTApK3ZoO1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBmYWxsaW5nIChyYW5kb20oMTgwMDApICsgMjAwMCkrbXMgbGluZWFyIGluZmluaXRlLCB0d2lua2xlIChyYW5kb20oNSkgKyAyKStzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLStyYW5kb20oMTUwMCkrbXM7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiByYW5kb20oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOm50aC1jaGlsZChvZGQpIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjIsIDE0OCwgMTk3KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIDE1IHtcclxuICAgICAgICAgICAgJjpudGgtY2hpbGQoI3skaX0pIHtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IC0rcmFuZG9tKDUwKSt2aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5Aa2V5ZnJhbWVzIGZhbGxpbmcge1xyXG5cclxuICAgIDAle1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGUoMGRlZyk7XHJcbiAgICB9XHJcblxyXG4gICAgMTAwJXtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwdmgpIHRyYW5zbGF0ZVgoNTB2dykgcm90YXRlKDcyMGRlZyk7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgdHdpbmtsZSB7XHJcblxyXG4gICAgMCV7XHJcbiAgICAgICAgb3BhY2l0eTogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICA0NSV7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuXHJcbiAgICA1NSV7XHJcbiAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgfVxyXG4gICAgMTAwJXtcclxuICAgICAgICBvcGFjaXR5OiBhdXRvO1xyXG4gICAgfVxyXG5cclxufVxyXG59Il19 */"] });


/***/ }),

/***/ 2635:
/*!*****************************************************!*\
  !*** ./src/app/home/projects/projects.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsComponent": () => (/* binding */ ProjectsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-smart-modal */ 7831);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _loading_indicator_loading_indicator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../loading-indicator/loading-indicator.component */ 732);
/* harmony import */ var _startAnimation_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../startAnimation.directive */ 5213);






function ProjectsComponent_loading_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "loading");
} }
function ProjectsComponent_div_1_div_3_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 17);
} if (rf & 2) {
    const project_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", "assets/images/" + project_r4.image, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", project_r4.name + " screenshot");
} }
const _c0 = function (a0) { return { "animation-delay": a0 }; };
function ProjectsComponent_div_1_div_3_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tool_r10 = ctx.$implicit;
    const in_r11 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c0, in_r11 * 125 + "ms"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", tool_r10, " ");
} }
function ProjectsComponent_div_1_div_3_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", project_r4.users, " ");
} }
function ProjectsComponent_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProjectsComponent_div_1_div_3_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const project_r4 = restoredCtx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r13.openModal(project_r4)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ProjectsComponent_div_1_div_3_img_1_Template, 1, 2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 8)(3, "div", 9)(4, "div", 10)(5, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, ProjectsComponent_div_1_div_3_span_10_Template, 2, 4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 15)(12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, ProjectsComponent_div_1_div_3_span_14_Template, 2, 1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const project_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](7, _c0, i_r5 * 125 + "ms"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", project_r4.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](project_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](project_r4.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", project_r4.tools);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](project_r4.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", project_r4.users);
} }
function ProjectsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Projects");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ProjectsComponent_div_1_div_3_Template, 15, 9, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.projects);
} }
class ProjectsComponent {
    constructor(http, ngxSmartModalService) {
        this.http = http;
        this.ngxSmartModalService = ngxSmartModalService;
        this.loading = true;
    }
    ngOnInit() {
        this.getProjects();
    }
    /**
     * openModal
     */
    openModal(project) {
        this.ngxSmartModalService.resetModalData('imageModal');
        this.ngxSmartModalService.setModalData(project.image, 'imageModal');
        this.ngxSmartModalService.create('imageModal', `blah`).open();
    }
    getProjects() {
        this.http.get('assets/projects.json').subscribe((projects) => {
            this.projects = projects;
            this.loading = false;
        });
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_smart_modal__WEBPACK_IMPORTED_MODULE_0__.NgxSmartModalService)); };
ProjectsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], decls: 5, vars: 4, consts: [[4, "ngIf"], [3, "identifier"], ["imageModal", ""], [1, "modal-image", 3, "src"], ["animations", "animated fadeIn"], ["animations", "animated fadeIn", "class", "project ", 3, "ngStyle", "click", 4, "ngFor", "ngForOf"], ["animations", "animated fadeIn", 1, "project", 3, "ngStyle", "click"], [3, "src", "alt", 4, "ngIf"], [1, "information", "animated", "fadeIn"], [1, "text-container"], [1, "tech"], [1, "animated", "fadeInDown"], [1, "year"], [1, "tools"], ["class", "tool animated fadeInDown", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "description", "animated", "fadeInUp"], ["class", "users animated heartBeat delay-2s", 4, "ngIf"], [3, "src", "alt"], [1, "tool", "animated", "fadeInDown", 3, "ngStyle"], [1, "users", "animated", "heartBeat", "delay-2s"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ProjectsComponent_loading_0_Template, 1, 0, "loading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ProjectsComponent_div_1_Template, 4, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ngx-smart-modal", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("identifier", "imageModal");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", "assets/images/" + _r2.getData(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, ngx_smart_modal__WEBPACK_IMPORTED_MODULE_0__.NgxSmartModalComponent, _loading_indicator_loading_indicator_component__WEBPACK_IMPORTED_MODULE_1__.LoadingIndicatorComponent, _startAnimation_directive__WEBPACK_IMPORTED_MODULE_2__.StartAnimationDirective], styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  background-color: #F4F4F4;\n  margin-top: 100px;\n}\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  width: 100%;\n  color: #1694c5;\n  text-align: center;\n}\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%]   div.project[_ngcontent-%COMP%] {\n  flex-basis: 25%;\n  flex-grow: 1;\n  margin: 2vw;\n  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.25);\n  border-radius: 0.5vw;\n  position: relative;\n  text-align: center;\n  background-color: #181818;\n  overflow: hidden;\n}\n@media only screen and (max-width: 1000px) {\n  [_nghost-%COMP%]    > div[_ngcontent-%COMP%]   div.project[_ngcontent-%COMP%] {\n    flex-basis: 100%;\n  }\n}\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%]   div.project[_ngcontent-%COMP%]:hover   div.information[_ngcontent-%COMP%] {\n  display: flex;\n  cursor: pointer;\n}\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%]   div.project[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  font-size: 1.5em;\n}\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%]   div.project[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.1em;\n}\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%]   div.project[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%]   div.project[_ngcontent-%COMP%]   span.year[_ngcontent-%COMP%] {\n  display: none;\n}\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%]   div.project[_ngcontent-%COMP%]   span.year[_ngcontent-%COMP%]:after, [_nghost-%COMP%]    > div[_ngcontent-%COMP%]   div.project[_ngcontent-%COMP%]   span.year[_ngcontent-%COMP%]:before {\n  top: 51%;\n  overflow: hidden;\n  width: 50%;\n  height: 1px;\n  content: \"\u00A0\";\n  background-color: #fff;\n  align-self: center;\n  margin: 0 30px;\n}\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%]   div.project[_ngcontent-%COMP%]   span.year[_ngcontent-%COMP%]:after {\n  text-align: right;\n}\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%]   div.project[_ngcontent-%COMP%]   div.tools[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%]   div.project[_ngcontent-%COMP%]   div.tools[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 0.3vw;\n  margin: 0.6vw;\n  font-size: 0.8em;\n  align-self: center;\n}\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%]   div.project[_ngcontent-%COMP%]   div.tools[_ngcontent-%COMP%]   span.tool[_ngcontent-%COMP%] {\n  background-color: #1694c5;\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4588235294);\n  border-radius: 0.2em;\n  color: #FFF;\n}\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%]   div.project[_ngcontent-%COMP%]   span.users[_ngcontent-%COMP%] {\n  color: #1694c5;\n  font-weight: 700;\n}\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%]   div.project[_ngcontent-%COMP%]   div.information[_ngcontent-%COMP%] {\n  top: 0;\n  position: absolute;\n  display: none;\n  flex-direction: column;\n  width: 100%;\n  background-color: rgba(36, 56, 64, 0.7607843137);\n  height: 100%;\n}\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%]   div.project[_ngcontent-%COMP%]   div.information[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  place-content: center;\n  padding-bottom: 10%;\n  margin: 0 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUNaO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FBQ1I7QUFBUTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFFWjtBQUFRO0VBQ0ksZUFBQTtFQUlBLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUNBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBRFo7QUFUWTtFQUZKO0lBR1EsZ0JBQUE7RUFZZDtBQUNGO0FBRmdCO0VBQ0ksYUFBQTtFQUNBLGVBQUE7QUFJcEI7QUFBWTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUFFaEI7QUFBWTtFQUNJLGdCQUFBO0FBRWhCO0FBQVk7RUFDSSxXQUFBO0FBRWhCO0FBQVk7RUFDSSxhQUFBO0FBRWhCO0FBRGdCO0VBRUksUUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFFcEI7QUFBZ0I7RUFDSSxpQkFBQTtBQUVwQjtBQUNZO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FBQ2hCO0FBQWdCO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBRXBCO0FBRG9CO0VBQ0kseUJBQUE7RUFDQSxtREFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtBQUd4QjtBQUNZO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FBQ2hCO0FBRVk7RUFDSSxNQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0RBQUE7RUFDQSxZQUFBO0FBQWhCO0FBQ2dCO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBQ3BCIiwiZmlsZSI6InByb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgPmRpdiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjRGNDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBjb2xvcjogIzE2OTRjNTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkaXYucHJvamVjdCB7XHJcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IDI1JTtcclxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAgICAgICAgICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgICAgICBtYXJnaW46IDJ2dztcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDhweCAwIHJnYmEoMCwwLDAsLjI1KTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC41dnc7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxODE4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgZGl2LmluZm9ybWF0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNwYW4ueWVhciB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgJjphZnRlcixcclxuICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDUxJTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ1xcYTAnO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAzMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJjphZnRlciB7ICBcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDsgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGl2LnRvb2xzIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAuM3Z3O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogLjZ2dztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IC44ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICYudG9vbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxNjk0YzU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICMwMDAwMDA3NTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzcGFuLnVzZXJzIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMTY5NGM1O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZGl2LmluZm9ybWF0aW9uIHtcclxuICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQzODQwYzI7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAudGV4dC1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2UtY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDEwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ 732:
/*!******************************************************************!*\
  !*** ./src/app/loading-indicator/loading-indicator.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingIndicatorComponent": () => (/* binding */ LoadingIndicatorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class LoadingIndicatorComponent {
}
LoadingIndicatorComponent.ɵfac = function LoadingIndicatorComponent_Factory(t) { return new (t || LoadingIndicatorComponent)(); };
LoadingIndicatorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingIndicatorComponent, selectors: [["loading"]], decls: 2, vars: 0, consts: [[1, "pixel-spinner"], [1, "pixel-spinner-inner"]], template: function LoadingIndicatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2FkaW5nLWluZGljYXRvci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 5574:
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortfolioComponent": () => (/* binding */ PortfolioComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class PortfolioComponent {
    constructor() { }
    ngOnInit() {
    }
}
PortfolioComponent.ɵfac = function PortfolioComponent_Factory(t) { return new (t || PortfolioComponent)(); };
PortfolioComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PortfolioComponent, selectors: [["app-portfolio"]], decls: 2, vars: 0, template: function PortfolioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " portfolio works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3J0Zm9saW8uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 5213:
/*!*********************************************!*\
  !*** ./src/app/startAnimation.directive.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartAnimationDirective": () => (/* binding */ StartAnimationDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6312);



class StartAnimationDirective {
  constructor(element) {
    this.element = element;
    this.appear = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }

  saveDimensions() {
    this.elementRect = this.element.nativeElement.getBoundingClientRect();
    this.windowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  }

  saveScrollPos() {
    this.scrollPos = window.scrollY;
  }

  getOffsetTop(element) {
    let offsetTop = element.offsetTop || 0;

    if (element.offsetParent) {
      offsetTop += this.getOffsetTop(element.offsetParent);
    }

    return offsetTop;
  }

  checkVisibility() {
    if (this.isVisible()) {
      // double check dimensions (due to async loaded contents, e.g. images)
      this.saveDimensions();

      if (this.isVisible()) {
        this.unsubscribe();
        this.appear.emit();
        this.element.nativeElement.classList.add(...this.styles.split(' '));
      }
    }
  }

  isVisible() {
    return !(this.elementRect.bottom < 0 || this.elementRect.top - this.windowHeight >= 0);
  }

  subscribe() {
    this.styles = this.element.nativeElement.getAttribute('animations');
    this.subscriptionScroll = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(window, 'scroll').subscribe(() => {
      this.saveScrollPos();
      this.saveDimensions();
      this.checkVisibility();
    });
  }

  unsubscribe() {
    if (this.subscriptionScroll) {
      this.subscriptionScroll.unsubscribe();
    }
  }

  ngAfterViewInit() {
    this.subscribe();
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

}

StartAnimationDirective.ɵfac = function StartAnimationDirective_Factory(t) {
  return new (t || StartAnimationDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};

StartAnimationDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: StartAnimationDirective,
  selectors: [["", "animations", ""]],
  outputs: {
    appear: "appear"
  }
});

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map