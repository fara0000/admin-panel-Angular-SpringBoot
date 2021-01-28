(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\BOSS\Desktop\WEB\Lab4_WEB\front\src\main.ts */"zUnb");


/***/ }),

/***/ "0kjc":
/*!********************************!*\
  !*** ./src/app/guard/guard.ts ***!
  \********************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _pages_login_page_login_page_service_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/login-page/login-page-service/login.service */ "cYQP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AuthGuard {
    constructor(_loginService, _router) {
        this._loginService = _loginService;
        this._router = _router;
    }
    canActivate() {
        if (this._loginService.isLoggedIn()) {
            return true;
        }
        else {
            this._router.navigate(['/login']);
            return false;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_pages_login_page_login_page_service_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _pages_login_page_login_page_service_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "6V8c":
/*!**********************************************************!*\
  !*** ./src/app/pages/login-page/login-page.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _model_logic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/logic */ "Ivn6");
/* harmony import */ var _services_token_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/token-service.service */ "aRc7");
/* harmony import */ var _login_page_service_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-page-service/login.service */ "cYQP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _main_page_main_page_service_get_points_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../main-page/main-page-service/get-points.service */ "ifHD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ "jIHw");











const _c0 = function () { return { fontSize: "30px" }; };
const _c1 = function () { return { fontSize: "larger" }; };
const _c2 = function () { return { height: "70px" }; };
const _c3 = function () { return { fontSize: "30px", color: "red", marginTop: "5px" }; };
class LoginPageComponent {
    constructor(_tokenService, _loginService, router, _getPointServer) {
        this._tokenService = _tokenService;
        this._loginService = _loginService;
        this.router = router;
        this._getPointServer = _getPointServer;
    }
    ngOnInit() {
    }
    auth(username, password) {
        this.authorization({ username, password });
    }
    authorization(obj) {
        this._loginService.authUser(obj).subscribe((res) => {
            this._tokenService.saveToken(res.token);
            this._tokenService.saveUser(res.id);
            Object(_model_logic__WEBPACK_IMPORTED_MODULE_1__["saveUserName"])(this.username);
            this.cleanInputValue();
            this.getMainPage();
        }, (err) => {
            this.error = err._body;
            this.cleanInputValue();
        });
    }
    getMainPage() {
        setTimeout(() => this.router.navigate(["/lab4/main"]), 1000);
    }
    cleanInputValue() {
        this.username = '';
        this.password = '';
    }
}
LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) { return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_token_service_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_page_service_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_main_page_main_page_service_get_points_service__WEBPACK_IMPORTED_MODULE_5__["GetPointsService"])); };
LoginPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginPageComponent, selectors: [["app-login-page"]], decls: 27, vars: 13, consts: [[1, "main_login_wrapper"], [1, "login-page__wrapper"], [1, "login-page__header-wrapper"], [1, "login-page__header-wrapper__title-wrapper"], [1, "pi", "pi-lock", 3, "ngStyle"], [1, "login-page__header-wrapper__title"], [1, "login-page__login-wrapper"], [1, "login-page__login-wrapper_input-wrapper"], [1, "p-float-label"], ["id", "float-input-username", "type", "text", "pInputText", "", "minlength", "4", 1, "login-page__input", 3, "ngModel", "ngModelChange"], [3, "ngStyle"], [1, "login-page__login-wrapper_input-wrapper", 3, "ngStyle"], ["id", "float-input-password", "type", "password", "pInputText", "", "minlength", "4", 1, "login-page__input", 3, "ngModel", "ngModelChange"], [1, "login-page__button-wrapper"], [1, "login-page__link-wrapper"], ["routerLink", "/lab4/registration", 1, "login-page__button-link"], ["pButton", "", "type", "button", "label", "Sign in", 1, "login-page__button", 3, "click"]], template: function LoginPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginPageComponent_Template_input_ngModelChange_10_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginPageComponent_Template_input_ngModelChange_16_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " not registered? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginPageComponent_Template_button_click_24_listener() { return ctx.auth(ctx.username, ctx.password); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.error);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], primeng_button__WEBPACK_IMPORTED_MODULE_9__["ButtonDirective"]], styles: [".main_login_wrapper[_ngcontent-%COMP%] {\n  width: 600px;\n  height: 600px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.login-page__wrapper[_ngcontent-%COMP%] {\n  width: 410px;\n  height: 410px;\n  display: flex;\n  padding: 24px 32px 32px 41px;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  border-radius: 15px;\n  box-shadow: 0 1px 15px rgba(0, 0, 0, 0.15);\n}\n.login-page__wrapper[_ngcontent-%COMP%]   .login-page__header-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 35%;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n}\n.login-page__wrapper[_ngcontent-%COMP%]   .login-page__header-wrapper[_ngcontent-%COMP%]   .login-page__header-wrapper__title-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 74%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  font-family: revert;\n}\n.login-page__wrapper[_ngcontent-%COMP%]   .login-page__header-wrapper[_ngcontent-%COMP%]   .login-page__header-wrapper__title-wrapper[_ngcontent-%COMP%]   .login-page__header-wrapper__title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-top: 14px;\n}\n.login-page__wrapper[_ngcontent-%COMP%]   .login-page__login-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 80px;\n}\n.login-page__wrapper[_ngcontent-%COMP%]   .login-page__login-wrapper[_ngcontent-%COMP%]   .login-page__login-wrapper_input-wrapper[_ngcontent-%COMP%] {\n  width: 320px;\n}\n.login-page__wrapper[_ngcontent-%COMP%]   .login-page__login-wrapper[_ngcontent-%COMP%]   .login-page__login-wrapper_input-wrapper[_ngcontent-%COMP%]   .login-page__input[_ngcontent-%COMP%] {\n  width: 320px;\n  height: 45px;\n}\n.login-page__wrapper[_ngcontent-%COMP%]   .login-page__button-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 21%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n}\n.login-page__wrapper[_ngcontent-%COMP%]   .login-page__button-wrapper[_ngcontent-%COMP%]   .login-page__link-wrapper[_ngcontent-%COMP%] {\n  height: 46px;\n  margin-bottom: 16px;\n}\n.login-page__wrapper[_ngcontent-%COMP%]   .login-page__button-wrapper[_ngcontent-%COMP%]   .login-page__link-wrapper[_ngcontent-%COMP%]   .login-page__button-link[_ngcontent-%COMP%] {\n  color: #0073b1;\n  cursor: pointer;\n  height: 35px;\n  width: 36%;\n  font-size: larger;\n}\n.login-page__wrapper[_ngcontent-%COMP%]   .login-page__button-wrapper[_ngcontent-%COMP%]   .login-page__link-wrapper[_ngcontent-%COMP%]   .login-page__button-link[_ngcontent-%COMP%]:hover {\n  color: #006097;\n  background: #d0e8ff;\n}\n.login-page__wrapper[_ngcontent-%COMP%]   .login-page__button-wrapper[_ngcontent-%COMP%]   .login-page__link-wrapper[_ngcontent-%COMP%]   .login-page__button-link[_ngcontent-%COMP%]:visited {\n  color: #665ed0;\n  border: none;\n}\n.login-page__wrapper[_ngcontent-%COMP%]   .login-page__button-wrapper[_ngcontent-%COMP%]   .login-page__button[_ngcontent-%COMP%] {\n  width: 320px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLXBhZ2UuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFWRjtBQWFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0FBWEo7QUFFQTtFQVlRLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQVhSO0FBTkE7RUFzQmMsV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFiZDtBQWZBO0VBK0JrQixnQkFBQTtFQUNBLGdCQUFBO0FBYmxCO0FBbkJBO0VBcUNRLFdBQUE7RUFDQSxZQUFBO0FBZlI7QUF2QkE7RUF5Q1ksWUFBQTtBQWZaO0FBMUJBO0VBNENnQixZQUFBO0VBQ0EsWUFBQTtBQWZoQjtBQTlCQTtFQWtEUSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0FBakJSO0FBckNBO0VBeURZLFlBQUE7RUFDQSxtQkFBQTtBQWpCWjtBQXpDQTtFQTZEZ0IsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FBakJoQjtBQW1CZ0I7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUFqQmxCO0FBb0JnQjtFQUNJLGNBQUE7RUFDQSxZQUFBO0FBbEJwQjtBQXhEQTtFQWdGVyxZQUFBO0FBckJYIiwiZmlsZSI6ImxvZ2luLXBhZ2UuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW5wdXRXaWR0aDogMzIwcHg7XG5AaW5wdXRIZWlnaHQ6IDQ1cHg7XG5AYnV0dG9uV2lkdGg6IDMyMHB4O1xuQGlucHV0V3JhcHBlcldpZHRoOiAxMDAlO1xuQGlucHV0V3JhcHBlckhlaWdodDogNzdweDtcbkBtYWluV3JhcHBlcldpZHRoOiA0MTBweDtcbkBtYWluV3JhcHBlckhlaWdodDogNDEwcHg7XG5AbG9naW5QYWdlSGVhZGVyV2lkdGg6IDEwMCU7XG5AbG9naW5QYWdlSGVhZGVySGVpZ2h0OiAzNSU7XG5AbWFpbldyYXBwZXJCb3JkZXJSYWRpdXM6IDE1cHg7XG5cbi5tYWluX2xvZ2luX3dyYXBwZXIge1xuICB3aWR0aDogNjAwcHg7XG4gIGhlaWdodDogNjAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubG9naW4tcGFnZV9fd3JhcHBlciB7XG4gICAgd2lkdGg6IEBtYWluV3JhcHBlcldpZHRoO1xuICAgIGhlaWdodDogQG1haW5XcmFwcGVySGVpZ2h0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMjRweCAzMnB4IDMycHggNDFweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogQG1haW5XcmFwcGVyQm9yZGVyUmFkaXVzO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDE1cHggcmdiYSgwLDAsMCwwLjE1KTtcblxuICAgIC5sb2dpbi1wYWdlX19oZWFkZXItd3JhcHBlciB7XG4gICAgICAgIHdpZHRoOiBAbG9naW5QYWdlSGVhZGVyV2lkdGg7XG4gICAgICAgIGhlaWdodDogQGxvZ2luUGFnZUhlYWRlckhlaWdodDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgLmxvZ2luLXBhZ2VfX2hlYWRlci13cmFwcGVyX19pY29uLXdyYXBwZXIge1xuICAgICAgICB9XG4gICAgICAgIC5sb2dpbi1wYWdlX19oZWFkZXItd3JhcHBlcl9fdGl0bGUtd3JhcHBlciB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDc0JTtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiByZXZlcnQ7XG5cbiAgICAgICAgICAgICAgLmxvZ2luLXBhZ2VfX2hlYWRlci13cmFwcGVyX190aXRsZSB7XG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTRweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5sb2dpbi1wYWdlX19sb2dpbi13cmFwcGVyIHtcbiAgICAgICAgd2lkdGg6IEBpbnB1dFdyYXBwZXJXaWR0aDtcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xuXG4gICAgICAgIC5sb2dpbi1wYWdlX19sb2dpbi13cmFwcGVyX2lucHV0LXdyYXBwZXIge1xuICAgICAgICAgICAgd2lkdGg6IEBpbnB1dFdpZHRoO1xuXG4gICAgICAgICAgICAubG9naW4tcGFnZV9faW5wdXQge1xuICAgICAgICAgICAgICAgIHdpZHRoOiBAaW5wdXRXaWR0aDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IEBpbnB1dEhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAubG9naW4tcGFnZV9fYnV0dG9uLXdyYXBwZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAyMSU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuXG4gICAgICAgIC5sb2dpbi1wYWdlX19saW5rLXdyYXBwZXIge1xuICAgICAgICAgICAgaGVpZ2h0OiA0NnB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcblxuICAgICAgICAgICAgLmxvZ2luLXBhZ2VfX2J1dHRvbi1saW5rIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwNzNiMTtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzNiU7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiBsYXJnZXI7XG5cbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDA2MDk3O1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2QwZThmZjtcbiAgICAgICAgICAgICAgICAgIC8vYm9yZGVyLWJvdHRvbTogMC43cHggc29saWQgIzAwNjA5NztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJjp2aXNpdGVkIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM2NjVlZDA7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAubG9naW4tcGFnZV9fYnV0dG9uIHtcbiAgICAgICAgICAgd2lkdGg6IEBidXR0b25XaWR0aDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login-page',
                templateUrl: './login-page.component.html',
                styleUrls: ['./login-page.component.less']
            }]
    }], function () { return [{ type: _services_token_service_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"] }, { type: _login_page_service_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _main_page_main_page_service_get_points_service__WEBPACK_IMPORTED_MODULE_5__["GetPointsService"] }]; }, null); })();


/***/ }),

/***/ "AF54":
/*!*************************************************!*\
  !*** ./src/app/interceptor/auth.interceptor.ts ***!
  \*************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_token_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/token-service.service */ "aRc7");



