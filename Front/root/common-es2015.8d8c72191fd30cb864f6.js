(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "5jht":
/*!******************************************************************!*\
  !*** ./src/app/shared/services/unidad-service/unidad.service.ts ***!
  \******************************************************************/
/*! exports provided: UnidadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnidadService", function() { return UnidadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@core/services */ "5mMP");



let UnidadService = /*@__PURE__*/ (() => {
    class UnidadService {
        constructor(http) {
            this.http = http;
            this.endpoint = 'unidad';
/*             this.endpoint = 'unidad1';
            this.endpoint = 'unidad2';
            this.endpoint = 'unidad3'; */
        }
        getAll() {
            return this.http.get(`${this.endpoint}`, null, true);
        }
        createUnidad(name,ubicacion, comandante, rResponsable) {
            return this.http.post(`${this.endpoint}`, { name, ubicacion, comandante, rResponsable }, true);
        }
        removeUnidad(id) {
            return this.http.delete(`${this.endpoint}`, { body: { id } }, true);
        }
    }
    UnidadService.ɵfac = function UnidadService_Factory(t) { return new (t || UnidadService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services__WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
    UnidadService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UnidadService, factory: UnidadService.ɵfac, providedIn: 'root' });
    return UnidadService;
})();


/***/ })

}]);