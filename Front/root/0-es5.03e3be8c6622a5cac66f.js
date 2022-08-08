(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0], {
    /***/
    "+YWR":
    /*!************************************************************************************!*\
      !*** ./src/app/shared/services/investigation-types/investigation-types.service.ts ***!
      \************************************************************************************/

    /*! exports provided: InvestigationTypesService */

    /***/
    function YWR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InvestigationTypesService", function () {
        return InvestigationTypesService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../@core/services */
      "5mMP");

      var InvestigationTypesService = /*@__PURE__*/function () {
        var InvestigationTypesService = /*#__PURE__*/function () {
          function InvestigationTypesService(http) {
            _classCallCheck(this, InvestigationTypesService);

            this.http = http;
            this.endpoint = 'inv-type';
          }

          _createClass(InvestigationTypesService, [{
            key: "getIdConv",
            value: function getIdConv(groupCategoryId) {
              return this.http.get("".concat(this.endpoint, "/getIdConv/").concat(groupCategoryId), null, true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
                return res.invTypes || null;
              }));
            }
          }, {
            key: "add",
            value: function add(invType) {
              return this.http.post("".concat(this.endpoint), invType).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
                return res.invType || null;
              }));
            }
          }, {
            key: "getById",
            value: function getById(invTypeId) {
              return this.http.get("".concat(this.endpoint, "/").concat(invTypeId), null, true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
                return res.invType || null;
              }));
            }
          }, {
            key: "getAll",
            value: function getAll() {
              return this.http.get("".concat(this.endpoint), null, true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
                return res.invTypes || null;
              }));
            }
          }, {
            key: "update",
            value: function update(invTypeId, invType) {
              return this.http.patch("".concat(this.endpoint, "/").concat(invTypeId), invType, null, true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
                return res.invType || null;
              }));
            }
          }, {
            key: "delete",
            value: function _delete(invTypeId) {
              return this.http["delete"]("".concat(this.endpoint, "/").concat(invTypeId), null, true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
                return res.invType || null;
              }));
            }
          }]);

          return InvestigationTypesService;
        }();

        InvestigationTypesService.ɵfac = function InvestigationTypesService_Factory(t) {
          return new (t || InvestigationTypesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services__WEBPACK_IMPORTED_MODULE_2__["ApiService"]));
        };

        InvestigationTypesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: InvestigationTypesService,
          factory: InvestigationTypesService.ɵfac,
          providedIn: 'root'
        });
        return InvestigationTypesService;
      }();
      /***/

    },

    /***/
    "86Qd":
    /*!**********************************************************************************************!*\
      !*** ./src/app/shared/services/inv-team-person-position/inv-team-person-position.service.ts ***!
      \**********************************************************************************************/

    /*! exports provided: InvTeamPersonPositionService */

    /***/
    function Qd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InvTeamPersonPositionService", function () {
        return InvTeamPersonPositionService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../@core/services */
      "5mMP");

      var InvTeamPersonPositionService = /*@__PURE__*/function () {
        var InvTeamPersonPositionService = /*#__PURE__*/function () {
          function InvTeamPersonPositionService(http) {
            _classCallCheck(this, InvTeamPersonPositionService);

            this.http = http;
            this.endpoint = 'inv-team-person-position';
          }

          _createClass(InvTeamPersonPositionService, [{
            key: "getIdConv",
            value: function getIdConv(groupCategoryId) {
              return this.http.get("".concat(this.endpoint, "/getIdConv/").concat(groupCategoryId), null, true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
                return res.invTeamPersonPositions || null;
              }));
            }
          }, {
            key: "add",
            value: function add(InvTeamPersonPosition) {
              return this.http.post("".concat(this.endpoint), InvTeamPersonPosition).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
                return res.InvTeamPersonPosition || null;
              }));
            }
          }, {
            key: "getById",
            value: function getById(InvTeamPersonPositionId) {
              return this.http.get("".concat(this.endpoint, "/").concat(InvTeamPersonPositionId), null, true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
                return res.InvTeamPersonPositions || null;
              }));
            }
          }, {
            key: "getAll",
            value: function getAll() {
              return this.http.get("".concat(this.endpoint), null, true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
                return res.invTeamPersonPositions || null;
              }));
            }
          }, {
            key: "update",
            value: function update(InvTeamPersonPositionId, InvTeamPersonPosition) {
              return this.http.patch("".concat(this.endpoint, "/").concat(InvTeamPersonPositionId), InvTeamPersonPosition, null, true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
                return res.InvTeamPersonPosition || null;
              }));
            }
          }, {
            key: "delete",
            value: function _delete(InvTeamPersonPositionId) {
              return this.http["delete"]("".concat(this.endpoint, "/").concat(InvTeamPersonPositionId), null, true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
                return res.InvTeamPersonPosition || null;
              }));
            }
          }]);

          return InvTeamPersonPositionService;
        }();

        InvTeamPersonPositionService.ɵfac = function InvTeamPersonPositionService_Factory(t) {
          return new (t || InvTeamPersonPositionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services__WEBPACK_IMPORTED_MODULE_2__["ApiService"]));
        };

        InvTeamPersonPositionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: InvTeamPersonPositionService,
          factory: InvTeamPersonPositionService.ɵfac,
          providedIn: 'root'
        });
        return InvTeamPersonPositionService;
      }();
      /***/

    },

    /***/
    "G4vC":
    /*!************************************************************************************!*\
      !*** ./src/app/shared/services/investigation-lines/investigation-lines.service.ts ***!
      \************************************************************************************/

    /*! exports provided: InvestigationLinesService */

    /***/
    function G4vC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InvestigationLinesService", function () {
        return InvestigationLinesService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../@core/services */
      "5mMP");

      var InvestigationLinesService = /*@__PURE__*/function () {
        var InvestigationLinesService = /*#__PURE__*/function () {
          function InvestigationLinesService(http) {
            _classCallCheck(this, InvestigationLinesService);

            this.http = http;
            this.endpoint = 'inv-line';
          }

          _createClass(InvestigationLinesService, [{
            key: "getIdConv",
            value: function getIdConv(groupCategoryId) {
              return this.http.get("".concat(this.endpoint, "/getIdConv/").concat(groupCategoryId), null, true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
                return res.invLines || null;
              }));
            }
          }, {
            key: "add",
            value: function add(invLine) {
              return this.http.post("".concat(this.endpoint), invLine).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
                return res.invLine || null;
              }));
            }
          }, {
            key: "getById",
            value: function getById(invLineId) {
              return this.http.get("".concat(this.endpoint, "/").concat(invLineId), null, true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
                return res.invLine || null;
              }));
            }
          }, {
            key: "getAll",
            value: function getAll() {
              return this.http.get("".concat(this.endpoint), null, true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
                return res.invLines || null;
              }));
            }
          }, {
            key: "update",
            value: function update(invLineId, invLine) {
              return this.http.patch("".concat(this.endpoint, "/").concat(invLineId), invLine, null, true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
                return res.invLine || null;
              }));
            }
          }, {
            key: "delete",
            value: function _delete(invLineId) {
              return this.http["delete"]("".concat(this.endpoint, "/").concat(invLineId), null, true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
                return res.invLine || null;
              }));
            }
          }]);

          return InvestigationLinesService;
        }();

        InvestigationLinesService.ɵfac = function InvestigationLinesService_Factory(t) {
          return new (t || InvestigationLinesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services__WEBPACK_IMPORTED_MODULE_2__["ApiService"]));
        };

        InvestigationLinesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: InvestigationLinesService,
          factory: InvestigationLinesService.ɵfac,
          providedIn: 'root'
        });
        return InvestigationLinesService;
      }();
      /***/

    },

    /***/
    "HSqb":
    /*!****************************************************************************************!*\
      !*** ./src/app/shared/services/investigation-program/investigation-program.service.ts ***!
      \****************************************************************************************/

    /*! exports provided: InvestigationProgramService */

    /***/
    function HSqb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InvestigationProgramService", function () {
        return InvestigationProgramService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../@core/services */
      "5mMP");

      var InvestigationProgramService = /*@__PURE__*/function () {
        var InvestigationProgramService = /*#__PURE__*/function () {
          function InvestigationProgramService(http) {
            _classCallCheck(this, InvestigationProgramService);

            this.http = http;
            this.endpoint = 'inv-program';
          }

          _createClass(InvestigationProgramService, [{
            key: "getIdConv",
            value: function getIdConv(groupCategoryId) {
              return this.http.get("".concat(this.endpoint, "/getIdConv/").concat(groupCategoryId), null, true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
                return res.invPrograms || null;
              }));
            }
          }, {
            key: "add",
            value: function add(invProgram) {
              return this.http.post("".concat(this.endpoint), invProgram).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
                return res.invProgram || null;
              }));
            }
          }, {
            key: "getById",
            value: function getById(invProgramId) {
              return this.http.get("".concat(this.endpoint, "/").concat(invProgramId), null, true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
                return res.invProgram || null;
              }));
            }
          }, {
            key: "getAll",
            value: function getAll() {
              return this.http.get("".concat(this.endpoint), null, true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
                return res.invPrograms || null;
              }));
            }
          }, {
            key: "update",
            value: function update(invProgramId, invProgram) {
              return this.http.patch("".concat(this.endpoint, "/").concat(invProgramId), invProgram, null, true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
                return res.invProgram || null;
              }));
            }
          }, {
            key: "delete",
            value: function _delete(invProgramId) {
              return this.http["delete"]("".concat(this.endpoint, "/").concat(invProgramId), null, true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
                return res.invProgram || null;
              }));
            }
          }]);

          return InvestigationProgramService;
        }();

        InvestigationProgramService.ɵfac = function InvestigationProgramService_Factory(t) {
          return new (t || InvestigationProgramService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services__WEBPACK_IMPORTED_MODULE_2__["ApiService"]));
        };

        InvestigationProgramService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: InvestigationProgramService,
          factory: InvestigationProgramService.ɵfac,
          providedIn: 'root'
        });
        return InvestigationProgramService;
      }();
      /***/

    },

    /***/
    "IXSF":
    /*!************************************************************************************************!*\
      !*** ./src/app/shared/services/investigation-sub-program/investigation-sub-program.service.ts ***!
      \************************************************************************************************/

    /*! exports provided: InvestigationSubProgramService */

    /***/
    function IXSF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InvestigationSubProgramService", function () {
        return InvestigationSubProgramService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../@core/services */
      "5mMP");

      var InvestigationSubProgramService = /*@__PURE__*/function () {
        var InvestigationSubProgramService = /*#__PURE__*/function () {
          function InvestigationSubProgramService(http) {
            _classCallCheck(this, InvestigationSubProgramService);

            this.http = http;
            this.endpoint = 'inv-sub-program';
          }

          _createClass(InvestigationSubProgramService, [{
            key: "getIdConv",
            value: function getIdConv(groupCategoryId) {
              return this.http.get("".concat(this.endpoint, "/getIdConv/").concat(groupCategoryId), null, true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
                return res.invSubPrograms || null;
              }));
            }
          }, {
            key: "add",
            value: function add(invSubProgram) {
              return this.http.post("".concat(this.endpoint), invSubProgram).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
                return res.invSubPrograms || null;
              }));
            }
          }, {
            key: "getById",
            value: function getById(invSubProgramId) {
              return this.http.get("".concat(this.endpoint, "/").concat(invSubProgramId), null, true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
                return res.invSubProgram || null;
              }));
            }
          }, {
            key: "getAll",
            value: function getAll() {
              return this.http.get("".concat(this.endpoint), null, true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
                return res.invSubPrograms || null;
              }));
            }
          }, {
            key: "update",
            value: function update(invSubProgramId, invSubProgram) {
              return this.http.patch("".concat(this.endpoint, "/").concat(invSubProgramId), invSubProgram, null, true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
                return res.invSubProgram || null;
              }));
            }
          }, {
            key: "delete",
            value: function _delete(invSubProgramId) {
              return this.http["delete"]("".concat(this.endpoint, "/").concat(invSubProgramId), null, true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
                return res.invSubProgram || null;
              }));
            }
          }]);

          return InvestigationSubProgramService;
        }();

        InvestigationSubProgramService.ɵfac = function InvestigationSubProgramService_Factory(t) {
          return new (t || InvestigationSubProgramService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services__WEBPACK_IMPORTED_MODULE_2__["ApiService"]));
        };

        InvestigationSubProgramService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: InvestigationSubProgramService,
          factory: InvestigationSubProgramService.ɵfac,
          providedIn: 'root'
        });
        return InvestigationSubProgramService;
      }();
      /***/

    },

    /***/
    "Mtsg":
    /*!**************************************************************************!*\
      !*** ./src/app/shared/services/group-category/group-category.service.ts ***!
      \**************************************************************************/

    /*! exports provided: GroupCategoryService */

    /***/
    function Mtsg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GroupCategoryService", function () {
        return GroupCategoryService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../@core/services */
      "5mMP");

      var GroupCategoryService = /*@__PURE__*/function () {
        var GroupCategoryService = /*#__PURE__*/function () {
          function GroupCategoryService(http) {
            _classCallCheck(this, GroupCategoryService);

            this.http = http;
            this.endpoint = 'group-category';
          }

          _createClass(GroupCategoryService, [{
            key: "add",
            value: function add(groupCategory) {
              return this.http.post("".concat(this.endpoint), groupCategory).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
                return res.groupCategory || null;
              }));
            }
          }, {
            key: "getIdConv",
            value: function getIdConv(groupCategoryId) {
              return this.http.get("".concat(this.endpoint, "/getIdConv/").concat(groupCategoryId), null, true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
                return res.groupCategories || null;
              }));
            }
          }, {
            key: "getById",
            value: function getById(groupCategoryId) {
              return this.http.get("".concat(this.endpoint, "/").concat(groupCategoryId), null, true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
                return res.groupCategory || null;
              }));
            }
          }, {
            key: "getAll",
            value: function getAll() {
              return this.http.get("".concat(this.endpoint), null, true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
                return res.groupCategories || null;
              }));
            }
          }, {
            key: "update",
            value: function update(groupCategoryId, groupCategory) {
              return this.http.patch("".concat(this.endpoint, "/").concat(groupCategoryId), groupCategory, null, true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
                return res.groupCategory || null;
              }));
            }
          }, {
            key: "delete",
            value: function _delete(groupCategoryId) {
              return this.http["delete"]("".concat(this.endpoint, "/").concat(groupCategoryId), null, true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
                return res.groupCategory || null;
              }));
            }
          }]);

          return GroupCategoryService;
        }();

        GroupCategoryService.ɵfac = function GroupCategoryService_Factory(t) {
          return new (t || GroupCategoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services__WEBPACK_IMPORTED_MODULE_2__["ApiService"]));
        };

        GroupCategoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: GroupCategoryService,
          factory: GroupCategoryService.ɵfac,
          providedIn: 'root'
        });
        return GroupCategoryService;
      }();
      /***/

    },

    /***/
    "O9ht":
    /*!************************************************************************!*\
      !*** ./src/app/shared/services/inv-endorsers/inv-endorsers.service.ts ***!
      \************************************************************************/

    /*! exports provided: InvEndorsersService */

    /***/
    function O9ht(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InvEndorsersService", function () {
        return InvEndorsersService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../@core/services */
      "5mMP");

      var InvEndorsersService = /*@__PURE__*/function () {
        var InvEndorsersService = /*#__PURE__*/function () {
          function InvEndorsersService(http) {
            _classCallCheck(this, InvEndorsersService);

            this.http = http;
            this.endpoint = 'inv-endorser';
          }

          _createClass(InvEndorsersService, [{
            key: "getIdConv",
            value: function getIdConv(groupCategoryId) {
              return this.http.get("".concat(this.endpoint, "/getIdConv/").concat(groupCategoryId), null, true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
                return res.invEndorsers || null;
              }));
            }
          }, {
            key: "add",
            value: function add(invEndorser) {
              return this.http.post("".concat(this.endpoint), invEndorser).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
                return res.invEndorser || null;
              }));
            }
          }, {
            key: "getById",
            value: function getById(invEndorserId) {
              return this.http.get("".concat(this.endpoint, "/").concat(invEndorserId), null, true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
                return res.invEndorser || null;
              }));
            }
          }, {
            key: "getAll",
            value: function getAll() {
              return this.http.get("".concat(this.endpoint), null, true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
                return res.invEndorsers || null;
              }));
            }
          }, {
            key: "update",
            value: function update(invEndorserId, invEndorser) {
              return this.http.patch("".concat(this.endpoint, "/").concat(invEndorserId), invEndorser, null, true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
                return res.invEndorser || null;
              }));
            }
          }, {
            key: "delete",
            value: function _delete(invEndorserId) {
              return this.http["delete"]("".concat(this.endpoint, "/").concat(invEndorserId), null, true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
                return res.invEndorser || null;
              }));
            }
          }]);

          return InvEndorsersService;
        }();

        InvEndorsersService.ɵfac = function InvEndorsersService_Factory(t) {
          return new (t || InvEndorsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services__WEBPACK_IMPORTED_MODULE_2__["ApiService"]));
        };

        InvEndorsersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: InvEndorsersService,
          factory: InvEndorsersService.ɵfac,
          providedIn: 'root'
        });
        return InvEndorsersService;
      }();
      /***/

    },

    /***/
    "z+dt":
    /*!**********************************************************************!*\
      !*** ./src/app/shared/services/product-type/product-type.service.ts ***!
      \**********************************************************************/

    /*! exports provided: ProductTypeService */

    /***/
    function zDt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductTypeService", function () {
        return ProductTypeService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../@core/services */
      "5mMP");

      var ProductTypeService = /*@__PURE__*/function () {
        var ProductTypeService = /*#__PURE__*/function () {
          function ProductTypeService(http) {
            _classCallCheck(this, ProductTypeService);

            this.http = http;
            this.endpoint = 'product-type';
          }

          _createClass(ProductTypeService, [{
            key: "getIdConv",
            value: function getIdConv(groupCategoryId) {
              return this.http.get("".concat(this.endpoint, "/getIdConv/").concat(groupCategoryId), null, true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
                return res.productTypes || null;
              }));
            }
          }, {
            key: "add",
            value: function add(productType) {
              return this.http.post("".concat(this.endpoint), productType).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
                return res.productType || null;
              }));
            }
          }, {
            key: "getById",
            value: function getById(productTypeId) {
              return this.http.get("".concat(this.endpoint, "/").concat(productTypeId), null, true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
                return res.productType || null;
              }));
            }
          }, {
            key: "getAll",
            value: function getAll() {
              return this.http.get("".concat(this.endpoint), null, true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
                return res.productTypes || null;
              }));
            }
          }, {
            key: "update",
            value: function update(productTypeId, productType) {
              return this.http.patch("".concat(this.endpoint, "/").concat(productTypeId), productType, null, true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
                return res.productType || null;
              }));
            }
          }, {
            key: "delete",
            value: function _delete(productTypeId) {
              return this.http["delete"]("".concat(this.endpoint, "/").concat(productTypeId), null, true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
                return res.productType || null;
              }));
            }
          }]);

          return ProductTypeService;
        }();

        ProductTypeService.ɵfac = function ProductTypeService_Factory(t) {
          return new (t || ProductTypeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services__WEBPACK_IMPORTED_MODULE_2__["ApiService"]));
        };

        ProductTypeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: ProductTypeService,
          factory: ProductTypeService.ɵfac,
          providedIn: 'root'
        });
        return ProductTypeService;
      }();
      /***/

    }
  }]);
})();