class AuthInterceptor {
    constructor(_tokenService) {
        this._tokenService = _tokenService;
    }
    intercept(request, next) {
        let authRequest = request;
        const token = this._tokenService.getToken();
        if (token != null) {
            authRequest = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
        }
        return next.handle(authRequest);
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_token_service_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"])); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _services_token_service_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"] }]; }, null); })();


/***/ }),

/***/ "Aw39":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/registration-page/registration-page-service/registration.service.ts ***!
  \*******************************************************************************************/
/*! exports provided: RegistrationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationService", function() { return RegistrationService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "qlzE");





class RegistrationService {
    constructor(_http) {
        this._http = _http;
    }
    addNewUser(obj) {
        return this._http.post('http://localhost:31440/lab4/register', obj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.json(), (err) => {
            this.handleError(err);
        }));
    }
    handleError(err) {
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(err || 'Error 500');
    }
}
RegistrationService.ɵfac = function RegistrationService_Factory(t) { return new (t || RegistrationService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"])); };
RegistrationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: RegistrationService, factory: RegistrationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](RegistrationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
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
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "IDMr":
/*!**************************************************************************!*\
  !*** ./src/app/pages/main-page/main-page-service/check-point.service.ts ***!
  \**************************************************************************/
/*! exports provided: CheckPointService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckPointService", function() { return CheckPointService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "qlzE");





class CheckPointService {
    constructor(_http) {
        this._http = _http;
    }
    checkPoints(data) {
        return this._http.post('http://localhost:31440/lab4/checkPoint', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(res => res.json(), (err) => this.handleError(err)));
    }
    handleError(err) {
        rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(err || 'ERROR 500');
    }
}
CheckPointService.ɵfac = function CheckPointService_Factory(t) { return new (t || CheckPointService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"])); };
CheckPointService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CheckPointService, factory: CheckPointService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckPointService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"] }]; }, null); })();


/***/ }),

