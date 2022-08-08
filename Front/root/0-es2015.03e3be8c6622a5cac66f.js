(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "+YWR":
/*!************************************************************************************!*\
  !*** ./src/app/shared/services/investigation-types/investigation-types.service.ts ***!
  \************************************************************************************/
/*! exports provided: InvestigationTypesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestigationTypesService", function() { return InvestigationTypesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@core/services */ "5mMP");




let InvestigationTypesService = /*@__PURE__*/ (() => {
    class InvestigationTypesService {
        constructor(http) {
            this.http = http;
            this.endpoint = 'inv-type';
        }
        getIdConv(groupCategoryId) {
            return this.http.get(`${this.endpoint}/getIdConv/${groupCategoryId}`, null, true)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
                return res.invTypes || null;
            }));
        }
        add(invType) {
            return this.http.post(`${this.endpoint}`, invType)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
                return res.invType || null;
            }));
        }
        getById(invTypeId) {
            return this.http.get(`${this.endpoint}/${invTypeId}`, null, true)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
                return res.invType || null;
            }));
        }
        getAll() {
            return this.http.get(`${this.endpoint}`, null, true)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
                return res.invTypes || null;
            }));
        }
        update(invTypeId, invType) {
            return this.http.patch(`${this.endpoint}/${invTypeId}`, invType, null, true)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
                return res.invType || null;
            }));
        }
        delete(invTypeId) {
            return this.http.delete(`${this.endpoint}/${invTypeId}`, null, true)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
                return res.invType || null;
            }));
        }
    }
    InvestigationTypesService.ɵfac = function InvestigationTypesService_Factory(t) { return new (t || InvestigationTypesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services__WEBPACK_IMPORTED_MODULE_2__["ApiService"])); };
    InvestigationTypesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: InvestigationTypesService, factory: InvestigationTypesService.ɵfac, providedIn: 'root' });
    return InvestigationTypesService;
})();


/***/ }),

/***/ "86Qd":
/*!**********************************************************************************************!*\
  !*** ./src/app/shared/services/inv-team-person-position/inv-team-person-position.service.ts ***!
  \**********************************************************************************************/
/*! exports provided: InvTeamPersonPositionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvTeamPersonPositionService", function() { return InvTeamPersonPositionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@core/services */ "5mMP");




let InvTeamPersonPositionService = /*@__PURE__*/ (() => {
    class InvTeamPersonPositionService {
        constructor(http) {
            this.http = http;
            this.endpoint = 'inv-team-person-position';
        }
        getIdConv(groupCategoryId) {
            return this.http.get(`${this.endpoint}/getIdConv/${groupCategoryId}`, null, true)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
                return res.invTeamPersonPositions || null;
            }));
        }
        add(InvTeamPersonPosition) {
            return this.http.post(`${this.endpoint}`, InvTeamPersonPosition)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
                return res.InvTeamPersonPosition || null;
            }));
        }
        getById(InvTeamPersonPositionId) {
            return this.http.get(`${this.endpoint}/${InvTeamPersonPositionId}`, null, true)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
                return res.InvTeamPersonPositions || null;
            }));
        }
        getAll() {
            return this.http.get(`${this.endpoint}`, null, true)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
                return res.invTeamPersonPositions || null;
            }));
        }
        update(InvTeamPersonPositionId, InvTeamPersonPosition) {
            return this.http.patch(`${this.endpoint}/${InvTeamPersonPositionId}`, InvTeamPersonPosition, null, true)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
                return res.InvTeamPersonPosition || null;
            }));
        }
        delete(InvTeamPersonPositionId) {
            return this.http.delete(`${this.endpoint}/${InvTeamPersonPositionId}`, null, true)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
                return res.InvTeamPersonPosition || null;
            }));
        }
    }
    InvTeamPersonPositionService.ɵfac = function InvTeamPersonPositionService_Factory(t) { return new (t || InvTeamPersonPositionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services__WEBPACK_IMPORTED_MODULE_2__["ApiService"])); };
    InvTeamPersonPositionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: InvTeamPersonPositionService, factory: InvTeamPersonPositionService.ɵfac, providedIn: 'root' });
    return InvTeamPersonPositionService;
})();


