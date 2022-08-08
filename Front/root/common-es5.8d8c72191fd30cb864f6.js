(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "5jht":
    /*!******************************************************************!*\
      !*** ./src/app/shared/services/unidad-service/unidad.service.ts ***!
      \******************************************************************/

    /*! exports provided: UnidadService */

    /***/
    function jht(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UnidadService", function () {
        return UnidadService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _core_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../@core/services */
      "5mMP");

      var UnidadService = /*@__PURE__*/function () {
        var UnidadService = /*#__PURE__*/function () {
          function UnidadService(http) {
            _classCallCheck(this, UnidadService);

            this.http = http;
            this.endpoint = 'unidad';
          }

          _createClass(UnidadService, [{
            key: "getAll",
            value: function getAll() {
              return this.http.get("".concat(this.endpoint), null, true);
            }
          }, {
            key: "createUnidad",
            value: function createUnidad(name,ubicacion,comandante, rResponsable) {
              return this.http.post("".concat(this.endpoint), {
                name: name,
                ubicacion: ubicacion,
                comandante: comandante,
                rResponsable: rResponsable
              }, true);
            }
          }, {
            key: "removeUnidad",
            value: function removeUnidad(id) {
              return this.http["delete"]("".concat(this.endpoint), {
                body: {
                  id: id
                }
              }, true);
            }
          }]);

          return UnidadService;
        }();

        UnidadService.ɵfac = function UnidadService_Factory(t) {
          return new (t || UnidadService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services__WEBPACK_IMPORTED_MODULE_1__["ApiService"]));
        };

        UnidadService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: UnidadService,
          factory: UnidadService.ɵfac,
          providedIn: 'root'
        });
        return UnidadService;
      }();
      /***/

    }
  }]);
})();