/***/ "Ivn6":
/*!**************************************!*\
  !*** ./src/app/pages/model/logic.ts ***!
  \**************************************/
/*! exports provided: saveUserName, getUserName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveUserName", function() { return saveUserName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserName", function() { return getUserName; });
let name = '';
function saveUserName(userName) {
    name = userName;
}
function getUserName() {
    return name;
}


/***/ }),

/***/ "LY05":
/*!******************************************!*\
  !*** ./src/app/guard/logged-in.guard.ts ***!
  \******************************************/
/*! exports provided: LoggedInAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggedInAuthGuard", function() { return LoggedInAuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _pages_login_page_login_page_service_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/login-page/login-page-service/login.service */ "cYQP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class LoggedInAuthGuard {
    constructor(_loginService, _router) {
        this._loginService = _loginService;
        this._router = _router;
    }
    canActivate() {
        if (this._loginService.isLoggedIn()) {
            this._router.navigate(['/main']);
            return false;
        }
        else {
            return true;
        }
    }
}
LoggedInAuthGuard.ɵfac = function LoggedInAuthGuard_Factory(t) { return new (t || LoggedInAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_pages_login_page_login_page_service_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LoggedInAuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoggedInAuthGuard, factory: LoggedInAuthGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoggedInAuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _pages_login_page_login_page_service_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'front';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [[1, "main__wrapper"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".main__wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  box-sizing: border-box;\n  align-items: center;\n  justify-content: center;\n}\napp-root[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n}\napp-main-page[_ngcontent-%COMP%] {\n  border: 2px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUZKO0FBS0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQUhGO0FBTUE7RUFDRSxxQkFBQTtBQUpGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtYWluV3JhcHBlcldpZHRoOiAxMDAlO1xuQG1haW5XcmFwcGVySGVpZ2h0OiAxMDB2aDtcblxuLm1haW5fX3dyYXBwZXIge1xuICAgIHdpZHRoOiBAbWFpbldyYXBwZXJXaWR0aDtcbiAgICBoZWlnaHQ6IEBtYWluV3JhcHBlckhlaWdodDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuYXBwLXJvb3Qge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuYXBwLW1haW4tcGFnZSB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.less']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "qlzE");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputnumber */ "Ks7X");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _interceptor_auth_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./interceptor/auth.interceptor */ "AF54");
/* harmony import */ var _guard_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./guard/guard */ "0kjc");
/* harmony import */ var _guard_logged_in_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./guard/logged-in.guard */ "LY05");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/login-page/login-page.component */ "6V8c");
/* harmony import */ var _pages_registration_page_registration_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/registration-page/registration-page.component */ "foYC");
/* harmony import */ var _pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/main-page/main-page.component */ "h6PX");


















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"], useClass: _interceptor_auth_interceptor__WEBPACK_IMPORTED_MODULE_10__["AuthInterceptor"], multi: true
        },
        _guard_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"],
        _guard_logged_in_guard__WEBPACK_IMPORTED_MODULE_12__["LoggedInAuthGuard"],
        {
            provide: _angular_common__WEBPACK_IMPORTED_MODULE_13__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_13__["HashLocationStrategy"]
        }
    ], imports: [[
            _angular_http__WEBPACK_IMPORTED_MODULE_1__["HttpModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_4__["ButtonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputTextModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            primeng_inputnumber__WEBPACK_IMPORTED_MODULE_7__["InputNumberModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_14__["LoginPageComponent"], _pages_registration_page_registration_page_component__WEBPACK_IMPORTED_MODULE_15__["RegistrationPageComponent"], _pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_16__["MainPageComponent"]], imports: [_angular_http__WEBPACK_IMPORTED_MODULE_1__["HttpModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        primeng_button__WEBPACK_IMPORTED_MODULE_4__["ButtonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputTextModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
        primeng_inputnumber__WEBPACK_IMPORTED_MODULE_7__["InputNumberModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["routingComponents"],
                ],
                imports: [
                    _angular_http__WEBPACK_IMPORTED_MODULE_1__["HttpModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    primeng_button__WEBPACK_IMPORTED_MODULE_4__["ButtonModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
                    primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputTextModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                    primeng_inputnumber__WEBPACK_IMPORTED_MODULE_7__["InputNumberModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                ],
                providers: [
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"], useClass: _interceptor_auth_interceptor__WEBPACK_IMPORTED_MODULE_10__["AuthInterceptor"], multi: true
                    },
                    _guard_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"],
                    _guard_logged_in_guard__WEBPACK_IMPORTED_MODULE_12__["LoggedInAuthGuard"],
                    {
                        provide: _angular_common__WEBPACK_IMPORTED_MODULE_13__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_13__["HashLocationStrategy"]
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "aRc7":
/*!***************************************************!*\
  !*** ./src/app/services/token-service.service.ts ***!
  \***************************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
class TokenService {
    constructor() { }
    signOut() {
        window.sessionStorage.clear();
    }
    saveToken(token) {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    }
    getToken() {
        return sessionStorage.getItem(TOKEN_KEY);
    }
    saveUser(user) {
        window.sessionStorage.removeItem(USER_KEY);
        window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    }
    getUser() {
        return JSON.parse(sessionStorage.getItem(USER_KEY));
    }
}
TokenService.ɵfac = function TokenService_Factory(t) { return new (t || TokenService)(); };
TokenService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenService, factory: TokenService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "cYQP":
/*!**********************************************************************!*\
  !*** ./src/app/pages/login-page/login-page-service/login.service.ts ***!
  \**********************************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "qlzE");
/* harmony import */ var _services_token_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/token-service.service */ "aRc7");






class LoginService {
    constructor(_http, _tokenService) {
        this._http = _http;
        this._tokenService = _tokenService;
    }
    authUser(obj) {
        return this._http.post('http://localhost:31440/lab4/login', obj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.json(), (err) => {
            this.handleError(err);
        }));
    }
    isLoggedIn() {
        return this._tokenService.getToken() !== null;
    }
    getUser() {
        return this._tokenService.getUser();
    }
    logOut() {
        this._tokenService.signOut();
    }
    handleError(err) {
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(err || 'Error 500');
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_token_service_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"])); };
LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](LoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"] }, { type: _services_token_service_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"] }]; }, null); })();


/***/ }),