/***/ }),

/***/ "G4vC":
/*!************************************************************************************!*\
  !*** ./src/app/shared/services/investigation-lines/investigation-lines.service.ts ***!
  \************************************************************************************/
/*! exports provided: InvestigationLinesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestigationLinesService", function() { return InvestigationLinesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@core/services */ "5mMP");




let InvestigationLinesService = /*@__PURE__*/ (() => {
    class InvestigationLinesService {
        constructor(http) {
            this.http = http;
            this.endpoint = 'inv-line';
        }
        getIdConv(groupCategoryId) {
            return this.http.get(`${this.endpoint}/getIdConv/${groupCategoryId}`, null, true)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
                return res.invLines || null;
            }));
        }
        add(invLine) {
            return this.http.post(`${this.endpoint}`, invLine)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
                return res.invLine || null;
            }));
        }
        getById(invLineId) {
            return this.http.get(`${this.endpoint}/${invLineId}`, null, true)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
                return res.invLine || null;
            }));
        }
        getAll() {
            return this.http.get(`${this.endpoint}`, null, true)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
                return res.invLines || null;
            }));
        }
        update(invLineId, invLine) {
            return this.http.patch(`${this.endpoint}/${invLineId}`, invLine, null, true)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
                return res.invLine || null;
            }));
        }
        delete(invLineId) {
            return this.http.delete(`${this.endpoint}/${invLineId}`, null, true)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
                return res.invLine || null;
            }));
        }
    }
    InvestigationLinesService.ɵfac = function InvestigationLinesService_Factory(t) { return new (t || InvestigationLinesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services__WEBPACK_IMPORTED_MODULE_2__["ApiService"])); };
    InvestigationLinesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: InvestigationLinesService, factory: InvestigationLinesService.ɵfac, providedIn: 'root' });
    return InvestigationLinesService;
})();


/***/ }),

/***/ "HSqb":
/*!****************************************************************************************!*\
  !*** ./src/app/shared/services/investigation-program/investigation-program.service.ts ***!
  \****************************************************************************************/
/*! exports provided: InvestigationProgramService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestigationProgramService", function() { return InvestigationProgramService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@core/services */ "5mMP");




let InvestigationProgramService = /*@__PURE__*/ (() => {
    class InvestigationProgramService {
        constructor(http) {
            this.http = http;
            this.endpoint = 'inv-program';
        }
        getIdConv(groupCategoryId) {
            return this.http.get(`${this.endpoint}/getIdConv/${groupCategoryId}`, null, true)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
                return res.invPrograms || null;
            }));
        }
        add(invProgram) {
            return this.http.post(`${this.endpoint}`, invProgram)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
                return res.invProgram || null;
            }));
        }
        getById(invProgramId) {
            return this.http.get(`${this.endpoint}/${invProgramId}`, null, true)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
                return res.invProgram || null;
            }));
        }
        getAll() {
            return this.http.get(`${this.endpoint}`, null, true)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
                return res.invPrograms || null;
            }));
        }
        update(invProgramId, invProgram) {
            return this.http.patch(`${this.endpoint}/${invProgramId}`, invProgram, null, true)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
                return res.invProgram || null;
            }));
        }
        delete(invProgramId) {
            return this.http.delete(`${this.endpoint}/${invProgramId}`, null, true)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
                return res.invProgram || null;
            }));
        }
    }
    InvestigationProgramService.ɵfac = function InvestigationProgramService_Factory(t) { return new (t || InvestigationProgramService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services__WEBPACK_IMPORTED_MODULE_2__["ApiService"])); };
    InvestigationProgramService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: InvestigationProgramService, factory: InvestigationProgramService.ɵfac, providedIn: 'root' });
    return InvestigationProgramService;
})();


