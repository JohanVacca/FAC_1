(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9], {
    /***/
    "+cXU":
    /*!***************************************************************************!*\
      !*** ./src/app/invited/landing-page/normativity/normativity.component.ts ***!
      \***************************************************************************/

    /*! exports provided: NormativityComponent */

    /***/
    function cXU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NormativityComponent", function () {
        return NormativityComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NormativityComponent = /*@__PURE__*/function () {
        var NormativityComponent = /*#__PURE__*/function () {
          function NormativityComponent() {
            _classCallCheck(this, NormativityComponent);
          }

          _createClass(NormativityComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }]);

          return NormativityComponent;
        }();

        NormativityComponent.ɵfac = function NormativityComponent_Factory(t) {
          return new (t || NormativityComponent)();
        };

        NormativityComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: NormativityComponent,
          selectors: [["app-normativity"]],
          decls: 80,
          vars: 0,
          consts: [["id", "capacidades"], [1, "all"], [1, "titulo"], ["lang", "es", 1, "honeycomb"], [1, "honeycomb-cell"], ["src", "https://source.unsplash.com/random/1", 1, "honeycomb-cell__image"], [1, "honeycomb-cell__title"], ["src", "https://source.unsplash.com/random/2", 1, "honeycomb-cell__image"], ["src", "https://source.unsplash.com/random/3", 1, "honeycomb-cell__image"], ["src", "https://source.unsplash.com/random/4", 1, "honeycomb-cell__image"], ["src", "https://source.unsplash.com/random/5", 1, "honeycomb-cell__image"], ["src", "https://source.unsplash.com/random/6", 1, "honeycomb-cell__image"], ["src", "https://source.unsplash.com/random/7", 1, "honeycomb-cell__image"], [1, "honeycomb-cell", "honeycomb__placeholder"]],
          template: function NormativityComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Capacidades ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Lineas de investigaci\xF3n y desarrollo tecnologico");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Dirigir los centros de investigaci\xF3n del SEFAC");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Deasrrollo de los procesos de I+D+i");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Sistemas de informaci\xF3n de acceso a redes cient\xEDficas");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Registros tecnologicos desarrollados I+D+i y reglamentacion de uso ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Difundir la tecnologia adquirida y desarrollada");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Garantizar el patrimonio tecnol\xF3gico de la fuerza");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Desagregar tecnologias adquiridas en otros campos I+D+i");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Estimular la creatividad de personal para fomentar I+D+i");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Bases de datos I+D+i para desarrollo de proyectos aeron\xE1uticos");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Propuesta de investigacion por linea de investigaci\xF3n");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Actividades de aprovechamiento infraestructura para I+D+i");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Proyectos Adquisici\xF3n tecnol\xF3gica para transferencia de tecnolog\xEDa ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Dirigir planes de atron\xE1utica, astronom\xEDa, medicina, aeroespacial y medicina espacial en la CCE");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Formulaci\xF3n de proyectos de I+D+i en tem\xE1tica aeroespacial.");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Gesti\xF3n de protecci\xF3n de proyectos con entidades nacionales e internacionales");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "img", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Manejo propiedad intelectual para desarrollo econ\xF3mico y protecci\xF3n ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "img", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Desde el cielo protegemos nuestra tierra");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "FAC");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "li", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
          },
          styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@100&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Open+Sans\");\n.all[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  padding-bottom: 100px;\n}\n.titulo[_ngcontent-%COMP%] {\n  text-align: center;\n}\nbody[_ngcontent-%COMP%] {\n  background: #001326;\n}\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n  box-sizing: border-box;\n}\n.honeycomb[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  list-style: none;\n  justify-content: center;\n  align-items: center;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0;\n  transform: translateY(34.375px);\n}\n.honeycomb-cell[_ngcontent-%COMP%] {\n  flex: 0 1 250px;\n  max-width: 250px;\n  height: 137.5px;\n  margin: 65.4761904762px 12.5px 25px;\n  position: relative;\n  padding: 0.5em;\n  text-align: center;\n  z-index: 1;\n}\n.honeycomb-cell__title[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  word-break: break-word;\n  \n  color: #fff;\n  font-weight: 600;\n  font-size: 18px;\n  transition: opacity 350ms;\n}\n.honeycomb-cell__title[_ngcontent-%COMP%]    > small[_ngcontent-%COMP%] {\n  font-weight: 300;\n  margin-top: 0.25em;\n}\n.honeycomb-cell__image[_ngcontent-%COMP%] {\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n}\n.honeycomb-cell[_ngcontent-%COMP%]::before, .honeycomb-cell[_ngcontent-%COMP%]::after {\n  content: \"\";\n}\n.honeycomb-cell[_ngcontent-%COMP%]::before, .honeycomb-cell[_ngcontent-%COMP%]::after, .honeycomb-cell__image[_ngcontent-%COMP%] {\n  top: -50%;\n  left: 0;\n  width: 100%;\n  height: 200%;\n  display: block;\n  position: absolute;\n  -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);\n          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);\n  z-index: -1;\n}\n.honeycomb-cell[_ngcontent-%COMP%]::before {\n  background: #fff;\n  transform: scale(1.055);\n}\n.honeycomb-cell[_ngcontent-%COMP%]::after {\n  background: #001326;\n  opacity: 0.5;\n  transition: opacity 350ms;\n}\n.honeycomb-cell[_ngcontent-%COMP%]:hover   .honeycomb-cell__title[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.honeycomb-cell[_ngcontent-%COMP%]:hover::before {\n  background: #001326;\n}\n.honeycomb-cell[_ngcontent-%COMP%]:hover::after {\n  opacity: 0;\n}\n.honeycomb__placeholder[_ngcontent-%COMP%] {\n  display: none;\n  opacity: 0;\n  width: 250px;\n  margin: 0 12.5px;\n}\n@media (max-width: 550px) {\n  .honeycomb-cell[_ngcontent-%COMP%] {\n    margin: 81.25px 25px;\n  }\n}\n@media (min-width: 550px) and (max-width: 825px) {\n  .honeycomb-cell[_ngcontent-%COMP%]:nth-child(3n) {\n    margin-right: calc(50% - 125px);\n    margin-left: calc(50% - 125px);\n  }\n\n  .honeycomb__placeholder[_ngcontent-%COMP%]:nth-child(3n+5) {\n    display: block;\n  }\n}\n@media (min-width: 825px) and (max-width: 1100px) {\n  .honeycomb-cell[_ngcontent-%COMP%]:nth-child(5n+4) {\n    margin-left: calc(50% - 275px);\n  }\n\n  .honeycomb-cell[_ngcontent-%COMP%]:nth-child(5n+5) {\n    margin-right: calc(50% - 275px);\n  }\n\n  .honeycomb__placeholder[_ngcontent-%COMP%]:nth-child(5n), .honeycomb__placeholder[_ngcontent-%COMP%]:nth-child(5n+3) {\n    display: block;\n  }\n}\n@media (min-width: 1100px) {\n  .honeycomb-cell[_ngcontent-%COMP%]:nth-child(7n+5) {\n    margin-left: calc(50% - 400px);\n  }\n\n  .honeycomb-cell[_ngcontent-%COMP%]:nth-child(7n+7), .honeycomb-cell[_ngcontent-%COMP%]:nth-child(7n+5):nth-last-child(2) {\n    margin-right: calc(50% - 400px);\n  }\n\n  .honeycomb__placeholder[_ngcontent-%COMP%]:nth-child(7n+7), .honeycomb__placeholder[_ngcontent-%COMP%]:nth-child(7n+9), .honeycomb__placeholder[_ngcontent-%COMP%]:nth-child(7n+11) {\n    display: block;\n  }\n}\n.mdc-image-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0 auto;\n  padding: 0;\n}\n.mdc-image-list__item[_ngcontent-%COMP%], .mdc-image-list__image-aspect-container[_ngcontent-%COMP%] {\n  position: relative;\n  box-sizing: border-box;\n}\n.mdc-image-list__item[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n.mdc-image-list__image[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.mdc-image-list__image-aspect-container[_ngcontent-%COMP%]   .mdc-image-list__image[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  height: 100%;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n.mdc-image-list__image-aspect-container[_ngcontent-%COMP%] {\n  padding-bottom: calc(100% / 1);\n}\n.mdc-image-list__image[_ngcontent-%COMP%] {\n  border-radius: 0;\n}\n.mdc-image-list--with-text-protection[_ngcontent-%COMP%]   .mdc-image-list__supporting[_ngcontent-%COMP%] {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.mdc-image-list__supporting[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n  \n  color: var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  padding: 8px 0;\n  line-height: 24px;\n}\n.mdc-image-list__label[_ngcontent-%COMP%] {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  \n  font-family: var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 1rem;\n  \n  font-size: var(--mdc-typography-subtitle1-font-size, 1rem);\n  line-height: 1.75rem;\n  \n  line-height: var(--mdc-typography-subtitle1-line-height, 1.75rem);\n  font-weight: 400;\n  \n  font-weight: var(--mdc-typography-subtitle1-font-weight, 400);\n  letter-spacing: 0.009375em;\n  \n  letter-spacing: var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);\n  text-decoration: inherit;\n  \n  -webkit-text-decoration: var(--mdc-typography-subtitle1-text-decoration, inherit);\n          text-decoration: var(--mdc-typography-subtitle1-text-decoration, inherit);\n  text-transform: inherit;\n  \n  text-transform: var(--mdc-typography-subtitle1-text-transform, inherit);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.mdc-image-list--with-text-protection[_ngcontent-%COMP%]   .mdc-image-list__supporting[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 48px;\n  padding: 0 16px;\n  background: rgba(0, 0, 0, 0.6);\n  color: #fff;\n}\n.mdc-image-list--masonry[_ngcontent-%COMP%] {\n  display: block;\n}\n.mdc-image-list--masonry[_ngcontent-%COMP%]   .mdc-image-list__item[_ngcontent-%COMP%] {\n  -moz-column-break-inside: avoid;\n       break-inside: avoid-column;\n}\n.mdc-image-list--masonry[_ngcontent-%COMP%]   .mdc-image-list__image[_ngcontent-%COMP%] {\n  display: block;\n  height: auto;\n}\nbody[_ngcontent-%COMP%] {\n  font-family: \"Barlow Semi Condensed\", sans-serif;\n}\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.mb[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  padding: 15px;\n  margin: 15px;\n}\n.block[_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);\n}\n.myImageList[_ngcontent-%COMP%] {\n  max-width: 80%;\n}\n.myImageList[_ngcontent-%COMP%]   .mdc-image-list__item[_ngcontent-%COMP%] {\n  width: calc( 100% / 5 - 4.2px );\n  margin: 2px;\n}\n.myImageList2[_ngcontent-%COMP%] {\n  max-width: 31%;\n}\n.myImageList2[_ngcontent-%COMP%]   .mdc-image-list__item[_ngcontent-%COMP%] {\n  width: calc( 100% / 2 - 4.5px );\n  margin: 2px;\n}\n.myImageTitle[_ngcontent-%COMP%] {\n  -moz-column-count: 1;\n       column-count: 1;\n  -moz-column-gap: 16px;\n       column-gap: 16px;\n  max-width: 19%;\n}\n.myImageTitle[_ngcontent-%COMP%]   .mdc-image-list__item[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n@media (max-width: 400px) {\n  .myImageList[_ngcontent-%COMP%] {\n    max-width: 90%;\n  }\n  .myImageList[_ngcontent-%COMP%]   .mdc-image-list__item[_ngcontent-%COMP%] {\n    width: calc( 100% / 3 - 4.3333333333px );\n    margin: 2px;\n  }\n\n  .myImageList2[_ngcontent-%COMP%] {\n    max-width: 60%;\n  }\n  .myImageList2[_ngcontent-%COMP%]   .mdc-image-list__item[_ngcontent-%COMP%] {\n    width: calc( 100% / 2 - 4.5px );\n    margin: 2px;\n  }\n\n  .myImageTitle[_ngcontent-%COMP%] {\n    -moz-column-count: 1;\n         column-count: 1;\n    -moz-column-gap: 16px;\n         column-gap: 16px;\n    max-width: 80%;\n  }\n  .myImageTitle[_ngcontent-%COMP%]   .mdc-image-list__item[_ngcontent-%COMP%] {\n    margin-bottom: 16px;\n  }\n}"]
        });
        return NormativityComponent;
      }();
      /***/

    },

    /***/
    "/Yd3":
    /*!********************************************************************!*\
      !*** ./src/app/invited/password-reset/password-reset.component.ts ***!
      \********************************************************************/

    /*! exports provided: PasswordResetComponent */

    /***/
    function Yd3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PasswordResetComponent", function () {
        return PasswordResetComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PasswordResetComponent = /*@__PURE__*/function () {
        var PasswordResetComponent = /*#__PURE__*/function () {
          function PasswordResetComponent() {
            _classCallCheck(this, PasswordResetComponent);
          }

          _createClass(PasswordResetComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }]);

          return PasswordResetComponent;
        }();

        PasswordResetComponent.ɵfac = function PasswordResetComponent_Factory(t) {
          return new (t || PasswordResetComponent)();
        };

        PasswordResetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: PasswordResetComponent,
          selectors: [["app-password-reset"]],
          decls: 2,
          vars: 0,
          template: function PasswordResetComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "password-reset works!");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
          },
          styles: [""]
        });
        return PasswordResetComponent;
      }();
      /***/

    },

    /***/
    "3Jiv":
    /*!***************************************************!*\
      !*** ./src/app/invited/invited-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: InvitedRoutingModule, routedComponents */

    /***/
    function Jiv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InvitedRoutingModule", function () {
        return InvitedRoutingModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "routedComponents", function () {
        return routedComponents;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _invited_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./invited.component */
      "jBrA");
      /* harmony import */


      var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./sign-up/sign-up.component */
      "E1f9");
      /* harmony import */


      var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./landing-page/landing-page.component */
      "r71e");
      /* harmony import */


      var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./sign-in/sign-in.component */
      "Doj/");
      /* harmony import */


      var _landing_page_somos_somos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./landing-page/somos/somos.component */
      "mf5a");
      /* harmony import */


      var _shared_services_sesionGuard_sesion_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../shared/services/sesionGuard/sesion.guard */
      "pGkB");

      var routes = [{
        path: '',
        component: _invited_component__WEBPACK_IMPORTED_MODULE_2__["InvitedComponent"],
        children: [{
          path: '',
          component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_4__["LandingPageComponent"]
        }, {
          path: 'somos',
          component: _landing_page_somos_somos_component__WEBPACK_IMPORTED_MODULE_6__["SomosComponent"]
        }, {
          path: 'sign-in',
          component: _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_5__["SignInComponent"],
          canActivate: [_shared_services_sesionGuard_sesion_guard__WEBPACK_IMPORTED_MODULE_7__["SesionGuard"]]
        }, {
          path: 'sign-up',
          component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_3__["SignUpComponent"],
          canActivate: [_shared_services_sesionGuard_sesion_guard__WEBPACK_IMPORTED_MODULE_7__["SesionGuard"]]
        }]
      }];

      var InvitedRoutingModule = /*@__PURE__*/function () {
        var InvitedRoutingModule = /*#__PURE__*/_createClass(function InvitedRoutingModule() {
          _classCallCheck(this, InvitedRoutingModule);
        });

        InvitedRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: InvitedRoutingModule
        });
        InvitedRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function InvitedRoutingModule_Factory(t) {
            return new (t || InvitedRoutingModule)();
          },
          providers: [_shared_services_sesionGuard_sesion_guard__WEBPACK_IMPORTED_MODULE_7__["SesionGuard"]],
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
        return InvitedRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InvitedRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();

      var routedComponents = [_invited_component__WEBPACK_IMPORTED_MODULE_2__["InvitedComponent"], _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_4__["LandingPageComponent"], _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_5__["SignInComponent"], _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_3__["SignUpComponent"]];
      /***/
    },

    /***/
    "70Q6":
    /*!*******************************************************************************************!*\
      !*** ./src/app/invited/landing-page/model-investigation/model-investigation.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: ModelInvestigationComponent */

    /***/
    function Q6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModelInvestigationComponent", function () {
        return ModelInvestigationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ModelInvestigationComponent = /*@__PURE__*/function () {
        var ModelInvestigationComponent = /*#__PURE__*/function () {
          function ModelInvestigationComponent() {
            _classCallCheck(this, ModelInvestigationComponent);
          }

          _createClass(ModelInvestigationComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }]);

          return ModelInvestigationComponent;
        }();

        ModelInvestigationComponent.ɵfac = function ModelInvestigationComponent_Factory(t) {
          return new (t || ModelInvestigationComponent)();
        };

        ModelInvestigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: ModelInvestigationComponent,
          selectors: [["app-model-investigation"]],
          decls: 16,
          vars: 0,
          consts: [["id", "model"], [1, "all"], [1, "container"], [1, "row"], [1, "col-lg-8", "col-md-6", "col-xs-12"], [1, "titulo"], [1, "parrafo"], [1, "col-lg-4", "col-md-6", "col-xs-12", "mx-auto", "d-block"], ["src", "https://cdn979857.fac.mil.co/sites/default/files/portfolio-images/kfit%2Bf16%20relampago%202.jpg", 1, "mx-auto", "d-block"]],
          template: function ModelInvestigationComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Modelo De Investigaci\xF3n Del Sistema Educativo De La Fuerza A\xE9rea Colombiana");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Por la cual se actualiza el \"MODELO DE INVESTIGACI\xD3N DEL SISTEMA EDUCATIVO DE LA FUERZA A\xC9REA COLOMBIANA\" (MOINV) FAC 6-05 (P\xFAblico), segunda edici\xF3n. ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " El comandante de la FUERZA A\xC9REA COLOMBIANA, en uso de sus facultades legales, le confiere el literal C, art\xEDculo 26 DECRETO No. 1605 DE 1998 \"REGLAMENTO DE PUBLICACIONES MILITARES FF.MM\". ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " DESCARGUE EL DOCUMENTO COMPLETO HACIENDO CLIC SOBRE LA IM\xC1GEN. ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
          },
          styles: [".all[_ngcontent-%COMP%] {\n  background-color: #fff !important;\n  padding: 40px 0px;\n  color: #000 !important;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 350px;\n  height: 350px;\n  border-radius: 200px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n@media (max-width: 600px) {\n  img[_ngcontent-%COMP%] {\n    padding: 10px 0px;\n    width: 250px;\n    height: 250px;\n    border-radius: 200px;\n  }\n}"]
        });
        return ModelInvestigationComponent;
      }();
      /***/

    },

    /***/
    "8g+Y":
    /*!***********************************************************************!*\
      !*** ./src/app/invited/landing-page/questions/questions.component.ts ***!
      \***********************************************************************/

    /*! exports provided: QuestionsComponent */

    /***/
    function gY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuestionsComponent", function () {
        return QuestionsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var QuestionsComponent = /*@__PURE__*/function () {
        var QuestionsComponent = /*#__PURE__*/function () {
          function QuestionsComponent() {
            _classCallCheck(this, QuestionsComponent);
          }

          _createClass(QuestionsComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }]);

          return QuestionsComponent;
        }();

        QuestionsComponent.ɵfac = function QuestionsComponent_Factory(t) {
          return new (t || QuestionsComponent)();
        };

        QuestionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: QuestionsComponent,
          selectors: [["app-questions"]],
          decls: 2,
          vars: 0,
          template: function QuestionsComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "questions works!");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
          },
          styles: [""]
        });
        return QuestionsComponent;
      }();
      /***/

    },

    /***/
    "9qPu":
    /*!*****************************************************************!*\
      !*** ./src/app/invited/landing-page/galery/galery.component.ts ***!
      \*****************************************************************/

    /*! exports provided: GaleryComponent */

    /***/
    function qPu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GaleryComponent", function () {
        return GaleryComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var GaleryComponent = /*@__PURE__*/function () {
        var GaleryComponent = /*#__PURE__*/function () {
          function GaleryComponent() {
            _classCallCheck(this, GaleryComponent);
          }

          _createClass(GaleryComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }]);

          return GaleryComponent;
        }();

        GaleryComponent.ɵfac = function GaleryComponent_Factory(t) {
          return new (t || GaleryComponent)();
        };

        GaleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: GaleryComponent,
          selectors: [["app-galery"]],
          decls: 22,
          vars: 0,
          consts: [["id", "gallery"], [1, "container"], [1, "row"], [1, "col-lg-3", "col-md-6"], [1, "gallery-item"], ["href", "../../../../assets/files/VOL1_06oct19.pdf", "download", "VOL1_06oct2019.pdf", 1, "gallery-popup"], ["src", "../../../assets/images/gallery/VOL1_06oct2019.jpg", "alt", ""], ["href", "../../../../assets/files/VOL2_06oct2019.pdf", "download", "VOL2_06oct2019.pdf", 1, "gallery-popup"], ["src", "../../../assets/images/gallery/VOL2_06oct2019.jpg", "alt", ""], [1, "col-lg-6", "col-md-12"], [1, "titulo"], [1, "parrafo"]],
          template: function GaleryComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Publicaciones");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "El Espacio Una Oportunidad Infinita Para Colombia.");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " La Fuerza A\xE9rea Colombiana presenta la obra literaria \u201CEl Espacio Exterior Una Oportunidad Infinita Para Colombia\u201D, esta obra hace parte de la conmemoraci\xF3n de los 100 a\xF1os de la Instituci\xF3n al servicio del Pa\xEDs.");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Esta obra corresponde a un esfuerzo acad\xE9mico y trabajo de investigaci\xF3n documental, donde se destaca la cooperaci\xF3n de los grupos de investigaci\xF3n de la Fuerza A\xE9rea Colombiana y la Escuela Superior de Guerra, adelantado de manera sostenida, la cual, contiene dos vol\xFAmenes, tanto digitales como impresos, el Volumen 1 titulado: \u201CMirando Hacia Las Estrellas: Una Constante Necesidad Humana\u201D y un Volumen 2 titulado: \u201CEl Cielo No Es L\xEDmite: El Futuro Estelar de Colombia\u201D. ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
          },
          styles: [".parrafo[_ngcontent-%COMP%] {\n  color: #FFF;\n}\n\n#gallery[_ngcontent-%COMP%] {\n  background: #001326;\n  padding: 60px 0 0 0;\n  color: white;\n  padding-bottom: 60px;\n}\n\n#gallery[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n\n#gallery[_ngcontent-%COMP%]   .gallery-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 1;\n  transition: all ease-in-out 0.4s;\n}\n\n#gallery[_ngcontent-%COMP%]   .gallery-item[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n  padding: 10px 0px;\n  vertical-align: middle;\n  text-align: center;\n}\n\n#gallery[_ngcontent-%COMP%]   .gallery-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transition: all ease-in-out 0.4s;\n  width: 70%;\n  height: auto;\n}\n\n#gallery[_ngcontent-%COMP%]   .gallery-item[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n\n#gallery[_ngcontent-%COMP%]   .gallery-item[_ngcontent-%COMP%]:hover   .gallery-overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n  background: rgba(0, 0, 0, 0.7);\n}"]
        });
        return GaleryComponent;
      }();
      /***/

    },

    /***/
    "Bvzc":
    /*!*****************************************************************************************!*\
      !*** ./src/app/invited/landing-page/navbar-landingpage/navbar-landingpage.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: NavbarLandingpageComponent */

    /***/
    function Bvzc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarLandingpageComponent", function () {
        return NavbarLandingpageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var NavbarLandingpageComponent = /*@__PURE__*/function () {
        var NavbarLandingpageComponent = /*#__PURE__*/function () {
          function NavbarLandingpageComponent() {
            _classCallCheck(this, NavbarLandingpageComponent);

            this.currentSection = 'home';
          }

          _createClass(NavbarLandingpageComponent, [{
            key: "windowScroll",
            value: function windowScroll() {
              var navbar = document.getElementById('navbar');

              if (document.body.scrollTop >= 50 || document.documentElement.scrollTop > 50) {
                navbar.classList.add('nav-sticky');
              } else {
                navbar.classList.remove('nav-sticky');
              }
            }
          }, {
            key: "onSectionChange",
            value: function onSectionChange(sectionId) {
              this.currentSection = sectionId;
            }
          }, {
            key: "toSomos",
            value: function toSomos() {
              document.getElementById('somos').scrollIntoView({
                behavior: 'smooth',
                block: 'center'
              });
            }
          }, {
            key: "toModelo",
            value: function toModelo() {
              document.getElementById('model').scrollIntoView({
                behavior: 'smooth',
                block: 'center'
              });
            }
          }, {
            key: "toFunciones",
            value: function toFunciones() {
              document.getElementById('functions').scrollIntoView({
                behavior: 'smooth',
                block: 'center'
              });
            }
          }, {
            key: "toNormativas",
            value: function toNormativas() {
              document.getElementById('capacidades').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }
          }, {
            key: "toPublicaciones",
            value: function toPublicaciones() {
              document.getElementById('gallery').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }
          }, {
            key: "toMision",
            value: function toMision() {
              document.getElementById('mision').scrollIntoView({
                behavior: 'smooth',
                block: 'center'
              });
            }
          }, {
            key: "toContacto",
            value: function toContacto() {
              document.getElementById('contact').scrollIntoView({
                behavior: 'smooth',
                block: 'center'
              });
            }
          }, {
            key: "toConvocatorias",
            value: function toConvocatorias() {
              document.getElementById('convocatorias').scrollIntoView({
                behavior: 'smooth',
                block: 'center'
              });
            }
          }]);

          return NavbarLandingpageComponent;
        }();

        NavbarLandingpageComponent.ɵfac = function NavbarLandingpageComponent_Factory(t) {
          return new (t || NavbarLandingpageComponent)();
        };

        NavbarLandingpageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: NavbarLandingpageComponent,
          selectors: [["app-navbar-landingpage"]],
          decls: 48,
          vars: 0,
          consts: [["id", "navbar", 1, "navbar", "navbar-expand-lg", "fixed-top", "navbar-custom", "sticky-dark", "nav-sticky", 2, "background-color", "rgba(0, 0, 0, 0.49)", 3, "scroll"], ["href", "/"], ["width", "200px", "height", "auto", "src", "https://cdn979857.fac.mil.co/sites/default/files/marca%20fac%20gris%20fn.png", 1, "logo"], ["id", "navbarCollapse", 1, "social", "btn-group-vertical"], [1, "espacio"], ["mat-button", "", 1, "Icon-1", 3, "click"], ["mat-button", "", 1, "Icon-2", 3, "click"], ["mat-button", "", 1, "Icon-3", 3, "click"], ["mat-button", "", 1, "Icon-4", 3, "click"], ["mat-button", "", 1, "Icon-5", 3, "click"], ["mat-button", "", 1, "Icon-6", 3, "click"], ["mat-button", "", "routerLink", "sign-in", 1, "Icon-7"]],
          template: function NavbarLandingpageComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function NavbarLandingpageComponent_Template_nav_scroll_0_listener() {
                return ctx.windowScroll();
              }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarLandingpageComponent_Template_a_click_8_listener() {
                return ctx.toSomos();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " done_all");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "SOMOS");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarLandingpageComponent_Template_a_click_14_listener() {
                return ctx.toModelo();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " attachment");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "MODELO");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarLandingpageComponent_Template_a_click_20_listener() {
                return ctx.toFunciones();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " help_outline");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "FUNCIONES");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarLandingpageComponent_Template_a_click_26_listener() {
                return ctx.toNormativas();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-icon");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " stars");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "CAPACIDADES");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarLandingpageComponent_Template_a_click_32_listener() {
                return ctx.toPublicaciones();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-icon");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " import_contacts");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "PUBLICACIONES");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarLandingpageComponent_Template_a_click_38_listener() {
                return ctx.toMision();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-icon");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " place");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "MISION");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-icon");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " supervisor_account");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "LOGIN");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
          },
          directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatAnchor"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
          styles: ["@charset \"UTF-8\";\n.navbar[_ngcontent-%COMP%] {\n  max-height: 100px;\n  padding: 0px 0px 0px 20px;\n  pointer-events: none;\n}\n.ytp-title-channel[_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n\n.nav-list[_ngcontent-%COMP%] {\n  background-color: #3F51B5 !important;\n  \n}\n.navbar-main[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  width: 90%;\n}\n.govco-header[_ngcontent-%COMP%] {\n  width: 100%;\n  top: 0px;\n  z-index: 1000;\n}\n.govco-header[_ngcontent-%COMP%]   .navbar-main[_ngcontent-%COMP%] {\n  overflow: hidden;\n  background-color: rgba(0, 0, 0, 0.254);\n  padding: 0;\n  color: white;\n}\n.govco-header[_ngcontent-%COMP%]   .navbar-main[_ngcontent-%COMP%]   .p-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: right;\n}\n.govco-header[_ngcontent-%COMP%]   .icono[_ngcontent-%COMP%] {\n  display: none;\n}\n.govco-header[_ngcontent-%COMP%]   .navbar-franja[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 11px;\n  background-color: red;\n}\n.example-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.example-is-mobile[_ngcontent-%COMP%]   .example-toolbar[_ngcontent-%COMP%] {\n  position: fixed;\n  \n  z-index: 2;\n}\nh1.example-app-name[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.example-sidenav-container[_ngcontent-%COMP%] {\n  \n  flex: 1;\n}\n.example-is-mobile[_ngcontent-%COMP%]   .example-sidenav-container[_ngcontent-%COMP%] {\n  \n  flex: 1 0 auto;\n}\n.lista[_ngcontent-%COMP%] {\n  background-color: #3F51B5;\n}\n.listado[_ngcontent-%COMP%] {\n  color: white;\n}\n.logo[_ngcontent-%COMP%] {\n  padding-top: 0px;\n  align-content: center;\n}\n\n.social[_ngcontent-%COMP%] {\n  height: 90vh;\n  position: fixed;\n  \n  right: 0;\n  \n  bottom: 0;\n  \n  z-index: 2000;\n  \n}\n.espacio[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  z-index: 2000;\n}\n.social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #000;\n  padding: 0px 5px 0px 40px;\n  text-decoration: none;\n  transition: all 500ms ease;\n  \n  border-radius: 0px;\n}\n.social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .Icon-1[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #0b3f73 0%, rgba(0, 0, 0, 0.9319406574) 100%);\n  height: 100%;\n  border: 1px solid #ffffff;\n}\n.social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .Icon-2[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #b50000 0%, rgba(0, 0, 0, 0.9319406574) 100%);\n  height: 100%;\n  border: 1px solid #ffffff;\n}\n.social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .Icon-3[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #be6b01 0%, rgba(0, 0, 0, 0.9319406574) 100%);\n  height: 100%;\n  border: 1px solid #ffffff;\n}\n.social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .Icon-4[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #73300B 0%, rgba(0, 0, 0, 0.9319406574) 100%);\n  height: 100%;\n  border: 1px solid #ffffff;\n}\n.social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .Icon-5[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #be6b01 0%, rgba(0, 0, 0, 0.9319406574) 100%);\n  height: 100%;\n  border: 1px solid #ffffff;\n}\n.social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .Icon-6[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #b50000 0%, rgba(0, 0, 0, 0.9319406574) 100%);\n  height: 100%;\n  border: 1px solid #ffffff;\n}\n.social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .Icon-7[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #0b3f73 0%, rgba(0, 0, 0, 0.9319406574) 100%);\n  height: 100%;\n  border: 1px solid #ffffff;\n}\n.social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  padding: 0px 0px 0px 0px;\n  \n  right: 150px;\n  width: 200px;\n  height: 40px;\n}"]
        });
        return NavbarLandingpageComponent;
      }();
      /***/

    },

    /***/
    "Doj/":
    /*!******************************************************!*\
      !*** ./src/app/invited/sign-in/sign-in.component.ts ***!
      \******************************************************/

    /*! exports provided: SignInComponent */

    /***/
    function Doj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignInComponent", function () {
        return SignInComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _core_consts_alert_statuses_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../@core/consts/alert-statuses.const */
      "udLm");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../@core/services/auth/auth.service */
      "Gpft");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      function SignInComponent_div_14_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Por favor ingrese un formato de email v\xE1lido");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SignInComponent_div_14_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\xC9ste campo es requerido");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SignInComponent_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignInComponent_div_14_span_1_Template, 2, 0, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignInComponent_div_14_span_2_Template, 2, 0, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.email().errors["email"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.email().errors["required"]);
        }
      }

      function SignInComponent_div_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "!Usuario Incorrecto!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignInComponent_div_15_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.CloseAlert();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SignInComponent_div_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "!Usuario Existente!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Faltan permisos ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignInComponent_div_16_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.CloseAlert();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SignInComponent_div_25_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "La contrase\xF1a debe contener m\xEDnimo 6 caracteres ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SignInComponent_div_25_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\xC9ste campo es requerido");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SignInComponent_div_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignInComponent_div_25_span_1_Template, 2, 0, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignInComponent_div_25_span_2_Template, 2, 0, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.password().errors["minlength"] && ctx_r3.password().dirty);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.password().errors["required"]);
        }
      }

      function SignInComponent_div_26_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "!Contrase\xF1a erronea!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignInComponent_div_26_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13.CloseAlert();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var SignInComponent = /*@__PURE__*/function () {
        var SignInComponent = /*#__PURE__*/function () {
          function SignInComponent(router, fb, authService) {
            var _this = this;

            _classCallCheck(this, SignInComponent);

            this.router = router;
            this.fb = fb;
            this.authService = authService;
            this.hide = true;
            this.CorrI = false;
            this.ClaveI = false;
            this.CorrCN = false;
            this.showAlertBox = false;

            this.email = function () {
              return _this.LoginForm.controls.email;
            };

            this.password = function () {
              return _this.LoginForm.controls.password;
            };
          }

          _createClass(SignInComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.buildForm();
            }
          }, {
            key: "buildForm",
            value: function buildForm() {
              this.LoginForm = this.fb.group({
                email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email])],
                password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)])]
              });
            }
          }, {
            key: "onSubmit",
            value: function onSubmit() {
              var _this2 = this;

              var datos = this.LoginForm.value;
              var email = datos['email'].toLowerCase();
              var password = datos['password'];
              this.authService.signIn(email, password).subscribe(function (res) {
                _this2.showSuccessAlert();

                _this2.goToDashboard();
              }, function (err) {
                if (err.status === 404) {
                  _this2.showUserDoesntExistsAlert();

                  _this2.CorrI = true;
                } else if (err.status === 403) {
                  _this2.showUserNotActivedAlert();

                  _this2.CorrCN = true;
                } else if (err.status === 400) {
                  _this2.showUserNotActivedAlert();

                  _this2.ClaveI = true;
                }
              });
            }
          }, {
            key: "CloseAlert",
            value: function CloseAlert() {
              this.CorrI = false;
              this.ClaveI = false;
              this.CorrCN = false;
            }
          }, {
            key: "showSuccessAlert",
            value: function showSuccessAlert() {
              this.showAlert();
              this.alert = {
                type: _core_consts_alert_statuses_const__WEBPACK_IMPORTED_MODULE_2__["alertStatuses"].success,
                message: 'Bienvenido!'
              };
            }
          }, {
            key: "showUserDoesntExistsAlert",
            value: function showUserDoesntExistsAlert() {
              this.showAlert();
              this.alert = {
                type: _core_consts_alert_statuses_const__WEBPACK_IMPORTED_MODULE_2__["alertStatuses"].danger,
                message: 'El usuario ingresado no existe.'
              };
            }
          }, {
            key: "showUserNotActivedAlert",
            value: function showUserNotActivedAlert() {
              this.showAlert();
              this.alert = {
                type: _core_consts_alert_statuses_const__WEBPACK_IMPORTED_MODULE_2__["alertStatuses"].danger,
                message: 'El usuario no se encuentra activo, por favor contacte al administrador.'
              };
            }
          }, {
            key: "showUserContrActivedAlert",
            value: function showUserContrActivedAlert() {
              this.showAlert();
              this.alert = {
                type: _core_consts_alert_statuses_const__WEBPACK_IMPORTED_MODULE_2__["alertStatuses"].danger,
                message: 'La contraseña equivocada'
              };
            }
          }, {
            key: "showAlert",
            value: function showAlert() {
              this.showAlertBox = true;
            }
          }, {
            key: "hideAlert",
            value: function hideAlert() {
              this.showAlertBox = false;
            }
          }, {
            key: "goToSignUp",
            value: function goToSignUp() {
              this.router.navigate(['home/sign-up']);
            }
          }, {
            key: "goToDashboard",
            value: function goToDashboard() {
              this.router.navigate(['pages']);
            }
          }]);

          return SignInComponent;
        }();

        SignInComponent.ɵfac = function SignInComponent_Factory(t) {
          return new (t || SignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]));
        };

        SignInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: SignInComponent,
          selectors: [["app-sign-in"]],
          decls: 35,
          vars: 11,
          consts: [[1, "all"], [1, "contenedor"], [1, "panel-informativo"], [1, "p-col-12", "p-md-4", "col-xs-12"], [1, "login-card"], [1, "icono"], ["src", "https://cdn979857.fac.mil.co/sites/default/files/marca%20fac%20gris%20fn.png", "alt", "", "height", "50px", "width", "auto"], [1, "example-form", 3, "formGroup"], ["formControlName", "email", "name", "email", "type", "email", "placeholder", "Ej. alguien@example.com", "matInput", "", "required", ""], ["class", "form-validation-message", 4, "ngIf"], ["class", "alert", "role", "alert", 4, "ngIf"], [1, "example-container"], ["minlength", "6", "type", "password", "name", "password", "formControlName", "password", "matInput", "", "required", "", 3, "type"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], ["mat-flat-button", "", "target", "_blank", 3, "click"], [1, "form-validation-message"], [4, "ngIf"], ["role", "alert", 1, "alert"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], ["class", "Tama\xF1oText", 4, "ngIf"], [1, "Tama\xF1oText"]],
          template: function SignInComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Email");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SignInComponent_div_14_Template, 3, 2, "div", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SignInComponent_div_15_Template, 6, 0, "div", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SignInComponent_div_16_Template, 7, 0, "div", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Password");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignInComponent_Template_button_click_22_listener() {
                return ctx.hide = !ctx.hide;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, SignInComponent_div_25_Template, 3, 2, "div", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, SignInComponent_div_26_Template, 6, 0, "div", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignInComponent_Template_button_click_28_listener() {
                return ctx.onSubmit();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Iniciar Sesi\xF3n ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " \xBFNo tienes una cuenta?");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignInComponent_Template_button_click_33_listener() {
                return ctx.goToSignUp();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Registro");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.LoginForm);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.email().invalid && (ctx.email().dirty || ctx.email().touched));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.CorrI);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.CorrCN);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.password().invalid && (ctx.password().dirty || ctx.password().touched));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ClaveI);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.LoginForm.valid);
            }
          },
          directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"]],
          styles: ["small[_ngcontent-%COMP%] {\n  padding: 0% !important;\n}\n\n.panel-informativo[_ngcontent-%COMP%] {\n  background-color: #ffffff60;\n  border-radius: 0rem;\n  padding: 0;\n  width: 450px;\n  height: 100vh;\n}\n\n.all[_ngcontent-%COMP%] {\n  background-image: url(https://mir-s3-cdn-cf.behance.net/project_modules/fs/c90a77103652341.5f5168ce9ba4e.jpg);\n  background-size: cover !important;\n  max-width: 100vw;\n  max-height: 100vh;\n}\n\n.contenedor[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: left;\n  align-items: left;\n}\n\n.titulo-bienvenida[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n\n.login-card[_ngcontent-%COMP%] {\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100vh;\n}\n\n.login-card[_ngcontent-%COMP%]   .icono[_ngcontent-%COMP%] {\n  \n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 6rem;\n  height: 6rem;\n}"]
        });
        return SignInComponent;
      }();
      /***/

    },

    /***/
    "E1f9":
    /*!******************************************************!*\
      !*** ./src/app/invited/sign-up/sign-up.component.ts ***!
      \******************************************************/

    /*! exports provided: SignUpComponent */

    /***/
    function E1f9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignUpComponent", function () {
        return SignUpComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _core_consts_doc_types_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../@core/consts/doc-types.const */
      "mcF/");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _password_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./password-validation */
      "dl4y");
      /* harmony import */


      var _core_consts_alert_statuses_const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../@core/consts/alert-statuses.const */
      "udLm");
      /* harmony import */


      var _core_services_roles_roles_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../@core/services/roles/roles.service */
      "/+ss");
      /* harmony import */


      var src_app_core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/@core/services/auth/auth.service */
      "Gpft");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "/1cH");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1"); //import { Component, OnInit } from '@angular/core';
      //import { Router } from '@angular/router';


      function SignUpComponent_mat_option_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r4, " ");
        }
      }

      function SignUpComponent_div_45_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "La contrase\xF1a es muy corta");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SignUpComponent_div_45_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\xC9ste campo es requerido");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SignUpComponent_div_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignUpComponent_div_45_span_1_Template, 2, 0, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignUpComponent_div_45_span_2_Template, 2, 0, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.password().errors["minlength"] && ctx_r2.password().dirty);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.password().errors["required"]);
        }
      }

      function SignUpComponent_div_54_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "La contrase\xF1a es muy corta");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SignUpComponent_div_54_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\xC9ste campo es requerido");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SignUpComponent_div_54_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Las contrase\xF1as no coinciden ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SignUpComponent_div_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignUpComponent_div_54_span_1_Template, 2, 0, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignUpComponent_div_54_span_2_Template, 2, 0, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SignUpComponent_div_54_div_3_Template, 2, 0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.confirmPassword().errors["minlength"] && ctx_r3.password().dirty);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.confirmPassword().errors["required"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.confirmPassword().errors == null ? null : ctx_r3.confirmPassword().errors.MatchPassword);
        }
      }

      var SignUpComponent = /*@__PURE__*/function () {
        var SignUpComponent = /*#__PURE__*/function () {
          function SignUpComponent(fb, roleService, authService, router) {
            var _this3 = this;

            _classCallCheck(this, SignUpComponent);

            this.fb = fb;
            this.roleService = roleService;
            this.authService = authService;
            this.router = router;
            this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
            this.options = ['Cédula de Ciudadanía', 'Pasaporte'];
            this.hide = true;
            this.hide2 = true;
            this.docTypes = _core_consts_doc_types_const__WEBPACK_IMPORTED_MODULE_2__["docTypes"];
            this.showAlertBox = false;

            this.docType = function () {
              return _this3.registerForm.controls.docType;
            };

            this.email = function () {
              return _this3.registerForm.controls.email;
            };

            this.identification = function () {
              return _this3.registerForm.controls.identification;
            };

            this.names = function () {
              return _this3.registerForm.controls.names;
            };

            this.surname = function () {
              return _this3.registerForm.controls.surname;
            };

            this.password = function () {
              return _this3.registerForm.controls.password;
            };

            this.confirmPassword = function () {
              return _this3.registerForm.controls.confirmPassword;
            };
          }

          _createClass(SignUpComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this4 = this;

              this.buildForm();
              this.getDefaultRole();
              this.filteredOptions = this.myControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) {
                return _this4._filter(value);
              }));
            }
          }, {
            key: "buildForm",
            value: function buildForm() {
              this.registerForm = this.fb.group({
                email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email])],
                docType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                identification: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                names: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                surname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)])],
                confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)])]
              }, {
                validator: _password_validation__WEBPACK_IMPORTED_MODULE_4__["PasswordValidation"].MatchPassword
              });
            }
          }, {
            key: "getDefaultRole",
            value: function getDefaultRole() {
              var _this5 = this;

              this.roleService.getDefaultRole().subscribe(function (role) {
                _this5.defaultRole = role;
                console.log('default role :: ', role);
              });
            }
          }, {
            key: "onSubmit",
            value: function onSubmit() {
              var _this6 = this;

              var newUser = this.getNewUserModel();
              console.log('newUser:: ', newUser);
              this.authService.signUp(newUser).subscribe(function (_) {
                return _this6.showSuccessAlert();
              }, function (err) {
                return err.status === 409 ? _this6.showUserExistsAlert() : _this6.showGeneralError();
              });
              this.router.navigate(['home/sign-in']);
            }
          }, {
            key: "getNewUserModel",
            value: function getNewUserModel() {
              var docType = this.docType().value;
              var email = this.email().value.toLowerCase();
              var identification = this.identification().value;
              var names = this.names().value;
              var surname = this.surname().value;
              var password = this.password().value;
              var isUser = true;

              if (!this.defaultRole._id) {
                console.error('Default role not provided');
                this.showGeneralError();
              }

              return {
                docType: docType,
                email: email,
                identification: identification,
                profile: {
                  names: names,
                  surname: surname
                },
                password: password,
                isUser: isUser,
                role: this.defaultRole._id
              };
            }
          }, {
            key: "showGeneralError",
            value: function showGeneralError() {
              this.showAlert();
              this.alert = {
                type: _core_consts_alert_statuses_const__WEBPACK_IMPORTED_MODULE_5__["alertStatuses"].danger,
                message: 'No se pudo realizar la acción correctamente'
              };
            }
          }, {
            key: "showSuccessAlert",
            value: function showSuccessAlert() {
              this.showAlert();
              this.alert = {
                type: _core_consts_alert_statuses_const__WEBPACK_IMPORTED_MODULE_5__["alertStatuses"].success,
                message: 'Usuario registrado existosamente, ' + 'deberá esperar autorización del administrador para poder iniciar sesión.'
              };
            }
          }, {
            key: "showUserExistsAlert",
            value: function showUserExistsAlert() {
              this.showAlert();
              this.alert = {
                type: _core_consts_alert_statuses_const__WEBPACK_IMPORTED_MODULE_5__["alertStatuses"].danger,
                message: 'El usuario ingresado ya existe'
              };
            }
          }, {
            key: "showAlert",
            value: function showAlert() {
              this.showAlertBox = true;
            }
          }, {
            key: "_filter",
            value: function _filter(value) {
              var filterValue = value.toLowerCase();
              return this.options.filter(function (option) {
                return option.toLowerCase().indexOf(filterValue) === 0;
              });
            }
          }]);

          return SignUpComponent;
        }();

        SignUpComponent.ɵfac = function SignUpComponent_Factory(t) {
          return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_roles_roles_service__WEBPACK_IMPORTED_MODULE_6__["RolesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]));
        };

        SignUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: SignUpComponent,
          selectors: [["app-sign-up"]],
          decls: 57,
          vars: 16,
          consts: [[1, "all"], [1, "contenedor"], [1, "panel-informativo"], [1, "p-col-12", "p-md-4", "col-xs-12"], [1, "login-card"], [1, "icono"], ["src", "https://cdn979857.fac.mil.co/sites/default/files/marca%20fac%20gris%20fn.png", "alt", "", "height", "50px", "width", "auto"], [1, "example-form", 3, "formGroup"], ["formControlName", "email", "name", "email", "type", "email", "placeholder", "Ej. alguien@example.com", "matInput", "", "required", ""], [1, "example-container"], [1, "example-full-width"], ["type", "text", "formControlName", "docType", "name", "docType", "placeholder", "Elige uno", "aria-label", "Number", "matInput", "", 3, "matAutocomplete"], ["autoActiveFirstOption", ""], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "identification", "type", "number", "name", "identification", "placeholder", "Ingrese su identificacion", "matInput", "", "required", ""], ["formControlName", "names", "type", "text", "name", "names", "placeholder", "Ingrese sus nombre", "matInput", "", "required", ""], ["formControlName", "surname", "type", "text", "name", "surname", "placeholder", "Ingrese sus apellidos", "matInput", "", "required", ""], ["minlength", "6", "type", "password", "name", "password", "formControlName", "password", "matInput", "", "required", "", 3, "type"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], [4, "ngIf"], ["minlength", "6", "type", "Password", "name", "confirmPassword", "formControlName", "confirmPassword", "matInput", "", "required", "", 3, "type"], ["class", "form-validation-message", 4, "ngIf"], ["mat-raised-button", "", "type", "submit", 1, "btn", "btn-primary", "btn-lg", 3, "disabled", "click"], [3, "value"], [1, "form-validation-message"]],
          template: function SignUpComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Email");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-autocomplete", 12, 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SignUpComponent_mat_option_20_Template, 2, 2, "mat-option", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "async");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Identificacion");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Nombres");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-form-field");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Apellidos");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-form-field");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Contrase\xF1a");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignUpComponent_Template_button_click_42_listener() {
                return ctx.hide = !ctx.hide;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-icon");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, SignUpComponent_div_45_Template, 3, 2, "div", 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-form-field");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Confirmar Contrase\xF1a");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignUpComponent_Template_button_click_51_listener() {
                return ctx.hide2 = !ctx.hide2;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-icon");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, SignUpComponent_div_54_Template, 4, 3, "div", 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 23);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignUpComponent_Template_button_click_55_listener() {
                return ctx.onSubmit();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Registrarse ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            }

            if (rf & 2) {
              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 14, ctx.filteredOptions));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.password().invalid && (ctx.password().dirty || ctx.password().touched));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.hide2 ? "Password" : "text");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "Hide Password")("aria-pressed", ctx.hide);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hide2 ? "visibility_off" : "visibility");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.confirmPassword().invalid && (ctx.confirmPassword().dirty || ctx.confirmPassword().touched));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.registerForm.valid);
            }
          },
          directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteTrigger"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOption"]],
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["AsyncPipe"]],
          styles: [".panel-informativo[_ngcontent-%COMP%] {\n  background-color: #ffffff60;\n  border-radius: 0rem;\n  padding: 0;\n  width: 450px;\n  height: 100vh;\n}\n\n.all[_ngcontent-%COMP%] {\n  background-image: url(https://mir-s3-cdn-cf.behance.net/project_modules/fs/c90a77103652341.5f5168ce9ba4e.jpg);\n  background-size: cover !important;\n  width: 100vw;\n  height: 100vh;\n}\n\n.contenedor[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  justify-content: left;\n  align-items: left;\n}\n\n.titulo-bienvenida[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n\n.login-card[_ngcontent-%COMP%] {\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100vh;\n}\n\n.login-card[_ngcontent-%COMP%]   .icono[_ngcontent-%COMP%] {\n  \n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 6rem;\n  height: 6rem;\n}"]
        });
        return SignUpComponent;
      }();
      /***/

    },

    /***/
    "KD6t":
    /*!*******************************************!*\
      !*** ./src/app/invited/invited.module.ts ***!
      \*******************************************/

    /*! exports provided: InvitedModule */

    /***/
    function KD6t(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InvitedModule", function () {
        return InvitedModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _invited_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./invited-routing.module */
      "3Jiv");
      /* harmony import */


      var _landing_page_footer_landingpage_footer_landingpage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./landing-page/footer-landingpage/footer-landingpage.component */
      "p16/");
      /* harmony import */


      var _landing_page_contact_landingpage_contact_landingpage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./landing-page/contact-landingpage/contact-landingpage.component */
      "USiE");
      /* harmony import */


      var _landing_page_mision_mision_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./landing-page/mision/mision.component */
      "Wkfz");
      /* harmony import */


      var _landing_page_galery_galery_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./landing-page/galery/galery.component */
      "9qPu");
      /* harmony import */


      var _landing_page_questions_questions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./landing-page/questions/questions.component */
      "8g+Y");
      /* harmony import */


      var _landing_page_model_investigation_model_investigation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./landing-page/model-investigation/model-investigation.component */
      "70Q6");
      /* harmony import */


      var _landing_page_info_fac_info_fac_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./landing-page/info-fac/info-fac.component */
      "bul9");
      /* harmony import */


      var _landing_page_somos_somos_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./landing-page/somos/somos.component */
      "mf5a");
      /* harmony import */


      var _landing_page_functions_functions_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./landing-page/functions/functions.component */
      "Lhmz");
      /* harmony import */


      var _landing_page_normativity_normativity_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./landing-page/normativity/normativity.component */
      "+cXU");
      /* harmony import */


      var _landing_page_slider_slider_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./landing-page/slider/slider.component */
      "Usz4");
      /* harmony import */


      var _landing_page_navbar_landingpage_navbar_landingpage_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./landing-page/navbar-landingpage/navbar-landingpage.component */
      "Bvzc");
      /* harmony import */


      var _landing_page_convocatory_convocatory_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./landing-page/convocatory/convocatory.component */
      "doQq");
      /* harmony import */


      var _password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./password-reset/password-reset.component */
      "/Yd3");
      /* harmony import */


      var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./sign-in/sign-in.component */
      "Doj/");
      /* harmony import */


      var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./sign-up/sign-up.component */
      "E1f9");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "zkoq");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/flex-layout */
      "YUcS");
      /* harmony import */


      var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @nicky-lenaers/ngx-scroll-to */
      "KZTq");
      /* harmony import */


      var _core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ../@core/services/auth/auth.service */
      "Gpft");
      /* harmony import */


      var _core_services__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ../@core/services */
      "5mMP");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "/1cH");
      /* harmony import */


      var _invited_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ./invited.component */
      "jBrA");
      /* harmony import */


      var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ./landing-page/landing-page.component */
      "r71e"); // import { ThemeModule } from '../@theme/theme.module';
      // import { Ng2SmartTableModule } from 'ng2-smart-table';
      // import { SharedModule } from '../shared/shared.module';
      //MODULOS MATERIAL


      var InvitedModule = /*@__PURE__*/function () {
        var InvitedModule = /*#__PURE__*/_createClass(function InvitedModule() {
          _classCallCheck(this, InvitedModule);
        });

        InvitedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: InvitedModule
        });
        InvitedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function InvitedModule_Factory(t) {
            return new (t || InvitedModule)();
          },
          providers: [_core_services__WEBPACK_IMPORTED_MODULE_33__["ApiService"], _core_services__WEBPACK_IMPORTED_MODULE_33__["RequestService"], _core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_32__["AuthService"], _core_services__WEBPACK_IMPORTED_MODULE_33__["AuthStorageService"], _core_services__WEBPACK_IMPORTED_MODULE_33__["LocalStorageService"], _core_services__WEBPACK_IMPORTED_MODULE_33__["MemoryStorageService"]],
          imports: [[// ThemeModule,
          _angular_common__WEBPACK_IMPORTED_MODULE_18__["CommonModule"], _invited_routing_module__WEBPACK_IMPORTED_MODULE_1__["InvitedRoutingModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__["MatToolbarModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__["MatMenuModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_23__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_24__["MatButtonModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_25__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_26__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_28__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_29__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_29__["FormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_30__["FlexLayoutModule"], _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_31__["ScrollToModule"], // Ng2SmartTableModule,
          _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_34__["MatAutocompleteModule"]]]
        });
        return InvitedModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InvitedModule, {
          declarations: [_invited_component__WEBPACK_IMPORTED_MODULE_35__["InvitedComponent"], _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_36__["LandingPageComponent"], _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_16__["SignInComponent"], _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_17__["SignUpComponent"], _landing_page_footer_landingpage_footer_landingpage_component__WEBPACK_IMPORTED_MODULE_2__["FooterLandingpageComponent"], _landing_page_contact_landingpage_contact_landingpage_component__WEBPACK_IMPORTED_MODULE_3__["ContactLandingpageComponent"], _landing_page_mision_mision_component__WEBPACK_IMPORTED_MODULE_4__["MisionComponent"], _landing_page_galery_galery_component__WEBPACK_IMPORTED_MODULE_5__["GaleryComponent"], _landing_page_questions_questions_component__WEBPACK_IMPORTED_MODULE_6__["QuestionsComponent"], _landing_page_model_investigation_model_investigation_component__WEBPACK_IMPORTED_MODULE_7__["ModelInvestigationComponent"], _landing_page_info_fac_info_fac_component__WEBPACK_IMPORTED_MODULE_8__["InfoFacComponent"], _landing_page_somos_somos_component__WEBPACK_IMPORTED_MODULE_9__["SomosComponent"], _landing_page_functions_functions_component__WEBPACK_IMPORTED_MODULE_10__["FunctionsComponent"], _landing_page_normativity_normativity_component__WEBPACK_IMPORTED_MODULE_11__["NormativityComponent"], _landing_page_slider_slider_component__WEBPACK_IMPORTED_MODULE_12__["SliderComponent"], _landing_page_navbar_landingpage_navbar_landingpage_component__WEBPACK_IMPORTED_MODULE_13__["NavbarLandingpageComponent"], _landing_page_convocatory_convocatory_component__WEBPACK_IMPORTED_MODULE_14__["ConvocatoryComponent"], _password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_15__["PasswordResetComponent"], _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_16__["SignInComponent"], _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_17__["SignUpComponent"]],
          imports: [// ThemeModule,
          _angular_common__WEBPACK_IMPORTED_MODULE_18__["CommonModule"], _invited_routing_module__WEBPACK_IMPORTED_MODULE_1__["InvitedRoutingModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__["MatToolbarModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__["MatMenuModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_23__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_24__["MatButtonModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_25__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_26__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_28__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_29__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_29__["FormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_30__["FlexLayoutModule"], _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_31__["ScrollToModule"], // Ng2SmartTableModule,
          _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_34__["MatAutocompleteModule"]]
        });
      })();
      /***/

    },

    /***/
    "KZTq":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/@nicky-lenaers/ngx-scroll-to/__ivy_ngcc__/fesm2015/nicky-lenaers-ngx-scroll-to.js ***!
      \********************************************************************************************************/

    /*! exports provided: ScrollToDirective, ScrollToModule, ScrollToService */

    /***/
    function KZTq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScrollToDirective", function () {
        return ScrollToDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScrollToModule", function () {
        return ScrollToModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScrollToService", function () {
        return ScrollToService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /** Default values for Component Input */


      var DEFAULTS = {
        target: null,
        action: 'click',
        duration: 650,
        easing: 'easeInOutQuad',
        offset: 0,
        offsetMap: new Map()
      };

      var ɵ0 = function ɵ0(time) {
        return time * time;
      },
          ɵ1 = function ɵ1(time) {
        return time * (2 - time);
      },
          ɵ2 = function ɵ2(time) {
        return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;
      },
          ɵ3 = function ɵ3(time) {
        return time * time * time;
      },
          ɵ4 = function ɵ4(time) {
        return --time * time * time + 1;
      },
          ɵ5 = function ɵ5(time) {
        return time < 0.5 ? 4 * time * time * time : (time - 1) * (2 * time - 2) * (2 * time - 2) + 1;
      },
          ɵ6 = function ɵ6(time) {
        return time * time * time * time;
      },
          ɵ7 = function ɵ7(time) {
        return 1 - --time * time * time * time;
      },
          ɵ8 = function ɵ8(time) {
        return time < 0.5 ? 8 * time * time * time * time : 1 - 8 * --time * time * time * time;
      },
          ɵ9 = function ɵ9(time) {
        return time * time * time * time * time;
      },
          ɵ10 = function ɵ10(time) {
        return 1 + --time * time * time * time * time;
      },
          ɵ11 = function ɵ11(time) {
        return time < 0.5 ? 16 * time * time * time * time * time : 1 + 16 * --time * time * time * time * time;
      },
          ɵ12 = function ɵ12(time) {
        return Math.pow(2, -10 * time) * Math.sin((time - 1 / 4) * (2 * Math.PI) / 1) + 1;
      };
      /** Easing Colleciton */


      var EASING = {
        easeInQuad: ɵ0,
        easeOutQuad: ɵ1,
        easeInOutQuad: ɵ2,
        easeInCubic: ɵ3,
        easeOutCubic: ɵ4,
        easeInOutCubic: ɵ5,
        easeInQuart: ɵ6,
        easeOutQuart: ɵ7,
        easeInOutQuart: ɵ8,
        easeInQuint: ɵ9,
        easeOutQuint: ɵ10,
        easeInOutQuint: ɵ11,
        easeOutElastic: ɵ12
      };
      /**
       * Set of allowed events as triggers
       * for the Animation to start.
       */

      var EVENTS = ['click', 'mouseenter', 'mouseover', 'mousedown', 'mouseup', 'dblclick', 'contextmenu', 'wheel', 'mouseleave', 'mouseout'];
      /**
       * Strip hash (#) from value.
       *
       * @param value 				The given string value
       * @returns 					The stripped string value
       */

      function stripHash(value) {
        return value.substring(0, 1) === '#' ? value.substring(1) : value;
      }
      /**
       * Test if a given value is a string.
       *
       * @param value 					The given value
       * @returns 						Whether the given value is a string
       */


      function isString(value) {
        return typeof value === 'string' || value instanceof String;
      }
      /**
       * Test if a given Element is the Window.
       *
       * @param container 				The given Element
       * @returns 						Whether the given Element is Window
       */


      function isWindow(container) {
        return container === window;
      }
      /**
       * Test if a given value is of type ElementRef.
       *
       * @param value 					The given value
       * @returns               Whether the given value is a number
       */


      function isElementRef(value) {
        return value instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"];
      }
      /**
       * Whether or not the given value is a Native Element.
       *
       * @param value           The given value
       * @returns               Whether or not the value is a Native Element
       */


      function isNativeElement(value) {
        return value instanceof HTMLElement;
      }
      /**
       * Test if a given value is type number.
       *
       * @param value 					The given value
       * @returns 						Whether the given value is a number
       */


      function isNumber(value) {
        return !isNaN(parseFloat(value)) && isFinite(value);
      }
      /** Scroll To Animation */


      var ScrollToAnimation = /*#__PURE__*/function () {
        /**
         * Class Constructor.
         *
         * @param container            The Container
         * @param listenerTarget       The Element that listens for DOM Events
         * @param isWindow             Whether or not the listener is the Window
         * @param to                   Position to scroll to
         * @param options              Additional options for scrolling
         * @param isBrowser            Whether or not execution runs in the browser
         *                              (as opposed to the server)
         */
        function ScrollToAnimation(container, listenerTarget, isWindow, to, options, isBrowser) {
          var _this7 = this;

          _classCallCheck(this, ScrollToAnimation);

          this.container = container;
          this.listenerTarget = listenerTarget;
          this.isWindow = isWindow;
          this.to = to;
          this.options = options;
          this.isBrowser = isBrowser;
          /** Recursively loop over the Scroll Animation */

          this.loop = function () {
            _this7.timeLapsed += _this7.tick;
            _this7.percentage = _this7.timeLapsed / _this7.options.duration;
            _this7.percentage = _this7.percentage > 1 ? 1 : _this7.percentage; // Position Update

            _this7.position = _this7.startPosition + (_this7.startPosition - _this7.to <= 0 ? 1 : -1) * _this7.distance * EASING[_this7.options.easing](_this7.percentage);

            if (_this7.lastPosition !== null && _this7.position === _this7.lastPosition) {
              _this7.stop();
            } else {
              _this7.source$.next(_this7.position);

              _this7.isWindow ? _this7.listenerTarget.scrollTo(0, Math.floor(_this7.position)) : _this7.container.scrollTop = Math.floor(_this7.position);
              _this7.lastPosition = _this7.position;
            }
          };

          this.tick = 16;
          this.interval = null;
          this.lastPosition = null;
          this.timeLapsed = 0;
          this.windowScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

          if (!this.container) {
            this.startPosition = this.windowScrollTop;
          } else {
            this.startPosition = this.isWindow ? this.windowScrollTop : this.container.scrollTop;
          } // Correction for Starting Position of nested HTML Elements


          if (this.container && !this.isWindow) {
            this.to = this.to - this.container.getBoundingClientRect().top + this.startPosition;
          } // Set Distance


          var directionalDistance = this.startPosition - this.to;
          this.distance = this.container ? Math.abs(this.startPosition - this.to) : this.to;
          this.mappedOffset = this.options.offset; // Set offset from Offset Map

          if (this.isBrowser) {
            this.options.offsetMap.forEach(function (value, key) {
              return _this7.mappedOffset = window.innerWidth > key ? value : _this7.mappedOffset;
            });
          }

          this.distance += this.mappedOffset * (directionalDistance <= 0 ? 1 : -1);
          this.source$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"]();
        }
        /**
         * Start the new Scroll Animation.
         *
         * @returns         Observable containing a number
         */


        _createClass(ScrollToAnimation, [{
          key: "start",
          value: function start() {
            clearInterval(this.interval);
            this.interval = setInterval(this.loop, this.tick);
            return this.source$.asObservable();
          }
          /**
           * Stop the current Scroll Animation Loop.
           *
           * @param force          Force to stop the Animation Loop
           * @returns               Void
           */

        }, {
          key: "stop",
          value: function stop() {
            clearInterval(this.interval);
            this.interval = null;
            this.source$.complete();
          }
        }]);

        return ScrollToAnimation;
      }();

      var ScrollToService = /*@__PURE__*/function () {
        /**
         * The Scroll To Service handles starting, interrupting
         * and ending the actual Scroll Animation. It provides
         * some utilities to find the proper HTML Element on a
         * given page to setup Event Listeners and calculate
         * distances for the Animation.
         */
        var ScrollToService = /*#__PURE__*/function () {
          /**
           * Construct and setup required paratemeters.
           *
           * @param document         A Reference to the Document
           * @param platformId       Angular Platform ID
           */
          function ScrollToService(document, platformId) {
            _classCallCheck(this, ScrollToService);

            this.document = document;
            this.platformId = platformId;
            this.interruptiveEvents = ['mousewheel', 'DOMMouseScroll', 'touchstart'];
          }
          /**
           * Target an Element to scroll to. Notice that the `TimeOut` decorator
           * ensures the executing to take place in the next Angular lifecycle.
           * This allows for scrolling to elements that are e.g. initially hidden
           * by means of `*ngIf`, but ought to be scrolled to eventually.
           *
           * @todo type 'any' in Observable should become custom type like 'ScrollToEvent' (base class), see issue comment:
           *  - https://github.com/nicky-lenaers/ngx-scroll-to/issues/10#issuecomment-317198481
           *
           * @param options         Configuration Object
           * @returns               Observable
           */


          _createClass(ScrollToService, [{
            key: "scrollTo",
            value: function scrollTo(options) {
              if (!Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
                return new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"]().asObservable();
              }

              return this.start(options);
            }
            /**
             * Start a new Animation.
             *
             * @todo Emit proper events from subscription
             *
             * @param options         Configuration Object
             * @returns               Observable
             */

          }, {
            key: "start",
            value: function start(options) {
              var _this8 = this;

              // Merge config with default values
              var mergedConfigOptions = Object.assign(Object.assign({}, DEFAULTS), options);

              if (this.animation) {
                this.animation.stop();
              }

              var targetNode = this.getNode(mergedConfigOptions.target);

              if (mergedConfigOptions.target && !targetNode) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Unable to find Target Element');
              }

              var container = this.getContainer(mergedConfigOptions, targetNode);

              if (mergedConfigOptions.container && !container) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Unable to find Container Element');
              }

              var listenerTarget = this.getListenerTarget(container) || window;
              var to = container ? container.getBoundingClientRect().top : 0;

              if (targetNode) {
                to = isWindow(listenerTarget) ? window.scrollY + targetNode.getBoundingClientRect().top : targetNode.getBoundingClientRect().top;
              } // Create Animation


              this.animation = new ScrollToAnimation(container, listenerTarget, isWindow(listenerTarget), to, mergedConfigOptions, Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId));

              var onInterrupt = function onInterrupt() {
                return _this8.animation.stop();
              };

              this.addInterruptiveEventListeners(listenerTarget, onInterrupt); // Start Animation

              var animation$ = this.animation.start();
              this.subscribeToAnimation(animation$, listenerTarget, onInterrupt);
              return animation$;
            }
            /**
             * Subscribe to the events emitted from the Scrolling
             * Animation. Events might be used for e.g. unsubscribing
             * once finished.
             *
             * @param animation$              The Animation Observable
             * @param listenerTarget          The Listener Target for events
             * @param onInterrupt             The handler for Interruptive Events
             * @returns                       Void
             */

          }, {
            key: "subscribeToAnimation",
            value: function subscribeToAnimation(animation$, listenerTarget, onInterrupt) {
              var _this9 = this;

              var subscription = animation$.subscribe(function () {}, function () {}, function () {
                _this9.removeInterruptiveEventListeners(_this9.interruptiveEvents, listenerTarget, onInterrupt);

                subscription.unsubscribe();
              });
            }
            /**
             * Get the container HTML Element in which
             * the scrolling should happen.
             *
             * @param options         The Merged Configuration Object
             * @param targetNode    the targeted HTMLElement
             */

          }, {
            key: "getContainer",
            value: function getContainer(options, targetNode) {
              var container = null;

              if (options.container) {
                container = this.getNode(options.container, true);
              } else if (targetNode) {
                container = this.getFirstScrollableParent(targetNode);
              }

              return container;
            }
            /**
             * Add listeners for the Animation Interruptive Events
             * to the Listener Target.
             *
             * @param events            List of events to listen to
             * @param listenerTarget    Target to attach the listener on
             * @param handler           Handler for when the listener fires
             * @returns                 Void
             */

          }, {
            key: "addInterruptiveEventListeners",
            value: function addInterruptiveEventListeners(listenerTarget, handler) {
              var _this10 = this;

              if (!listenerTarget) {
                listenerTarget = window;
              }

              this.interruptiveEvents.forEach(function (event) {
                return listenerTarget.addEventListener(event, handler, _this10.supportPassive() ? {
                  passive: true
                } : false);
              });
            }
            /**
             * Feature-detect support for passive event listeners.
             *
             * @returns       Whether or not passive event listeners are supported
             */

          }, {
            key: "supportPassive",
            value: function supportPassive() {
              var supportsPassive = false;

              try {
                var opts = Object.defineProperty({}, 'passive', {
                  get: function get() {
                    supportsPassive = true;
                  }
                });
                window.addEventListener('testPassive', null, opts);
                window.removeEventListener('testPassive', null, opts);
              } catch (e) {}

              return supportsPassive;
            }
            /**
             * Remove listeners for the Animation Interrupt Event from
             * the Listener Target. Specifying the correct handler prevents
             * memory leaks and makes the allocated memory available for
             * Garbage Collection.
             *
             * @param events            List of Interruptive Events to remove
             * @param listenerTarget    Target to attach the listener on
             * @param handler           Handler for when the listener fires
             * @returns                 Void
             */

          }, {
            key: "removeInterruptiveEventListeners",
            value: function removeInterruptiveEventListeners(events, listenerTarget, handler) {
              if (!listenerTarget) {
                listenerTarget = window;
              }

              events.forEach(function (event) {
                return listenerTarget.removeEventListener(event, handler);
              });
            }
            /**
             * Find the first scrollable parent Node of a given
             * Element. The DOM Tree gets searched upwards
             * to find this first scrollable parent. Parents might
             * be ignored by CSS styles applied to the HTML Element.
             *
             * @param nativeElement     The Element to search the DOM Tree upwards from
             * @returns                 The first scrollable parent HTML Element
             */

          }, {
            key: "getFirstScrollableParent",
            value: function getFirstScrollableParent(nativeElement) {
              var style = window.getComputedStyle(nativeElement);
              var overflowRegex = /(auto|scroll|overlay)/;

              if (style.position === 'fixed') {
                return null;
              }

              var parent = nativeElement;

              while (parent.parentElement) {
                parent = parent.parentElement;
                style = window.getComputedStyle(parent);

                if (style.position === 'absolute' || style.overflow === 'hidden' || style.overflowY === 'hidden') {
                  continue;
                }

                if (overflowRegex.test(style.overflow + style.overflowY) || parent.tagName === 'BODY') {
                  return parent;
                }
              }

              return null;
            }
            /**
             * Get the Target Node to scroll to.
             *
             * @param id              The given ID of the node, either a string or
             *                        an element reference
             * @param allowBodyTag    Indicate whether or not the Document Body is
             *                        considered a valid Target Node
             * @returns               The Target Node to scroll to
             */

          }, {
            key: "getNode",
            value: function getNode(id) {
              var allowBodyTag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
              var targetNode;

              if (isString(id)) {
                if (allowBodyTag && (id === 'body' || id === 'BODY')) {
                  targetNode = this.document.body;
                } else {
                  targetNode = this.document.getElementById(stripHash(id));
                }
              } else if (isNumber(id)) {
                targetNode = this.document.getElementById(String(id));
              } else if (isElementRef(id)) {
                targetNode = id.nativeElement;
              } else if (isNativeElement(id)) {
                targetNode = id;
              }

              return targetNode;
            }
            /**
             * Retrieve the Listener target. This Listener Target is used
             * to attach Event Listeners on. In case of the target being
             * the Document Body, we need the actual `window` to listen
             * for events.
             *
             * @param container           The HTML Container element
             * @returns                   The Listener Target to attach events on
             */

          }, {
            key: "getListenerTarget",
            value: function getListenerTarget(container) {
              if (!container) {
                return null;
              }

              return this.isDocumentBody(container) ? window : container;
            }
            /**
             * Test if a given HTML Element is the Document Body.
             *
             * @param element             The given HTML Element
             * @returns                   Whether or not the Element is the
             *                            Document Body Element
             */

          }, {
            key: "isDocumentBody",
            value: function isDocumentBody(element) {
              return element.tagName.toUpperCase() === 'BODY';
            }
          }]);

          return ScrollToService;
        }();

        ScrollToService.ɵfac = function ScrollToService_Factory(t) {
          return new (t || ScrollToService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]));
        };

        ScrollToService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
          token: ScrollToService,
          factory: function factory(t) {
            return ScrollToService.ɵfac(t);
          }
        });
        return ScrollToService;
      }();

      var ScrollToDirective = /*@__PURE__*/function () {
        var ScrollToDirective = /*#__PURE__*/function () {
          function ScrollToDirective(elementRef, scrollToService, renderer2) {
            _classCallCheck(this, ScrollToDirective);

            this.elementRef = elementRef;
            this.scrollToService = scrollToService;
            this.renderer2 = renderer2;
            this.ngxScrollTo = DEFAULTS.target;
            this.ngxScrollToEvent = DEFAULTS.action;
            this.ngxScrollToDuration = DEFAULTS.duration;
            this.ngxScrollToEasing = DEFAULTS.easing;
            this.ngxScrollToOffset = DEFAULTS.offset;
            this.ngxScrollToOffsetMap = DEFAULTS.offsetMap;
          }
          /**
           * Angular Lifecycle Hook - After View Init
           *
           * @todo Implement Subscription for Events
           *
           * @returns void
           */


          _createClass(ScrollToDirective, [{
            key: "ngAfterViewInit",
            value: function ngAfterViewInit() {
              var _this11 = this;

              // Test Event Support
              if (EVENTS.indexOf(this.ngxScrollToEvent) === -1) {
                throw new Error("Unsupported Event '".concat(this.ngxScrollToEvent, "'"));
              } // Listen for the trigger...


              this.renderer2.listen(this.elementRef.nativeElement, this.ngxScrollToEvent, function (event) {
                _this11.options = {
                  target: _this11.ngxScrollTo,
                  duration: _this11.ngxScrollToDuration,
                  easing: _this11.ngxScrollToEasing,
                  offset: _this11.ngxScrollToOffset,
                  offsetMap: _this11.ngxScrollToOffsetMap
                };

                _this11.scrollToService.scrollTo(_this11.options);
              });
            }
          }]);

          return ScrollToDirective;
        }();

        ScrollToDirective.ɵfac = function ScrollToDirective_Factory(t) {
          return new (t || ScrollToDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ScrollToService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]));
        };

        ScrollToDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
          type: ScrollToDirective,
          selectors: [["", "ngxScrollTo", ""]],
          inputs: {
            ngxScrollTo: "ngxScrollTo",
            ngxScrollToEvent: "ngxScrollToEvent",
            ngxScrollToDuration: "ngxScrollToDuration",
            ngxScrollToEasing: "ngxScrollToEasing",
            ngxScrollToOffset: "ngxScrollToOffset",
            ngxScrollToOffsetMap: "ngxScrollToOffsetMap"
          }
        });
        return ScrollToDirective;
      }();

      var ScrollToModule_1;

      var ScrollToModule = /*@__PURE__*/function () {
        /** Scroll To Module */
        var ScrollToModule = ScrollToModule_1 = /*#__PURE__*/function () {
          function ScrollToModule() {
            _classCallCheck(this, ScrollToModule);
          }

          _createClass(ScrollToModule, null, [{
            key: "forRoot",
            value:
            /**
             * Guaranteed singletons for provided Services across App.
             *
             * @return          An Angular Module with Providers
             */
            function forRoot() {
              return {
                ngModule: ScrollToModule_1,
                providers: [ScrollToService]
              };
            }
          }]);

          return ScrollToModule;
        }();

        ScrollToModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
          type: ScrollToModule
        });
        ScrollToModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
          factory: function ScrollToModule_Factory(t) {
            return new (t || ScrollToModule)();
          }
        });
        return ScrollToModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ScrollToModule, {
          declarations: [ScrollToDirective],
          exports: [ScrollToDirective]
        });
      })();
      /*
       * Public API Surface of ngx-scroll-to
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=nicky-lenaers-ngx-scroll-to.js.map

      /***/

    },

    /***/
    "Lhmz":
    /*!***********************************************************************!*\
      !*** ./src/app/invited/landing-page/functions/functions.component.ts ***!
      \***********************************************************************/

    /*! exports provided: FunctionsComponent */

    /***/
    function Lhmz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FunctionsComponent", function () {
        return FunctionsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FunctionsComponent = /*@__PURE__*/function () {
        var FunctionsComponent = /*#__PURE__*/function () {
          function FunctionsComponent() {
            _classCallCheck(this, FunctionsComponent);
          }

          _createClass(FunctionsComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }]);

          return FunctionsComponent;
        }();

        FunctionsComponent.ɵfac = function FunctionsComponent_Factory(t) {
          return new (t || FunctionsComponent)();
        };

        FunctionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: FunctionsComponent,
          selectors: [["app-functions"]],
          decls: 17,
          vars: 0,
          consts: [["id", "functions", 1, "all"], [1, "container"], [1, "row"], [1, "col-lg-5", "col-md-6", "col-xs-12"], ["src", "https://i.ytimg.com/vi/gKcChpK34tk/maxresdefault.jpg", "alt", "", 1, "mx-auto", "d-block"], [1, "col-lg-7", "col-md-6", "col-xs-12"], [1, "titulo"], [1, "parrafo"]],
          template: function FunctionsComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Funciones");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Promover el desarrollo cient\xEDfico, tecnol\xF3gico y la innovaci\xF3n de la Fuerza A\xE9rea Colombiana deacuerdo con los programas estrat\xE9gicos del CTeI. ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Proporcionar las condiciones necesarias para que los desarrollos cient\xEDficos, tecnol\xF3gicos e innovadores se articulen con los sectores social y productivo con el fin que contribuyan con la soluci\xF3n de necesidades institucionales y la construcci\xF3n del tejido econ\xF3mico y social del pa\xEDs. ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Propender por la articulaci\xF3n del Sistema Nacional de Ciencia, Tecnolog\xEDa e Innovaci\xF3n (SNCTI) de Colciencias y con las entidades y actores del mismo. ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
          },
          styles: [".all[_ngcontent-%COMP%] {\n  background-color: #001326 !important;\n  color: #fff;\n}\n\n.parrafo[_ngcontent-%COMP%] {\n  color: #FFF;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 350px;\n  height: 350px;\n  border-radius: 200px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n@media (max-width: 600px) {\n  img[_ngcontent-%COMP%] {\n    padding: 10px 0px;\n    width: 250px;\n    height: 250px;\n    border-radius: 200px;\n  }\n}"]
        });
        return FunctionsComponent;
      }();
      /***/

    },

    /***/
    "USiE":
    /*!*******************************************************************************************!*\
      !*** ./src/app/invited/landing-page/contact-landingpage/contact-landingpage.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: ContactLandingpageComponent */

    /***/
    function USiE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactLandingpageComponent", function () {
        return ContactLandingpageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var ContactLandingpageComponent = /*@__PURE__*/function () {
        var ContactLandingpageComponent = /*#__PURE__*/function () {
          function ContactLandingpageComponent() {
            _classCallCheck(this, ContactLandingpageComponent);
          }

          _createClass(ContactLandingpageComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }]);

          return ContactLandingpageComponent;
        }();

        ContactLandingpageComponent.ɵfac = function ContactLandingpageComponent_Factory(t) {
          return new (t || ContactLandingpageComponent)();
        };

        ContactLandingpageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: ContactLandingpageComponent,
          selectors: [["app-contact-landingpage"]],
          decls: 55,
          vars: 0,
          consts: [["id", "contact"], [1, "container"], ["data-aos", "fade-up", 1, "row"], [1, "col-lg-3", "col-md-3", "col-xs-6"], [1, "contact-about"], [1, "tituloDicti"], [1, "parrafo"], [1, "info"], ["href", "https://www.google.com/maps/place/CATAM/@4.70348,-74.1518187,988m/data=!3m1!1e3!4m12!1m6!3m5!1s0x8e3f9cca3bb07547:0x545ee7c823e7ba8!2sCATAM!8m2!3d4.70348!4d-74.14963!3m4!1s0x8e3f9cca3bb07547:0x545ee7c823e7ba8!8m2!3d4.70348!4d-74.14963", 1, "email"], ["href", "mailto:innova@fac.mil.co", 1, "email"], ["href", "tel:+573159800", 1, "email"], [1, "col-lg-6", "col-md-6", "col-xs-8"], [1, "form"], ["id", "sendmessage", 1, "parrafo"], ["id", "errormessage"], ["action", "", "method", "post", "role", "form", 1, "contactForm"], [1, "form-row"], [1, "form-group", "col-lg-6"], ["type", "text", "name", "name", "id", "name", "placeholder", "Tu nombre", "data-rule", "minlen:4", "data-msg", "Please enter at least 4 chars", 1, "form-control"], [1, "validation"], ["type", "email", "name", "email", "id", "email", "placeholder", "Tu correo", "data-rule", "email", "data-msg", "Por favor ingrese un correo valido.", 1, "form-control"], [1, "form-group"], ["type", "text", "name", "subject", "id", "subject", "placeholder", "Asunto", "data-rule", "minlen:4", "data-msg", "Please enter at least 8 chars of subject", 1, "form-control"], ["name", "message", "rows", "5", "data-rule", "required", "data-msg", "Please write something for us", "placeholder", "Mensaje", 1, "form-control"], [1, "text-center"], ["type", "submit", "title", "Send Message", 1, "botonForm"]],
          template: function ContactLandingpageComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "DICTI");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Fuerza Aerea Colombiana. ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Todos los derechos reservados.");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " place");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Avenida El Dorado ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Cra. 54 # 26 -25 CAN");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " email");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "innova@fac.mil.co");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-icon");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " phone");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "+57 3159800 Ext 1700");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Tu mensaje ha sido enviado. \xA1Gracias!");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "form", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "div", 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "div", 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "div", 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "textarea", 23);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "div", 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 24);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 25);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Enviar Mensaje");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
          },
          directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]],
          styles: [".botonForm[_ngcontent-%COMP%] {\n  color: #FFF !important;\n  border-radius: 50px !important;\n}\n\nmat-icon[_ngcontent-%COMP%] {\n  position: absolute;\n}\n\n.IconColor[_ngcontent-%COMP%] {\n  color: #001326;\n}\n\n.email[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n  color: #001326;\n}\n\n#contact[_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.1);\n  padding: 60px 0;\n}\n\n#contact[_ngcontent-%COMP%]   .contact-about[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 36px;\n  margin: 0 0 10px 0;\n  padding: 0;\n  line-height: 1;\n  font-family: \"Barlow Semi Condensed\", sans-serif;\n  font-weight: 300;\n  letter-spacing: 3px;\n  text-transform: uppercase;\n  color: #001326;\n}\n\n#contact[_ngcontent-%COMP%]   .contact-about[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 24px;\n  font-family: \"Barlow Semi Condensed\", sans-serif;\n  color: #888;\n}\n\n#contact[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n}\n\n#contact[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 18px;\n  display: inline-block;\n  background: #fff;\n  color: #1dc8cd;\n  line-height: 1;\n  padding: 8px 0;\n  margin-right: 4px;\n  border-radius: 50%;\n  text-align: center;\n  width: 36px;\n  height: 36px;\n  transition: 0.3s;\n  border: 1px solid #1dc8cd;\n}\n\n#contact[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #1dc8cd;\n  color: #fff;\n}\n\n#contact[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  color: #333333;\n}\n\n#contact[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 32px;\n  color: #1dc8cd;\n  float: left;\n  line-height: 1;\n}\n\n#contact[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 0 0 10px 42px;\n  line-height: 28px;\n  font-size: 14px;\n}\n\n#contact[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   #sendmessage[_ngcontent-%COMP%] {\n  color: #1dc8cd;\n  border: 1px solid #1dc8cd;\n  display: none;\n  text-align: center;\n  padding: 15px;\n  font-weight: 600;\n  margin-bottom: 15px;\n}\n\n#contact[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   #errormessage[_ngcontent-%COMP%] {\n  color: red;\n  display: none;\n  border: 1px solid red;\n  text-align: center;\n  padding: 15px;\n  font-weight: 600;\n  margin-bottom: 15px;\n}\n\n#contact[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   #sendmessage.show[_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   #errormessage.show[_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%] {\n  display: block;\n}\n\n#contact[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .validation[_ngcontent-%COMP%] {\n  color: red;\n  display: none;\n  margin: 0 0 20px;\n  font-weight: 400;\n  font-size: 13px;\n}\n\n#contact[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  border-radius: 0;\n  box-shadow: none;\n  font-size: 14px;\n}\n\n#contact[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   button[type=submit][_ngcontent-%COMP%] {\n  background: linear-gradient(45deg, #001326, #1d55cd);\n  border: 0;\n  border-radius: 20px;\n  padding: 8px 30px;\n  color: #fff;\n}\n\n#contact[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   button[type=submit][_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}"]
        });
        return ContactLandingpageComponent;
      }();
      /***/

    },

    /***/
    "Usz4":
    /*!*****************************************************************!*\
      !*** ./src/app/invited/landing-page/slider/slider.component.ts ***!
      \*****************************************************************/

    /*! exports provided: SliderComponent */

    /***/
    function Usz4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SliderComponent", function () {
        return SliderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SliderComponent = /*@__PURE__*/function () {
        var SliderComponent = /*#__PURE__*/function () {
          function SliderComponent() {
            _classCallCheck(this, SliderComponent);
          }

          _createClass(SliderComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }]);

          return SliderComponent;
        }();

        SliderComponent.ɵfac = function SliderComponent_Factory(t) {
          return new (t || SliderComponent)();
        };

        SliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: SliderComponent,
          selectors: [["app-slider"]],
          decls: 1,
          vars: 0,
          consts: [["width", "100%", "height", "600px", "src", "https://www.youtube.com/embed/videoseries?list=PLS-o4V-bPt5fId8qMMVbEi9E3cSkhzWBv", "title", "YouTube video player", "frameborder", "0", "allow", "autoplay;", "allowfullscreen", ""]],
          template: function SliderComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "iframe", 0);
            }
          },
          styles: ["@media (max-width: 768px) {\n  iframe[_ngcontent-%COMP%] {\n    height: 500px;\n  }\n}\n@media (max-width: 425px) {\n  iframe[_ngcontent-%COMP%] {\n    height: 250px;\n  }\n}\n.ytp-pause-overlay[_ngcontent-%COMP%]   .ytp-scroll-min[_ngcontent-%COMP%] {\n  display: none !important;\n}"]
        });
        return SliderComponent;
      }();
      /***/

    },

    /***/
    "Wkfz":
    /*!*****************************************************************!*\
      !*** ./src/app/invited/landing-page/mision/mision.component.ts ***!
      \*****************************************************************/

    /*! exports provided: MisionComponent */

    /***/
    function Wkfz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MisionComponent", function () {
        return MisionComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");

      var MisionComponent = /*@__PURE__*/function () {
        var MisionComponent = /*#__PURE__*/function () {
          function MisionComponent() {
            _classCallCheck(this, MisionComponent);
          }

          _createClass(MisionComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }]);

          return MisionComponent;
        }();

        MisionComponent.ɵfac = function MisionComponent_Factory(t) {
          return new (t || MisionComponent)();
        };

        MisionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: MisionComponent,
          selectors: [["app-mision"]],
          decls: 13,
          vars: 0,
          consts: [["id", "mision", 1, "all"], ["id", "call-to-action"], [1, "container"], [1, "row"], [1, "col-lg-7", "col-md-6", "col-xs-12", "text-center", "text-lg-left"], [1, "titulo"], [1, "parrafo"], [1, "col-lg-5", "col-md-6", "col-xs-12", "mx-auto", "d-block"], ["src", "https://i.ytimg.com/vi/gKcChpK34tk/maxresdefault.jpg", "alt", "", 1, "mx-auto", "d-block"]],
          template: function MisionComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Mision");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Dirigir y controlar el desarrollo de las pol\xEDticas y estrat\xE9gias institucionales en el campo de la investigaci\xF3n cient\xEDfica, desarrollo tecnol\xF3gico y la innovaci\xF3n, para la adaptaci\xF3n y producci\xF3n de tecnolog\xEDa acorde con las necesidades de la Fuerza A\xE9rea Colombiana.");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
          },
          directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"]],
          styles: [".all[_ngcontent-%COMP%] {\n  padding: 40px 0px 20px 0px;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 350px;\n  height: 350px;\n  border-radius: 200px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n@media (max-width: 600px) {\n  img[_ngcontent-%COMP%] {\n    padding: 10px 0px;\n    width: 250px;\n    height: 250px;\n    border-radius: 200px;\n  }\n}"]
        });
        return MisionComponent;
      }();
      /***/

    },

    /***/
    "XiUz":
    /*!************************************************************************!*\
      !*** ./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js ***!
      \************************************************************************/

    /*! exports provided: FlexModule, FlexStyleBuilder, FlexDirective, DefaultFlexDirective, FlexAlignStyleBuilder, FlexAlignDirective, DefaultFlexAlignDirective, FlexFillStyleBuilder, FlexFillDirective, FlexOffsetStyleBuilder, FlexOffsetDirective, DefaultFlexOffsetDirective, FlexOrderStyleBuilder, FlexOrderDirective, DefaultFlexOrderDirective, LayoutStyleBuilder, LayoutDirective, DefaultLayoutDirective, LayoutAlignStyleBuilder, LayoutAlignDirective, DefaultLayoutAlignDirective, LayoutGapStyleBuilder, LayoutGapDirective, DefaultLayoutGapDirective */

    /***/
    function XiUz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FlexModule", function () {
        return FlexModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FlexStyleBuilder", function () {
        return FlexStyleBuilder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FlexDirective", function () {
        return FlexDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultFlexDirective", function () {
        return DefaultFlexDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FlexAlignStyleBuilder", function () {
        return FlexAlignStyleBuilder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FlexAlignDirective", function () {
        return FlexAlignDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultFlexAlignDirective", function () {
        return DefaultFlexAlignDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FlexFillStyleBuilder", function () {
        return FlexFillStyleBuilder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FlexFillDirective", function () {
        return FlexFillDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FlexOffsetStyleBuilder", function () {
        return FlexOffsetStyleBuilder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FlexOffsetDirective", function () {
        return FlexOffsetDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultFlexOffsetDirective", function () {
        return DefaultFlexOffsetDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FlexOrderStyleBuilder", function () {
        return FlexOrderStyleBuilder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FlexOrderDirective", function () {
        return FlexOrderDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultFlexOrderDirective", function () {
        return DefaultFlexOrderDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayoutStyleBuilder", function () {
        return LayoutStyleBuilder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayoutDirective", function () {
        return LayoutDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultLayoutDirective", function () {
        return DefaultLayoutDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayoutAlignStyleBuilder", function () {
        return LayoutAlignStyleBuilder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayoutAlignDirective", function () {
        return LayoutAlignDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultLayoutAlignDirective", function () {
        return DefaultLayoutAlignDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayoutGapStyleBuilder", function () {
        return LayoutGapStyleBuilder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayoutGapDirective", function () {
        return LayoutGapDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultLayoutGapDirective", function () {
        return DefaultLayoutGapDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/flex-layout/core */
      "pD6V");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "cH1L");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: utils/layout-validator.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       * @type {?}
       */


      var INLINE = 'inline';
      /** @type {?} */

      var LAYOUT_VALUES = ['row', 'column', 'row-reverse', 'column-reverse'];
      /**
       * Validate the direction|'direction wrap' value and then update the host's inline flexbox styles
       * @param {?} value
       * @return {?}
       */

      function buildLayoutCSS(value) {
        var _validateValue = validateValue(value),
            _validateValue2 = _slicedToArray(_validateValue, 3),
            direction = _validateValue2[0],
            wrap = _validateValue2[1],
            isInline = _validateValue2[2];

        return buildCSS(direction, wrap, isInline);
      }
      /**
       * Validate the value to be one of the acceptable value options
       * Use default fallback of 'row'
       * @param {?} value
       * @return {?}
       */


      function validateValue(value) {
        value = value ? value.toLowerCase() : '';

        var _value$split = value.split(' '),
            _value$split2 = _slicedToArray(_value$split, 3),
            direction = _value$split2[0],
            wrap = _value$split2[1],
            inline = _value$split2[2]; // First value must be the `flex-direction`


        if (!LAYOUT_VALUES.find(
        /**
        * @param {?} x
        * @return {?}
        */

        /**
        * @param {?} x
        * @return {?}
        */
        function (x) {
          return x === direction;
        })) {
          direction = LAYOUT_VALUES[0];
        }

        if (wrap === INLINE) {
          wrap = inline !== INLINE ? inline : '';
          inline = INLINE;
        }

        return [direction, validateWrapValue(wrap), !!inline];
      }
      /**
       * Determine if the validated, flex-direction value specifies
       * a horizontal/row flow.
       * @param {?} value
       * @return {?}
       */


      function isFlowHorizontal(value) {
        var _validateValue3 = validateValue(value),
            _validateValue4 = _slicedToArray(_validateValue3, 1),
            flow = _validateValue4[0];

        return flow.indexOf('row') > -1;
      }
      /**
       * Convert layout-wrap='<value>' to expected flex-wrap style
       * @param {?} value
       * @return {?}
       */


      function validateWrapValue(value) {
        if (!!value) {
          switch (value.toLowerCase()) {
            case 'reverse':
            case 'wrap-reverse':
            case 'reverse-wrap':
              value = 'wrap-reverse';
              break;

            case 'no':
            case 'none':
            case 'nowrap':
              value = 'nowrap';
              break;
            // All other values fallback to 'wrap'

            default:
              value = 'wrap';
              break;
          }
        }

        return value;
      }
      /**
       * Build the CSS that should be assigned to the element instance
       * BUG:
       *   1) min-height on a column flex container won’t apply to its flex item children in IE 10-11.
       *      Use height instead if possible; height : <xxx>vh;
       *
       *  This way any padding or border specified on the child elements are
       *  laid out and drawn inside that element's specified width and height.
       * @param {?} direction
       * @param {?=} wrap
       * @param {?=} inline
       * @return {?}
       */


      function buildCSS(direction) {
        var wrap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var inline = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        return {
          'display': inline ? 'inline-flex' : 'flex',
          'box-sizing': 'border-box',
          'flex-direction': direction,
          'flex-wrap': !!wrap ? wrap : null
        };
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: flex/layout/layout.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var LayoutStyleBuilder =
      /** @class */
      function () {
        var LayoutStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_) {
          _inherits(LayoutStyleBuilder, _angular_flex_layout_);

          var _super = _createSuper(LayoutStyleBuilder);

          function LayoutStyleBuilder() {
            _classCallCheck(this, LayoutStyleBuilder);

            return _super.apply(this, arguments);
          }

          _createClass(LayoutStyleBuilder, [{
            key: "buildStyles",
            value:
            /**
             * @param {?} input
             * @return {?}
             */
            function buildStyles(input) {
              return buildLayoutCSS(input);
            }
          }]);

          return LayoutStyleBuilder;
        }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

        LayoutStyleBuilder.ɵfac = function LayoutStyleBuilder_Factory(t) {
          return ɵLayoutStyleBuilder_BaseFactory(t || LayoutStyleBuilder);
        };
        /** @nocollapse */


        LayoutStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
          factory: function LayoutStyleBuilder_Factory() {
            return new LayoutStyleBuilder();
          },
          token: LayoutStyleBuilder,
          providedIn: "root"
        });

        var ɵLayoutStyleBuilder_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](LayoutStyleBuilder);

        return LayoutStyleBuilder;
      }();
      /** @type {?} */


      var inputs = ['fxLayout', 'fxLayout.xs', 'fxLayout.sm', 'fxLayout.md', 'fxLayout.lg', 'fxLayout.xl', 'fxLayout.lt-sm', 'fxLayout.lt-md', 'fxLayout.lt-lg', 'fxLayout.lt-xl', 'fxLayout.gt-xs', 'fxLayout.gt-sm', 'fxLayout.gt-md', 'fxLayout.gt-lg'];
      /** @type {?} */

      var selector = "\n  [fxLayout], [fxLayout.xs], [fxLayout.sm], [fxLayout.md],\n  [fxLayout.lg], [fxLayout.xl], [fxLayout.lt-sm], [fxLayout.lt-md],\n  [fxLayout.lt-lg], [fxLayout.lt-xl], [fxLayout.gt-xs], [fxLayout.gt-sm],\n  [fxLayout.gt-md], [fxLayout.gt-lg]\n";
      /**
       * 'layout' flexbox styling directive
       * Defines the positioning flow direction for the child elements: row or column
       * Optional values: column or row (default)
       * @see https://css-tricks.com/almanac/properties/f/flex-direction/
       *
       */

      var LayoutDirective =
      /** @class */
      function () {
        /**
         * 'layout' flexbox styling directive
         * Defines the positioning flow direction for the child elements: row or column
         * Optional values: column or row (default)
         * @see https://css-tricks.com/almanac/properties/f/flex-direction/
         *
         */
        var LayoutDirective = /*#__PURE__*/function (_angular_flex_layout_2) {
          _inherits(LayoutDirective, _angular_flex_layout_2);

          var _super2 = _createSuper(LayoutDirective);

          /**
           * @param {?} elRef
           * @param {?} styleUtils
           * @param {?} styleBuilder
           * @param {?} marshal
           */
          function LayoutDirective(elRef, styleUtils, styleBuilder, marshal) {
            var _this12;

            _classCallCheck(this, LayoutDirective);

            _this12 = _super2.call(this, elRef, styleBuilder, styleUtils, marshal);
            _this12.DIRECTIVE_KEY = 'layout';
            _this12.styleCache = layoutCache;

            _this12.init();

            return _this12;
          }

          return _createClass(LayoutDirective);
        }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

        LayoutDirective.ɵfac = function LayoutDirective_Factory(t) {
          return new (t || LayoutDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](LayoutStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
        };

        LayoutDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: LayoutDirective,
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
        });
        return LayoutDirective;
      }();

      var DefaultLayoutDirective =
      /** @class */
      function () {
        var DefaultLayoutDirective = /*#__PURE__*/function (_LayoutDirective) {
          _inherits(DefaultLayoutDirective, _LayoutDirective);

          var _super3 = _createSuper(DefaultLayoutDirective);

          function DefaultLayoutDirective() {
            var _this13;

            _classCallCheck(this, DefaultLayoutDirective);

            _this13 = _super3.apply(this, arguments);
            _this13.inputs = inputs;
            return _this13;
          }

          return _createClass(DefaultLayoutDirective);
        }(LayoutDirective);

        DefaultLayoutDirective.ɵfac = function DefaultLayoutDirective_Factory(t) {
          return ɵDefaultLayoutDirective_BaseFactory(t || DefaultLayoutDirective);
        };

        DefaultLayoutDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: DefaultLayoutDirective,
          selectors: [["", "fxLayout", ""], ["", "fxLayout.xs", ""], ["", "fxLayout.sm", ""], ["", "fxLayout.md", ""], ["", "fxLayout.lg", ""], ["", "fxLayout.xl", ""], ["", "fxLayout.lt-sm", ""], ["", "fxLayout.lt-md", ""], ["", "fxLayout.lt-lg", ""], ["", "fxLayout.lt-xl", ""], ["", "fxLayout.gt-xs", ""], ["", "fxLayout.gt-sm", ""], ["", "fxLayout.gt-md", ""], ["", "fxLayout.gt-lg", ""]],
          inputs: {
            fxLayout: "fxLayout",
            "fxLayout.xs": "fxLayout.xs",
            "fxLayout.sm": "fxLayout.sm",
            "fxLayout.md": "fxLayout.md",
            "fxLayout.lg": "fxLayout.lg",
            "fxLayout.xl": "fxLayout.xl",
            "fxLayout.lt-sm": "fxLayout.lt-sm",
            "fxLayout.lt-md": "fxLayout.lt-md",
            "fxLayout.lt-lg": "fxLayout.lt-lg",
            "fxLayout.lt-xl": "fxLayout.lt-xl",
            "fxLayout.gt-xs": "fxLayout.gt-xs",
            "fxLayout.gt-sm": "fxLayout.gt-sm",
            "fxLayout.gt-md": "fxLayout.gt-md",
            "fxLayout.gt-lg": "fxLayout.gt-lg"
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
        });

        var ɵDefaultLayoutDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultLayoutDirective);

        return DefaultLayoutDirective;
      }();
      /** @type {?} */


      var layoutCache = new Map();
      /**
       * @fileoverview added by tsickle
       * Generated from: flex/layout-gap/layout-gap.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */

      var CLEAR_MARGIN_CSS = {
        'margin-left': null,
        'margin-right': null,
        'margin-top': null,
        'margin-bottom': null
      };

      var LayoutGapStyleBuilder =
      /** @class */
      function () {
        var LayoutGapStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_3) {
          _inherits(LayoutGapStyleBuilder, _angular_flex_layout_3);

          var _super4 = _createSuper(LayoutGapStyleBuilder);

          /**
           * @param {?} _styler
           */
          function LayoutGapStyleBuilder(_styler) {
            var _this14;

            _classCallCheck(this, LayoutGapStyleBuilder);

            _this14 = _super4.call(this);
            _this14._styler = _styler;
            return _this14;
          }
          /**
           * @param {?} gapValue
           * @param {?} parent
           * @return {?}
           */


          _createClass(LayoutGapStyleBuilder, [{
            key: "buildStyles",
            value: function buildStyles(gapValue, parent) {
              if (gapValue.endsWith(GRID_SPECIFIER)) {
                gapValue = gapValue.slice(0, gapValue.indexOf(GRID_SPECIFIER)); // Add the margin to the host element

                return buildGridMargin(gapValue, parent.directionality);
              } else {
                return {};
              }
            }
            /**
             * @param {?} gapValue
             * @param {?} _styles
             * @param {?} parent
             * @return {?}
             */

          }, {
            key: "sideEffect",
            value: function sideEffect(gapValue, _styles, parent) {
              /** @type {?} */
              var items = parent.items;

              if (gapValue.endsWith(GRID_SPECIFIER)) {
                gapValue = gapValue.slice(0, gapValue.indexOf(GRID_SPECIFIER)); // For each `element` children, set the padding

                /** @type {?} */

                var paddingStyles = buildGridPadding(gapValue, parent.directionality);

                this._styler.applyStyleToElements(paddingStyles, parent.items);
              } else {
                /** @type {?} */
                var lastItem =
                /** @type {?} */
                items.pop(); // For each `element` children EXCEPT the last,
                // set the margin right/bottom styles...

                /** @type {?} */

                var gapCss = buildGapCSS(gapValue, parent);

                this._styler.applyStyleToElements(gapCss, items); // Clear all gaps for all visible elements


                this._styler.applyStyleToElements(CLEAR_MARGIN_CSS, [lastItem]);
              }
            }
          }]);

          return LayoutGapStyleBuilder;
        }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

        LayoutGapStyleBuilder.ɵfac = function LayoutGapStyleBuilder_Factory(t) {
          return new (t || LayoutGapStyleBuilder)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]));
        };
        /** @nocollapse */


        LayoutGapStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
          factory: function LayoutGapStyleBuilder_Factory() {
            return new LayoutGapStyleBuilder(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]));
          },
          token: LayoutGapStyleBuilder,
          providedIn: "root"
        });
        return LayoutGapStyleBuilder;
      }();
      /** @type {?} */


      var inputs$1 = ['fxLayoutGap', 'fxLayoutGap.xs', 'fxLayoutGap.sm', 'fxLayoutGap.md', 'fxLayoutGap.lg', 'fxLayoutGap.xl', 'fxLayoutGap.lt-sm', 'fxLayoutGap.lt-md', 'fxLayoutGap.lt-lg', 'fxLayoutGap.lt-xl', 'fxLayoutGap.gt-xs', 'fxLayoutGap.gt-sm', 'fxLayoutGap.gt-md', 'fxLayoutGap.gt-lg'];
      /** @type {?} */

      var selector$1 = "\n  [fxLayoutGap], [fxLayoutGap.xs], [fxLayoutGap.sm], [fxLayoutGap.md],\n  [fxLayoutGap.lg], [fxLayoutGap.xl], [fxLayoutGap.lt-sm], [fxLayoutGap.lt-md],\n  [fxLayoutGap.lt-lg], [fxLayoutGap.lt-xl], [fxLayoutGap.gt-xs], [fxLayoutGap.gt-sm],\n  [fxLayoutGap.gt-md], [fxLayoutGap.gt-lg]\n";
      /**
       * 'layout-padding' styling directive
       *  Defines padding of child elements in a layout container
       */

      var LayoutGapDirective =
      /** @class */
      function () {
        /**
         * 'layout-padding' styling directive
         *  Defines padding of child elements in a layout container
         */
        var LayoutGapDirective = /*#__PURE__*/function (_angular_flex_layout_4) {
          _inherits(LayoutGapDirective, _angular_flex_layout_4);

          var _super5 = _createSuper(LayoutGapDirective);

          /**
           * @param {?} elRef
           * @param {?} zone
           * @param {?} directionality
           * @param {?} styleUtils
           * @param {?} styleBuilder
           * @param {?} marshal
           */
          function LayoutGapDirective(elRef, zone, directionality, styleUtils, styleBuilder, marshal) {
            var _this15;

            _classCallCheck(this, LayoutGapDirective);

            _this15 = _super5.call(this, elRef, styleBuilder, styleUtils, marshal);
            _this15.zone = zone;
            _this15.directionality = directionality;
            _this15.styleUtils = styleUtils;
            _this15.layout = 'row'; // default flex-direction
            // default flex-direction

            _this15.DIRECTIVE_KEY = 'layout-gap';
            _this15.observerSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
            /** @type {?} */

            var extraTriggers = [_this15.directionality.change, _this15.observerSubject.asObservable()];

            _this15.init(extraTriggers);

            _this15.marshal.trackValue(_this15.nativeElement, 'layout').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this15.destroySubject)).subscribe(_this15.onLayoutChange.bind(_assertThisInitialized(_this15)));

            return _this15;
          }
          /**
           * Special accessor to query for all child 'element' nodes regardless of type, class, etc
           * @protected
           * @return {?}
           */


          _createClass(LayoutGapDirective, [{
            key: "childrenNodes",
            get: function get() {
              /** @type {?} */
              var obj = this.nativeElement.children;
              /** @type {?} */

              var buffer = []; // iterate backwards ensuring that length is an UInt32

              for (var i = obj.length; i--;) {
                buffer[i] = obj[i];
              }

              return buffer;
            } // *********************************************
            // Lifecycle Methods
            // *********************************************

            /**
             * @return {?}
             */

          }, {
            key: "ngAfterContentInit",
            value: function ngAfterContentInit() {
              this.buildChildObservable();
              this.triggerUpdate();
            }
            /**
             * @return {?}
             */

          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              _get(_getPrototypeOf(LayoutGapDirective.prototype), "ngOnDestroy", this).call(this);

              if (this.observer) {
                this.observer.disconnect();
              }
            } // *********************************************
            // Protected methods
            // *********************************************

            /**
             * Cache the parent container 'flex-direction' and update the 'margin' styles
             * @protected
             * @param {?} matcher
             * @return {?}
             */

          }, {
            key: "onLayoutChange",
            value: function onLayoutChange(matcher) {
              var _this16 = this;

              /** @type {?} */
              var layout = matcher.value; // Make sure to filter out 'wrap' option

              /** @type {?} */

              var direction = layout.split(' ');
              this.layout = direction[0];

              if (!LAYOUT_VALUES.find(
              /**
              * @param {?} x
              * @return {?}
              */

              /**
              * @param {?} x
              * @return {?}
              */
              function (x) {
                return x === _this16.layout;
              })) {
                this.layout = 'row';
              }

              this.triggerUpdate();
            }
            /**
             *
             * @protected
             * @param {?} value
             * @return {?}
             */

          }, {
            key: "updateWithValue",
            value: function updateWithValue(value) {
              var _this17 = this;

              // Gather all non-hidden Element nodes

              /** @type {?} */
              var items = this.childrenNodes.filter(
              /**
              * @param {?} el
              * @return {?}
              */

              /**
              * @param {?} el
              * @return {?}
              */
              function (el) {
                return el.nodeType === 1 && _this17.willDisplay(el);
              }).sort(
              /**
              * @param {?} a
              * @param {?} b
              * @return {?}
              */
              function (a, b) {
                /** @type {?} */
                var orderA = +_this17.styler.lookupStyle(a, 'order');
                /** @type {?} */

                var orderB = +_this17.styler.lookupStyle(b, 'order');

                if (isNaN(orderA) || isNaN(orderB) || orderA === orderB) {
                  return 0;
                } else {
                  return orderA > orderB ? 1 : -1;
                }
              });

              if (items.length > 0) {
                /** @type {?} */
                var directionality = this.directionality.value;
                /** @type {?} */

                var layout = this.layout;

                if (layout === 'row' && directionality === 'rtl') {
                  this.styleCache = layoutGapCacheRowRtl;
                } else if (layout === 'row' && directionality !== 'rtl') {
                  this.styleCache = layoutGapCacheRowLtr;
                } else if (layout === 'column' && directionality === 'rtl') {
                  this.styleCache = layoutGapCacheColumnRtl;
                } else if (layout === 'column' && directionality !== 'rtl') {
                  this.styleCache = layoutGapCacheColumnLtr;
                }

                this.addStyles(value, {
                  directionality: directionality,
                  items: items,
                  layout: layout
                });
              }
            }
            /**
             * We need to override clearStyles because in most cases mru isn't populated
             * @protected
             * @return {?}
             */

          }, {
            key: "clearStyles",
            value: function clearStyles() {
              /** @type {?} */
              var gridMode = Object.keys(this.mru).length > 0;
              /** @type {?} */

              var childrenStyle = gridMode ? 'padding' : getMarginType(this.directionality.value, this.layout); // If there are styles on the parent remove them

              if (gridMode) {
                _get(_getPrototypeOf(LayoutGapDirective.prototype), "clearStyles", this).call(this);
              } // Then remove the children styles too


              this.styleUtils.applyStyleToElements(_defineProperty({}, childrenStyle, ''), this.childrenNodes);
            }
            /**
             * Determine if an element will show or hide based on current activation
             * @protected
             * @param {?} source
             * @return {?}
             */

          }, {
            key: "willDisplay",
            value: function willDisplay(source) {
              /** @type {?} */
              var value = this.marshal.getValue(source, 'show-hide');
              return value === true || value === undefined && this.styleUtils.lookupStyle(source, 'display') !== 'none';
            }
            /**
             * @protected
             * @return {?}
             */

          }, {
            key: "buildChildObservable",
            value: function buildChildObservable() {
              var _this18 = this;

              this.zone.runOutsideAngular(
              /**
              * @return {?}
              */
              function () {
                if (typeof MutationObserver !== 'undefined') {
                  _this18.observer = new MutationObserver(
                  /**
                  * @param {?} mutations
                  * @return {?}
                  */
                  function (mutations) {
                    /** @type {?} */
                    var validatedChanges =
                    /**
                    * @param {?} it
                    * @return {?}
                    */
                    function validatedChanges(it) {
                      return it.addedNodes && it.addedNodes.length > 0 || it.removedNodes && it.removedNodes.length > 0;
                    }; // update gap styles only for child 'added' or 'removed' events


                    if (mutations.some(validatedChanges)) {
                      _this18.observerSubject.next();
                    }
                  });

                  _this18.observer.observe(_this18.nativeElement, {
                    childList: true
                  });
                }
              });
            }
          }]);

          return LayoutGapDirective;
        }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

        LayoutGapDirective.ɵfac = function LayoutGapDirective_Factory(t) {
          return new (t || LayoutGapDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](LayoutGapStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
        };

        LayoutGapDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: LayoutGapDirective,
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
        });
        return LayoutGapDirective;
      }();

      var DefaultLayoutGapDirective =
      /** @class */
      function () {
        var DefaultLayoutGapDirective = /*#__PURE__*/function (_LayoutGapDirective) {
          _inherits(DefaultLayoutGapDirective, _LayoutGapDirective);

          var _super6 = _createSuper(DefaultLayoutGapDirective);

          function DefaultLayoutGapDirective() {
            var _this19;

            _classCallCheck(this, DefaultLayoutGapDirective);

            _this19 = _super6.apply(this, arguments);
            _this19.inputs = inputs$1;
            return _this19;
          }

          return _createClass(DefaultLayoutGapDirective);
        }(LayoutGapDirective);

        DefaultLayoutGapDirective.ɵfac = function DefaultLayoutGapDirective_Factory(t) {
          return ɵDefaultLayoutGapDirective_BaseFactory(t || DefaultLayoutGapDirective);
        };

        DefaultLayoutGapDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: DefaultLayoutGapDirective,
          selectors: [["", "fxLayoutGap", ""], ["", "fxLayoutGap.xs", ""], ["", "fxLayoutGap.sm", ""], ["", "fxLayoutGap.md", ""], ["", "fxLayoutGap.lg", ""], ["", "fxLayoutGap.xl", ""], ["", "fxLayoutGap.lt-sm", ""], ["", "fxLayoutGap.lt-md", ""], ["", "fxLayoutGap.lt-lg", ""], ["", "fxLayoutGap.lt-xl", ""], ["", "fxLayoutGap.gt-xs", ""], ["", "fxLayoutGap.gt-sm", ""], ["", "fxLayoutGap.gt-md", ""], ["", "fxLayoutGap.gt-lg", ""]],
          inputs: {
            fxLayoutGap: "fxLayoutGap",
            "fxLayoutGap.xs": "fxLayoutGap.xs",
            "fxLayoutGap.sm": "fxLayoutGap.sm",
            "fxLayoutGap.md": "fxLayoutGap.md",
            "fxLayoutGap.lg": "fxLayoutGap.lg",
            "fxLayoutGap.xl": "fxLayoutGap.xl",
            "fxLayoutGap.lt-sm": "fxLayoutGap.lt-sm",
            "fxLayoutGap.lt-md": "fxLayoutGap.lt-md",
            "fxLayoutGap.lt-lg": "fxLayoutGap.lt-lg",
            "fxLayoutGap.lt-xl": "fxLayoutGap.lt-xl",
            "fxLayoutGap.gt-xs": "fxLayoutGap.gt-xs",
            "fxLayoutGap.gt-sm": "fxLayoutGap.gt-sm",
            "fxLayoutGap.gt-md": "fxLayoutGap.gt-md",
            "fxLayoutGap.gt-lg": "fxLayoutGap.gt-lg"
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
        });

        var ɵDefaultLayoutGapDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultLayoutGapDirective);

        return DefaultLayoutGapDirective;
      }();
      /** @type {?} */


      var layoutGapCacheRowRtl = new Map();
      /** @type {?} */

      var layoutGapCacheColumnRtl = new Map();
      /** @type {?} */

      var layoutGapCacheRowLtr = new Map();
      /** @type {?} */

      var layoutGapCacheColumnLtr = new Map();
      /** @type {?} */

      var GRID_SPECIFIER = ' grid';
      /**
       * @param {?} value
       * @param {?} directionality
       * @return {?}
       */

      function buildGridPadding(value, directionality) {
        var _value$split3 = value.split(' '),
            _value$split4 = _slicedToArray(_value$split3, 2),
            between = _value$split4[0],
            below = _value$split4[1];
        /** @type {?} */


        var bottom = below || between;
        /** @type {?} */

        var paddingRight = '0px';
        /** @type {?} */

        var paddingBottom = bottom;
        /** @type {?} */

        var paddingLeft = '0px';

        if (directionality === 'rtl') {
          paddingLeft = between;
        } else {
          paddingRight = between;
        }

        return {
          'padding': "0px ".concat(paddingRight, " ").concat(paddingBottom, " ").concat(paddingLeft)
        };
      }
      /**
       * @param {?} value
       * @param {?} directionality
       * @return {?}
       */


      function buildGridMargin(value, directionality) {
        var _value$split5 = value.split(' '),
            _value$split6 = _slicedToArray(_value$split5, 2),
            between = _value$split6[0],
            below = _value$split6[1];
        /** @type {?} */


        var bottom = below || between;
        /** @type {?} */

        var minus =
        /**
        * @param {?} str
        * @return {?}
        */
        function minus(str) {
          return "-".concat(str);
        };
        /** @type {?} */


        var marginRight = '0px';
        /** @type {?} */

        var marginBottom = minus(bottom);
        /** @type {?} */

        var marginLeft = '0px';

        if (directionality === 'rtl') {
          marginLeft = minus(between);
        } else {
          marginRight = minus(between);
        }

        return {
          'margin': "0px ".concat(marginRight, " ").concat(marginBottom, " ").concat(marginLeft)
        };
      }
      /**
       * @param {?} directionality
       * @param {?} layout
       * @return {?}
       */


      function getMarginType(directionality, layout) {
        switch (layout) {
          case 'column':
            return 'margin-bottom';

          case 'column-reverse':
            return 'margin-top';

          case 'row':
            return directionality === 'rtl' ? 'margin-left' : 'margin-right';

          case 'row-reverse':
            return directionality === 'rtl' ? 'margin-right' : 'margin-left';

          default:
            return directionality === 'rtl' ? 'margin-left' : 'margin-right';
        }
      }
      /**
       * @param {?} gapValue
       * @param {?} parent
       * @return {?}
       */


      function buildGapCSS(gapValue, parent) {
        /** @type {?} */
        var key = getMarginType(parent.directionality, parent.layout);
        /** @type {?} */

        var margins = Object.assign({}, CLEAR_MARGIN_CSS);
        margins[key] = gapValue;
        return margins;
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: utils/object-extend.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Extends an object with the *enumerable* and *own* properties of one or more source objects,
       * similar to Object.assign.
       *
       * @param {?} dest The object which will have properties copied to it.
       * @param {...?} sources The source objects from which properties will be copied.
       * @return {?}
       */


      function extendObject(dest) {
        if (dest == null) {
          throw TypeError('Cannot convert undefined or null to object');
        }

        for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          sources[_key - 1] = arguments[_key];
        }

        for (var _i2 = 0, _sources = sources; _i2 < _sources.length; _i2++) {
          var source = _sources[_i2];

          if (source != null) {
            for (var key in source) {
              if (source.hasOwnProperty(key)) {
                dest[key] = source[key];
              }
            }
          }
        }

        return dest;
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: flex/flex/flex.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var FlexStyleBuilder =
      /** @class */
      function () {
        var FlexStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_5) {
          _inherits(FlexStyleBuilder, _angular_flex_layout_5);

          var _super7 = _createSuper(FlexStyleBuilder);

          /**
           * @param {?} layoutConfig
           */
          function FlexStyleBuilder(layoutConfig) {
            var _this20;

            _classCallCheck(this, FlexStyleBuilder);

            _this20 = _super7.call(this);
            _this20.layoutConfig = layoutConfig;
            return _this20;
          }
          /**
           * @param {?} input
           * @param {?} parent
           * @return {?}
           */


          _createClass(FlexStyleBuilder, [{
            key: "buildStyles",
            value: function buildStyles(input, parent) {
              var _input$split = input.split(' '),
                  _input$split2 = _toArray(_input$split),
                  grow = _input$split2[0],
                  shrink = _input$split2[1],
                  basisParts = _input$split2.slice(2);
              /** @type {?} */


              var basis = basisParts.join(' '); // The flex-direction of this element's flex container. Defaults to 'row'.

              /** @type {?} */

              var direction = parent.direction.indexOf('column') > -1 ? 'column' : 'row';
              /** @type {?} */

              var max = isFlowHorizontal(direction) ? 'max-width' : 'max-height';
              /** @type {?} */

              var min = isFlowHorizontal(direction) ? 'min-width' : 'min-height';
              /** @type {?} */

              var hasCalc = String(basis).indexOf('calc') > -1;
              /** @type {?} */

              var usingCalc = hasCalc || basis === 'auto';
              /** @type {?} */

              var isPercent = String(basis).indexOf('%') > -1 && !hasCalc;
              /** @type {?} */

              var hasUnits = String(basis).indexOf('px') > -1 || String(basis).indexOf('rem') > -1 || String(basis).indexOf('em') > -1 || String(basis).indexOf('vw') > -1 || String(basis).indexOf('vh') > -1;
              /** @type {?} */

              var isValue = hasCalc || hasUnits;
              grow = grow == '0' ? 0 : grow;
              shrink = shrink == '0' ? 0 : shrink; // make box inflexible when shrink and grow are both zero
              // should not set a min when the grow is zero
              // should not set a max when the shrink is zero

              /** @type {?} */

              var isFixed = !grow && !shrink;
              /** @type {?} */

              var css = {}; // flex-basis allows you to specify the initial/starting main-axis size of the element,
              // before anything else is computed. It can either be a percentage or an absolute value.
              // It is, however, not the breaking point for flex-grow/shrink properties
              //
              // flex-grow can be seen as this:
              //   0: Do not stretch. Either size to element's content width, or obey 'flex-basis'.
              //   1: (Default value). Stretch; will be the same size to all other flex items on
              //       the same row since they have a default value of 1.
              //   ≥2 (integer n): Stretch. Will be n times the size of other elements
              //      with 'flex-grow: 1' on the same row.
              // Use `null` to clear existing styles.

              /** @type {?} */

              var clearStyles = {
                'max-width': null,
                'max-height': null,
                'min-width': null,
                'min-height': null
              };

              switch (basis || '') {
                case '':
                  /** @type {?} */
                  var useColumnBasisZero = this.layoutConfig.useColumnBasisZero !== false;
                  basis = direction === 'row' ? '0%' : useColumnBasisZero ? '0.000000001px' : 'auto';
                  break;

                case 'initial': // default

                case 'nogrow':
                  grow = 0;
                  basis = 'auto';
                  break;

                case 'grow':
                  basis = '100%';
                  break;

                case 'noshrink':
                  shrink = 0;
                  basis = 'auto';
                  break;

                case 'auto':
                  break;

                case 'none':
                  grow = 0;
                  shrink = 0;
                  basis = 'auto';
                  break;

                default:
                  // Defaults to percentage sizing unless `px` is explicitly set
                  if (!isValue && !isPercent && !isNaN(
                  /** @type {?} */
                  basis)) {
                    basis = basis + '%';
                  } // Fix for issue 280


                  if (basis === '0%') {
                    isValue = true;
                  }

                  if (basis === '0px') {
                    basis = '0%';
                  } // fix issue #5345


                  if (hasCalc) {
                    css = extendObject(clearStyles, {
                      'flex-grow': grow,
                      'flex-shrink': shrink,
                      'flex-basis': isValue ? basis : '100%'
                    });
                  } else {
                    css = extendObject(clearStyles, {
                      'flex': "".concat(grow, " ").concat(shrink, " ").concat(isValue ? basis : '100%')
                    });
                  }

                  break;
              }

              if (!(css['flex'] || css['flex-grow'])) {
                if (hasCalc) {
                  css = extendObject(clearStyles, {
                    'flex-grow': grow,
                    'flex-shrink': shrink,
                    'flex-basis': basis
                  });
                } else {
                  css = extendObject(clearStyles, {
                    'flex': "".concat(grow, " ").concat(shrink, " ").concat(basis)
                  });
                }
              } // Fix for issues 277, 534, and 728


              if (basis !== '0%' && basis !== '0px' && basis !== '0.000000001px' && basis !== 'auto') {
                css[min] = isFixed || isValue && grow ? basis : null;
                css[max] = isFixed || !usingCalc && shrink ? basis : null;
              } // Fix for issue 528


              if (!css[min] && !css[max]) {
                if (hasCalc) {
                  css = extendObject(clearStyles, {
                    'flex-grow': grow,
                    'flex-shrink': shrink,
                    'flex-basis': basis
                  });
                } else {
                  css = extendObject(clearStyles, {
                    'flex': "".concat(grow, " ").concat(shrink, " ").concat(basis)
                  });
                }
              } else {
                // Fix for issue 660
                if (parent.hasWrap) {
                  css[hasCalc ? 'flex-basis' : 'flex'] = css[max] ? hasCalc ? css[max] : "".concat(grow, " ").concat(shrink, " ").concat(css[max]) : hasCalc ? css[min] : "".concat(grow, " ").concat(shrink, " ").concat(css[min]);
                }
              }

              return (
                /** @type {?} */
                extendObject(css, {
                  'box-sizing': 'border-box'
                })
              );
            }
          }]);

          return FlexStyleBuilder;
        }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

        FlexStyleBuilder.ɵfac = function FlexStyleBuilder_Factory(t) {
          return new (t || FlexStyleBuilder)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["LAYOUT_CONFIG"]));
        };
        /** @nocollapse */


        FlexStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
          factory: function FlexStyleBuilder_Factory() {
            return new FlexStyleBuilder(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["LAYOUT_CONFIG"]));
          },
          token: FlexStyleBuilder,
          providedIn: "root"
        });
        return FlexStyleBuilder;
      }();
      /** @type {?} */


      var inputs$2 = ['fxFlex', 'fxFlex.xs', 'fxFlex.sm', 'fxFlex.md', 'fxFlex.lg', 'fxFlex.xl', 'fxFlex.lt-sm', 'fxFlex.lt-md', 'fxFlex.lt-lg', 'fxFlex.lt-xl', 'fxFlex.gt-xs', 'fxFlex.gt-sm', 'fxFlex.gt-md', 'fxFlex.gt-lg'];
      /** @type {?} */

      var selector$2 = "\n  [fxFlex], [fxFlex.xs], [fxFlex.sm], [fxFlex.md],\n  [fxFlex.lg], [fxFlex.xl], [fxFlex.lt-sm], [fxFlex.lt-md],\n  [fxFlex.lt-lg], [fxFlex.lt-xl], [fxFlex.gt-xs], [fxFlex.gt-sm],\n  [fxFlex.gt-md], [fxFlex.gt-lg]\n";
      /**
       * Directive to control the size of a flex item using flex-basis, flex-grow, and flex-shrink.
       * Corresponds to the css `flex` shorthand property.
       *
       * @see https://css-tricks.com/snippets/css/a-guide-to-flexbox/
       */

      var FlexDirective =
      /** @class */
      function () {
        /**
         * Directive to control the size of a flex item using flex-basis, flex-grow, and flex-shrink.
         * Corresponds to the css `flex` shorthand property.
         *
         * @see https://css-tricks.com/snippets/css/a-guide-to-flexbox/
         */
        var FlexDirective = /*#__PURE__*/function (_angular_flex_layout_6) {
          _inherits(FlexDirective, _angular_flex_layout_6);

          var _super8 = _createSuper(FlexDirective);

          /**
           * @param {?} elRef
           * @param {?} styleUtils
           * @param {?} layoutConfig
           * @param {?} styleBuilder
           * @param {?} marshal
           */
          function FlexDirective(elRef, styleUtils, layoutConfig, styleBuilder, marshal) {
            var _this21;

            _classCallCheck(this, FlexDirective);

            _this21 = _super8.call(this, elRef, styleBuilder, styleUtils, marshal);
            _this21.layoutConfig = layoutConfig;
            _this21.marshal = marshal;
            _this21.DIRECTIVE_KEY = 'flex';
            _this21.direction = undefined;
            _this21.wrap = undefined;
            _this21.flexGrow = '1';
            _this21.flexShrink = '1';

            _this21.init();

            return _this21;
          }
          /**
           * @return {?}
           */


          _createClass(FlexDirective, [{
            key: "shrink",
            get: function get() {
              return this.flexShrink;
            }
            /**
             * @param {?} value
             * @return {?}
             */
            ,
            set: function set(value) {
              this.flexShrink = value || '1';
              this.triggerReflow();
            }
            /**
             * @return {?}
             */

          }, {
            key: "grow",
            get: function get() {
              return this.flexGrow;
            }
            /**
             * @param {?} value
             * @return {?}
             */
            ,
            set: function set(value) {
              this.flexGrow = value || '1';
              this.triggerReflow();
            }
            /**
             * @return {?}
             */

          }, {
            key: "ngOnInit",
            value: function ngOnInit() {
              if (this.parentElement) {
                this.marshal.trackValue(this.parentElement, 'layout').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroySubject)).subscribe(this.onLayoutChange.bind(this));
                this.marshal.trackValue(this.nativeElement, 'layout-align').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroySubject)).subscribe(this.triggerReflow.bind(this));
              }
            }
            /**
             * Caches the parent container's 'flex-direction' and updates the element's style.
             * Used as a handler for layout change events from the parent flex container.
             * @protected
             * @param {?} matcher
             * @return {?}
             */

          }, {
            key: "onLayoutChange",
            value: function onLayoutChange(matcher) {
              /** @type {?} */
              var layout = matcher.value;
              /** @type {?} */

              var layoutParts = layout.split(' ');
              this.direction = layoutParts[0];
              this.wrap = layoutParts[1] !== undefined && layoutParts[1] === 'wrap';
              this.triggerUpdate();
            }
            /**
             * Input to this is exclusively the basis input value
             * @protected
             * @param {?} value
             * @return {?}
             */

          }, {
            key: "updateWithValue",
            value: function updateWithValue(value) {
              /** @type {?} */
              var addFlexToParent = this.layoutConfig.addFlexToParent !== false;

              if (this.direction === undefined) {
                this.direction = this.getFlexFlowDirection(
                /** @type {?} */
                this.parentElement, addFlexToParent);
              }

              if (this.wrap === undefined) {
                this.wrap = this.hasWrap(
                /** @type {?} */
                this.parentElement);
              }
              /** @type {?} */


              var direction = this.direction;
              /** @type {?} */

              var isHorizontal = direction.startsWith('row');
              /** @type {?} */

              var hasWrap = this.wrap;

              if (isHorizontal && hasWrap) {
                this.styleCache = flexRowWrapCache;
              } else if (isHorizontal && !hasWrap) {
                this.styleCache = flexRowCache;
              } else if (!isHorizontal && hasWrap) {
                this.styleCache = flexColumnWrapCache;
              } else if (!isHorizontal && !hasWrap) {
                this.styleCache = flexColumnCache;
              }
              /** @type {?} */


              var basis = String(value).replace(';', '');
              /** @type {?} */

              var parts = Object(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["validateBasis"])(basis, this.flexGrow, this.flexShrink);
              this.addStyles(parts.join(' '), {
                direction: direction,
                hasWrap: hasWrap
              });
            }
            /**
             * Trigger a style reflow, usually based on a shrink/grow input event
             * @protected
             * @return {?}
             */

          }, {
            key: "triggerReflow",
            value: function triggerReflow() {
              /** @type {?} */
              var activatedValue = this.activatedValue;

              if (activatedValue !== undefined) {
                /** @type {?} */
                var parts = Object(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["validateBasis"])(activatedValue + '', this.flexGrow, this.flexShrink);
                this.marshal.updateElement(this.nativeElement, this.DIRECTIVE_KEY, parts.join(' '));
              }
            }
          }]);

          return FlexDirective;
        }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

        FlexDirective.ɵfac = function FlexDirective_Factory(t) {
          return new (t || FlexDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["LAYOUT_CONFIG"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FlexStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
        };

        FlexDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: FlexDirective,
          inputs: {
            shrink: ["fxShrink", "shrink"],
            grow: ["fxGrow", "grow"]
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
        });
        return FlexDirective;
      }();

      var DefaultFlexDirective =
      /** @class */
      function () {
        var DefaultFlexDirective = /*#__PURE__*/function (_FlexDirective) {
          _inherits(DefaultFlexDirective, _FlexDirective);

          var _super9 = _createSuper(DefaultFlexDirective);

          function DefaultFlexDirective() {
            var _this22;

            _classCallCheck(this, DefaultFlexDirective);

            _this22 = _super9.apply(this, arguments);
            _this22.inputs = inputs$2;
            return _this22;
          }

          return _createClass(DefaultFlexDirective);
        }(FlexDirective);

        DefaultFlexDirective.ɵfac = function DefaultFlexDirective_Factory(t) {
          return ɵDefaultFlexDirective_BaseFactory(t || DefaultFlexDirective);
        };

        DefaultFlexDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: DefaultFlexDirective,
          selectors: [["", "fxFlex", ""], ["", "fxFlex.xs", ""], ["", "fxFlex.sm", ""], ["", "fxFlex.md", ""], ["", "fxFlex.lg", ""], ["", "fxFlex.xl", ""], ["", "fxFlex.lt-sm", ""], ["", "fxFlex.lt-md", ""], ["", "fxFlex.lt-lg", ""], ["", "fxFlex.lt-xl", ""], ["", "fxFlex.gt-xs", ""], ["", "fxFlex.gt-sm", ""], ["", "fxFlex.gt-md", ""], ["", "fxFlex.gt-lg", ""]],
          inputs: {
            fxFlex: "fxFlex",
            "fxFlex.xs": "fxFlex.xs",
            "fxFlex.sm": "fxFlex.sm",
            "fxFlex.md": "fxFlex.md",
            "fxFlex.lg": "fxFlex.lg",
            "fxFlex.xl": "fxFlex.xl",
            "fxFlex.lt-sm": "fxFlex.lt-sm",
            "fxFlex.lt-md": "fxFlex.lt-md",
            "fxFlex.lt-lg": "fxFlex.lt-lg",
            "fxFlex.lt-xl": "fxFlex.lt-xl",
            "fxFlex.gt-xs": "fxFlex.gt-xs",
            "fxFlex.gt-sm": "fxFlex.gt-sm",
            "fxFlex.gt-md": "fxFlex.gt-md",
            "fxFlex.gt-lg": "fxFlex.gt-lg"
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
        });

        var ɵDefaultFlexDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultFlexDirective);

        return DefaultFlexDirective;
      }();
      /** @type {?} */


      var flexRowCache = new Map();
      /** @type {?} */

      var flexColumnCache = new Map();
      /** @type {?} */

      var flexRowWrapCache = new Map();
      /** @type {?} */

      var flexColumnWrapCache = new Map();
      /**
       * @fileoverview added by tsickle
       * Generated from: flex/flex-order/flex-order.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      var FlexOrderStyleBuilder =
      /** @class */
      function () {
        var FlexOrderStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_7) {
          _inherits(FlexOrderStyleBuilder, _angular_flex_layout_7);

          var _super10 = _createSuper(FlexOrderStyleBuilder);

          function FlexOrderStyleBuilder() {
            _classCallCheck(this, FlexOrderStyleBuilder);

            return _super10.apply(this, arguments);
          }

          _createClass(FlexOrderStyleBuilder, [{
            key: "buildStyles",
            value:
            /**
             * @param {?} value
             * @return {?}
             */
            function buildStyles(value) {
              return {
                order: value && parseInt(value, 10) || ''
              };
            }
          }]);

          return FlexOrderStyleBuilder;
        }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

        FlexOrderStyleBuilder.ɵfac = function FlexOrderStyleBuilder_Factory(t) {
          return ɵFlexOrderStyleBuilder_BaseFactory(t || FlexOrderStyleBuilder);
        };
        /** @nocollapse */


        FlexOrderStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
          factory: function FlexOrderStyleBuilder_Factory() {
            return new FlexOrderStyleBuilder();
          },
          token: FlexOrderStyleBuilder,
          providedIn: "root"
        });

        var ɵFlexOrderStyleBuilder_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](FlexOrderStyleBuilder);

        return FlexOrderStyleBuilder;
      }();
      /** @type {?} */


      var inputs$3 = ['fxFlexOrder', 'fxFlexOrder.xs', 'fxFlexOrder.sm', 'fxFlexOrder.md', 'fxFlexOrder.lg', 'fxFlexOrder.xl', 'fxFlexOrder.lt-sm', 'fxFlexOrder.lt-md', 'fxFlexOrder.lt-lg', 'fxFlexOrder.lt-xl', 'fxFlexOrder.gt-xs', 'fxFlexOrder.gt-sm', 'fxFlexOrder.gt-md', 'fxFlexOrder.gt-lg'];
      /** @type {?} */

      var selector$3 = "\n  [fxFlexOrder], [fxFlexOrder.xs], [fxFlexOrder.sm], [fxFlexOrder.md],\n  [fxFlexOrder.lg], [fxFlexOrder.xl], [fxFlexOrder.lt-sm], [fxFlexOrder.lt-md],\n  [fxFlexOrder.lt-lg], [fxFlexOrder.lt-xl], [fxFlexOrder.gt-xs], [fxFlexOrder.gt-sm],\n  [fxFlexOrder.gt-md], [fxFlexOrder.gt-lg]\n";
      /**
       * 'flex-order' flexbox styling directive
       * Configures the positional ordering of the element in a sorted layout container
       * @see https://css-tricks.com/almanac/properties/o/order/
       */

      var FlexOrderDirective =
      /** @class */
      function () {
        /**
         * 'flex-order' flexbox styling directive
         * Configures the positional ordering of the element in a sorted layout container
         * @see https://css-tricks.com/almanac/properties/o/order/
         */
        var FlexOrderDirective = /*#__PURE__*/function (_angular_flex_layout_8) {
          _inherits(FlexOrderDirective, _angular_flex_layout_8);

          var _super11 = _createSuper(FlexOrderDirective);

          /**
           * @param {?} elRef
           * @param {?} styleUtils
           * @param {?} styleBuilder
           * @param {?} marshal
           */
          function FlexOrderDirective(elRef, styleUtils, styleBuilder, marshal) {
            var _this23;

            _classCallCheck(this, FlexOrderDirective);

            _this23 = _super11.call(this, elRef, styleBuilder, styleUtils, marshal);
            _this23.DIRECTIVE_KEY = 'flex-order';
            _this23.styleCache = flexOrderCache;

            _this23.init();

            return _this23;
          }

          return _createClass(FlexOrderDirective);
        }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

        FlexOrderDirective.ɵfac = function FlexOrderDirective_Factory(t) {
          return new (t || FlexOrderDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FlexOrderStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
        };

        FlexOrderDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: FlexOrderDirective,
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
        });
        return FlexOrderDirective;
      }();
      /** @type {?} */


      var flexOrderCache = new Map();

      var DefaultFlexOrderDirective =
      /** @class */
      function () {
        var DefaultFlexOrderDirective = /*#__PURE__*/function (_FlexOrderDirective) {
          _inherits(DefaultFlexOrderDirective, _FlexOrderDirective);

          var _super12 = _createSuper(DefaultFlexOrderDirective);

          function DefaultFlexOrderDirective() {
            var _this24;

            _classCallCheck(this, DefaultFlexOrderDirective);

            _this24 = _super12.apply(this, arguments);
            _this24.inputs = inputs$3;
            return _this24;
          }

          return _createClass(DefaultFlexOrderDirective);
        }(FlexOrderDirective);

        DefaultFlexOrderDirective.ɵfac = function DefaultFlexOrderDirective_Factory(t) {
          return ɵDefaultFlexOrderDirective_BaseFactory(t || DefaultFlexOrderDirective);
        };

        DefaultFlexOrderDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: DefaultFlexOrderDirective,
          selectors: [["", "fxFlexOrder", ""], ["", "fxFlexOrder.xs", ""], ["", "fxFlexOrder.sm", ""], ["", "fxFlexOrder.md", ""], ["", "fxFlexOrder.lg", ""], ["", "fxFlexOrder.xl", ""], ["", "fxFlexOrder.lt-sm", ""], ["", "fxFlexOrder.lt-md", ""], ["", "fxFlexOrder.lt-lg", ""], ["", "fxFlexOrder.lt-xl", ""], ["", "fxFlexOrder.gt-xs", ""], ["", "fxFlexOrder.gt-sm", ""], ["", "fxFlexOrder.gt-md", ""], ["", "fxFlexOrder.gt-lg", ""]],
          inputs: {
            fxFlexOrder: "fxFlexOrder",
            "fxFlexOrder.xs": "fxFlexOrder.xs",
            "fxFlexOrder.sm": "fxFlexOrder.sm",
            "fxFlexOrder.md": "fxFlexOrder.md",
            "fxFlexOrder.lg": "fxFlexOrder.lg",
            "fxFlexOrder.xl": "fxFlexOrder.xl",
            "fxFlexOrder.lt-sm": "fxFlexOrder.lt-sm",
            "fxFlexOrder.lt-md": "fxFlexOrder.lt-md",
            "fxFlexOrder.lt-lg": "fxFlexOrder.lt-lg",
            "fxFlexOrder.lt-xl": "fxFlexOrder.lt-xl",
            "fxFlexOrder.gt-xs": "fxFlexOrder.gt-xs",
            "fxFlexOrder.gt-sm": "fxFlexOrder.gt-sm",
            "fxFlexOrder.gt-md": "fxFlexOrder.gt-md",
            "fxFlexOrder.gt-lg": "fxFlexOrder.gt-lg"
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
        });

        var ɵDefaultFlexOrderDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultFlexOrderDirective);

        return DefaultFlexOrderDirective;
      }();
      /**
       * @fileoverview added by tsickle
       * Generated from: flex/flex-offset/flex-offset.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var FlexOffsetStyleBuilder =
      /** @class */
      function () {
        var FlexOffsetStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_9) {
          _inherits(FlexOffsetStyleBuilder, _angular_flex_layout_9);

          var _super13 = _createSuper(FlexOffsetStyleBuilder);

          function FlexOffsetStyleBuilder() {
            _classCallCheck(this, FlexOffsetStyleBuilder);

            return _super13.apply(this, arguments);
          }

          _createClass(FlexOffsetStyleBuilder, [{
            key: "buildStyles",
            value:
            /**
             * @param {?} offset
             * @param {?} parent
             * @return {?}
             */
            function buildStyles(offset, parent) {
              if (offset === '') {
                offset = '0';
              }
              /** @type {?} */


              var isPercent = String(offset).indexOf('%') > -1;
              /** @type {?} */

              var isPx = String(offset).indexOf('px') > -1;

              if (!isPx && !isPercent && !isNaN(+offset)) {
                offset = offset + '%';
              }
              /** @type {?} */


              var horizontalLayoutKey = parent.isRtl ? 'margin-right' : 'margin-left';
              /** @type {?} */

              var styles = isFlowHorizontal(parent.layout) ? _defineProperty({}, horizontalLayoutKey, "".concat(offset)) : {
                'margin-top': "".concat(offset)
              };
              return styles;
            }
          }]);

          return FlexOffsetStyleBuilder;
        }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

        FlexOffsetStyleBuilder.ɵfac = function FlexOffsetStyleBuilder_Factory(t) {
          return ɵFlexOffsetStyleBuilder_BaseFactory(t || FlexOffsetStyleBuilder);
        };
        /** @nocollapse */


        FlexOffsetStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
          factory: function FlexOffsetStyleBuilder_Factory() {
            return new FlexOffsetStyleBuilder();
          },
          token: FlexOffsetStyleBuilder,
          providedIn: "root"
        });

        var ɵFlexOffsetStyleBuilder_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](FlexOffsetStyleBuilder);

        return FlexOffsetStyleBuilder;
      }();
      /** @type {?} */


      var inputs$4 = ['fxFlexOffset', 'fxFlexOffset.xs', 'fxFlexOffset.sm', 'fxFlexOffset.md', 'fxFlexOffset.lg', 'fxFlexOffset.xl', 'fxFlexOffset.lt-sm', 'fxFlexOffset.lt-md', 'fxFlexOffset.lt-lg', 'fxFlexOffset.lt-xl', 'fxFlexOffset.gt-xs', 'fxFlexOffset.gt-sm', 'fxFlexOffset.gt-md', 'fxFlexOffset.gt-lg'];
      /** @type {?} */

      var selector$4 = "\n  [fxFlexOffset], [fxFlexOffset.xs], [fxFlexOffset.sm], [fxFlexOffset.md],\n  [fxFlexOffset.lg], [fxFlexOffset.xl], [fxFlexOffset.lt-sm], [fxFlexOffset.lt-md],\n  [fxFlexOffset.lt-lg], [fxFlexOffset.lt-xl], [fxFlexOffset.gt-xs], [fxFlexOffset.gt-sm],\n  [fxFlexOffset.gt-md], [fxFlexOffset.gt-lg]\n";
      /**
       * 'flex-offset' flexbox styling directive
       * Configures the 'margin-left' of the element in a layout container
       */

      var FlexOffsetDirective =
      /** @class */
      function () {
        /**
         * 'flex-offset' flexbox styling directive
         * Configures the 'margin-left' of the element in a layout container
         */
        var FlexOffsetDirective = /*#__PURE__*/function (_angular_flex_layout_10) {
          _inherits(FlexOffsetDirective, _angular_flex_layout_10);

          var _super14 = _createSuper(FlexOffsetDirective);

          /**
           * @param {?} elRef
           * @param {?} directionality
           * @param {?} styleBuilder
           * @param {?} marshal
           * @param {?} styler
           */
          function FlexOffsetDirective(elRef, directionality, styleBuilder, marshal, styler) {
            var _this25;

            _classCallCheck(this, FlexOffsetDirective);

            _this25 = _super14.call(this, elRef, styleBuilder, styler, marshal);
            _this25.directionality = directionality;
            _this25.DIRECTIVE_KEY = 'flex-offset';

            _this25.init([_this25.directionality.change]); // Parent DOM `layout-gap` with affect the nested child with `flex-offset`


            if (_this25.parentElement) {
              _this25.marshal.trackValue(_this25.parentElement, 'layout-gap').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this25.destroySubject)).subscribe(_this25.triggerUpdate.bind(_assertThisInitialized(_this25)));
            }

            return _this25;
          } // *********************************************
          // Protected methods
          // *********************************************

          /**
           * Using the current fxFlexOffset value, update the inline CSS
           * NOTE: this will assign `margin-left` if the parent flex-direction == 'row',
           *       otherwise `margin-top` is used for the offset.
           * @protected
           * @param {?=} value
           * @return {?}
           */


          _createClass(FlexOffsetDirective, [{
            key: "updateWithValue",
            value: function updateWithValue() {
              var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
              // The flex-direction of this element's flex container. Defaults to 'row'.

              /** @type {?} */
              var layout = this.getFlexFlowDirection(
              /** @type {?} */
              this.parentElement, true);
              /** @type {?} */

              var isRtl = this.directionality.value === 'rtl';

              if (layout === 'row' && isRtl) {
                this.styleCache = flexOffsetCacheRowRtl;
              } else if (layout === 'row' && !isRtl) {
                this.styleCache = flexOffsetCacheRowLtr;
              } else if (layout === 'column' && isRtl) {
                this.styleCache = flexOffsetCacheColumnRtl;
              } else if (layout === 'column' && !isRtl) {
                this.styleCache = flexOffsetCacheColumnLtr;
              }

              this.addStyles(value + '', {
                layout: layout,
                isRtl: isRtl
              });
            }
          }]);

          return FlexOffsetDirective;
        }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

        FlexOffsetDirective.ɵfac = function FlexOffsetDirective_Factory(t) {
          return new (t || FlexOffsetDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FlexOffsetStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]));
        };

        FlexOffsetDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: FlexOffsetDirective,
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
        });
        return FlexOffsetDirective;
      }();

      var DefaultFlexOffsetDirective =
      /** @class */
      function () {
        var DefaultFlexOffsetDirective = /*#__PURE__*/function (_FlexOffsetDirective) {
          _inherits(DefaultFlexOffsetDirective, _FlexOffsetDirective);

          var _super15 = _createSuper(DefaultFlexOffsetDirective);

          function DefaultFlexOffsetDirective() {
            var _this26;

            _classCallCheck(this, DefaultFlexOffsetDirective);

            _this26 = _super15.apply(this, arguments);
            _this26.inputs = inputs$4;
            return _this26;
          }

          return _createClass(DefaultFlexOffsetDirective);
        }(FlexOffsetDirective);

        DefaultFlexOffsetDirective.ɵfac = function DefaultFlexOffsetDirective_Factory(t) {
          return ɵDefaultFlexOffsetDirective_BaseFactory(t || DefaultFlexOffsetDirective);
        };

        DefaultFlexOffsetDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: DefaultFlexOffsetDirective,
          selectors: [["", "fxFlexOffset", ""], ["", "fxFlexOffset.xs", ""], ["", "fxFlexOffset.sm", ""], ["", "fxFlexOffset.md", ""], ["", "fxFlexOffset.lg", ""], ["", "fxFlexOffset.xl", ""], ["", "fxFlexOffset.lt-sm", ""], ["", "fxFlexOffset.lt-md", ""], ["", "fxFlexOffset.lt-lg", ""], ["", "fxFlexOffset.lt-xl", ""], ["", "fxFlexOffset.gt-xs", ""], ["", "fxFlexOffset.gt-sm", ""], ["", "fxFlexOffset.gt-md", ""], ["", "fxFlexOffset.gt-lg", ""]],
          inputs: {
            fxFlexOffset: "fxFlexOffset",
            "fxFlexOffset.xs": "fxFlexOffset.xs",
            "fxFlexOffset.sm": "fxFlexOffset.sm",
            "fxFlexOffset.md": "fxFlexOffset.md",
            "fxFlexOffset.lg": "fxFlexOffset.lg",
            "fxFlexOffset.xl": "fxFlexOffset.xl",
            "fxFlexOffset.lt-sm": "fxFlexOffset.lt-sm",
            "fxFlexOffset.lt-md": "fxFlexOffset.lt-md",
            "fxFlexOffset.lt-lg": "fxFlexOffset.lt-lg",
            "fxFlexOffset.lt-xl": "fxFlexOffset.lt-xl",
            "fxFlexOffset.gt-xs": "fxFlexOffset.gt-xs",
            "fxFlexOffset.gt-sm": "fxFlexOffset.gt-sm",
            "fxFlexOffset.gt-md": "fxFlexOffset.gt-md",
            "fxFlexOffset.gt-lg": "fxFlexOffset.gt-lg"
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
        });

        var ɵDefaultFlexOffsetDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultFlexOffsetDirective);

        return DefaultFlexOffsetDirective;
      }();
      /** @type {?} */


      var flexOffsetCacheRowRtl = new Map();
      /** @type {?} */

      var flexOffsetCacheColumnRtl = new Map();
      /** @type {?} */

      var flexOffsetCacheRowLtr = new Map();
      /** @type {?} */

      var flexOffsetCacheColumnLtr = new Map();
      /**
       * @fileoverview added by tsickle
       * Generated from: flex/flex-align/flex-align.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      var FlexAlignStyleBuilder =
      /** @class */
      function () {
        var FlexAlignStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_11) {
          _inherits(FlexAlignStyleBuilder, _angular_flex_layout_11);

          var _super16 = _createSuper(FlexAlignStyleBuilder);

          function FlexAlignStyleBuilder() {
            _classCallCheck(this, FlexAlignStyleBuilder);

            return _super16.apply(this, arguments);
          }

          _createClass(FlexAlignStyleBuilder, [{
            key: "buildStyles",
            value:
            /**
             * @param {?} input
             * @return {?}
             */
            function buildStyles(input) {
              input = input || 'stretch';
              /** @type {?} */

              var styles = {}; // Cross-axis

              switch (input) {
                case 'start':
                  styles['align-self'] = 'flex-start';
                  break;

                case 'end':
                  styles['align-self'] = 'flex-end';
                  break;

                default:
                  styles['align-self'] = input;
                  break;
              }

              return styles;
            }
          }]);

          return FlexAlignStyleBuilder;
        }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

        FlexAlignStyleBuilder.ɵfac = function FlexAlignStyleBuilder_Factory(t) {
          return ɵFlexAlignStyleBuilder_BaseFactory(t || FlexAlignStyleBuilder);
        };
        /** @nocollapse */


        FlexAlignStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
          factory: function FlexAlignStyleBuilder_Factory() {
            return new FlexAlignStyleBuilder();
          },
          token: FlexAlignStyleBuilder,
          providedIn: "root"
        });

        var ɵFlexAlignStyleBuilder_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](FlexAlignStyleBuilder);

        return FlexAlignStyleBuilder;
      }();
      /** @type {?} */


      var inputs$5 = ['fxFlexAlign', 'fxFlexAlign.xs', 'fxFlexAlign.sm', 'fxFlexAlign.md', 'fxFlexAlign.lg', 'fxFlexAlign.xl', 'fxFlexAlign.lt-sm', 'fxFlexAlign.lt-md', 'fxFlexAlign.lt-lg', 'fxFlexAlign.lt-xl', 'fxFlexAlign.gt-xs', 'fxFlexAlign.gt-sm', 'fxFlexAlign.gt-md', 'fxFlexAlign.gt-lg'];
      /** @type {?} */

      var selector$5 = "\n  [fxFlexAlign], [fxFlexAlign.xs], [fxFlexAlign.sm], [fxFlexAlign.md],\n  [fxFlexAlign.lg], [fxFlexAlign.xl], [fxFlexAlign.lt-sm], [fxFlexAlign.lt-md],\n  [fxFlexAlign.lt-lg], [fxFlexAlign.lt-xl], [fxFlexAlign.gt-xs], [fxFlexAlign.gt-sm],\n  [fxFlexAlign.gt-md], [fxFlexAlign.gt-lg]\n";
      /**
       * 'flex-align' flexbox styling directive
       * Allows element-specific overrides for cross-axis alignments in a layout container
       * @see https://css-tricks.com/almanac/properties/a/align-self/
       */

      var FlexAlignDirective =
      /** @class */
      function () {
        /**
         * 'flex-align' flexbox styling directive
         * Allows element-specific overrides for cross-axis alignments in a layout container
         * @see https://css-tricks.com/almanac/properties/a/align-self/
         */
        var FlexAlignDirective = /*#__PURE__*/function (_angular_flex_layout_12) {
          _inherits(FlexAlignDirective, _angular_flex_layout_12);

          var _super17 = _createSuper(FlexAlignDirective);

          /**
           * @param {?} elRef
           * @param {?} styleUtils
           * @param {?} styleBuilder
           * @param {?} marshal
           */
          function FlexAlignDirective(elRef, styleUtils, styleBuilder, marshal) {
            var _this27;

            _classCallCheck(this, FlexAlignDirective);

            _this27 = _super17.call(this, elRef, styleBuilder, styleUtils, marshal);
            _this27.DIRECTIVE_KEY = 'flex-align';
            _this27.styleCache = flexAlignCache;

            _this27.init();

            return _this27;
          }

          return _createClass(FlexAlignDirective);
        }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

        FlexAlignDirective.ɵfac = function FlexAlignDirective_Factory(t) {
          return new (t || FlexAlignDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FlexAlignStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
        };

        FlexAlignDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: FlexAlignDirective,
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
        });
        return FlexAlignDirective;
      }();
      /** @type {?} */


      var flexAlignCache = new Map();

      var DefaultFlexAlignDirective =
      /** @class */
      function () {
        var DefaultFlexAlignDirective = /*#__PURE__*/function (_FlexAlignDirective) {
          _inherits(DefaultFlexAlignDirective, _FlexAlignDirective);

          var _super18 = _createSuper(DefaultFlexAlignDirective);

          function DefaultFlexAlignDirective() {
            var _this28;

            _classCallCheck(this, DefaultFlexAlignDirective);

            _this28 = _super18.apply(this, arguments);
            _this28.inputs = inputs$5;
            return _this28;
          }

          return _createClass(DefaultFlexAlignDirective);
        }(FlexAlignDirective);

        DefaultFlexAlignDirective.ɵfac = function DefaultFlexAlignDirective_Factory(t) {
          return ɵDefaultFlexAlignDirective_BaseFactory(t || DefaultFlexAlignDirective);
        };

        DefaultFlexAlignDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: DefaultFlexAlignDirective,
          selectors: [["", "fxFlexAlign", ""], ["", "fxFlexAlign.xs", ""], ["", "fxFlexAlign.sm", ""], ["", "fxFlexAlign.md", ""], ["", "fxFlexAlign.lg", ""], ["", "fxFlexAlign.xl", ""], ["", "fxFlexAlign.lt-sm", ""], ["", "fxFlexAlign.lt-md", ""], ["", "fxFlexAlign.lt-lg", ""], ["", "fxFlexAlign.lt-xl", ""], ["", "fxFlexAlign.gt-xs", ""], ["", "fxFlexAlign.gt-sm", ""], ["", "fxFlexAlign.gt-md", ""], ["", "fxFlexAlign.gt-lg", ""]],
          inputs: {
            fxFlexAlign: "fxFlexAlign",
            "fxFlexAlign.xs": "fxFlexAlign.xs",
            "fxFlexAlign.sm": "fxFlexAlign.sm",
            "fxFlexAlign.md": "fxFlexAlign.md",
            "fxFlexAlign.lg": "fxFlexAlign.lg",
            "fxFlexAlign.xl": "fxFlexAlign.xl",
            "fxFlexAlign.lt-sm": "fxFlexAlign.lt-sm",
            "fxFlexAlign.lt-md": "fxFlexAlign.lt-md",
            "fxFlexAlign.lt-lg": "fxFlexAlign.lt-lg",
            "fxFlexAlign.lt-xl": "fxFlexAlign.lt-xl",
            "fxFlexAlign.gt-xs": "fxFlexAlign.gt-xs",
            "fxFlexAlign.gt-sm": "fxFlexAlign.gt-sm",
            "fxFlexAlign.gt-md": "fxFlexAlign.gt-md",
            "fxFlexAlign.gt-lg": "fxFlexAlign.gt-lg"
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
        });

        var ɵDefaultFlexAlignDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultFlexAlignDirective);

        return DefaultFlexAlignDirective;
      }();
      /**
       * @fileoverview added by tsickle
       * Generated from: flex/flex-fill/flex-fill.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var FLEX_FILL_CSS = {
        'margin': 0,
        'width': '100%',
        'height': '100%',
        'min-width': '100%',
        'min-height': '100%'
      };

      var FlexFillStyleBuilder =
      /** @class */
      function () {
        var FlexFillStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_13) {
          _inherits(FlexFillStyleBuilder, _angular_flex_layout_13);

          var _super19 = _createSuper(FlexFillStyleBuilder);

          function FlexFillStyleBuilder() {
            _classCallCheck(this, FlexFillStyleBuilder);

            return _super19.apply(this, arguments);
          }

          _createClass(FlexFillStyleBuilder, [{
            key: "buildStyles",
            value:
            /**
             * @param {?} _input
             * @return {?}
             */
            function buildStyles(_input) {
              return FLEX_FILL_CSS;
            }
          }]);

          return FlexFillStyleBuilder;
        }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

        FlexFillStyleBuilder.ɵfac = function FlexFillStyleBuilder_Factory(t) {
          return ɵFlexFillStyleBuilder_BaseFactory(t || FlexFillStyleBuilder);
        };
        /** @nocollapse */


        FlexFillStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
          factory: function FlexFillStyleBuilder_Factory() {
            return new FlexFillStyleBuilder();
          },
          token: FlexFillStyleBuilder,
          providedIn: "root"
        });

        var ɵFlexFillStyleBuilder_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](FlexFillStyleBuilder);

        return FlexFillStyleBuilder;
      }();
      /**
       * 'fxFill' flexbox styling directive
       *  Maximizes width and height of element in a layout container
       *
       *  NOTE: fxFill is NOT responsive API!!
       */


      var FlexFillDirective =
      /** @class */
      function () {
        /**
         * 'fxFill' flexbox styling directive
         *  Maximizes width and height of element in a layout container
         *
         *  NOTE: fxFill is NOT responsive API!!
         */
        var FlexFillDirective = /*#__PURE__*/function (_angular_flex_layout_14) {
          _inherits(FlexFillDirective, _angular_flex_layout_14);

          var _super20 = _createSuper(FlexFillDirective);

          /**
           * @param {?} elRef
           * @param {?} styleUtils
           * @param {?} styleBuilder
           * @param {?} marshal
           */
          function FlexFillDirective(elRef, styleUtils, styleBuilder, marshal) {
            var _this29;

            _classCallCheck(this, FlexFillDirective);

            _this29 = _super20.call(this, elRef, styleBuilder, styleUtils, marshal);
            _this29.styleCache = flexFillCache;

            _this29.addStyles('');

            return _this29;
          }

          return _createClass(FlexFillDirective);
        }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

        FlexFillDirective.ɵfac = function FlexFillDirective_Factory(t) {
          return new (t || FlexFillDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FlexFillStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
        };

        FlexFillDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: FlexFillDirective,
          selectors: [["", "fxFill", ""], ["", "fxFlexFill", ""]],
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
        });
        return FlexFillDirective;
      }();
      /** @type {?} */


      var flexFillCache = new Map();
      /**
       * @fileoverview added by tsickle
       * Generated from: flex/layout-align/layout-align.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      var LayoutAlignStyleBuilder =
      /** @class */
      function () {
        var LayoutAlignStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_15) {
          _inherits(LayoutAlignStyleBuilder, _angular_flex_layout_15);

          var _super21 = _createSuper(LayoutAlignStyleBuilder);

          function LayoutAlignStyleBuilder() {
            _classCallCheck(this, LayoutAlignStyleBuilder);

            return _super21.apply(this, arguments);
          }

          _createClass(LayoutAlignStyleBuilder, [{
            key: "buildStyles",
            value:
            /**
             * @param {?} align
             * @param {?} parent
             * @return {?}
             */
            function buildStyles(align, parent) {
              /** @type {?} */
              var css = {};

              var _align$split = align.split(' '),
                  _align$split2 = _slicedToArray(_align$split, 2),
                  mainAxis = _align$split2[0],
                  crossAxis = _align$split2[1]; // Main axis


              switch (mainAxis) {
                case 'center':
                  css['justify-content'] = 'center';
                  break;

                case 'space-around':
                  css['justify-content'] = 'space-around';
                  break;

                case 'space-between':
                  css['justify-content'] = 'space-between';
                  break;

                case 'space-evenly':
                  css['justify-content'] = 'space-evenly';
                  break;

                case 'end':
                case 'flex-end':
                  css['justify-content'] = 'flex-end';
                  break;

                case 'start':
                case 'flex-start':
                default:
                  css['justify-content'] = 'flex-start'; // default main axis

                  break;
              } // Cross-axis


              switch (crossAxis) {
                case 'start':
                case 'flex-start':
                  css['align-items'] = css['align-content'] = 'flex-start';
                  break;

                case 'center':
                  css['align-items'] = css['align-content'] = 'center';
                  break;

                case 'end':
                case 'flex-end':
                  css['align-items'] = css['align-content'] = 'flex-end';
                  break;

                case 'space-between':
                  css['align-content'] = 'space-between';
                  css['align-items'] = 'stretch';
                  break;

                case 'space-around':
                  css['align-content'] = 'space-around';
                  css['align-items'] = 'stretch';
                  break;

                case 'baseline':
                  css['align-content'] = 'stretch';
                  css['align-items'] = 'baseline';
                  break;

                case 'stretch':
                default:
                  // 'stretch'
                  css['align-items'] = css['align-content'] = 'stretch'; // default cross axis

                  break;
              }

              return (
                /** @type {?} */
                extendObject(css, {
                  'display': parent.inline ? 'inline-flex' : 'flex',
                  'flex-direction': parent.layout,
                  'box-sizing': 'border-box',
                  'max-width': crossAxis === 'stretch' ? !isFlowHorizontal(parent.layout) ? '100%' : null : null,
                  'max-height': crossAxis === 'stretch' ? isFlowHorizontal(parent.layout) ? '100%' : null : null
                })
              );
            }
          }]);

          return LayoutAlignStyleBuilder;
        }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

        LayoutAlignStyleBuilder.ɵfac = function LayoutAlignStyleBuilder_Factory(t) {
          return ɵLayoutAlignStyleBuilder_BaseFactory(t || LayoutAlignStyleBuilder);
        };
        /** @nocollapse */


        LayoutAlignStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
          factory: function LayoutAlignStyleBuilder_Factory() {
            return new LayoutAlignStyleBuilder();
          },
          token: LayoutAlignStyleBuilder,
          providedIn: "root"
        });

        var ɵLayoutAlignStyleBuilder_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](LayoutAlignStyleBuilder);

        return LayoutAlignStyleBuilder;
      }();
      /** @type {?} */


      var inputs$6 = ['fxLayoutAlign', 'fxLayoutAlign.xs', 'fxLayoutAlign.sm', 'fxLayoutAlign.md', 'fxLayoutAlign.lg', 'fxLayoutAlign.xl', 'fxLayoutAlign.lt-sm', 'fxLayoutAlign.lt-md', 'fxLayoutAlign.lt-lg', 'fxLayoutAlign.lt-xl', 'fxLayoutAlign.gt-xs', 'fxLayoutAlign.gt-sm', 'fxLayoutAlign.gt-md', 'fxLayoutAlign.gt-lg'];
      /** @type {?} */

      var selector$6 = "\n  [fxLayoutAlign], [fxLayoutAlign.xs], [fxLayoutAlign.sm], [fxLayoutAlign.md],\n  [fxLayoutAlign.lg], [fxLayoutAlign.xl], [fxLayoutAlign.lt-sm], [fxLayoutAlign.lt-md],\n  [fxLayoutAlign.lt-lg], [fxLayoutAlign.lt-xl], [fxLayoutAlign.gt-xs], [fxLayoutAlign.gt-sm],\n  [fxLayoutAlign.gt-md], [fxLayoutAlign.gt-lg]\n";
      /**
       * 'layout-align' flexbox styling directive
       *  Defines positioning of child elements along main and cross axis in a layout container
       *  Optional values: {main-axis} values or {main-axis cross-axis} value pairs
       *
       * @see https://css-tricks.com/almanac/properties/j/justify-content/
       * @see https://css-tricks.com/almanac/properties/a/align-items/
       * @see https://css-tricks.com/almanac/properties/a/align-content/
       */

      var LayoutAlignDirective =
      /** @class */
      function () {
        /**
         * 'layout-align' flexbox styling directive
         *  Defines positioning of child elements along main and cross axis in a layout container
         *  Optional values: {main-axis} values or {main-axis cross-axis} value pairs
         *
         * @see https://css-tricks.com/almanac/properties/j/justify-content/
         * @see https://css-tricks.com/almanac/properties/a/align-items/
         * @see https://css-tricks.com/almanac/properties/a/align-content/
         */
        var LayoutAlignDirective = /*#__PURE__*/function (_angular_flex_layout_16) {
          _inherits(LayoutAlignDirective, _angular_flex_layout_16);

          var _super22 = _createSuper(LayoutAlignDirective);

          // default inline value

          /**
           * @param {?} elRef
           * @param {?} styleUtils
           * @param {?} styleBuilder
           * @param {?} marshal
           */
          function LayoutAlignDirective(elRef, styleUtils, styleBuilder, marshal) {
            var _this30;

            _classCallCheck(this, LayoutAlignDirective);

            _this30 = _super22.call(this, elRef, styleBuilder, styleUtils, marshal);
            _this30.DIRECTIVE_KEY = 'layout-align';
            _this30.layout = 'row'; // default flex-direction
            // default flex-direction

            _this30.inline = false; // default inline value

            _this30.init();

            _this30.marshal.trackValue(_this30.nativeElement, 'layout').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this30.destroySubject)).subscribe(_this30.onLayoutChange.bind(_assertThisInitialized(_this30)));

            return _this30;
          } // *********************************************
          // Protected methods
          // *********************************************

          /**
           *
           * @protected
           * @param {?} value
           * @return {?}
           */


          _createClass(LayoutAlignDirective, [{
            key: "updateWithValue",
            value: function updateWithValue(value) {
              /** @type {?} */
              var layout = this.layout || 'row';
              /** @type {?} */

              var inline = this.inline;

              if (layout === 'row' && inline) {
                this.styleCache = layoutAlignHorizontalInlineCache;
              } else if (layout === 'row' && !inline) {
                this.styleCache = layoutAlignHorizontalCache;
              } else if (layout === 'row-reverse' && inline) {
                this.styleCache = layoutAlignHorizontalRevInlineCache;
              } else if (layout === 'row-reverse' && !inline) {
                this.styleCache = layoutAlignHorizontalRevCache;
              } else if (layout === 'column' && inline) {
                this.styleCache = layoutAlignVerticalInlineCache;
              } else if (layout === 'column' && !inline) {
                this.styleCache = layoutAlignVerticalCache;
              } else if (layout === 'column-reverse' && inline) {
                this.styleCache = layoutAlignVerticalRevInlineCache;
              } else if (layout === 'column-reverse' && !inline) {
                this.styleCache = layoutAlignVerticalRevCache;
              }

              this.addStyles(value, {
                layout: layout,
                inline: inline
              });
            }
            /**
             * Cache the parent container 'flex-direction' and update the 'flex' styles
             * @protected
             * @param {?} matcher
             * @return {?}
             */

          }, {
            key: "onLayoutChange",
            value: function onLayoutChange(matcher) {
              var _this31 = this;

              /** @type {?} */
              var layoutKeys = matcher.value.split(' ');
              this.layout = layoutKeys[0];
              this.inline = matcher.value.includes('inline');

              if (!LAYOUT_VALUES.find(
              /**
              * @param {?} x
              * @return {?}
              */

              /**
              * @param {?} x
              * @return {?}
              */
              function (x) {
                return x === _this31.layout;
              })) {
                this.layout = 'row';
              }

              this.triggerUpdate();
            }
          }]);

          return LayoutAlignDirective;
        }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

        LayoutAlignDirective.ɵfac = function LayoutAlignDirective_Factory(t) {
          return new (t || LayoutAlignDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](LayoutAlignStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
        };

        LayoutAlignDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: LayoutAlignDirective,
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
        });
        return LayoutAlignDirective;
      }();

      var DefaultLayoutAlignDirective =
      /** @class */
      function () {
        var DefaultLayoutAlignDirective = /*#__PURE__*/function (_LayoutAlignDirective) {
          _inherits(DefaultLayoutAlignDirective, _LayoutAlignDirective);

          var _super23 = _createSuper(DefaultLayoutAlignDirective);

          function DefaultLayoutAlignDirective() {
            var _this32;

            _classCallCheck(this, DefaultLayoutAlignDirective);

            _this32 = _super23.apply(this, arguments);
            _this32.inputs = inputs$6;
            return _this32;
          }

          return _createClass(DefaultLayoutAlignDirective);
        }(LayoutAlignDirective);

        DefaultLayoutAlignDirective.ɵfac = function DefaultLayoutAlignDirective_Factory(t) {
          return ɵDefaultLayoutAlignDirective_BaseFactory(t || DefaultLayoutAlignDirective);
        };

        DefaultLayoutAlignDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: DefaultLayoutAlignDirective,
          selectors: [["", "fxLayoutAlign", ""], ["", "fxLayoutAlign.xs", ""], ["", "fxLayoutAlign.sm", ""], ["", "fxLayoutAlign.md", ""], ["", "fxLayoutAlign.lg", ""], ["", "fxLayoutAlign.xl", ""], ["", "fxLayoutAlign.lt-sm", ""], ["", "fxLayoutAlign.lt-md", ""], ["", "fxLayoutAlign.lt-lg", ""], ["", "fxLayoutAlign.lt-xl", ""], ["", "fxLayoutAlign.gt-xs", ""], ["", "fxLayoutAlign.gt-sm", ""], ["", "fxLayoutAlign.gt-md", ""], ["", "fxLayoutAlign.gt-lg", ""]],
          inputs: {
            fxLayoutAlign: "fxLayoutAlign",
            "fxLayoutAlign.xs": "fxLayoutAlign.xs",
            "fxLayoutAlign.sm": "fxLayoutAlign.sm",
            "fxLayoutAlign.md": "fxLayoutAlign.md",
            "fxLayoutAlign.lg": "fxLayoutAlign.lg",
            "fxLayoutAlign.xl": "fxLayoutAlign.xl",
            "fxLayoutAlign.lt-sm": "fxLayoutAlign.lt-sm",
            "fxLayoutAlign.lt-md": "fxLayoutAlign.lt-md",
            "fxLayoutAlign.lt-lg": "fxLayoutAlign.lt-lg",
            "fxLayoutAlign.lt-xl": "fxLayoutAlign.lt-xl",
            "fxLayoutAlign.gt-xs": "fxLayoutAlign.gt-xs",
            "fxLayoutAlign.gt-sm": "fxLayoutAlign.gt-sm",
            "fxLayoutAlign.gt-md": "fxLayoutAlign.gt-md",
            "fxLayoutAlign.gt-lg": "fxLayoutAlign.gt-lg"
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
        });

        var ɵDefaultLayoutAlignDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultLayoutAlignDirective);

        return DefaultLayoutAlignDirective;
      }();
      /** @type {?} */


      var layoutAlignHorizontalCache = new Map();
      /** @type {?} */

      var layoutAlignVerticalCache = new Map();
      /** @type {?} */

      var layoutAlignHorizontalRevCache = new Map();
      /** @type {?} */

      var layoutAlignVerticalRevCache = new Map();
      /** @type {?} */

      var layoutAlignHorizontalInlineCache = new Map();
      /** @type {?} */

      var layoutAlignVerticalInlineCache = new Map();
      /** @type {?} */

      var layoutAlignHorizontalRevInlineCache = new Map();
      /** @type {?} */

      var layoutAlignVerticalRevInlineCache = new Map();
      /**
       * @fileoverview added by tsickle
       * Generated from: flex/module.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */

      var ALL_DIRECTIVES = [DefaultLayoutDirective, DefaultLayoutGapDirective, DefaultLayoutAlignDirective, DefaultFlexOrderDirective, DefaultFlexOffsetDirective, FlexFillDirective, DefaultFlexAlignDirective, DefaultFlexDirective];
      /**
       * *****************************************************************
       * Define module for the Flex API
       * *****************************************************************
       */

      var FlexModule =
      /** @class */
      function () {
        /**
         * *****************************************************************
         * Define module for the Flex API
         * *****************************************************************
         */
        var FlexModule = /*#__PURE__*/_createClass(function FlexModule() {
          _classCallCheck(this, FlexModule);
        });

        FlexModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: FlexModule
        });
        FlexModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function FlexModule_Factory(t) {
            return new (t || FlexModule)();
          },
          imports: [[_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]]]
        });

        (function () {
          (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FlexModule, {
            declarations: function declarations() {
              return [DefaultLayoutDirective, DefaultLayoutGapDirective, DefaultLayoutAlignDirective, DefaultFlexOrderDirective, DefaultFlexOffsetDirective, FlexFillDirective, DefaultFlexAlignDirective, DefaultFlexDirective];
            },
            imports: function imports() {
              return [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]];
            },
            exports: function exports() {
              return [DefaultLayoutDirective, DefaultLayoutGapDirective, DefaultLayoutAlignDirective, DefaultFlexOrderDirective, DefaultFlexOffsetDirective, FlexFillDirective, DefaultFlexAlignDirective, DefaultFlexDirective];
            }
          });
        })();

        return FlexModule;
      }();
      /**
       * @fileoverview added by tsickle
       * Generated from: flex/public-api.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: flex/index.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=flex.js.map

      /***/

    },

    /***/
    "YUcS":
    /*!*******************************************************************************!*\
      !*** ./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js ***!
      \*******************************************************************************/

    /*! exports provided: ɵMatchMedia, ɵMockMatchMedia, ɵMockMatchMediaProvider, CoreModule, removeStyles, BROWSER_PROVIDER, CLASS_NAME, MediaChange, StylesheetMap, DEFAULT_CONFIG, LAYOUT_CONFIG, SERVER_TOKEN, BREAKPOINT, mergeAlias, BaseDirective2, DEFAULT_BREAKPOINTS, ScreenTypes, ORIENTATION_BREAKPOINTS, BreakPointRegistry, BREAKPOINTS, MediaObserver, MediaTrigger, sortDescendingPriority, sortAscendingPriority, coerceArray, StyleUtils, StyleBuilder, validateBasis, MediaMarshaller, BREAKPOINT_PRINT, PrintHook, ExtendedModule, ClassDirective, DefaultClassDirective, ImgSrcStyleBuilder, ImgSrcDirective, DefaultImgSrcDirective, ShowHideStyleBuilder, ShowHideDirective, DefaultShowHideDirective, StyleDirective, DefaultStyleDirective, FlexModule, FlexStyleBuilder, FlexDirective, DefaultFlexDirective, FlexAlignStyleBuilder, FlexAlignDirective, DefaultFlexAlignDirective, FlexFillStyleBuilder, FlexFillDirective, FlexOffsetStyleBuilder, FlexOffsetDirective, DefaultFlexOffsetDirective, FlexOrderStyleBuilder, FlexOrderDirective, DefaultFlexOrderDirective, LayoutStyleBuilder, LayoutDirective, DefaultLayoutDirective, LayoutAlignStyleBuilder, LayoutAlignDirective, DefaultLayoutAlignDirective, LayoutGapStyleBuilder, LayoutGapDirective, DefaultLayoutGapDirective, ɵgrid_privatef, ɵgrid_privatee, ɵgrid_privated, ɵgrid_privatei, ɵgrid_privateh, ɵgrid_privateg, ɵgrid_privatel, ɵgrid_privatek, ɵgrid_privatej, ɵgrid_privateo, ɵgrid_privaten, ɵgrid_privatem, ɵgrid_privater, ɵgrid_privateq, ɵgrid_privatep, ɵgrid_privateu, ɵgrid_privatet, ɵgrid_privates, ɵgrid_privatex, ɵgrid_privatew, ɵgrid_privatev, ɵgrid_privateba, ɵgrid_privatez, ɵgrid_privatey, ɵgrid_privatec, ɵgrid_privateb, ɵgrid_privatea, ɵgrid_privatebd, ɵgrid_privatebc, ɵgrid_privatebb, ɵgrid_privatebg, ɵgrid_privatebf, ɵgrid_privatebe, GridModule, VERSION, FlexLayoutModule */

    /***/
    function YUcS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VERSION", function () {
        return VERSION;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FlexLayoutModule", function () {
        return FlexLayoutModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout/core */
      "pD6V");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵMatchMedia", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["ɵMatchMedia"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵMockMatchMedia", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["ɵMockMatchMedia"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵMockMatchMediaProvider", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["ɵMockMatchMediaProvider"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["CoreModule"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "removeStyles", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["removeStyles"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "BROWSER_PROVIDER", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BROWSER_PROVIDER"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CLASS_NAME", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["CLASS_NAME"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MediaChange", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaChange"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "StylesheetMap", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StylesheetMap"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DEFAULT_CONFIG", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_CONFIG"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LAYOUT_CONFIG", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SERVER_TOKEN", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["SERVER_TOKEN"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "BREAKPOINT", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BREAKPOINT"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "mergeAlias", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["mergeAlias"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "BaseDirective2", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective2"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DEFAULT_BREAKPOINTS", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_BREAKPOINTS"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ScreenTypes", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["ScreenTypes"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ORIENTATION_BREAKPOINTS", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["ORIENTATION_BREAKPOINTS"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "BreakPointRegistry", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BreakPointRegistry"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "BREAKPOINTS", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BREAKPOINTS"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MediaObserver", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaObserver"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MediaTrigger", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaTrigger"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "sortDescendingPriority", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["sortDescendingPriority"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "sortAscendingPriority", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["sortAscendingPriority"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "coerceArray", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["coerceArray"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "StyleUtils", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "StyleBuilder", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleBuilder"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "validateBasis", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["validateBasis"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MediaMarshaller", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "BREAKPOINT_PRINT", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BREAKPOINT_PRINT"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PrintHook", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["PrintHook"];
      });
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "znSr");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ExtendedModule", function () {
        return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ExtendedModule"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ClassDirective", function () {
        return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ClassDirective"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DefaultClassDirective", function () {
        return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["DefaultClassDirective"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ImgSrcStyleBuilder", function () {
        return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ImgSrcStyleBuilder"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ImgSrcDirective", function () {
        return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ImgSrcDirective"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DefaultImgSrcDirective", function () {
        return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["DefaultImgSrcDirective"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ShowHideStyleBuilder", function () {
        return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ShowHideStyleBuilder"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ShowHideDirective", function () {
        return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ShowHideDirective"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DefaultShowHideDirective", function () {
        return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["DefaultShowHideDirective"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "StyleDirective", function () {
        return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["StyleDirective"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DefaultStyleDirective", function () {
        return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["DefaultStyleDirective"];
      });
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FlexModule", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexModule"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FlexStyleBuilder", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexStyleBuilder"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FlexDirective", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexDirective"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DefaultFlexDirective", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FlexAlignStyleBuilder", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexAlignStyleBuilder"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FlexAlignDirective", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexAlignDirective"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DefaultFlexAlignDirective", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexAlignDirective"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FlexFillStyleBuilder", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexFillStyleBuilder"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FlexFillDirective", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexFillDirective"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FlexOffsetStyleBuilder", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexOffsetStyleBuilder"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FlexOffsetDirective", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexOffsetDirective"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DefaultFlexOffsetDirective", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexOffsetDirective"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FlexOrderStyleBuilder", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexOrderStyleBuilder"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FlexOrderDirective", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexOrderDirective"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DefaultFlexOrderDirective", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexOrderDirective"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LayoutStyleBuilder", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["LayoutStyleBuilder"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LayoutDirective", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["LayoutDirective"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DefaultLayoutDirective", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LayoutAlignStyleBuilder", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["LayoutAlignStyleBuilder"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LayoutAlignDirective", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["LayoutAlignDirective"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DefaultLayoutAlignDirective", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LayoutGapStyleBuilder", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["LayoutGapStyleBuilder"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LayoutGapDirective", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["LayoutGapDirective"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DefaultLayoutGapDirective", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutGapDirective"];
      });
      /* harmony import */


      var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/flex-layout/grid */
      "zpSk");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatef", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatef"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatee", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatee"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privated", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privated"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatei", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatei"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privateh", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privateh"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privateg", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privateg"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatel", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatel"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatek", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatek"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatej", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatej"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privateo", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privateo"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privaten", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privaten"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatem", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatem"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privater", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privater"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privateq", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privateq"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatep", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatep"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privateu", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privateu"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatet", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatet"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privates", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privates"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatex", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatex"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatew", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatew"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatev", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatev"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privateba", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privateba"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatez", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatez"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatey", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatey"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatec", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatec"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privateb", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privateb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatea", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatea"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatebd", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatebd"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatebc", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatebc"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatebb", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatebb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatebg", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatebg"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatebf", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatebf"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatebe", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatebe"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "GridModule", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["GridModule"];
      });
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: version.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Current version of Angular Flex-Layout.
       * @type {?}
       */


      var VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('10.0.0-beta.32');
      /**
       * @fileoverview added by tsickle
       * Generated from: module.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * FlexLayoutModule -- the main import for all utilities in the Angular Layout library
       * * Will automatically provide Flex, Grid, and Extended modules for use in the application
       * * Can be configured using the static withConfig method, options viewable on the Wiki's
       *   Configuration page
       */

      var FlexLayoutModule =
      /** @class */
      function () {
        /**
         * FlexLayoutModule -- the main import for all utilities in the Angular Layout library
         * * Will automatically provide Flex, Grid, and Extended modules for use in the application
         * * Can be configured using the static withConfig method, options viewable on the Wiki's
         *   Configuration page
         */
        var FlexLayoutModule = /*#__PURE__*/function () {
          /**
           * @param {?} serverModuleLoaded
           * @param {?} platformId
           */
          function FlexLayoutModule(serverModuleLoaded, platformId) {
            _classCallCheck(this, FlexLayoutModule);

            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(platformId) && !serverModuleLoaded) {
              console.warn('Warning: Flex Layout loaded on the server without FlexLayoutServerModule');
            }
          }
          /**
           * Initialize the FlexLayoutModule with a set of config options,
           * which sets the corresponding tokens accordingly
           * @param {?} configOptions
           * @param {?=} breakpoints
           * @return {?}
           */


          _createClass(FlexLayoutModule, null, [{
            key: "withConfig",
            value: function withConfig(configOptions) {
              var breakpoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
              return {
                ngModule: FlexLayoutModule,
                providers: configOptions.serverLoaded ? [{
                  provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"],
                  useValue: Object.assign(Object.assign({}, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_CONFIG"]), configOptions)
                }, {
                  provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BREAKPOINT"],
                  useValue: breakpoints,
                  multi: true
                }, {
                  provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["SERVER_TOKEN"],
                  useValue: true
                }] : [{
                  provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"],
                  useValue: Object.assign(Object.assign({}, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_CONFIG"]), configOptions)
                }, {
                  provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BREAKPOINT"],
                  useValue: breakpoints,
                  multi: true
                }]
              };
            }
          }]);

          return FlexLayoutModule;
        }();

        FlexLayoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: FlexLayoutModule
        });
        FlexLayoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function FlexLayoutModule_Factory(t) {
            return new (t || FlexLayoutModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["SERVER_TOKEN"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]));
          },
          imports: [[_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ExtendedModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["GridModule"]], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ExtendedModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["GridModule"]]
        });

        (function () {
          (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FlexLayoutModule, {
            imports: function imports() {
              return [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ExtendedModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["GridModule"]];
            },
            exports: function exports() {
              return [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ExtendedModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["GridModule"]];
            }
          });
        })();

        return FlexLayoutModule;
      }();
      /**
       * @fileoverview added by tsickle
       * Generated from: public-api.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: index.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=flex-layout.js.map

      /***/

    },

    /***/
    "bul9":
    /*!*********************************************************************!*\
      !*** ./src/app/invited/landing-page/info-fac/info-fac.component.ts ***!
      \*********************************************************************/

    /*! exports provided: InfoFacComponent */

    /***/
    function bul9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InfoFacComponent", function () {
        return InfoFacComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var InfoFacComponent = /*@__PURE__*/function () {
        var InfoFacComponent = /*#__PURE__*/function () {
          function InfoFacComponent() {
            _classCallCheck(this, InfoFacComponent);
          }

          _createClass(InfoFacComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }]);

          return InfoFacComponent;
        }();

        InfoFacComponent.ɵfac = function InfoFacComponent_Factory(t) {
          return new (t || InfoFacComponent)();
        };

        InfoFacComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: InfoFacComponent,
          selectors: [["app-info-fac"]],
          decls: 15,
          vars: 0,
          consts: [[1, "all"], [1, "container"], [1, "row"], [1, "col-lg-5", "col-md-6", "mx-auto", "d-block"], ["src", "https://www.cgfm.mil.co/sites/default/files/styles/cms_bootstrap_12_12/public/blog/images/cogfm-fac-red-flag-2019-26.gif?itok=38-LWW_5 ", "alt", "", 1, "mx-auto", "d-block"], [1, "col-lg-7", "col-md-6"], [1, "titulo"], [1, "parrafo"]],
          template: function InfoFacComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Fuerza Aerea Colombiana");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " La Direcci\xF3n, se ha fortalecido a trav\xE9s de los a\xF1os y en el 2013, se formaliz\xF3 la articulaci\xF3n con el Sistema Nacional de Ciencia, Tecnolog\xEDa e Innovaci\xF3n de Colciencias, los nuevos desaf\xEDos han exigido adaptarse a los cambios y aprender a utilizar las nuevas tecnolog\xEDas para lograr optimizar la gesti\xF3n en esta \xE1rea. ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Esta Direcci\xF3n es la encargada de gestionar y orientar todas las actividades de investigaci\xF3n formativa, investigaci\xF3n aplicada, desarrollo tecnol\xF3gico e innovaci\xF3n y transferencia tecnol\xF3gica en la Fuerza Aerea Colombiana. ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Tambi\xE9n propende por la integraci\xF3n con actores y aliados nacionales o internacionales de la triada Universidad, Empresa y Estado, para la generaci\xF3n de nuevos conocimientos, desarrollo de productos de I+D+i con valor agregado y que generen soluciones creativas. ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
          },
          styles: [".all[_ngcontent-%COMP%] {\n  background-color: #001326 !important;\n  padding: 40px 0px;\n  color: #FFF;\n  font-size: 16px;\n}\n\n.parrafo[_ngcontent-%COMP%] {\n  color: #FFF;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 350px;\n  height: 350px;\n  border-radius: 200px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n@media (max-width: 600px) {\n  img[_ngcontent-%COMP%] {\n    padding: 10px 0px;\n    width: 250px;\n    height: 250px;\n    border-radius: 200px;\n  }\n}"]
        });
        return InfoFacComponent;
      }();
      /***/

    },

    /***/
    "dl4y":
    /*!********************************************************!*\
      !*** ./src/app/invited/sign-up/password-validation.ts ***!
      \********************************************************/

    /*! exports provided: PasswordValidation */

    /***/
    function dl4y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PasswordValidation", function () {
        return PasswordValidation;
      });

      var PasswordValidation = /*#__PURE__*/function () {
        function PasswordValidation() {
          _classCallCheck(this, PasswordValidation);
        }

        _createClass(PasswordValidation, null, [{
          key: "MatchPassword",
          value: function MatchPassword(AC) {
            var password = AC.get('password').value; // to get value in input tag

            var confirmPassword = AC.get('confirmPassword').value; // to get value in input tag

            if (password !== confirmPassword) {
              AC.get('confirmPassword').setErrors({
                MatchPassword: true
              });
            } else {
              return null;
            }
          }
        }]);

        return PasswordValidation;
      }();
      /***/

    },

    /***/
    "doQq":
    /*!***************************************************************************!*\
      !*** ./src/app/invited/landing-page/convocatory/convocatory.component.ts ***!
      \***************************************************************************/

    /*! exports provided: ConvocatoryComponent */

    /***/
    function doQq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConvocatoryComponent", function () {
        return ConvocatoryComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ConvocatoryComponent = /*@__PURE__*/function () {
        var ConvocatoryComponent = /*#__PURE__*/function () {
          function ConvocatoryComponent() {
            _classCallCheck(this, ConvocatoryComponent);
          }

          _createClass(ConvocatoryComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }]);

          return ConvocatoryComponent;
        }();

        ConvocatoryComponent.ɵfac = function ConvocatoryComponent_Factory(t) {
          return new (t || ConvocatoryComponent)();
        };

        ConvocatoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: ConvocatoryComponent,
          selectors: [["app-convocatory"]],
          decls: 2,
          vars: 0,
          template: function ConvocatoryComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "convocatory works!");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
          },
          styles: [""]
        });
        return ConvocatoryComponent;
      }();
      /***/

    },

    /***/
    "jBrA":
    /*!**********************************************!*\
      !*** ./src/app/invited/invited.component.ts ***!
      \**********************************************/

    /*! exports provided: InvitedComponent */

    /***/
    function jBrA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InvitedComponent", function () {
        return InvitedComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var InvitedComponent = /*@__PURE__*/function () {
        var InvitedComponent = /*#__PURE__*/_createClass(function InvitedComponent() {
          _classCallCheck(this, InvitedComponent);
        });

        InvitedComponent.ɵfac = function InvitedComponent_Factory(t) {
          return new (t || InvitedComponent)();
        };

        InvitedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: InvitedComponent,
          selectors: [["ngx-invited"]],
          decls: 1,
          vars: 0,
          template: function InvitedComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
            }
          },
          directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
          encapsulation: 2
        });
        return InvitedComponent;
      }();
      /***/

    },

    /***/
    "mcF/":
    /*!*************************************************!*\
      !*** ./src/app/@core/consts/doc-types.const.ts ***!
      \*************************************************/

    /*! exports provided: docTypes */

    /***/
    function mcF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "docTypes", function () {
        return docTypes;
      });

      var docTypes = [{
        descr: 'Cédula de Ciudadanía'
      }, {
        descr: 'Pasaporte'
      }];
      /***/
    },

    /***/
    "mf5a":
    /*!***************************************************************!*\
      !*** ./src/app/invited/landing-page/somos/somos.component.ts ***!
      \***************************************************************/

    /*! exports provided: SomosComponent */

    /***/
    function mf5a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SomosComponent", function () {
        return SomosComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _info_fac_info_fac_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../info-fac/info-fac.component */
      "bul9");

      var SomosComponent = /*@__PURE__*/function () {
        var SomosComponent = /*#__PURE__*/function () {
          function SomosComponent() {
            _classCallCheck(this, SomosComponent);
          }

          _createClass(SomosComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }]);

          return SomosComponent;
        }();

        SomosComponent.ɵfac = function SomosComponent_Factory(t) {
          return new (t || SomosComponent)();
        };

        SomosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: SomosComponent,
          selectors: [["app-somos"]],
          decls: 14,
          vars: 0,
          consts: [["id", "somos"], [1, "container"], [1, "titulo"], [1, "section-divider"], [1, "parrafo"]],
          template: function SomosComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Direcci\xF3n de Ciencia, Tecnolog\xEDa e Innovaci\xF3n");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Desde el a\xF1o 2002, la Fuerza A\xE9rea Colombiana, cre\xF3 la Direcci\xF3n de Ciencia, Tecnolog\xEDa e Innovaci\xF3n");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " en la Jefatura de Educaci\xF3n Aeron\xE1utica, con la cual se estructur\xF3 el Sistema de Ciencia, Tecnolog\xEDa e Innovaci\xF3n (SCTeI) donde se definieron los roles de los actores internos y externos del sistema.");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-info-fac");
            }
          },
          directives: [_info_fac_info_fac_component__WEBPACK_IMPORTED_MODULE_1__["InfoFacComponent"]],
          styles: [".section-divider[_ngcontent-%COMP%] {\n  display: block;\n  width: 60px;\n  height: 3px;\n  background: #001326;\n  margin: 0 auto;\n  margin-bottom: 20px;\n}\n\n.parrafo[_ngcontent-%COMP%] {\n  text-align: center !important;\n}\n\n.titulo[_ngcontent-%COMP%] {\n  text-align: center !important;\n}"]
        });
        return SomosComponent;
      }();
      /***/

    },

    /***/
    "p16/":
    /*!*****************************************************************************************!*\
      !*** ./src/app/invited/landing-page/footer-landingpage/footer-landingpage.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: FooterLandingpageComponent */

    /***/
    function p16(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterLandingpageComponent", function () {
        return FooterLandingpageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FooterLandingpageComponent = /*@__PURE__*/function () {
        var FooterLandingpageComponent = /*#__PURE__*/function () {
          function FooterLandingpageComponent() {
            _classCallCheck(this, FooterLandingpageComponent);
          }

          _createClass(FooterLandingpageComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }]);

          return FooterLandingpageComponent;
        }();

        FooterLandingpageComponent.ɵfac = function FooterLandingpageComponent_Factory(t) {
          return new (t || FooterLandingpageComponent)();
        };

        FooterLandingpageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: FooterLandingpageComponent,
          selectors: [["app-footer-landingpage"]],
          decls: 40,
          vars: 0,
          consts: [[1, "footer"], [1, "container"], [1, "titulo"], [1, "row"], [1, "col-lg-4", "col-md-7", "col-xs-12"], ["width", "200px", "height", "auto", "src", "https://cdn979857.fac.mil.co/sites/default/files/marca%20fac%20gris%20fn.png", 1, "logo"], [1, "col-lg-4", "col-md-6", "col-xs-12", "parrafo"], ["href", "https://www.google.com/maps/place/CATAM/@4.70348,-74.1518187,988m/data=!3m1!1e3!4m12!1m6!3m5!1s0x8e3f9cca3bb07547:0x545ee7c823e7ba8!2sCATAM!8m2!3d4.70348!4d-74.14963!3m4!1s0x8e3f9cca3bb07547:0x545ee7c823e7ba8!8m2!3d4.70348!4d-74.14963", 1, "email", "parrafo"], [1, "parrafo"], ["href", "https://www.fac.mil.co/", 1, "email", "parrafo"], ["href", "tel:+5713159800", 1, "email", "parrafo"], ["href", "mailto:atencionusuario@fac.mil.co", 1, "email", "parrafo"], [1, "redes"]],
          template: function FooterLandingpageComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Fuerza A\xE9rea Colombiana");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Avenida El Dorado Cra. 54 # 26 -25 CAN");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "P\xE1gina web: ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "www.fac.mil.co/");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "C\xF3digo postal: ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "111711");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "strong");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "PBX: ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " (57) (1) 3159800");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "strong");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "FAX: ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " 3159800 (opci\xF3n 9)");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "strong");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Correo: ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " atencionusuario@fac.mil.co");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\xA9 Copyright Fuerza A\xE9rea Colombiana. Todos los derechos reservados");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
          },
          styles: [".parrafo[_ngcontent-%COMP%] {\n  color: #FFF;\n}\n\n.email[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n  color: #fff;\n}\n\n.footer[_ngcontent-%COMP%] {\n  align-items: center;\n  background-color: #001326;\n  font-family: \"Barlow Semi Condensed\", sans-serif;\n  color: #FFFFFF;\n  overflow-x: hidden;\n  padding-top: 3rem;\n  font-size: 16px;\n}\n\n.footer[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-align: left;\n  color: #FFFFFF;\n  font-size: 20px;\n  font-family: \"Barlow Semi Condensed\", sans-serif;\n  margin-bottom: 2.7rem;\n}\n\n.footer[_ngcontent-%COMP%]   .contacto[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 4.2rem;\n}\n\n.footer[_ngcontent-%COMP%]   .contacto[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  color: #3366CC;\n  background-color: #FFFFFF;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 10000px;\n  width: 3.6rem;\n  height: 3.6rem;\n  font-size: 3.2rem;\n  margin-bottom: 1.28rem;\n}\n\n.footer[_ngcontent-%COMP%]   .contacto[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  text-align: center;\n  line-height: 1.3;\n}\n\n.footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: inherit;\n  opacity: 0.8;\n  text-decoration: underline;\n  transition: all 0.2s;\n  margin: 0 0.8rem;\n}\n\n.footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n\n.footer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: auto;\n  max-height: 9.6rem;\n  align-self: center;\n  justify-self: flex-end;\n}\n\n.footer[_ngcontent-%COMP%]   .redes[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px 10px 0px 10px;\n  background-color: #ff0000;\n  min-height: 3.7rem;\n  margin-top: 3rem;\n}\n\n.footer[_ngcontent-%COMP%]   .redes[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%] {\n  padding: 1;\n  color: white;\n  text-transform: none;\n}\n\n.footer[_ngcontent-%COMP%]   .redes[_ngcontent-%COMP%]   .p-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.logo[_ngcontent-%COMP%] {\n  width: 250px;\n  height: auto;\n}"]
        });
        return FooterLandingpageComponent;
      }();
      /***/

    },

    /***/
    "pD6V":
    /*!************************************************************************!*\
      !*** ./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/core.js ***!
      \************************************************************************/

    /*! exports provided: ɵMatchMedia, ɵMockMatchMedia, ɵMockMatchMediaProvider, CoreModule, removeStyles, BROWSER_PROVIDER, CLASS_NAME, MediaChange, StylesheetMap, DEFAULT_CONFIG, LAYOUT_CONFIG, SERVER_TOKEN, BREAKPOINT, mergeAlias, BaseDirective2, DEFAULT_BREAKPOINTS, ScreenTypes, ORIENTATION_BREAKPOINTS, BreakPointRegistry, BREAKPOINTS, MediaObserver, MediaTrigger, sortDescendingPriority, sortAscendingPriority, coerceArray, StyleUtils, StyleBuilder, validateBasis, MediaMarshaller, BREAKPOINT_PRINT, PrintHook */

    /***/
    function pD6V(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵMatchMedia", function () {
        return MatchMedia;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵMockMatchMedia", function () {
        return MockMatchMedia;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵMockMatchMediaProvider", function () {
        return MockMatchMediaProvider;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
        return CoreModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "removeStyles", function () {
        return removeStyles;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BROWSER_PROVIDER", function () {
        return BROWSER_PROVIDER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CLASS_NAME", function () {
        return CLASS_NAME;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MediaChange", function () {
        return MediaChange;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StylesheetMap", function () {
        return StylesheetMap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DEFAULT_CONFIG", function () {
        return DEFAULT_CONFIG;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LAYOUT_CONFIG", function () {
        return LAYOUT_CONFIG;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SERVER_TOKEN", function () {
        return SERVER_TOKEN;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BREAKPOINT", function () {
        return BREAKPOINT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mergeAlias", function () {
        return mergeAlias;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BaseDirective2", function () {
        return BaseDirective2;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DEFAULT_BREAKPOINTS", function () {
        return DEFAULT_BREAKPOINTS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScreenTypes", function () {
        return ScreenTypes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ORIENTATION_BREAKPOINTS", function () {
        return ORIENTATION_BREAKPOINTS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BreakPointRegistry", function () {
        return BreakPointRegistry;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BREAKPOINTS", function () {
        return BREAKPOINTS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MediaObserver", function () {
        return MediaObserver;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MediaTrigger", function () {
        return MediaTrigger;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "sortDescendingPriority", function () {
        return sortDescendingPriority;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "sortAscendingPriority", function () {
        return sortAscendingPriority;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "coerceArray", function () {
        return coerceArray;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StyleUtils", function () {
        return StyleUtils;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StyleBuilder", function () {
        return StyleBuilder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "validateBasis", function () {
        return validateBasis;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MediaMarshaller", function () {
        return MediaMarshaller;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BREAKPOINT_PRINT", function () {
        return BREAKPOINT_PRINT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrintHook", function () {
        return PrintHook;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: core/browser-provider.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Find all of the server-generated stylings, if any, and remove them
       * This will be in the form of inline classes and the style block in the
       * head of the DOM
       * @param {?} _document
       * @param {?} platformId
       * @return {?}
       */


      function removeStyles(_document, platformId) {
        return (
          /**
          * @return {?}
          */
          function () {
            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(platformId)) {
              /** @type {?} */
              var elements = Array.from(_document.querySelectorAll("[class*=".concat(CLASS_NAME, "]"))); // RegExp constructor should only be used if passing a variable to the constructor.
              // When using static regular expression it is more performant to use reg exp literal.
              // This is also needed to provide Safari 9 compatibility, please see
              // https://stackoverflow.com/questions/37919802 for more discussion.

              /** @type {?} */

              var classRegex = /\bflex-layout-.+?\b/g;
              elements.forEach(
              /**
              * @param {?} el
              * @return {?}
              */

              /**
              * @param {?} el
              * @return {?}
              */
              function (el) {
                el.classList.contains("".concat(CLASS_NAME, "ssr")) && el.parentNode ? el.parentNode.removeChild(el) : el.className.replace(classRegex, '');
              });
            }
          }
        );
      }
      /**
       *  Provider to remove SSR styles on the browser
       * @type {?}
       */


      var BROWSER_PROVIDER = {
        provide:
        /** @type {?} */
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"],
        useFactory: removeStyles,
        deps: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]],
        multi: true
      };
      /** @type {?} */

      var CLASS_NAME = 'flex-layout-';
      /**
       * @fileoverview added by tsickle
       * Generated from: core/module.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * *****************************************************************
       * Define module for common Angular Layout utilities
       * *****************************************************************
       */

      var CoreModule =
      /** @class */
      function () {
        /**
         * *****************************************************************
         * Define module for common Angular Layout utilities
         * *****************************************************************
         */
        var CoreModule = /*#__PURE__*/_createClass(function CoreModule() {
          _classCallCheck(this, CoreModule);
        });

        CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: CoreModule
        });
        CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function CoreModule_Factory(t) {
            return new (t || CoreModule)();
          },
          providers: [BROWSER_PROVIDER]
        });
        return CoreModule;
      }();
      /**
       * @fileoverview added by tsickle
       * Generated from: core/media-change.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Class instances emitted [to observers] for each mql notification
       */


      var MediaChange = /*#__PURE__*/function () {
        /**
         * @param {?=} matches whether the mediaQuery is currently activated
         * @param {?=} mediaQuery e.g. (min-width: 600px) and (max-width: 959px)
         * @param {?=} mqAlias e.g. gt-sm, md, gt-lg
         * @param {?=} suffix e.g. GtSM, Md, GtLg
         * @param {?=} priority the priority of activation for the given breakpoint
         */
        function MediaChange() {
          var matches = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          var mediaQuery = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'all';
          var mqAlias = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
          var suffix = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
          var priority = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

          _classCallCheck(this, MediaChange);

          this.matches = matches;
          this.mediaQuery = mediaQuery;
          this.mqAlias = mqAlias;
          this.suffix = suffix;
          this.priority = priority;
          this.property = '';
        }
        /**
         * Create an exact copy of the MediaChange
         * @return {?}
         */


        _createClass(MediaChange, [{
          key: "clone",
          value: function clone() {
            return new MediaChange(this.matches, this.mediaQuery, this.mqAlias, this.suffix);
          }
        }]);

        return MediaChange;
      }();
      /**
       * @fileoverview added by tsickle
       * Generated from: core/stylesheet-map/stylesheet-map.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Utility to emulate a CSS stylesheet
       *
       * This utility class stores all of the styles for a given HTML element
       * as a readonly `stylesheet` map.
       */


      var StylesheetMap =
      /** @class */
      function () {
        /**
         * Utility to emulate a CSS stylesheet
         *
         * This utility class stores all of the styles for a given HTML element
         * as a readonly `stylesheet` map.
         */
        var StylesheetMap = /*#__PURE__*/function () {
          function StylesheetMap() {
            _classCallCheck(this, StylesheetMap);

            this.stylesheet = new Map();
          }
          /**
           * Add an individual style to an HTML element
           * @param {?} element
           * @param {?} style
           * @param {?} value
           * @return {?}
           */


          _createClass(StylesheetMap, [{
            key: "addStyleToElement",
            value: function addStyleToElement(element, style, value) {
              /** @type {?} */
              var stylesheet = this.stylesheet.get(element);

              if (stylesheet) {
                stylesheet.set(style, value);
              } else {
                this.stylesheet.set(element, new Map([[style, value]]));
              }
            }
            /**
             * Clear the virtual stylesheet
             * @return {?}
             */

          }, {
            key: "clearStyles",
            value: function clearStyles() {
              this.stylesheet.clear();
            }
            /**
             * Retrieve a given style for an HTML element
             * @param {?} el
             * @param {?} styleName
             * @return {?}
             */

          }, {
            key: "getStyleForElement",
            value: function getStyleForElement(el, styleName) {
              /** @type {?} */
              var styles = this.stylesheet.get(el);
              /** @type {?} */

              var value = '';

              if (styles) {
                /** @type {?} */
                var style = styles.get(styleName);

                if (typeof style === 'number' || typeof style === 'string') {
                  value = style + '';
                }
              }

              return value;
            }
          }]);

          return StylesheetMap;
        }();

        StylesheetMap.ɵfac = function StylesheetMap_Factory(t) {
          return new (t || StylesheetMap)();
        };
        /** @nocollapse */


        StylesheetMap.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
          factory: function StylesheetMap_Factory() {
            return new StylesheetMap();
          },
          token: StylesheetMap,
          providedIn: "root"
        });
        return StylesheetMap;
      }();
      /**
       * @fileoverview added by tsickle
       * Generated from: core/stylesheet-map/index.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: core/tokens/library-config.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var DEFAULT_CONFIG = {
        addFlexToParent: true,
        addOrientationBps: false,
        disableDefaultBps: false,
        disableVendorPrefixes: false,
        serverLoaded: false,
        useColumnBasisZero: true,
        printWithBreakpoints: [],
        mediaTriggerAutoRestore: true,
        ssrObserveBreakpoints: []
      };
      /** @type {?} */

      var LAYOUT_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Flex Layout token, config options for the library', {
        providedIn: 'root',
        factory:
        /**
        * @return {?}
        */
        function factory() {
          return DEFAULT_CONFIG;
        }
      });
      /**
       * @fileoverview added by tsickle
       * Generated from: core/tokens/server-token.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Token that is provided to tell whether the FlexLayoutServerModule
       * has been included in the bundle
       *
       * NOTE: This can be manually provided to disable styles when using SSR
       * @type {?}
       */

      var SERVER_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('FlexLayoutServerLoaded', {
        providedIn: 'root',
        factory:
        /**
        * @return {?}
        */
        function factory() {
          return false;
        }
      });
      /**
       * @fileoverview added by tsickle
       * Generated from: core/tokens/breakpoint-token.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */

      var BREAKPOINT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Flex Layout token, collect all breakpoints into one provider', {
        providedIn: 'root',
        factory:
        /**
        * @return {?}
        */
        function factory() {
          return null;
        }
      });
      /**
       * @fileoverview added by tsickle
       * Generated from: core/tokens/index.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: core/add-alias.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * For the specified MediaChange, make sure it contains the breakpoint alias
       * and suffix (if available).
       * @param {?} dest
       * @param {?} source
       * @return {?}
       */

      function mergeAlias(dest, source) {
        dest = dest ? dest.clone() : new MediaChange();

        if (source) {
          dest.mqAlias = source.alias;
          dest.mediaQuery = source.mediaQuery;
          dest.suffix =
          /** @type {?} */
          source.suffix;
          dest.priority =
          /** @type {?} */
          source.priority;
        }

        return dest;
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: utils/layout-validator.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       * @type {?}
       */


      var INLINE = 'inline';
      /** @type {?} */

      var LAYOUT_VALUES = ['row', 'column', 'row-reverse', 'column-reverse'];
      /**
       * Validate the direction|'direction wrap' value and then update the host's inline flexbox styles
       * @param {?} value
       * @return {?}
       */

      function buildLayoutCSS(value) {
        var _validateValue5 = validateValue(value),
            _validateValue6 = _slicedToArray(_validateValue5, 3),
            direction = _validateValue6[0],
            wrap = _validateValue6[1],
            isInline = _validateValue6[2];

        return buildCSS(direction, wrap, isInline);
      }
      /**
       * Validate the value to be one of the acceptable value options
       * Use default fallback of 'row'
       * @param {?} value
       * @return {?}
       */


      function validateValue(value) {
        value = value ? value.toLowerCase() : '';

        var _value$split7 = value.split(' '),
            _value$split8 = _slicedToArray(_value$split7, 3),
            direction = _value$split8[0],
            wrap = _value$split8[1],
            inline = _value$split8[2]; // First value must be the `flex-direction`


        if (!LAYOUT_VALUES.find(
        /**
        * @param {?} x
        * @return {?}
        */

        /**
        * @param {?} x
        * @return {?}
        */
        function (x) {
          return x === direction;
        })) {
          direction = LAYOUT_VALUES[0];
        }

        if (wrap === INLINE) {
          wrap = inline !== INLINE ? inline : '';
          inline = INLINE;
        }

        return [direction, validateWrapValue(wrap), !!inline];
      }
      /**
       * Convert layout-wrap='<value>' to expected flex-wrap style
       * @param {?} value
       * @return {?}
       */


      function validateWrapValue(value) {
        if (!!value) {
          switch (value.toLowerCase()) {
            case 'reverse':
            case 'wrap-reverse':
            case 'reverse-wrap':
              value = 'wrap-reverse';
              break;

            case 'no':
            case 'none':
            case 'nowrap':
              value = 'nowrap';
              break;
            // All other values fallback to 'wrap'

            default:
              value = 'wrap';
              break;
          }
        }

        return value;
      }
      /**
       * Build the CSS that should be assigned to the element instance
       * BUG:
       *   1) min-height on a column flex container won’t apply to its flex item children in IE 10-11.
       *      Use height instead if possible; height : <xxx>vh;
       *
       *  This way any padding or border specified on the child elements are
       *  laid out and drawn inside that element's specified width and height.
       * @param {?} direction
       * @param {?=} wrap
       * @param {?=} inline
       * @return {?}
       */


      function buildCSS(direction) {
        var wrap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var inline = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        return {
          'display': inline ? 'inline-flex' : 'flex',
          'box-sizing': 'border-box',
          'flex-direction': direction,
          'flex-wrap': !!wrap ? wrap : null
        };
      }

      var BaseDirective2 = /*@__PURE__*/function () {
        var BaseDirective2 = /*#__PURE__*/function () {
          /**
           * @protected
           * @param {?} elementRef
           * @param {?} styleBuilder
           * @param {?} styler
           * @param {?} marshal
           */
          function BaseDirective2(elementRef, styleBuilder, styler, marshal) {
            _classCallCheck(this, BaseDirective2);

            this.elementRef = elementRef;
            this.styleBuilder = styleBuilder;
            this.styler = styler;
            this.marshal = marshal;
            this.DIRECTIVE_KEY = '';
            this.inputs = [];
            /**
             * The most recently used styles for the builder
             */

            this.mru = {};
            this.destroySubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
            /**
             * Cache map for style computation
             */

            this.styleCache = new Map();
          }
          /**
           * Access to host element's parent DOM node
           * @protected
           * @return {?}
           */


          _createClass(BaseDirective2, [{
            key: "parentElement",
            get: function get() {
              return this.elementRef.nativeElement.parentElement;
            }
            /**
             * Access to the HTMLElement for the directive
             * @protected
             * @return {?}
             */

          }, {
            key: "nativeElement",
            get: function get() {
              return this.elementRef.nativeElement;
            }
            /**
             * Access to the activated value for the directive
             * @return {?}
             */

          }, {
            key: "activatedValue",
            get: function get() {
              return this.marshal.getValue(this.nativeElement, this.DIRECTIVE_KEY);
            }
            /**
             * @param {?} value
             * @return {?}
             */
            ,
            set: function set(value) {
              this.marshal.setValue(this.nativeElement, this.DIRECTIVE_KEY, value, this.marshal.activatedAlias);
            }
            /**
             * For \@Input changes
             * @param {?} changes
             * @return {?}
             */

          }, {
            key: "ngOnChanges",
            value: function ngOnChanges(changes) {
              var _this33 = this;

              Object.keys(changes).forEach(
              /**
              * @param {?} key
              * @return {?}
              */

              /**
              * @param {?} key
              * @return {?}
              */
              function (key) {
                if (_this33.inputs.indexOf(key) !== -1) {
                  /** @type {?} */
                  var bp = key.split('.').slice(1).join('.');
                  /** @type {?} */

                  var val = changes[key].currentValue;

                  _this33.setValue(val, bp);
                }
              });
            }
            /**
             * @return {?}
             */

          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              this.destroySubject.next();
              this.destroySubject.complete();
              this.marshal.releaseElement(this.nativeElement);
            }
            /**
             * Register with central marshaller service
             * @protected
             * @param {?=} extraTriggers
             * @return {?}
             */

          }, {
            key: "init",
            value: function init() {
              var extraTriggers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
              this.marshal.init(this.elementRef.nativeElement, this.DIRECTIVE_KEY, this.updateWithValue.bind(this), this.clearStyles.bind(this), extraTriggers);
            }
            /**
             * Add styles to the element using predefined style builder
             * @protected
             * @param {?} input
             * @param {?=} parent
             * @return {?}
             */

          }, {
            key: "addStyles",
            value: function addStyles(input, parent) {
              /** @type {?} */
              var builder = this.styleBuilder;
              /** @type {?} */

              var useCache = builder.shouldCache;
              /** @type {?} */

              var genStyles = this.styleCache.get(input);

              if (!genStyles || !useCache) {
                genStyles = builder.buildStyles(input, parent);

                if (useCache) {
                  this.styleCache.set(input, genStyles);
                }
              }

              this.mru = Object.assign({}, genStyles);
              this.applyStyleToElement(genStyles);
              builder.sideEffect(input, genStyles, parent);
            }
            /**
             * Remove generated styles from an element using predefined style builder
             * @protected
             * @return {?}
             */

          }, {
            key: "clearStyles",
            value: function clearStyles() {
              var _this34 = this;

              Object.keys(this.mru).forEach(
              /**
              * @param {?} k
              * @return {?}
              */

              /**
              * @param {?} k
              * @return {?}
              */
              function (k) {
                _this34.mru[k] = '';
              });
              this.applyStyleToElement(this.mru);
              this.mru = {};
            }
            /**
             * Force trigger style updates on DOM element
             * @protected
             * @return {?}
             */

          }, {
            key: "triggerUpdate",
            value: function triggerUpdate() {
              this.marshal.triggerUpdate(this.nativeElement, this.DIRECTIVE_KEY);
            }
            /**
             * Determine the DOM element's Flexbox flow (flex-direction).
             *
             * Check inline style first then check computed (stylesheet) style.
             * And optionally add the flow value to element's inline style.
             * @protected
             * @param {?} target
             * @param {?=} addIfMissing
             * @return {?}
             */

          }, {
            key: "getFlexFlowDirection",
            value: function getFlexFlowDirection(target) {
              var addIfMissing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

              if (target) {
                var _this$styler$getFlowD = this.styler.getFlowDirection(target),
                    _this$styler$getFlowD2 = _slicedToArray(_this$styler$getFlowD, 2),
                    value = _this$styler$getFlowD2[0],
                    hasInlineValue = _this$styler$getFlowD2[1];

                if (!hasInlineValue && addIfMissing) {
                  /** @type {?} */
                  var style = buildLayoutCSS(value);
                  /** @type {?} */

                  var elements = [target];
                  this.styler.applyStyleToElements(style, elements);
                }

                return value.trim();
              }

              return 'row';
            }
            /**
             * @protected
             * @param {?} target
             * @return {?}
             */

          }, {
            key: "hasWrap",
            value: function hasWrap(target) {
              return this.styler.hasWrap(target);
            }
            /**
             * Applies styles given via string pair or object map to the directive element
             * @protected
             * @param {?} style
             * @param {?=} value
             * @param {?=} element
             * @return {?}
             */

          }, {
            key: "applyStyleToElement",
            value: function applyStyleToElement(style, value) {
              var element = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.nativeElement;
              this.styler.applyStyleToElement(element, style, value);
            }
            /**
             * @protected
             * @param {?} val
             * @param {?} bp
             * @return {?}
             */

          }, {
            key: "setValue",
            value: function setValue(val, bp) {
              this.marshal.setValue(this.nativeElement, this.DIRECTIVE_KEY, val, bp);
            }
            /**
             * @protected
             * @param {?} input
             * @return {?}
             */

          }, {
            key: "updateWithValue",
            value: function updateWithValue(input) {
              if (this.currentValue !== input) {
                this.addStyles(input);
                this.currentValue = input;
              }
            }
          }]);

          return BaseDirective2;
        }();

        BaseDirective2.ɵfac = function BaseDirective2_Factory(t) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinvalidFactory"]();
        };

        BaseDirective2.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: BaseDirective2,
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
        });
        return BaseDirective2;
      }();
      /**
       * @fileoverview added by tsickle
       * Generated from: core/base/index.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: core/breakpoints/data/break-points.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * NOTE: Smaller ranges have HIGHER priority since the match is more specific
       * @type {?}
       */


      var DEFAULT_BREAKPOINTS = [{
        alias: 'xs',
        mediaQuery: 'screen and (min-width: 0px) and (max-width: 599.9px)',
        priority: 1000
      }, {
        alias: 'sm',
        mediaQuery: 'screen and (min-width: 600px) and (max-width: 959.9px)',
        priority: 900
      }, {
        alias: 'md',
        mediaQuery: 'screen and (min-width: 960px) and (max-width: 1279.9px)',
        priority: 800
      }, {
        alias: 'lg',
        mediaQuery: 'screen and (min-width: 1280px) and (max-width: 1919.9px)',
        priority: 700
      }, {
        alias: 'xl',
        mediaQuery: 'screen and (min-width: 1920px) and (max-width: 4999.9px)',
        priority: 600
      }, {
        alias: 'lt-sm',
        overlapping: true,
        mediaQuery: 'screen and (max-width: 599.9px)',
        priority: 950
      }, {
        alias: 'lt-md',
        overlapping: true,
        mediaQuery: 'screen and (max-width: 959.9px)',
        priority: 850
      }, {
        alias: 'lt-lg',
        overlapping: true,
        mediaQuery: 'screen and (max-width: 1279.9px)',
        priority: 750
      }, {
        alias: 'lt-xl',
        overlapping: true,
        priority: 650,
        mediaQuery: 'screen and (max-width: 1919.9px)'
      }, {
        alias: 'gt-xs',
        overlapping: true,
        mediaQuery: 'screen and (min-width: 600px)',
        priority: -950
      }, {
        alias: 'gt-sm',
        overlapping: true,
        mediaQuery: 'screen and (min-width: 960px)',
        priority: -850
      }, {
        alias: 'gt-md',
        overlapping: true,
        mediaQuery: 'screen and (min-width: 1280px)',
        priority: -750
      }, {
        alias: 'gt-lg',
        overlapping: true,
        mediaQuery: 'screen and (min-width: 1920px)',
        priority: -650
      }];
      /**
       * @fileoverview added by tsickle
       * Generated from: core/breakpoints/data/orientation-break-points.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /* tslint:disable */

      /** @type {?} */

      var HANDSET_PORTRAIT = '(orientation: portrait) and (max-width: 599.9px)';
      /** @type {?} */

      var HANDSET_LANDSCAPE = '(orientation: landscape) and (max-width: 959.9px)';
      /** @type {?} */

      var TABLET_PORTRAIT = '(orientation: portrait) and (min-width: 600px) and (max-width: 839.9px)';
      /** @type {?} */

      var TABLET_LANDSCAPE = '(orientation: landscape) and (min-width: 960px) and (max-width: 1279.9px)';
      /** @type {?} */

      var WEB_PORTRAIT = '(orientation: portrait) and (min-width: 840px)';
      /** @type {?} */

      var WEB_LANDSCAPE = '(orientation: landscape) and (min-width: 1280px)';
      /** @type {?} */

      var ScreenTypes = {
        'HANDSET': "".concat(HANDSET_PORTRAIT, ", ").concat(HANDSET_LANDSCAPE),
        'TABLET': "".concat(TABLET_PORTRAIT, " , ").concat(TABLET_LANDSCAPE),
        'WEB': "".concat(WEB_PORTRAIT, ", ").concat(WEB_LANDSCAPE, " "),
        'HANDSET_PORTRAIT': "".concat(HANDSET_PORTRAIT),
        'TABLET_PORTRAIT': "".concat(TABLET_PORTRAIT, " "),
        'WEB_PORTRAIT': "".concat(WEB_PORTRAIT),
        'HANDSET_LANDSCAPE': "".concat(HANDSET_LANDSCAPE),
        'TABLET_LANDSCAPE': "".concat(TABLET_LANDSCAPE),
        'WEB_LANDSCAPE': "".concat(WEB_LANDSCAPE)
      };
      /**
       * Extended Breakpoints for handset/tablets with landscape or portrait orientations
       * @type {?}
       */

      var ORIENTATION_BREAKPOINTS = [{
        'alias': 'handset',
        priority: 2000,
        'mediaQuery': ScreenTypes.HANDSET
      }, {
        'alias': 'handset.landscape',
        priority: 2000,
        'mediaQuery': ScreenTypes.HANDSET_LANDSCAPE
      }, {
        'alias': 'handset.portrait',
        priority: 2000,
        'mediaQuery': ScreenTypes.HANDSET_PORTRAIT
      }, {
        'alias': 'tablet',
        priority: 2100,
        'mediaQuery': ScreenTypes.TABLET
      }, {
        'alias': 'tablet.landscape',
        priority: 2100,
        'mediaQuery': ScreenTypes.TABLET_LANDSCAPE
      }, {
        'alias': 'tablet.portrait',
        priority: 2100,
        'mediaQuery': ScreenTypes.TABLET_PORTRAIT
      }, {
        'alias': 'web',
        priority: 2200,
        'mediaQuery': ScreenTypes.WEB,
        overlapping: true
      }, {
        'alias': 'web.landscape',
        priority: 2200,
        'mediaQuery': ScreenTypes.WEB_LANDSCAPE,
        overlapping: true
      }, {
        'alias': 'web.portrait',
        priority: 2200,
        'mediaQuery': ScreenTypes.WEB_PORTRAIT,
        overlapping: true
      }];
      /**
       * @fileoverview added by tsickle
       * Generated from: core/breakpoints/break-point.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: utils/object-extend.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Extends an object with the *enumerable* and *own* properties of one or more source objects,
       * similar to Object.assign.
       *
       * @param {?} dest The object which will have properties copied to it.
       * @param {...?} sources The source objects from which properties will be copied.
       * @return {?}
       */

      function extendObject(dest) {
        if (dest == null) {
          throw TypeError('Cannot convert undefined or null to object');
        }

        for (var _len2 = arguments.length, sources = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          sources[_key2 - 1] = arguments[_key2];
        }

        for (var _i3 = 0, _sources2 = sources; _i3 < _sources2.length; _i3++) {
          var source = _sources2[_i3];

          if (source != null) {
            for (var key in source) {
              if (source.hasOwnProperty(key)) {
                dest[key] = source[key];
              }
            }
          }
        }

        return dest;
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: core/breakpoints/breakpoint-tools.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var ALIAS_DELIMITERS = /(\.|-|_)/g;
      /**
       * @param {?} part
       * @return {?}
       */

      function firstUpperCase(part) {
        /** @type {?} */
        var first = part.length > 0 ? part.charAt(0) : '';
        /** @type {?} */

        var remainder = part.length > 1 ? part.slice(1) : '';
        return first.toUpperCase() + remainder;
      }
      /**
       * Converts snake-case to SnakeCase.
       * @param {?} name Text to UpperCamelCase
       * @return {?}
       */


      function camelCase(name) {
        return name.replace(ALIAS_DELIMITERS, '|').split('|').map(firstUpperCase).join('');
      }
      /**
       * For each breakpoint, ensure that a Suffix is defined;
       * fallback to UpperCamelCase the unique Alias value
       * @param {?} list
       * @return {?}
       */


      function validateSuffixes(list) {
        list.forEach(
        /**
        * @param {?} bp
        * @return {?}
        */
        function (bp) {
          if (!bp.suffix) {
            bp.suffix = camelCase(bp.alias); // create Suffix value based on alias

            bp.overlapping = !!bp.overlapping; // ensure default value
          }
        });
        return list;
      }
      /**
       * Merge a custom breakpoint list with the default list based on unique alias values
       *  - Items are added if the alias is not in the default list
       *  - Items are merged with the custom override if the alias exists in the default list
       * @param {?} defaults
       * @param {?=} custom
       * @return {?}
       */


      function mergeByAlias(defaults) {
        var custom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

        /** @type {?} */
        var dict = {};
        defaults.forEach(
        /**
        * @param {?} bp
        * @return {?}
        */

        /**
        * @param {?} bp
        * @return {?}
        */
        function (bp) {
          dict[bp.alias] = bp;
        }); // Merge custom breakpoints

        custom.forEach(
        /**
        * @param {?} bp
        * @return {?}
        */
        function (bp) {
          if (dict[bp.alias]) {
            extendObject(dict[bp.alias], bp);
          } else {
            dict[bp.alias] = bp;
          }
        });
        return validateSuffixes(Object.keys(dict).map(
        /**
        * @param {?} k
        * @return {?}
        */

        /**
        * @param {?} k
        * @return {?}
        */
        function (k) {
          return dict[k];
        }));
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: core/breakpoints/break-points-token.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       *  Injection token unique to the flex-layout library.
       *  Use this token when build a custom provider (see below).
       * @type {?}
       */


      var BREAKPOINTS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Token (@angular/flex-layout) Breakpoints', {
        providedIn: 'root',
        factory:
        /**
        * @return {?}
        */
        function factory() {
          /** @type {?} */
          var breakpoints = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(BREAKPOINT);
          /** @type {?} */

          var layoutConfig = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(LAYOUT_CONFIG);
          /** @type {?} */

          var bpFlattenArray = [].concat.apply([], (breakpoints || []).map(
          /**
          * @param {?} v
          * @return {?}
          */
          function (v) {
            return Array.isArray(v) ? v : [v];
          }));
          /** @type {?} */

          var builtIns = (layoutConfig.disableDefaultBps ? [] : DEFAULT_BREAKPOINTS).concat(layoutConfig.addOrientationBps ? ORIENTATION_BREAKPOINTS : []);
          return mergeByAlias(builtIns, bpFlattenArray);
        }
      });
      /**
       * @fileoverview added by tsickle
       * Generated from: core/utils/sort.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * HOF to sort the breakpoints by descending priority
       * @template T
       * @param {?} a
       * @param {?} b
       * @return {?}
       */

      function sortDescendingPriority(a, b) {
        /** @type {?} */
        var priorityA = a ? a.priority || 0 : 0;
        /** @type {?} */

        var priorityB = b ? b.priority || 0 : 0;
        return priorityB - priorityA;
      }
      /**
       * HOF to sort the breakpoints by ascending priority
       * @template T
       * @param {?} a
       * @param {?} b
       * @return {?}
       */


      function sortAscendingPriority(a, b) {
        /** @type {?} */
        var pA = a.priority || 0;
        /** @type {?} */

        var pB = b.priority || 0;
        return pA - pB;
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: core/breakpoints/break-point-registry.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Registry of 1..n MediaQuery breakpoint ranges
       * This is published as a provider and may be overridden from custom, application-specific ranges
       *
       */


      var BreakPointRegistry =
      /** @class */
      function () {
        /**
         * Registry of 1..n MediaQuery breakpoint ranges
         * This is published as a provider and may be overridden from custom, application-specific ranges
         *
         */
        var BreakPointRegistry = /*#__PURE__*/function () {
          /**
           * @param {?} list
           */
          function BreakPointRegistry(list) {
            _classCallCheck(this, BreakPointRegistry);

            /**
             * Memoized BreakPoint Lookups
             */
            this.findByMap = new Map();
            this.items = _toConsumableArray(list).sort(sortAscendingPriority);
          }
          /**
           * Search breakpoints by alias (e.g. gt-xs)
           * @param {?} alias
           * @return {?}
           */


          _createClass(BreakPointRegistry, [{
            key: "findByAlias",
            value: function findByAlias(alias) {
              return !alias ? null : this.findWithPredicate(alias,
              /**
              * @param {?} bp
              * @return {?}
              */
              function (bp) {
                return bp.alias == alias;
              });
            }
            /**
             * @param {?} query
             * @return {?}
             */

          }, {
            key: "findByQuery",
            value: function findByQuery(query) {
              return this.findWithPredicate(query,
              /**
              * @param {?} bp
              * @return {?}
              */
              function (bp) {
                return bp.mediaQuery == query;
              });
            }
            /**
             * Get all the breakpoints whose ranges could overlapping `normal` ranges;
             * e.g. gt-sm overlaps md, lg, and xl
             * @return {?}
             */

          }, {
            key: "overlappings",
            get: function get() {
              return this.items.filter(
              /**
              * @param {?} it
              * @return {?}
              */

              /**
              * @param {?} it
              * @return {?}
              */
              function (it) {
                return it.overlapping == true;
              });
            }
            /**
             * Get list of all registered (non-empty) breakpoint aliases
             * @return {?}
             */

          }, {
            key: "aliases",
            get: function get() {
              return this.items.map(
              /**
              * @param {?} it
              * @return {?}
              */

              /**
              * @param {?} it
              * @return {?}
              */
              function (it) {
                return it.alias;
              });
            }
            /**
             * Aliases are mapped to properties using suffixes
             * e.g.  'gt-sm' for property 'layout'  uses suffix 'GtSm'
             * for property layoutGtSM.
             * @return {?}
             */

          }, {
            key: "suffixes",
            get: function get() {
              return this.items.map(
              /**
              * @param {?} it
              * @return {?}
              */

              /**
              * @param {?} it
              * @return {?}
              */
              function (it) {
                return !!it.suffix ? it.suffix : '';
              });
            }
            /**
             * Memoized lookup using custom predicate function
             * @private
             * @param {?} key
             * @param {?} searchFn
             * @return {?}
             */

          }, {
            key: "findWithPredicate",
            value: function findWithPredicate(key, searchFn) {
              /** @type {?} */
              var response = this.findByMap.get(key);

              if (!response) {
                response = this.items.find(searchFn) || null;
                this.findByMap.set(key, response);
              }

              return response || null;
            }
          }]);

          return BreakPointRegistry;
        }();

        BreakPointRegistry.ɵfac = function BreakPointRegistry_Factory(t) {
          return new (t || BreakPointRegistry)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](BREAKPOINTS));
        };
        /** @nocollapse */


        BreakPointRegistry.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
          factory: function BreakPointRegistry_Factory() {
            return new BreakPointRegistry(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(BREAKPOINTS));
          },
          token: BreakPointRegistry,
          providedIn: "root"
        });
        return BreakPointRegistry;
      }();
      /**
       * @fileoverview added by tsickle
       * Generated from: core/breakpoints/index.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: core/match-media/match-media.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * MediaMonitor configures listeners to mediaQuery changes and publishes an Observable facade to
       * convert mediaQuery change callbacks to subscriber notifications. These notifications will be
       * performed within the ng Zone to trigger change detections and component updates.
       *
       * NOTE: both mediaQuery activations and de-activations are announced in notifications
       */


      var MatchMedia =
      /** @class */
      function () {
        /**
         * MediaMonitor configures listeners to mediaQuery changes and publishes an Observable facade to
         * convert mediaQuery change callbacks to subscriber notifications. These notifications will be
         * performed within the ng Zone to trigger change detections and component updates.
         *
         * NOTE: both mediaQuery activations and de-activations are announced in notifications
         */
        var MatchMedia = /*#__PURE__*/function () {
          /**
           * @param {?} _zone
           * @param {?} _platformId
           * @param {?} _document
           */
          function MatchMedia(_zone, _platformId, _document) {
            _classCallCheck(this, MatchMedia);

            this._zone = _zone;
            this._platformId = _platformId;
            this._document = _document;
            /**
             * Initialize source with 'all' so all non-responsive APIs trigger style updates
             */

            this.source = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new MediaChange(true));
            this.registry = new Map();
            this.pendingRemoveListenerFns = [];
            this._observable$ = this.source.asObservable();
          }
          /**
           * Publish list of all current activations
           * @return {?}
           */


          _createClass(MatchMedia, [{
            key: "activations",
            get: function get() {
              /** @type {?} */
              var results = [];
              this.registry.forEach(
              /**
              * @param {?} mql
              * @param {?} key
              * @return {?}
              */
              function (mql, key) {
                if (mql.matches) {
                  results.push(key);
                }
              });
              return results;
            }
            /**
             * For the specified mediaQuery?
             * @param {?} mediaQuery
             * @return {?}
             */

          }, {
            key: "isActive",
            value: function isActive(mediaQuery) {
              /** @type {?} */
              var mql = this.registry.get(mediaQuery);
              return !!mql ? mql.matches : this.registerQuery(mediaQuery).some(
              /**
              * @param {?} m
              * @return {?}
              */

              /**
              * @param {?} m
              * @return {?}
              */
              function (m) {
                return m.matches;
              });
            }
            /**
             * External observers can watch for all (or a specific) mql changes.
             * Typically used by the MediaQueryAdaptor; optionally available to components
             * who wish to use the MediaMonitor as mediaMonitor$ observable service.
             *
             * Use deferred registration process to register breakpoints only on subscription
             * This logic also enforces logic to register all mediaQueries BEFORE notify
             * subscribers of notifications.
             * @param {?=} mqList
             * @param {?=} filterOthers
             * @return {?}
             */

          }, {
            key: "observe",
            value: function observe(mqList) {
              var _this35 = this;

              var filterOthers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

              if (mqList && mqList.length) {
                /** @type {?} */
                var matchMedia$ = this._observable$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(
                /**
                * @param {?} change
                * @return {?}
                */
                function (change) {
                  return !filterOthers ? true : mqList.indexOf(change.mediaQuery) > -1;
                }));
                /** @type {?} */


                var registration$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](
                /**
                * @param {?} observer
                * @return {?}
                */
                function (observer) {
                  // tslint:disable-line:max-line-length

                  /** @type {?} */
                  var matches = _this35.registerQuery(mqList);

                  if (matches.length) {
                    /** @type {?} */
                    var lastChange =
                    /** @type {?} */
                    matches.pop();
                    matches.forEach(
                    /**
                    * @param {?} e
                    * @return {?}
                    */
                    function (e) {
                      observer.next(e);
                    });

                    _this35.source.next(lastChange); // last match is cached

                  }

                  observer.complete();
                });
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(registration$, matchMedia$);
              }

              return this._observable$;
            }
            /**
             * Based on the BreakPointRegistry provider, register internal listeners for each unique
             * mediaQuery. Each listener emits specific MediaChange data to observers
             * @param {?} mediaQuery
             * @return {?}
             */

          }, {
            key: "registerQuery",
            value: function registerQuery(mediaQuery) {
              var _this36 = this;

              /** @type {?} */
              var list = Array.isArray(mediaQuery) ? mediaQuery : [mediaQuery];
              /** @type {?} */

              var matches = [];
              buildQueryCss(list, this._document);
              list.forEach(
              /**
              * @param {?} query
              * @return {?}
              */
              function (query) {
                /** @type {?} */
                var onMQLEvent =
                /**
                * @param {?} e
                * @return {?}
                */
                function onMQLEvent(e) {
                  _this36._zone.run(
                  /**
                  * @return {?}
                  */
                  function () {
                    return _this36.source.next(new MediaChange(e.matches, query));
                  });
                };
                /** @type {?} */


                var mql = _this36.registry.get(query);

                if (!mql) {
                  mql = _this36.buildMQL(query);
                  mql.addListener(onMQLEvent);

                  _this36.pendingRemoveListenerFns.push(
                  /**
                  * @return {?}
                  */
                  function () {
                    return (
                      /** @type {?} */
                      mql.removeListener(onMQLEvent)
                    );
                  });

                  _this36.registry.set(query, mql);
                }

                if (mql.matches) {
                  matches.push(new MediaChange(true, query));
                }
              });
              return matches;
            }
            /**
             * @return {?}
             */

          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              /** @type {?} */
              var fn;

              while (fn = this.pendingRemoveListenerFns.pop()) {
                fn();
              }
            }
            /**
             * Call window.matchMedia() to build a MediaQueryList; which
             * supports 0..n listeners for activation/deactivation
             * @protected
             * @param {?} query
             * @return {?}
             */

          }, {
            key: "buildMQL",
            value: function buildMQL(query) {
              return constructMql(query, Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platformId));
            }
          }]);

          return MatchMedia;
        }();

        MatchMedia.ɵfac = function MatchMedia_Factory(t) {
          return new (t || MatchMedia)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
        };
        /** @nocollapse */


        MatchMedia.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
          factory: function MatchMedia_Factory() {
            return new MatchMedia(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
          },
          token: MatchMedia,
          providedIn: "root"
        });
        return MatchMedia;
      }();
      /**
       * Private global registry for all dynamically-created, injected style tags
       * @see prepare(query)
       * @type {?}
       */


      var ALL_STYLES = {};
      /**
       * For Webkit engines that only trigger the MediaQueryList Listener
       * when there is at least one CSS selector for the respective media query.
       *
       * @param {?} mediaQueries
       * @param {?} _document
       * @return {?}
       */

      function buildQueryCss(mediaQueries, _document) {
        /** @type {?} */
        var list = mediaQueries.filter(
        /**
        * @param {?} it
        * @return {?}
        */

        /**
        * @param {?} it
        * @return {?}
        */
        function (it) {
          return !ALL_STYLES[it];
        });

        if (list.length > 0) {
          /** @type {?} */
          var query = list.join(', ');

          try {
            /** @type {?} */
            var styleEl = _document.createElement('style');

            styleEl.setAttribute('type', 'text/css');

            if (!
            /** @type {?} */
            styleEl.styleSheet) {
              /** @type {?} */
              var cssText = "\n/*\n  @angular/flex-layout - workaround for possible browser quirk with mediaQuery listeners\n  see http://bit.ly/2sd4HMP\n*/\n@media ".concat(query, " {.fx-query-test{ }}\n");
              styleEl.appendChild(_document.createTextNode(cssText));
            }

            /** @type {?} */
            _document.head.appendChild(styleEl); // Store in private global registry


            list.forEach(
            /**
            * @param {?} mq
            * @return {?}
            */

            /**
            * @param {?} mq
            * @return {?}
            */
            function (mq) {
              return ALL_STYLES[mq] = styleEl;
            });
          } catch (e) {
            console.error(e);
          }
        }
      }
      /**
       * @param {?} query
       * @param {?} isBrowser
       * @return {?}
       */


      function constructMql(query, isBrowser) {
        /** @type {?} */
        var canListen = isBrowser && !!
        /** @type {?} */
        window.matchMedia('all').addListener;
        return canListen ?
        /** @type {?} */
        window.matchMedia(query) :
        /** @type {?} */
        {
          matches: query === 'all' || query === '',
          media: query,
          addListener:
          /**
          * @return {?}
          */
          function addListener() {},
          removeListener:
          /**
          * @return {?}
          */
          function removeListener() {},
          onchange: null,

          /**
           * @return {?}
           */
          addEventListener: function addEventListener() {},

          /**
           * @return {?}
           */
          removeEventListener: function removeEventListener() {},

          /**
           * @return {?}
           */
          dispatchEvent: function dispatchEvent() {
            return false;
          }
        };
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: core/match-media/mock/mock-match-media.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * MockMatchMedia mocks calls to the Window API matchMedia with a build of a simulated
       * MockMediaQueryListener. Methods are available to simulate an activation of a mediaQuery
       * range and to clearAll mediaQuery listeners.
       */


      var MockMatchMedia =
      /** @class */
      function () {
        /**
         * MockMatchMedia mocks calls to the Window API matchMedia with a build of a simulated
         * MockMediaQueryListener. Methods are available to simulate an activation of a mediaQuery
         * range and to clearAll mediaQuery listeners.
         */
        var MockMatchMedia = /*#__PURE__*/function (_MatchMedia) {
          _inherits(MockMatchMedia, _MatchMedia);

          var _super24 = _createSuper(MockMatchMedia);

          // Allow fallback to overlapping mediaQueries

          /**
           * @param {?} _zone
           * @param {?} _platformId
           * @param {?} _document
           * @param {?} _breakpoints
           */
          function MockMatchMedia(_zone, _platformId, _document, _breakpoints) {
            var _this37;

            _classCallCheck(this, MockMatchMedia);

            _this37 = _super24.call(this, _zone, _platformId, _document);
            _this37._breakpoints = _breakpoints;
            _this37.autoRegisterQueries = true; // Used for testing BreakPoint registrations
            // Used for testing BreakPoint registrations

            _this37.useOverlaps = false; // Allow fallback to overlapping mediaQueries

            return _this37;
          }
          /**
           * Easy method to clear all listeners for all mediaQueries
           * @return {?}
           */


          _createClass(MockMatchMedia, [{
            key: "clearAll",
            value: function clearAll() {
              this.registry.forEach(
              /**
              * @param {?} mql
              * @return {?}
              */
              function (mql) {
                /** @type {?} */
                mql.destroy();
              });
              this.registry.clear();
              this.useOverlaps = false;
            }
            /**
             * Feature to support manual, simulated activation of a mediaQuery.
             * @param {?} mediaQuery
             * @param {?=} useOverlaps
             * @return {?}
             */

          }, {
            key: "activate",
            value: function activate(mediaQuery) {
              var useOverlaps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
              useOverlaps = useOverlaps || this.useOverlaps;
              mediaQuery = this._validateQuery(mediaQuery);

              if (useOverlaps || !this.isActive(mediaQuery)) {
                this._deactivateAll();

                this._registerMediaQuery(mediaQuery);

                this._activateWithOverlaps(mediaQuery, useOverlaps);
              }

              return this.hasActivated;
            }
            /**
             * Converts an optional mediaQuery alias to a specific, valid mediaQuery
             * @param {?} queryOrAlias
             * @return {?}
             */

          }, {
            key: "_validateQuery",
            value: function _validateQuery(queryOrAlias) {
              /** @type {?} */
              var bp = this._breakpoints.findByAlias(queryOrAlias);

              return bp && bp.mediaQuery || queryOrAlias;
            }
            /**
             * Manually onMediaChange any overlapping mediaQueries to simulate
             * similar functionality in the window.matchMedia()
             * @private
             * @param {?} mediaQuery
             * @param {?} useOverlaps
             * @return {?}
             */

          }, {
            key: "_activateWithOverlaps",
            value: function _activateWithOverlaps(mediaQuery, useOverlaps) {
              if (useOverlaps) {
                /** @type {?} */
                var bp = this._breakpoints.findByQuery(mediaQuery);
                /** @type {?} */


                var alias = bp ? bp.alias : 'unknown'; // Simulate activation of overlapping lt-<XXX> ranges

                switch (alias) {
                  case 'lg':
                    this._activateByAlias(['lt-xl']);

                    break;

                  case 'md':
                    this._activateByAlias(['lt-xl', 'lt-lg']);

                    break;

                  case 'sm':
                    this._activateByAlias(['lt-xl', 'lt-lg', 'lt-md']);

                    break;

                  case 'xs':
                    this._activateByAlias(['lt-xl', 'lt-lg', 'lt-md', 'lt-sm']);

                    break;
                } // Simulate activation of overlapping gt-<xxxx> mediaQuery ranges


                switch (alias) {
                  case 'xl':
                    this._activateByAlias(['gt-lg', 'gt-md', 'gt-sm', 'gt-xs']);

                    break;

                  case 'lg':
                    this._activateByAlias(['gt-md', 'gt-sm', 'gt-xs']);

                    break;

                  case 'md':
                    this._activateByAlias(['gt-sm', 'gt-xs']);

                    break;

                  case 'sm':
                    this._activateByAlias(['gt-xs']);

                    break;
                }
              } // Activate last since the responsiveActivation is watching *this* mediaQuery


              return this._activateByQuery(mediaQuery);
            }
            /**
             *
             * @private
             * @param {?} aliases
             * @return {?}
             */

          }, {
            key: "_activateByAlias",
            value: function _activateByAlias(aliases) {
              var _this38 = this;

              /** @type {?} */
              var activate =
              /**
              * @param {?} alias
              * @return {?}
              */
              function activate(alias) {
                /** @type {?} */
                var bp = _this38._breakpoints.findByAlias(alias);

                _this38._activateByQuery(bp ? bp.mediaQuery : alias);
              };

              aliases.forEach(activate);
            }
            /**
             *
             * @private
             * @param {?} mediaQuery
             * @return {?}
             */

          }, {
            key: "_activateByQuery",
            value: function _activateByQuery(mediaQuery) {
              if (!this.registry.has(mediaQuery) && this.autoRegisterQueries) {
                this._registerMediaQuery(mediaQuery);
              }
              /** @type {?} */


              var mql =
              /** @type {?} */
              this.registry.get(mediaQuery);

              if (mql && !this.isActive(mediaQuery)) {
                this.registry.set(mediaQuery, mql.activate());
              }

              return this.hasActivated;
            }
            /**
             * Deactivate all current MQLs and reset the buffer
             * @private
             * @template THIS
             * @this {THIS}
             * @return {THIS}
             */

          }, {
            key: "_deactivateAll",
            value: function _deactivateAll() {
              /** @type {?} */
              this.registry.forEach(
              /**
              * @param {?} it
              * @return {?}
              */
              function (it) {
                /** @type {?} */
                it.deactivate();
              });
              return (
                /** @type {?} */
                this
              );
            }
            /**
             * Insure the mediaQuery is registered with MatchMedia
             * @private
             * @param {?} mediaQuery
             * @return {?}
             */

          }, {
            key: "_registerMediaQuery",
            value: function _registerMediaQuery(mediaQuery) {
              if (!this.registry.has(mediaQuery) && this.autoRegisterQueries) {
                this.registerQuery(mediaQuery);
              }
            }
            /**
             * Call window.matchMedia() to build a MediaQueryList; which
             * supports 0..n listeners for activation/deactivation
             * @protected
             * @param {?} query
             * @return {?}
             */

          }, {
            key: "buildMQL",
            value: function buildMQL(query) {
              return new MockMediaQueryList(query);
            }
            /**
             * @protected
             * @return {?}
             */

          }, {
            key: "hasActivated",
            get: function get() {
              return this.activations.length > 0;
            }
          }]);

          return MockMatchMedia;
        }(MatchMedia);

        MockMatchMedia.ɵfac = function MockMatchMedia_Factory(t) {
          return new (t || MockMatchMedia)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](BreakPointRegistry));
        };

        MockMatchMedia.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: MockMatchMedia,
          factory: function factory(t) {
            return MockMatchMedia.ɵfac(t);
          }
        });
        return MockMatchMedia;
      }();
      /**
       * Special internal class to simulate a MediaQueryList and
       * - supports manual activation to simulate mediaQuery matching
       * - manages listeners
       */


      var MockMediaQueryList = /*#__PURE__*/function () {
        /**
         * @param {?} _mediaQuery
         */
        function MockMediaQueryList(_mediaQuery) {
          _classCallCheck(this, MockMediaQueryList);

          this._mediaQuery = _mediaQuery;
          this._isActive = false;
          this._listeners = [];
          this.onchange = null;
        }
        /**
         * @return {?}
         */


        _createClass(MockMediaQueryList, [{
          key: "matches",
          get: function get() {
            return this._isActive;
          }
          /**
           * @return {?}
           */

        }, {
          key: "media",
          get: function get() {
            return this._mediaQuery;
          }
          /**
           * Destroy the current list by deactivating the
           * listeners and clearing the internal list
           * @return {?}
           */

        }, {
          key: "destroy",
          value: function destroy() {
            this.deactivate();
            this._listeners = [];
          }
          /**
           * Notify all listeners that 'matches === TRUE'
           * @return {?}
           */

        }, {
          key: "activate",
          value: function activate() {
            var _this39 = this;

            if (!this._isActive) {
              this._isActive = true;

              this._listeners.forEach(
              /**
              * @param {?} callback
              * @return {?}
              */
              function (callback) {
                /** @type {?} */
                var cb =
                /** @type {?} */
                callback;
                cb.call(_this39,
                /** @type {?} */
                {
                  matches: _this39.matches,
                  media: _this39.media
                });
              });
            }

            return this;
          }
          /**
           * Notify all listeners that 'matches === false'
           * @return {?}
           */

        }, {
          key: "deactivate",
          value: function deactivate() {
            var _this40 = this;

            if (this._isActive) {
              this._isActive = false;

              this._listeners.forEach(
              /**
              * @param {?} callback
              * @return {?}
              */
              function (callback) {
                /** @type {?} */
                var cb =
                /** @type {?} */
                callback;
                cb.call(_this40,
                /** @type {?} */
                {
                  matches: _this40.matches,
                  media: _this40.media
                });
              });
            }

            return this;
          }
          /**
           * Add a listener to our internal list to activate later
           * @param {?} listener
           * @return {?}
           */

        }, {
          key: "addListener",
          value: function addListener(listener) {
            if (this._listeners.indexOf(listener) === -1) {
              this._listeners.push(listener);
            }

            if (this._isActive) {
              /** @type {?} */
              var cb =
              /** @type {?} */
              listener;
              cb.call(this,
              /** @type {?} */
              {
                matches: this.matches,
                media: this.media
              });
            }
          }
          /**
           * Don't need to remove listeners in the testing environment
           * @param {?} _
           * @return {?}
           */

        }, {
          key: "removeListener",
          value: function removeListener(_) {}
          /**
           * @param {?} _
           * @param {?} __
           * @param {?=} ___
           * @return {?}
           */

        }, {
          key: "addEventListener",
          value: function addEventListener(_, __, ___) {}
          /**
           * @param {?} _
           * @param {?} __
           * @param {?=} ___
           * @return {?}
           */

        }, {
          key: "removeEventListener",
          value: function removeEventListener(_, __, ___) {}
          /**
           * @param {?} _
           * @return {?}
           */

        }, {
          key: "dispatchEvent",
          value: function dispatchEvent(_) {
            return false;
          }
        }]);

        return MockMediaQueryList;
      }();
      /**
       * Pre-configured provider for MockMatchMedia
       * @type {?}
       */


      var MockMatchMediaProvider = {
        // tslint:disable-line:variable-name
        provide: MatchMedia,
        useClass: MockMatchMedia
      };
      /**
       * @fileoverview added by tsickle
       * Generated from: core/match-media/index.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: core/media-marshaller/print-hook.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */

      var PRINT = 'print';
      /** @type {?} */

      var BREAKPOINT_PRINT = {
        alias: PRINT,
        mediaQuery: PRINT,
        priority: 1000
      };
      /**
       * PrintHook - Use to intercept print MediaQuery activations and force
       *             layouts to render with the specified print alias/breakpoint
       *
       * Used in MediaMarshaller and MediaObserver
       */

      var PrintHook =
      /** @class */
      function () {
        /**
         * PrintHook - Use to intercept print MediaQuery activations and force
         *             layouts to render with the specified print alias/breakpoint
         *
         * Used in MediaMarshaller and MediaObserver
         */
        var PrintHook = /*#__PURE__*/function () {
          /**
           * @param {?} breakpoints
           * @param {?} layoutConfig
           * @param {?} _document
           */
          function PrintHook(breakpoints, layoutConfig, _document) {
            _classCallCheck(this, PrintHook);

            this.breakpoints = breakpoints;
            this.layoutConfig = layoutConfig;
            this._document = _document; // registeredBeforeAfterPrintHooks tracks if we registered the `beforeprint`
            //  and `afterprint` event listeners.

            this.registeredBeforeAfterPrintHooks = false; // isPrintingBeforeAfterEvent is used to track if we are printing from within
            // a `beforeprint` event handler. This prevents the typicall `stopPrinting`
            // form `interceptEvents` so that printing is not stopped while the dialog
            // is still open. This is an extension of the `isPrinting` property on
            // browsers which support `beforeprint` and `afterprint` events.

            this.isPrintingBeforeAfterEvent = false;
            this.beforePrintEventListeners = [];
            this.afterPrintEventListeners = [];
            /**
             * Is this service currently in Print-mode ?
             */

            this.isPrinting = false;
            this.queue = new PrintQueue();
            this.deactivations = [];
          }
          /**
           * Add 'print' mediaQuery: to listen for matchMedia activations
           * @param {?} queries
           * @return {?}
           */


          _createClass(PrintHook, [{
            key: "withPrintQuery",
            value: function withPrintQuery(queries) {
              return [].concat(_toConsumableArray(queries), [PRINT]);
            }
            /**
             * Is the MediaChange event for any 'print' \@media
             * @param {?} e
             * @return {?}
             */

          }, {
            key: "isPrintEvent",
            value: function isPrintEvent(e) {
              return e.mediaQuery.startsWith(PRINT);
            }
            /**
             * What is the desired mqAlias to use while printing?
             * @return {?}
             */

          }, {
            key: "printAlias",
            get: function get() {
              return this.layoutConfig.printWithBreakpoints || [];
            }
            /**
             * Lookup breakpoints associated with print aliases.
             * @return {?}
             */

          }, {
            key: "printBreakPoints",
            get: function get() {
              var _this41 = this;

              return (
                /** @type {?} */
                this.printAlias.map(
                /**
                * @param {?} alias
                * @return {?}
                */

                /**
                * @param {?} alias
                * @return {?}
                */
                function (alias) {
                  return _this41.breakpoints.findByAlias(alias);
                }).filter(
                /**
                * @param {?} bp
                * @return {?}
                */

                /**
                * @param {?} bp
                * @return {?}
                */
                function (bp) {
                  return bp !== null;
                })
              );
            }
            /**
             * Lookup breakpoint associated with mediaQuery
             * @param {?} __0
             * @return {?}
             */

          }, {
            key: "getEventBreakpoints",
            value: function getEventBreakpoints(_ref2) {
              var mediaQuery = _ref2.mediaQuery;

              /** @type {?} */
              var bp = this.breakpoints.findByQuery(mediaQuery);
              /** @type {?} */

              var list = bp ? [].concat(_toConsumableArray(this.printBreakPoints), [bp]) : this.printBreakPoints;
              return list.sort(sortDescendingPriority);
            }
            /**
             * Update event with printAlias mediaQuery information
             * @param {?} event
             * @return {?}
             */

          }, {
            key: "updateEvent",
            value: function updateEvent(event) {
              /** @type {?} */
              var bp = this.breakpoints.findByQuery(event.mediaQuery);

              if (this.isPrintEvent(event)) {
                // Reset from 'print' to first (highest priority) print breakpoint
                bp = this.getEventBreakpoints(event)[0];
                event.mediaQuery = bp ? bp.mediaQuery : '';
              }

              return mergeAlias(event, bp);
            } // registerBeforeAfterPrintHooks registers a `beforeprint` event hook so we can
            // trigger print styles synchronously and apply proper layout styles.
            // It is a noop if the hooks have already been registered or if the document's
            // `defaultView` is not available.

            /**
             * @private
             * @param {?} target
             * @return {?}
             */

          }, {
            key: "registerBeforeAfterPrintHooks",
            value: function registerBeforeAfterPrintHooks(target) {
              var _this42 = this;

              // `defaultView` may be null when rendering on the server or in other contexts.
              if (!this._document.defaultView || this.registeredBeforeAfterPrintHooks) {
                return;
              }

              this.registeredBeforeAfterPrintHooks = true;
              /** @type {?} */

              var beforePrintListener =
              /**
              * @return {?}
              */
              function beforePrintListener() {
                // If we aren't already printing, start printing and update the styles as
                // if there was a regular print `MediaChange`(from matchMedia).
                if (!_this42.isPrinting) {
                  _this42.isPrintingBeforeAfterEvent = true;

                  _this42.startPrinting(target, _this42.getEventBreakpoints(new MediaChange(true, PRINT)));

                  target.updateStyles();
                }
              };
              /** @type {?} */


              var afterPrintListener =
              /**
              * @return {?}
              */
              function afterPrintListener() {
                // If we aren't already printing, start printing and update the styles as
                // if there was a regular print `MediaChange`(from matchMedia).
                _this42.isPrintingBeforeAfterEvent = false;

                if (_this42.isPrinting) {
                  _this42.stopPrinting(target);

                  target.updateStyles();
                }
              }; // Could we have teardown logic to remove if there are no print listeners being used?


              this._document.defaultView.addEventListener('beforeprint', beforePrintListener);

              this._document.defaultView.addEventListener('afterprint', afterPrintListener);

              this.beforePrintEventListeners.push(beforePrintListener);
              this.afterPrintEventListeners.push(afterPrintListener);
            }
            /**
             * Prepare RxJS filter operator with partial application
             * @param {?} target
             * @return {?} pipeable filter predicate
             */

          }, {
            key: "interceptEvents",
            value: function interceptEvents(target) {
              var _this43 = this;

              this.registerBeforeAfterPrintHooks(target);
              return (
                /**
                * @param {?} event
                * @return {?}
                */
                function (event) {
                  if (_this43.isPrintEvent(event)) {
                    if (event.matches && !_this43.isPrinting) {
                      _this43.startPrinting(target, _this43.getEventBreakpoints(event));

                      target.updateStyles();
                    } else if (!event.matches && _this43.isPrinting && !_this43.isPrintingBeforeAfterEvent) {
                      _this43.stopPrinting(target);

                      target.updateStyles();
                    }
                  } else {
                    _this43.collectActivations(event);
                  }
                }
              );
            }
            /**
             * Stop mediaChange event propagation in event streams
             * @return {?}
             */

          }, {
            key: "blockPropagation",
            value: function blockPropagation() {
              var _this44 = this;

              return (
                /**
                * @param {?} event
                * @return {?}
                */
                function (event) {
                  return !(_this44.isPrinting || _this44.isPrintEvent(event));
                }
              );
            }
            /**
             * Save current activateBreakpoints (for later restore)
             * and substitute only the printAlias breakpoint
             * @protected
             * @param {?} target
             * @param {?} bpList
             * @return {?}
             */

          }, {
            key: "startPrinting",
            value: function startPrinting(target, bpList) {
              this.isPrinting = true;
              target.activatedBreakpoints = this.queue.addPrintBreakpoints(bpList);
            }
            /**
             * For any print de-activations, reset the entire print queue
             * @protected
             * @param {?} target
             * @return {?}
             */

          }, {
            key: "stopPrinting",
            value: function stopPrinting(target) {
              target.activatedBreakpoints = this.deactivations;
              this.deactivations = [];
              this.queue.clear();
              this.isPrinting = false;
            }
            /**
             * To restore pre-Print Activations, we must capture the proper
             * list of breakpoint activations BEFORE print starts. OnBeforePrint()
             * is supported; so 'print' mediaQuery activations are used as a fallback
             * in browsers without `beforeprint` support.
             *
             * >  But activated breakpoints are deactivated BEFORE 'print' activation.
             *
             * Let's capture all de-activations using the following logic:
             *
             *  When not printing:
             *    - clear cache when activating non-print breakpoint
             *    - update cache (and sort) when deactivating
             *
             *  When printing:
             *    - sort and save when starting print
             *    - restore as activatedTargets and clear when stop printing
             * @param {?} event
             * @return {?}
             */

          }, {
            key: "collectActivations",
            value: function collectActivations(event) {
              if (!this.isPrinting || this.isPrintingBeforeAfterEvent) {
                if (!event.matches) {
                  /** @type {?} */
                  var bp = this.breakpoints.findByQuery(event.mediaQuery);

                  if (bp) {
                    // Deactivating a breakpoint
                    this.deactivations.push(bp);
                    this.deactivations.sort(sortDescendingPriority);
                  }
                } else if (!this.isPrintingBeforeAfterEvent) {
                  // Only clear deactivations if we aren't printing from a `beforeprint` event.
                  // Otherwise this will clear before `stopPrinting()` is called to restore
                  // the pre-Print Activations.
                  this.deactivations = [];
                }
              }
            }
            /**
             * Teardown logic for the service.
             * @return {?}
             */

          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              var _this45 = this;

              this.beforePrintEventListeners.forEach(
              /**
              * @param {?} l
              * @return {?}
              */

              /**
              * @param {?} l
              * @return {?}
              */
              function (l) {
                return _this45._document.defaultView.removeEventListener('beforeprint', l);
              });
              this.afterPrintEventListeners.forEach(
              /**
              * @param {?} l
              * @return {?}
              */

              /**
              * @param {?} l
              * @return {?}
              */
              function (l) {
                return _this45._document.defaultView.removeEventListener('afterprint', l);
              });
            }
          }]);

          return PrintHook;
        }();

        PrintHook.ɵfac = function PrintHook_Factory(t) {
          return new (t || PrintHook)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](BreakPointRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](LAYOUT_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
        };
        /** @nocollapse */


        PrintHook.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
          factory: function PrintHook_Factory() {
            return new PrintHook(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(BreakPointRegistry), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(LAYOUT_CONFIG), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
          },
          token: PrintHook,
          providedIn: "root"
        });
        return PrintHook;
      }(); // ************************************************************************
      // Internal Utility class 'PrintQueue'
      // ************************************************************************

      /**
       * Utility class to manage print breakpoints + activatedBreakpoints
       * with correct sorting WHILE printing
       */


      var PrintQueue = /*#__PURE__*/function () {
        function PrintQueue() {
          _classCallCheck(this, PrintQueue);

          /**
           * Sorted queue with prioritized print breakpoints
           */
          this.printBreakpoints = [];
        }
        /**
         * @param {?} bpList
         * @return {?}
         */


        _createClass(PrintQueue, [{
          key: "addPrintBreakpoints",
          value: function addPrintBreakpoints(bpList) {
            var _this46 = this;

            bpList.push(BREAKPOINT_PRINT);
            bpList.sort(sortDescendingPriority);
            bpList.forEach(
            /**
            * @param {?} bp
            * @return {?}
            */

            /**
            * @param {?} bp
            * @return {?}
            */
            function (bp) {
              return _this46.addBreakpoint(bp);
            });
            return this.printBreakpoints;
          }
          /**
           * Add Print breakpoint to queue
           * @param {?} bp
           * @return {?}
           */

        }, {
          key: "addBreakpoint",
          value: function addBreakpoint(bp) {
            if (!!bp) {
              /** @type {?} */
              var bpInList = this.printBreakpoints.find(
              /**
              * @param {?} it
              * @return {?}
              */

              /**
              * @param {?} it
              * @return {?}
              */
              function (it) {
                return it.mediaQuery === bp.mediaQuery;
              });

              if (bpInList === undefined) {
                // If this is a `printAlias` breakpoint, then append. If a true 'print' breakpoint,
                // register as highest priority in the queue
                this.printBreakpoints = isPrintBreakPoint(bp) ? [bp].concat(_toConsumableArray(this.printBreakpoints)) : [].concat(_toConsumableArray(this.printBreakpoints), [bp]);
              }
            }
          }
          /**
           * Restore original activated breakpoints and clear internal caches
           * @return {?}
           */

        }, {
          key: "clear",
          value: function clear() {
            this.printBreakpoints = [];
          }
        }]);

        return PrintQueue;
      }(); // ************************************************************************
      // Internal Utility methods
      // ************************************************************************

      /**
       * Only support intercept queueing if the Breakpoint is a print \@media query
       * @param {?} bp
       * @return {?}
       */


      function isPrintBreakPoint(bp) {
        return bp ? bp.mediaQuery.startsWith(PRINT) : false;
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: core/utils/array.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Wraps the provided value in an array, unless the provided value is an array.
       * @template T
       * @param {?} value
       * @return {?}
       */


      function coerceArray(value) {
        return Array.isArray(value) ? value : [value];
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: core/media-observer/media-observer.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * MediaObserver enables applications to listen for 1..n mediaQuery activations and to determine
       * if a mediaQuery is currently activated.
       *
       * Since a breakpoint change will first deactivate 1...n mediaQueries and then possibly activate
       * 1..n mediaQueries, the MediaObserver will debounce notifications and report ALL *activations*
       * in 1 event notification. The reported activations will be sorted in descending priority order.
       *
       * This class uses the BreakPoint Registry to inject alias information into the raw MediaChange
       * notification. For custom mediaQuery notifications, alias information will not be injected and
       * those fields will be ''.
       *
       * Note: Developers should note that only mediaChange activations (not de-activations)
       *       are announced by the MediaObserver.
       *
       * \@usage
       *
       *  // RxJS
       *  import { filter } from 'rxjs/operators';
       *  import { MediaObserver } from '\@angular/flex-layout';
       *
       * \@Component({ ... })
       *  export class AppComponent {
       *    status: string = '';
       *
       *    constructor(mediaObserver: MediaObserver) {
       *      const media$ = mediaObserver.asObservable().pipe(
       *        filter((changes: MediaChange[]) => true)   // silly noop filter
       *      );
       *
       *      media$.subscribe((changes: MediaChange[]) => {
       *        let status = '';
       *        changes.forEach( change => {
       *          status += `'${change.mqAlias}' = (${change.mediaQuery}) <br/>` ;
       *        });
       *        this.status = status;
       *     });
       *
       *    }
       *  }
       */


      var MediaObserver =
      /** @class */
      function () {
        /**
         * MediaObserver enables applications to listen for 1..n mediaQuery activations and to determine
         * if a mediaQuery is currently activated.
         *
         * Since a breakpoint change will first deactivate 1...n mediaQueries and then possibly activate
         * 1..n mediaQueries, the MediaObserver will debounce notifications and report ALL *activations*
         * in 1 event notification. The reported activations will be sorted in descending priority order.
         *
         * This class uses the BreakPoint Registry to inject alias information into the raw MediaChange
         * notification. For custom mediaQuery notifications, alias information will not be injected and
         * those fields will be ''.
         *
         * Note: Developers should note that only mediaChange activations (not de-activations)
         *       are announced by the MediaObserver.
         *
         * \@usage
         *
         *  // RxJS
         *  import { filter } from 'rxjs/operators';
         *  import { MediaObserver } from '\@angular/flex-layout';
         *
         * \@Component({ ... })
         *  export class AppComponent {
         *    status: string = '';
         *
         *    constructor(mediaObserver: MediaObserver) {
         *      const media$ = mediaObserver.asObservable().pipe(
         *        filter((changes: MediaChange[]) => true)   // silly noop filter
         *      );
         *
         *      media$.subscribe((changes: MediaChange[]) => {
         *        let status = '';
         *        changes.forEach( change => {
         *          status += `'${change.mqAlias}' = (${change.mediaQuery}) <br/>` ;
         *        });
         *        this.status = status;
         *     });
         *
         *    }
         *  }
         */
        var MediaObserver = /*#__PURE__*/function () {
          /**
           * @param {?} breakpoints
           * @param {?} matchMedia
           * @param {?} hook
           */
          function MediaObserver(breakpoints, matchMedia, hook) {
            _classCallCheck(this, MediaObserver);

            this.breakpoints = breakpoints;
            this.matchMedia = matchMedia;
            this.hook = hook;
            /**
             * Filter MediaChange notifications for overlapping breakpoints
             */

            this.filterOverlaps = false;
            this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
            this._media$ = this.watchActivations();
            this.media$ = this._media$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(
            /**
            * @param {?} changes
            * @return {?}
            */
            function (changes) {
              return changes.length > 0;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(
            /**
            * @param {?} changes
            * @return {?}
            */
            function (changes) {
              return changes[0];
            }));
          }
          /**
           * Completes the active subject, signalling to all complete for all
           * MediaObserver subscribers
           * @return {?}
           */


          _createClass(MediaObserver, [{
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              this.destroyed$.next();
              this.destroyed$.complete();
            } // ************************************************
            // Public Methods
            // ************************************************

            /**
             * Observe changes to current activation 'list'
             * @return {?}
             */

          }, {
            key: "asObservable",
            value: function asObservable() {
              return this._media$;
            }
            /**
             * Allow programmatic query to determine if one or more media query/alias match
             * the current viewport size.
             * @param {?} value One or more media queries (or aliases) to check.
             * @return {?} Whether any of the media queries match.
             */

          }, {
            key: "isActive",
            value: function isActive(value) {
              var _this47 = this;

              /** @type {?} */
              var aliases = splitQueries(coerceArray(value));
              return aliases.some(
              /**
              * @param {?} alias
              * @return {?}
              */

              /**
              * @param {?} alias
              * @return {?}
              */
              function (alias) {
                /** @type {?} */
                var query = toMediaQuery(alias, _this47.breakpoints);
                return query !== null && _this47.matchMedia.isActive(query);
              });
            } // ************************************************
            // Internal Methods
            // ************************************************

            /**
             * Register all the mediaQueries registered in the BreakPointRegistry
             * This is needed so subscribers can be auto-notified of all standard, registered
             * mediaQuery activations
             * @private
             * @return {?}
             */

          }, {
            key: "watchActivations",
            value: function watchActivations() {
              /** @type {?} */
              var queries = this.breakpoints.items.map(
              /**
              * @param {?} bp
              * @return {?}
              */

              /**
              * @param {?} bp
              * @return {?}
              */
              function (bp) {
                return bp.mediaQuery;
              });
              return this.buildObservable(queries);
            }
            /**
             * Only pass/announce activations (not de-activations)
             *
             * Since multiple-mediaQueries can be activation in a cycle,
             * gather all current activations into a single list of changes to observers
             *
             * Inject associated (if any) alias information into the MediaChange event
             * - Exclude mediaQuery activations for overlapping mQs. List bounded mQ ranges only
             * - Exclude print activations that do not have an associated mediaQuery
             *
             * NOTE: the raw MediaChange events [from MatchMedia] do not
             *       contain important alias information; as such this info
             *       must be injected into the MediaChange
             * @private
             * @param {?} mqList
             * @return {?}
             */

          }, {
            key: "buildObservable",
            value: function buildObservable(mqList) {
              var _this48 = this;

              /** @type {?} */
              var hasChanges =
              /**
              * @param {?} changes
              * @return {?}
              */
              function hasChanges(changes) {
                /** @type {?} */
                var isValidQuery =
                /**
                * @param {?} change
                * @return {?}
                */
                function isValidQuery(change) {
                  return change.mediaQuery.length > 0;
                };

                return changes.filter(isValidQuery).length > 0;
              };
              /** @type {?} */


              var excludeOverlaps =
              /**
              * @param {?} changes
              * @return {?}
              */
              function excludeOverlaps(changes) {
                return !_this48.filterOverlaps ? changes : changes.filter(
                /**
                * @param {?} change
                * @return {?}
                */

                /**
                * @param {?} change
                * @return {?}
                */
                function (change) {
                  /** @type {?} */
                  var bp = _this48.breakpoints.findByQuery(change.mediaQuery);

                  return !bp ? true : !bp.overlapping;
                });
              };
              /**
               */


              return this.matchMedia.observe(this.hook.withPrintQuery(mqList)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(
              /**
              * @param {?} change
              * @return {?}
              */
              function (change) {
                return change.matches;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(0, rxjs__WEBPACK_IMPORTED_MODULE_2__["asapScheduler"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(
              /**
              * @param {?} _
              * @return {?}
              */

              /**
              * @param {?} _
              * @return {?}
              */
              function (_) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_this48.findAllActivations());
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(excludeOverlaps), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(hasChanges), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$));
            }
            /**
             * Find all current activations and prepare single list of activations
             * sorted by descending priority.
             * @private
             * @return {?}
             */

          }, {
            key: "findAllActivations",
            value: function findAllActivations() {
              var _this49 = this;

              /** @type {?} */
              var mergeMQAlias =
              /**
              * @param {?} change
              * @return {?}
              */
              function mergeMQAlias(change) {
                /** @type {?} */
                var bp = _this49.breakpoints.findByQuery(change.mediaQuery);

                return mergeAlias(change, bp);
              };
              /** @type {?} */


              var replaceWithPrintAlias =
              /**
              * @param {?} change
              * @return {?}
              */
              function replaceWithPrintAlias(change) {
                return _this49.hook.isPrintEvent(change) ? _this49.hook.updateEvent(change) : change;
              };

              return this.matchMedia.activations.map(
              /**
              * @param {?} query
              * @return {?}
              */

              /**
              * @param {?} query
              * @return {?}
              */
              function (query) {
                return new MediaChange(true, query);
              }).map(replaceWithPrintAlias).map(mergeMQAlias).sort(sortDescendingPriority);
            }
          }]);

          return MediaObserver;
        }();

        MediaObserver.ɵfac = function MediaObserver_Factory(t) {
          return new (t || MediaObserver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](BreakPointRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MatchMedia), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](PrintHook));
        };
        /** @nocollapse */


        MediaObserver.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
          factory: function MediaObserver_Factory() {
            return new MediaObserver(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(BreakPointRegistry), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(MatchMedia), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(PrintHook));
          },
          token: MediaObserver,
          providedIn: "root"
        });
        return MediaObserver;
      }();
      /**
       * Find associated breakpoint (if any)
       * @param {?} query
       * @param {?} locator
       * @return {?}
       */


      function toMediaQuery(query, locator) {
        /** @type {?} */
        var bp = locator.findByAlias(query) || locator.findByQuery(query);
        return bp ? bp.mediaQuery : null;
      }
      /**
       * Split each query string into separate query strings if two queries are provided as comma
       * separated.
       * @param {?} queries
       * @return {?}
       */


      function splitQueries(queries) {
        return queries.map(
        /**
        * @param {?} query
        * @return {?}
        */
        function (query) {
          return query.split(',');
        }).reduce(
        /**
        * @param {?} a1
        * @param {?} a2
        * @return {?}
        */
        function (a1, a2) {
          return a1.concat(a2);
        }).map(
        /**
        * @param {?} query
        * @return {?}
        */

        /**
        * @param {?} query
        * @return {?}
        */
        function (query) {
          return query.trim();
        });
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: core/media-observer/index.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: core/media-trigger/media-trigger.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Class
       */


      var MediaTrigger =
      /** @class */
      function () {
        /**
         * Class
         */
        var MediaTrigger = /*#__PURE__*/function () {
          /**
           * @param {?} breakpoints
           * @param {?} matchMedia
           * @param {?} layoutConfig
           * @param {?} _platformId
           * @param {?} _document
           */
          function MediaTrigger(breakpoints, matchMedia, layoutConfig, _platformId, _document) {
            _classCallCheck(this, MediaTrigger);

            this.breakpoints = breakpoints;
            this.matchMedia = matchMedia;
            this.layoutConfig = layoutConfig;
            this._platformId = _platformId;
            this._document = _document;
            this.hasCachedRegistryMatches = false;
            this.originalActivations = [];
            this.originalRegistry = new Map();
          }
          /**
           * Manually activate range of breakpoints
           * @param {?} list array of mediaQuery or alias strings
           * @return {?}
           */


          _createClass(MediaTrigger, [{
            key: "activate",
            value: function activate(list) {
              list = list.map(
              /**
              * @param {?} it
              * @return {?}
              */

              /**
              * @param {?} it
              * @return {?}
              */
              function (it) {
                return it.trim();
              }); // trim queries

              this.saveActivations();
              this.deactivateAll();
              this.setActivations(list);
              this.prepareAutoRestore();
            }
            /**
             * Restore original, 'real' breakpoints and emit events
             * to trigger stream notification
             * @return {?}
             */

          }, {
            key: "restore",
            value: function restore() {
              if (this.hasCachedRegistryMatches) {
                /** @type {?} */
                var extractQuery =
                /**
                * @param {?} change
                * @return {?}
                */
                function extractQuery(change) {
                  return change.mediaQuery;
                };
                /** @type {?} */


                var list = this.originalActivations.map(extractQuery);

                try {
                  this.deactivateAll();
                  this.restoreRegistryMatches();
                  this.setActivations(list);
                } finally {
                  this.originalActivations = [];

                  if (this.resizeSubscription) {
                    this.resizeSubscription.unsubscribe();
                  }
                }
              }
            } // ************************************************
            // Internal Methods
            // ************************************************

            /**
             * Whenever window resizes, immediately auto-restore original
             * activations (if we are simulating activations)
             * @private
             * @return {?}
             */

          }, {
            key: "prepareAutoRestore",
            value: function prepareAutoRestore() {
              /** @type {?} */
              var isBrowser = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platformId) && this._document;
              /** @type {?} */


              var enableAutoRestore = isBrowser && this.layoutConfig.mediaTriggerAutoRestore;

              if (enableAutoRestore) {
                /** @type {?} */
                var resize$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'resize').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
                this.resizeSubscription = resize$.subscribe(this.restore.bind(this));
              }
            }
            /**
             * Notify all matchMedia subscribers of de-activations
             *
             * Note: we must force 'matches' updates for
             *       future matchMedia::activation lookups
             * @private
             * @return {?}
             */

          }, {
            key: "deactivateAll",
            value: function deactivateAll() {
              /** @type {?} */
              var list = this.currentActivations;
              this.forceRegistryMatches(list, false);
              this.simulateMediaChanges(list, false);
            }
            /**
             * Cache current activations as sorted, prioritized list of MediaChanges
             * @private
             * @return {?}
             */

          }, {
            key: "saveActivations",
            value: function saveActivations() {
              var _this50 = this;

              if (!this.hasCachedRegistryMatches) {
                /** @type {?} */
                var toMediaChange =
                /**
                * @param {?} query
                * @return {?}
                */
                function toMediaChange(query) {
                  return new MediaChange(true, query);
                };
                /** @type {?} */


                var mergeMQAlias =
                /**
                * @param {?} change
                * @return {?}
                */
                function mergeMQAlias(change) {
                  /** @type {?} */
                  var bp = _this50.breakpoints.findByQuery(change.mediaQuery);

                  return mergeAlias(change, bp);
                };

                this.originalActivations = this.currentActivations.map(toMediaChange).map(mergeMQAlias).sort(sortDescendingPriority);
                this.cacheRegistryMatches();
              }
            }
            /**
             * Force set manual activations for specified mediaQuery list
             * @private
             * @param {?} list
             * @return {?}
             */

          }, {
            key: "setActivations",
            value: function setActivations(list) {
              if (!!this.originalRegistry) {
                this.forceRegistryMatches(list, true);
              }

              this.simulateMediaChanges(list);
            }
            /**
             * For specified mediaQuery list manually simulate activations or deactivations
             * @private
             * @param {?} queries
             * @param {?=} matches
             * @return {?}
             */

          }, {
            key: "simulateMediaChanges",
            value: function simulateMediaChanges(queries) {
              var _this51 = this;

              var matches = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

              /** @type {?} */
              var toMediaQuery =
              /**
              * @param {?} query
              * @return {?}
              */
              function toMediaQuery(query) {
                /** @type {?} */
                var locator = _this51.breakpoints;
                /** @type {?} */

                var bp = locator.findByAlias(query) || locator.findByQuery(query);
                return bp ? bp.mediaQuery : query;
              };
              /** @type {?} */


              var emitChangeEvent =
              /**
              * @param {?} query
              * @return {?}
              */
              function emitChangeEvent(query) {
                return _this51.emitChangeEvent(matches, query);
              };

              queries.map(toMediaQuery).forEach(emitChangeEvent);
            }
            /**
             * Replace current registry with simulated registry...
             * Note: this is required since MediaQueryList::matches is 'readOnly'
             * @private
             * @param {?} queries
             * @param {?} matches
             * @return {?}
             */

          }, {
            key: "forceRegistryMatches",
            value: function forceRegistryMatches(queries, matches) {
              /** @type {?} */
              var registry = new Map();
              queries.forEach(
              /**
              * @param {?} query
              * @return {?}
              */

              /**
              * @param {?} query
              * @return {?}
              */
              function (query) {
                registry.set(query,
                /** @type {?} */
                {
                  matches: matches
                });
              });
              this.matchMedia.registry = registry;
            }
            /**
             * Save current MatchMedia::registry items.
             * @private
             * @return {?}
             */

          }, {
            key: "cacheRegistryMatches",
            value: function cacheRegistryMatches() {
              /** @type {?} */
              var target = this.originalRegistry;
              target.clear();
              this.matchMedia.registry.forEach(
              /**
              * @param {?} value
              * @param {?} key
              * @return {?}
              */
              function (value, key) {
                target.set(key, value);
              });
              this.hasCachedRegistryMatches = true;
            }
            /**
             * Restore original, 'true' registry
             * @private
             * @return {?}
             */

          }, {
            key: "restoreRegistryMatches",
            value: function restoreRegistryMatches() {
              /** @type {?} */
              var target = this.matchMedia.registry;
              target.clear();
              this.originalRegistry.forEach(
              /**
              * @param {?} value
              * @param {?} key
              * @return {?}
              */
              function (value, key) {
                target.set(key, value);
              });
              this.originalRegistry.clear();
              this.hasCachedRegistryMatches = false;
            }
            /**
             * Manually emit a MediaChange event via the MatchMedia to MediaMarshaller and MediaObserver
             * @private
             * @param {?} matches
             * @param {?} query
             * @return {?}
             */

          }, {
            key: "emitChangeEvent",
            value: function emitChangeEvent(matches, query) {
              this.matchMedia.source.next(new MediaChange(matches, query));
            }
            /**
             * @private
             * @return {?}
             */

          }, {
            key: "currentActivations",
            get: function get() {
              return this.matchMedia.activations;
            }
          }]);

          return MediaTrigger;
        }();

        MediaTrigger.ɵfac = function MediaTrigger_Factory(t) {
          return new (t || MediaTrigger)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](BreakPointRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MatchMedia), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](LAYOUT_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
        };
        /** @nocollapse */


        MediaTrigger.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
          factory: function MediaTrigger_Factory() {
            return new MediaTrigger(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(BreakPointRegistry), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(MatchMedia), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(LAYOUT_CONFIG), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
          },
          token: MediaTrigger,
          providedIn: "root"
        });
        return MediaTrigger;
      }();
      /**
       * @fileoverview added by tsickle
       * Generated from: core/media-trigger/index.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: core/utils/index.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: utils/auto-prefixer.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Applies CSS prefixes to appropriate style keys.
       *
       * Note: `-ms-`, `-moz` and `-webkit-box` are no longer supported. e.g.
       *    {
       *      display: -webkit-flex;     NEW - Safari 6.1+. iOS 7.1+, BB10
       *      display: flex;             NEW, Spec - Firefox, Chrome, Opera
       *      // display: -webkit-box;   OLD - iOS 6-, Safari 3.1-6, BB7
       *      // display: -ms-flexbox;   TWEENER - IE 10
       *      // display: -moz-flexbox;  OLD - Firefox
       *    }
       * @param {?} target
       * @return {?}
       */


      function applyCssPrefixes(target) {
        for (var key in target) {
          /** @type {?} */
          var value = target[key] || '';

          switch (key) {
            case 'display':
              if (value === 'flex') {
                target['display'] = ['-webkit-flex', 'flex'];
              } else if (value === 'inline-flex') {
                target['display'] = ['-webkit-inline-flex', 'inline-flex'];
              } else {
                target['display'] = value;
              }

              break;

            case 'align-items':
            case 'align-self':
            case 'align-content':
            case 'flex':
            case 'flex-basis':
            case 'flex-flow':
            case 'flex-grow':
            case 'flex-shrink':
            case 'flex-wrap':
            case 'justify-content':
              target['-webkit-' + key] = value;
              break;

            case 'flex-direction':
              value = value || 'row';
              target['-webkit-flex-direction'] = value;
              target['flex-direction'] = value;
              break;

            case 'order':
              target['order'] = target['-webkit-' + key] = isNaN(+value) ? '0' : value;
              break;
          }
        }

        return target;
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: core/style-utils/style-utils.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var StyleUtils =
      /** @class */
      function () {
        var StyleUtils = /*#__PURE__*/function () {
          /**
           * @param {?} _serverStylesheet
           * @param {?} _serverModuleLoaded
           * @param {?} _platformId
           * @param {?} layoutConfig
           */
          function StyleUtils(_serverStylesheet, _serverModuleLoaded, _platformId, layoutConfig) {
            _classCallCheck(this, StyleUtils);

            this._serverStylesheet = _serverStylesheet;
            this._serverModuleLoaded = _serverModuleLoaded;
            this._platformId = _platformId;
            this.layoutConfig = layoutConfig;
          }
          /**
           * Applies styles given via string pair or object map to the directive element
           * @param {?} element
           * @param {?} style
           * @param {?=} value
           * @return {?}
           */


          _createClass(StyleUtils, [{
            key: "applyStyleToElement",
            value: function applyStyleToElement(element, style) {
              var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

              /** @type {?} */
              var styles = {};

              if (typeof style === 'string') {
                styles[style] = value;
                style = styles;
              }

              styles = this.layoutConfig.disableVendorPrefixes ? style : applyCssPrefixes(style);

              this._applyMultiValueStyleToElement(styles, element);
            }
            /**
             * Applies styles given via string pair or object map to the directive's element
             * @param {?} style
             * @param {?=} elements
             * @return {?}
             */

          }, {
            key: "applyStyleToElements",
            value: function applyStyleToElements(style) {
              var _this52 = this;

              var elements = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

              /** @type {?} */
              var styles = this.layoutConfig.disableVendorPrefixes ? style : applyCssPrefixes(style);
              elements.forEach(
              /**
              * @param {?} el
              * @return {?}
              */

              /**
              * @param {?} el
              * @return {?}
              */
              function (el) {
                _this52._applyMultiValueStyleToElement(styles, el);
              });
            }
            /**
             * Determine the DOM element's Flexbox flow (flex-direction)
             *
             * Check inline style first then check computed (stylesheet) style
             * @param {?} target
             * @return {?}
             */

          }, {
            key: "getFlowDirection",
            value: function getFlowDirection(target) {
              /** @type {?} */
              var query = 'flex-direction';
              /** @type {?} */

              var value = this.lookupStyle(target, query);
              /** @type {?} */

              var hasInlineValue = this.lookupInlineStyle(target, query) || Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(this._platformId) && this._serverModuleLoaded ? value : '';
              return [value || 'row', hasInlineValue];
            }
            /**
             * @param {?} target
             * @return {?}
             */

          }, {
            key: "hasWrap",
            value: function hasWrap(target) {
              /** @type {?} */
              var query = 'flex-wrap';
              return this.lookupStyle(target, query) === 'wrap';
            }
            /**
             * Find the DOM element's raw attribute value (if any)
             * @param {?} element
             * @param {?} attribute
             * @return {?}
             */

          }, {
            key: "lookupAttributeValue",
            value: function lookupAttributeValue(element, attribute) {
              return element.getAttribute(attribute) || '';
            }
            /**
             * Find the DOM element's inline style value (if any)
             * @param {?} element
             * @param {?} styleName
             * @return {?}
             */

          }, {
            key: "lookupInlineStyle",
            value: function lookupInlineStyle(element, styleName) {
              return Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platformId) ? element.style.getPropertyValue(styleName) : this._getServerStyle(element, styleName);
            }
            /**
             * Determine the inline or inherited CSS style
             * NOTE: platform-server has no implementation for getComputedStyle
             * @param {?} element
             * @param {?} styleName
             * @param {?=} inlineOnly
             * @return {?}
             */

          }, {
            key: "lookupStyle",
            value: function lookupStyle(element, styleName) {
              var inlineOnly = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

              /** @type {?} */
              var value = '';

              if (element) {
                /** @type {?} */
                var immediateValue = value = this.lookupInlineStyle(element, styleName);

                if (!immediateValue) {
                  if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platformId)) {
                    if (!inlineOnly) {
                      value = getComputedStyle(element).getPropertyValue(styleName);
                    }
                  } else {
                    if (this._serverModuleLoaded) {
                      value = this._serverStylesheet.getStyleForElement(element, styleName);
                    }
                  }
                }
              } // Note: 'inline' is the default of all elements, unless UA stylesheet overrides;
              //       in which case getComputedStyle() should determine a valid value.


              return value ? value.trim() : '';
            }
            /**
             * Applies the styles to the element. The styles object map may contain an array of values
             * Each value will be added as element style
             * Keys are sorted to add prefixed styles (like -webkit-x) first, before the standard ones
             * @private
             * @param {?} styles
             * @param {?} element
             * @return {?}
             */

          }, {
            key: "_applyMultiValueStyleToElement",
            value: function _applyMultiValueStyleToElement(styles, element) {
              var _this53 = this;

              Object.keys(styles).sort().forEach(
              /**
              * @param {?} key
              * @return {?}
              */

              /**
              * @param {?} key
              * @return {?}
              */
              function (key) {
                /** @type {?} */
                var el = styles[key];
                /** @type {?} */

                var values = Array.isArray(el) ? el : [el];
                values.sort();

                var _iterator = _createForOfIteratorHelper(values),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var value = _step.value;
                    value = value ? value + '' : '';

                    if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(_this53._platformId) || !_this53._serverModuleLoaded) {
                      Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(_this53._platformId) ? element.style.setProperty(key, value) : _this53._setServerStyle(element, key, value);
                    } else {
                      _this53._serverStylesheet.addStyleToElement(element, key, value);
                    }
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
              });
            }
            /**
             * @private
             * @param {?} element
             * @param {?} styleName
             * @param {?=} styleValue
             * @return {?}
             */

          }, {
            key: "_setServerStyle",
            value: function _setServerStyle(element, styleName, styleValue) {
              styleName = styleName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
              /** @type {?} */

              var styleMap = this._readStyleAttribute(element);

              styleMap[styleName] = styleValue || '';

              this._writeStyleAttribute(element, styleMap);
            }
            /**
             * @private
             * @param {?} element
             * @param {?} styleName
             * @return {?}
             */

          }, {
            key: "_getServerStyle",
            value: function _getServerStyle(element, styleName) {
              /** @type {?} */
              var styleMap = this._readStyleAttribute(element);

              return styleMap[styleName] || '';
            }
            /**
             * @private
             * @param {?} element
             * @return {?}
             */

          }, {
            key: "_readStyleAttribute",
            value: function _readStyleAttribute(element) {
              /** @type {?} */
              var styleMap = {};
              /** @type {?} */

              var styleAttribute = element.getAttribute('style');

              if (styleAttribute) {
                /** @type {?} */
                var styleList = styleAttribute.split(/;+/g);

                for (var i = 0; i < styleList.length; i++) {
                  /** @type {?} */
                  var style = styleList[i].trim();

                  if (style.length > 0) {
                    /** @type {?} */
                    var colonIndex = style.indexOf(':');

                    if (colonIndex === -1) {
                      throw new Error("Invalid CSS style: ".concat(style));
                    }
                    /** @type {?} */


                    var name = style.substr(0, colonIndex).trim();
                    styleMap[name] = style.substr(colonIndex + 1).trim();
                  }
                }
              }

              return styleMap;
            }
            /**
             * @private
             * @param {?} element
             * @param {?} styleMap
             * @return {?}
             */

          }, {
            key: "_writeStyleAttribute",
            value: function _writeStyleAttribute(element, styleMap) {
              /** @type {?} */
              var styleAttrValue = '';

              for (var key in styleMap) {
                /** @type {?} */
                var newValue = styleMap[key];

                if (newValue) {
                  styleAttrValue += key + ':' + styleMap[key] + ';';
                }
              }

              element.setAttribute('style', styleAttrValue);
            }
          }]);

          return StyleUtils;
        }();

        StyleUtils.ɵfac = function StyleUtils_Factory(t) {
          return new (t || StyleUtils)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](StylesheetMap), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](SERVER_TOKEN), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](LAYOUT_CONFIG));
        };
        /** @nocollapse */


        StyleUtils.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
          factory: function StyleUtils_Factory() {
            return new StyleUtils(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(StylesheetMap), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(SERVER_TOKEN), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(LAYOUT_CONFIG));
          },
          token: StyleUtils,
          providedIn: "root"
        });
        return StyleUtils;
      }();
      /**
       * @fileoverview added by tsickle
       * Generated from: core/style-builder/style-builder.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * A class that encapsulates CSS style generation for common directives
       * @abstract
       */


      var StyleBuilder = /*#__PURE__*/function () {
        function StyleBuilder() {
          _classCallCheck(this, StyleBuilder);

          /**
           * Whether to cache the generated output styles
           */
          this.shouldCache = true;
        }
        /**
         * Run a side effect computation given the input string and the computed styles
         * from the build task and the host configuration object
         * NOTE: This should be a no-op unless an algorithm is provided in a subclass
         * @param {?} _input
         * @param {?} _styles
         * @param {?=} _parent
         * @return {?}
         */


        _createClass(StyleBuilder, [{
          key: "sideEffect",
          value: function sideEffect(_input, _styles, _parent) {}
        }]);

        return StyleBuilder;
      }();
      /**
       * @fileoverview added by tsickle
       * Generated from: core/basis-validator/basis-validator.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * The flex API permits 3 or 1 parts of the value:
       *    - `flex-grow flex-shrink flex-basis`, or
       *    - `flex-basis`
       * @param {?} basis
       * @param {?=} grow
       * @param {?=} shrink
       * @return {?}
       */


      function validateBasis(basis) {
        var grow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '1';
        var shrink = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '1';

        /** @type {?} */
        var parts = [grow, shrink, basis];
        /** @type {?} */

        var j = basis.indexOf('calc');

        if (j > 0) {
          parts[2] = _validateCalcValue(basis.substring(j).trim());
          /** @type {?} */

          var matches = basis.substr(0, j).trim().split(' ');

          if (matches.length == 2) {
            parts[0] = matches[0];
            parts[1] = matches[1];
          }
        } else if (j == 0) {
          parts[2] = _validateCalcValue(basis.trim());
        } else {
          /** @type {?} */
          var _matches = basis.split(' ');

          parts = _matches.length === 3 ? _matches : [grow, shrink, basis];
        }

        return parts;
      }
      /**
       * Calc expressions require whitespace before & after any expression operators
       * This is a simple, crude whitespace padding solution.
       *   - '3 3 calc(15em + 20px)'
       *   - calc(100% / 7 * 2)
       *   - 'calc(15em + 20px)'
       *   - 'calc(15em+20px)'
       *   - '37px'
       *   = '43%'
       * @param {?} calc
       * @return {?}
       */


      function _validateCalcValue(calc) {
        return calc.replace(/[\s]/g, '').replace(/[\/\*\+\-]/g, ' $& ');
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: core/media-marshaller/media-marshaller.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * MediaMarshaller - register responsive values from directives and
       *                   trigger them based on media query events
       */


      var MediaMarshaller =
      /** @class */
      function () {
        /**
         * MediaMarshaller - register responsive values from directives and
         *                   trigger them based on media query events
         */
        var MediaMarshaller = /*#__PURE__*/function () {
          /**
           * @param {?} matchMedia
           * @param {?} breakpoints
           * @param {?} hook
           */
          function MediaMarshaller(matchMedia, breakpoints, hook) {
            _classCallCheck(this, MediaMarshaller);

            this.matchMedia = matchMedia;
            this.breakpoints = breakpoints;
            this.hook = hook;
            this.activatedBreakpoints = [];
            this.elementMap = new Map();
            this.elementKeyMap = new WeakMap();
            this.watcherMap = new WeakMap(); // special triggers to update elements
            // special triggers to update elements

            this.updateMap = new WeakMap(); // callback functions to update styles
            // callback functions to update styles

            this.clearMap = new WeakMap(); // callback functions to clear styles
            // callback functions to clear styles

            this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
            this.observeActivations();
          }
          /**
           * @return {?}
           */


          _createClass(MediaMarshaller, [{
            key: "activatedAlias",
            get: function get() {
              return this.activatedBreakpoints[0] ? this.activatedBreakpoints[0].alias : '';
            }
            /**
             * Update styles on breakpoint activates or deactivates
             * @param {?} mc
             * @return {?}
             */

          }, {
            key: "onMediaChange",
            value: function onMediaChange(mc) {
              /** @type {?} */
              var bp = this.findByQuery(mc.mediaQuery);

              if (bp) {
                mc = mergeAlias(mc, bp);

                if (mc.matches && this.activatedBreakpoints.indexOf(bp) === -1) {
                  this.activatedBreakpoints.push(bp);
                  this.activatedBreakpoints.sort(sortDescendingPriority);
                  this.updateStyles();
                } else if (!mc.matches && this.activatedBreakpoints.indexOf(bp) !== -1) {
                  // Remove the breakpoint when it's deactivated
                  this.activatedBreakpoints.splice(this.activatedBreakpoints.indexOf(bp), 1);
                  this.activatedBreakpoints.sort(sortDescendingPriority);
                  this.updateStyles();
                }
              }
            }
            /**
             * initialize the marshaller with necessary elements for delegation on an element
             * @param {?} element
             * @param {?} key
             * @param {?=} updateFn optional callback so that custom bp directives don't have to re-provide this
             * @param {?=} clearFn optional callback so that custom bp directives don't have to re-provide this
             * @param {?=} extraTriggers other triggers to force style updates (e.g. layout, directionality, etc)
             * @return {?}
             */

          }, {
            key: "init",
            value: function init(element, key, updateFn, clearFn) {
              var extraTriggers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
              initBuilderMap(this.updateMap, element, key, updateFn);
              initBuilderMap(this.clearMap, element, key, clearFn);
              this.buildElementKeyMap(element, key);
              this.watchExtraTriggers(element, key, extraTriggers);
            }
            /**
             * get the value for an element and key and optionally a given breakpoint
             * @param {?} element
             * @param {?} key
             * @param {?=} bp
             * @return {?}
             */

          }, {
            key: "getValue",
            value: function getValue(element, key, bp) {
              /** @type {?} */
              var bpMap = this.elementMap.get(element);

              if (bpMap) {
                /** @type {?} */
                var values = bp !== undefined ? bpMap.get(bp) : this.getActivatedValues(bpMap, key);

                if (values) {
                  return values.get(key);
                }
              }

              return undefined;
            }
            /**
             * whether the element has values for a given key
             * @param {?} element
             * @param {?} key
             * @return {?}
             */

          }, {
            key: "hasValue",
            value: function hasValue(element, key) {
              /** @type {?} */
              var bpMap = this.elementMap.get(element);

              if (bpMap) {
                /** @type {?} */
                var values = this.getActivatedValues(bpMap, key);

                if (values) {
                  return values.get(key) !== undefined || false;
                }
              }

              return false;
            }
            /**
             * Set the value for an input on a directive
             * @param {?} element the element in question
             * @param {?} key the type of the directive (e.g. flex, layout-gap, etc)
             * @param {?} val the value for the breakpoint
             * @param {?} bp the breakpoint suffix (empty string = default)
             * @return {?}
             */

          }, {
            key: "setValue",
            value: function setValue(element, key, val, bp) {
              /** @type {?} */
              var bpMap = this.elementMap.get(element);

              if (!bpMap) {
                bpMap = new Map().set(bp, new Map().set(key, val));
                this.elementMap.set(element, bpMap);
              } else {
                /** @type {?} */
                var values = (bpMap.get(bp) || new Map()).set(key, val);
                bpMap.set(bp, values);
                this.elementMap.set(element, bpMap);
              }
              /** @type {?} */


              var value = this.getValue(element, key);

              if (value !== undefined) {
                this.updateElement(element, key, value);
              }
            }
            /**
             * Track element value changes for a specific key
             * @param {?} element
             * @param {?} key
             * @return {?}
             */

          }, {
            key: "trackValue",
            value: function trackValue(element, key) {
              return this.subject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(
              /**
              * @param {?} v
              * @return {?}
              */

              /**
              * @param {?} v
              * @return {?}
              */
              function (v) {
                return v.element === element && v.key === key;
              }));
            }
            /**
             * update all styles for all elements on the current breakpoint
             * @return {?}
             */

          }, {
            key: "updateStyles",
            value: function updateStyles() {
              var _this54 = this;

              this.elementMap.forEach(
              /**
              * @param {?} bpMap
              * @param {?} el
              * @return {?}
              */
              function (bpMap, el) {
                /** @type {?} */
                var keyMap = new Set(
                /** @type {?} */
                _this54.elementKeyMap.get(el));
                /** @type {?} */

                var valueMap = _this54.getActivatedValues(bpMap);

                if (valueMap) {
                  valueMap.forEach(
                  /**
                  * @param {?} v
                  * @param {?} k
                  * @return {?}
                  */
                  function (v, k) {
                    _this54.updateElement(el, k, v);

                    keyMap["delete"](k);
                  });
                }

                keyMap.forEach(
                /**
                * @param {?} k
                * @return {?}
                */

                /**
                * @param {?} k
                * @return {?}
                */
                function (k) {
                  valueMap = _this54.getActivatedValues(bpMap, k);

                  if (valueMap) {
                    /** @type {?} */
                    var value = valueMap.get(k);

                    _this54.updateElement(el, k, value);
                  } else {
                    _this54.clearElement(el, k);
                  }
                });
              });
            }
            /**
             * clear the styles for a given element
             * @param {?} element
             * @param {?} key
             * @return {?}
             */

          }, {
            key: "clearElement",
            value: function clearElement(element, key) {
              /** @type {?} */
              var builders = this.clearMap.get(element);

              if (builders) {
                /** @type {?} */
                var clearFn =
                /** @type {?} */
                builders.get(key);

                if (!!clearFn) {
                  clearFn();
                  this.subject.next({
                    element: element,
                    key: key,
                    value: ''
                  });
                }
              }
            }
            /**
             * update a given element with the activated values for a given key
             * @param {?} element
             * @param {?} key
             * @param {?} value
             * @return {?}
             */

          }, {
            key: "updateElement",
            value: function updateElement(element, key, value) {
              /** @type {?} */
              var builders = this.updateMap.get(element);

              if (builders) {
                /** @type {?} */
                var updateFn =
                /** @type {?} */
                builders.get(key);

                if (!!updateFn) {
                  updateFn(value);
                  this.subject.next({
                    element: element,
                    key: key,
                    value: value
                  });
                }
              }
            }
            /**
             * release all references to a given element
             * @param {?} element
             * @return {?}
             */

          }, {
            key: "releaseElement",
            value: function releaseElement(element) {
              /** @type {?} */
              var watcherMap = this.watcherMap.get(element);

              if (watcherMap) {
                watcherMap.forEach(
                /**
                * @param {?} s
                * @return {?}
                */

                /**
                * @param {?} s
                * @return {?}
                */
                function (s) {
                  return s.unsubscribe();
                });
                this.watcherMap["delete"](element);
              }
              /** @type {?} */


              var elementMap = this.elementMap.get(element);

              if (elementMap) {
                elementMap.forEach(
                /**
                * @param {?} _
                * @param {?} s
                * @return {?}
                */
                function (_, s) {
                  return elementMap["delete"](s);
                });
                this.elementMap["delete"](element);
              }
            }
            /**
             * trigger an update for a given element and key (e.g. layout)
             * @param {?} element
             * @param {?=} key
             * @return {?}
             */

          }, {
            key: "triggerUpdate",
            value: function triggerUpdate(element, key) {
              var _this55 = this;

              /** @type {?} */
              var bpMap = this.elementMap.get(element);

              if (bpMap) {
                /** @type {?} */
                var valueMap = this.getActivatedValues(bpMap, key);

                if (valueMap) {
                  if (key) {
                    this.updateElement(element, key, valueMap.get(key));
                  } else {
                    valueMap.forEach(
                    /**
                    * @param {?} v
                    * @param {?} k
                    * @return {?}
                    */
                    function (v, k) {
                      return _this55.updateElement(element, k, v);
                    });
                  }
                }
              }
            }
            /**
             * Cross-reference for HTMLElement with directive key
             * @private
             * @param {?} element
             * @param {?} key
             * @return {?}
             */

          }, {
            key: "buildElementKeyMap",
            value: function buildElementKeyMap(element, key) {
              /** @type {?} */
              var keyMap = this.elementKeyMap.get(element);

              if (!keyMap) {
                keyMap = new Set();
                this.elementKeyMap.set(element, keyMap);
              }

              keyMap.add(key);
            }
            /**
             * Other triggers that should force style updates:
             * - directionality
             * - layout changes
             * - mutationobserver updates
             * @private
             * @param {?} element
             * @param {?} key
             * @param {?} triggers
             * @return {?}
             */

          }, {
            key: "watchExtraTriggers",
            value: function watchExtraTriggers(element, key, triggers) {
              var _this56 = this;

              if (triggers && triggers.length) {
                /** @type {?} */
                var watchers = this.watcherMap.get(element);

                if (!watchers) {
                  watchers = new Map();
                  this.watcherMap.set(element, watchers);
                }
                /** @type {?} */


                var subscription = watchers.get(key);

                if (!subscription) {
                  /** @type {?} */
                  var newSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"]).apply(void 0, _toConsumableArray(triggers)).subscribe(
                  /**
                  * @return {?}
                  */
                  function () {
                    /** @type {?} */
                    var currentValue = _this56.getValue(element, key);

                    _this56.updateElement(element, key, currentValue);
                  });
                  watchers.set(key, newSubscription);
                }
              }
            }
            /**
             * Breakpoint locator by mediaQuery
             * @private
             * @param {?} query
             * @return {?}
             */

          }, {
            key: "findByQuery",
            value: function findByQuery(query) {
              return this.breakpoints.findByQuery(query);
            }
            /**
             * get the fallback breakpoint for a given element, starting with the current breakpoint
             * @private
             * @param {?} bpMap
             * @param {?=} key
             * @return {?}
             */

          }, {
            key: "getActivatedValues",
            value: function getActivatedValues(bpMap, key) {
              for (var i = 0; i < this.activatedBreakpoints.length; i++) {
                /** @type {?} */
                var activatedBp = this.activatedBreakpoints[i];
                /** @type {?} */

                var valueMap = bpMap.get(activatedBp.alias);

                if (valueMap) {
                  if (key === undefined || valueMap.has(key) && valueMap.get(key) != null) {
                    return valueMap;
                  }
                }
              }
              /** @type {?} */


              var lastHope = bpMap.get('');
              return key === undefined || lastHope && lastHope.has(key) ? lastHope : undefined;
            }
            /**
             * Watch for mediaQuery breakpoint activations
             * @private
             * @return {?}
             */

          }, {
            key: "observeActivations",
            value: function observeActivations() {
              /** @type {?} */
              var target =
              /** @type {?} */

              /** @type {?} */
              this;
              /** @type {?} */

              var queries = this.breakpoints.items.map(
              /**
              * @param {?} bp
              * @return {?}
              */

              /**
              * @param {?} bp
              * @return {?}
              */
              function (bp) {
                return bp.mediaQuery;
              });
              this.matchMedia.observe(this.hook.withPrintQuery(queries)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(this.hook.interceptEvents(target)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(this.hook.blockPropagation())).subscribe(this.onMediaChange.bind(this));
            }
          }]);

          return MediaMarshaller;
        }();

        MediaMarshaller.ɵfac = function MediaMarshaller_Factory(t) {
          return new (t || MediaMarshaller)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MatchMedia), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](BreakPointRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](PrintHook));
        };
        /** @nocollapse */


        MediaMarshaller.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
          factory: function MediaMarshaller_Factory() {
            return new MediaMarshaller(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(MatchMedia), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(BreakPointRegistry), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(PrintHook));
          },
          token: MediaMarshaller,
          providedIn: "root"
        });
        return MediaMarshaller;
      }();
      /**
       * @param {?} map
       * @param {?} element
       * @param {?} key
       * @param {?=} input
       * @return {?}
       */


      function initBuilderMap(map$$1, element, key, input) {
        if (input !== undefined) {
          /** @type {?} */
          var oldMap = map$$1.get(element);

          if (!oldMap) {
            oldMap = new Map();
            map$$1.set(element, oldMap);
          }

          oldMap.set(key, input);
        }
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: core/public-api.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: core/index.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=core.js.map

      /***/

    },

    /***/
    "pGkB":
    /*!*************************************************************!*\
      !*** ./src/app/shared/services/sesionGuard/sesion.guard.ts ***!
      \*************************************************************/

    /*! exports provided: SesionGuard */

    /***/
    function pGkB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SesionGuard", function () {
        return SesionGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var SesionGuard = /*@__PURE__*/function () {
        var SesionGuard = /*#__PURE__*/function () {
          function SesionGuard(router) {
            _classCallCheck(this, SesionGuard);

            this.router = router;
          }

          _createClass(SesionGuard, [{
            key: "canActivate",
            value: function canActivate(route, state) {
              var hasToken = localStorage.getItem('token');

              if (hasToken) {
                this.router.navigate(['/pages']);
                return false;
              }

              return true;
            }
          }]);

          return SesionGuard;
        }();

        SesionGuard.ɵfac = function SesionGuard_Factory(t) {
          return new (t || SesionGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
        };

        SesionGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: SesionGuard,
          factory: SesionGuard.ɵfac,
          providedIn: 'root'
        });
        return SesionGuard;
      }();
      /***/

    },

    /***/
    "r71e":
    /*!****************************************************************!*\
      !*** ./src/app/invited/landing-page/landing-page.component.ts ***!
      \****************************************************************/

    /*! exports provided: LandingPageComponent */

    /***/
    function r71e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function () {
        return LandingPageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _navbar_landingpage_navbar_landingpage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./navbar-landingpage/navbar-landingpage.component */
      "Bvzc");
      /* harmony import */


      var _slider_slider_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./slider/slider.component */
      "Usz4");
      /* harmony import */


      var _somos_somos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./somos/somos.component */
      "mf5a");
      /* harmony import */


      var _model_investigation_model_investigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./model-investigation/model-investigation.component */
      "70Q6");
      /* harmony import */


      var _functions_functions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./functions/functions.component */
      "Lhmz");
      /* harmony import */


      var _normativity_normativity_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./normativity/normativity.component */
      "+cXU");
      /* harmony import */


      var _galery_galery_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./galery/galery.component */
      "9qPu");
      /* harmony import */


      var _mision_mision_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./mision/mision.component */
      "Wkfz");
      /* harmony import */


      var _contact_landingpage_contact_landingpage_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./contact-landingpage/contact-landingpage.component */
      "USiE");
      /* harmony import */


      var _footer_landingpage_footer_landingpage_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./footer-landingpage/footer-landingpage.component */
      "p16/");

      var LandingPageComponent = /*@__PURE__*/function () {
        var LandingPageComponent = /*#__PURE__*/function () {
          function LandingPageComponent(router) {
            _classCallCheck(this, LandingPageComponent);

            this.router = router;
            this.isHiddenNormatividad = true;
            this.isHiddenConvocatorias = true;
            this.isHiddenSomos = true;
            this.isHiddenSomosInfo = true;
            this.isHiddenModeloInvestigacion = true;
            this.isHiddenFunciones = true;
            this.isHiddenCapacidades = true;
            this.isHiddenPublicaciones = true;
            this.isHiddenMision = true;
            this.isHiddenContacto = true;
            this.currentSection = 'home';
          }

          _createClass(LandingPageComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.isHiddenSomos = false;
              this.isHiddenSomosInfo = false;
              this.isHiddenModeloInvestigacion = false;
              this.isHiddenFunciones = false;
              this.isHiddenCapacidades = false;
              this.isHiddenPublicaciones = false;
              this.isHiddenMision = false;
              this.isHiddenContacto = false;
            }
          }, {
            key: "displayCounter",
            value: function displayCounter(opcion) {
              switch (opcion) {
                case 'somos':
                  this.openHome();
                  break;

                case 'modelo':
                  this.openHome();
                  break;

                case 'mision':
                  this.openHome();
                  break;

                case 'publicaciones':
                  this.openHome();
                  break;

                case 'normatividad':
                  this.openNormatividad();
                  break;

                case 'funciones':
                  this.openHome();
                  break;

                case 'contacto':
                  this.openHome();
                  break;

                case 'convocatoria':
                  this.openConvocatoria();
                  break;

                case 'login':
                  this.openLogin();
                  break;
              }
            }
          }, {
            key: "openConvocatoria",
            value: function openConvocatoria() {
              this.isHiddenConvocatorias = false;
              this.isHiddenNormatividad = true;
              this.isHiddenSomos = true;
              this.isHiddenSomosInfo = true;
              this.isHiddenModeloInvestigacion = true;
              this.isHiddenFunciones = true;
              this.isHiddenCapacidades = true;
              this.isHiddenPublicaciones = true;
              this.isHiddenMision = true;
              this.isHiddenContacto = true;
            }
          }, {
            key: "openNormatividad",
            value: function openNormatividad() {
              this.isHiddenNormatividad = false;
              this.isHiddenConvocatorias = true;
              this.isHiddenSomos = true;
              this.isHiddenSomosInfo = true;
              this.isHiddenModeloInvestigacion = true;
              this.isHiddenFunciones = true;
              this.isHiddenCapacidades = true;
              this.isHiddenPublicaciones = true;
              this.isHiddenMision = true;
              this.isHiddenContacto = true;
            }
          }, {
            key: "openHome",
            value: function openHome() {
              this.isHiddenNormatividad = true;
              this.isHiddenConvocatorias = true;
              this.isHiddenSomos = false;
              this.isHiddenSomosInfo = false;
              this.isHiddenModeloInvestigacion = false;
              this.isHiddenFunciones = false;
              this.isHiddenCapacidades = false;
              this.isHiddenPublicaciones = false;
              this.isHiddenMision = false;
              this.isHiddenContacto = false;
            }
          }, {
            key: "openLogin",
            value: function openLogin() {
              this.router.navigate(['/home/sign-in']);
            }
          }, {
            key: "windowScroll",
            value: function windowScroll() {
              var navbar = document.getElementById('navbar');

              if (document.body.scrollTop >= 50 || document.documentElement.scrollTop > 50) {
                navbar.classList.add('nav-sticky');
              } else {
                navbar.classList.remove('nav-sticky');
              }
            }
          }, {
            key: "toggleMenu",
            value: function toggleMenu() {
              document.getElementById('navbarCollapse').classList.toggle('show');
            }
          }, {
            key: "onSectionChange",
            value: function onSectionChange(sectionId) {
              this.currentSection = sectionId;
            }
          }]);

          return LandingPageComponent;
        }();

        LandingPageComponent.ɵfac = function LandingPageComponent_Factory(t) {
          return new (t || LandingPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
        };

        LandingPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: LandingPageComponent,
          selectors: [["landing-page"]],
          decls: 15,
          vars: 0,
          consts: [["href", "https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700|Open+Sans:300,300i,400,400i,700,700i", "rel", "stylesheet"], ["rel", "stylesheet", "href", "https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css", "integrity", "sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2", "crossorigin", "anonymous"], ["rel", "stylesheet", "href", "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css", "integrity", "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm", "crossorigin", "anonymous"], ["rel", "stylesheet", "href", "https://use.fontawesome.com/releases/v5.1.0/css/all.css", "integrity", "sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt", "crossorigin", "anonymous"]],
          template: function LandingPageComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "link", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "link", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "body");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-navbar-landingpage");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-slider");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-somos");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-model-investigation");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-functions");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-normativity");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-galery");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-mision");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-contact-landingpage");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-footer-landingpage");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
          },
          directives: [_navbar_landingpage_navbar_landingpage_component__WEBPACK_IMPORTED_MODULE_2__["NavbarLandingpageComponent"], _slider_slider_component__WEBPACK_IMPORTED_MODULE_3__["SliderComponent"], _somos_somos_component__WEBPACK_IMPORTED_MODULE_4__["SomosComponent"], _model_investigation_model_investigation_component__WEBPACK_IMPORTED_MODULE_5__["ModelInvestigationComponent"], _functions_functions_component__WEBPACK_IMPORTED_MODULE_6__["FunctionsComponent"], _normativity_normativity_component__WEBPACK_IMPORTED_MODULE_7__["NormativityComponent"], _galery_galery_component__WEBPACK_IMPORTED_MODULE_8__["GaleryComponent"], _mision_mision_component__WEBPACK_IMPORTED_MODULE_9__["MisionComponent"], _contact_landingpage_contact_landingpage_component__WEBPACK_IMPORTED_MODULE_10__["ContactLandingpageComponent"], _footer_landingpage_footer_landingpage_component__WEBPACK_IMPORTED_MODULE_11__["FooterLandingpageComponent"]],
          encapsulation: 2
        });
        return LandingPageComponent;
      }();
      /***/

    },

    /***/
    "udLm":
    /*!******************************************************!*\
      !*** ./src/app/@core/consts/alert-statuses.const.ts ***!
      \******************************************************/

    /*! exports provided: alertStatuses */

    /***/
    function udLm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "alertStatuses", function () {
        return alertStatuses;
      });

      var alertStatuses = {
        success: 'success',
        info: 'info',
        warning: 'warning',
        danger: 'danger',
        primary: 'primary',
        secondary: 'secondary',
        light: 'light',
        dark: 'dark'
      };
      /***/
    },

    /***/
    "zkoq":
    /*!***************************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js ***!
      \***************************************************************************/

    /*! exports provided: MatGridAvatarCssMatStyler, MatGridList, MatGridListModule, MatGridTile, MatGridTileFooterCssMatStyler, MatGridTileHeaderCssMatStyler, MatGridTileText, ɵTileCoordinator, ɵangular_material_src_material_grid_list_grid_list_a */

    /***/
    function zkoq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatGridAvatarCssMatStyler", function () {
        return MatGridAvatarCssMatStyler;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatGridList", function () {
        return MatGridList;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatGridListModule", function () {
        return MatGridListModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatGridTile", function () {
        return MatGridTile;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatGridTileFooterCssMatStyler", function () {
        return MatGridTileFooterCssMatStyler;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatGridTileHeaderCssMatStyler", function () {
        return MatGridTileHeaderCssMatStyler;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatGridTileText", function () {
        return MatGridTileText;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵTileCoordinator", function () {
        return TileCoordinator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_grid_list_grid_list_a", function () {
        return MAT_GRID_LIST;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "cH1L");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Injection token used to provide a grid list to a tile and to avoid circular imports.
       * @docs-private
       */


      var _c0 = ["*"];
      var _c1 = [[["", "mat-grid-avatar", ""], ["", "matGridAvatar", ""]], [["", "mat-line", ""], ["", "matLine", ""]], "*"];
      var _c2 = ["[mat-grid-avatar], [matGridAvatar]", "[mat-line], [matLine]", "*"];
      var _c3 = ".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}\n";
      var MAT_GRID_LIST = /*@__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_GRID_LIST');

      var MatGridTile = /*@__PURE__*/function () {
        var MatGridTile = /*#__PURE__*/function () {
          function MatGridTile(_element, _gridList) {
            _classCallCheck(this, MatGridTile);

            this._element = _element;
            this._gridList = _gridList;
            this._rowspan = 1;
            this._colspan = 1;
          }
          /** Amount of rows that the grid tile takes up. */


          _createClass(MatGridTile, [{
            key: "rowspan",
            get: function get() {
              return this._rowspan;
            },
            set: function set(value) {
              this._rowspan = Math.round(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value));
            }
            /** Amount of columns that the grid tile takes up. */

          }, {
            key: "colspan",
            get: function get() {
              return this._colspan;
            },
            set: function set(value) {
              this._colspan = Math.round(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value));
            }
            /**
             * Sets the style of the grid-tile element.  Needs to be set manually to avoid
             * "Changed after checked" errors that would occur with HostBinding.
             */

          }, {
            key: "_setStyle",
            value: function _setStyle(property, value) {
              this._element.nativeElement.style[property] = value;
            }
          }]);

          return MatGridTile;
        }();

        MatGridTile.ɵfac = function MatGridTile_Factory(t) {
          return new (t || MatGridTile)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_GRID_LIST, 8));
        };

        MatGridTile.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: MatGridTile,
          selectors: [["mat-grid-tile"]],
          hostAttrs: [1, "mat-grid-tile"],
          hostVars: 2,
          hostBindings: function MatGridTile_HostBindings(rf, ctx) {
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("rowspan", ctx.rowspan)("colspan", ctx.colspan);
            }
          },
          inputs: {
            rowspan: "rowspan",
            colspan: "colspan"
          },
          exportAs: ["matGridTile"],
          ngContentSelectors: _c0,
          decls: 2,
          vars: 0,
          consts: [[1, "mat-figure"]],
          template: function MatGridTile_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "figure", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
          },
          styles: [_c3],
          encapsulation: 2,
          changeDetection: 0
        });
        return MatGridTile;
      }();

      var MatGridTileText = /*@__PURE__*/function () {
        var MatGridTileText = /*#__PURE__*/function () {
          function MatGridTileText(_element) {
            _classCallCheck(this, MatGridTileText);

            this._element = _element;
          }

          _createClass(MatGridTileText, [{
            key: "ngAfterContentInit",
            value: function ngAfterContentInit() {
              Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["setLines"])(this._lines, this._element);
            }
          }]);

          return MatGridTileText;
        }();

        MatGridTileText.ɵfac = function MatGridTileText_Factory(t) {
          return new (t || MatGridTileText)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
        };

        MatGridTileText.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: MatGridTileText,
          selectors: [["mat-grid-tile-header"], ["mat-grid-tile-footer"]],
          contentQueries: function MatGridTileText_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLine"], true);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._lines = _t);
            }
          },
          ngContentSelectors: _c2,
          decls: 4,
          vars: 0,
          consts: [[1, "mat-grid-list-text"]],
          template: function MatGridTileText_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 2);
            }
          },
          encapsulation: 2,
          changeDetection: 0
        });
        return MatGridTileText;
      }();

      var MatGridAvatarCssMatStyler = /*@__PURE__*/function () {
        var MatGridAvatarCssMatStyler = /*#__PURE__*/_createClass(function MatGridAvatarCssMatStyler() {
          _classCallCheck(this, MatGridAvatarCssMatStyler);
        });

        MatGridAvatarCssMatStyler.ɵfac = function MatGridAvatarCssMatStyler_Factory(t) {
          return new (t || MatGridAvatarCssMatStyler)();
        };

        MatGridAvatarCssMatStyler.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: MatGridAvatarCssMatStyler,
          selectors: [["", "mat-grid-avatar", ""], ["", "matGridAvatar", ""]],
          hostAttrs: [1, "mat-grid-avatar"]
        });
        return MatGridAvatarCssMatStyler;
      }();

      var MatGridTileHeaderCssMatStyler = /*@__PURE__*/function () {
        var MatGridTileHeaderCssMatStyler = /*#__PURE__*/_createClass(function MatGridTileHeaderCssMatStyler() {
          _classCallCheck(this, MatGridTileHeaderCssMatStyler);
        });

        MatGridTileHeaderCssMatStyler.ɵfac = function MatGridTileHeaderCssMatStyler_Factory(t) {
          return new (t || MatGridTileHeaderCssMatStyler)();
        };

        MatGridTileHeaderCssMatStyler.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: MatGridTileHeaderCssMatStyler,
          selectors: [["mat-grid-tile-header"]],
          hostAttrs: [1, "mat-grid-tile-header"]
        });
        return MatGridTileHeaderCssMatStyler;
      }();

      var MatGridTileFooterCssMatStyler = /*@__PURE__*/function () {
        var MatGridTileFooterCssMatStyler = /*#__PURE__*/_createClass(function MatGridTileFooterCssMatStyler() {
          _classCallCheck(this, MatGridTileFooterCssMatStyler);
        });

        MatGridTileFooterCssMatStyler.ɵfac = function MatGridTileFooterCssMatStyler_Factory(t) {
          return new (t || MatGridTileFooterCssMatStyler)();
        };

        MatGridTileFooterCssMatStyler.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: MatGridTileFooterCssMatStyler,
          selectors: [["mat-grid-tile-footer"]],
          hostAttrs: [1, "mat-grid-tile-footer"]
        });
        return MatGridTileFooterCssMatStyler;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Class for determining, from a list of tiles, the (row, col) position of each of those tiles
       * in the grid. This is necessary (rather than just rendering the tiles in normal document flow)
       * because the tiles can have a rowspan.
       *
       * The positioning algorithm greedily places each tile as soon as it encounters a gap in the grid
       * large enough to accommodate it so that the tiles still render in the same order in which they
       * are given.
       *
       * The basis of the algorithm is the use of an array to track the already placed tiles. Each
       * element of the array corresponds to a column, and the value indicates how many cells in that
       * column are already occupied; zero indicates an empty cell. Moving "down" to the next row
       * decrements each value in the tracking array (indicating that the column is one cell closer to
       * being free).
       *
       * @docs-private
       */


      var TileCoordinator = /*#__PURE__*/function () {
        function TileCoordinator() {
          _classCallCheck(this, TileCoordinator);

          /** Index at which the search for the next gap will start. */
          this.columnIndex = 0;
          /** The current row index. */

          this.rowIndex = 0;
        }
        /** Gets the total number of rows occupied by tiles */


        _createClass(TileCoordinator, [{
          key: "rowCount",
          get: function get() {
            return this.rowIndex + 1;
          }
          /**
           * Gets the total span of rows occupied by tiles.
           * Ex: A list with 1 row that contains a tile with rowspan 2 will have a total rowspan of 2.
           */

        }, {
          key: "rowspan",
          get: function get() {
            var lastRowMax = Math.max.apply(Math, _toConsumableArray(this.tracker)); // if any of the tiles has a rowspan that pushes it beyond the total row count,
            // add the difference to the rowcount

            return lastRowMax > 1 ? this.rowCount + lastRowMax - 1 : this.rowCount;
          }
          /**
           * Updates the tile positions.
           * @param numColumns Amount of columns in the grid.
           * @param tiles Tiles to be positioned.
           */

        }, {
          key: "update",
          value: function update(numColumns, tiles) {
            var _this57 = this;

            this.columnIndex = 0;
            this.rowIndex = 0;
            this.tracker = new Array(numColumns);
            this.tracker.fill(0, 0, this.tracker.length);
            this.positions = tiles.map(function (tile) {
              return _this57._trackTile(tile);
            });
          }
          /** Calculates the row and col position of a tile. */

        }, {
          key: "_trackTile",
          value: function _trackTile(tile) {
            // Find a gap large enough for this tile.
            var gapStartIndex = this._findMatchingGap(tile.colspan); // Place tile in the resulting gap.


            this._markTilePosition(gapStartIndex, tile); // The next time we look for a gap, the search will start at columnIndex, which should be
            // immediately after the tile that has just been placed.


            this.columnIndex = gapStartIndex + tile.colspan;
            return new TilePosition(this.rowIndex, gapStartIndex);
          }
          /** Finds the next available space large enough to fit the tile. */

        }, {
          key: "_findMatchingGap",
          value: function _findMatchingGap(tileCols) {
            if (tileCols > this.tracker.length && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw Error("mat-grid-list: tile with colspan ".concat(tileCols, " is wider than ") + "grid with cols=\"".concat(this.tracker.length, "\"."));
            } // Start index is inclusive, end index is exclusive.


            var gapStartIndex = -1;
            var gapEndIndex = -1; // Look for a gap large enough to fit the given tile. Empty spaces are marked with a zero.

            do {
              // If we've reached the end of the row, go to the next row.
              if (this.columnIndex + tileCols > this.tracker.length) {
                this._nextRow();

                gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
                gapEndIndex = this._findGapEndIndex(gapStartIndex);
                continue;
              }

              gapStartIndex = this.tracker.indexOf(0, this.columnIndex); // If there are no more empty spaces in this row at all, move on to the next row.

              if (gapStartIndex == -1) {
                this._nextRow();

                gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
                gapEndIndex = this._findGapEndIndex(gapStartIndex);
                continue;
              }

              gapEndIndex = this._findGapEndIndex(gapStartIndex); // If a gap large enough isn't found, we want to start looking immediately after the current
              // gap on the next iteration.

              this.columnIndex = gapStartIndex + 1; // Continue iterating until we find a gap wide enough for this tile. Since gapEndIndex is
              // exclusive, gapEndIndex is 0 means we didn't find a gap and should continue.
            } while (gapEndIndex - gapStartIndex < tileCols || gapEndIndex == 0); // If we still didn't manage to find a gap, ensure that the index is
            // at least zero so the tile doesn't get pulled out of the grid.


            return Math.max(gapStartIndex, 0);
          }
          /** Move "down" to the next row. */

        }, {
          key: "_nextRow",
          value: function _nextRow() {
            this.columnIndex = 0;
            this.rowIndex++; // Decrement all spaces by one to reflect moving down one row.

            for (var i = 0; i < this.tracker.length; i++) {
              this.tracker[i] = Math.max(0, this.tracker[i] - 1);
            }
          }
          /**
           * Finds the end index (exclusive) of a gap given the index from which to start looking.
           * The gap ends when a non-zero value is found.
           */

        }, {
          key: "_findGapEndIndex",
          value: function _findGapEndIndex(gapStartIndex) {
            for (var i = gapStartIndex + 1; i < this.tracker.length; i++) {
              if (this.tracker[i] != 0) {
                return i;
              }
            } // The gap ends with the end of the row.


            return this.tracker.length;
          }
          /** Update the tile tracker to account for the given tile in the given space. */

        }, {
          key: "_markTilePosition",
          value: function _markTilePosition(start, tile) {
            for (var i = 0; i < tile.colspan; i++) {
              this.tracker[start + i] = tile.rowspan;
            }
          }
        }]);

        return TileCoordinator;
      }();
      /**
       * Simple data structure for tile position (row, col).
       * @docs-private
       */


      var TilePosition = /*#__PURE__*/_createClass(function TilePosition(row, col) {
        _classCallCheck(this, TilePosition);

        this.row = row;
        this.col = col;
      });
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * RegExp that can be used to check whether a value will
       * be allowed inside a CSS `calc()` expression.
       */


      var cssCalcAllowedValue = /^-?\d+((\.\d+)?[A-Za-z%$]?)+$/;
      /**
       * Sets the style properties for an individual tile, given the position calculated by the
       * Tile Coordinator.
       * @docs-private
       */

      var TileStyler = /*#__PURE__*/function () {
        function TileStyler() {
          _classCallCheck(this, TileStyler);

          this._rows = 0;
          this._rowspan = 0;
        }
        /**
         * Adds grid-list layout info once it is available. Cannot be processed in the constructor
         * because these properties haven't been calculated by that point.
         *
         * @param gutterSize Size of the grid's gutter.
         * @param tracker Instance of the TileCoordinator.
         * @param cols Amount of columns in the grid.
         * @param direction Layout direction of the grid.
         */


        _createClass(TileStyler, [{
          key: "init",
          value: function init(gutterSize, tracker, cols, direction) {
            this._gutterSize = normalizeUnits(gutterSize);
            this._rows = tracker.rowCount;
            this._rowspan = tracker.rowspan;
            this._cols = cols;
            this._direction = direction;
          }
          /**
           * Computes the amount of space a single 1x1 tile would take up (width or height).
           * Used as a basis for other calculations.
           * @param sizePercent Percent of the total grid-list space that one 1x1 tile would take up.
           * @param gutterFraction Fraction of the gutter size taken up by one 1x1 tile.
           * @return The size of a 1x1 tile as an expression that can be evaluated via CSS calc().
           */

        }, {
          key: "getBaseTileSize",
          value: function getBaseTileSize(sizePercent, gutterFraction) {
            // Take the base size percent (as would be if evenly dividing the size between cells),
            // and then subtracting the size of one gutter. However, since there are no gutters on the
            // edges, each tile only uses a fraction (gutterShare = numGutters / numCells) of the gutter
            // size. (Imagine having one gutter per tile, and then breaking up the extra gutter on the
            // edge evenly among the cells).
            return "(".concat(sizePercent, "% - (").concat(this._gutterSize, " * ").concat(gutterFraction, "))");
          }
          /**
           * Gets The horizontal or vertical position of a tile, e.g., the 'top' or 'left' property value.
           * @param offset Number of tiles that have already been rendered in the row/column.
           * @param baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
           * @return Position of the tile as a CSS calc() expression.
           */

        }, {
          key: "getTilePosition",
          value: function getTilePosition(baseSize, offset) {
            // The position comes the size of a 1x1 tile plus gutter for each previous tile in the
            // row/column (offset).
            return offset === 0 ? '0' : calc("(".concat(baseSize, " + ").concat(this._gutterSize, ") * ").concat(offset));
          }
          /**
           * Gets the actual size of a tile, e.g., width or height, taking rowspan or colspan into account.
           * @param baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
           * @param span The tile's rowspan or colspan.
           * @return Size of the tile as a CSS calc() expression.
           */

        }, {
          key: "getTileSize",
          value: function getTileSize(baseSize, span) {
            return "(".concat(baseSize, " * ").concat(span, ") + (").concat(span - 1, " * ").concat(this._gutterSize, ")");
          }
          /**
           * Sets the style properties to be applied to a tile for the given row and column index.
           * @param tile Tile to which to apply the styling.
           * @param rowIndex Index of the tile's row.
           * @param colIndex Index of the tile's column.
           */

        }, {
          key: "setStyle",
          value: function setStyle(tile, rowIndex, colIndex) {
            // Percent of the available horizontal space that one column takes up.
            var percentWidthPerTile = 100 / this._cols; // Fraction of the vertical gutter size that each column takes up.
            // For example, if there are 5 columns, each column uses 4/5 = 0.8 times the gutter width.

            var gutterWidthFractionPerTile = (this._cols - 1) / this._cols;
            this.setColStyles(tile, colIndex, percentWidthPerTile, gutterWidthFractionPerTile);
            this.setRowStyles(tile, rowIndex, percentWidthPerTile, gutterWidthFractionPerTile);
          }
          /** Sets the horizontal placement of the tile in the list. */

        }, {
          key: "setColStyles",
          value: function setColStyles(tile, colIndex, percentWidth, gutterWidth) {
            // Base horizontal size of a column.
            var baseTileWidth = this.getBaseTileSize(percentWidth, gutterWidth); // The width and horizontal position of each tile is always calculated the same way, but the
            // height and vertical position depends on the rowMode.

            var side = this._direction === 'rtl' ? 'right' : 'left';

            tile._setStyle(side, this.getTilePosition(baseTileWidth, colIndex));

            tile._setStyle('width', calc(this.getTileSize(baseTileWidth, tile.colspan)));
          }
          /**
           * Calculates the total size taken up by gutters across one axis of a list.
           */

        }, {
          key: "getGutterSpan",
          value: function getGutterSpan() {
            return "".concat(this._gutterSize, " * (").concat(this._rowspan, " - 1)");
          }
          /**
           * Calculates the total size taken up by tiles across one axis of a list.
           * @param tileHeight Height of the tile.
           */

        }, {
          key: "getTileSpan",
          value: function getTileSpan(tileHeight) {
            return "".concat(this._rowspan, " * ").concat(this.getTileSize(tileHeight, 1));
          }
          /**
           * Calculates the computed height and returns the correct style property to set.
           * This method can be implemented by each type of TileStyler.
           * @docs-private
           */

        }, {
          key: "getComputedHeight",
          value: function getComputedHeight() {
            return null;
          }
        }]);

        return TileStyler;
      }();
      /**
       * This type of styler is instantiated when the user passes in a fixed row height.
       * Example `<mat-grid-list cols="3" rowHeight="100px">`
       * @docs-private
       */


      var FixedTileStyler = /*#__PURE__*/function (_TileStyler) {
        _inherits(FixedTileStyler, _TileStyler);

        var _super25 = _createSuper(FixedTileStyler);

        function FixedTileStyler(fixedRowHeight) {
          var _this58;

          _classCallCheck(this, FixedTileStyler);

          _this58 = _super25.call(this);
          _this58.fixedRowHeight = fixedRowHeight;
          return _this58;
        }

        _createClass(FixedTileStyler, [{
          key: "init",
          value: function init(gutterSize, tracker, cols, direction) {
            _get(_getPrototypeOf(FixedTileStyler.prototype), "init", this).call(this, gutterSize, tracker, cols, direction);

            this.fixedRowHeight = normalizeUnits(this.fixedRowHeight);

            if (!cssCalcAllowedValue.test(this.fixedRowHeight) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw Error("Invalid value \"".concat(this.fixedRowHeight, "\" set as rowHeight."));
            }
          }
        }, {
          key: "setRowStyles",
          value: function setRowStyles(tile, rowIndex) {
            tile._setStyle('top', this.getTilePosition(this.fixedRowHeight, rowIndex));

            tile._setStyle('height', calc(this.getTileSize(this.fixedRowHeight, tile.rowspan)));
          }
        }, {
          key: "getComputedHeight",
          value: function getComputedHeight() {
            return ['height', calc("".concat(this.getTileSpan(this.fixedRowHeight), " + ").concat(this.getGutterSpan()))];
          }
        }, {
          key: "reset",
          value: function reset(list) {
            list._setListStyle(['height', null]);

            if (list._tiles) {
              list._tiles.forEach(function (tile) {
                tile._setStyle('top', null);

                tile._setStyle('height', null);
              });
            }
          }
        }]);

        return FixedTileStyler;
      }(TileStyler);
      /**
       * This type of styler is instantiated when the user passes in a width:height ratio
       * for the row height.  Example `<mat-grid-list cols="3" rowHeight="3:1">`
       * @docs-private
       */


      var RatioTileStyler = /*#__PURE__*/function (_TileStyler2) {
        _inherits(RatioTileStyler, _TileStyler2);

        var _super26 = _createSuper(RatioTileStyler);

        function RatioTileStyler(value) {
          var _this59;

          _classCallCheck(this, RatioTileStyler);

          _this59 = _super26.call(this);

          _this59._parseRatio(value);

          return _this59;
        }

        _createClass(RatioTileStyler, [{
          key: "setRowStyles",
          value: function setRowStyles(tile, rowIndex, percentWidth, gutterWidth) {
            var percentHeightPerTile = percentWidth / this.rowHeightRatio;
            this.baseTileHeight = this.getBaseTileSize(percentHeightPerTile, gutterWidth); // Use padding-top and margin-top to maintain the given aspect ratio, as
            // a percentage-based value for these properties is applied versus the *width* of the
            // containing block. See http://www.w3.org/TR/CSS2/box.html#margin-properties

            tile._setStyle('marginTop', this.getTilePosition(this.baseTileHeight, rowIndex));

            tile._setStyle('paddingTop', calc(this.getTileSize(this.baseTileHeight, tile.rowspan)));
          }
        }, {
          key: "getComputedHeight",
          value: function getComputedHeight() {
            return ['paddingBottom', calc("".concat(this.getTileSpan(this.baseTileHeight), " + ").concat(this.getGutterSpan()))];
          }
        }, {
          key: "reset",
          value: function reset(list) {
            list._setListStyle(['paddingBottom', null]);

            list._tiles.forEach(function (tile) {
              tile._setStyle('marginTop', null);

              tile._setStyle('paddingTop', null);
            });
          }
        }, {
          key: "_parseRatio",
          value: function _parseRatio(value) {
            var ratioParts = value.split(':');

            if (ratioParts.length !== 2 && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw Error("mat-grid-list: invalid ratio given for row-height: \"".concat(value, "\""));
            }

            this.rowHeightRatio = parseFloat(ratioParts[0]) / parseFloat(ratioParts[1]);
          }
        }]);

        return RatioTileStyler;
      }(TileStyler);
      /**
       * This type of styler is instantiated when the user selects a "fit" row height mode.
       * In other words, the row height will reflect the total height of the container divided
       * by the number of rows.  Example `<mat-grid-list cols="3" rowHeight="fit">`
       *
       * @docs-private
       */


      var FitTileStyler = /*#__PURE__*/function (_TileStyler3) {
        _inherits(FitTileStyler, _TileStyler3);

        var _super27 = _createSuper(FitTileStyler);

        function FitTileStyler() {
          _classCallCheck(this, FitTileStyler);

          return _super27.apply(this, arguments);
        }

        _createClass(FitTileStyler, [{
          key: "setRowStyles",
          value: function setRowStyles(tile, rowIndex) {
            // Percent of the available vertical space that one row takes up.
            var percentHeightPerTile = 100 / this._rowspan; // Fraction of the horizontal gutter size that each column takes up.

            var gutterHeightPerTile = (this._rows - 1) / this._rows; // Base vertical size of a column.

            var baseTileHeight = this.getBaseTileSize(percentHeightPerTile, gutterHeightPerTile);

            tile._setStyle('top', this.getTilePosition(baseTileHeight, rowIndex));

            tile._setStyle('height', calc(this.getTileSize(baseTileHeight, tile.rowspan)));
          }
        }, {
          key: "reset",
          value: function reset(list) {
            if (list._tiles) {
              list._tiles.forEach(function (tile) {
                tile._setStyle('top', null);

                tile._setStyle('height', null);
              });
            }
          }
        }]);

        return FitTileStyler;
      }(TileStyler);
      /** Wraps a CSS string in a calc function */


      function calc(exp) {
        return "calc(".concat(exp, ")");
      }
      /** Appends pixels to a CSS string if no units are given. */


      function normalizeUnits(value) {
        return value.match(/([A-Za-z%]+)$/) ? value : "".concat(value, "px");
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // TODO(kara): Conditional (responsive) column count / row size.
      // TODO(kara): Re-layout on window resize / media change (debounced).
      // TODO(kara): gridTileHeader and gridTileFooter.


      var MAT_FIT_MODE = 'fit';

      var MatGridList = /*@__PURE__*/function () {
        var MatGridList = /*#__PURE__*/function () {
          function MatGridList(_element, _dir) {
            _classCallCheck(this, MatGridList);

            this._element = _element;
            this._dir = _dir;
            /** The amount of space between tiles. This will be something like '5px' or '2em'. */

            this._gutter = '1px';
          }
          /** Amount of columns in the grid list. */


          _createClass(MatGridList, [{
            key: "cols",
            get: function get() {
              return this._cols;
            },
            set: function set(value) {
              this._cols = Math.max(1, Math.round(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value)));
            }
            /** Size of the grid list's gutter in pixels. */

          }, {
            key: "gutterSize",
            get: function get() {
              return this._gutter;
            },
            set: function set(value) {
              this._gutter = "".concat(value == null ? '' : value);
            }
            /** Set internal representation of row height from the user-provided value. */

          }, {
            key: "rowHeight",
            get: function get() {
              return this._rowHeight;
            },
            set: function set(value) {
              var newValue = "".concat(value == null ? '' : value);

              if (newValue !== this._rowHeight) {
                this._rowHeight = newValue;

                this._setTileStyler(this._rowHeight);
              }
            }
          }, {
            key: "ngOnInit",
            value: function ngOnInit() {
              this._checkCols();

              this._checkRowHeight();
            }
            /**
             * The layout calculation is fairly cheap if nothing changes, so there's little cost
             * to run it frequently.
             */

          }, {
            key: "ngAfterContentChecked",
            value: function ngAfterContentChecked() {
              this._layoutTiles();
            }
            /** Throw a friendly error if cols property is missing */

          }, {
            key: "_checkCols",
            value: function _checkCols() {
              if (!this.cols && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw Error("mat-grid-list: must pass in number of columns. " + "Example: <mat-grid-list cols=\"3\">");
              }
            }
            /** Default to equal width:height if rowHeight property is missing */

          }, {
            key: "_checkRowHeight",
            value: function _checkRowHeight() {
              if (!this._rowHeight) {
                this._setTileStyler('1:1');
              }
            }
            /** Creates correct Tile Styler subtype based on rowHeight passed in by user */

          }, {
            key: "_setTileStyler",
            value: function _setTileStyler(rowHeight) {
              if (this._tileStyler) {
                this._tileStyler.reset(this);
              }

              if (rowHeight === MAT_FIT_MODE) {
                this._tileStyler = new FitTileStyler();
              } else if (rowHeight && rowHeight.indexOf(':') > -1) {
                this._tileStyler = new RatioTileStyler(rowHeight);
              } else {
                this._tileStyler = new FixedTileStyler(rowHeight);
              }
            }
            /** Computes and applies the size and position for all children grid tiles. */

          }, {
            key: "_layoutTiles",
            value: function _layoutTiles() {
              var _this60 = this;

              if (!this._tileCoordinator) {
                this._tileCoordinator = new TileCoordinator();
              }

              var tracker = this._tileCoordinator;

              var tiles = this._tiles.filter(function (tile) {
                return !tile._gridList || tile._gridList === _this60;
              });

              var direction = this._dir ? this._dir.value : 'ltr';

              this._tileCoordinator.update(this.cols, tiles);

              this._tileStyler.init(this.gutterSize, tracker, this.cols, direction);

              tiles.forEach(function (tile, index) {
                var pos = tracker.positions[index];

                _this60._tileStyler.setStyle(tile, pos.row, pos.col);
              });

              this._setListStyle(this._tileStyler.getComputedHeight());
            }
            /** Sets style on the main grid-list element, given the style name and value. */

          }, {
            key: "_setListStyle",
            value: function _setListStyle(style) {
              if (style) {
                this._element.nativeElement.style[style[0]] = style[1];
              }
            }
          }]);

          return MatGridList;
        }();

        MatGridList.ɵfac = function MatGridList_Factory(t) {
          return new (t || MatGridList)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"], 8));
        };

        MatGridList.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: MatGridList,
          selectors: [["mat-grid-list"]],
          contentQueries: function MatGridList_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatGridTile, true);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tiles = _t);
            }
          },
          hostAttrs: [1, "mat-grid-list"],
          hostVars: 1,
          hostBindings: function MatGridList_HostBindings(rf, ctx) {
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("cols", ctx.cols);
            }
          },
          inputs: {
            cols: "cols",
            gutterSize: "gutterSize",
            rowHeight: "rowHeight"
          },
          exportAs: ["matGridList"],
          features: [/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
            provide: MAT_GRID_LIST,
            useExisting: MatGridList
          }])],
          ngContentSelectors: _c0,
          decls: 2,
          vars: 0,
          template: function MatGridList_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
          },
          styles: [_c3],
          encapsulation: 2,
          changeDetection: 0
        });
        return MatGridList;
      }();

      var MatGridListModule = /*@__PURE__*/function () {
        var MatGridListModule = /*#__PURE__*/_createClass(function MatGridListModule() {
          _classCallCheck(this, MatGridListModule);
        });

        MatGridListModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: MatGridListModule
        });
        MatGridListModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function MatGridListModule_Factory(t) {
            return new (t || MatGridListModule)();
          },
          imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]]
        });
        return MatGridListModule;
      }();
      /*@__PURE__*/


      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatGridListModule, {
          declarations: function declarations() {
            return [MatGridList, MatGridTile, MatGridTileText, MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, MatGridAvatarCssMatStyler];
          },
          imports: function imports() {
            return [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]];
          },
          exports: function exports() {
            return [MatGridList, MatGridTile, MatGridTileText, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"], MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, MatGridAvatarCssMatStyler];
          }
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=grid-list.js.map

      /***/

    },

    /***/
    "znSr":
    /*!****************************************************************************!*\
      !*** ./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js ***!
      \****************************************************************************/

    /*! exports provided: ExtendedModule, ClassDirective, DefaultClassDirective, ImgSrcStyleBuilder, ImgSrcDirective, DefaultImgSrcDirective, ShowHideStyleBuilder, ShowHideDirective, DefaultShowHideDirective, StyleDirective, DefaultStyleDirective */

    /***/
    function znSr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExtendedModule", function () {
        return ExtendedModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClassDirective", function () {
        return ClassDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultClassDirective", function () {
        return DefaultClassDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImgSrcStyleBuilder", function () {
        return ImgSrcStyleBuilder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImgSrcDirective", function () {
        return ImgSrcDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultImgSrcDirective", function () {
        return DefaultImgSrcDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShowHideStyleBuilder", function () {
        return ShowHideStyleBuilder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShowHideDirective", function () {
        return ShowHideDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultShowHideDirective", function () {
        return DefaultShowHideDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StyleDirective", function () {
        return StyleDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultStyleDirective", function () {
        return DefaultStyleDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout/core */
      "pD6V");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: extended/img-src/img-src.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var ImgSrcStyleBuilder =
      /** @class */
      function () {
        var ImgSrcStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_17) {
          _inherits(ImgSrcStyleBuilder, _angular_flex_layout_17);

          var _super28 = _createSuper(ImgSrcStyleBuilder);

          function ImgSrcStyleBuilder() {
            _classCallCheck(this, ImgSrcStyleBuilder);

            return _super28.apply(this, arguments);
          }

          _createClass(ImgSrcStyleBuilder, [{
            key: "buildStyles",
            value:
            /**
             * @param {?} url
             * @return {?}
             */
            function buildStyles(url) {
              return {
                'content': url ? "url(".concat(url, ")") : ''
              };
            }
          }]);

          return ImgSrcStyleBuilder;
        }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleBuilder"]);

        ImgSrcStyleBuilder.ɵfac = function ImgSrcStyleBuilder_Factory(t) {
          return ɵImgSrcStyleBuilder_BaseFactory(t || ImgSrcStyleBuilder);
        };
        /** @nocollapse */


        ImgSrcStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
          factory: function ImgSrcStyleBuilder_Factory() {
            return new ImgSrcStyleBuilder();
          },
          token: ImgSrcStyleBuilder,
          providedIn: "root"
        });

        var ɵImgSrcStyleBuilder_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](ImgSrcStyleBuilder);

        return ImgSrcStyleBuilder;
      }();

      var ImgSrcDirective =
      /** @class */
      function () {
        var ImgSrcDirective = /*#__PURE__*/function (_angular_flex_layout_18) {
          _inherits(ImgSrcDirective, _angular_flex_layout_18);

          var _super29 = _createSuper(ImgSrcDirective);

          /**
           * @param {?} elementRef
           * @param {?} styleBuilder
           * @param {?} styler
           * @param {?} marshal
           * @param {?} platformId
           * @param {?} serverModuleLoaded
           */
          function ImgSrcDirective(elementRef, styleBuilder, styler, marshal, platformId, serverModuleLoaded) {
            var _this61;

            _classCallCheck(this, ImgSrcDirective);

            _this61 = _super29.call(this, elementRef, styleBuilder, styler, marshal);
            _this61.platformId = platformId;
            _this61.serverModuleLoaded = serverModuleLoaded;
            _this61.DIRECTIVE_KEY = 'img-src';
            _this61.defaultSrc = '';
            _this61.styleCache = imgSrcCache;

            _this61.init();

            _this61.setValue(_this61.nativeElement.getAttribute('src') || '', '');

            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(_this61.platformId) && _this61.serverModuleLoaded) {
              _this61.nativeElement.setAttribute('src', '');
            }

            return _this61;
          }
          /**
           * @param {?} val
           * @return {?}
           */


          _createClass(ImgSrcDirective, [{
            key: "src",
            set: function set(val) {
              this.defaultSrc = val;
              this.setValue(this.defaultSrc, '');
            }
            /**
             * Use the [responsively] activated input value to update
             * the host img src attribute or assign a default `img.src=''`
             * if the src has not been defined.
             *
             * Do nothing to standard `<img src="">` usages, only when responsive
             * keys are present do we actually call `setAttribute()`
             * @protected
             * @param {?=} value
             * @return {?}
             */

          }, {
            key: "updateWithValue",
            value: function updateWithValue(value) {
              /** @type {?} */
              var url = value || this.defaultSrc;

              if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(this.platformId) && this.serverModuleLoaded) {
                this.addStyles(url);
              } else {
                this.nativeElement.setAttribute('src', url);
              }
            }
          }]);

          return ImgSrcDirective;
        }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective2"]);

        ImgSrcDirective.ɵfac = function ImgSrcDirective_Factory(t) {
          return new (t || ImgSrcDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ImgSrcStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["SERVER_TOKEN"]));
        };

        ImgSrcDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: ImgSrcDirective,
          inputs: {
            src: "src"
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
        });
        return ImgSrcDirective;
      }();
      /** @type {?} */


      var imgSrcCache = new Map();
      /** @type {?} */

      var inputs = ['src.xs', 'src.sm', 'src.md', 'src.lg', 'src.xl', 'src.lt-sm', 'src.lt-md', 'src.lt-lg', 'src.lt-xl', 'src.gt-xs', 'src.gt-sm', 'src.gt-md', 'src.gt-lg'];
      /** @type {?} */

      var selector = "\n  img[src.xs],    img[src.sm],    img[src.md],    img[src.lg],   img[src.xl],\n  img[src.lt-sm], img[src.lt-md], img[src.lt-lg], img[src.lt-xl],\n  img[src.gt-xs], img[src.gt-sm], img[src.gt-md], img[src.gt-lg]\n";
      /**
       * This directive provides a responsive API for the HTML <img> 'src' attribute
       * and will update the img.src property upon each responsive activation.
       *
       * e.g.
       *      <img src="defaultScene.jpg" src.xs="mobileScene.jpg"></img>
       *
       * @see https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-src/
       */

      var DefaultImgSrcDirective =
      /** @class */
      function () {
        /**
         * This directive provides a responsive API for the HTML <img> 'src' attribute
         * and will update the img.src property upon each responsive activation.
         *
         * e.g.
         *      <img src="defaultScene.jpg" src.xs="mobileScene.jpg"></img>
         *
         * @see https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-src/
         */
        var DefaultImgSrcDirective = /*#__PURE__*/function (_ImgSrcDirective) {
          _inherits(DefaultImgSrcDirective, _ImgSrcDirective);

          var _super30 = _createSuper(DefaultImgSrcDirective);

          function DefaultImgSrcDirective() {
            var _this62;

            _classCallCheck(this, DefaultImgSrcDirective);

            _this62 = _super30.apply(this, arguments);
            _this62.inputs = inputs;
            return _this62;
          }

          return _createClass(DefaultImgSrcDirective);
        }(ImgSrcDirective);

        DefaultImgSrcDirective.ɵfac = function DefaultImgSrcDirective_Factory(t) {
          return ɵDefaultImgSrcDirective_BaseFactory(t || DefaultImgSrcDirective);
        };

        DefaultImgSrcDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: DefaultImgSrcDirective,
          selectors: [["img", "src.xs", ""], ["img", "src.sm", ""], ["img", "src.md", ""], ["img", "src.lg", ""], ["img", "src.xl", ""], ["img", "src.lt-sm", ""], ["img", "src.lt-md", ""], ["img", "src.lt-lg", ""], ["img", "src.lt-xl", ""], ["img", "src.gt-xs", ""], ["img", "src.gt-sm", ""], ["img", "src.gt-md", ""], ["img", "src.gt-lg", ""]],
          inputs: {
            "src.xs": "src.xs",
            "src.sm": "src.sm",
            "src.md": "src.md",
            "src.lg": "src.lg",
            "src.xl": "src.xl",
            "src.lt-sm": "src.lt-sm",
            "src.lt-md": "src.lt-md",
            "src.lt-lg": "src.lt-lg",
            "src.lt-xl": "src.lt-xl",
            "src.gt-xs": "src.gt-xs",
            "src.gt-sm": "src.gt-sm",
            "src.gt-md": "src.gt-md",
            "src.gt-lg": "src.gt-lg"
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
        });

        var ɵDefaultImgSrcDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultImgSrcDirective);

        return DefaultImgSrcDirective;
      }();
      /**
       * @fileoverview added by tsickle
       * Generated from: extended/class/class.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var ClassDirective =
      /** @class */
      function () {
        var ClassDirective = /*#__PURE__*/function (_angular_flex_layout_19) {
          _inherits(ClassDirective, _angular_flex_layout_19);

          var _super31 = _createSuper(ClassDirective);

          /**
           * @param {?} elementRef
           * @param {?} styler
           * @param {?} marshal
           * @param {?} iterableDiffers
           * @param {?} keyValueDiffers
           * @param {?} renderer2
           * @param {?} ngClassInstance
           */
          function ClassDirective(elementRef, styler, marshal, iterableDiffers, keyValueDiffers, renderer2, ngClassInstance) {
            var _this63;

            _classCallCheck(this, ClassDirective);

            _this63 = _super31.call(this, elementRef,
            /** @type {?} */
            null, styler, marshal);
            _this63.ngClassInstance = ngClassInstance;
            _this63.DIRECTIVE_KEY = 'ngClass';

            if (!_this63.ngClassInstance) {
              // Create an instance NgClass Directive instance only if `ngClass=""` has NOT been defined on
              // the same host element; since the responsive variations may be defined...
              _this63.ngClassInstance = new _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"](iterableDiffers, keyValueDiffers, elementRef, renderer2);
            }

            _this63.init();

            _this63.setValue('', '');

            return _this63;
          }
          /**
           * Capture class assignments so we cache the default classes
           * which are merged with activated styles and used as fallbacks.
           * @param {?} val
           * @return {?}
           */


          _createClass(ClassDirective, [{
            key: "klass",
            set: function set(val) {
              this.ngClassInstance.klass = val;
              this.setValue(val, '');
            }
            /**
             * @protected
             * @param {?} value
             * @return {?}
             */

          }, {
            key: "updateWithValue",
            value: function updateWithValue(value) {
              this.ngClassInstance.ngClass = value;
              this.ngClassInstance.ngDoCheck();
            } // ******************************************************************
            // Lifecycle Hooks
            // ******************************************************************

            /**
             * For ChangeDetectionStrategy.onPush and ngOnChanges() updates
             * @return {?}
             */

          }, {
            key: "ngDoCheck",
            value: function ngDoCheck() {
              this.ngClassInstance.ngDoCheck();
            }
          }]);

          return ClassDirective;
        }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective2"]);

        ClassDirective.ɵfac = function ClassDirective_Factory(t) {
          return new (t || ClassDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], 10));
        };

        ClassDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: ClassDirective,
          inputs: {
            klass: ["class", "klass"]
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
        });
        return ClassDirective;
      }();
      /** @type {?} */


      var inputs$1 = ['ngClass', 'ngClass.xs', 'ngClass.sm', 'ngClass.md', 'ngClass.lg', 'ngClass.xl', 'ngClass.lt-sm', 'ngClass.lt-md', 'ngClass.lt-lg', 'ngClass.lt-xl', 'ngClass.gt-xs', 'ngClass.gt-sm', 'ngClass.gt-md', 'ngClass.gt-lg'];
      /** @type {?} */

      var selector$1 = "\n  [ngClass], [ngClass.xs], [ngClass.sm], [ngClass.md], [ngClass.lg], [ngClass.xl],\n  [ngClass.lt-sm], [ngClass.lt-md], [ngClass.lt-lg], [ngClass.lt-xl],\n  [ngClass.gt-xs], [ngClass.gt-sm], [ngClass.gt-md], [ngClass.gt-lg]\n";
      /**
       * Directive to add responsive support for ngClass.
       * This maintains the core functionality of 'ngClass' and adds responsive API
       * Note: this class is a no-op when rendered on the server
       */

      var DefaultClassDirective =
      /** @class */
      function () {
        /**
         * Directive to add responsive support for ngClass.
         * This maintains the core functionality of 'ngClass' and adds responsive API
         * Note: this class is a no-op when rendered on the server
         */
        var DefaultClassDirective = /*#__PURE__*/function (_ClassDirective) {
          _inherits(DefaultClassDirective, _ClassDirective);

          var _super32 = _createSuper(DefaultClassDirective);

          function DefaultClassDirective() {
            var _this64;

            _classCallCheck(this, DefaultClassDirective);

            _this64 = _super32.apply(this, arguments);
            _this64.inputs = inputs$1;
            return _this64;
          }

          return _createClass(DefaultClassDirective);
        }(ClassDirective);

        DefaultClassDirective.ɵfac = function DefaultClassDirective_Factory(t) {
          return ɵDefaultClassDirective_BaseFactory(t || DefaultClassDirective);
        };

        DefaultClassDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: DefaultClassDirective,
          selectors: [["", "ngClass", ""], ["", "ngClass.xs", ""], ["", "ngClass.sm", ""], ["", "ngClass.md", ""], ["", "ngClass.lg", ""], ["", "ngClass.xl", ""], ["", "ngClass.lt-sm", ""], ["", "ngClass.lt-md", ""], ["", "ngClass.lt-lg", ""], ["", "ngClass.lt-xl", ""], ["", "ngClass.gt-xs", ""], ["", "ngClass.gt-sm", ""], ["", "ngClass.gt-md", ""], ["", "ngClass.gt-lg", ""]],
          inputs: {
            ngClass: "ngClass",
            "ngClass.xs": "ngClass.xs",
            "ngClass.sm": "ngClass.sm",
            "ngClass.md": "ngClass.md",
            "ngClass.lg": "ngClass.lg",
            "ngClass.xl": "ngClass.xl",
            "ngClass.lt-sm": "ngClass.lt-sm",
            "ngClass.lt-md": "ngClass.lt-md",
            "ngClass.lt-lg": "ngClass.lt-lg",
            "ngClass.lt-xl": "ngClass.lt-xl",
            "ngClass.gt-xs": "ngClass.gt-xs",
            "ngClass.gt-sm": "ngClass.gt-sm",
            "ngClass.gt-md": "ngClass.gt-md",
            "ngClass.gt-lg": "ngClass.gt-lg"
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
        });

        var ɵDefaultClassDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultClassDirective);

        return DefaultClassDirective;
      }();
      /**
       * @fileoverview added by tsickle
       * Generated from: extended/show-hide/show-hide.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var ShowHideStyleBuilder =
      /** @class */
      function () {
        var ShowHideStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_20) {
          _inherits(ShowHideStyleBuilder, _angular_flex_layout_20);

          var _super33 = _createSuper(ShowHideStyleBuilder);

          function ShowHideStyleBuilder() {
            _classCallCheck(this, ShowHideStyleBuilder);

            return _super33.apply(this, arguments);
          }

          _createClass(ShowHideStyleBuilder, [{
            key: "buildStyles",
            value:
            /**
             * @param {?} show
             * @param {?} parent
             * @return {?}
             */
            function buildStyles(show, parent) {
              /** @type {?} */
              var shouldShow = show === 'true';
              return {
                'display': shouldShow ? parent.display || (parent.isServer ? 'initial' : '') : 'none'
              };
            }
          }]);

          return ShowHideStyleBuilder;
        }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleBuilder"]);

        ShowHideStyleBuilder.ɵfac = function ShowHideStyleBuilder_Factory(t) {
          return ɵShowHideStyleBuilder_BaseFactory(t || ShowHideStyleBuilder);
        };
        /** @nocollapse */


        ShowHideStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
          factory: function ShowHideStyleBuilder_Factory() {
            return new ShowHideStyleBuilder();
          },
          token: ShowHideStyleBuilder,
          providedIn: "root"
        });

        var ɵShowHideStyleBuilder_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](ShowHideStyleBuilder);

        return ShowHideStyleBuilder;
      }();

      var ShowHideDirective =
      /** @class */
      function () {
        var ShowHideDirective = /*#__PURE__*/function (_angular_flex_layout_21) {
          _inherits(ShowHideDirective, _angular_flex_layout_21);

          var _super34 = _createSuper(ShowHideDirective);

          /**
           * @param {?} elementRef
           * @param {?} styleBuilder
           * @param {?} styler
           * @param {?} marshal
           * @param {?} layoutConfig
           * @param {?} platformId
           * @param {?} serverModuleLoaded
           */
          function ShowHideDirective(elementRef, styleBuilder, styler, marshal, layoutConfig, platformId, serverModuleLoaded) {
            var _this65;

            _classCallCheck(this, ShowHideDirective);

            _this65 = _super34.call(this, elementRef, styleBuilder, styler, marshal);
            _this65.layoutConfig = layoutConfig;
            _this65.platformId = platformId;
            _this65.serverModuleLoaded = serverModuleLoaded;
            _this65.DIRECTIVE_KEY = 'show-hide';
            /**
             * Original DOM Element CSS display style
             */

            _this65.display = '';
            _this65.hasLayout = false;
            _this65.hasFlexChild = false;
            return _this65;
          } // *********************************************
          // Lifecycle Methods
          // *********************************************

          /**
           * @return {?}
           */


          _createClass(ShowHideDirective, [{
            key: "ngAfterViewInit",
            value: function ngAfterViewInit() {
              this.trackExtraTriggers();
              /** @type {?} */

              var children = Array.from(this.nativeElement.children);

              for (var i = 0; i < children.length; i++) {
                if (this.marshal.hasValue(
                /** @type {?} */
                children[i], 'flex')) {
                  this.hasFlexChild = true;
                  break;
                }
              }

              if (DISPLAY_MAP.has(this.nativeElement)) {
                this.display =
                /** @type {?} */
                DISPLAY_MAP.get(this.nativeElement);
              } else {
                this.display = this.getDisplayStyle();
                DISPLAY_MAP.set(this.nativeElement, this.display);
              }

              this.init(); // set the default to show unless explicitly overridden

              /** @type {?} */

              var defaultValue = this.marshal.getValue(this.nativeElement, this.DIRECTIVE_KEY, '');

              if (defaultValue === undefined || defaultValue === '') {
                this.setValue(true, '');
              } else {
                this.triggerUpdate();
              }
            }
            /**
             * On changes to any \@Input properties...
             * Default to use the non-responsive Input value ('fxShow')
             * Then conditionally override with the mq-activated Input's current value
             * @param {?} changes
             * @return {?}
             */

          }, {
            key: "ngOnChanges",
            value: function ngOnChanges(changes) {
              var _this66 = this;

              Object.keys(changes).forEach(
              /**
              * @param {?} key
              * @return {?}
              */

              /**
              * @param {?} key
              * @return {?}
              */
              function (key) {
                if (_this66.inputs.indexOf(key) !== -1) {
                  /** @type {?} */
                  var inputKey = key.split('.');
                  /** @type {?} */

                  var bp = inputKey.slice(1).join('.');
                  /** @type {?} */

                  var inputValue = changes[key].currentValue;
                  /** @type {?} */

                  var shouldShow = inputValue !== '' ? inputValue !== 0 ? Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(inputValue) : false : true;

                  if (inputKey[0] === 'fxHide') {
                    shouldShow = !shouldShow;
                  }

                  _this66.setValue(shouldShow, bp);
                }
              });
            } // *********************************************
            // Protected methods
            // *********************************************

            /**
             *  Watch for these extra triggers to update fxShow, fxHide stylings
             * @protected
             * @return {?}
             */

          }, {
            key: "trackExtraTriggers",
            value: function trackExtraTriggers() {
              var _this67 = this;

              this.hasLayout = this.marshal.hasValue(this.nativeElement, 'layout');
              ['layout', 'layout-align'].forEach(
              /**
              * @param {?} key
              * @return {?}
              */

              /**
              * @param {?} key
              * @return {?}
              */
              function (key) {
                _this67.marshal.trackValue(_this67.nativeElement, key).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this67.destroySubject)).subscribe(_this67.triggerUpdate.bind(_this67));
              });
            }
            /**
             * Override accessor to the current HTMLElement's `display` style
             * Note: Show/Hide will not change the display to 'flex' but will set it to 'block'
             * unless it was already explicitly specified inline or in a CSS stylesheet.
             * @protected
             * @return {?}
             */

          }, {
            key: "getDisplayStyle",
            value: function getDisplayStyle() {
              return this.hasLayout || this.hasFlexChild && this.layoutConfig.addFlexToParent ? 'flex' : this.styler.lookupStyle(this.nativeElement, 'display', true);
            }
            /**
             * Validate the visibility value and then update the host's inline display style
             * @protected
             * @param {?=} value
             * @return {?}
             */

          }, {
            key: "updateWithValue",
            value: function updateWithValue() {
              var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

              if (value === '') {
                return;
              }
              /** @type {?} */


              var isServer = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(this.platformId);
              this.addStyles(value ? 'true' : 'false', {
                display: this.display,
                isServer: isServer
              });

              if (isServer && this.serverModuleLoaded) {
                this.nativeElement.style.setProperty('display', '');
              }

              this.marshal.triggerUpdate(
              /** @type {?} */
              this.parentElement, 'layout-gap');
            }
          }]);

          return ShowHideDirective;
        }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective2"]);

        ShowHideDirective.ɵfac = function ShowHideDirective_Factory(t) {
          return new (t || ShowHideDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ShowHideStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["SERVER_TOKEN"]));
        };

        ShowHideDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: ShowHideDirective,
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
        });
        return ShowHideDirective;
      }();
      /** @type {?} */


      var DISPLAY_MAP = new WeakMap();
      /** @type {?} */

      var inputs$2 = ['fxShow', 'fxShow.print', 'fxShow.xs', 'fxShow.sm', 'fxShow.md', 'fxShow.lg', 'fxShow.xl', 'fxShow.lt-sm', 'fxShow.lt-md', 'fxShow.lt-lg', 'fxShow.lt-xl', 'fxShow.gt-xs', 'fxShow.gt-sm', 'fxShow.gt-md', 'fxShow.gt-lg', 'fxHide', 'fxHide.print', 'fxHide.xs', 'fxHide.sm', 'fxHide.md', 'fxHide.lg', 'fxHide.xl', 'fxHide.lt-sm', 'fxHide.lt-md', 'fxHide.lt-lg', 'fxHide.lt-xl', 'fxHide.gt-xs', 'fxHide.gt-sm', 'fxHide.gt-md', 'fxHide.gt-lg'];
      /** @type {?} */

      var selector$2 = "\n  [fxShow], [fxShow.print],\n  [fxShow.xs], [fxShow.sm], [fxShow.md], [fxShow.lg], [fxShow.xl],\n  [fxShow.lt-sm], [fxShow.lt-md], [fxShow.lt-lg], [fxShow.lt-xl],\n  [fxShow.gt-xs], [fxShow.gt-sm], [fxShow.gt-md], [fxShow.gt-lg],\n  [fxHide], [fxHide.print],\n  [fxHide.xs], [fxHide.sm], [fxHide.md], [fxHide.lg], [fxHide.xl],\n  [fxHide.lt-sm], [fxHide.lt-md], [fxHide.lt-lg], [fxHide.lt-xl],\n  [fxHide.gt-xs], [fxHide.gt-sm], [fxHide.gt-md], [fxHide.gt-lg]\n";
      /**
       * 'show' Layout API directive
       */

      var DefaultShowHideDirective =
      /** @class */
      function () {
        /**
         * 'show' Layout API directive
         */
        var DefaultShowHideDirective = /*#__PURE__*/function (_ShowHideDirective) {
          _inherits(DefaultShowHideDirective, _ShowHideDirective);

          var _super35 = _createSuper(DefaultShowHideDirective);

          function DefaultShowHideDirective() {
            var _this68;

            _classCallCheck(this, DefaultShowHideDirective);

            _this68 = _super35.apply(this, arguments);
            _this68.inputs = inputs$2;
            return _this68;
          }

          return _createClass(DefaultShowHideDirective);
        }(ShowHideDirective);

        DefaultShowHideDirective.ɵfac = function DefaultShowHideDirective_Factory(t) {
          return ɵDefaultShowHideDirective_BaseFactory(t || DefaultShowHideDirective);
        };

        DefaultShowHideDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: DefaultShowHideDirective,
          selectors: [["", "fxShow", ""], ["", "fxShow.print", ""], ["", "fxShow.xs", ""], ["", "fxShow.sm", ""], ["", "fxShow.md", ""], ["", "fxShow.lg", ""], ["", "fxShow.xl", ""], ["", "fxShow.lt-sm", ""], ["", "fxShow.lt-md", ""], ["", "fxShow.lt-lg", ""], ["", "fxShow.lt-xl", ""], ["", "fxShow.gt-xs", ""], ["", "fxShow.gt-sm", ""], ["", "fxShow.gt-md", ""], ["", "fxShow.gt-lg", ""], ["", "fxHide", ""], ["", "fxHide.print", ""], ["", "fxHide.xs", ""], ["", "fxHide.sm", ""], ["", "fxHide.md", ""], ["", "fxHide.lg", ""], ["", "fxHide.xl", ""], ["", "fxHide.lt-sm", ""], ["", "fxHide.lt-md", ""], ["", "fxHide.lt-lg", ""], ["", "fxHide.lt-xl", ""], ["", "fxHide.gt-xs", ""], ["", "fxHide.gt-sm", ""], ["", "fxHide.gt-md", ""], ["", "fxHide.gt-lg", ""]],
          inputs: {
            fxShow: "fxShow",
            "fxShow.print": "fxShow.print",
            "fxShow.xs": "fxShow.xs",
            "fxShow.sm": "fxShow.sm",
            "fxShow.md": "fxShow.md",
            "fxShow.lg": "fxShow.lg",
            "fxShow.xl": "fxShow.xl",
            "fxShow.lt-sm": "fxShow.lt-sm",
            "fxShow.lt-md": "fxShow.lt-md",
            "fxShow.lt-lg": "fxShow.lt-lg",
            "fxShow.lt-xl": "fxShow.lt-xl",
            "fxShow.gt-xs": "fxShow.gt-xs",
            "fxShow.gt-sm": "fxShow.gt-sm",
            "fxShow.gt-md": "fxShow.gt-md",
            "fxShow.gt-lg": "fxShow.gt-lg",
            fxHide: "fxHide",
            "fxHide.print": "fxHide.print",
            "fxHide.xs": "fxHide.xs",
            "fxHide.sm": "fxHide.sm",
            "fxHide.md": "fxHide.md",
            "fxHide.lg": "fxHide.lg",
            "fxHide.xl": "fxHide.xl",
            "fxHide.lt-sm": "fxHide.lt-sm",
            "fxHide.lt-md": "fxHide.lt-md",
            "fxHide.lt-lg": "fxHide.lt-lg",
            "fxHide.lt-xl": "fxHide.lt-xl",
            "fxHide.gt-xs": "fxHide.gt-xs",
            "fxHide.gt-sm": "fxHide.gt-sm",
            "fxHide.gt-md": "fxHide.gt-md",
            "fxHide.gt-lg": "fxHide.gt-lg"
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
        });

        var ɵDefaultShowHideDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultShowHideDirective);

        return DefaultShowHideDirective;
      }();
      /**
       * @fileoverview added by tsickle
       * Generated from: extended/style/style-transforms.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * NgStyle allowed inputs
       */


      var NgStyleKeyValue = /*#__PURE__*/_createClass(
      /**
       * @param {?} key
       * @param {?} value
       * @param {?=} noQuotes
       */
      function NgStyleKeyValue(key, value) {
        var noQuotes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

        _classCallCheck(this, NgStyleKeyValue);

        this.key = key;
        this.value = value;
        this.key = noQuotes ? key.replace(/['"]/g, '').trim() : key.trim();
        this.value = noQuotes ? value.replace(/['"]/g, '').trim() : value.trim();
        this.value = this.value.replace(/;/, '');
      });
      /**
       * @param {?} target
       * @return {?}
       */


      function getType(target) {
        /** @type {?} */
        var what = typeof target;

        if (what === 'object') {
          return target.constructor === Array ? 'array' : target.constructor === Set ? 'set' : 'object';
        }

        return what;
      }
      /**
       * Split string of key:value pairs into Array of k-v pairs
       * e.g.  'key:value; key:value; key:value;' -> ['key:value',...]
       * @param {?} source
       * @param {?=} delimiter
       * @return {?}
       */


      function buildRawList(source) {
        var delimiter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ';';
        return String(source).trim().split(delimiter).map(
        /**
        * @param {?} val
        * @return {?}
        */
        function (val) {
          return val.trim();
        }).filter(
        /**
        * @param {?} val
        * @return {?}
        */

        /**
        * @param {?} val
        * @return {?}
        */
        function (val) {
          return val !== '';
        });
      }
      /**
       * Convert array of key:value strings to a iterable map object
       * @param {?} styles
       * @param {?=} sanitize
       * @return {?}
       */


      function buildMapFromList(styles, sanitize) {
        /** @type {?} */
        var sanitizeValue =
        /**
        * @param {?} it
        * @return {?}
        */
        function sanitizeValue(it) {
          if (sanitize) {
            it.value = sanitize(it.value);
          }

          return it;
        };

        return styles.map(stringToKeyValue).filter(
        /**
        * @param {?} entry
        * @return {?}
        */

        /**
        * @param {?} entry
        * @return {?}
        */
        function (entry) {
          return !!entry;
        }).map(sanitizeValue).reduce(keyValuesToMap,
        /** @type {?} */
        {});
      }
      /**
       * Convert Set<string> or raw Object to an iterable NgStyleMap
       * @param {?} source
       * @param {?=} sanitize
       * @return {?}
       */


      function buildMapFromSet(source, sanitize) {
        /** @type {?} */
        var list = [];

        if (getType(source) === 'set') {
          /** @type {?} */
          source.forEach(
          /**
          * @param {?} entry
          * @return {?}
          */

          /**
          * @param {?} entry
          * @return {?}
          */
          function (entry) {
            return list.push(entry);
          });
        } else {
          Object.keys(source).forEach(
          /**
          * @param {?} key
          * @return {?}
          */
          function (key) {
            list.push("".concat(key, ":").concat(
            /** @type {?} */
            source[key]));
          });
        }

        return buildMapFromList(list, sanitize);
      }
      /**
       * Convert 'key:value' -> [key, value]
       * @param {?} it
       * @return {?}
       */


      function stringToKeyValue(it) {
        var _it$split = it.split(':'),
            _it$split2 = _toArray(_it$split),
            key = _it$split2[0],
            vals = _it$split2.slice(1);

        return new NgStyleKeyValue(key, vals.join(':'));
      }
      /**
       * Convert [ [key,value] ] -> { key : value }
       * @param {?} map
       * @param {?} entry
       * @return {?}
       */


      function keyValuesToMap(map, entry) {
        if (!!entry.key) {
          map[entry.key] = entry.value;
        }

        return map;
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: extended/style/style.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var StyleDirective =
      /** @class */
      function () {
        var StyleDirective = /*#__PURE__*/function (_angular_flex_layout_22) {
          _inherits(StyleDirective, _angular_flex_layout_22);

          var _super36 = _createSuper(StyleDirective);

          /**
           * @param {?} elementRef
           * @param {?} styler
           * @param {?} marshal
           * @param {?} sanitizer
           * @param {?} differs
           * @param {?} renderer2
           * @param {?} ngStyleInstance
           * @param {?} serverLoaded
           * @param {?} platformId
           */
          function StyleDirective(elementRef, styler, marshal, sanitizer, differs, renderer2, ngStyleInstance, serverLoaded, platformId) {
            var _this69;

            _classCallCheck(this, StyleDirective);

            _this69 = _super36.call(this, elementRef,
            /** @type {?} */
            null, styler, marshal);
            _this69.sanitizer = sanitizer;
            _this69.ngStyleInstance = ngStyleInstance;
            _this69.DIRECTIVE_KEY = 'ngStyle';

            if (!_this69.ngStyleInstance) {
              // Create an instance NgStyle Directive instance only if `ngStyle=""` has NOT been
              // defined on the same host element; since the responsive variations may be defined...
              _this69.ngStyleInstance = new _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"](elementRef, differs, renderer2);
            }

            _this69.init();
            /** @type {?} */


            var styles = _this69.nativeElement.getAttribute('style') || '';
            _this69.fallbackStyles = _this69.buildStyleMap(styles);
            _this69.isServer = serverLoaded && Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(platformId);
            return _this69;
          }
          /**
           * Add generated styles
           * @protected
           * @param {?} value
           * @return {?}
           */


          _createClass(StyleDirective, [{
            key: "updateWithValue",
            value: function updateWithValue(value) {
              /** @type {?} */
              var styles = this.buildStyleMap(value);
              this.ngStyleInstance.ngStyle = Object.assign(Object.assign({}, this.fallbackStyles), styles);

              if (this.isServer) {
                this.applyStyleToElement(styles);
              }

              this.ngStyleInstance.ngDoCheck();
            }
            /**
             * Remove generated styles
             * @protected
             * @return {?}
             */

          }, {
            key: "clearStyles",
            value: function clearStyles() {
              this.ngStyleInstance.ngStyle = this.fallbackStyles;
              this.ngStyleInstance.ngDoCheck();
            }
            /**
             * Convert raw strings to ngStyleMap; which is required by ngStyle
             * NOTE: Raw string key-value pairs MUST be delimited by `;`
             *       Comma-delimiters are not supported due to complexities of
             *       possible style values such as `rgba(x,x,x,x)` and others
             * @protected
             * @param {?} styles
             * @return {?}
             */

          }, {
            key: "buildStyleMap",
            value: function buildStyleMap(styles) {
              var _this70 = this;

              // Always safe-guard (aka sanitize) style property values

              /** @type {?} */
              var sanitizer =
              /**
              * @param {?} val
              * @return {?}
              */
              function sanitizer(val) {
                return _this70.sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].STYLE, val) || '';
              };

              if (styles) {
                switch (getType(styles)) {
                  case 'string':
                    return buildMapFromList$1(buildRawList(styles), sanitizer);

                  case 'array':
                    return buildMapFromList$1(
                    /** @type {?} */
                    styles, sanitizer);

                  case 'set':
                    return buildMapFromSet(styles, sanitizer);

                  default:
                    return buildMapFromSet(styles, sanitizer);
                }
              }

              return {};
            } // ******************************************************************
            // Lifecycle Hooks
            // ******************************************************************

            /**
             * For ChangeDetectionStrategy.onPush and ngOnChanges() updates
             * @return {?}
             */

          }, {
            key: "ngDoCheck",
            value: function ngDoCheck() {
              this.ngStyleInstance.ngDoCheck();
            }
          }]);

          return StyleDirective;
        }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective2"]);

        StyleDirective.ɵfac = function StyleDirective_Factory(t) {
          return new (t || StyleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["SERVER_TOKEN"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]));
        };

        StyleDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: StyleDirective,
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
        });
        return StyleDirective;
      }();
      /** @type {?} */


      var inputs$3 = ['ngStyle', 'ngStyle.xs', 'ngStyle.sm', 'ngStyle.md', 'ngStyle.lg', 'ngStyle.xl', 'ngStyle.lt-sm', 'ngStyle.lt-md', 'ngStyle.lt-lg', 'ngStyle.lt-xl', 'ngStyle.gt-xs', 'ngStyle.gt-sm', 'ngStyle.gt-md', 'ngStyle.gt-lg'];
      /** @type {?} */

      var selector$3 = "\n  [ngStyle],\n  [ngStyle.xs], [ngStyle.sm], [ngStyle.md], [ngStyle.lg], [ngStyle.xl],\n  [ngStyle.lt-sm], [ngStyle.lt-md], [ngStyle.lt-lg], [ngStyle.lt-xl],\n  [ngStyle.gt-xs], [ngStyle.gt-sm], [ngStyle.gt-md], [ngStyle.gt-lg]\n";
      /**
       * Directive to add responsive support for ngStyle.
       *
       */

      var DefaultStyleDirective =
      /** @class */
      function () {
        /**
         * Directive to add responsive support for ngStyle.
         *
         */
        var DefaultStyleDirective = /*#__PURE__*/function (_StyleDirective) {
          _inherits(DefaultStyleDirective, _StyleDirective);

          var _super37 = _createSuper(DefaultStyleDirective);

          function DefaultStyleDirective() {
            var _this71;

            _classCallCheck(this, DefaultStyleDirective);

            _this71 = _super37.apply(this, arguments);
            _this71.inputs = inputs$3;
            return _this71;
          }

          return _createClass(DefaultStyleDirective);
        }(StyleDirective);

        DefaultStyleDirective.ɵfac = function DefaultStyleDirective_Factory(t) {
          return ɵDefaultStyleDirective_BaseFactory(t || DefaultStyleDirective);
        };

        DefaultStyleDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: DefaultStyleDirective,
          selectors: [["", "ngStyle", ""], ["", "ngStyle.xs", ""], ["", "ngStyle.sm", ""], ["", "ngStyle.md", ""], ["", "ngStyle.lg", ""], ["", "ngStyle.xl", ""], ["", "ngStyle.lt-sm", ""], ["", "ngStyle.lt-md", ""], ["", "ngStyle.lt-lg", ""], ["", "ngStyle.lt-xl", ""], ["", "ngStyle.gt-xs", ""], ["", "ngStyle.gt-sm", ""], ["", "ngStyle.gt-md", ""], ["", "ngStyle.gt-lg", ""]],
          inputs: {
            ngStyle: "ngStyle",
            "ngStyle.xs": "ngStyle.xs",
            "ngStyle.sm": "ngStyle.sm",
            "ngStyle.md": "ngStyle.md",
            "ngStyle.lg": "ngStyle.lg",
            "ngStyle.xl": "ngStyle.xl",
            "ngStyle.lt-sm": "ngStyle.lt-sm",
            "ngStyle.lt-md": "ngStyle.lt-md",
            "ngStyle.lt-lg": "ngStyle.lt-lg",
            "ngStyle.lt-xl": "ngStyle.lt-xl",
            "ngStyle.gt-xs": "ngStyle.gt-xs",
            "ngStyle.gt-sm": "ngStyle.gt-sm",
            "ngStyle.gt-md": "ngStyle.gt-md",
            "ngStyle.gt-lg": "ngStyle.gt-lg"
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
        });

        var ɵDefaultStyleDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultStyleDirective);

        return DefaultStyleDirective;
      }();
      /**
       * Build a styles map from a list of styles, while sanitizing bad values first
       * @param {?} styles
       * @param {?=} sanitize
       * @return {?}
       */


      function buildMapFromList$1(styles, sanitize) {
        /** @type {?} */
        var sanitizeValue =
        /**
        * @param {?} it
        * @return {?}
        */
        function sanitizeValue(it) {
          if (sanitize) {
            it.value = sanitize(it.value);
          }

          return it;
        };

        return styles.map(stringToKeyValue).filter(
        /**
        * @param {?} entry
        * @return {?}
        */

        /**
        * @param {?} entry
        * @return {?}
        */
        function (entry) {
          return !!entry;
        }).map(sanitizeValue).reduce(keyValuesToMap,
        /** @type {?} */
        {});
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: extended/module.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var ALL_DIRECTIVES = [DefaultShowHideDirective, DefaultClassDirective, DefaultStyleDirective, DefaultImgSrcDirective];
      /**
       * *****************************************************************
       * Define module for the Extended API
       * *****************************************************************
       */

      var ExtendedModule =
      /** @class */
      function () {
        /**
         * *****************************************************************
         * Define module for the Extended API
         * *****************************************************************
         */
        var ExtendedModule = /*#__PURE__*/_createClass(function ExtendedModule() {
          _classCallCheck(this, ExtendedModule);
        });

        ExtendedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: ExtendedModule
        });
        ExtendedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function ExtendedModule_Factory(t) {
            return new (t || ExtendedModule)();
          },
          imports: [[_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["CoreModule"]]]
        });

        (function () {
          (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ExtendedModule, {
            declarations: function declarations() {
              return [DefaultShowHideDirective, DefaultClassDirective, DefaultStyleDirective, DefaultImgSrcDirective];
            },
            imports: function imports() {
              return [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["CoreModule"]];
            },
            exports: function exports() {
              return [DefaultShowHideDirective, DefaultClassDirective, DefaultStyleDirective, DefaultImgSrcDirective];
            }
          });
        })();

        return ExtendedModule;
      }();
      /**
       * @fileoverview added by tsickle
       * Generated from: extended/public-api.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: extended/index.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=extended.js.map

      /***/

    },

    /***/
    "zpSk":
    /*!************************************************************************!*\
      !*** ./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/grid.js ***!
      \************************************************************************/

    /*! exports provided: GridModule, ɵgrid_privatef, ɵgrid_privatee, ɵgrid_privated, ɵgrid_privatei, ɵgrid_privateh, ɵgrid_privateg, ɵgrid_privatel, ɵgrid_privatek, ɵgrid_privatej, ɵgrid_privateo, ɵgrid_privaten, ɵgrid_privatem, ɵgrid_privater, ɵgrid_privateq, ɵgrid_privatep, ɵgrid_privateu, ɵgrid_privatet, ɵgrid_privates, ɵgrid_privatex, ɵgrid_privatew, ɵgrid_privatev, ɵgrid_privateba, ɵgrid_privatez, ɵgrid_privatey, ɵgrid_privatec, ɵgrid_privateb, ɵgrid_privatea, ɵgrid_privatebd, ɵgrid_privatebc, ɵgrid_privatebb, ɵgrid_privatebg, ɵgrid_privatebf, ɵgrid_privatebe */

    /***/
    function zpSk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GridModule", function () {
        return GridModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatef", function () {
        return DefaultGridAlignColumnsDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatee", function () {
        return GridAlignColumnsDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privated", function () {
        return GridAlignColumnsStyleBuilder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatei", function () {
        return DefaultGridAlignRowsDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privateh", function () {
        return GridAlignRowsDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privateg", function () {
        return GridAlignRowsStyleBuilder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatel", function () {
        return DefaultGridAreaDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatek", function () {
        return GridAreaDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatej", function () {
        return GridAreaStyleBuilder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privateo", function () {
        return DefaultGridAreasDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privaten", function () {
        return GridAreasDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatem", function () {
        return GridAreasStyleBuiler;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privater", function () {
        return DefaultGridAutoDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privateq", function () {
        return GridAutoDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatep", function () {
        return GridAutoStyleBuilder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privateu", function () {
        return DefaultGridColumnDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatet", function () {
        return GridColumnDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privates", function () {
        return GridColumnStyleBuilder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatex", function () {
        return DefaultGridColumnsDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatew", function () {
        return GridColumnsDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatev", function () {
        return GridColumnsStyleBuilder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privateba", function () {
        return DefaultGridGapDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatez", function () {
        return GridGapDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatey", function () {
        return GridGapStyleBuilder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatec", function () {
        return DefaultGridAlignDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privateb", function () {
        return GridAlignDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatea", function () {
        return GridAlignStyleBuilder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatebd", function () {
        return DefaultGridRowDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatebc", function () {
        return GridRowDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatebb", function () {
        return GridRowStyleBuilder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatebg", function () {
        return DefaultGridRowsDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatebf", function () {
        return GridRowsDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatebe", function () {
        return GridRowsStyleBuilder;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/flex-layout/core */
      "pD6V");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: grid/grid-align/grid-align.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var ROW_DEFAULT = 'stretch';
      /** @type {?} */

      var COL_DEFAULT = 'stretch';

      var GridAlignStyleBuilder =
      /** @class */
      function () {
        var GridAlignStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_23) {
          _inherits(GridAlignStyleBuilder, _angular_flex_layout_23);

          var _super38 = _createSuper(GridAlignStyleBuilder);

          function GridAlignStyleBuilder() {
            _classCallCheck(this, GridAlignStyleBuilder);

            return _super38.apply(this, arguments);
          }

          _createClass(GridAlignStyleBuilder, [{
            key: "buildStyles",
            value:
            /**
             * @param {?} input
             * @return {?}
             */
            function buildStyles(input) {
              return buildCss(input || ROW_DEFAULT);
            }
          }]);

          return GridAlignStyleBuilder;
        }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

        GridAlignStyleBuilder.ɵfac = function GridAlignStyleBuilder_Factory(t) {
          return ɵGridAlignStyleBuilder_BaseFactory(t || GridAlignStyleBuilder);
        };
        /** @nocollapse */


        GridAlignStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
          factory: function GridAlignStyleBuilder_Factory() {
            return new GridAlignStyleBuilder();
          },
          token: GridAlignStyleBuilder,
          providedIn: "root"
        });

        var ɵGridAlignStyleBuilder_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](GridAlignStyleBuilder);

        return GridAlignStyleBuilder;
      }();

      var GridAlignDirective =
      /** @class */
      function () {
        var GridAlignDirective = /*#__PURE__*/function (_angular_flex_layout_24) {
          _inherits(GridAlignDirective, _angular_flex_layout_24);

          var _super39 = _createSuper(GridAlignDirective);

          /**
           * @param {?} elementRef
           * @param {?} styleBuilder
           * @param {?} styler
           * @param {?} marshal
           */
          function GridAlignDirective(elementRef, styleBuilder, styler, marshal) {
            var _this72;

            _classCallCheck(this, GridAlignDirective);

            _this72 = _super39.call(this, elementRef, styleBuilder, styler, marshal);
            _this72.DIRECTIVE_KEY = 'grid-align';
            _this72.styleCache = alignCache;

            _this72.init();

            return _this72;
          }

          return _createClass(GridAlignDirective);
        }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

        GridAlignDirective.ɵfac = function GridAlignDirective_Factory(t) {
          return new (t || GridAlignDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GridAlignStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
        };

        GridAlignDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: GridAlignDirective,
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
        });
        return GridAlignDirective;
      }();
      /** @type {?} */


      var alignCache = new Map();
      /** @type {?} */

      var inputs = ['gdGridAlign', 'gdGridAlign.xs', 'gdGridAlign.sm', 'gdGridAlign.md', 'gdGridAlign.lg', 'gdGridAlign.xl', 'gdGridAlign.lt-sm', 'gdGridAlign.lt-md', 'gdGridAlign.lt-lg', 'gdGridAlign.lt-xl', 'gdGridAlign.gt-xs', 'gdGridAlign.gt-sm', 'gdGridAlign.gt-md', 'gdGridAlign.gt-lg'];
      /** @type {?} */

      var selector = "\n  [gdGridAlign],\n  [gdGridAlign.xs], [gdGridAlign.sm], [gdGridAlign.md], [gdGridAlign.lg],[gdGridAlign.xl],\n  [gdGridAlign.lt-sm], [gdGridAlign.lt-md], [gdGridAlign.lt-lg], [gdGridAlign.lt-xl],\n  [gdGridAlign.gt-xs], [gdGridAlign.gt-sm], [gdGridAlign.gt-md], [gdGridAlign.gt-lg]\n";
      /**
       * 'align' CSS Grid styling directive for grid children
       *  Defines positioning of child elements along row and column axis in a grid container
       *  Optional values: {row-axis} values or {row-axis column-axis} value pairs
       *
       * @see https://css-tricks.com/snippets/css/complete-guide-grid/#prop-justify-self
       * @see https://css-tricks.com/snippets/css/complete-guide-grid/#prop-align-self
       */

      var DefaultGridAlignDirective =
      /** @class */
      function () {
        /**
         * 'align' CSS Grid styling directive for grid children
         *  Defines positioning of child elements along row and column axis in a grid container
         *  Optional values: {row-axis} values or {row-axis column-axis} value pairs
         *
         * @see https://css-tricks.com/snippets/css/complete-guide-grid/#prop-justify-self
         * @see https://css-tricks.com/snippets/css/complete-guide-grid/#prop-align-self
         */
        var DefaultGridAlignDirective = /*#__PURE__*/function (_GridAlignDirective) {
          _inherits(DefaultGridAlignDirective, _GridAlignDirective);

          var _super40 = _createSuper(DefaultGridAlignDirective);

          function DefaultGridAlignDirective() {
            var _this73;

            _classCallCheck(this, DefaultGridAlignDirective);

            _this73 = _super40.apply(this, arguments);
            _this73.inputs = inputs;
            return _this73;
          }

          return _createClass(DefaultGridAlignDirective);
        }(GridAlignDirective);

        DefaultGridAlignDirective.ɵfac = function DefaultGridAlignDirective_Factory(t) {
          return ɵDefaultGridAlignDirective_BaseFactory(t || DefaultGridAlignDirective);
        };

        DefaultGridAlignDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: DefaultGridAlignDirective,
          selectors: [["", "gdGridAlign", ""], ["", "gdGridAlign.xs", ""], ["", "gdGridAlign.sm", ""], ["", "gdGridAlign.md", ""], ["", "gdGridAlign.lg", ""], ["", "gdGridAlign.xl", ""], ["", "gdGridAlign.lt-sm", ""], ["", "gdGridAlign.lt-md", ""], ["", "gdGridAlign.lt-lg", ""], ["", "gdGridAlign.lt-xl", ""], ["", "gdGridAlign.gt-xs", ""], ["", "gdGridAlign.gt-sm", ""], ["", "gdGridAlign.gt-md", ""], ["", "gdGridAlign.gt-lg", ""]],
          inputs: {
            gdGridAlign: "gdGridAlign",
            "gdGridAlign.xs": "gdGridAlign.xs",
            "gdGridAlign.sm": "gdGridAlign.sm",
            "gdGridAlign.md": "gdGridAlign.md",
            "gdGridAlign.lg": "gdGridAlign.lg",
            "gdGridAlign.xl": "gdGridAlign.xl",
            "gdGridAlign.lt-sm": "gdGridAlign.lt-sm",
            "gdGridAlign.lt-md": "gdGridAlign.lt-md",
            "gdGridAlign.lt-lg": "gdGridAlign.lt-lg",
            "gdGridAlign.lt-xl": "gdGridAlign.lt-xl",
            "gdGridAlign.gt-xs": "gdGridAlign.gt-xs",
            "gdGridAlign.gt-sm": "gdGridAlign.gt-sm",
            "gdGridAlign.gt-md": "gdGridAlign.gt-md",
            "gdGridAlign.gt-lg": "gdGridAlign.gt-lg"
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
        });

        var ɵDefaultGridAlignDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultGridAlignDirective);

        return DefaultGridAlignDirective;
      }();
      /**
       * @param {?=} align
       * @return {?}
       */


      function buildCss() {
        var align = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

        /** @type {?} */
        var css = {};

        var _align$split3 = align.split(' '),
            _align$split4 = _slicedToArray(_align$split3, 2),
            rowAxis = _align$split4[0],
            columnAxis = _align$split4[1]; // Row axis


        switch (rowAxis) {
          case 'end':
            css['justify-self'] = 'end';
            break;

          case 'center':
            css['justify-self'] = 'center';
            break;

          case 'stretch':
            css['justify-self'] = 'stretch';
            break;

          case 'start':
            css['justify-self'] = 'start';
            break;

          default:
            css['justify-self'] = ROW_DEFAULT; // default row axis

            break;
        } // Column axis


        switch (columnAxis) {
          case 'end':
            css['align-self'] = 'end';
            break;

          case 'center':
            css['align-self'] = 'center';
            break;

          case 'stretch':
            css['align-self'] = 'stretch';
            break;

          case 'start':
            css['align-self'] = 'start';
            break;

          default:
            css['align-self'] = COL_DEFAULT; // default column axis

            break;
        }

        return css;
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: grid/align-columns/align-columns.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var DEFAULT_MAIN = 'start';
      /** @type {?} */

      var DEFAULT_CROSS = 'stretch';

      var GridAlignColumnsStyleBuilder =
      /** @class */
      function () {
        var GridAlignColumnsStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_25) {
          _inherits(GridAlignColumnsStyleBuilder, _angular_flex_layout_25);

          var _super41 = _createSuper(GridAlignColumnsStyleBuilder);

          function GridAlignColumnsStyleBuilder() {
            _classCallCheck(this, GridAlignColumnsStyleBuilder);

            return _super41.apply(this, arguments);
          }

          _createClass(GridAlignColumnsStyleBuilder, [{
            key: "buildStyles",
            value:
            /**
             * @param {?} input
             * @param {?} parent
             * @return {?}
             */
            function buildStyles(input, parent) {
              return buildCss$1(input || "".concat(DEFAULT_MAIN, " ").concat(DEFAULT_CROSS), parent.inline);
            }
          }]);

          return GridAlignColumnsStyleBuilder;
        }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

        GridAlignColumnsStyleBuilder.ɵfac = function GridAlignColumnsStyleBuilder_Factory(t) {
          return ɵGridAlignColumnsStyleBuilder_BaseFactory(t || GridAlignColumnsStyleBuilder);
        };
        /** @nocollapse */


        GridAlignColumnsStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
          factory: function GridAlignColumnsStyleBuilder_Factory() {
            return new GridAlignColumnsStyleBuilder();
          },
          token: GridAlignColumnsStyleBuilder,
          providedIn: "root"
        });

        var ɵGridAlignColumnsStyleBuilder_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](GridAlignColumnsStyleBuilder);

        return GridAlignColumnsStyleBuilder;
      }();

      var GridAlignColumnsDirective =
      /** @class */
      function () {
        var GridAlignColumnsDirective = /*#__PURE__*/function (_angular_flex_layout_26) {
          _inherits(GridAlignColumnsDirective, _angular_flex_layout_26);

          var _super42 = _createSuper(GridAlignColumnsDirective);

          /**
           * @param {?} elementRef
           * @param {?} styleBuilder
           * @param {?} styler
           * @param {?} marshal
           */
          function GridAlignColumnsDirective(elementRef, styleBuilder, styler, marshal) {
            var _this74;

            _classCallCheck(this, GridAlignColumnsDirective);

            _this74 = _super42.call(this, elementRef, styleBuilder, styler, marshal);
            _this74.DIRECTIVE_KEY = 'grid-align-columns';
            _this74._inline = false;

            _this74.init();

            return _this74;
          }
          /**
           * @return {?}
           */


          _createClass(GridAlignColumnsDirective, [{
            key: "inline",
            get: function get() {
              return this._inline;
            }
            /**
             * @param {?} val
             * @return {?}
             */
            ,
            set: function set(val) {
              this._inline = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(val);
            } // *********************************************
            // Protected methods
            // *********************************************

            /**
             * @protected
             * @param {?} value
             * @return {?}
             */

          }, {
            key: "updateWithValue",
            value: function updateWithValue(value) {
              this.styleCache = this.inline ? alignColumnsInlineCache : alignColumnsCache;
              this.addStyles(value, {
                inline: this.inline
              });
            }
          }]);

          return GridAlignColumnsDirective;
        }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

        GridAlignColumnsDirective.ɵfac = function GridAlignColumnsDirective_Factory(t) {
          return new (t || GridAlignColumnsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GridAlignColumnsStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
        };

        GridAlignColumnsDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: GridAlignColumnsDirective,
          inputs: {
            inline: ["gdInline", "inline"]
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
        });
        return GridAlignColumnsDirective;
      }();
      /** @type {?} */


      var alignColumnsCache = new Map();
      /** @type {?} */

      var alignColumnsInlineCache = new Map();
      /** @type {?} */

      var inputs$1 = ['gdAlignColumns', 'gdAlignColumns.xs', 'gdAlignColumns.sm', 'gdAlignColumns.md', 'gdAlignColumns.lg', 'gdAlignColumns.xl', 'gdAlignColumns.lt-sm', 'gdAlignColumns.lt-md', 'gdAlignColumns.lt-lg', 'gdAlignColumns.lt-xl', 'gdAlignColumns.gt-xs', 'gdAlignColumns.gt-sm', 'gdAlignColumns.gt-md', 'gdAlignColumns.gt-lg'];
      /** @type {?} */

      var selector$1 = "\n  [gdAlignColumns],\n  [gdAlignColumns.xs], [gdAlignColumns.sm], [gdAlignColumns.md],\n  [gdAlignColumns.lg], [gdAlignColumns.xl], [gdAlignColumns.lt-sm],\n  [gdAlignColumns.lt-md], [gdAlignColumns.lt-lg], [gdAlignColumns.lt-xl],\n  [gdAlignColumns.gt-xs], [gdAlignColumns.gt-sm], [gdAlignColumns.gt-md],\n  [gdAlignColumns.gt-lg]\n";
      /**
       * 'column alignment' CSS Grid styling directive
       * Configures the alignment in the column direction
       * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-19
       * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-21
       */

      var DefaultGridAlignColumnsDirective =
      /** @class */
      function () {
        /**
         * 'column alignment' CSS Grid styling directive
         * Configures the alignment in the column direction
         * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-19
         * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-21
         */
        var DefaultGridAlignColumnsDirective = /*#__PURE__*/function (_GridAlignColumnsDire) {
          _inherits(DefaultGridAlignColumnsDirective, _GridAlignColumnsDire);

          var _super43 = _createSuper(DefaultGridAlignColumnsDirective);

          function DefaultGridAlignColumnsDirective() {
            var _this75;

            _classCallCheck(this, DefaultGridAlignColumnsDirective);

            _this75 = _super43.apply(this, arguments);
            _this75.inputs = inputs$1;
            return _this75;
          }

          return _createClass(DefaultGridAlignColumnsDirective);
        }(GridAlignColumnsDirective);

        DefaultGridAlignColumnsDirective.ɵfac = function DefaultGridAlignColumnsDirective_Factory(t) {
          return ɵDefaultGridAlignColumnsDirective_BaseFactory(t || DefaultGridAlignColumnsDirective);
        };

        DefaultGridAlignColumnsDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: DefaultGridAlignColumnsDirective,
          selectors: [["", "gdAlignColumns", ""], ["", "gdAlignColumns.xs", ""], ["", "gdAlignColumns.sm", ""], ["", "gdAlignColumns.md", ""], ["", "gdAlignColumns.lg", ""], ["", "gdAlignColumns.xl", ""], ["", "gdAlignColumns.lt-sm", ""], ["", "gdAlignColumns.lt-md", ""], ["", "gdAlignColumns.lt-lg", ""], ["", "gdAlignColumns.lt-xl", ""], ["", "gdAlignColumns.gt-xs", ""], ["", "gdAlignColumns.gt-sm", ""], ["", "gdAlignColumns.gt-md", ""], ["", "gdAlignColumns.gt-lg", ""]],
          inputs: {
            gdAlignColumns: "gdAlignColumns",
            "gdAlignColumns.xs": "gdAlignColumns.xs",
            "gdAlignColumns.sm": "gdAlignColumns.sm",
            "gdAlignColumns.md": "gdAlignColumns.md",
            "gdAlignColumns.lg": "gdAlignColumns.lg",
            "gdAlignColumns.xl": "gdAlignColumns.xl",
            "gdAlignColumns.lt-sm": "gdAlignColumns.lt-sm",
            "gdAlignColumns.lt-md": "gdAlignColumns.lt-md",
            "gdAlignColumns.lt-lg": "gdAlignColumns.lt-lg",
            "gdAlignColumns.lt-xl": "gdAlignColumns.lt-xl",
            "gdAlignColumns.gt-xs": "gdAlignColumns.gt-xs",
            "gdAlignColumns.gt-sm": "gdAlignColumns.gt-sm",
            "gdAlignColumns.gt-md": "gdAlignColumns.gt-md",
            "gdAlignColumns.gt-lg": "gdAlignColumns.gt-lg"
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
        });

        var ɵDefaultGridAlignColumnsDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultGridAlignColumnsDirective);

        return DefaultGridAlignColumnsDirective;
      }();
      /**
       * @param {?} align
       * @param {?} inline
       * @return {?}
       */


      function buildCss$1(align, inline) {
        /** @type {?} */
        var css = {};

        var _align$split5 = align.split(' '),
            _align$split6 = _slicedToArray(_align$split5, 2),
            mainAxis = _align$split6[0],
            crossAxis = _align$split6[1]; // Main axis


        switch (mainAxis) {
          case 'center':
            css['align-content'] = 'center';
            break;

          case 'space-around':
            css['align-content'] = 'space-around';
            break;

          case 'space-between':
            css['align-content'] = 'space-between';
            break;

          case 'space-evenly':
            css['align-content'] = 'space-evenly';
            break;

          case 'end':
            css['align-content'] = 'end';
            break;

          case 'start':
            css['align-content'] = 'start';
            break;

          case 'stretch':
            css['align-content'] = 'stretch';
            break;

          default:
            css['align-content'] = DEFAULT_MAIN; // default main axis

            break;
        } // Cross-axis


        switch (crossAxis) {
          case 'start':
            css['align-items'] = 'start';
            break;

          case 'center':
            css['align-items'] = 'center';
            break;

          case 'end':
            css['align-items'] = 'end';
            break;

          case 'stretch':
            css['align-items'] = 'stretch';
            break;

          default:
            // 'stretch'
            css['align-items'] = DEFAULT_CROSS; // default cross axis

            break;
        }

        css['display'] = inline ? 'inline-grid' : 'grid';
        return css;
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: grid/align-rows/align-rows.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var DEFAULT_MAIN$1 = 'start';
      /** @type {?} */

      var DEFAULT_CROSS$1 = 'stretch';

      var GridAlignRowsStyleBuilder =
      /** @class */
      function () {
        var GridAlignRowsStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_27) {
          _inherits(GridAlignRowsStyleBuilder, _angular_flex_layout_27);

          var _super44 = _createSuper(GridAlignRowsStyleBuilder);

          function GridAlignRowsStyleBuilder() {
            _classCallCheck(this, GridAlignRowsStyleBuilder);

            return _super44.apply(this, arguments);
          }

          _createClass(GridAlignRowsStyleBuilder, [{
            key: "buildStyles",
            value:
            /**
             * @param {?} input
             * @param {?} parent
             * @return {?}
             */
            function buildStyles(input, parent) {
              return buildCss$2(input || "".concat(DEFAULT_MAIN$1, " ").concat(DEFAULT_CROSS$1), parent.inline);
            }
          }]);

          return GridAlignRowsStyleBuilder;
        }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

        GridAlignRowsStyleBuilder.ɵfac = function GridAlignRowsStyleBuilder_Factory(t) {
          return ɵGridAlignRowsStyleBuilder_BaseFactory(t || GridAlignRowsStyleBuilder);
        };
        /** @nocollapse */


        GridAlignRowsStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
          factory: function GridAlignRowsStyleBuilder_Factory() {
            return new GridAlignRowsStyleBuilder();
          },
          token: GridAlignRowsStyleBuilder,
          providedIn: "root"
        });

        var ɵGridAlignRowsStyleBuilder_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](GridAlignRowsStyleBuilder);

        return GridAlignRowsStyleBuilder;
      }();

      var GridAlignRowsDirective =
      /** @class */
      function () {
        var GridAlignRowsDirective = /*#__PURE__*/function (_angular_flex_layout_28) {
          _inherits(GridAlignRowsDirective, _angular_flex_layout_28);

          var _super45 = _createSuper(GridAlignRowsDirective);

          /**
           * @param {?} elementRef
           * @param {?} styleBuilder
           * @param {?} styler
           * @param {?} marshal
           */
          function GridAlignRowsDirective(elementRef, styleBuilder, styler, marshal) {
            var _this76;

            _classCallCheck(this, GridAlignRowsDirective);

            _this76 = _super45.call(this, elementRef, styleBuilder, styler, marshal);
            _this76.DIRECTIVE_KEY = 'grid-align-rows';
            _this76._inline = false;

            _this76.init();

            return _this76;
          }
          /**
           * @return {?}
           */


          _createClass(GridAlignRowsDirective, [{
            key: "inline",
            get: function get() {
              return this._inline;
            }
            /**
             * @param {?} val
             * @return {?}
             */
            ,
            set: function set(val) {
              this._inline = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(val);
            } // *********************************************
            // Protected methods
            // *********************************************

            /**
             * @protected
             * @param {?} value
             * @return {?}
             */

          }, {
            key: "updateWithValue",
            value: function updateWithValue(value) {
              this.styleCache = this.inline ? alignRowsInlineCache : alignRowsCache;
              this.addStyles(value, {
                inline: this.inline
              });
            }
          }]);

          return GridAlignRowsDirective;
        }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

        GridAlignRowsDirective.ɵfac = function GridAlignRowsDirective_Factory(t) {
          return new (t || GridAlignRowsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GridAlignRowsStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
        };

        GridAlignRowsDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: GridAlignRowsDirective,
          inputs: {
            inline: ["gdInline", "inline"]
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
        });
        return GridAlignRowsDirective;
      }();
      /** @type {?} */


      var alignRowsCache = new Map();
      /** @type {?} */

      var alignRowsInlineCache = new Map();
      /** @type {?} */

      var inputs$2 = ['gdAlignRows', 'gdAlignRows.xs', 'gdAlignRows.sm', 'gdAlignRows.md', 'gdAlignRows.lg', 'gdAlignRows.xl', 'gdAlignRows.lt-sm', 'gdAlignRows.lt-md', 'gdAlignRows.lt-lg', 'gdAlignRows.lt-xl', 'gdAlignRows.gt-xs', 'gdAlignRows.gt-sm', 'gdAlignRows.gt-md', 'gdAlignRows.gt-lg'];
      /** @type {?} */

      var selector$2 = "\n  [gdAlignRows],\n  [gdAlignRows.xs], [gdAlignRows.sm], [gdAlignRows.md],\n  [gdAlignRows.lg], [gdAlignRows.xl], [gdAlignRows.lt-sm],\n  [gdAlignRows.lt-md], [gdAlignRows.lt-lg], [gdAlignRows.lt-xl],\n  [gdAlignRows.gt-xs], [gdAlignRows.gt-sm], [gdAlignRows.gt-md],\n  [gdAlignRows.gt-lg]\n";
      /**
       * 'row alignment' CSS Grid styling directive
       * Configures the alignment in the row direction
       * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-18
       * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-20
       */

      var DefaultGridAlignRowsDirective =
      /** @class */
      function () {
        /**
         * 'row alignment' CSS Grid styling directive
         * Configures the alignment in the row direction
         * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-18
         * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-20
         */
        var DefaultGridAlignRowsDirective = /*#__PURE__*/function (_GridAlignRowsDirecti) {
          _inherits(DefaultGridAlignRowsDirective, _GridAlignRowsDirecti);

          var _super46 = _createSuper(DefaultGridAlignRowsDirective);

          function DefaultGridAlignRowsDirective() {
            var _this77;

            _classCallCheck(this, DefaultGridAlignRowsDirective);

            _this77 = _super46.apply(this, arguments);
            _this77.inputs = inputs$2;
            return _this77;
          }

          return _createClass(DefaultGridAlignRowsDirective);
        }(GridAlignRowsDirective);

        DefaultGridAlignRowsDirective.ɵfac = function DefaultGridAlignRowsDirective_Factory(t) {
          return ɵDefaultGridAlignRowsDirective_BaseFactory(t || DefaultGridAlignRowsDirective);
        };

        DefaultGridAlignRowsDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: DefaultGridAlignRowsDirective,
          selectors: [["", "gdAlignRows", ""], ["", "gdAlignRows.xs", ""], ["", "gdAlignRows.sm", ""], ["", "gdAlignRows.md", ""], ["", "gdAlignRows.lg", ""], ["", "gdAlignRows.xl", ""], ["", "gdAlignRows.lt-sm", ""], ["", "gdAlignRows.lt-md", ""], ["", "gdAlignRows.lt-lg", ""], ["", "gdAlignRows.lt-xl", ""], ["", "gdAlignRows.gt-xs", ""], ["", "gdAlignRows.gt-sm", ""], ["", "gdAlignRows.gt-md", ""], ["", "gdAlignRows.gt-lg", ""]],
          inputs: {
            gdAlignRows: "gdAlignRows",
            "gdAlignRows.xs": "gdAlignRows.xs",
            "gdAlignRows.sm": "gdAlignRows.sm",
            "gdAlignRows.md": "gdAlignRows.md",
            "gdAlignRows.lg": "gdAlignRows.lg",
            "gdAlignRows.xl": "gdAlignRows.xl",
            "gdAlignRows.lt-sm": "gdAlignRows.lt-sm",
            "gdAlignRows.lt-md": "gdAlignRows.lt-md",
            "gdAlignRows.lt-lg": "gdAlignRows.lt-lg",
            "gdAlignRows.lt-xl": "gdAlignRows.lt-xl",
            "gdAlignRows.gt-xs": "gdAlignRows.gt-xs",
            "gdAlignRows.gt-sm": "gdAlignRows.gt-sm",
            "gdAlignRows.gt-md": "gdAlignRows.gt-md",
            "gdAlignRows.gt-lg": "gdAlignRows.gt-lg"
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
        });

        var ɵDefaultGridAlignRowsDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultGridAlignRowsDirective);

        return DefaultGridAlignRowsDirective;
      }();
      /**
       * @param {?} align
       * @param {?} inline
       * @return {?}
       */


      function buildCss$2(align, inline) {
        /** @type {?} */
        var css = {};

        var _align$split7 = align.split(' '),
            _align$split8 = _slicedToArray(_align$split7, 2),
            mainAxis = _align$split8[0],
            crossAxis = _align$split8[1]; // Main axis


        switch (mainAxis) {
          case 'center':
          case 'space-around':
          case 'space-between':
          case 'space-evenly':
          case 'end':
          case 'start':
          case 'stretch':
            css['justify-content'] = mainAxis;
            break;

          default:
            css['justify-content'] = DEFAULT_MAIN$1; // default main axis

            break;
        } // Cross-axis


        switch (crossAxis) {
          case 'start':
          case 'center':
          case 'end':
          case 'stretch':
            css['justify-items'] = crossAxis;
            break;

          default:
            // 'stretch'
            css['justify-items'] = DEFAULT_CROSS$1; // default cross axis

            break;
        }

        css['display'] = inline ? 'inline-grid' : 'grid';
        return css;
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: grid/area/area.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var DEFAULT_VALUE = 'auto';

      var GridAreaStyleBuilder =
      /** @class */
      function () {
        var GridAreaStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_29) {
          _inherits(GridAreaStyleBuilder, _angular_flex_layout_29);

          var _super47 = _createSuper(GridAreaStyleBuilder);

          function GridAreaStyleBuilder() {
            _classCallCheck(this, GridAreaStyleBuilder);

            return _super47.apply(this, arguments);
          }

          _createClass(GridAreaStyleBuilder, [{
            key: "buildStyles",
            value:
            /**
             * @param {?} input
             * @return {?}
             */
            function buildStyles(input) {
              return {
                'grid-area': input || DEFAULT_VALUE
              };
            }
          }]);

          return GridAreaStyleBuilder;
        }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

        GridAreaStyleBuilder.ɵfac = function GridAreaStyleBuilder_Factory(t) {
          return ɵGridAreaStyleBuilder_BaseFactory(t || GridAreaStyleBuilder);
        };
        /** @nocollapse */


        GridAreaStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
          factory: function GridAreaStyleBuilder_Factory() {
            return new GridAreaStyleBuilder();
          },
          token: GridAreaStyleBuilder,
          providedIn: "root"
        });

        var ɵGridAreaStyleBuilder_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](GridAreaStyleBuilder);

        return GridAreaStyleBuilder;
      }();

      var GridAreaDirective =
      /** @class */
      function () {
        var GridAreaDirective = /*#__PURE__*/function (_angular_flex_layout_30) {
          _inherits(GridAreaDirective, _angular_flex_layout_30);

          var _super48 = _createSuper(GridAreaDirective);

          /**
           * @param {?} elRef
           * @param {?} styleUtils
           * @param {?} styleBuilder
           * @param {?} marshal
           */
          function GridAreaDirective(elRef, styleUtils, styleBuilder, marshal) {
            var _this78;

            _classCallCheck(this, GridAreaDirective);

            _this78 = _super48.call(this, elRef, styleBuilder, styleUtils, marshal);
            _this78.DIRECTIVE_KEY = 'grid-area';
            _this78.styleCache = gridAreaCache;

            _this78.init();

            return _this78;
          }

          return _createClass(GridAreaDirective);
        }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

        GridAreaDirective.ɵfac = function GridAreaDirective_Factory(t) {
          return new (t || GridAreaDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GridAreaStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
        };

        GridAreaDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: GridAreaDirective,
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
        });
        return GridAreaDirective;
      }();
      /** @type {?} */


      var gridAreaCache = new Map();
      /** @type {?} */

      var inputs$3 = ['gdArea', 'gdArea.xs', 'gdArea.sm', 'gdArea.md', 'gdArea.lg', 'gdArea.xl', 'gdArea.lt-sm', 'gdArea.lt-md', 'gdArea.lt-lg', 'gdArea.lt-xl', 'gdArea.gt-xs', 'gdArea.gt-sm', 'gdArea.gt-md', 'gdArea.gt-lg'];
      /** @type {?} */

      var selector$3 = "\n  [gdArea],\n  [gdArea.xs], [gdArea.sm], [gdArea.md], [gdArea.lg], [gdArea.xl],\n  [gdArea.lt-sm], [gdArea.lt-md], [gdArea.lt-lg], [gdArea.lt-xl],\n  [gdArea.gt-xs], [gdArea.gt-sm], [gdArea.gt-md], [gdArea.gt-lg]\n";
      /**
       * 'grid-area' CSS Grid styling directive
       * Configures the name or position of an element within the grid
       * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-27
       */

      var DefaultGridAreaDirective =
      /** @class */
      function () {
        /**
         * 'grid-area' CSS Grid styling directive
         * Configures the name or position of an element within the grid
         * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-27
         */
        var DefaultGridAreaDirective = /*#__PURE__*/function (_GridAreaDirective) {
          _inherits(DefaultGridAreaDirective, _GridAreaDirective);

          var _super49 = _createSuper(DefaultGridAreaDirective);

          function DefaultGridAreaDirective() {
            var _this79;

            _classCallCheck(this, DefaultGridAreaDirective);

            _this79 = _super49.apply(this, arguments);
            _this79.inputs = inputs$3;
            return _this79;
          }

          return _createClass(DefaultGridAreaDirective);
        }(GridAreaDirective);

        DefaultGridAreaDirective.ɵfac = function DefaultGridAreaDirective_Factory(t) {
          return ɵDefaultGridAreaDirective_BaseFactory(t || DefaultGridAreaDirective);
        };

        DefaultGridAreaDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: DefaultGridAreaDirective,
          selectors: [["", "gdArea", ""], ["", "gdArea.xs", ""], ["", "gdArea.sm", ""], ["", "gdArea.md", ""], ["", "gdArea.lg", ""], ["", "gdArea.xl", ""], ["", "gdArea.lt-sm", ""], ["", "gdArea.lt-md", ""], ["", "gdArea.lt-lg", ""], ["", "gdArea.lt-xl", ""], ["", "gdArea.gt-xs", ""], ["", "gdArea.gt-sm", ""], ["", "gdArea.gt-md", ""], ["", "gdArea.gt-lg", ""]],
          inputs: {
            gdArea: "gdArea",
            "gdArea.xs": "gdArea.xs",
            "gdArea.sm": "gdArea.sm",
            "gdArea.md": "gdArea.md",
            "gdArea.lg": "gdArea.lg",
            "gdArea.xl": "gdArea.xl",
            "gdArea.lt-sm": "gdArea.lt-sm",
            "gdArea.lt-md": "gdArea.lt-md",
            "gdArea.lt-lg": "gdArea.lt-lg",
            "gdArea.lt-xl": "gdArea.lt-xl",
            "gdArea.gt-xs": "gdArea.gt-xs",
            "gdArea.gt-sm": "gdArea.gt-sm",
            "gdArea.gt-md": "gdArea.gt-md",
            "gdArea.gt-lg": "gdArea.gt-lg"
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
        });

        var ɵDefaultGridAreaDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultGridAreaDirective);

        return DefaultGridAreaDirective;
      }();
      /**
       * @fileoverview added by tsickle
       * Generated from: grid/areas/areas.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var DEFAULT_VALUE$1 = 'none';
      /** @type {?} */

      var DELIMETER = '|';

      var GridAreasStyleBuiler =
      /** @class */
      function () {
        var GridAreasStyleBuiler = /*#__PURE__*/function (_angular_flex_layout_31) {
          _inherits(GridAreasStyleBuiler, _angular_flex_layout_31);

          var _super50 = _createSuper(GridAreasStyleBuiler);

          function GridAreasStyleBuiler() {
            _classCallCheck(this, GridAreasStyleBuiler);

            return _super50.apply(this, arguments);
          }

          _createClass(GridAreasStyleBuiler, [{
            key: "buildStyles",
            value:
            /**
             * @param {?} input
             * @param {?} parent
             * @return {?}
             */
            function buildStyles(input, parent) {
              /** @type {?} */
              var areas = (input || DEFAULT_VALUE$1).split(DELIMETER).map(
              /**
              * @param {?} v
              * @return {?}
              */

              /**
              * @param {?} v
              * @return {?}
              */
              function (v) {
                return "\"".concat(v.trim(), "\"");
              });
              return {
                'display': parent.inline ? 'inline-grid' : 'grid',
                'grid-template-areas': areas.join(' ')
              };
            }
          }]);

          return GridAreasStyleBuiler;
        }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

        GridAreasStyleBuiler.ɵfac = function GridAreasStyleBuiler_Factory(t) {
          return ɵGridAreasStyleBuiler_BaseFactory(t || GridAreasStyleBuiler);
        };
        /** @nocollapse */


        GridAreasStyleBuiler.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
          factory: function GridAreasStyleBuiler_Factory() {
            return new GridAreasStyleBuiler();
          },
          token: GridAreasStyleBuiler,
          providedIn: "root"
        });

        var ɵGridAreasStyleBuiler_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](GridAreasStyleBuiler);

        return GridAreasStyleBuiler;
      }();

      var GridAreasDirective =
      /** @class */
      function () {
        var GridAreasDirective = /*#__PURE__*/function (_angular_flex_layout_32) {
          _inherits(GridAreasDirective, _angular_flex_layout_32);

          var _super51 = _createSuper(GridAreasDirective);

          /**
           * @param {?} elRef
           * @param {?} styleUtils
           * @param {?} styleBuilder
           * @param {?} marshal
           */
          function GridAreasDirective(elRef, styleUtils, styleBuilder, marshal) {
            var _this80;

            _classCallCheck(this, GridAreasDirective);

            _this80 = _super51.call(this, elRef, styleBuilder, styleUtils, marshal);
            _this80.DIRECTIVE_KEY = 'grid-areas';
            _this80._inline = false;

            _this80.init();

            return _this80;
          }
          /**
           * @return {?}
           */


          _createClass(GridAreasDirective, [{
            key: "inline",
            get: function get() {
              return this._inline;
            }
            /**
             * @param {?} val
             * @return {?}
             */
            ,
            set: function set(val) {
              this._inline = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(val);
            } // *********************************************
            // Protected methods
            // *********************************************

            /**
             * @protected
             * @param {?} value
             * @return {?}
             */

          }, {
            key: "updateWithValue",
            value: function updateWithValue(value) {
              this.styleCache = this.inline ? areasInlineCache : areasCache;
              this.addStyles(value, {
                inline: this.inline
              });
            }
          }]);

          return GridAreasDirective;
        }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

        GridAreasDirective.ɵfac = function GridAreasDirective_Factory(t) {
          return new (t || GridAreasDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GridAreasStyleBuiler), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
        };

        GridAreasDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: GridAreasDirective,
          inputs: {
            inline: ["gdInline", "inline"]
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
        });
        return GridAreasDirective;
      }();
      /** @type {?} */


      var areasCache = new Map();
      /** @type {?} */

      var areasInlineCache = new Map();
      /** @type {?} */

      var inputs$4 = ['gdAreas', 'gdAreas.xs', 'gdAreas.sm', 'gdAreas.md', 'gdAreas.lg', 'gdAreas.xl', 'gdAreas.lt-sm', 'gdAreas.lt-md', 'gdAreas.lt-lg', 'gdAreas.lt-xl', 'gdAreas.gt-xs', 'gdAreas.gt-sm', 'gdAreas.gt-md', 'gdAreas.gt-lg'];
      /** @type {?} */

      var selector$4 = "\n  [gdAreas],\n  [gdAreas.xs], [gdAreas.sm], [gdAreas.md], [gdAreas.lg], [gdAreas.xl],\n  [gdAreas.lt-sm], [gdAreas.lt-md], [gdAreas.lt-lg], [gdAreas.lt-xl],\n  [gdAreas.gt-xs], [gdAreas.gt-sm], [gdAreas.gt-md], [gdAreas.gt-lg]\n";
      /**
       * 'grid-template-areas' CSS Grid styling directive
       * Configures the names of elements within the grid
       * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-14
       */

      var DefaultGridAreasDirective =
      /** @class */
      function () {
        /**
         * 'grid-template-areas' CSS Grid styling directive
         * Configures the names of elements within the grid
         * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-14
         */
        var DefaultGridAreasDirective = /*#__PURE__*/function (_GridAreasDirective) {
          _inherits(DefaultGridAreasDirective, _GridAreasDirective);

          var _super52 = _createSuper(DefaultGridAreasDirective);

          function DefaultGridAreasDirective() {
            var _this81;

            _classCallCheck(this, DefaultGridAreasDirective);

            _this81 = _super52.apply(this, arguments);
            _this81.inputs = inputs$4;
            return _this81;
          }

          return _createClass(DefaultGridAreasDirective);
        }(GridAreasDirective);

        DefaultGridAreasDirective.ɵfac = function DefaultGridAreasDirective_Factory(t) {
          return ɵDefaultGridAreasDirective_BaseFactory(t || DefaultGridAreasDirective);
        };

        DefaultGridAreasDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: DefaultGridAreasDirective,
          selectors: [["", "gdAreas", ""], ["", "gdAreas.xs", ""], ["", "gdAreas.sm", ""], ["", "gdAreas.md", ""], ["", "gdAreas.lg", ""], ["", "gdAreas.xl", ""], ["", "gdAreas.lt-sm", ""], ["", "gdAreas.lt-md", ""], ["", "gdAreas.lt-lg", ""], ["", "gdAreas.lt-xl", ""], ["", "gdAreas.gt-xs", ""], ["", "gdAreas.gt-sm", ""], ["", "gdAreas.gt-md", ""], ["", "gdAreas.gt-lg", ""]],
          inputs: {
            gdAreas: "gdAreas",
            "gdAreas.xs": "gdAreas.xs",
            "gdAreas.sm": "gdAreas.sm",
            "gdAreas.md": "gdAreas.md",
            "gdAreas.lg": "gdAreas.lg",
            "gdAreas.xl": "gdAreas.xl",
            "gdAreas.lt-sm": "gdAreas.lt-sm",
            "gdAreas.lt-md": "gdAreas.lt-md",
            "gdAreas.lt-lg": "gdAreas.lt-lg",
            "gdAreas.lt-xl": "gdAreas.lt-xl",
            "gdAreas.gt-xs": "gdAreas.gt-xs",
            "gdAreas.gt-sm": "gdAreas.gt-sm",
            "gdAreas.gt-md": "gdAreas.gt-md",
            "gdAreas.gt-lg": "gdAreas.gt-lg"
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
        });

        var ɵDefaultGridAreasDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultGridAreasDirective);

        return DefaultGridAreasDirective;
      }();
      /**
       * @fileoverview added by tsickle
       * Generated from: grid/auto/auto.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var DEFAULT_VALUE$2 = 'initial';

      var GridAutoStyleBuilder =
      /** @class */
      function () {
        var GridAutoStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_33) {
          _inherits(GridAutoStyleBuilder, _angular_flex_layout_33);

          var _super53 = _createSuper(GridAutoStyleBuilder);

          function GridAutoStyleBuilder() {
            _classCallCheck(this, GridAutoStyleBuilder);

            return _super53.apply(this, arguments);
          }

          _createClass(GridAutoStyleBuilder, [{
            key: "buildStyles",
            value:
            /**
             * @param {?} input
             * @param {?} parent
             * @return {?}
             */
            function buildStyles(input, parent) {
              var _split = (input || DEFAULT_VALUE$2).split(' '),
                  _split2 = _slicedToArray(_split, 2),
                  direction = _split2[0],
                  dense = _split2[1];

              if (direction !== 'column' && direction !== 'row' && direction !== 'dense') {
                direction = 'row';
              }

              dense = dense === 'dense' && direction !== 'dense' ? ' dense' : '';
              return {
                'display': parent.inline ? 'inline-grid' : 'grid',
                'grid-auto-flow': direction + dense
              };
            }
          }]);

          return GridAutoStyleBuilder;
        }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

        GridAutoStyleBuilder.ɵfac = function GridAutoStyleBuilder_Factory(t) {
          return ɵGridAutoStyleBuilder_BaseFactory(t || GridAutoStyleBuilder);
        };
        /** @nocollapse */


        GridAutoStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
          factory: function GridAutoStyleBuilder_Factory() {
            return new GridAutoStyleBuilder();
          },
          token: GridAutoStyleBuilder,
          providedIn: "root"
        });

        var ɵGridAutoStyleBuilder_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](GridAutoStyleBuilder);

        return GridAutoStyleBuilder;
      }();

      var GridAutoDirective =
      /** @class */
      function () {
        var GridAutoDirective = /*#__PURE__*/function (_angular_flex_layout_34) {
          _inherits(GridAutoDirective, _angular_flex_layout_34);

          var _super54 = _createSuper(GridAutoDirective);

          /**
           * @param {?} elementRef
           * @param {?} styleBuilder
           * @param {?} styler
           * @param {?} marshal
           */
          function GridAutoDirective(elementRef, styleBuilder, styler, marshal) {
            var _this82;

            _classCallCheck(this, GridAutoDirective);

            _this82 = _super54.call(this, elementRef, styleBuilder, styler, marshal);
            _this82._inline = false;
            _this82.DIRECTIVE_KEY = 'grid-auto';

            _this82.init();

            return _this82;
          }
          /**
           * @return {?}
           */


          _createClass(GridAutoDirective, [{
            key: "inline",
            get: function get() {
              return this._inline;
            }
            /**
             * @param {?} val
             * @return {?}
             */
            ,
            set: function set(val) {
              this._inline = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(val);
            } // *********************************************
            // Protected methods
            // *********************************************

            /**
             * @protected
             * @param {?} value
             * @return {?}
             */

          }, {
            key: "updateWithValue",
            value: function updateWithValue(value) {
              this.styleCache = this.inline ? autoInlineCache : autoCache;
              this.addStyles(value, {
                inline: this.inline
              });
            }
          }]);

          return GridAutoDirective;
        }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

        GridAutoDirective.ɵfac = function GridAutoDirective_Factory(t) {
          return new (t || GridAutoDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GridAutoStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
        };

        GridAutoDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: GridAutoDirective,
          inputs: {
            inline: ["gdInline", "inline"]
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
        });
        return GridAutoDirective;
      }();
      /** @type {?} */


      var autoCache = new Map();
      /** @type {?} */

      var autoInlineCache = new Map();
      /** @type {?} */

      var inputs$5 = ['gdAuto', 'gdAuto.xs', 'gdAuto.sm', 'gdAuto.md', 'gdAuto.lg', 'gdAuto.xl', 'gdAuto.lt-sm', 'gdAuto.lt-md', 'gdAuto.lt-lg', 'gdAuto.lt-xl', 'gdAuto.gt-xs', 'gdAuto.gt-sm', 'gdAuto.gt-md', 'gdAuto.gt-lg'];
      /** @type {?} */

      var selector$5 = "\n  [gdAuto],\n  [gdAuto.xs], [gdAuto.sm], [gdAuto.md], [gdAuto.lg], [gdAuto.xl],\n  [gdAuto.lt-sm], [gdAuto.lt-md], [gdAuto.lt-lg], [gdAuto.lt-xl],\n  [gdAuto.gt-xs], [gdAuto.gt-sm], [gdAuto.gt-md], [gdAuto.gt-lg]\n";
      /**
       * 'grid-auto-flow' CSS Grid styling directive
       * Configures the auto placement algorithm for the grid
       * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-23
       */

      var DefaultGridAutoDirective =
      /** @class */
      function () {
        /**
         * 'grid-auto-flow' CSS Grid styling directive
         * Configures the auto placement algorithm for the grid
         * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-23
         */
        var DefaultGridAutoDirective = /*#__PURE__*/function (_GridAutoDirective) {
          _inherits(DefaultGridAutoDirective, _GridAutoDirective);

          var _super55 = _createSuper(DefaultGridAutoDirective);

          function DefaultGridAutoDirective() {
            var _this83;

            _classCallCheck(this, DefaultGridAutoDirective);

            _this83 = _super55.apply(this, arguments);
            _this83.inputs = inputs$5;
            return _this83;
          }

          return _createClass(DefaultGridAutoDirective);
        }(GridAutoDirective);

        DefaultGridAutoDirective.ɵfac = function DefaultGridAutoDirective_Factory(t) {
          return ɵDefaultGridAutoDirective_BaseFactory(t || DefaultGridAutoDirective);
        };

        DefaultGridAutoDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: DefaultGridAutoDirective,
          selectors: [["", "gdAuto", ""], ["", "gdAuto.xs", ""], ["", "gdAuto.sm", ""], ["", "gdAuto.md", ""], ["", "gdAuto.lg", ""], ["", "gdAuto.xl", ""], ["", "gdAuto.lt-sm", ""], ["", "gdAuto.lt-md", ""], ["", "gdAuto.lt-lg", ""], ["", "gdAuto.lt-xl", ""], ["", "gdAuto.gt-xs", ""], ["", "gdAuto.gt-sm", ""], ["", "gdAuto.gt-md", ""], ["", "gdAuto.gt-lg", ""]],
          inputs: {
            gdAuto: "gdAuto",
            "gdAuto.xs": "gdAuto.xs",
            "gdAuto.sm": "gdAuto.sm",
            "gdAuto.md": "gdAuto.md",
            "gdAuto.lg": "gdAuto.lg",
            "gdAuto.xl": "gdAuto.xl",
            "gdAuto.lt-sm": "gdAuto.lt-sm",
            "gdAuto.lt-md": "gdAuto.lt-md",
            "gdAuto.lt-lg": "gdAuto.lt-lg",
            "gdAuto.lt-xl": "gdAuto.lt-xl",
            "gdAuto.gt-xs": "gdAuto.gt-xs",
            "gdAuto.gt-sm": "gdAuto.gt-sm",
            "gdAuto.gt-md": "gdAuto.gt-md",
            "gdAuto.gt-lg": "gdAuto.gt-lg"
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
        });

        var ɵDefaultGridAutoDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultGridAutoDirective);

        return DefaultGridAutoDirective;
      }();
      /**
       * @fileoverview added by tsickle
       * Generated from: grid/column/column.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var DEFAULT_VALUE$3 = 'auto';

      var GridColumnStyleBuilder =
      /** @class */
      function () {
        var GridColumnStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_35) {
          _inherits(GridColumnStyleBuilder, _angular_flex_layout_35);

          var _super56 = _createSuper(GridColumnStyleBuilder);

          function GridColumnStyleBuilder() {
            _classCallCheck(this, GridColumnStyleBuilder);

            return _super56.apply(this, arguments);
          }

          _createClass(GridColumnStyleBuilder, [{
            key: "buildStyles",
            value:
            /**
             * @param {?} input
             * @return {?}
             */
            function buildStyles(input) {
              return {
                'grid-column': input || DEFAULT_VALUE$3
              };
            }
          }]);

          return GridColumnStyleBuilder;
        }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

        GridColumnStyleBuilder.ɵfac = function GridColumnStyleBuilder_Factory(t) {
          return ɵGridColumnStyleBuilder_BaseFactory(t || GridColumnStyleBuilder);
        };
        /** @nocollapse */


        GridColumnStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
          factory: function GridColumnStyleBuilder_Factory() {
            return new GridColumnStyleBuilder();
          },
          token: GridColumnStyleBuilder,
          providedIn: "root"
        });

        var ɵGridColumnStyleBuilder_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](GridColumnStyleBuilder);

        return GridColumnStyleBuilder;
      }();

      var GridColumnDirective =
      /** @class */
      function () {
        var GridColumnDirective = /*#__PURE__*/function (_angular_flex_layout_36) {
          _inherits(GridColumnDirective, _angular_flex_layout_36);

          var _super57 = _createSuper(GridColumnDirective);

          /**
           * @param {?} elementRef
           * @param {?} styleBuilder
           * @param {?} styler
           * @param {?} marshal
           */
          function GridColumnDirective(elementRef, styleBuilder, styler, marshal) {
            var _this84;

            _classCallCheck(this, GridColumnDirective);

            _this84 = _super57.call(this, elementRef, styleBuilder, styler, marshal);
            _this84.DIRECTIVE_KEY = 'grid-column';
            _this84.styleCache = columnCache;

            _this84.init();

            return _this84;
          }

          return _createClass(GridColumnDirective);
        }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

        GridColumnDirective.ɵfac = function GridColumnDirective_Factory(t) {
          return new (t || GridColumnDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GridColumnStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
        };

        GridColumnDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: GridColumnDirective,
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
        });
        return GridColumnDirective;
      }();
      /** @type {?} */


      var columnCache = new Map();
      /** @type {?} */

      var inputs$6 = ['gdColumn', 'gdColumn.xs', 'gdColumn.sm', 'gdColumn.md', 'gdColumn.lg', 'gdColumn.xl', 'gdColumn.lt-sm', 'gdColumn.lt-md', 'gdColumn.lt-lg', 'gdColumn.lt-xl', 'gdColumn.gt-xs', 'gdColumn.gt-sm', 'gdColumn.gt-md', 'gdColumn.gt-lg'];
      /** @type {?} */

      var selector$6 = "\n  [gdColumn],\n  [gdColumn.xs], [gdColumn.sm], [gdColumn.md], [gdColumn.lg], [gdColumn.xl],\n  [gdColumn.lt-sm], [gdColumn.lt-md], [gdColumn.lt-lg], [gdColumn.lt-xl],\n  [gdColumn.gt-xs], [gdColumn.gt-sm], [gdColumn.gt-md], [gdColumn.gt-lg]\n";
      /**
       * 'grid-column' CSS Grid styling directive
       * Configures the name or position of an element within the grid
       * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-26
       */

      var DefaultGridColumnDirective =
      /** @class */
      function () {
        /**
         * 'grid-column' CSS Grid styling directive
         * Configures the name or position of an element within the grid
         * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-26
         */
        var DefaultGridColumnDirective = /*#__PURE__*/function (_GridColumnDirective) {
          _inherits(DefaultGridColumnDirective, _GridColumnDirective);

          var _super58 = _createSuper(DefaultGridColumnDirective);

          function DefaultGridColumnDirective() {
            var _this85;

            _classCallCheck(this, DefaultGridColumnDirective);

            _this85 = _super58.apply(this, arguments);
            _this85.inputs = inputs$6;
            return _this85;
          }

          return _createClass(DefaultGridColumnDirective);
        }(GridColumnDirective);

        DefaultGridColumnDirective.ɵfac = function DefaultGridColumnDirective_Factory(t) {
          return ɵDefaultGridColumnDirective_BaseFactory(t || DefaultGridColumnDirective);
        };

        DefaultGridColumnDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: DefaultGridColumnDirective,
          selectors: [["", "gdColumn", ""], ["", "gdColumn.xs", ""], ["", "gdColumn.sm", ""], ["", "gdColumn.md", ""], ["", "gdColumn.lg", ""], ["", "gdColumn.xl", ""], ["", "gdColumn.lt-sm", ""], ["", "gdColumn.lt-md", ""], ["", "gdColumn.lt-lg", ""], ["", "gdColumn.lt-xl", ""], ["", "gdColumn.gt-xs", ""], ["", "gdColumn.gt-sm", ""], ["", "gdColumn.gt-md", ""], ["", "gdColumn.gt-lg", ""]],
          inputs: {
            gdColumn: "gdColumn",
            "gdColumn.xs": "gdColumn.xs",
            "gdColumn.sm": "gdColumn.sm",
            "gdColumn.md": "gdColumn.md",
            "gdColumn.lg": "gdColumn.lg",
            "gdColumn.xl": "gdColumn.xl",
            "gdColumn.lt-sm": "gdColumn.lt-sm",
            "gdColumn.lt-md": "gdColumn.lt-md",
            "gdColumn.lt-lg": "gdColumn.lt-lg",
            "gdColumn.lt-xl": "gdColumn.lt-xl",
            "gdColumn.gt-xs": "gdColumn.gt-xs",
            "gdColumn.gt-sm": "gdColumn.gt-sm",
            "gdColumn.gt-md": "gdColumn.gt-md",
            "gdColumn.gt-lg": "gdColumn.gt-lg"
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
        });

        var ɵDefaultGridColumnDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultGridColumnDirective);

        return DefaultGridColumnDirective;
      }();
      /**
       * @fileoverview added by tsickle
       * Generated from: grid/columns/columns.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var DEFAULT_VALUE$4 = 'none';
      /** @type {?} */

      var AUTO_SPECIFIER = '!';

      var GridColumnsStyleBuilder =
      /** @class */
      function () {
        var GridColumnsStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_37) {
          _inherits(GridColumnsStyleBuilder, _angular_flex_layout_37);

          var _super59 = _createSuper(GridColumnsStyleBuilder);

          function GridColumnsStyleBuilder() {
            _classCallCheck(this, GridColumnsStyleBuilder);

            return _super59.apply(this, arguments);
          }

          _createClass(GridColumnsStyleBuilder, [{
            key: "buildStyles",
            value:
            /**
             * @param {?} input
             * @param {?} parent
             * @return {?}
             */
            function buildStyles(input, parent) {
              input = input || DEFAULT_VALUE$4;
              /** @type {?} */

              var auto = false;

              if (input.endsWith(AUTO_SPECIFIER)) {
                input = input.substring(0, input.indexOf(AUTO_SPECIFIER));
                auto = true;
              }
              /** @type {?} */


              var css = {
                'display': parent.inline ? 'inline-grid' : 'grid',
                'grid-auto-columns': '',
                'grid-template-columns': ''
              };
              /** @type {?} */

              var key = auto ? 'grid-auto-columns' : 'grid-template-columns';
              css[key] = input;
              return css;
            }
          }]);

          return GridColumnsStyleBuilder;
        }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

        GridColumnsStyleBuilder.ɵfac = function GridColumnsStyleBuilder_Factory(t) {
          return ɵGridColumnsStyleBuilder_BaseFactory(t || GridColumnsStyleBuilder);
        };
        /** @nocollapse */


        GridColumnsStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
          factory: function GridColumnsStyleBuilder_Factory() {
            return new GridColumnsStyleBuilder();
          },
          token: GridColumnsStyleBuilder,
          providedIn: "root"
        });

        var ɵGridColumnsStyleBuilder_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](GridColumnsStyleBuilder);

        return GridColumnsStyleBuilder;
      }();

      var GridColumnsDirective =
      /** @class */
      function () {
        var GridColumnsDirective = /*#__PURE__*/function (_angular_flex_layout_38) {
          _inherits(GridColumnsDirective, _angular_flex_layout_38);

          var _super60 = _createSuper(GridColumnsDirective);

          /**
           * @param {?} elementRef
           * @param {?} styleBuilder
           * @param {?} styler
           * @param {?} marshal
           */
          function GridColumnsDirective(elementRef, styleBuilder, styler, marshal) {
            var _this86;

            _classCallCheck(this, GridColumnsDirective);

            _this86 = _super60.call(this, elementRef, styleBuilder, styler, marshal);
            _this86.DIRECTIVE_KEY = 'grid-columns';
            _this86._inline = false;

            _this86.init();

            return _this86;
          }
          /**
           * @return {?}
           */


          _createClass(GridColumnsDirective, [{
            key: "inline",
            get: function get() {
              return this._inline;
            }
            /**
             * @param {?} val
             * @return {?}
             */
            ,
            set: function set(val) {
              this._inline = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(val);
            } // *********************************************
            // Protected methods
            // *********************************************

            /**
             * @protected
             * @param {?} value
             * @return {?}
             */

          }, {
            key: "updateWithValue",
            value: function updateWithValue(value) {
              this.styleCache = this.inline ? columnsInlineCache : columnsCache;
              this.addStyles(value, {
                inline: this.inline
              });
            }
          }]);

          return GridColumnsDirective;
        }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

        GridColumnsDirective.ɵfac = function GridColumnsDirective_Factory(t) {
          return new (t || GridColumnsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GridColumnsStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
        };

        GridColumnsDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: GridColumnsDirective,
          inputs: {
            inline: ["gdInline", "inline"]
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
        });
        return GridColumnsDirective;
      }();
      /** @type {?} */


      var columnsCache = new Map();
      /** @type {?} */

      var columnsInlineCache = new Map();
      /** @type {?} */

      var inputs$7 = ['gdColumns', 'gdColumns.xs', 'gdColumns.sm', 'gdColumns.md', 'gdColumns.lg', 'gdColumns.xl', 'gdColumns.lt-sm', 'gdColumns.lt-md', 'gdColumns.lt-lg', 'gdColumns.lt-xl', 'gdColumns.gt-xs', 'gdColumns.gt-sm', 'gdColumns.gt-md', 'gdColumns.gt-lg'];
      /** @type {?} */

      var selector$7 = "\n  [gdColumns],\n  [gdColumns.xs], [gdColumns.sm], [gdColumns.md], [gdColumns.lg], [gdColumns.xl],\n  [gdColumns.lt-sm], [gdColumns.lt-md], [gdColumns.lt-lg], [gdColumns.lt-xl],\n  [gdColumns.gt-xs], [gdColumns.gt-sm], [gdColumns.gt-md], [gdColumns.gt-lg]\n";
      /**
       * 'grid-template-columns' CSS Grid styling directive
       * Configures the sizing for the columns in the grid
       * Syntax: <column value> [auto]
       * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-13
       */

      var DefaultGridColumnsDirective =
      /** @class */
      function () {
        /**
         * 'grid-template-columns' CSS Grid styling directive
         * Configures the sizing for the columns in the grid
         * Syntax: <column value> [auto]
         * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-13
         */
        var DefaultGridColumnsDirective = /*#__PURE__*/function (_GridColumnsDirective) {
          _inherits(DefaultGridColumnsDirective, _GridColumnsDirective);

          var _super61 = _createSuper(DefaultGridColumnsDirective);

          function DefaultGridColumnsDirective() {
            var _this87;

            _classCallCheck(this, DefaultGridColumnsDirective);

            _this87 = _super61.apply(this, arguments);
            _this87.inputs = inputs$7;
            return _this87;
          }

          return _createClass(DefaultGridColumnsDirective);
        }(GridColumnsDirective);

        DefaultGridColumnsDirective.ɵfac = function DefaultGridColumnsDirective_Factory(t) {
          return ɵDefaultGridColumnsDirective_BaseFactory(t || DefaultGridColumnsDirective);
        };

        DefaultGridColumnsDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: DefaultGridColumnsDirective,
          selectors: [["", "gdColumns", ""], ["", "gdColumns.xs", ""], ["", "gdColumns.sm", ""], ["", "gdColumns.md", ""], ["", "gdColumns.lg", ""], ["", "gdColumns.xl", ""], ["", "gdColumns.lt-sm", ""], ["", "gdColumns.lt-md", ""], ["", "gdColumns.lt-lg", ""], ["", "gdColumns.lt-xl", ""], ["", "gdColumns.gt-xs", ""], ["", "gdColumns.gt-sm", ""], ["", "gdColumns.gt-md", ""], ["", "gdColumns.gt-lg", ""]],
          inputs: {
            gdColumns: "gdColumns",
            "gdColumns.xs": "gdColumns.xs",
            "gdColumns.sm": "gdColumns.sm",
            "gdColumns.md": "gdColumns.md",
            "gdColumns.lg": "gdColumns.lg",
            "gdColumns.xl": "gdColumns.xl",
            "gdColumns.lt-sm": "gdColumns.lt-sm",
            "gdColumns.lt-md": "gdColumns.lt-md",
            "gdColumns.lt-lg": "gdColumns.lt-lg",
            "gdColumns.lt-xl": "gdColumns.lt-xl",
            "gdColumns.gt-xs": "gdColumns.gt-xs",
            "gdColumns.gt-sm": "gdColumns.gt-sm",
            "gdColumns.gt-md": "gdColumns.gt-md",
            "gdColumns.gt-lg": "gdColumns.gt-lg"
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
        });

        var ɵDefaultGridColumnsDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultGridColumnsDirective);

        return DefaultGridColumnsDirective;
      }();
      /**
       * @fileoverview added by tsickle
       * Generated from: grid/gap/gap.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var DEFAULT_VALUE$5 = '0';

      var GridGapStyleBuilder =
      /** @class */
      function () {
        var GridGapStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_39) {
          _inherits(GridGapStyleBuilder, _angular_flex_layout_39);

          var _super62 = _createSuper(GridGapStyleBuilder);

          function GridGapStyleBuilder() {
            _classCallCheck(this, GridGapStyleBuilder);

            return _super62.apply(this, arguments);
          }

          _createClass(GridGapStyleBuilder, [{
            key: "buildStyles",
            value:
            /**
             * @param {?} input
             * @param {?} parent
             * @return {?}
             */
            function buildStyles(input, parent) {
              return {
                'display': parent.inline ? 'inline-grid' : 'grid',
                'grid-gap': input || DEFAULT_VALUE$5
              };
            }
          }]);

          return GridGapStyleBuilder;
        }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

        GridGapStyleBuilder.ɵfac = function GridGapStyleBuilder_Factory(t) {
          return ɵGridGapStyleBuilder_BaseFactory(t || GridGapStyleBuilder);
        };
        /** @nocollapse */


        GridGapStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
          factory: function GridGapStyleBuilder_Factory() {
            return new GridGapStyleBuilder();
          },
          token: GridGapStyleBuilder,
          providedIn: "root"
        });

        var ɵGridGapStyleBuilder_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](GridGapStyleBuilder);

        return GridGapStyleBuilder;
      }();

      var GridGapDirective =
      /** @class */
      function () {
        var GridGapDirective = /*#__PURE__*/function (_angular_flex_layout_40) {
          _inherits(GridGapDirective, _angular_flex_layout_40);

          var _super63 = _createSuper(GridGapDirective);

          /**
           * @param {?} elRef
           * @param {?} styleUtils
           * @param {?} styleBuilder
           * @param {?} marshal
           */
          function GridGapDirective(elRef, styleUtils, styleBuilder, marshal) {
            var _this88;

            _classCallCheck(this, GridGapDirective);

            _this88 = _super63.call(this, elRef, styleBuilder, styleUtils, marshal);
            _this88.DIRECTIVE_KEY = 'grid-gap';
            _this88._inline = false;

            _this88.init();

            return _this88;
          }
          /**
           * @return {?}
           */


          _createClass(GridGapDirective, [{
            key: "inline",
            get: function get() {
              return this._inline;
            }
            /**
             * @param {?} val
             * @return {?}
             */
            ,
            set: function set(val) {
              this._inline = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(val);
            } // *********************************************
            // Protected methods
            // *********************************************

            /**
             * @protected
             * @param {?} value
             * @return {?}
             */

          }, {
            key: "updateWithValue",
            value: function updateWithValue(value) {
              this.styleCache = this.inline ? gapInlineCache : gapCache;
              this.addStyles(value, {
                inline: this.inline
              });
            }
          }]);

          return GridGapDirective;
        }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

        GridGapDirective.ɵfac = function GridGapDirective_Factory(t) {
          return new (t || GridGapDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GridGapStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
        };

        GridGapDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: GridGapDirective,
          inputs: {
            inline: ["gdInline", "inline"]
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
        });
        return GridGapDirective;
      }();
      /** @type {?} */


      var gapCache = new Map();
      /** @type {?} */

      var gapInlineCache = new Map();
      /** @type {?} */

      var inputs$8 = ['gdGap', 'gdGap.xs', 'gdGap.sm', 'gdGap.md', 'gdGap.lg', 'gdGap.xl', 'gdGap.lt-sm', 'gdGap.lt-md', 'gdGap.lt-lg', 'gdGap.lt-xl', 'gdGap.gt-xs', 'gdGap.gt-sm', 'gdGap.gt-md', 'gdGap.gt-lg'];
      /** @type {?} */

      var selector$8 = "\n  [gdGap],\n  [gdGap.xs], [gdGap.sm], [gdGap.md], [gdGap.lg], [gdGap.xl],\n  [gdGap.lt-sm], [gdGap.lt-md], [gdGap.lt-lg], [gdGap.lt-xl],\n  [gdGap.gt-xs], [gdGap.gt-sm], [gdGap.gt-md], [gdGap.gt-lg]\n";
      /**
       * 'grid-gap' CSS Grid styling directive
       * Configures the gap between items in the grid
       * Syntax: <row gap> [<column-gap>]
       * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-17
       */

      var DefaultGridGapDirective =
      /** @class */
      function () {
        /**
         * 'grid-gap' CSS Grid styling directive
         * Configures the gap between items in the grid
         * Syntax: <row gap> [<column-gap>]
         * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-17
         */
        var DefaultGridGapDirective = /*#__PURE__*/function (_GridGapDirective) {
          _inherits(DefaultGridGapDirective, _GridGapDirective);

          var _super64 = _createSuper(DefaultGridGapDirective);

          function DefaultGridGapDirective() {
            var _this89;

            _classCallCheck(this, DefaultGridGapDirective);

            _this89 = _super64.apply(this, arguments);
            _this89.inputs = inputs$8;
            return _this89;
          }

          return _createClass(DefaultGridGapDirective);
        }(GridGapDirective);

        DefaultGridGapDirective.ɵfac = function DefaultGridGapDirective_Factory(t) {
          return ɵDefaultGridGapDirective_BaseFactory(t || DefaultGridGapDirective);
        };

        DefaultGridGapDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: DefaultGridGapDirective,
          selectors: [["", "gdGap", ""], ["", "gdGap.xs", ""], ["", "gdGap.sm", ""], ["", "gdGap.md", ""], ["", "gdGap.lg", ""], ["", "gdGap.xl", ""], ["", "gdGap.lt-sm", ""], ["", "gdGap.lt-md", ""], ["", "gdGap.lt-lg", ""], ["", "gdGap.lt-xl", ""], ["", "gdGap.gt-xs", ""], ["", "gdGap.gt-sm", ""], ["", "gdGap.gt-md", ""], ["", "gdGap.gt-lg", ""]],
          inputs: {
            gdGap: "gdGap",
            "gdGap.xs": "gdGap.xs",
            "gdGap.sm": "gdGap.sm",
            "gdGap.md": "gdGap.md",
            "gdGap.lg": "gdGap.lg",
            "gdGap.xl": "gdGap.xl",
            "gdGap.lt-sm": "gdGap.lt-sm",
            "gdGap.lt-md": "gdGap.lt-md",
            "gdGap.lt-lg": "gdGap.lt-lg",
            "gdGap.lt-xl": "gdGap.lt-xl",
            "gdGap.gt-xs": "gdGap.gt-xs",
            "gdGap.gt-sm": "gdGap.gt-sm",
            "gdGap.gt-md": "gdGap.gt-md",
            "gdGap.gt-lg": "gdGap.gt-lg"
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
        });

        var ɵDefaultGridGapDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultGridGapDirective);

        return DefaultGridGapDirective;
      }();
      /**
       * @fileoverview added by tsickle
       * Generated from: grid/row/row.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var DEFAULT_VALUE$6 = 'auto';

      var GridRowStyleBuilder =
      /** @class */
      function () {
        var GridRowStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_41) {
          _inherits(GridRowStyleBuilder, _angular_flex_layout_41);

          var _super65 = _createSuper(GridRowStyleBuilder);

          function GridRowStyleBuilder() {
            _classCallCheck(this, GridRowStyleBuilder);

            return _super65.apply(this, arguments);
          }

          _createClass(GridRowStyleBuilder, [{
            key: "buildStyles",
            value:
            /**
             * @param {?} input
             * @return {?}
             */
            function buildStyles(input) {
              return {
                'grid-row': input || DEFAULT_VALUE$6
              };
            }
          }]);

          return GridRowStyleBuilder;
        }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

        GridRowStyleBuilder.ɵfac = function GridRowStyleBuilder_Factory(t) {
          return ɵGridRowStyleBuilder_BaseFactory(t || GridRowStyleBuilder);
        };
        /** @nocollapse */


        GridRowStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
          factory: function GridRowStyleBuilder_Factory() {
            return new GridRowStyleBuilder();
          },
          token: GridRowStyleBuilder,
          providedIn: "root"
        });

        var ɵGridRowStyleBuilder_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](GridRowStyleBuilder);

        return GridRowStyleBuilder;
      }();

      var GridRowDirective =
      /** @class */
      function () {
        var GridRowDirective = /*#__PURE__*/function (_angular_flex_layout_42) {
          _inherits(GridRowDirective, _angular_flex_layout_42);

          var _super66 = _createSuper(GridRowDirective);

          /**
           * @param {?} elementRef
           * @param {?} styleBuilder
           * @param {?} styler
           * @param {?} marshal
           */
          function GridRowDirective(elementRef, styleBuilder, styler, marshal) {
            var _this90;

            _classCallCheck(this, GridRowDirective);

            _this90 = _super66.call(this, elementRef, styleBuilder, styler, marshal);
            _this90.DIRECTIVE_KEY = 'grid-row';
            _this90.styleCache = rowCache;

            _this90.init();

            return _this90;
          }

          return _createClass(GridRowDirective);
        }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

        GridRowDirective.ɵfac = function GridRowDirective_Factory(t) {
          return new (t || GridRowDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GridRowStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
        };

        GridRowDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: GridRowDirective,
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
        });
        return GridRowDirective;
      }();
      /** @type {?} */


      var rowCache = new Map();
      /** @type {?} */

      var inputs$9 = ['gdRow', 'gdRow.xs', 'gdRow.sm', 'gdRow.md', 'gdRow.lg', 'gdRow.xl', 'gdRow.lt-sm', 'gdRow.lt-md', 'gdRow.lt-lg', 'gdRow.lt-xl', 'gdRow.gt-xs', 'gdRow.gt-sm', 'gdRow.gt-md', 'gdRow.gt-lg'];
      /** @type {?} */

      var selector$9 = "\n  [gdRow],\n  [gdRow.xs], [gdRow.sm], [gdRow.md], [gdRow.lg], [gdRow.xl],\n  [gdRow.lt-sm], [gdRow.lt-md], [gdRow.lt-lg], [gdRow.lt-xl],\n  [gdRow.gt-xs], [gdRow.gt-sm], [gdRow.gt-md], [gdRow.gt-lg]\n";
      /**
       * 'grid-row' CSS Grid styling directive
       * Configures the name or position of an element within the grid
       * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-26
       */

      var DefaultGridRowDirective =
      /** @class */
      function () {
        /**
         * 'grid-row' CSS Grid styling directive
         * Configures the name or position of an element within the grid
         * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-26
         */
        var DefaultGridRowDirective = /*#__PURE__*/function (_GridRowDirective) {
          _inherits(DefaultGridRowDirective, _GridRowDirective);

          var _super67 = _createSuper(DefaultGridRowDirective);

          function DefaultGridRowDirective() {
            var _this91;

            _classCallCheck(this, DefaultGridRowDirective);

            _this91 = _super67.apply(this, arguments);
            _this91.inputs = inputs$9;
            return _this91;
          }

          return _createClass(DefaultGridRowDirective);
        }(GridRowDirective);

        DefaultGridRowDirective.ɵfac = function DefaultGridRowDirective_Factory(t) {
          return ɵDefaultGridRowDirective_BaseFactory(t || DefaultGridRowDirective);
        };

        DefaultGridRowDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: DefaultGridRowDirective,
          selectors: [["", "gdRow", ""], ["", "gdRow.xs", ""], ["", "gdRow.sm", ""], ["", "gdRow.md", ""], ["", "gdRow.lg", ""], ["", "gdRow.xl", ""], ["", "gdRow.lt-sm", ""], ["", "gdRow.lt-md", ""], ["", "gdRow.lt-lg", ""], ["", "gdRow.lt-xl", ""], ["", "gdRow.gt-xs", ""], ["", "gdRow.gt-sm", ""], ["", "gdRow.gt-md", ""], ["", "gdRow.gt-lg", ""]],
          inputs: {
            gdRow: "gdRow",
            "gdRow.xs": "gdRow.xs",
            "gdRow.sm": "gdRow.sm",
            "gdRow.md": "gdRow.md",
            "gdRow.lg": "gdRow.lg",
            "gdRow.xl": "gdRow.xl",
            "gdRow.lt-sm": "gdRow.lt-sm",
            "gdRow.lt-md": "gdRow.lt-md",
            "gdRow.lt-lg": "gdRow.lt-lg",
            "gdRow.lt-xl": "gdRow.lt-xl",
            "gdRow.gt-xs": "gdRow.gt-xs",
            "gdRow.gt-sm": "gdRow.gt-sm",
            "gdRow.gt-md": "gdRow.gt-md",
            "gdRow.gt-lg": "gdRow.gt-lg"
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
        });

        var ɵDefaultGridRowDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultGridRowDirective);

        return DefaultGridRowDirective;
      }();
      /**
       * @fileoverview added by tsickle
       * Generated from: grid/rows/rows.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var DEFAULT_VALUE$7 = 'none';
      /** @type {?} */

      var AUTO_SPECIFIER$1 = '!';

      var GridRowsStyleBuilder =
      /** @class */
      function () {
        var GridRowsStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_43) {
          _inherits(GridRowsStyleBuilder, _angular_flex_layout_43);

          var _super68 = _createSuper(GridRowsStyleBuilder);

          function GridRowsStyleBuilder() {
            _classCallCheck(this, GridRowsStyleBuilder);

            return _super68.apply(this, arguments);
          }

          _createClass(GridRowsStyleBuilder, [{
            key: "buildStyles",
            value:
            /**
             * @param {?} input
             * @param {?} parent
             * @return {?}
             */
            function buildStyles(input, parent) {
              input = input || DEFAULT_VALUE$7;
              /** @type {?} */

              var auto = false;

              if (input.endsWith(AUTO_SPECIFIER$1)) {
                input = input.substring(0, input.indexOf(AUTO_SPECIFIER$1));
                auto = true;
              }
              /** @type {?} */


              var css = {
                'display': parent.inline ? 'inline-grid' : 'grid',
                'grid-auto-rows': '',
                'grid-template-rows': ''
              };
              /** @type {?} */

              var key = auto ? 'grid-auto-rows' : 'grid-template-rows';
              css[key] = input;
              return css;
            }
          }]);

          return GridRowsStyleBuilder;
        }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

        GridRowsStyleBuilder.ɵfac = function GridRowsStyleBuilder_Factory(t) {
          return ɵGridRowsStyleBuilder_BaseFactory(t || GridRowsStyleBuilder);
        };
        /** @nocollapse */


        GridRowsStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
          factory: function GridRowsStyleBuilder_Factory() {
            return new GridRowsStyleBuilder();
          },
          token: GridRowsStyleBuilder,
          providedIn: "root"
        });

        var ɵGridRowsStyleBuilder_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](GridRowsStyleBuilder);

        return GridRowsStyleBuilder;
      }();

      var GridRowsDirective =
      /** @class */
      function () {
        var GridRowsDirective = /*#__PURE__*/function (_angular_flex_layout_44) {
          _inherits(GridRowsDirective, _angular_flex_layout_44);

          var _super69 = _createSuper(GridRowsDirective);

          /**
           * @param {?} elementRef
           * @param {?} styleBuilder
           * @param {?} styler
           * @param {?} marshal
           */
          function GridRowsDirective(elementRef, styleBuilder, styler, marshal) {
            var _this92;

            _classCallCheck(this, GridRowsDirective);

            _this92 = _super69.call(this, elementRef, styleBuilder, styler, marshal);
            _this92.DIRECTIVE_KEY = 'grid-rows';
            _this92._inline = false;

            _this92.init();

            return _this92;
          }
          /**
           * @return {?}
           */


          _createClass(GridRowsDirective, [{
            key: "inline",
            get: function get() {
              return this._inline;
            }
            /**
             * @param {?} val
             * @return {?}
             */
            ,
            set: function set(val) {
              this._inline = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(val);
            } // *********************************************
            // Protected methods
            // *********************************************

            /**
             * @protected
             * @param {?} value
             * @return {?}
             */

          }, {
            key: "updateWithValue",
            value: function updateWithValue(value) {
              this.styleCache = this.inline ? rowsInlineCache : rowsCache;
              this.addStyles(value, {
                inline: this.inline
              });
            }
          }]);

          return GridRowsDirective;
        }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

        GridRowsDirective.ɵfac = function GridRowsDirective_Factory(t) {
          return new (t || GridRowsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GridRowsStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
        };

        GridRowsDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: GridRowsDirective,
          inputs: {
            inline: ["gdInline", "inline"]
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
        });
        return GridRowsDirective;
      }();
      /** @type {?} */


      var rowsCache = new Map();
      /** @type {?} */

      var rowsInlineCache = new Map();
      /** @type {?} */

      var inputs$10 = ['gdRows', 'gdRows.xs', 'gdRows.sm', 'gdRows.md', 'gdRows.lg', 'gdRows.xl', 'gdRows.lt-sm', 'gdRows.lt-md', 'gdRows.lt-lg', 'gdRows.lt-xl', 'gdRows.gt-xs', 'gdRows.gt-sm', 'gdRows.gt-md', 'gdRows.gt-lg'];
      /** @type {?} */

      var selector$10 = "\n  [gdRows],\n  [gdRows.xs], [gdRows.sm], [gdRows.md], [gdRows.lg], [gdRows.xl],\n  [gdRows.lt-sm], [gdRows.lt-md], [gdRows.lt-lg], [gdRows.lt-xl],\n  [gdRows.gt-xs], [gdRows.gt-sm], [gdRows.gt-md], [gdRows.gt-lg]\n";
      /**
       * 'grid-template-rows' CSS Grid styling directive
       * Configures the sizing for the rows in the grid
       * Syntax: <column value> [auto]
       * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-13
       */

      var DefaultGridRowsDirective =
      /** @class */
      function () {
        /**
         * 'grid-template-rows' CSS Grid styling directive
         * Configures the sizing for the rows in the grid
         * Syntax: <column value> [auto]
         * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-13
         */
        var DefaultGridRowsDirective = /*#__PURE__*/function (_GridRowsDirective) {
          _inherits(DefaultGridRowsDirective, _GridRowsDirective);

          var _super70 = _createSuper(DefaultGridRowsDirective);

          function DefaultGridRowsDirective() {
            var _this93;

            _classCallCheck(this, DefaultGridRowsDirective);

            _this93 = _super70.apply(this, arguments);
            _this93.inputs = inputs$10;
            return _this93;
          }

          return _createClass(DefaultGridRowsDirective);
        }(GridRowsDirective);

        DefaultGridRowsDirective.ɵfac = function DefaultGridRowsDirective_Factory(t) {
          return ɵDefaultGridRowsDirective_BaseFactory(t || DefaultGridRowsDirective);
        };

        DefaultGridRowsDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: DefaultGridRowsDirective,
          selectors: [["", "gdRows", ""], ["", "gdRows.xs", ""], ["", "gdRows.sm", ""], ["", "gdRows.md", ""], ["", "gdRows.lg", ""], ["", "gdRows.xl", ""], ["", "gdRows.lt-sm", ""], ["", "gdRows.lt-md", ""], ["", "gdRows.lt-lg", ""], ["", "gdRows.lt-xl", ""], ["", "gdRows.gt-xs", ""], ["", "gdRows.gt-sm", ""], ["", "gdRows.gt-md", ""], ["", "gdRows.gt-lg", ""]],
          inputs: {
            gdRows: "gdRows",
            "gdRows.xs": "gdRows.xs",
            "gdRows.sm": "gdRows.sm",
            "gdRows.md": "gdRows.md",
            "gdRows.lg": "gdRows.lg",
            "gdRows.xl": "gdRows.xl",
            "gdRows.lt-sm": "gdRows.lt-sm",
            "gdRows.lt-md": "gdRows.lt-md",
            "gdRows.lt-lg": "gdRows.lt-lg",
            "gdRows.lt-xl": "gdRows.lt-xl",
            "gdRows.gt-xs": "gdRows.gt-xs",
            "gdRows.gt-sm": "gdRows.gt-sm",
            "gdRows.gt-md": "gdRows.gt-md",
            "gdRows.gt-lg": "gdRows.gt-lg"
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
        });

        var ɵDefaultGridRowsDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultGridRowsDirective);

        return DefaultGridRowsDirective;
      }();
      /**
       * @fileoverview added by tsickle
       * Generated from: grid/module.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var ALL_DIRECTIVES = [DefaultGridAlignDirective, DefaultGridAlignColumnsDirective, DefaultGridAlignRowsDirective, DefaultGridAreaDirective, DefaultGridAreasDirective, DefaultGridAutoDirective, DefaultGridColumnDirective, DefaultGridColumnsDirective, DefaultGridGapDirective, DefaultGridRowDirective, DefaultGridRowsDirective];
      /**
       * *****************************************************************
       * Define module for the CSS Grid API
       * *****************************************************************
       */

      var GridModule =
      /** @class */
      function () {
        /**
         * *****************************************************************
         * Define module for the CSS Grid API
         * *****************************************************************
         */
        var GridModule = /*#__PURE__*/_createClass(function GridModule() {
          _classCallCheck(this, GridModule);
        });

        GridModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: GridModule
        });
        GridModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function GridModule_Factory(t) {
            return new (t || GridModule)();
          },
          imports: [[_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"]]]
        });

        (function () {
          (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GridModule, {
            declarations: function declarations() {
              return [DefaultGridAlignDirective, DefaultGridAlignColumnsDirective, DefaultGridAlignRowsDirective, DefaultGridAreaDirective, DefaultGridAreasDirective, DefaultGridAutoDirective, DefaultGridColumnDirective, DefaultGridColumnsDirective, DefaultGridGapDirective, DefaultGridRowDirective, DefaultGridRowsDirective];
            },
            imports: function imports() {
              return [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"]];
            },
            exports: function exports() {
              return [DefaultGridAlignDirective, DefaultGridAlignColumnsDirective, DefaultGridAlignRowsDirective, DefaultGridAreaDirective, DefaultGridAreasDirective, DefaultGridAutoDirective, DefaultGridColumnDirective, DefaultGridColumnsDirective, DefaultGridGapDirective, DefaultGridRowDirective, DefaultGridRowsDirective];
            }
          });
        })();

        return GridModule;
      }();
      /**
       * @fileoverview added by tsickle
       * Generated from: grid/public-api.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: grid/index.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=grid.js.map

      /***/

    }
  }]);
})();