/***/ "foYC":
/*!************************************************************************!*\
  !*** ./src/app/pages/registration-page/registration-page.component.ts ***!
  \************************************************************************/
/*! exports provided: RegistrationPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationPageComponent", function() { return RegistrationPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _registration_page_service_registration_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registration-page-service/registration.service */ "Aw39");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ "jIHw");








const _c0 = function () { return { fontSize: "30px" }; };
const _c1 = function () { return { fontSize: "larger" }; };
const _c2 = function () { return { height: "70px" }; };
const _c3 = function () { return { fontSize: "30px", color: "red", marginTop: "5px" }; };
class RegistrationPageComponent {
    constructor(_service) {
        this._service = _service;
    }
    ngOnInit() {
    }
    register(username, password) {
        this.sendNewUser({ username, password });
        this.cleanInputValue();
    }
    sendNewUser(obj) {
        this._service.addNewUser(obj).subscribe((res) => res, (err) => this.error = err._body);
    }
    cleanInputValue() {
        this.username = '';
        this.password = '';
    }
}
RegistrationPageComponent.ɵfac = function RegistrationPageComponent_Factory(t) { return new (t || RegistrationPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_registration_page_service_registration_service__WEBPACK_IMPORTED_MODULE_1__["RegistrationService"])); };
RegistrationPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegistrationPageComponent, selectors: [["app-registration-page"]], decls: 27, vars: 13, consts: [[1, "registration-page-main__wrapper"], [1, "registration-page__wrapper"], [1, "registration-page__header-wrapper"], [1, "registration-page__header-wrapper__title-wrapper"], [1, "pi", "pi-lock", 3, "ngStyle"], [1, "registration-page__header-wrapper__title"], [1, "registration-page__login-wrapper"], [1, "registration-page__login-wrapper_input-wrapper"], [1, "p-float-label"], ["id", "float-input-username", "type", "text", "pInputText", "", "minlength", "4", 1, "registration-page__input", 3, "ngModel", "ngModelChange"], ["for", "float-input-username", 3, "ngStyle"], [1, "registration-page__login-wrapper_input-wrapper", 3, "ngStyle"], ["id", "float-input-password", "type", "password", "pInputText", "", "minlength", "4", 1, "registration-page__input", 3, "ngModel", "ngModelChange"], ["for", "float-input-password", 3, "ngStyle"], [1, "registration-page__button-wrapper"], [1, "registration-page__link-wrapper"], ["routerLink", "/lab4/login", 1, "registration-page__button-link"], ["pButton", "", "type", "button", "label", "Sign up", 1, "registration-page__button", 3, "click"], [3, "ngStyle"]], template: function RegistrationPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationPageComponent_Template_input_ngModelChange_10_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationPageComponent_Template_input_ngModelChange_16_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "already registered? Log In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationPageComponent_Template_button_click_24_listener() { return ctx.register(ctx.username, ctx.password); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.error);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonDirective"]], styles: [".registration-page-main__wrapper[_ngcontent-%COMP%] {\n  width: 600px;\n  height: 600px;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n}\n.registration-page__wrapper[_ngcontent-%COMP%] {\n  width: 410px;\n  height: 410px;\n  display: flex;\n  padding: 24px 32px 32px 41px;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  border-radius: 15px;\n  box-shadow: 0 1px 15px rgba(0, 0, 0, 0.15);\n}\n.registration-page__wrapper[_ngcontent-%COMP%]   .registration-page__header-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 35%;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n}\n.registration-page__wrapper[_ngcontent-%COMP%]   .registration-page__header-wrapper[_ngcontent-%COMP%]   .registration-page__header-wrapper__title-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 74%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  font-family: revert;\n}\n.registration-page__wrapper[_ngcontent-%COMP%]   .registration-page__header-wrapper[_ngcontent-%COMP%]   .registration-page__header-wrapper__title-wrapper[_ngcontent-%COMP%]   .registration-page__header-wrapper__title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-top: 14px;\n}\n.registration-page__wrapper[_ngcontent-%COMP%]   .registration-page__login-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 80px;\n}\n.registration-page__wrapper[_ngcontent-%COMP%]   .registration-page__login-wrapper[_ngcontent-%COMP%]   .registration-page__login-wrapper_input-wrapper[_ngcontent-%COMP%] {\n  width: 320px;\n}\n.registration-page__wrapper[_ngcontent-%COMP%]   .registration-page__login-wrapper[_ngcontent-%COMP%]   .registration-page__login-wrapper_input-wrapper[_ngcontent-%COMP%]   .registration-page__input[_ngcontent-%COMP%] {\n  width: 320px;\n  height: 45px;\n}\n.registration-page__wrapper[_ngcontent-%COMP%]   .registration-page__button-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 21%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n}\n.registration-page__wrapper[_ngcontent-%COMP%]   .registration-page__button-wrapper[_ngcontent-%COMP%]   .registration-page__link-wrapper[_ngcontent-%COMP%] {\n  height: 46px;\n  margin-bottom: 16px;\n}\n.registration-page__wrapper[_ngcontent-%COMP%]   .registration-page__button-wrapper[_ngcontent-%COMP%]   .registration-page__link-wrapper[_ngcontent-%COMP%]   .registration-page__button-link[_ngcontent-%COMP%] {\n  color: #0073b1;\n  cursor: pointer;\n  height: 35px;\n  font-size: larger;\n  width: 36%;\n}\n.registration-page__wrapper[_ngcontent-%COMP%]   .registration-page__button-wrapper[_ngcontent-%COMP%]   .registration-page__link-wrapper[_ngcontent-%COMP%]   .registration-page__button-link[_ngcontent-%COMP%]:hover {\n  color: #006097;\n  background: #d0e8ff;\n  border-bottom: 0.7px solid #006097;\n}\n.registration-page__wrapper[_ngcontent-%COMP%]   .registration-page__button-wrapper[_ngcontent-%COMP%]   .registration-page__button[_ngcontent-%COMP%] {\n  width: 320px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJhdGlvbi1wYWdlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBVkY7QUFhQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtBQVhGO0FBRUE7RUFZSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFYSjtBQU5BO0VBc0JNLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBYk47QUFmQTtFQStCUSxnQkFBQTtFQUNBLGdCQUFBO0FBYlI7QUFuQkE7RUFxQ0ksV0FBQTtFQUNBLFlBQUE7QUFmSjtBQXZCQTtFQXlDTSxZQUFBO0FBZk47QUExQkE7RUE0Q1EsWUFBQTtFQUNBLFlBQUE7QUFmUjtBQTlCQTtFQWtESSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0FBakJKO0FBckNBO0VBeURNLFlBQUE7RUFDQSxtQkFBQTtBQWpCTjtBQXpDQTtFQTZEUSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUFqQlI7QUFrQlE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtBQWhCVjtBQXJEQTtFQTJFUSxZQUFBO0FBbkJSIiwiZmlsZSI6InJlZ2lzdHJhdGlvbi1wYWdlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGlucHV0V2lkdGg6IDMyMHB4O1xuQGlucHV0SGVpZ2h0OiA0NXB4O1xuQGJ1dHRvbldpZHRoOiAzMjBweDtcbkBpbnB1dFdyYXBwZXJXaWR0aDogMTAwJTtcbkBpbnB1dFdyYXBwZXJIZWlnaHQ6IDc3cHg7XG5AbWFpbldyYXBwZXJXaWR0aDogNDEwcHg7XG5AbWFpbldyYXBwZXJIZWlnaHQ6IDQxMHB4O1xuQGxvZ2luUGFnZUhlYWRlcldpZHRoOiAxMDAlO1xuQGxvZ2luUGFnZUhlYWRlckhlaWdodDogMzUlO1xuQG1haW5XcmFwcGVyQm9yZGVyUmFkaXVzOiAxNXB4O1xuXG4ucmVnaXN0cmF0aW9uLXBhZ2UtbWFpbl9fd3JhcHBlciB7XG4gIHdpZHRoOiA2MDBweDtcbiAgaGVpZ2h0OiA2MDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5yZWdpc3RyYXRpb24tcGFnZV9fd3JhcHBlciB7XG4gIHdpZHRoOiBAbWFpbldyYXBwZXJXaWR0aDtcbiAgaGVpZ2h0OiBAbWFpbldyYXBwZXJIZWlnaHQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDI0cHggMzJweCAzMnB4IDQxcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiBAbWFpbldyYXBwZXJCb3JkZXJSYWRpdXM7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDE1cHggcmdiYSgwLDAsMCwwLjE1KTtcblxuICAucmVnaXN0cmF0aW9uLXBhZ2VfX2hlYWRlci13cmFwcGVyIHtcbiAgICB3aWR0aDogQGxvZ2luUGFnZUhlYWRlcldpZHRoO1xuICAgIGhlaWdodDogQGxvZ2luUGFnZUhlYWRlckhlaWdodDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIC5yZWdpc3RyYXRpb24tcGFnZV9faGVhZGVyLXdyYXBwZXJfX2ljb24td3JhcHBlciB7XG4gICAgfVxuICAgIC5yZWdpc3RyYXRpb24tcGFnZV9faGVhZGVyLXdyYXBwZXJfX3RpdGxlLXdyYXBwZXIge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDc0JTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZm9udC1mYW1pbHk6IHJldmVydDtcblxuICAgICAgLnJlZ2lzdHJhdGlvbi1wYWdlX19oZWFkZXItd3JhcHBlcl9fdGl0bGUge1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBtYXJnaW4tdG9wOiAxNHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAucmVnaXN0cmF0aW9uLXBhZ2VfX2xvZ2luLXdyYXBwZXIge1xuICAgIHdpZHRoOiBAaW5wdXRXcmFwcGVyV2lkdGg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuXG4gICAgLnJlZ2lzdHJhdGlvbi1wYWdlX19sb2dpbi13cmFwcGVyX2lucHV0LXdyYXBwZXIge1xuICAgICAgd2lkdGg6IEBpbnB1dFdpZHRoO1xuXG4gICAgICAucmVnaXN0cmF0aW9uLXBhZ2VfX2lucHV0IHtcbiAgICAgICAgd2lkdGg6IEBpbnB1dFdpZHRoO1xuICAgICAgICBoZWlnaHQ6IEBpbnB1dEhlaWdodDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbi1wYWdlX19idXR0b24td3JhcHBlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyMSU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuXG4gICAgLnJlZ2lzdHJhdGlvbi1wYWdlX19saW5rLXdyYXBwZXIge1xuICAgICAgaGVpZ2h0OiA0NnB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcblxuICAgICAgLnJlZ2lzdHJhdGlvbi1wYWdlX19idXR0b24tbGluayB7XG4gICAgICAgIGNvbG9yOiAjMDA3M2IxO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgZm9udC1zaXplOiBsYXJnZXI7XG4gICAgICAgIHdpZHRoOiAzNiU7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiAjMDA2MDk3O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNkMGU4ZmY7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMC43cHggc29saWQgIzAwNjA5NztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5yZWdpc3RyYXRpb24tcGFnZV9fYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IEBidXR0b25XaWR0aDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-registration-page',
                templateUrl: './registration-page.component.html',
                styleUrls: ['./registration-page.component.less']
            }]
    }], function () { return [{ type: _registration_page_service_registration_service__WEBPACK_IMPORTED_MODULE_1__["RegistrationService"] }]; }, null); })();