/***/ }),

/***/ "IXSF":
/*!************************************************************************************************!*\
  !*** ./src/app/shared/services/investigation-sub-program/investigation-sub-program.service.ts ***!
  \************************************************************************************************/
/*! exports provided: InvestigationSubProgramService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestigationSubProgramService", function() { return InvestigationSubProgramService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@core/services */ "5mMP");




let InvestigationSubProgramService = /*@__PURE__*/ (() => {
    class InvestigationSubProgramService {
        constructor(http) {
            this.http = http;
            this.endpoint = 'inv-sub-program';
        }
        getIdConv(groupCategoryId) {
            return this.http.get(`${this.endpoint}/getIdConv/${groupCategoryId}`, null, true)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
                return res.invSubPrograms || null;
            }));
        }
        add(invSubProgram) {
            return this.http.post(`${this.endpoint}`, invSubProgram)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
                return res.invSubPrograms || null;
            }));
        }
        getById(invSubProgramId) {
            return this.http.get(`${this.endpoint}/${invSubProgramId}`, null, true)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
                return res.invSubProgram || null;
            }));
        }
        getAll() {
            return this.http.get(`${this.endpoint}`, null, true)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
                return res.invSubPrograms || null;
            }));
        }
        update(invSubProgramId, invSubProgram) {
            return this.http.patch(`${this.endpoint}/${invSubProgramId}`, invSubProgram, null, true)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
                return res.invSubProgram || null;
            }));
        }
        delete(invSubProgramId) {
            return this.http.delete(`${this.endpoint}/${invSubProgramId}`, null, true)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
                return res.invSubProgram || null;
            }));
        }
    }
    InvestigationSubProgramService.ɵfac = function InvestigationSubProgramService_Factory(t) { return new (t || InvestigationSubProgramService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services__WEBPACK_IMPORTED_MODULE_2__["ApiService"])); };
    InvestigationSubProgramService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: InvestigationSubProgramService, factory: InvestigationSubProgramService.ɵfac, providedIn: 'root' });
    return InvestigationSubProgramService;
})();


/***/ }),

/***/ "Mtsg":
/*!**************************************************************************!*\
  !*** ./src/app/shared/services/group-category/group-category.service.ts ***!
  \**************************************************************************/
/*! exports provided: GroupCategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupCategoryService", function() { return GroupCategoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@core/services */ "5mMP");




let GroupCategoryService = /*@__PURE__*/ (() => {
    class GroupCategoryService {
        constructor(http) {
            this.http = http;
            this.endpoint = 'group-category';
        }
        add(groupCategory) {
            return this.http.post(`${this.endpoint}`, groupCategory)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
                return res.groupCategory || null;
            }));
        }
        getIdConv(groupCategoryId) {
            return this.http.get(`${this.endpoint}/getIdConv/${groupCategoryId}`, null, true)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
                return res.groupCategories || null;
            }));
        }
        getById(groupCategoryId) {
            return this.http.get(`${this.endpoint}/${groupCategoryId}`, null, true)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
                return res.groupCategory || null;
            }));
        }
        getAll() {
            return this.http.get(`${this.endpoint}`, null, true)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
                return res.groupCategories || null;
            }));
        }
        update(groupCategoryId, groupCategory) {
            return this.http.patch(`${this.endpoint}/${groupCategoryId}`, groupCategory, null, true)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
                return res.groupCategory || null;
            }));
        }
        delete(groupCategoryId) {
            return this.http.delete(`${this.endpoint}/${groupCategoryId}`, null, true)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
                return res.groupCategory || null;
            }));
        }
    }
    GroupCategoryService.ɵfac = function GroupCategoryService_Factory(t) { return new (t || GroupCategoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services__WEBPACK_IMPORTED_MODULE_2__["ApiService"])); };
    GroupCategoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GroupCategoryService, factory: GroupCategoryService.ɵfac, providedIn: 'root' });
    return GroupCategoryService;
})();