/***/ }),

/***/ "h6PX":
/*!********************************************************!*\
  !*** ./src/app/pages/main-page/main-page.component.ts ***!
  \********************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _model_logic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/logic */ "Ivn6");
/* harmony import */ var _services_token_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/token-service.service */ "aRc7");
/* harmony import */ var _main_page_service_get_points_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-page-service/get-points.service */ "ifHD");
/* harmony import */ var _main_page_service_check_point_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main-page-service/check-point.service */ "IDMr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputnumber */ "Ks7X");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");













function MainPageComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const point_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](point_r3.x);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](point_r3.y);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](point_r3.r);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](point_r3.income);
} }
const _c0 = function () { return { cursor: "pointer" }; };
const _c1 = function () { return { fontSize: "30px", color: "blue", textTransform: "capitalize" }; };
const _c2 = function () { return { width: "90%" }; };
const _c3 = function () { return { width: "86%" }; };
const _c4 = function () { return { display: "flex", justifyContent: "center" }; };
const _c5 = function () { return { width: "250px" }; };
class MainPageComponent {
    constructor(_tokenService, _getPointService, _checkPointService, _router) {
        this._tokenService = _tokenService;
        this._getPointService = _getPointService;
        this._checkPointService = _checkPointService;
        this._router = _router;
        this.rateControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(-3)]);
        this.parameter = 2;
    }
    ngOnInit() {
        this.getUserPoints();
        this.loginName = Object(_model_logic__WEBPACK_IMPORTED_MODULE_2__["getUserName"])();
        setTimeout(() => {
            this.draw(this.parameter);
        }, 100);
    }
    getUserPoints() {
        this._getPointService.getPoints().subscribe((res) => this.tablePoints = res, (err) => console.log(err));
        setTimeout(() => console.log(this.tablePoints, 'tbpoint'), 1000);
    }
    getParameter() {
        return this.parameter;
    }
    logout() {
        this._router.navigate(["/lab4/login"]);
        this._tokenService.signOut();
    }
    checkPoint(data) {
        this._checkPointService.checkPoints(data).subscribe((res) => res, (err) => console.log(err));
        setTimeout(() => {
            this.getUserPoints();
        }, 100);
    }
    getTablePoints() {
        return this.tablePoints;
    }
    sendPoint(event) {
        const X = (event.offsetX - 200) / 80;
        const Y = (event.offsetY - 200) / -80;
        // @ts-ignore
        const data = {
            x: X,
            y: Y,
            r: this.parameter,
            username: this.loginName
        };
        this.checkPoint(data);
        // @ts-ignore
        console.log("send point");
        setTimeout(() => {
            this.draw(this.parameter);
        }, 100);
    }
    // tslint:disable-next-line:typedef
    draw(parameter = 0) {
        const CANVAS_WIDTH = 400;
        const CANVAS_HEIGHT = 400;
        const canvas = document.getElementById('canvas');
        // @ts-ignore
        if (canvas.getContext) {
            // @ts-ignore
            const ctx = canvas.getContext('2d');
            ctx.fillStyle = "rgba(256, 256, 256)"; // background fill
            ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            ctx.fillStyle = 'rgb(35, 184, 253)'; //area
            ctx.fillRect(200, 200, parameter * 40, parameter * 80); //rectangle
            ctx.fill();
            ctx.beginPath();
            ctx.lineTo(200, 200 - parameter * 20); // quarter of circle
            if (parameter > 0)
                ctx.arc(200, 200, Math.abs(parameter * 40), Math.PI / 2, Math.PI, false);
            else
                ctx.arc(200, 200, Math.abs(parameter * 40), Math.PI * 3 / 2, 0, false);
            ctx.lineTo(200, 200);
            ctx.closePath();
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(200 - parameter * 40, 200); // triangle
            ctx.lineTo(200, 200 - parameter * 80);
            ctx.lineTo(200, 200);
            ctx.closePath();
            ctx.fill();
            for (let x = 40; x < 361; x += 40) { // gird
                ctx.moveTo(x, 0);
                ctx.lineTo(x, 400);
            }
            for (let y = 40; y < 361; y += 40) {
                ctx.moveTo(0, y);
                ctx.lineTo(400, y);
            }
            ctx.strokeStyle = "#333";
            ctx.stroke();
            ctx.fillStyle = 'black'; //axis
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(0, 200);
            ctx.lineTo(400, 200);
            ctx.moveTo(200, 0);
            ctx.lineTo(200, 400);
            ctx.moveTo(194, 20); //arrows at the ends of lines
            ctx.lineTo(200, 0);
            ctx.lineTo(206, 20);
            ctx.moveTo(380, 194);
            ctx.lineTo(400, 200);
            ctx.lineTo(380, 206);
            ctx.stroke();
            ctx.fill();
            ctx.font = "18px Arial";
            ctx.fillText("X", 385, 188);
            ctx.fillText("Y", 208, 18);
            ctx.fillText("0", 202, 198);
            if (Math.abs(parameter) >= 1) {
                ctx.fillText("1", 282, 198);
                ctx.fillText("1", 202, 116);
                ctx.fillText("-1", 122, 198);
                ctx.fillText("-1", 202, 276);
            }
            if (Math.abs(parameter) >= 2) {
                ctx.fillText("2", 362, 198);
                ctx.fillText("2", 202, 38);
                ctx.fillText("-2", 42, 198);
                ctx.fillText("-2", 202, 356);
            }
            ctx.closePath();
            this.getTablePoints().forEach((element) => {
                let x = element.x;
                let y = element.y;
                let result = this.check(x, y, parameter);
                if (result !== "") {
                    result === 'true' ? ctx.fillStyle = 'green' : ctx.fillStyle = 'red';
                    ctx.beginPath();
                    ctx.arc(200 + 80 * x, 200 - 80 * y, 6, 0, 2 * Math.PI);
                    ctx.fill();
                }
            });
        }
    }
    check(x, y, r) {
        let income = "false";
        if (r >= 0) {
            if (y > 0) {
                if ((y <= 2 * x + r) && (x <= 0))
                    income = "true"; //triangle
            }
            else {
                if (x >= 0) {
                    if ((x <= r / 2) && (y >= -r))
                        income = "true"; // rectangle
                }
                if (x < 0) {
                    if (x * x + y * y <= r * r / 4)
                        income = "true"; //circle
                }
            }
        }
        else {
            if (y >= 0) {
                if (x > 0) {
                    if (x * x + y * y <= r * r / 4)
                        income = "true"; //circle
                }
                else if ((x >= r / 2) && (y <= Math.abs(r)))
                    income = "true"; // reactangle
            }
            else if ((y >= 2 * x + r) && (x >= 0))
                income = "true"; //triangle
        }
        return income;
    }
}
MainPageComponent.ɵfac = function MainPageComponent_Factory(t) { return new (t || MainPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_token_service_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_main_page_service_get_points_service__WEBPACK_IMPORTED_MODULE_4__["GetPointsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_main_page_service_check_point_service__WEBPACK_IMPORTED_MODULE_5__["CheckPointService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
MainPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainPageComponent, selectors: [["app-main-page"]], decls: 46, vars: 23, consts: [[1, "main-page__main-wrapper"], [1, "main-page__header"], [1, "header__logo", 3, "ngStyle"], [1, "header__sign-out-button"], ["pButton", "", "pRipple", "", "type", "button", "label", "sign out", 1, "p-button-raised", "p-button-text", "p-button-plain", 3, "click"], [3, "ngStyle"], [1, "main-page__body"], [1, "main-page__canvas-container"], ["width", "400px", "height", "400px", "id", "canvas", 3, "click"], [1, "main-page__form-container", 3, "ngSubmit"], ["pointForm", "ngForm"], [1, "p-panel-titlebar"], [1, "p-panel-title"], [1, "p-field", "p-col-12", "p-md-6"], ["name", "x", "ngModel", "", "mode", "decimal", "buttonLayout", "stacked", 3, "ngStyle", "showButtons", "min", "max", "step"], ["name", "y", "ngModel", "", "id", "y", "type", "text", "pInputText", "", "maxlength", "6", "value", "0", "pattern", "^-?\\d+[.,]?\\d*$", 3, "ngStyle"], ["name", "r", "ngModel", "", "mode", "decimal", "buttonLayout", "stacked", 1, "input__class", 3, "showButtons", "ngModel", "min", "max", "step", "ngModelChange"], ["spy", ""], [1, "main-page__button-container", 3, "ngStyle"], ["pButton", "", "type", "submit", "label", "Send", 3, "ngStyle"], [1, "main-page__table"], [1, "main-page__table-header"], [1, "main-page__table-header-element"], ["class", "main-page__table-body-container", 4, "ngFor", "ngForOf"], [1, "main-page__table-body-container"], [1, "main-page__table-body-element"]], template: function MainPageComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Imanzade & Antipin, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " P3212, var: 313899 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_Template_button_click_7_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "canvas", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_Template_canvas_click_13_listener($event) { return ctx.sendPoint($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function MainPageComponent_Template_form_ngSubmit_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15); return ctx.checkPoint(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Add new point");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " X: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "p-inputNumber", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Y: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " R: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p-inputNumber", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MainPageComponent_Template_p_inputNumber_ngModelChange_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28); return ctx.draw(_r1.value); })("ngModelChange", function MainPageComponent_Template_p_inputNumber_ngModelChange_27_listener($event) { return ctx.parameter = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Y");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "R");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Result");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, MainPageComponent_div_45_Template, 13, 4, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("USER: ", ctx.loginName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c2))("showButtons", true)("min", -2)("max", 2)("step", 0.5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showButtons", true)("ngModel", ctx.parameter)("min", -2)("max", 2)("step", 0.5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getTablePoints());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], primeng_button__WEBPACK_IMPORTED_MODULE_8__["ButtonDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], primeng_inputnumber__WEBPACK_IMPORTED_MODULE_9__["InputNumber"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["PatternValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], styles: [".main-page__main-wrapper[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n.main-page__header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  height: 10%;\n  padding: 0 40px;\n  margin-bottom: 50px;\n  box-shadow: 0 2px 15px rgba(151, 150, 168, 0.28);\n}\n.main-page__table-body-element[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 25%;\n  justify-content: center;\n  background: #3498db;\n  color: white;\n  font-weight: bold;\n  padding: 10px;\n  border-left: 1px solid #ccc;\n  text-align: center;\n  font-size: 20px;\n}\n.main-page__table-body-container[_ngcontent-%COMP%] {\n  display: flex;\n}\n.main-page__body[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 90%;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n#canvas[_ngcontent-%COMP%] {\n  cursor: crosshair;\n}\n.main-page__canvas-container[_ngcontent-%COMP%] {\n  width: 404px;\n  height: 404px;\n  border: 2px solid #ced4da;\n  margin: 20px 5px 20px 20px;\n}\n.input__class[_ngcontent-%COMP%] {\n  width: 286px;\n}\n.main-page__form-container[_ngcontent-%COMP%] {\n  width: 305px;\n  height: 320px;\n  border: 2px solid #ced4da;\n  margin: 20px 10px;\n}\n.p-panel-titlebar[_ngcontent-%COMP%] {\n  padding: 0.571em 1em;\n  background-color: #f4f4f4;\n  color: #333;\n  border-radius: 3px 3px 0 0;\n  margin-bottom: 10px;\n}\nh3[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.p-field[_ngcontent-%COMP%] {\n  margin: 10px 10px 10px 20px;\n}\nbutton[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n.main-page__table[_ngcontent-%COMP%] {\n  width: 380px;\n  border-collapse: collapse;\n  cursor: pointer;\n  margin: 20px 20px 20px 5px;\n  display: flex;\n  flex-direction: column;\n  border: 2px solid #ced4da;\n}\n.main-page__table-header[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 20%;\n  display: flex;\n  justify-content: center;\n}\n.main-page__table-header-element[_ngcontent-%COMP%] {\n  width: 25%;\n  display: flex;\n  justify-content: center;\n  background: #3498db;\n  color: white;\n  font-weight: bold;\n  padding: 10px;\n  border-bottom: 1px solid #ccc;\n  text-align: center;\n  font-size: 20px;\n}\n@media (max-width: 830px) {\n  .main-page__table[_ngcontent-%COMP%] {\n    width: 420px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tcGFnZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFDRjtBQUVBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdEQUFBO0FBQUY7QUFHQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBREY7QUFJQTtFQUNFLGFBQUE7QUFGRjtBQUtBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUFIRjtBQU1BO0VBQ0UsaUJBQUE7QUFKRjtBQU9BO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0FBTEY7QUFRQTtFQUNFLFlBQUE7QUFORjtBQVNBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FBUEY7QUFTQTtFQUNFLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtBQVBGO0FBVUE7RUFDRSxrQkFBQTtBQVJGO0FBV0E7RUFDRSwyQkFBQTtBQVRGO0FBWUE7RUFDRSxZQUFBO0FBVkY7QUFhQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FBWEY7QUFjQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBWkY7QUFlQTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQWJGO0FBZ0JBO0VBQ0U7SUFDRSxZQUFBO0VBZEY7QUFDRiIsImZpbGUiOiJtYWluLXBhZ2UuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1wYWdlX19tYWluLXdyYXBwZXIge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5tYWluLXBhZ2VfX2hlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAlO1xuICBwYWRkaW5nOiAwIDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDE1cHggcmdiYSgxNTEsMTUwLDE2OCwuMjgpO1xufVxuXG4ubWFpbi1wYWdlX190YWJsZS1ib2R5LWVsZW1lbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMjUlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogIzM0OThkYjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjY2NjO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLm1haW4tcGFnZV9fdGFibGUtYm9keS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubWFpbi1wYWdlX19ib2R5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4jY2FudmFzIHtcbiAgY3Vyc29yOiBjcm9zc2hhaXI7XG59XG5cbi5tYWluLXBhZ2VfX2NhbnZhcy1jb250YWluZXIge1xuICB3aWR0aDogNDA0cHg7XG4gIGhlaWdodDogNDA0cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNjZWQ0ZGE7XG4gIG1hcmdpbjogMjBweCA1cHggMjBweCAyMHB4O1xufVxuXG4uaW5wdXRfX2NsYXNzIHtcbiAgd2lkdGg6IDI4NnB4O1xufVxuXG4ubWFpbi1wYWdlX19mb3JtLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAzMDVweDtcbiAgaGVpZ2h0OiAzMjBweDtcbiAgYm9yZGVyOiAycHggc29saWQgI2NlZDRkYTtcbiAgbWFyZ2luOiAyMHB4IDEwcHg7XG59XG4ucC1wYW5lbC10aXRsZWJhciB7XG4gIHBhZGRpbmc6IC41NzFlbSAxZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XG4gIGNvbG9yOiAjMzMzO1xuICBib3JkZXItcmFkaXVzOiAzcHggM3B4IDAgMDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuaDMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wLWZpZWxke1xuICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDIwcHg7XG59XG5cbmJ1dHRvbntcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4ubWFpbi1wYWdlX190YWJsZSB7XG4gIHdpZHRoOiAzODBweDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDIwcHggMjBweCAyMHB4IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm9yZGVyOiAycHggc29saWQgI2NlZDRkYTtcbn1cblxuLm1haW4tcGFnZV9fdGFibGUtaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm1haW4tcGFnZV9fdGFibGUtaGVhZGVyLWVsZW1lbnQge1xuICB3aWR0aDogMjUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogIzM0OThkYjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogODMwcHgpIHtcbiAgLm1haW4tcGFnZV9fdGFibGV7XG4gICAgd2lkdGg6IDQyMHB4O1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-page',
                templateUrl: './main-page.component.html',
                styleUrls: ['./main-page.component.less']
            }]
    }], function () { return [{ type: _services_token_service_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"] }, { type: _main_page_service_get_points_service__WEBPACK_IMPORTED_MODULE_4__["GetPointsService"] }, { type: _main_page_service_check_point_service__WEBPACK_IMPORTED_MODULE_5__["CheckPointService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "ifHD":
/*!*************************************************************************!*\
  !*** ./src/app/pages/main-page/main-page-service/get-points.service.ts ***!
  \*************************************************************************/
/*! exports provided: GetPointsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPointsService", function() { return GetPointsService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _model_logic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/logic */ "Ivn6");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "qlzE");
/* harmony import */ var _services_token_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/token-service.service */ "aRc7");







class GetPointsService {
    constructor(_http, _tokenService) {
        this._http = _http;
        this._tokenService = _tokenService;
    }
    getPoints() {
        this.username = Object(_model_logic__WEBPACK_IMPORTED_MODULE_3__["getUserName"])();
        return this._http.get(`http://localhost:31440/lab4/getPoints/${this.username}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.json(), (err) => this.handleError(err)));
    }
    ;
    handleError(err) {
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(err || 'ERROR 500');
    }
}
GetPointsService.ɵfac = function GetPointsService_Factory(t) { return new (t || GetPointsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_token_service_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"])); };
GetPointsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: GetPointsService, factory: GetPointsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](GetPointsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"] }, { type: _services_token_service_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/main-page/main-page.component */ "h6PX");
/* harmony import */ var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/login-page/login-page.component */ "6V8c");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_registration_page_registration_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/registration-page/registration-page.component */ "foYC");
/* harmony import */ var _guard_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guard/guard */ "0kjc");








const routes = [
    { path: 'lab4/login', component: _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_2__["LoginPageComponent"] },
    { path: 'lab4/registration', component: _pages_registration_page_registration_page_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationPageComponent"] },
    { path: 'lab4/main', component: _pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__["MainPageComponent"], canActivate: [_guard_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: '', redirectTo: '/lab4/login', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
            }]
    }], null, null); })();
const routingComponents = [_pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_2__["LoginPageComponent"], _pages_registration_page_registration_page_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationPageComponent"], _pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__["MainPageComponent"]];


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map