/***/ }),

/***/ "O9ht":
/*!************************************************************************!*\
  !*** ./src/app/shared/services/inv-endorsers/inv-endorsers.service.ts ***!
  \************************************************************************/
/*! exports provided: InvEndorsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvEndorsersService", function() { return InvEndorsersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@core/services */ "5mMP");




let InvEndorsersService = /*@__PURE__*/ (() => {
    class InvEndorsersService {
        constructor(http) {
            this.http = http;
            this.endpoint = 'inv-endorser';
        }
        getIdConv(groupCategoryId) {
            return this.http.get(`${this.endpoint}/getIdConv/${groupCategoryId}`, null, true)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
                return res.invEndorsers || null;
            }));
        }
        add(invEndorser) {
            return this.http.post(`${this.endpoint}`, invEndorser)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
                return res.invEndorser || null;
            }));
        }
        getById(invEndorserId) {
            return this.http.get(`${this.endpoint}/${invEndorserId}`, null, true)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
                return res.invEndorser || null;
            }));
        }
        getAll() {
            return this.http.get(`${this.endpoint}`, null, true)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
                return res.invEndorsers || null;
            }));
        }
        update(invEndorserId, invEndorser) {
            return this.http.patch(`${this.endpoint}/${invEndorserId}`, invEndorser, null, true)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
                return res.invEndorser || null;
            }));
        }
        delete(invEndorserId) {
            return this.http.delete(`${this.endpoint}/${invEndorserId}`, null, true)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
                return res.invEndorser || null;
            }));
        }
    }
    InvEndorsersService.ɵfac = function InvEndorsersService_Factory(t) { return new (t || InvEndorsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services__WEBPACK_IMPORTED_MODULE_2__["ApiService"])); };
    InvEndorsersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: InvEndorsersService, factory: InvEndorsersService.ɵfac, providedIn: 'root' });
    return InvEndorsersService;
})();


/***/ }),

/***/ "z+dt":
/*!**********************************************************************!*\
  !*** ./src/app/shared/services/product-type/product-type.service.ts ***!
  \**********************************************************************/
/*! exports provided: ProductTypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductTypeService", function() { return ProductTypeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@core/services */ "5mMP");




let ProductTypeService = /*@__PURE__*/ (() => {
    class ProductTypeService {
        constructor(http) {
            this.http = http;
            this.endpoint = 'product-type';
        }
        getIdConv(groupCategoryId) {
            return this.http.get(`${this.endpoint}/getIdConv/${groupCategoryId}`, null, true)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
                return res.productTypes || null;
            }));
        }
        add(productType) {
            return this.http.post(`${this.endpoint}`, productType)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
                return res.productType || null;
            }));
        }
        getById(productTypeId) {
            return this.http.get(`${this.endpoint}/${productTypeId}`, null, true)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
                return res.productType || null;
            }));
        }
        getAll() {
            return this.http.get(`${this.endpoint}`, null, true)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
                return res.productTypes || null;
            }));
        }
        update(productTypeId, productType) {
            return this.http.patch(`${this.endpoint}/${productTypeId}`, productType, null, true)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
                return res.productType || null;
            }));
        }
        delete(productTypeId) {
            return this.http.delete(`${this.endpoint}/${productTypeId}`, null, true)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
                return res.productType || null;
            }));
        }
    }
    ProductTypeService.ɵfac = function ProductTypeService_Factory(t) { return new (t || ProductTypeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services__WEBPACK_IMPORTED_MODULE_2__["ApiService"])); };
    ProductTypeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductTypeService, factory: ProductTypeService.ɵfac, providedIn: 'root' });
    return ProductTypeService;
})();


/***/ })

}]);