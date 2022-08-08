(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5], {
    /***/
    "MutI":
    /*!**********************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js ***!
      \**********************************************************************/

    /*! exports provided: MAT_LIST, MAT_NAV_LIST, MAT_SELECTION_LIST_VALUE_ACCESSOR, MatList, MatListAvatarCssMatStyler, MatListIconCssMatStyler, MatListItem, MatListModule, MatListOption, MatListSubheaderCssMatStyler, MatNavList, MatSelectionList, MatSelectionListChange */

    /***/
    function MutI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_LIST", function () {
        return MAT_LIST;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_NAV_LIST", function () {
        return MAT_NAV_LIST;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_SELECTION_LIST_VALUE_ACCESSOR", function () {
        return MAT_SELECTION_LIST_VALUE_ACCESSOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatList", function () {
        return MatList;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatListAvatarCssMatStyler", function () {
        return MatListAvatarCssMatStyler;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatListIconCssMatStyler", function () {
        return MatListIconCssMatStyler;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatListItem", function () {
        return MatListItem;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatListModule", function () {
        return MatListModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatListOption", function () {
        return MatListOption;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatListSubheaderCssMatStyler", function () {
        return MatListSubheaderCssMatStyler;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatNavList", function () {
        return MatNavList;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSelectionList", function () {
        return MatSelectionList;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSelectionListChange", function () {
        return MatSelectionListChange;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "u47x");
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/collections */
      "0EQZ");
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      "FtGj");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/divider */
      "f0Cb");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // Boilerplate for applying mixins to MatList.

      /** @docs-private */


      var _c0 = ["*"];
      var _c1 = ".mat-subheader{display:flex;box-sizing:border-box;padding:16px;align-items:center}.mat-list-base .mat-subheader{margin:0}.mat-list-base{padding-top:8px;display:block;-webkit-tap-highlight-color:transparent}.mat-list-base .mat-subheader{height:48px;line-height:16px}.mat-list-base .mat-subheader:first-child{margin-top:-8px}.mat-list-base .mat-list-item,.mat-list-base .mat-list-option{display:block;height:48px;-webkit-tap-highlight-color:transparent;width:100%;padding:0}.mat-list-base .mat-list-item .mat-list-item-content,.mat-list-base .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base .mat-list-item .mat-list-item-content-reverse,.mat-list-base .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base .mat-list-item .mat-list-item-ripple,.mat-list-base .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar,.mat-list-base .mat-list-option.mat-list-item-with-avatar{height:56px}.mat-list-base .mat-list-item.mat-2-line,.mat-list-base .mat-list-option.mat-2-line{height:72px}.mat-list-base .mat-list-item.mat-3-line,.mat-list-base .mat-list-option.mat-3-line{height:88px}.mat-list-base .mat-list-item.mat-multi-line,.mat-list-base .mat-list-option.mat-multi-line{height:auto}.mat-list-base .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base .mat-list-item .mat-list-text,.mat-list-base .mat-list-option .mat-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base .mat-list-item .mat-list-text>*,.mat-list-base .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-list-base .mat-list-item .mat-list-text:empty,.mat-list-base .mat-list-option .mat-list-text:empty{display:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base .mat-list-item .mat-list-avatar,.mat-list-base .mat-list-option .mat-list-avatar{flex-shrink:0;width:40px;height:40px;border-radius:50%;object-fit:cover}.mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:72px;width:calc(100% - 72px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:72px}.mat-list-base .mat-list-item .mat-list-icon,.mat-list-base .mat-list-option .mat-list-icon{flex-shrink:0;width:24px;height:24px;font-size:24px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:64px;width:calc(100% - 64px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:64px}.mat-list-base .mat-list-item .mat-divider,.mat-list-base .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base .mat-list-item .mat-divider,[dir=rtl] .mat-list-base .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-list-base[dense]{padding-top:4px;display:block}.mat-list-base[dense] .mat-subheader{height:40px;line-height:8px}.mat-list-base[dense] .mat-subheader:first-child{margin-top:-4px}.mat-list-base[dense] .mat-list-item,.mat-list-base[dense] .mat-list-option{display:block;height:40px;-webkit-tap-highlight-color:transparent;width:100%;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-item-content,.mat-list-base[dense] .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base[dense] .mat-list-item .mat-list-item-content-reverse,.mat-list-base[dense] .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base[dense] .mat-list-item .mat-list-item-ripple,.mat-list-base[dense] .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar{height:48px}.mat-list-base[dense] .mat-list-item.mat-2-line,.mat-list-base[dense] .mat-list-option.mat-2-line{height:60px}.mat-list-base[dense] .mat-list-item.mat-3-line,.mat-list-base[dense] .mat-list-option.mat-3-line{height:76px}.mat-list-base[dense] .mat-list-item.mat-multi-line,.mat-list-base[dense] .mat-list-option.mat-multi-line{height:auto}.mat-list-base[dense] .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base[dense] .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base[dense] .mat-list-item .mat-list-text,.mat-list-base[dense] .mat-list-option .mat-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-text>*,.mat-list-base[dense] .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-list-base[dense] .mat-list-item .mat-list-text:empty,.mat-list-base[dense] .mat-list-option .mat-list-text:empty{display:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base[dense] .mat-list-item .mat-list-avatar,.mat-list-base[dense] .mat-list-option .mat-list-avatar{flex-shrink:0;width:36px;height:36px;border-radius:50%;object-fit:cover}.mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:68px;width:calc(100% - 68px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:68px}.mat-list-base[dense] .mat-list-item .mat-list-icon,.mat-list-base[dense] .mat-list-option .mat-list-icon{flex-shrink:0;width:20px;height:20px;font-size:20px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:60px;width:calc(100% - 60px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:60px}.mat-list-base[dense] .mat-list-item .mat-divider,.mat-list-base[dense] .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-divider,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base[dense] .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-nav-list a{text-decoration:none;color:inherit}.mat-nav-list .mat-list-item{cursor:pointer;outline:none}mat-action-list button{background:none;color:inherit;border:none;font:inherit;outline:inherit;-webkit-tap-highlight-color:transparent;text-align:left}[dir=rtl] mat-action-list button{text-align:right}mat-action-list button::-moz-focus-inner{border:0}mat-action-list .mat-list-item{cursor:pointer;outline:inherit}.mat-list-option:not(.mat-list-item-disabled){cursor:pointer;outline:none}.mat-list-item-disabled{pointer-events:none}.cdk-high-contrast-active .mat-list-item-disabled{opacity:.5}.cdk-high-contrast-active :host .mat-list-item-disabled{opacity:.5}.cdk-high-contrast-active .mat-selection-list:focus{outline-style:dotted}.cdk-high-contrast-active .mat-list-option:hover,.cdk-high-contrast-active .mat-list-option:focus,.cdk-high-contrast-active .mat-nav-list .mat-list-item:hover,.cdk-high-contrast-active .mat-nav-list .mat-list-item:focus,.cdk-high-contrast-active mat-action-list .mat-list-item:hover,.cdk-high-contrast-active mat-action-list .mat-list-item:focus{outline:dotted 1px}.cdk-high-contrast-active .mat-list-single-selected-option::after{content:\"\";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}.cdk-high-contrast-active [dir=rtl] .mat-list-single-selected-option::after{right:auto;left:16px}@media(hover: none){.mat-list-option:not(.mat-list-single-selected-option):not(.mat-list-item-disabled):hover,.mat-nav-list .mat-list-item:not(.mat-list-item-disabled):hover,.mat-action-list .mat-list-item:not(.mat-list-item-disabled):hover{background:none}}\n";
      var _c2 = [[["", "mat-list-avatar", ""], ["", "mat-list-icon", ""], ["", "matListAvatar", ""], ["", "matListIcon", ""]], [["", "mat-line", ""], ["", "matLine", ""]], "*"];
      var _c3 = ["[mat-list-avatar], [mat-list-icon], [matListAvatar], [matListIcon]", "[mat-line], [matLine]", "*"];
      var _c4 = ["text"];

      function MatListOption_mat_pseudo_checkbox_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-pseudo-checkbox", 5);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("state", ctx_r0.selected ? "checked" : "unchecked")("disabled", ctx_r0.disabled);
        }
      }

      var _c5 = ["*", [["", "mat-list-avatar", ""], ["", "mat-list-icon", ""], ["", "matListAvatar", ""], ["", "matListIcon", ""]]];
      var _c6 = ["*", "[mat-list-avatar], [mat-list-icon], [matListAvatar], [matListIcon]"];

      var MatListBase = /*#__PURE__*/_createClass(function MatListBase() {
        _classCallCheck(this, MatListBase);
      });

      var _MatListMixinBase = /*@__PURE__*/Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])( /*@__PURE__*/Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisableRipple"])(MatListBase)); // Boilerplate for applying mixins to MatListItem.

      /** @docs-private */


      var MatListItemBase = /*#__PURE__*/_createClass(function MatListItemBase() {
        _classCallCheck(this, MatListItemBase);
      });

      var _MatListItemMixinBase = /*@__PURE__*/Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisableRipple"])(MatListItemBase);
      /**
       * Injection token that can be used to inject instances of `MatList`. It serves as
       * alternative token to the actual `MatList` class which could cause unnecessary
       * retention of the class and its component metadata.
       */


      var MAT_LIST = /*@__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('MatList');
      /**
       * Injection token that can be used to inject instances of `MatNavList`. It serves as
       * alternative token to the actual `MatNavList` class which could cause unnecessary
       * retention of the class and its component metadata.
       */

      var MAT_NAV_LIST = /*@__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('MatNavList');

      var MatNavList = /*@__PURE__*/function () {
        var MatNavList = /*#__PURE__*/function (_MatListMixinBase2) {
          _inherits(MatNavList, _MatListMixinBase2);

          var _super = _createSuper(MatNavList);

          function MatNavList() {
            var _this;

            _classCallCheck(this, MatNavList);

            _this = _super.apply(this, arguments);
            /** Emits when the state of the list changes. */

            _this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
            return _this;
          }

          _createClass(MatNavList, [{
            key: "ngOnChanges",
            value: function ngOnChanges() {
              this._stateChanges.next();
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              this._stateChanges.complete();
            }
          }]);

          return MatNavList;
        }(_MatListMixinBase);

        MatNavList.ɵfac = function MatNavList_Factory(t) {
          return ɵMatNavList_BaseFactory(t || MatNavList);
        };

        MatNavList.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
          type: MatNavList,
          selectors: [["mat-nav-list"]],
          hostAttrs: ["role", "navigation", 1, "mat-nav-list", "mat-list-base"],
          inputs: {
            disableRipple: "disableRipple",
            disabled: "disabled"
          },
          exportAs: ["matNavList"],
          features: [/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
            provide: MAT_NAV_LIST,
            useExisting: MatNavList
          }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
          ngContentSelectors: _c0,
          decls: 1,
          vars: 0,
          template: function MatNavList_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
            }
          },
          styles: [_c1],
          encapsulation: 2,
          changeDetection: 0
        });
        return MatNavList;
      }();

      var ɵMatNavList_BaseFactory =
      /*@__PURE__*/

      /*@__PURE__*/
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatNavList);

      var MatList = /*@__PURE__*/function () {
        var MatList = /*#__PURE__*/function (_MatListMixinBase3) {
          _inherits(MatList, _MatListMixinBase3);

          var _super2 = _createSuper(MatList);

          function MatList(_elementRef) {
            var _this2;

            _classCallCheck(this, MatList);

            _this2 = _super2.call(this);
            _this2._elementRef = _elementRef;
            /** Emits when the state of the list changes. */

            _this2._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();

            if (_this2._getListType() === 'action-list') {
              _elementRef.nativeElement.classList.add('mat-action-list');
            }

            return _this2;
          }

          _createClass(MatList, [{
            key: "_getListType",
            value: function _getListType() {
              var nodeName = this._elementRef.nativeElement.nodeName.toLowerCase();

              if (nodeName === 'mat-list') {
                return 'list';
              }

              if (nodeName === 'mat-action-list') {
                return 'action-list';
              }

              return null;
            }
          }, {
            key: "ngOnChanges",
            value: function ngOnChanges() {
              this._stateChanges.next();
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              this._stateChanges.complete();
            }
          }]);

          return MatList;
        }(_MatListMixinBase);

        MatList.ɵfac = function MatList_Factory(t) {
          return new (t || MatList)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]));
        };

        MatList.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
          type: MatList,
          selectors: [["mat-list"], ["mat-action-list"]],
          hostAttrs: [1, "mat-list", "mat-list-base"],
          inputs: {
            disableRipple: "disableRipple",
            disabled: "disabled"
          },
          exportAs: ["matList"],
          features: [/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
            provide: MAT_LIST,
            useExisting: MatList
          }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
          ngContentSelectors: _c0,
          decls: 1,
          vars: 0,
          template: function MatList_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
            }
          },
          styles: [_c1],
          encapsulation: 2,
          changeDetection: 0
        });
        return MatList;
      }();

      var MatListAvatarCssMatStyler = /*@__PURE__*/function () {
        var MatListAvatarCssMatStyler = /*#__PURE__*/_createClass(function MatListAvatarCssMatStyler() {
          _classCallCheck(this, MatListAvatarCssMatStyler);
        });

        MatListAvatarCssMatStyler.ɵfac = function MatListAvatarCssMatStyler_Factory(t) {
          return new (t || MatListAvatarCssMatStyler)();
        };

        MatListAvatarCssMatStyler.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
          type: MatListAvatarCssMatStyler,
          selectors: [["", "mat-list-avatar", ""], ["", "matListAvatar", ""]],
          hostAttrs: [1, "mat-list-avatar"]
        });
        return MatListAvatarCssMatStyler;
      }();

      var MatListIconCssMatStyler = /*@__PURE__*/function () {
        var MatListIconCssMatStyler = /*#__PURE__*/_createClass(function MatListIconCssMatStyler() {
          _classCallCheck(this, MatListIconCssMatStyler);
        });

        MatListIconCssMatStyler.ɵfac = function MatListIconCssMatStyler_Factory(t) {
          return new (t || MatListIconCssMatStyler)();
        };

        MatListIconCssMatStyler.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
          type: MatListIconCssMatStyler,
          selectors: [["", "mat-list-icon", ""], ["", "matListIcon", ""]],
          hostAttrs: [1, "mat-list-icon"]
        });
        return MatListIconCssMatStyler;
      }();

      var MatListSubheaderCssMatStyler = /*@__PURE__*/function () {
        var MatListSubheaderCssMatStyler = /*#__PURE__*/_createClass(function MatListSubheaderCssMatStyler() {
          _classCallCheck(this, MatListSubheaderCssMatStyler);
        });

        MatListSubheaderCssMatStyler.ɵfac = function MatListSubheaderCssMatStyler_Factory(t) {
          return new (t || MatListSubheaderCssMatStyler)();
        };

        MatListSubheaderCssMatStyler.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
          type: MatListSubheaderCssMatStyler,
          selectors: [["", "mat-subheader", ""], ["", "matSubheader", ""]],
          hostAttrs: [1, "mat-subheader"]
        });
        return MatListSubheaderCssMatStyler;
      }();

      var MatListItem = /*@__PURE__*/function () {
        var MatListItem = /*#__PURE__*/function (_MatListItemMixinBase2) {
          _inherits(MatListItem, _MatListItemMixinBase2);

          var _super3 = _createSuper(MatListItem);

          function MatListItem(_element, _changeDetectorRef, navList, list) {
            var _this3;

            _classCallCheck(this, MatListItem);

            _this3 = _super3.call(this);
            _this3._element = _element;
            _this3._isInteractiveList = false;
            _this3._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
            _this3._disabled = false;
            _this3._isInteractiveList = !!(navList || list && list._getListType() === 'action-list');
            _this3._list = navList || list; // If no type attribute is specified for <button>, set it to "button".
            // If a type attribute is already specified, do nothing.

            var element = _this3._getHostElement();

            if (element.nodeName.toLowerCase() === 'button' && !element.hasAttribute('type')) {
              element.setAttribute('type', 'button');
            }

            if (_this3._list) {
              // React to changes in the state of the parent list since
              // some of the item's properties depend on it (e.g. `disableRipple`).
              _this3._list._stateChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(_this3._destroyed)).subscribe(function () {
                _changeDetectorRef.markForCheck();
              });
            }

            return _this3;
          }
          /** Whether the option is disabled. */


          _createClass(MatListItem, [{
            key: "disabled",
            get: function get() {
              return this._disabled || !!(this._list && this._list.disabled);
            },
            set: function set(value) {
              this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
            }
          }, {
            key: "ngAfterContentInit",
            value: function ngAfterContentInit() {
              Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["setLines"])(this._lines, this._element);
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              this._destroyed.next();

              this._destroyed.complete();
            }
            /** Whether this list item should show a ripple effect when clicked. */

          }, {
            key: "_isRippleDisabled",
            value: function _isRippleDisabled() {
              return !this._isInteractiveList || this.disableRipple || !!(this._list && this._list.disableRipple);
            }
            /** Retrieves the DOM element of the component host. */

          }, {
            key: "_getHostElement",
            value: function _getHostElement() {
              return this._element.nativeElement;
            }
          }]);

          return MatListItem;
        }(_MatListItemMixinBase);

        MatListItem.ɵfac = function MatListItem_Factory(t) {
          return new (t || MatListItem)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MAT_NAV_LIST, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MAT_LIST, 8));
        };

        MatListItem.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
          type: MatListItem,
          selectors: [["mat-list-item"], ["a", "mat-list-item", ""], ["button", "mat-list-item", ""]],
          contentQueries: function MatListItem_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatListAvatarCssMatStyler, true);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatListIconCssMatStyler, true);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatLine"], true);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._avatar = _t.first);
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._icon = _t.first);
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._lines = _t);
            }
          },
          hostAttrs: [1, "mat-list-item", "mat-focus-indicator"],
          hostVars: 6,
          hostBindings: function MatListItem_HostBindings(rf, ctx) {
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-list-item-disabled", ctx.disabled)("mat-list-item-avatar", ctx._avatar || ctx._icon)("mat-list-item-with-avatar", ctx._avatar || ctx._icon);
            }
          },
          inputs: {
            disableRipple: "disableRipple",
            disabled: "disabled"
          },
          exportAs: ["matListItem"],
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
          ngContentSelectors: _c3,
          decls: 6,
          vars: 2,
          consts: [[1, "mat-list-item-content"], ["mat-ripple", "", 1, "mat-list-item-ripple", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mat-list-text"]],
          template: function MatListItem_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c2);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](4, 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](5, 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRippleTrigger", ctx._getHostElement())("matRippleDisabled", ctx._isRippleDisabled());
            }
          },
          directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRipple"]],
          encapsulation: 2,
          changeDetection: 0
        });
        return MatListItem;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatSelectionListBase = /*#__PURE__*/_createClass(function MatSelectionListBase() {
        _classCallCheck(this, MatSelectionListBase);
      });

      var _MatSelectionListMixinBase = /*@__PURE__*/Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisableRipple"])(MatSelectionListBase);

      var MatListOptionBase = /*#__PURE__*/_createClass(function MatListOptionBase() {
        _classCallCheck(this, MatListOptionBase);
      });

      var _MatListOptionMixinBase = /*@__PURE__*/Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisableRipple"])(MatListOptionBase);
      /** @docs-private */


      var MAT_SELECTION_LIST_VALUE_ACCESSOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALUE_ACCESSOR"],
        useExisting: /*@__PURE__*/Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return MatSelectionList;
        }),
        multi: true
      };
      /** Change event that is being fired whenever the selected state of an option changes. */

      var MatSelectionListChange = /*#__PURE__*/_createClass(function MatSelectionListChange(
      /** Reference to the selection list that emitted the event. */
      source,
      /**
       * Reference to the option that has been changed.
       * @deprecated Use `options` instead, because some events may change more than one option.
       * @breaking-change 12.0.0
       */
      option,
      /** Reference to the options that have been changed. */
      options) {
        _classCallCheck(this, MatSelectionListChange);

        this.source = source;
        this.option = option;
        this.options = options;
      });

      var MatListOption = /*@__PURE__*/function () {
        var MatListOption = /*#__PURE__*/function (_MatListOptionMixinBa) {
          _inherits(MatListOption, _MatListOptionMixinBa);

          var _super4 = _createSuper(MatListOption);

          function MatListOption(_element, _changeDetector,
          /** @docs-private */
          selectionList) {
            var _this4;

            _classCallCheck(this, MatListOption);

            _this4 = _super4.call(this);
            _this4._element = _element;
            _this4._changeDetector = _changeDetector;
            _this4.selectionList = selectionList;
            _this4._selected = false;
            _this4._disabled = false;
            _this4._hasFocus = false;
            /** Whether the label should appear before or after the checkbox. Defaults to 'after' */

            _this4.checkboxPosition = 'after';
            /**
             * This is set to true after the first OnChanges cycle so we don't clear the value of `selected`
             * in the first cycle.
             */

            _this4._inputsInitialized = false;
            return _this4;
          }
          /** Theme color of the list option. This sets the color of the checkbox. */


          _createClass(MatListOption, [{
            key: "color",
            get: function get() {
              return this._color || this.selectionList.color;
            },
            set: function set(newValue) {
              this._color = newValue;
            }
            /** Value of the option */

          }, {
            key: "value",
            get: function get() {
              return this._value;
            },
            set: function set(newValue) {
              if (this.selected && !this.selectionList.compareWith(newValue, this.value) && this._inputsInitialized) {
                this.selected = false;
              }

              this._value = newValue;
            }
            /** Whether the option is disabled. */

          }, {
            key: "disabled",
            get: function get() {
              return this._disabled || this.selectionList && this.selectionList.disabled;
            },
            set: function set(value) {
              var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);

              if (newValue !== this._disabled) {
                this._disabled = newValue;

                this._changeDetector.markForCheck();
              }
            }
            /** Whether the option is selected. */

          }, {
            key: "selected",
            get: function get() {
              return this.selectionList.selectedOptions.isSelected(this);
            },
            set: function set(value) {
              var isSelected = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);

              if (isSelected !== this._selected) {
                this._setSelected(isSelected);

                this.selectionList._reportValueChange();
              }
            }
          }, {
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this5 = this;

              var list = this.selectionList;

              if (list._value && list._value.some(function (value) {
                return list.compareWith(value, _this5._value);
              })) {
                this._setSelected(true);
              }

              var wasSelected = this._selected; // List options that are selected at initialization can't be reported properly to the form
              // control. This is because it takes some time until the selection-list knows about all
              // available options. Also it can happen that the ControlValueAccessor has an initial value
              // that should be used instead. Deferring the value change report to the next tick ensures
              // that the form control value is not being overwritten.

              Promise.resolve().then(function () {
                if (_this5._selected || wasSelected) {
                  _this5.selected = true;

                  _this5._changeDetector.markForCheck();
                }
              });
              this._inputsInitialized = true;
            }
          }, {
            key: "ngAfterContentInit",
            value: function ngAfterContentInit() {
              Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["setLines"])(this._lines, this._element);
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              var _this6 = this;

              if (this.selected) {
                // We have to delay this until the next tick in order
                // to avoid changed after checked errors.
                Promise.resolve().then(function () {
                  _this6.selected = false;
                });
              }

              var hadFocus = this._hasFocus;

              var newActiveItem = this.selectionList._removeOptionFromList(this); // Only move focus if this option was focused at the time it was destroyed.


              if (hadFocus && newActiveItem) {
                newActiveItem.focus();
              }
            }
            /** Toggles the selection state of the option. */

          }, {
            key: "toggle",
            value: function toggle() {
              this.selected = !this.selected;
            }
            /** Allows for programmatic focusing of the option. */

          }, {
            key: "focus",
            value: function focus() {
              this._element.nativeElement.focus();
            }
            /**
             * Returns the list item's text label. Implemented as a part of the FocusKeyManager.
             * @docs-private
             */

          }, {
            key: "getLabel",
            value: function getLabel() {
              return this._text ? this._text.nativeElement.textContent || '' : '';
            }
            /** Whether this list item should show a ripple effect when clicked. */

          }, {
            key: "_isRippleDisabled",
            value: function _isRippleDisabled() {
              return this.disabled || this.disableRipple || this.selectionList.disableRipple;
            }
          }, {
            key: "_handleClick",
            value: function _handleClick() {
              if (!this.disabled && (this.selectionList.multiple || !this.selected)) {
                this.toggle(); // Emit a change event if the selected state of the option changed through user interaction.

                this.selectionList._emitChangeEvent([this]);
              }
            }
          }, {
            key: "_handleFocus",
            value: function _handleFocus() {
              this.selectionList._setFocusedOption(this);

              this._hasFocus = true;
            }
          }, {
            key: "_handleBlur",
            value: function _handleBlur() {
              this.selectionList._onTouched();

              this._hasFocus = false;
            }
            /** Retrieves the DOM element of the component host. */

          }, {
            key: "_getHostElement",
            value: function _getHostElement() {
              return this._element.nativeElement;
            }
            /** Sets the selected state of the option. Returns whether the value has changed. */

          }, {
            key: "_setSelected",
            value: function _setSelected(selected) {
              if (selected === this._selected) {
                return false;
              }

              this._selected = selected;

              if (selected) {
                this.selectionList.selectedOptions.select(this);
              } else {
                this.selectionList.selectedOptions.deselect(this);
              }

              this._changeDetector.markForCheck();

              return true;
            }
            /**
             * Notifies Angular that the option needs to be checked in the next change detection run. Mainly
             * used to trigger an update of the list option if the disabled state of the selection list
             * changed.
             */

          }, {
            key: "_markForCheck",
            value: function _markForCheck() {
              this._changeDetector.markForCheck();
            }
          }]);

          return MatListOption;
        }(_MatListOptionMixinBase);

        MatListOption.ɵfac = function MatListOption_Factory(t) {
          return new (t || MatListOption)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
            return MatSelectionList;
          })));
        };

        MatListOption.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
          type: MatListOption,
          selectors: [["mat-list-option"]],
          contentQueries: function MatListOption_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatListAvatarCssMatStyler, true);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatListIconCssMatStyler, true);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatLine"], true);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._avatar = _t.first);
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._icon = _t.first);
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._lines = _t);
            }
          },
          viewQuery: function MatListOption_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c4, true);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._text = _t.first);
            }
          },
          hostAttrs: ["role", "option", 1, "mat-list-item", "mat-list-option", "mat-focus-indicator"],
          hostVars: 15,
          hostBindings: function MatListOption_HostBindings(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function MatListOption_focus_HostBindingHandler() {
                return ctx._handleFocus();
              })("blur", function MatListOption_blur_HostBindingHandler() {
                return ctx._handleBlur();
              })("click", function MatListOption_click_HostBindingHandler() {
                return ctx._handleClick();
              });
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-selected", ctx.selected)("aria-disabled", ctx.disabled)("tabindex", -1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-list-item-disabled", ctx.disabled)("mat-list-item-with-avatar", ctx._avatar || ctx._icon)("mat-primary", ctx.color === "primary")("mat-accent", ctx.color !== "primary" && ctx.color !== "warn")("mat-warn", ctx.color === "warn")("mat-list-single-selected-option", ctx.selected && !ctx.selectionList.multiple);
            }
          },
          inputs: {
            disableRipple: "disableRipple",
            checkboxPosition: "checkboxPosition",
            color: "color",
            value: "value",
            selected: "selected",
            disabled: "disabled"
          },
          exportAs: ["matListOption"],
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
          ngContentSelectors: _c6,
          decls: 7,
          vars: 5,
          consts: [[1, "mat-list-item-content"], ["mat-ripple", "", 1, "mat-list-item-ripple", 3, "matRippleTrigger", "matRippleDisabled"], [3, "state", "disabled", 4, "ngIf"], [1, "mat-list-text"], ["text", ""], [3, "state", "disabled"]],
          template: function MatListOption_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MatListOption_mat_pseudo_checkbox_2_Template, 1, 2, "mat-pseudo-checkbox", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3, 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](6, 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-list-item-content-reverse", ctx.checkboxPosition == "after");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRippleTrigger", ctx._getHostElement())("matRippleDisabled", ctx._isRippleDisabled());

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectionList.multiple);
            }
          },
          directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRipple"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatPseudoCheckbox"]],
          encapsulation: 2,
          changeDetection: 0
        });
        return MatListOption;
      }();

      var MatSelectionList = /*@__PURE__*/function () {
        var MatSelectionList = /*#__PURE__*/function (_MatSelectionListMixi) {
          _inherits(MatSelectionList, _MatSelectionListMixi);

          var _super5 = _createSuper(MatSelectionList);

          function MatSelectionList(_element, // @breaking-change 11.0.0 Remove `tabIndex` parameter.
          tabIndex, _changeDetector, // @breaking-change 11.0.0 `_focusMonitor` parameter to become required.
          _focusMonitor) {
            var _this7;

            _classCallCheck(this, MatSelectionList);

            _this7 = _super5.call(this);
            _this7._element = _element;
            _this7._changeDetector = _changeDetector;
            _this7._focusMonitor = _focusMonitor;
            _this7._multiple = true;
            _this7._contentInitialized = false;
            /** Emits a change event whenever the selected state of an option changes. */

            _this7.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            /**
             * Tabindex of the selection list.
             * @breaking-change 11.0.0 Remove `tabIndex` input.
             */

            _this7.tabIndex = 0;
            /** Theme color of the selection list. This sets the checkbox color for all list options. */

            _this7.color = 'accent';
            /**
             * Function used for comparing an option against the selected value when determining which
             * options should appear as selected. The first argument is the value of an options. The second
             * one is a value from the selected value. A boolean must be returned.
             */

            _this7.compareWith = function (a1, a2) {
              return a1 === a2;
            };

            _this7._disabled = false;
            /** The currently selected options. */

            _this7.selectedOptions = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["SelectionModel"](_this7._multiple);
            /** The tabindex of the selection list. */

            _this7._tabIndex = -1;
            /** View to model callback that should be called whenever the selected options change. */

            _this7._onChange = function (_) {};
            /** Emits when the list has been destroyed. */


            _this7._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
            /** View to model callback that should be called if the list or its options lost focus. */

            _this7._onTouched = function () {};

            return _this7;
          }
          /** Whether the selection list is disabled. */


          _createClass(MatSelectionList, [{
            key: "disabled",
            get: function get() {
              return this._disabled;
            },
            set: function set(value) {
              this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value); // The `MatSelectionList` and `MatListOption` are using the `OnPush` change detection
              // strategy. Therefore the options will not check for any changes if the `MatSelectionList`
              // changed its state. Since we know that a change to `disabled` property of the list affects
              // the state of the options, we manually mark each option for check.

              this._markOptionsForCheck();
            }
            /** Whether selection is limited to one or multiple items (default multiple). */

          }, {
            key: "multiple",
            get: function get() {
              return this._multiple;
            },
            set: function set(value) {
              var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);

              if (newValue !== this._multiple) {
                if (this._contentInitialized && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                  throw new Error('Cannot change `multiple` mode of mat-selection-list after initialization.');
                }

                this._multiple = newValue;
                this.selectedOptions = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["SelectionModel"](this._multiple, this.selectedOptions.selected);
              }
            }
          }, {
            key: "ngAfterContentInit",
            value: function ngAfterContentInit() {
              var _this8 = this;

              var _a;

              this._contentInitialized = true;
              this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusKeyManager"](this.options).withWrap().withTypeAhead().withHomeAndEnd() // Allow disabled items to be focusable. For accessibility reasons, there must be a way for
              // screenreader users, that allows reading the different options of the list.
              .skipPredicate(function () {
                return false;
              }).withAllowedModifierKeys(['shiftKey']);

              if (this._value) {
                this._setOptionsFromValues(this._value);
              } // If the user attempts to tab out of the selection list, allow focus to escape.


              this._keyManager.tabOut.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._destroyed)).subscribe(function () {
                _this8._allowFocusEscape();
              }); // When the number of options change, update the tabindex of the selection list.


              this.options.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._destroyed)).subscribe(function () {
                _this8._updateTabIndex();
              }); // Sync external changes to the model back to the options.

              this.selectedOptions.changed.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._destroyed)).subscribe(function (event) {
                if (event.added) {
                  var _iterator = _createForOfIteratorHelper(event.added),
                      _step;

                  try {
                    for (_iterator.s(); !(_step = _iterator.n()).done;) {
                      var item = _step.value;
                      item.selected = true;
                    }
                  } catch (err) {
                    _iterator.e(err);
                  } finally {
                    _iterator.f();
                  }
                }

                if (event.removed) {
                  var _iterator2 = _createForOfIteratorHelper(event.removed),
                      _step2;

                  try {
                    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                      var _item2 = _step2.value;
                      _item2.selected = false;
                    }
                  } catch (err) {
                    _iterator2.e(err);
                  } finally {
                    _iterator2.f();
                  }
                }
              }); // @breaking-change 11.0.0 Remove null assertion once _focusMonitor is required.

              (_a = this._focusMonitor) === null || _a === void 0 ? void 0 : _a.monitor(this._element).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._destroyed)).subscribe(function (origin) {
                if (origin === 'keyboard' || origin === 'program') {
                  var activeIndex = _this8._keyManager.activeItemIndex;

                  if (!activeIndex || activeIndex === -1) {
                    // If there is no active index, set focus to the first option.
                    _this8._keyManager.setFirstItemActive();
                  } else {
                    // Otherwise, set focus to the active option.
                    _this8._keyManager.setActiveItem(activeIndex);
                  }
                }
              });
            }
          }, {
            key: "ngOnChanges",
            value: function ngOnChanges(changes) {
              var disableRippleChanges = changes['disableRipple'];
              var colorChanges = changes['color'];

              if (disableRippleChanges && !disableRippleChanges.firstChange || colorChanges && !colorChanges.firstChange) {
                this._markOptionsForCheck();
              }
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              var _a; // @breaking-change 11.0.0 Remove null assertion once _focusMonitor is required.


              (_a = this._focusMonitor) === null || _a === void 0 ? void 0 : _a.stopMonitoring(this._element);

              this._destroyed.next();

              this._destroyed.complete();

              this._isDestroyed = true;
            }
            /** Focuses the selection list. */

          }, {
            key: "focus",
            value: function focus(options) {
              this._element.nativeElement.focus(options);
            }
            /** Selects all of the options. */

          }, {
            key: "selectAll",
            value: function selectAll() {
              this._setAllOptionsSelected(true);
            }
            /** Deselects all of the options. */

          }, {
            key: "deselectAll",
            value: function deselectAll() {
              this._setAllOptionsSelected(false);
            }
            /** Sets the focused option of the selection-list. */

          }, {
            key: "_setFocusedOption",
            value: function _setFocusedOption(option) {
              this._keyManager.updateActiveItem(option);
            }
            /**
             * Removes an option from the selection list and updates the active item.
             * @returns Currently-active item.
             */

          }, {
            key: "_removeOptionFromList",
            value: function _removeOptionFromList(option) {
              var optionIndex = this._getOptionIndex(option);

              if (optionIndex > -1 && this._keyManager.activeItemIndex === optionIndex) {
                // Check whether the option is the last item
                if (optionIndex > 0) {
                  this._keyManager.updateActiveItem(optionIndex - 1);
                } else if (optionIndex === 0 && this.options.length > 1) {
                  this._keyManager.updateActiveItem(Math.min(optionIndex + 1, this.options.length - 1));
                }
              }

              return this._keyManager.activeItem;
            }
            /** Passes relevant key presses to our key manager. */

          }, {
            key: "_keydown",
            value: function _keydown(event) {
              var keyCode = event.keyCode;
              var manager = this._keyManager;
              var previousFocusIndex = manager.activeItemIndex;
              var hasModifier = Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["hasModifierKey"])(event);

              switch (keyCode) {
                case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["SPACE"]:
                case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["ENTER"]:
                  if (!hasModifier && !manager.isTyping()) {
                    this._toggleFocusedOption(); // Always prevent space from scrolling the page since the list has focus


                    event.preventDefault();
                  }

                  break;

                default:
                  // The "A" key gets special treatment, because it's used for the "select all" functionality.
                  if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["A"] && this.multiple && Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["hasModifierKey"])(event, 'ctrlKey') && !manager.isTyping()) {
                    var shouldSelect = this.options.some(function (option) {
                      return !option.disabled && !option.selected;
                    });

                    this._setAllOptionsSelected(shouldSelect, true, true);

                    event.preventDefault();
                  } else {
                    manager.onKeydown(event);
                  }

              }

              if (this.multiple && (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["UP_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["DOWN_ARROW"]) && event.shiftKey && manager.activeItemIndex !== previousFocusIndex) {
                this._toggleFocusedOption();
              }
            }
            /** Reports a value change to the ControlValueAccessor */

          }, {
            key: "_reportValueChange",
            value: function _reportValueChange() {
              // Stop reporting value changes after the list has been destroyed. This avoids
              // cases where the list might wrongly reset its value once it is removed, but
              // the form control is still live.
              if (this.options && !this._isDestroyed) {
                var value = this._getSelectedOptionValues();

                this._onChange(value);

                this._value = value;
              }
            }
            /** Emits a change event if the selected state of an option changed. */

          }, {
            key: "_emitChangeEvent",
            value: function _emitChangeEvent(options) {
              this.selectionChange.emit(new MatSelectionListChange(this, options[0], options));
            }
            /** Implemented as part of ControlValueAccessor. */

          }, {
            key: "writeValue",
            value: function writeValue(values) {
              this._value = values;

              if (this.options) {
                this._setOptionsFromValues(values || []);
              }
            }
            /** Implemented as a part of ControlValueAccessor. */

          }, {
            key: "setDisabledState",
            value: function setDisabledState(isDisabled) {
              this.disabled = isDisabled;
            }
            /** Implemented as part of ControlValueAccessor. */

          }, {
            key: "registerOnChange",
            value: function registerOnChange(fn) {
              this._onChange = fn;
            }
            /** Implemented as part of ControlValueAccessor. */

          }, {
            key: "registerOnTouched",
            value: function registerOnTouched(fn) {
              this._onTouched = fn;
            }
            /** Sets the selected options based on the specified values. */

          }, {
            key: "_setOptionsFromValues",
            value: function _setOptionsFromValues(values) {
              var _this9 = this;

              this.options.forEach(function (option) {
                return option._setSelected(false);
              });
              values.forEach(function (value) {
                var correspondingOption = _this9.options.find(function (option) {
                  // Skip options that are already in the model. This allows us to handle cases
                  // where the same primitive value is selected multiple times.
                  return option.selected ? false : _this9.compareWith(option.value, value);
                });

                if (correspondingOption) {
                  correspondingOption._setSelected(true);
                }
              });
            }
            /** Returns the values of the selected options. */

          }, {
            key: "_getSelectedOptionValues",
            value: function _getSelectedOptionValues() {
              return this.options.filter(function (option) {
                return option.selected;
              }).map(function (option) {
                return option.value;
              });
            }
            /** Toggles the state of the currently focused option if enabled. */

          }, {
            key: "_toggleFocusedOption",
            value: function _toggleFocusedOption() {
              var focusedIndex = this._keyManager.activeItemIndex;

              if (focusedIndex != null && this._isValidIndex(focusedIndex)) {
                var focusedOption = this.options.toArray()[focusedIndex];

                if (focusedOption && !focusedOption.disabled && (this._multiple || !focusedOption.selected)) {
                  focusedOption.toggle(); // Emit a change event because the focused option changed its state through user
                  // interaction.

                  this._emitChangeEvent([focusedOption]);
                }
              }
            }
            /**
             * Sets the selected state on all of the options
             * and emits an event if anything changed.
             */

          }, {
            key: "_setAllOptionsSelected",
            value: function _setAllOptionsSelected(isSelected, skipDisabled, isUserInput) {
              // Keep track of whether anything changed, because we only want to
              // emit the changed event when something actually changed.
              var changedOptions = [];
              this.options.forEach(function (option) {
                if ((!skipDisabled || !option.disabled) && option._setSelected(isSelected)) {
                  changedOptions.push(option);
                }
              });

              if (changedOptions.length) {
                this._reportValueChange();

                if (isUserInput) {
                  this._emitChangeEvent(changedOptions);
                }
              }
            }
            /**
             * Utility to ensure all indexes are valid.
             * @param index The index to be checked.
             * @returns True if the index is valid for our list of options.
             */

          }, {
            key: "_isValidIndex",
            value: function _isValidIndex(index) {
              return index >= 0 && index < this.options.length;
            }
            /** Returns the index of the specified list option. */

          }, {
            key: "_getOptionIndex",
            value: function _getOptionIndex(option) {
              return this.options.toArray().indexOf(option);
            }
            /** Marks all the options to be checked in the next change detection run. */

          }, {
            key: "_markOptionsForCheck",
            value: function _markOptionsForCheck() {
              if (this.options) {
                this.options.forEach(function (option) {
                  return option._markForCheck();
                });
              }
            }
            /**
             * Removes the tabindex from the selection list and resets it back afterwards, allowing the user
             * to tab out of it. This prevents the list from capturing focus and redirecting it back within
             * the list, creating a focus trap if it user tries to tab away.
             */

          }, {
            key: "_allowFocusEscape",
            value: function _allowFocusEscape() {
              var _this10 = this;

              this._tabIndex = -1;
              setTimeout(function () {
                _this10._tabIndex = 0;

                _this10._changeDetector.markForCheck();
              });
            }
            /** Updates the tabindex based upon if the selection list is empty. */

          }, {
            key: "_updateTabIndex",
            value: function _updateTabIndex() {
              this._tabIndex = this.options.length === 0 ? -1 : 0;
            }
          }]);

          return MatSelectionList;
        }(_MatSelectionListMixinBase);

        MatSelectionList.ɵfac = function MatSelectionList_Factory(t) {
          return new (t || MatSelectionList)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"]));
        };

        MatSelectionList.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
          type: MatSelectionList,
          selectors: [["mat-selection-list"]],
          contentQueries: function MatSelectionList_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatListOption, true);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.options = _t);
            }
          },
          hostAttrs: ["role", "listbox", 1, "mat-selection-list", "mat-list-base"],
          hostVars: 3,
          hostBindings: function MatSelectionList_HostBindings(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function MatSelectionList_keydown_HostBindingHandler($event) {
                return ctx._keydown($event);
              });
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-multiselectable", ctx.multiple)("aria-disabled", ctx.disabled.toString())("tabindex", ctx._tabIndex);
            }
          },
          inputs: {
            disableRipple: "disableRipple",
            tabIndex: "tabIndex",
            color: "color",
            compareWith: "compareWith",
            disabled: "disabled",
            multiple: "multiple"
          },
          outputs: {
            selectionChange: "selectionChange"
          },
          exportAs: ["matSelectionList"],
          features: [/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([MAT_SELECTION_LIST_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
          ngContentSelectors: _c0,
          decls: 1,
          vars: 0,
          template: function MatSelectionList_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
            }
          },
          styles: [_c1],
          encapsulation: 2,
          changeDetection: 0
        });
        return MatSelectionList;
      }();

      var MatListModule = /*@__PURE__*/function () {
        var MatListModule = /*#__PURE__*/_createClass(function MatListModule() {
          _classCallCheck(this, MatListModule);
        });

        MatListModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
          type: MatListModule
        });
        MatListModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
          factory: function MatListModule_Factory(t) {
            return new (t || MatListModule)();
          },
          imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatPseudoCheckboxModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatPseudoCheckboxModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"]]
        });
        return MatListModule;
      }();
      /*@__PURE__*/


      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MatListModule, {
          declarations: function declarations() {
            return [MatList, MatNavList, MatListItem, MatListAvatarCssMatStyler, MatListIconCssMatStyler, MatListSubheaderCssMatStyler, MatSelectionList, MatListOption];
          },
          imports: function imports() {
            return [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatPseudoCheckboxModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]];
          },
          exports: function exports() {
            return [MatList, MatNavList, MatListItem, MatListAvatarCssMatStyler, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], MatListIconCssMatStyler, MatListSubheaderCssMatStyler, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatPseudoCheckboxModule"], MatSelectionList, MatListOption, _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"]];
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
      //# sourceMappingURL=list.js.map

      /***/

    },

    /***/
    "STbY":
    /*!**********************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js ***!
      \**********************************************************************/

    /*! exports provided: MAT_MENU_CONTENT, MAT_MENU_DEFAULT_OPTIONS, MAT_MENU_PANEL, MAT_MENU_SCROLL_STRATEGY, MatMenu, MatMenuContent, MatMenuItem, MatMenuModule, MatMenuTrigger, _MatMenu, _MatMenuBase, _MatMenuDirectivesModule, fadeInItems, matMenuAnimations, transformMenu, ɵangular_material_src_material_menu_menu_a, ɵangular_material_src_material_menu_menu_b, ɵangular_material_src_material_menu_menu_c */

    /***/
    function STbY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_MENU_CONTENT", function () {
        return MAT_MENU_CONTENT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_MENU_DEFAULT_OPTIONS", function () {
        return MAT_MENU_DEFAULT_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_MENU_PANEL", function () {
        return MAT_MENU_PANEL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_MENU_SCROLL_STRATEGY", function () {
        return MAT_MENU_SCROLL_STRATEGY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatMenu", function () {
        return MatMenu;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatMenuContent", function () {
        return MatMenuContent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatMenuItem", function () {
        return MatMenuItem;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatMenuModule", function () {
        return MatMenuModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatMenuTrigger", function () {
        return MatMenuTrigger;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_MatMenu", function () {
        return _MatMenu;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_MatMenuBase", function () {
        return _MatMenuBase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_MatMenuDirectivesModule", function () {
        return _MatMenuDirectivesModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fadeInItems", function () {
        return fadeInItems;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "matMenuAnimations", function () {
        return matMenuAnimations;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "transformMenu", function () {
        return transformMenu;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_menu_menu_a", function () {
        return MAT_MENU_DEFAULT_OPTIONS_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_menu_menu_b", function () {
        return MAT_MENU_SCROLL_STRATEGY_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_menu_menu_c", function () {
        return MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER;
      });
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "u47x");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      "FtGj");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/portal */
      "+rOU");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "cH1L");
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      "rDax");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "nLfN");
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "vxfF");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Animations used by the mat-menu component.
       * Animation duration and timing values are based on:
       * https://material.io/guidelines/components/menus.html#menus-usage
       * @docs-private
       */


      var _c0 = ["mat-menu-item", ""];
      var _c1 = ["*"];

      function _MatMenu_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keydown", function _MatMenu_ng_template_0_Template_div_keydown_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r1._handleKeydown($event);
          })("click", function _MatMenu_ng_template_0_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r3.closed.emit("click");
          })("@transformMenu.start", function _MatMenu_ng_template_0_Template_div_animation_transformMenu_start_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r4._onAnimationStart($event);
          })("@transformMenu.done", function _MatMenu_ng_template_0_Template_div_animation_transformMenu_done_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r5._onAnimationDone($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", ctx_r0.panelId)("ngClass", ctx_r0._classList)("@transformMenu", ctx_r0._panelAnimationState);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-label", ctx_r0.ariaLabel || null)("aria-labelledby", ctx_r0.ariaLabelledby || null)("aria-describedby", ctx_r0.ariaDescribedby || null);
        }
      }

      var matMenuAnimations = {
        /**
         * This animation controls the menu panel's entry and exit from the page.
         *
         * When the menu panel is added to the DOM, it scales in and fades in its border.
         *
         * When the menu panel is removed from the DOM, it simply fades out after a brief
         * delay to display the ripple.
         */
        transformMenu: /*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('transformMenu', [/*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('void', /*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          opacity: 0,
          transform: 'scale(0.8)'
        })), /*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('void => enter', /*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["group"])([/*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["query"])('.mat-menu-content, .mat-mdc-menu-content', /*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('100ms linear', /*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          opacity: 1
        }))), /*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('120ms cubic-bezier(0, 0, 0.2, 1)', /*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          transform: 'scale(1)'
        }))])), /*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* => void', /*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('100ms 25ms linear', /*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          opacity: 0
        })))]),

        /**
         * This animation fades in the background color and content of the menu panel
         * after its containing element is scaled in.
         */
        fadeInItems: /*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('fadeInItems', [// TODO(crisbeto): this is inside the `transformMenu`
        // now. Remove next time we do breaking changes.

        /*@__PURE__*/
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('showing', /*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          opacity: 1
        })), /*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('void => *', [/*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          opacity: 0
        }), /*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)')])])
      };
      /**
       * @deprecated
       * @breaking-change 8.0.0
       * @docs-private
       */

      var fadeInItems = matMenuAnimations.fadeInItems;
      /**
       * @deprecated
       * @breaking-change 8.0.0
       * @docs-private
       */

      var transformMenu = matMenuAnimations.transformMenu;
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Injection token that can be used to reference instances of `MatMenuContent`. It serves
       * as alternative token to the actual `MatMenuContent` class which could cause unnecessary
       * retention of the class and its directive metadata.
       */

      var MAT_MENU_CONTENT = /*@__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('MatMenuContent');

      var MatMenuContent = /*@__PURE__*/function () {
        var MatMenuContent = /*#__PURE__*/function () {
          function MatMenuContent(_template, _componentFactoryResolver, _appRef, _injector, _viewContainerRef, _document, _changeDetectorRef) {
            _classCallCheck(this, MatMenuContent);

            this._template = _template;
            this._componentFactoryResolver = _componentFactoryResolver;
            this._appRef = _appRef;
            this._injector = _injector;
            this._viewContainerRef = _viewContainerRef;
            this._document = _document;
            this._changeDetectorRef = _changeDetectorRef;
            /** Emits when the menu content has been attached. */

            this._attached = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          }
          /**
           * Attaches the content with a particular context.
           * @docs-private
           */


          _createClass(MatMenuContent, [{
            key: "attach",
            value: function attach() {
              var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

              if (!this._portal) {
                this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__["TemplatePortal"](this._template, this._viewContainerRef);
              }

              this.detach();

              if (!this._outlet) {
                this._outlet = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__["DomPortalOutlet"](this._document.createElement('div'), this._componentFactoryResolver, this._appRef, this._injector);
              }

              var element = this._template.elementRef.nativeElement; // Because we support opening the same menu from different triggers (which in turn have their
              // own `OverlayRef` panel), we have to re-insert the host element every time, otherwise we
              // risk it staying attached to a pane that's no longer in the DOM.

              element.parentNode.insertBefore(this._outlet.outletElement, element); // When `MatMenuContent` is used in an `OnPush` component, the insertion of the menu
              // content via `createEmbeddedView` does not cause the content to be seen as "dirty"
              // by Angular. This causes the `@ContentChildren` for menu items within the menu to
              // not be updated by Angular. By explicitly marking for check here, we tell Angular that
              // it needs to check for new menu items and update the `@ContentChild` in `MatMenu`.
              // @breaking-change 9.0.0 Make change detector ref required

              if (this._changeDetectorRef) {
                this._changeDetectorRef.markForCheck();
              }

              this._portal.attach(this._outlet, context);

              this._attached.next();
            }
            /**
             * Detaches the content.
             * @docs-private
             */

          }, {
            key: "detach",
            value: function detach() {
              if (this._portal.isAttached) {
                this._portal.detach();
              }
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              if (this._outlet) {
                this._outlet.dispose();
              }
            }
          }]);

          return MatMenuContent;
        }();

        MatMenuContent.ɵfac = function MatMenuContent_Factory(t) {
          return new (t || MatMenuContent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ApplicationRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]));
        };

        MatMenuContent.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
          type: MatMenuContent,
          selectors: [["ng-template", "matMenuContent", ""]],
          features: [/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
            provide: MAT_MENU_CONTENT,
            useExisting: MatMenuContent
          }])]
        });
        return MatMenuContent;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Throws an exception for the case when menu trigger doesn't have a valid mat-menu instance
       * @docs-private
       */


      function throwMatMenuMissingError() {
        throw Error("matMenuTriggerFor: must pass in an mat-menu instance.\n\n    Example:\n      <mat-menu #menu=\"matMenu\"></mat-menu>\n      <button [matMenuTriggerFor]=\"menu\"></button>");
      }
      /**
       * Throws an exception for the case when menu's x-position value isn't valid.
       * In other words, it doesn't match 'before' or 'after'.
       * @docs-private
       */


      function throwMatMenuInvalidPositionX() {
        throw Error("xPosition value must be either 'before' or after'.\n      Example: <mat-menu xPosition=\"before\" #menu=\"matMenu\"></mat-menu>");
      }
      /**
       * Throws an exception for the case when menu's y-position value isn't valid.
       * In other words, it doesn't match 'above' or 'below'.
       * @docs-private
       */


      function throwMatMenuInvalidPositionY() {
        throw Error("yPosition value must be either 'above' or below'.\n      Example: <mat-menu yPosition=\"above\" #menu=\"matMenu\"></mat-menu>");
      }
      /**
       * Throws an exception for the case when a menu is assigned
       * to a trigger that is placed inside the same menu.
       * @docs-private
       */


      function throwMatMenuRecursiveError() {
        throw Error("matMenuTriggerFor: menu cannot contain its own trigger. Assign a menu that is " + "not a parent of the trigger or move the trigger outside of the menu.");
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Injection token used to provide the parent menu to menu-specific components.
       * @docs-private
       */


      var MAT_MENU_PANEL = /*@__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('MAT_MENU_PANEL');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // Boilerplate for applying mixins to MatMenuItem.

      /** @docs-private */

      var MatMenuItemBase = /*#__PURE__*/_createClass(function MatMenuItemBase() {
        _classCallCheck(this, MatMenuItemBase);
      });

      var _MatMenuItemMixinBase = /*@__PURE__*/Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["mixinDisableRipple"])( /*@__PURE__*/Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["mixinDisabled"])(MatMenuItemBase));

      var MatMenuItem = /*@__PURE__*/function () {
        var MatMenuItem = /*#__PURE__*/function (_MatMenuItemMixinBase2) {
          _inherits(MatMenuItem, _MatMenuItemMixinBase2);

          var _super6 = _createSuper(MatMenuItem);

          function MatMenuItem(_elementRef,
          /**
           * @deprecated `_document` parameter is no longer being used and will be removed.
           * @breaking-change 12.0.0
           */
          _document, _focusMonitor, _parentMenu) {
            var _this11;

            _classCallCheck(this, MatMenuItem);

            // @breaking-change 8.0.0 make `_focusMonitor` and `document` required params.
            _this11 = _super6.call(this);
            _this11._elementRef = _elementRef;
            _this11._focusMonitor = _focusMonitor;
            _this11._parentMenu = _parentMenu;
            /** ARIA role for the menu item. */

            _this11.role = 'menuitem';
            /** Stream that emits when the menu item is hovered. */

            _this11._hovered = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
            /** Stream that emits when the menu item is focused. */

            _this11._focused = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
            /** Whether the menu item is highlighted. */

            _this11._highlighted = false;
            /** Whether the menu item acts as a trigger for a sub-menu. */

            _this11._triggersSubmenu = false;

            if (_parentMenu && _parentMenu.addItem) {
              _parentMenu.addItem(_assertThisInitialized(_this11));
            }

            return _this11;
          }
          /** Focuses the menu item. */


          _createClass(MatMenuItem, [{
            key: "focus",
            value: function focus() {
              var origin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'program';
              var options = arguments.length > 1 ? arguments[1] : undefined;

              if (this._focusMonitor) {
                this._focusMonitor.focusVia(this._getHostElement(), origin, options);
              } else {
                this._getHostElement().focus(options);
              }

              this._focused.next(this);
            }
          }, {
            key: "ngAfterViewInit",
            value: function ngAfterViewInit() {
              if (this._focusMonitor) {
                // Start monitoring the element so it gets the appropriate focused classes. We want
                // to show the focus style for menu items only when the focus was not caused by a
                // mouse or touch interaction.
                this._focusMonitor.monitor(this._elementRef, false);
              }
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              if (this._focusMonitor) {
                this._focusMonitor.stopMonitoring(this._elementRef);
              }

              if (this._parentMenu && this._parentMenu.removeItem) {
                this._parentMenu.removeItem(this);
              }

              this._hovered.complete();

              this._focused.complete();
            }
            /** Used to set the `tabindex`. */

          }, {
            key: "_getTabIndex",
            value: function _getTabIndex() {
              return this.disabled ? '-1' : '0';
            }
            /** Returns the host DOM element. */

          }, {
            key: "_getHostElement",
            value: function _getHostElement() {
              return this._elementRef.nativeElement;
            }
            /** Prevents the default element actions if it is disabled. */
            // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
            // In Ivy the `host` bindings will be merged when this class is extended, whereas in
            // ViewEngine they're overwritten.
            // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
            // tslint:disable-next-line:no-host-decorator-in-concrete

          }, {
            key: "_checkDisabled",
            value: function _checkDisabled(event) {
              if (this.disabled) {
                event.preventDefault();
                event.stopPropagation();
              }
            }
            /** Emits to the hover stream. */
            // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
            // In Ivy the `host` bindings will be merged when this class is extended, whereas in
            // ViewEngine they're overwritten.
            // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
            // tslint:disable-next-line:no-host-decorator-in-concrete

          }, {
            key: "_handleMouseEnter",
            value: function _handleMouseEnter() {
              this._hovered.next(this);
            }
            /** Gets the label to be used when determining whether the option should be focused. */

          }, {
            key: "getLabel",
            value: function getLabel() {
              var _a, _b;

              var clone = this._elementRef.nativeElement.cloneNode(true);

              var icons = clone.querySelectorAll('mat-icon, .material-icons'); // Strip away icons so they don't show up in the text.

              for (var i = 0; i < icons.length; i++) {
                var icon = icons[i];
                (_a = icon.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(icon);
              }

              return ((_b = clone.textContent) === null || _b === void 0 ? void 0 : _b.trim()) || '';
            }
          }]);

          return MatMenuItem;
        }(_MatMenuItemMixinBase);

        MatMenuItem.ɵfac = function MatMenuItem_Factory(t) {
          return new (t || MatMenuItem)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_MENU_PANEL, 8));
        };

        MatMenuItem.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
          type: MatMenuItem,
          selectors: [["", "mat-menu-item", ""]],
          hostAttrs: [1, "mat-focus-indicator"],
          hostVars: 10,
          hostBindings: function MatMenuItem_HostBindings(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MatMenuItem_click_HostBindingHandler($event) {
                return ctx._checkDisabled($event);
              })("mouseenter", function MatMenuItem_mouseenter_HostBindingHandler() {
                return ctx._handleMouseEnter();
              });
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("role", ctx.role)("tabindex", ctx._getTabIndex())("aria-disabled", ctx.disabled.toString())("disabled", ctx.disabled || null);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-menu-item", true)("mat-menu-item-highlighted", ctx._highlighted)("mat-menu-item-submenu-trigger", ctx._triggersSubmenu);
            }
          },
          inputs: {
            disabled: "disabled",
            disableRipple: "disableRipple",
            role: "role"
          },
          exportAs: ["matMenuItem"],
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
          attrs: _c0,
          ngContentSelectors: _c1,
          decls: 2,
          vars: 2,
          consts: [["matRipple", "", 1, "mat-menu-ripple", 3, "matRippleDisabled", "matRippleTrigger"]],
          template: function MatMenuItem_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 0);
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleTrigger", ctx._getHostElement());
            }
          },
          directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatRipple"]],
          encapsulation: 2,
          changeDetection: 0
        });
        return MatMenuItem;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Injection token to be used to override the default options for `mat-menu`. */


      var MAT_MENU_DEFAULT_OPTIONS = /*@__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('mat-menu-default-options', {
        providedIn: 'root',
        factory: MAT_MENU_DEFAULT_OPTIONS_FACTORY
      });
      /** @docs-private */

      function MAT_MENU_DEFAULT_OPTIONS_FACTORY() {
        return {
          overlapTrigger: false,
          xPosition: 'after',
          yPosition: 'below',
          backdropClass: 'cdk-overlay-transparent-backdrop'
        };
      }
      /**
       * Start elevation for the menu panel.
       * @docs-private
       */


      var MAT_MENU_BASE_ELEVATION = 4;
      var menuPanelUid = 0;

      var _MatMenuBase = /*@__PURE__*/function () {
        var _MatMenuBase = /*#__PURE__*/function () {
          function _MatMenuBase(_elementRef, _ngZone, _defaultOptions) {
            _classCallCheck(this, _MatMenuBase);

            this._elementRef = _elementRef;
            this._ngZone = _ngZone;
            this._defaultOptions = _defaultOptions;
            this._xPosition = this._defaultOptions.xPosition;
            this._yPosition = this._defaultOptions.yPosition;
            /** Only the direct descendant menu items. */

            this._directDescendantItems = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["QueryList"]();
            /** Subscription to tab events on the menu panel */

            this._tabSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
            /** Config object to be passed into the menu's ngClass */

            this._classList = {};
            /** Current state of the panel animation. */

            this._panelAnimationState = 'void';
            /** Emits whenever an animation on the menu completes. */

            this._animationDone = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
            /** Class or list of classes to be added to the overlay panel. */

            this.overlayPanelClass = this._defaultOptions.overlayPanelClass || '';
            /** Class to be added to the backdrop element. */

            this.backdropClass = this._defaultOptions.backdropClass;
            this._overlapTrigger = this._defaultOptions.overlapTrigger;
            this._hasBackdrop = this._defaultOptions.hasBackdrop;
            /** Event emitted when the menu is closed. */

            this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
            /**
             * Event emitted when the menu is closed.
             * @deprecated Switch to `closed` instead
             * @breaking-change 8.0.0
             */

            this.close = this.closed;
            this.panelId = "mat-menu-panel-".concat(menuPanelUid++);
          }
          /** Position of the menu in the X axis. */


          _createClass(_MatMenuBase, [{
            key: "xPosition",
            get: function get() {
              return this._xPosition;
            },
            set: function set(value) {
              if (value !== 'before' && value !== 'after' && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throwMatMenuInvalidPositionX();
              }

              this._xPosition = value;
              this.setPositionClasses();
            }
            /** Position of the menu in the Y axis. */

          }, {
            key: "yPosition",
            get: function get() {
              return this._yPosition;
            },
            set: function set(value) {
              if (value !== 'above' && value !== 'below' && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throwMatMenuInvalidPositionY();
              }

              this._yPosition = value;
              this.setPositionClasses();
            }
            /** Whether the menu should overlap its trigger. */

          }, {
            key: "overlapTrigger",
            get: function get() {
              return this._overlapTrigger;
            },
            set: function set(value) {
              this._overlapTrigger = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
            }
            /** Whether the menu has a backdrop. */

          }, {
            key: "hasBackdrop",
            get: function get() {
              return this._hasBackdrop;
            },
            set: function set(value) {
              this._hasBackdrop = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
            }
            /**
             * This method takes classes set on the host mat-menu element and applies them on the
             * menu template that displays in the overlay container.  Otherwise, it's difficult
             * to style the containing menu from outside the component.
             * @param classes list of class names
             */

          }, {
            key: "panelClass",
            set: function set(classes) {
              var _this12 = this;

              var previousPanelClass = this._previousPanelClass;

              if (previousPanelClass && previousPanelClass.length) {
                previousPanelClass.split(' ').forEach(function (className) {
                  _this12._classList[className] = false;
                });
              }

              this._previousPanelClass = classes;

              if (classes && classes.length) {
                classes.split(' ').forEach(function (className) {
                  _this12._classList[className] = true;
                });
                this._elementRef.nativeElement.className = '';
              }
            }
            /**
             * This method takes classes set on the host mat-menu element and applies them on the
             * menu template that displays in the overlay container.  Otherwise, it's difficult
             * to style the containing menu from outside the component.
             * @deprecated Use `panelClass` instead.
             * @breaking-change 8.0.0
             */

          }, {
            key: "classList",
            get: function get() {
              return this.panelClass;
            },
            set: function set(classes) {
              this.panelClass = classes;
            }
          }, {
            key: "ngOnInit",
            value: function ngOnInit() {
              this.setPositionClasses();
            }
          }, {
            key: "ngAfterContentInit",
            value: function ngAfterContentInit() {
              var _this13 = this;

              this._updateDirectDescendants();

              this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusKeyManager"](this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd();
              this._tabSubscription = this._keyManager.tabOut.subscribe(function () {
                return _this13.closed.emit('tab');
              }); // If a user manually (programatically) focuses a menu item, we need to reflect that focus
              // change back to the key manager. Note that we don't need to unsubscribe here because _focused
              // is internal and we know that it gets completed on destroy.

              this._directDescendantItems.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(this._directDescendantItems), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (items) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"]).apply(void 0, _toConsumableArray(items.map(function (item) {
                  return item._focused;
                })));
              })).subscribe(function (focusedItem) {
                return _this13._keyManager.updateActiveItem(focusedItem);
              });
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              this._directDescendantItems.destroy();

              this._tabSubscription.unsubscribe();

              this.closed.complete();
            }
            /** Stream that emits whenever the hovered menu item changes. */

          }, {
            key: "_hovered",
            value: function _hovered() {
              // Coerce the `changes` property because Angular types it as `Observable<any>`
              var itemChanges = this._directDescendantItems.changes;
              return itemChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(this._directDescendantItems), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (items) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"]).apply(void 0, _toConsumableArray(items.map(function (item) {
                  return item._hovered;
                })));
              }));
            }
            /*
             * Registers a menu item with the menu.
             * @docs-private
             * @deprecated No longer being used. To be removed.
             * @breaking-change 9.0.0
             */

          }, {
            key: "addItem",
            value: function addItem(_item) {}
            /**
             * Removes an item from the menu.
             * @docs-private
             * @deprecated No longer being used. To be removed.
             * @breaking-change 9.0.0
             */

          }, {
            key: "removeItem",
            value: function removeItem(_item) {}
            /** Handle a keyboard event from the menu, delegating to the appropriate action. */

          }, {
            key: "_handleKeydown",
            value: function _handleKeydown(event) {
              var keyCode = event.keyCode;
              var manager = this._keyManager;

              switch (keyCode) {
                case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["ESCAPE"]:
                  if (!Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["hasModifierKey"])(event)) {
                    event.preventDefault();
                    this.closed.emit('keydown');
                  }

                  break;

                case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["LEFT_ARROW"]:
                  if (this.parentMenu && this.direction === 'ltr') {
                    this.closed.emit('keydown');
                  }

                  break;

                case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["RIGHT_ARROW"]:
                  if (this.parentMenu && this.direction === 'rtl') {
                    this.closed.emit('keydown');
                  }

                  break;

                default:
                  if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["UP_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["DOWN_ARROW"]) {
                    manager.setFocusOrigin('keyboard');
                  }

                  manager.onKeydown(event);
              }
            }
            /**
             * Focus the first item in the menu.
             * @param origin Action from which the focus originated. Used to set the correct styling.
             */

          }, {
            key: "focusFirstItem",
            value: function focusFirstItem() {
              var _this14 = this;

              var origin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'program';

              // When the content is rendered lazily, it takes a bit before the items are inside the DOM.
              if (this.lazyContent) {
                this._ngZone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function () {
                  return _this14._focusFirstItem(origin);
                });
              } else {
                this._focusFirstItem(origin);
              }
            }
            /**
             * Actual implementation that focuses the first item. Needs to be separated
             * out so we don't repeat the same logic in the public `focusFirstItem` method.
             */

          }, {
            key: "_focusFirstItem",
            value: function _focusFirstItem(origin) {
              var manager = this._keyManager;
              manager.setFocusOrigin(origin).setFirstItemActive(); // If there's no active item at this point, it means that all the items are disabled.
              // Move focus to the menu panel so keyboard events like Escape still work. Also this will
              // give _some_ feedback to screen readers.

              if (!manager.activeItem && this._directDescendantItems.length) {
                var element = this._directDescendantItems.first._getHostElement().parentElement; // Because the `mat-menu` is at the DOM insertion point, not inside the overlay, we don't
                // have a nice way of getting a hold of the menu panel. We can't use a `ViewChild` either
                // because the panel is inside an `ng-template`. We work around it by starting from one of
                // the items and walking up the DOM.


                while (element) {
                  if (element.getAttribute('role') === 'menu') {
                    element.focus();
                    break;
                  } else {
                    element = element.parentElement;
                  }
                }
              }
            }
            /**
             * Resets the active item in the menu. This is used when the menu is opened, allowing
             * the user to start from the first option when pressing the down arrow.
             */

          }, {
            key: "resetActiveItem",
            value: function resetActiveItem() {
              this._keyManager.setActiveItem(-1);
            }
            /**
             * Sets the menu panel elevation.
             * @param depth Number of parent menus that come before the menu.
             */

          }, {
            key: "setElevation",
            value: function setElevation(depth) {
              // The elevation starts at the base and increases by one for each level.
              // Capped at 24 because that's the maximum elevation defined in the Material design spec.
              var elevation = Math.min(MAT_MENU_BASE_ELEVATION + depth, 24);
              var newElevation = "mat-elevation-z".concat(elevation);
              var customElevation = Object.keys(this._classList).find(function (c) {
                return c.startsWith('mat-elevation-z');
              });

              if (!customElevation || customElevation === this._previousElevation) {
                if (this._previousElevation) {
                  this._classList[this._previousElevation] = false;
                }

                this._classList[newElevation] = true;
                this._previousElevation = newElevation;
              }
            }
            /**
             * Adds classes to the menu panel based on its position. Can be used by
             * consumers to add specific styling based on the position.
             * @param posX Position of the menu along the x axis.
             * @param posY Position of the menu along the y axis.
             * @docs-private
             */

          }, {
            key: "setPositionClasses",
            value: function setPositionClasses() {
              var posX = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.xPosition;
              var posY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.yPosition;
              var classes = this._classList;
              classes['mat-menu-before'] = posX === 'before';
              classes['mat-menu-after'] = posX === 'after';
              classes['mat-menu-above'] = posY === 'above';
              classes['mat-menu-below'] = posY === 'below';
            }
            /** Starts the enter animation. */

          }, {
            key: "_startAnimation",
            value: function _startAnimation() {
              // @breaking-change 8.0.0 Combine with _resetAnimation.
              this._panelAnimationState = 'enter';
            }
            /** Resets the panel animation to its initial state. */

          }, {
            key: "_resetAnimation",
            value: function _resetAnimation() {
              // @breaking-change 8.0.0 Combine with _startAnimation.
              this._panelAnimationState = 'void';
            }
            /** Callback that is invoked when the panel animation completes. */

          }, {
            key: "_onAnimationDone",
            value: function _onAnimationDone(event) {
              this._animationDone.next(event);

              this._isAnimating = false;
            }
          }, {
            key: "_onAnimationStart",
            value: function _onAnimationStart(event) {
              this._isAnimating = true; // Scroll the content element to the top as soon as the animation starts. This is necessary,
              // because we move focus to the first item while it's still being animated, which can throw
              // the browser off when it determines the scroll position. Alternatively we can move focus
              // when the animation is done, however moving focus asynchronously will interrupt screen
              // readers which are in the process of reading out the menu already. We take the `element`
              // from the `event` since we can't use a `ViewChild` to access the pane.

              if (event.toState === 'enter' && this._keyManager.activeItemIndex === 0) {
                event.element.scrollTop = 0;
              }
            }
            /**
             * Sets up a stream that will keep track of any newly-added menu items and will update the list
             * of direct descendants. We collect the descendants this way, because `_allItems` can include
             * items that are part of child menus, and using a custom way of registering items is unreliable
             * when it comes to maintaining the item order.
             */

          }, {
            key: "_updateDirectDescendants",
            value: function _updateDirectDescendants() {
              var _this15 = this;

              this._allItems.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(this._allItems)).subscribe(function (items) {
                _this15._directDescendantItems.reset(items.filter(function (item) {
                  return item._parentMenu === _this15;
                }));

                _this15._directDescendantItems.notifyOnChanges();
              });
            }
          }]);

          return _MatMenuBase;
        }();

        _MatMenuBase.ɵfac = function _MatMenuBase_Factory(t) {
          return new (t || _MatMenuBase)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_MENU_DEFAULT_OPTIONS));
        };

        _MatMenuBase.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
          type: _MatMenuBase,
          contentQueries: function _MatMenuBase_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MAT_MENU_CONTENT, true);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MatMenuItem, true);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MatMenuItem, false);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.lazyContent = _t.first);
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._allItems = _t);
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.items = _t);
            }
          },
          viewQuery: function _MatMenuBase_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"], true);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.templateRef = _t.first);
            }
          },
          inputs: {
            backdropClass: "backdropClass",
            xPosition: "xPosition",
            yPosition: "yPosition",
            overlapTrigger: "overlapTrigger",
            hasBackdrop: "hasBackdrop",
            panelClass: ["class", "panelClass"],
            classList: "classList",
            ariaLabel: ["aria-label", "ariaLabel"],
            ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
            ariaDescribedby: ["aria-describedby", "ariaDescribedby"]
          },
          outputs: {
            closed: "closed",
            close: "close"
          }
        });
        return _MatMenuBase;
      }();

      var MatMenu = /*@__PURE__*/function () {
        var MatMenu = /*#__PURE__*/function (_MatMenuBase2) {
          _inherits(MatMenu, _MatMenuBase2);

          var _super7 = _createSuper(MatMenu);

          function MatMenu() {
            _classCallCheck(this, MatMenu);

            return _super7.apply(this, arguments);
          }

          return _createClass(MatMenu);
        }(_MatMenuBase);

        MatMenu.ɵfac = function MatMenu_Factory(t) {
          return ɵMatMenu_BaseFactory(t || MatMenu);
        };

        MatMenu.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
          type: MatMenu,
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]]
        });
        return MatMenu;
      }();

      var ɵMatMenu_BaseFactory =
      /*@__PURE__*/

      /*@__PURE__*/
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](MatMenu);

      var _MatMenu = /*@__PURE__*/function () {
        var _MatMenu = /*#__PURE__*/function (_MatMenu2) {
          _inherits(_MatMenu, _MatMenu2);

          var _super8 = _createSuper(_MatMenu);

          function _MatMenu(elementRef, ngZone, defaultOptions) {
            _classCallCheck(this, _MatMenu);

            return _super8.call(this, elementRef, ngZone, defaultOptions);
          }

          return _createClass(_MatMenu);
        }(MatMenu);

        _MatMenu.ɵfac = function _MatMenu_Factory(t) {
          return new (t || _MatMenu)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_MENU_DEFAULT_OPTIONS));
        };

        _MatMenu.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
          type: _MatMenu,
          selectors: [["mat-menu"]],
          exportAs: ["matMenu"],
          features: [/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
            provide: MAT_MENU_PANEL,
            useExisting: MatMenu
          }, {
            provide: MatMenu,
            useExisting: _MatMenu
          }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
          ngContentSelectors: _c1,
          decls: 1,
          vars: 0,
          consts: [["tabindex", "-1", "role", "menu", 1, "mat-menu-panel", 3, "id", "ngClass", "keydown", "click"], [1, "mat-menu-content"]],
          template: function _MatMenu_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, _MatMenu_ng_template_0_Template, 3, 6, "ng-template");
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"]],
          styles: [".mat-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;max-height:calc(100vh - 48px);border-radius:4px;outline:0;min-height:64px}.mat-menu-panel.ng-animating{pointer-events:none}.cdk-high-contrast-active .mat-menu-panel{outline:solid 1px}.mat-menu-content:not(:empty){padding-top:8px;padding-bottom:8px}.mat-menu-item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative}.mat-menu-item::-moz-focus-inner{border:0}.mat-menu-item[disabled]{cursor:default}[dir=rtl] .mat-menu-item{text-align:right}.mat-menu-item .mat-icon{margin-right:16px;vertical-align:middle}.mat-menu-item .mat-icon svg{vertical-align:top}[dir=rtl] .mat-menu-item .mat-icon{margin-left:16px;margin-right:0}.mat-menu-item[disabled]{pointer-events:none}.cdk-high-contrast-active .mat-menu-item.cdk-program-focused,.cdk-high-contrast-active .mat-menu-item.cdk-keyboard-focused,.cdk-high-contrast-active .mat-menu-item-highlighted{outline:dotted 1px}.mat-menu-item-submenu-trigger{padding-right:32px}.mat-menu-item-submenu-trigger::after{width:0;height:0;border-style:solid;border-width:5px 0 5px 5px;border-color:transparent transparent transparent currentColor;content:\"\";display:inline-block;position:absolute;top:50%;right:16px;transform:translateY(-50%)}[dir=rtl] .mat-menu-item-submenu-trigger{padding-right:16px;padding-left:32px}[dir=rtl] .mat-menu-item-submenu-trigger::after{right:auto;left:16px;transform:rotateY(180deg) translateY(-50%)}button.mat-menu-item{width:100%}.mat-menu-item .mat-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n"],
          encapsulation: 2,
          data: {
            animation: [matMenuAnimations.transformMenu, matMenuAnimations.fadeInItems]
          },
          changeDetection: 0
        });
        return _MatMenu;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Injection token that determines the scroll handling while the menu is open. */


      var MAT_MENU_SCROLL_STRATEGY = /*@__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('mat-menu-scroll-strategy');
      /** @docs-private */

      function MAT_MENU_SCROLL_STRATEGY_FACTORY(overlay) {
        return function () {
          return overlay.scrollStrategies.reposition();
        };
      }
      /** @docs-private */


      var MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER = {
        provide: MAT_MENU_SCROLL_STRATEGY,
        deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"]],
        useFactory: MAT_MENU_SCROLL_STRATEGY_FACTORY
      };
      /** Default top padding of the menu panel. */

      var MENU_PANEL_TOP_PADDING = 8;
      /** Options for binding a passive event listener. */

      var passiveEventListenerOptions = /*@__PURE__*/Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["normalizePassiveListenerOptions"])({
        passive: true
      });

      var MatMenuTrigger = /*@__PURE__*/function () {
        var MatMenuTrigger = /*#__PURE__*/function () {
          function MatMenuTrigger(_overlay, _element, _viewContainerRef, scrollStrategy, // `MatMenu` is always used in combination with a `MatMenuTrigger`.
          // tslint:disable-next-line: lightweight-tokens
          _parentMenu, // `MatMenuTrigger` is commonly used in combination with a `MatMenuItem`.
          // tslint:disable-next-line: lightweight-tokens
          _menuItemInstance, _dir, // TODO(crisbeto): make the _focusMonitor required when doing breaking changes.
          // @breaking-change 8.0.0
          _focusMonitor) {
            var _this16 = this;

            _classCallCheck(this, MatMenuTrigger);

            this._overlay = _overlay;
            this._element = _element;
            this._viewContainerRef = _viewContainerRef;
            this._parentMenu = _parentMenu;
            this._menuItemInstance = _menuItemInstance;
            this._dir = _dir;
            this._focusMonitor = _focusMonitor;
            this._overlayRef = null;
            this._menuOpen = false;
            this._closingActionsSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
            this._hoverSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
            this._menuCloseSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
            /**
             * Handles touch start events on the trigger.
             * Needs to be an arrow function so we can easily use addEventListener and removeEventListener.
             */

            this._handleTouchStart = function () {
              return _this16._openedBy = 'touch';
            }; // Tracking input type is necessary so it's possible to only auto-focus
            // the first item of the list when the menu is opened via the keyboard


            this._openedBy = null;
            /**
             * Whether focus should be restored when the menu is closed.
             * Note that disabling this option can have accessibility implications
             * and it's up to you to manage focus, if you decide to turn it off.
             */

            this.restoreFocus = true;
            /** Event emitted when the associated menu is opened. */

            this.menuOpened = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
            /**
             * Event emitted when the associated menu is opened.
             * @deprecated Switch to `menuOpened` instead
             * @breaking-change 8.0.0
             */
            // tslint:disable-next-line:no-output-on-prefix

            this.onMenuOpen = this.menuOpened;
            /** Event emitted when the associated menu is closed. */

            this.menuClosed = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
            /**
             * Event emitted when the associated menu is closed.
             * @deprecated Switch to `menuClosed` instead
             * @breaking-change 8.0.0
             */
            // tslint:disable-next-line:no-output-on-prefix

            this.onMenuClose = this.menuClosed;

            _element.nativeElement.addEventListener('touchstart', this._handleTouchStart, passiveEventListenerOptions);

            if (_menuItemInstance) {
              _menuItemInstance._triggersSubmenu = this.triggersSubmenu();
            }

            this._scrollStrategy = scrollStrategy;
          }
          /**
           * @deprecated
           * @breaking-change 8.0.0
           */


          _createClass(MatMenuTrigger, [{
            key: "_deprecatedMatMenuTriggerFor",
            get: function get() {
              return this.menu;
            },
            set: function set(v) {
              this.menu = v;
            }
            /** References the menu instance that the trigger is associated with. */

          }, {
            key: "menu",
            get: function get() {
              return this._menu;
            },
            set: function set(menu) {
              var _this17 = this;

              if (menu === this._menu) {
                return;
              }

              this._menu = menu;

              this._menuCloseSubscription.unsubscribe();

              if (menu) {
                if (menu === this._parentMenu && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                  throwMatMenuRecursiveError();
                }

                this._menuCloseSubscription = menu.close.subscribe(function (reason) {
                  _this17._destroyMenu(); // If a click closed the menu, we should close the entire chain of nested menus.


                  if ((reason === 'click' || reason === 'tab') && _this17._parentMenu) {
                    _this17._parentMenu.closed.emit(reason);
                  }
                });
              }
            }
          }, {
            key: "ngAfterContentInit",
            value: function ngAfterContentInit() {
              this._checkMenu();

              this._handleHover();
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              if (this._overlayRef) {
                this._overlayRef.dispose();

                this._overlayRef = null;
              }

              this._element.nativeElement.removeEventListener('touchstart', this._handleTouchStart, passiveEventListenerOptions);

              this._menuCloseSubscription.unsubscribe();

              this._closingActionsSubscription.unsubscribe();

              this._hoverSubscription.unsubscribe();
            }
            /** Whether the menu is open. */

          }, {
            key: "menuOpen",
            get: function get() {
              return this._menuOpen;
            }
            /** The text direction of the containing app. */

          }, {
            key: "dir",
            get: function get() {
              return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
            }
            /** Whether the menu triggers a sub-menu or a top-level one. */

          }, {
            key: "triggersSubmenu",
            value: function triggersSubmenu() {
              return !!(this._menuItemInstance && this._parentMenu);
            }
            /** Toggles the menu between the open and closed states. */

          }, {
            key: "toggleMenu",
            value: function toggleMenu() {
              return this._menuOpen ? this.closeMenu() : this.openMenu();
            }
            /** Opens the menu. */

          }, {
            key: "openMenu",
            value: function openMenu() {
              var _this18 = this;

              if (this._menuOpen) {
                return;
              }

              this._checkMenu();

              var overlayRef = this._createOverlay();

              var overlayConfig = overlayRef.getConfig();

              this._setPosition(overlayConfig.positionStrategy);

              overlayConfig.hasBackdrop = this.menu.hasBackdrop == null ? !this.triggersSubmenu() : this.menu.hasBackdrop;
              overlayRef.attach(this._getPortal());

              if (this.menu.lazyContent) {
                this.menu.lazyContent.attach(this.menuData);
              }

              this._closingActionsSubscription = this._menuClosingActions().subscribe(function () {
                return _this18.closeMenu();
              });

              this._initMenu();

              if (this.menu instanceof MatMenu) {
                this.menu._startAnimation();
              }
            }
            /** Closes the menu. */

          }, {
            key: "closeMenu",
            value: function closeMenu() {
              this.menu.close.emit();
            }
            /**
             * Focuses the menu trigger.
             * @param origin Source of the menu trigger's focus.
             */

          }, {
            key: "focus",
            value: function focus() {
              var origin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'program';
              var options = arguments.length > 1 ? arguments[1] : undefined;

              if (this._focusMonitor) {
                this._focusMonitor.focusVia(this._element, origin, options);
              } else {
                this._element.nativeElement.focus(options);
              }
            }
            /** Closes the menu and does the necessary cleanup. */

          }, {
            key: "_destroyMenu",
            value: function _destroyMenu() {
              var _this19 = this;

              if (!this._overlayRef || !this.menuOpen) {
                return;
              }

              var menu = this.menu;

              this._closingActionsSubscription.unsubscribe();

              this._overlayRef.detach();

              this._restoreFocus();

              if (menu instanceof MatMenu) {
                menu._resetAnimation();

                if (menu.lazyContent) {
                  // Wait for the exit animation to finish before detaching the content.
                  menu._animationDone.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (event) {
                    return event.toState === 'void';
                  }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), // Interrupt if the content got re-attached.
                  Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(menu.lazyContent._attached)).subscribe({
                    next: function next() {
                      return menu.lazyContent.detach();
                    },
                    // No matter whether the content got re-attached, reset the menu.
                    complete: function complete() {
                      return _this19._setIsMenuOpen(false);
                    }
                  });
                } else {
                  this._setIsMenuOpen(false);
                }
              } else {
                this._setIsMenuOpen(false);

                if (menu.lazyContent) {
                  menu.lazyContent.detach();
                }
              }
            }
            /**
             * This method sets the menu state to open and focuses the first item if
             * the menu was opened via the keyboard.
             */

          }, {
            key: "_initMenu",
            value: function _initMenu() {
              this.menu.parentMenu = this.triggersSubmenu() ? this._parentMenu : undefined;
              this.menu.direction = this.dir;

              this._setMenuElevation();

              this._setIsMenuOpen(true);

              this.menu.focusFirstItem(this._openedBy || 'program');
            }
            /** Updates the menu elevation based on the amount of parent menus that it has. */

          }, {
            key: "_setMenuElevation",
            value: function _setMenuElevation() {
              if (this.menu.setElevation) {
                var depth = 0;
                var parentMenu = this.menu.parentMenu;

                while (parentMenu) {
                  depth++;
                  parentMenu = parentMenu.parentMenu;
                }

                this.menu.setElevation(depth);
              }
            }
            /** Restores focus to the element that was focused before the menu was open. */

          }, {
            key: "_restoreFocus",
            value: function _restoreFocus() {
              // We should reset focus if the user is navigating using a keyboard or
              // if we have a top-level trigger which might cause focus to be lost
              // when clicking on the backdrop.
              if (this.restoreFocus) {
                if (!this._openedBy) {
                  // Note that the focus style will show up both for `program` and
                  // `keyboard` so we don't have to specify which one it is.
                  this.focus();
                } else if (!this.triggersSubmenu()) {
                  this.focus(this._openedBy);
                }
              }

              this._openedBy = null;
            } // set state rather than toggle to support triggers sharing a menu

          }, {
            key: "_setIsMenuOpen",
            value: function _setIsMenuOpen(isOpen) {
              this._menuOpen = isOpen;
              this._menuOpen ? this.menuOpened.emit() : this.menuClosed.emit();

              if (this.triggersSubmenu()) {
                this._menuItemInstance._highlighted = isOpen;
              }
            }
            /**
             * This method checks that a valid instance of MatMenu has been passed into
             * matMenuTriggerFor. If not, an exception is thrown.
             */

          }, {
            key: "_checkMenu",
            value: function _checkMenu() {
              if (!this.menu && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throwMatMenuMissingError();
              }
            }
            /**
             * This method creates the overlay from the provided menu's template and saves its
             * OverlayRef so that it can be attached to the DOM when openMenu is called.
             */

          }, {
            key: "_createOverlay",
            value: function _createOverlay() {
              if (!this._overlayRef) {
                var config = this._getOverlayConfig();

                this._subscribeToPositions(config.positionStrategy);

                this._overlayRef = this._overlay.create(config); // Consume the `keydownEvents` in order to prevent them from going to another overlay.
                // Ideally we'd also have our keyboard event logic in here, however doing so will
                // break anybody that may have implemented the `MatMenuPanel` themselves.

                this._overlayRef.keydownEvents().subscribe();
              }

              return this._overlayRef;
            }
            /**
             * This method builds the configuration object needed to create the overlay, the OverlayState.
             * @returns OverlayConfig
             */

          }, {
            key: "_getOverlayConfig",
            value: function _getOverlayConfig() {
              return new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayConfig"]({
                positionStrategy: this._overlay.position().flexibleConnectedTo(this._element).withLockedPosition().withTransformOriginOn('.mat-menu-panel, .mat-mdc-menu-panel'),
                backdropClass: this.menu.backdropClass || 'cdk-overlay-transparent-backdrop',
                panelClass: this.menu.overlayPanelClass,
                scrollStrategy: this._scrollStrategy(),
                direction: this._dir
              });
            }
            /**
             * Listens to changes in the position of the overlay and sets the correct classes
             * on the menu based on the new position. This ensures the animation origin is always
             * correct, even if a fallback position is used for the overlay.
             */

          }, {
            key: "_subscribeToPositions",
            value: function _subscribeToPositions(position) {
              var _this20 = this;

              if (this.menu.setPositionClasses) {
                position.positionChanges.subscribe(function (change) {
                  var posX = change.connectionPair.overlayX === 'start' ? 'after' : 'before';
                  var posY = change.connectionPair.overlayY === 'top' ? 'below' : 'above';

                  _this20.menu.setPositionClasses(posX, posY);
                });
              }
            }
            /**
             * Sets the appropriate positions on a position strategy
             * so the overlay connects with the trigger correctly.
             * @param positionStrategy Strategy whose position to update.
             */

          }, {
            key: "_setPosition",
            value: function _setPosition(positionStrategy) {
              var _ref = this.menu.xPosition === 'before' ? ['end', 'start'] : ['start', 'end'],
                  _ref2 = _slicedToArray(_ref, 2),
                  originX = _ref2[0],
                  originFallbackX = _ref2[1];

              var _ref3 = this.menu.yPosition === 'above' ? ['bottom', 'top'] : ['top', 'bottom'],
                  _ref4 = _slicedToArray(_ref3, 2),
                  overlayY = _ref4[0],
                  overlayFallbackY = _ref4[1];

              var originY = overlayY,
                  originFallbackY = overlayFallbackY;
              var overlayX = originX,
                  overlayFallbackX = originFallbackX;
              var offsetY = 0;

              if (this.triggersSubmenu()) {
                // When the menu is a sub-menu, it should always align itself
                // to the edges of the trigger, instead of overlapping it.
                overlayFallbackX = originX = this.menu.xPosition === 'before' ? 'start' : 'end';
                originFallbackX = overlayX = originX === 'end' ? 'start' : 'end';
                offsetY = overlayY === 'bottom' ? MENU_PANEL_TOP_PADDING : -MENU_PANEL_TOP_PADDING;
              } else if (!this.menu.overlapTrigger) {
                originY = overlayY === 'top' ? 'bottom' : 'top';
                originFallbackY = overlayFallbackY === 'top' ? 'bottom' : 'top';
              }

              positionStrategy.withPositions([{
                originX: originX,
                originY: originY,
                overlayX: overlayX,
                overlayY: overlayY,
                offsetY: offsetY
              }, {
                originX: originFallbackX,
                originY: originY,
                overlayX: overlayFallbackX,
                overlayY: overlayY,
                offsetY: offsetY
              }, {
                originX: originX,
                originY: originFallbackY,
                overlayX: overlayX,
                overlayY: overlayFallbackY,
                offsetY: -offsetY
              }, {
                originX: originFallbackX,
                originY: originFallbackY,
                overlayX: overlayFallbackX,
                overlayY: overlayFallbackY,
                offsetY: -offsetY
              }]);
            }
            /** Returns a stream that emits whenever an action that should close the menu occurs. */

          }, {
            key: "_menuClosingActions",
            value: function _menuClosingActions() {
              var _this21 = this;

              var backdrop = this._overlayRef.backdropClick();

              var detachments = this._overlayRef.detachments();

              var parentClose = this._parentMenu ? this._parentMenu.closed : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])();
              var hover = this._parentMenu ? this._parentMenu._hovered().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (active) {
                return active !== _this21._menuItemInstance;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function () {
                return _this21._menuOpen;
              })) : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])();
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(backdrop, parentClose, hover, detachments);
            }
            /** Handles mouse presses on the trigger. */

          }, {
            key: "_handleMousedown",
            value: function _handleMousedown(event) {
              if (!Object(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["isFakeMousedownFromScreenReader"])(event)) {
                // Since right or middle button clicks won't trigger the `click` event,
                // we shouldn't consider the menu as opened by mouse in those cases.
                this._openedBy = event.button === 0 ? 'mouse' : null; // Since clicking on the trigger won't close the menu if it opens a sub-menu,
                // we should prevent focus from moving onto it via click to avoid the
                // highlight from lingering on the menu item.

                if (this.triggersSubmenu()) {
                  event.preventDefault();
                }
              }
            }
            /** Handles key presses on the trigger. */

          }, {
            key: "_handleKeydown",
            value: function _handleKeydown(event) {
              var keyCode = event.keyCode;

              if (this.triggersSubmenu() && (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["RIGHT_ARROW"] && this.dir === 'ltr' || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["LEFT_ARROW"] && this.dir === 'rtl')) {
                this.openMenu();
              }
            }
            /** Handles click events on the trigger. */

          }, {
            key: "_handleClick",
            value: function _handleClick(event) {
              if (this.triggersSubmenu()) {
                // Stop event propagation to avoid closing the parent menu.
                event.stopPropagation();
                this.openMenu();
              } else {
                this.toggleMenu();
              }
            }
            /** Handles the cases where the user hovers over the trigger. */

          }, {
            key: "_handleHover",
            value: function _handleHover() {
              var _this22 = this;

              // Subscribe to changes in the hovered item in order to toggle the panel.
              if (!this.triggersSubmenu()) {
                return;
              }

              this._hoverSubscription = this._parentMenu._hovered() // Since we might have multiple competing triggers for the same menu (e.g. a sub-menu
              // with different data and triggers), we have to delay it by a tick to ensure that
              // it won't be closed immediately after it is opened.
              .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (active) {
                return active === _this22._menuItemInstance && !active.disabled;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["delay"])(0, rxjs__WEBPACK_IMPORTED_MODULE_4__["asapScheduler"])).subscribe(function () {
                _this22._openedBy = 'mouse'; // If the same menu is used between multiple triggers, it might still be animating
                // while the new trigger tries to re-open it. Wait for the animation to finish
                // before doing so. Also interrupt if the user moves to another item.

                if (_this22.menu instanceof MatMenu && _this22.menu._isAnimating) {
                  // We need the `delay(0)` here in order to avoid
                  // 'changed after checked' errors in some cases. See #12194.
                  _this22.menu._animationDone.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["delay"])(0, rxjs__WEBPACK_IMPORTED_MODULE_4__["asapScheduler"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(_this22._parentMenu._hovered())).subscribe(function () {
                    return _this22.openMenu();
                  });
                } else {
                  _this22.openMenu();
                }
              });
            }
            /** Gets the portal that should be attached to the overlay. */

          }, {
            key: "_getPortal",
            value: function _getPortal() {
              // Note that we can avoid this check by keeping the portal on the menu panel.
              // While it would be cleaner, we'd have to introduce another required method on
              // `MatMenuPanel`, making it harder to consume.
              if (!this._portal || this._portal.templateRef !== this.menu.templateRef) {
                this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__["TemplatePortal"](this.menu.templateRef, this._viewContainerRef);
              }

              return this._portal;
            }
          }]);

          return MatMenuTrigger;
        }();

        MatMenuTrigger.ɵfac = function MatMenuTrigger_Factory(t) {
          return new (t || MatMenuTrigger)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_MENU_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MatMenu, 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MatMenuItem, 10), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]));
        };

        MatMenuTrigger.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
          type: MatMenuTrigger,
          selectors: [["", "mat-menu-trigger-for", ""], ["", "matMenuTriggerFor", ""]],
          hostAttrs: ["aria-haspopup", "true", 1, "mat-menu-trigger"],
          hostVars: 2,
          hostBindings: function MatMenuTrigger_HostBindings(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mousedown", function MatMenuTrigger_mousedown_HostBindingHandler($event) {
                return ctx._handleMousedown($event);
              })("keydown", function MatMenuTrigger_keydown_HostBindingHandler($event) {
                return ctx._handleKeydown($event);
              })("click", function MatMenuTrigger_click_HostBindingHandler($event) {
                return ctx._handleClick($event);
              });
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-expanded", ctx.menuOpen || null)("aria-controls", ctx.menuOpen ? ctx.menu.panelId : null);
            }
          },
          inputs: {
            restoreFocus: ["matMenuTriggerRestoreFocus", "restoreFocus"],
            _deprecatedMatMenuTriggerFor: ["mat-menu-trigger-for", "_deprecatedMatMenuTriggerFor"],
            menu: ["matMenuTriggerFor", "menu"],
            menuData: ["matMenuTriggerData", "menuData"]
          },
          outputs: {
            menuOpened: "menuOpened",
            onMenuOpen: "onMenuOpen",
            menuClosed: "menuClosed",
            onMenuClose: "onMenuClose"
          },
          exportAs: ["matMenuTrigger"]
        });
        return MatMenuTrigger;
      }();

      var _MatMenuDirectivesModule = /*@__PURE__*/function () {
        var _MatMenuDirectivesModule = /*#__PURE__*/_createClass(function _MatMenuDirectivesModule() {
          _classCallCheck(this, _MatMenuDirectivesModule);
        });

        _MatMenuDirectivesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
          type: _MatMenuDirectivesModule
        });
        _MatMenuDirectivesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
          factory: function _MatMenuDirectivesModule_Factory(t) {
            return new (t || _MatMenuDirectivesModule)();
          },
          providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER],
          imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"]]
        });
        return _MatMenuDirectivesModule;
      }();
      /*@__PURE__*/


      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](_MatMenuDirectivesModule, {
          declarations: function declarations() {
            return [MatMenuTrigger, MatMenuContent];
          },
          exports: function exports() {
            return [MatMenuTrigger, MatMenuContent, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"]];
          }
        });
      })();

      var MatMenuModule = /*@__PURE__*/function () {
        var MatMenuModule = /*#__PURE__*/_createClass(function MatMenuModule() {
          _classCallCheck(this, MatMenuModule);
        });

        MatMenuModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
          type: MatMenuModule
        });
        MatMenuModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
          factory: function MatMenuModule_Factory(t) {
            return new (t || MatMenuModule)();
          },
          providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER],
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayModule"], _MatMenuDirectivesModule], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__["CdkScrollableModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"], _MatMenuDirectivesModule]
        });
        return MatMenuModule;
      }();
      /*@__PURE__*/


      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MatMenuModule, {
          declarations: function declarations() {
            return [_MatMenu, MatMenuItem];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayModule"], _MatMenuDirectivesModule];
          },
          exports: function exports() {
            return [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__["CdkScrollableModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"], _MatMenu, MatMenuItem, _MatMenuDirectivesModule];
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
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=menu.js.map

      /***/

    },

    /***/
    "XhcP":
    /*!*************************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js ***!
      \*************************************************************************/

    /*! exports provided: MAT_DRAWER_DEFAULT_AUTOSIZE, MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY, MatDrawer, MatDrawerContainer, MatDrawerContent, MatSidenav, MatSidenavContainer, MatSidenavContent, MatSidenavModule, matDrawerAnimations, throwMatDuplicatedDrawerError, ɵangular_material_src_material_sidenav_sidenav_a */

    /***/
    function XhcP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_DRAWER_DEFAULT_AUTOSIZE", function () {
        return MAT_DRAWER_DEFAULT_AUTOSIZE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY", function () {
        return MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDrawer", function () {
        return MatDrawer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDrawerContainer", function () {
        return MatDrawerContainer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDrawerContent", function () {
        return MatDrawerContent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSidenav", function () {
        return MatSidenav;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSidenavContainer", function () {
        return MatSidenavContainer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSidenavContent", function () {
        return MatSidenavContent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSidenavModule", function () {
        return MatSidenavModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "matDrawerAnimations", function () {
        return matDrawerAnimations;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "throwMatDuplicatedDrawerError", function () {
        return throwMatDuplicatedDrawerError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_sidenav_sidenav_a", function () {
        return MAT_DRAWER_CONTAINER;
      });
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "nLfN");
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "vxfF");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "u47x");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "cH1L");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      "FtGj");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Animations used by the Material drawers.
       * @docs-private
       */


      var _c0 = ["*"];

      function MatDrawerContainer_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MatDrawerContainer_div_0_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r2._onBackdropClicked();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-drawer-shown", ctx_r0._isShowingBackdrop());
        }
      }

      function MatDrawerContainer_mat_drawer_content_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-drawer-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      var _c1 = [[["mat-drawer"]], [["mat-drawer-content"]], "*"];
      var _c2 = ["mat-drawer", "mat-drawer-content", "*"];

      function MatSidenavContainer_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MatSidenavContainer_div_0_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r2._onBackdropClicked();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-drawer-shown", ctx_r0._isShowingBackdrop());
        }
      }

      function MatSidenavContainer_mat_sidenav_content_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-sidenav-content", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      var _c3 = [[["mat-sidenav"]], [["mat-sidenav-content"]], "*"];
      var _c4 = ["mat-sidenav", "mat-sidenav-content", "*"];
      var _c5 = ".mat-drawer-container{position:relative;z-index:1;box-sizing:border-box;-webkit-overflow-scrolling:touch;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}.cdk-high-contrast-active .mat-drawer-backdrop{opacity:.5}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}.cdk-high-contrast-active .mat-drawer,.cdk-high-contrast-active [dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}.cdk-high-contrast-active [dir=rtl] .mat-drawer,.cdk-high-contrast-active .mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer{transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto;-webkit-overflow-scrolling:touch}.mat-sidenav-fixed{position:fixed}\n";
      var matDrawerAnimations = {
        /** Animation that slides a drawer in and out. */
        transformDrawer: /*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["trigger"])('transform', [// We remove the `transform` here completely, rather than setting it to zero, because:
        // 1. Having a transform can cause elements with ripples or an animated
        //    transform to shift around in Chrome with an RTL layout (see #10023).
        // 2. 3d transforms causes text to appear blurry on IE and Edge.

        /*@__PURE__*/
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["state"])('open, open-instant', /*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({
          'transform': 'none',
          'visibility': 'visible'
        })), /*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["state"])('void', /*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({
          // Avoids the shadow showing up when closed in SSR.
          'box-shadow': 'none',
          'visibility': 'hidden'
        })), /*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["transition"])('void => open-instant', /*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animate"])('0ms')), /*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["transition"])('void <=> open, open-instant => void', /*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animate"])('400ms cubic-bezier(0.25, 0.8, 0.25, 1)'))])
      };
      /**
       * Throws an exception when two MatDrawer are matching the same position.
       * @docs-private
       */

      function throwMatDuplicatedDrawerError(position) {
        throw Error("A drawer was already declared for 'position=\"".concat(position, "\"'"));
      }
      /** Configures whether drawers should use auto sizing by default. */


      var MAT_DRAWER_DEFAULT_AUTOSIZE = /*@__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('MAT_DRAWER_DEFAULT_AUTOSIZE', {
        providedIn: 'root',
        factory: MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY
      });
      /**
       * Used to provide a drawer container to a drawer while avoiding circular references.
       * @docs-private
       */

      var MAT_DRAWER_CONTAINER = /*@__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('MAT_DRAWER_CONTAINER');
      /** @docs-private */

      function MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY() {
        return false;
      }

      var MatDrawerContent = /*@__PURE__*/function () {
        var MatDrawerContent = /*#__PURE__*/function (_angular_cdk_scrollin) {
          _inherits(MatDrawerContent, _angular_cdk_scrollin);

          var _super9 = _createSuper(MatDrawerContent);

          function MatDrawerContent(_changeDetectorRef, _container, elementRef, scrollDispatcher, ngZone) {
            var _this23;

            _classCallCheck(this, MatDrawerContent);

            _this23 = _super9.call(this, elementRef, scrollDispatcher, ngZone);
            _this23._changeDetectorRef = _changeDetectorRef;
            _this23._container = _container;
            return _this23;
          }

          _createClass(MatDrawerContent, [{
            key: "ngAfterContentInit",
            value: function ngAfterContentInit() {
              var _this24 = this;

              this._container._contentMarginChanges.subscribe(function () {
                _this24._changeDetectorRef.markForCheck();
              });
            }
          }]);

          return MatDrawerContent;
        }(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkScrollable"]);

        MatDrawerContent.ɵfac = function MatDrawerContent_Factory(t) {
          return new (t || MatDrawerContent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(function () {
            return MatDrawerContainer;
          })), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollDispatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]));
        };

        MatDrawerContent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
          type: MatDrawerContent,
          selectors: [["mat-drawer-content"]],
          hostAttrs: [1, "mat-drawer-content"],
          hostVars: 4,
          hostBindings: function MatDrawerContent_HostBindings(rf, ctx) {
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("margin-left", ctx._container._contentMargins.left, "px")("margin-right", ctx._container._contentMargins.right, "px");
            }
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
          ngContentSelectors: _c0,
          decls: 1,
          vars: 0,
          template: function MatDrawerContent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
            }
          },
          encapsulation: 2,
          changeDetection: 0
        });
        return MatDrawerContent;
      }();

      var MatDrawer = /*@__PURE__*/function () {
        var MatDrawer = /*#__PURE__*/function () {
          function MatDrawer(_elementRef, _focusTrapFactory, _focusMonitor, _platform, _ngZone, _doc, _container) {
            var _this25 = this;

            _classCallCheck(this, MatDrawer);

            this._elementRef = _elementRef;
            this._focusTrapFactory = _focusTrapFactory;
            this._focusMonitor = _focusMonitor;
            this._platform = _platform;
            this._ngZone = _ngZone;
            this._doc = _doc;
            this._container = _container;
            this._elementFocusedBeforeDrawerWasOpened = null;
            /** Whether the drawer is initialized. Used for disabling the initial animation. */

            this._enableAnimations = false;
            this._position = 'start';
            this._mode = 'over';
            this._disableClose = false;
            this._opened = false;
            /** Emits whenever the drawer has started animating. */

            this._animationStarted = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
            /** Emits whenever the drawer is done animating. */

            this._animationEnd = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
            /** Current state of the sidenav animation. */
            // @HostBinding is used in the class as it is expected to be extended.  Since @Component decorator
            // metadata is not inherited by child classes, instead the host binding data is defined in a way
            // that can be inherited.
            // tslint:disable:no-host-decorator-in-concrete

            this._animationState = 'void';
            /** Event emitted when the drawer open state is changed. */

            this.openedChange = // Note this has to be async in order to avoid some issues with two-bindings (see #8872).
            new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"](
            /* isAsync */
            true);
            /** Event emitted when the drawer has been opened. */

            this._openedStream = this.openedChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(function (o) {
              return o;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function () {}));
            /** Event emitted when the drawer has started opening. */

            this.openedStart = this._animationStarted.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(function (e) {
              return e.fromState !== e.toState && e.toState.indexOf('open') === 0;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["mapTo"])(undefined));
            /** Event emitted when the drawer has been closed. */

            this._closedStream = this.openedChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(function (o) {
              return !o;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function () {}));
            /** Event emitted when the drawer has started closing. */

            this.closedStart = this._animationStarted.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(function (e) {
              return e.fromState !== e.toState && e.toState === 'void';
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["mapTo"])(undefined));
            /** Emits when the component is destroyed. */

            this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
            /** Event emitted when the drawer's position changes. */
            // tslint:disable-next-line:no-output-on-prefix

            this.onPositionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
            /**
             * An observable that emits when the drawer mode changes. This is used by the drawer container to
             * to know when to when the mode changes so it can adapt the margins on the content.
             */

            this._modeChanged = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
            this.openedChange.subscribe(function (opened) {
              if (opened) {
                if (_this25._doc) {
                  _this25._elementFocusedBeforeDrawerWasOpened = _this25._doc.activeElement;
                }

                _this25._takeFocus();
              } else if (_this25._isFocusWithinDrawer()) {
                _this25._restoreFocus();
              }
            });
            /**
             * Listen to `keydown` events outside the zone so that change detection is not run every
             * time a key is pressed. Instead we re-enter the zone only if the `ESC` key is pressed
             * and we don't have close disabled.
             */

            this._ngZone.runOutsideAngular(function () {
              Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["fromEvent"])(_this25._elementRef.nativeElement, 'keydown').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(function (event) {
                return event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["ESCAPE"] && !_this25.disableClose && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["hasModifierKey"])(event);
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(_this25._destroyed)).subscribe(function (event) {
                return _this25._ngZone.run(function () {
                  _this25.close();

                  event.stopPropagation();
                  event.preventDefault();
                });
              });
            }); // We need a Subject with distinctUntilChanged, because the `done` event
            // fires twice on some browsers. See https://github.com/angular/angular/issues/24084


            this._animationEnd.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["distinctUntilChanged"])(function (x, y) {
              return x.fromState === y.fromState && x.toState === y.toState;
            })).subscribe(function (event) {
              var fromState = event.fromState,
                  toState = event.toState;

              if (toState.indexOf('open') === 0 && fromState === 'void' || toState === 'void' && fromState.indexOf('open') === 0) {
                _this25.openedChange.emit(_this25._opened);
              }
            });
          }
          /** The side that the drawer is attached to. */


          _createClass(MatDrawer, [{
            key: "position",
            get: function get() {
              return this._position;
            },
            set: function set(value) {
              // Make sure we have a valid value.
              value = value === 'end' ? 'end' : 'start';

              if (value != this._position) {
                this._position = value;
                this.onPositionChanged.emit();
              }
            }
            /** Mode of the drawer; one of 'over', 'push' or 'side'. */

          }, {
            key: "mode",
            get: function get() {
              return this._mode;
            },
            set: function set(value) {
              this._mode = value;

              this._updateFocusTrapState();

              this._modeChanged.next();
            }
            /** Whether the drawer can be closed with the escape key or by clicking on the backdrop. */

          }, {
            key: "disableClose",
            get: function get() {
              return this._disableClose;
            },
            set: function set(value) {
              this._disableClose = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(value);
            }
            /**
             * Whether the drawer should focus the first focusable element automatically when opened.
             * Defaults to false in when `mode` is set to `side`, otherwise defaults to `true`. If explicitly
             * enabled, focus will be moved into the sidenav in `side` mode as well.
             */

          }, {
            key: "autoFocus",
            get: function get() {
              var value = this._autoFocus; // Note that usually we disable auto focusing in `side` mode, because we don't know how the
              // sidenav is being used, but in some cases it still makes sense to do it. If the consumer
              // explicitly enabled `autoFocus`, we take it as them always wanting to enable it.

              return value == null ? this.mode !== 'side' : value;
            },
            set: function set(value) {
              this._autoFocus = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(value);
            }
            /**
             * Whether the drawer is opened. We overload this because we trigger an event when it
             * starts or end.
             */

          }, {
            key: "opened",
            get: function get() {
              return this._opened;
            },
            set: function set(value) {
              this.toggle(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(value));
            }
            /**
             * Moves focus into the drawer. Note that this works even if
             * the focus trap is disabled in `side` mode.
             */

          }, {
            key: "_takeFocus",
            value: function _takeFocus() {
              var _this26 = this;

              if (!this.autoFocus || !this._focusTrap) {
                return;
              }

              this._focusTrap.focusInitialElementWhenReady().then(function (hasMovedFocus) {
                // If there were no focusable elements, focus the sidenav itself so the keyboard navigation
                // still works. We need to check that `focus` is a function due to Universal.
                if (!hasMovedFocus && typeof _this26._elementRef.nativeElement.focus === 'function') {
                  _this26._elementRef.nativeElement.focus();
                }
              });
            }
            /**
             * Restores focus to the element that was originally focused when the drawer opened.
             * If no element was focused at that time, the focus will be restored to the drawer.
             */

          }, {
            key: "_restoreFocus",
            value: function _restoreFocus() {
              if (!this.autoFocus) {
                return;
              } // Note that we don't check via `instanceof HTMLElement` so that we can cover SVGs as well.


              if (this._elementFocusedBeforeDrawerWasOpened) {
                this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened, this._openedVia);
              } else {
                this._elementRef.nativeElement.blur();
              }

              this._elementFocusedBeforeDrawerWasOpened = null;
              this._openedVia = null;
            }
            /** Whether focus is currently within the drawer. */

          }, {
            key: "_isFocusWithinDrawer",
            value: function _isFocusWithinDrawer() {
              var _a;

              var activeEl = (_a = this._doc) === null || _a === void 0 ? void 0 : _a.activeElement;
              return !!activeEl && this._elementRef.nativeElement.contains(activeEl);
            }
          }, {
            key: "ngAfterContentInit",
            value: function ngAfterContentInit() {
              this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);

              this._updateFocusTrapState();
            }
          }, {
            key: "ngAfterContentChecked",
            value: function ngAfterContentChecked() {
              // Enable the animations after the lifecycle hooks have run, in order to avoid animating
              // drawers that are open by default. When we're on the server, we shouldn't enable the
              // animations, because we don't want the drawer to animate the first time the user sees
              // the page.
              if (this._platform.isBrowser) {
                this._enableAnimations = true;
              }
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              if (this._focusTrap) {
                this._focusTrap.destroy();
              }

              this._animationStarted.complete();

              this._animationEnd.complete();

              this._modeChanged.complete();

              this._destroyed.next();

              this._destroyed.complete();
            }
            /**
             * Open the drawer.
             * @param openedVia Whether the drawer was opened by a key press, mouse click or programmatically.
             * Used for focus management after the sidenav is closed.
             */

          }, {
            key: "open",
            value: function open(openedVia) {
              return this.toggle(true, openedVia);
            }
            /** Close the drawer. */

          }, {
            key: "close",
            value: function close() {
              return this.toggle(false);
            }
            /** Closes the drawer with context that the backdrop was clicked. */

          }, {
            key: "_closeViaBackdropClick",
            value: function _closeViaBackdropClick() {
              // If the drawer is closed upon a backdrop click, we always want to restore focus. We
              // don't need to check whether focus is currently in the drawer, as clicking on the
              // backdrop causes blurring of the active element.
              return this._setOpen(
              /* isOpen */
              false,
              /* restoreFocus */
              true);
            }
            /**
             * Toggle this drawer.
             * @param isOpen Whether the drawer should be open.
             * @param openedVia Whether the drawer was opened by a key press, mouse click or programmatically.
             * Used for focus management after the sidenav is closed.
             */

          }, {
            key: "toggle",
            value: function toggle() {
              var isOpen = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !this.opened;
              var openedVia = arguments.length > 1 ? arguments[1] : undefined;
              // If the focus is currently inside the drawer content and we are closing the drawer,
              // restore the focus to the initially focused element (when the drawer opened).
              return this._setOpen(isOpen,
              /* restoreFocus */
              !isOpen && this._isFocusWithinDrawer(), openedVia);
            }
            /**
             * Toggles the opened state of the drawer.
             * @param isOpen Whether the drawer should open or close.
             * @param restoreFocus Whether focus should be restored on close.
             * @param openedVia Focus origin that can be optionally set when opening a drawer. The
             *   origin will be used later when focus is restored on drawer close.
             */

          }, {
            key: "_setOpen",
            value: function _setOpen(isOpen, restoreFocus) {
              var _this27 = this;

              var openedVia = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'program';
              this._opened = isOpen;

              if (isOpen) {
                this._animationState = this._enableAnimations ? 'open' : 'open-instant';
                this._openedVia = openedVia;
              } else {
                this._animationState = 'void';

                if (restoreFocus) {
                  this._restoreFocus();
                }
              }

              this._updateFocusTrapState();

              return new Promise(function (resolve) {
                _this27.openedChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1)).subscribe(function (open) {
                  return resolve(open ? 'open' : 'close');
                });
              });
            }
          }, {
            key: "_getWidth",
            value: function _getWidth() {
              return this._elementRef.nativeElement ? this._elementRef.nativeElement.offsetWidth || 0 : 0;
            }
            /** Updates the enabled state of the focus trap. */

          }, {
            key: "_updateFocusTrapState",
            value: function _updateFocusTrapState() {
              if (this._focusTrap) {
                // The focus trap is only enabled when the drawer is open in any mode other than side.
                this._focusTrap.enabled = this.opened && this.mode !== 'side';
              }
            } // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
            // In Ivy the `host` bindings will be merged when this class is extended, whereas in
            // ViewEngine they're overwritten.
            // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
            // tslint:disable-next-line:no-host-decorator-in-concrete

          }, {
            key: "_animationStartListener",
            value: function _animationStartListener(event) {
              this._animationStarted.next(event);
            } // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
            // In Ivy the `host` bindings will be merged when this class is extended, whereas in
            // ViewEngine they're overwritten.
            // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
            // tslint:disable-next-line:no-host-decorator-in-concrete

          }, {
            key: "_animationDoneListener",
            value: function _animationDoneListener(event) {
              this._animationEnd.next(event);
            }
          }]);

          return MatDrawer;
        }();

        MatDrawer.ɵfac = function MatDrawer_Factory(t) {
          return new (t || MatDrawer)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusTrapFactory"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_DRAWER_CONTAINER, 8));
        };

        MatDrawer.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
          type: MatDrawer,
          selectors: [["mat-drawer"]],
          hostAttrs: ["tabIndex", "-1", 1, "mat-drawer"],
          hostVars: 12,
          hostBindings: function MatDrawer_HostBindings(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsyntheticHostListener"]("@transform.start", function MatDrawer_animation_transform_start_HostBindingHandler($event) {
                return ctx._animationStartListener($event);
              })("@transform.done", function MatDrawer_animation_transform_done_HostBindingHandler($event) {
                return ctx._animationDoneListener($event);
              });
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("align", null);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsyntheticHostProperty"]("@transform", ctx._animationState);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-drawer-end", ctx.position === "end")("mat-drawer-over", ctx.mode === "over")("mat-drawer-push", ctx.mode === "push")("mat-drawer-side", ctx.mode === "side")("mat-drawer-opened", ctx.opened);
            }
          },
          inputs: {
            position: "position",
            mode: "mode",
            disableClose: "disableClose",
            autoFocus: "autoFocus",
            opened: "opened"
          },
          outputs: {
            openedChange: "openedChange",
            _openedStream: "opened",
            openedStart: "openedStart",
            _closedStream: "closed",
            closedStart: "closedStart",
            onPositionChanged: "positionChanged"
          },
          exportAs: ["matDrawer"],
          ngContentSelectors: _c0,
          decls: 2,
          vars: 0,
          consts: [[1, "mat-drawer-inner-container"]],
          template: function MatDrawer_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            }
          },
          encapsulation: 2,
          data: {
            animation: [matDrawerAnimations.transformDrawer]
          },
          changeDetection: 0
        });
        return MatDrawer;
      }();

      var MatDrawerContainer = /*@__PURE__*/function () {
        var MatDrawerContainer = /*#__PURE__*/function () {
          function MatDrawerContainer(_dir, _element, _ngZone, _changeDetectorRef, viewportRuler) {
            var _this28 = this;

            var defaultAutosize = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

            var _animationMode = arguments.length > 6 ? arguments[6] : undefined;

            _classCallCheck(this, MatDrawerContainer);

            this._dir = _dir;
            this._element = _element;
            this._ngZone = _ngZone;
            this._changeDetectorRef = _changeDetectorRef;
            this._animationMode = _animationMode;
            /** Drawers that belong to this container. */

            this._drawers = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["QueryList"]();
            /** Event emitted when the drawer backdrop is clicked. */

            this.backdropClick = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
            /** Emits when the component is destroyed. */

            this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
            /** Emits on every ngDoCheck. Used for debouncing reflows. */

            this._doCheckSubject = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
            /**
             * Margins to be applied to the content. These are used to push / shrink the drawer content when a
             * drawer is open. We use margin rather than transform even for push mode because transform breaks
             * fixed position elements inside of the transformed element.
             */

            this._contentMargins = {
              left: null,
              right: null
            };
            this._contentMarginChanges = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"](); // If a `Dir` directive exists up the tree, listen direction changes
            // and update the left/right properties to point to the proper start/end.

            if (_dir) {
              _dir.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed)).subscribe(function () {
                _this28._validateDrawers();

                _this28.updateContentMargins();
              });
            } // Since the minimum width of the sidenav depends on the viewport width,
            // we need to recompute the margins if the viewport changes.


            viewportRuler.change().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed)).subscribe(function () {
              return _this28.updateContentMargins();
            });
            this._autosize = defaultAutosize;
          }
          /** The drawer child with the `start` position. */


          _createClass(MatDrawerContainer, [{
            key: "start",
            get: function get() {
              return this._start;
            }
            /** The drawer child with the `end` position. */

          }, {
            key: "end",
            get: function get() {
              return this._end;
            }
            /**
             * Whether to automatically resize the container whenever
             * the size of any of its drawers changes.
             *
             * **Use at your own risk!** Enabling this option can cause layout thrashing by measuring
             * the drawers on every change detection cycle. Can be configured globally via the
             * `MAT_DRAWER_DEFAULT_AUTOSIZE` token.
             */

          }, {
            key: "autosize",
            get: function get() {
              return this._autosize;
            },
            set: function set(value) {
              this._autosize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(value);
            }
            /**
             * Whether the drawer container should have a backdrop while one of the sidenavs is open.
             * If explicitly set to `true`, the backdrop will be enabled for drawers in the `side`
             * mode as well.
             */

          }, {
            key: "hasBackdrop",
            get: function get() {
              if (this._backdropOverride == null) {
                return !this._start || this._start.mode !== 'side' || !this._end || this._end.mode !== 'side';
              }

              return this._backdropOverride;
            },
            set: function set(value) {
              this._backdropOverride = value == null ? null : Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(value);
            }
            /** Reference to the CdkScrollable instance that wraps the scrollable content. */

          }, {
            key: "scrollable",
            get: function get() {
              return this._userContent || this._content;
            }
          }, {
            key: "ngAfterContentInit",
            value: function ngAfterContentInit() {
              var _this29 = this;

              this._allDrawers.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["startWith"])(this._allDrawers), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed)).subscribe(function (drawer) {
                _this29._drawers.reset(drawer.filter(function (item) {
                  return !item._container || item._container === _this29;
                }));

                _this29._drawers.notifyOnChanges();
              });

              this._drawers.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["startWith"])(null)).subscribe(function () {
                _this29._validateDrawers();

                _this29._drawers.forEach(function (drawer) {
                  _this29._watchDrawerToggle(drawer);

                  _this29._watchDrawerPosition(drawer);

                  _this29._watchDrawerMode(drawer);
                });

                if (!_this29._drawers.length || _this29._isDrawerOpen(_this29._start) || _this29._isDrawerOpen(_this29._end)) {
                  _this29.updateContentMargins();
                }

                _this29._changeDetectorRef.markForCheck();
              }); // Avoid hitting the NgZone through the debounce timeout.


              this._ngZone.runOutsideAngular(function () {
                _this29._doCheckSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["debounceTime"])(10), // Arbitrary debounce time, less than a frame at 60fps
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(_this29._destroyed)).subscribe(function () {
                  return _this29.updateContentMargins();
                });
              });
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              this._contentMarginChanges.complete();

              this._doCheckSubject.complete();

              this._drawers.destroy();

              this._destroyed.next();

              this._destroyed.complete();
            }
            /** Calls `open` of both start and end drawers */

          }, {
            key: "open",
            value: function open() {
              this._drawers.forEach(function (drawer) {
                return drawer.open();
              });
            }
            /** Calls `close` of both start and end drawers */

          }, {
            key: "close",
            value: function close() {
              this._drawers.forEach(function (drawer) {
                return drawer.close();
              });
            }
            /**
             * Recalculates and updates the inline styles for the content. Note that this should be used
             * sparingly, because it causes a reflow.
             */

          }, {
            key: "updateContentMargins",
            value: function updateContentMargins() {
              var _this30 = this;

              // 1. For drawers in `over` mode, they don't affect the content.
              // 2. For drawers in `side` mode they should shrink the content. We do this by adding to the
              //    left margin (for left drawer) or right margin (for right the drawer).
              // 3. For drawers in `push` mode the should shift the content without resizing it. We do this by
              //    adding to the left or right margin and simultaneously subtracting the same amount of
              //    margin from the other side.
              var left = 0;
              var right = 0;

              if (this._left && this._left.opened) {
                if (this._left.mode == 'side') {
                  left += this._left._getWidth();
                } else if (this._left.mode == 'push') {
                  var width = this._left._getWidth();

                  left += width;
                  right -= width;
                }
              }

              if (this._right && this._right.opened) {
                if (this._right.mode == 'side') {
                  right += this._right._getWidth();
                } else if (this._right.mode == 'push') {
                  var _width = this._right._getWidth();

                  right += _width;
                  left -= _width;
                }
              } // If either `right` or `left` is zero, don't set a style to the element. This
              // allows users to specify a custom size via CSS class in SSR scenarios where the
              // measured widths will always be zero. Note that we reset to `null` here, rather
              // than below, in order to ensure that the types in the `if` below are consistent.


              left = left || null;
              right = right || null;

              if (left !== this._contentMargins.left || right !== this._contentMargins.right) {
                this._contentMargins = {
                  left: left,
                  right: right
                }; // Pull back into the NgZone since in some cases we could be outside. We need to be careful
                // to do it only when something changed, otherwise we can end up hitting the zone too often.

                this._ngZone.run(function () {
                  return _this30._contentMarginChanges.next(_this30._contentMargins);
                });
              }
            }
          }, {
            key: "ngDoCheck",
            value: function ngDoCheck() {
              var _this31 = this;

              // If users opted into autosizing, do a check every change detection cycle.
              if (this._autosize && this._isPushed()) {
                // Run outside the NgZone, otherwise the debouncer will throw us into an infinite loop.
                this._ngZone.runOutsideAngular(function () {
                  return _this31._doCheckSubject.next();
                });
              }
            }
            /**
             * Subscribes to drawer events in order to set a class on the main container element when the
             * drawer is open and the backdrop is visible. This ensures any overflow on the container element
             * is properly hidden.
             */

          }, {
            key: "_watchDrawerToggle",
            value: function _watchDrawerToggle(drawer) {
              var _this32 = this;

              drawer._animationStarted.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(function (event) {
                return event.fromState !== event.toState;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._drawers.changes)).subscribe(function (event) {
                // Set the transition class on the container so that the animations occur. This should not
                // be set initially because animations should only be triggered via a change in state.
                if (event.toState !== 'open-instant' && _this32._animationMode !== 'NoopAnimations') {
                  _this32._element.nativeElement.classList.add('mat-drawer-transition');
                }

                _this32.updateContentMargins();

                _this32._changeDetectorRef.markForCheck();
              });

              if (drawer.mode !== 'side') {
                drawer.openedChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._drawers.changes)).subscribe(function () {
                  return _this32._setContainerClass(drawer.opened);
                });
              }
            }
            /**
             * Subscribes to drawer onPositionChanged event in order to
             * re-validate drawers when the position changes.
             */

          }, {
            key: "_watchDrawerPosition",
            value: function _watchDrawerPosition(drawer) {
              var _this33 = this;

              if (!drawer) {
                return;
              } // NOTE: We need to wait for the microtask queue to be empty before validating,
              // since both drawers may be swapping positions at the same time.


              drawer.onPositionChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._drawers.changes)).subscribe(function () {
                _this33._ngZone.onMicrotaskEmpty.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1)).subscribe(function () {
                  _this33._validateDrawers();
                });
              });
            }
            /** Subscribes to changes in drawer mode so we can run change detection. */

          }, {
            key: "_watchDrawerMode",
            value: function _watchDrawerMode(drawer) {
              var _this34 = this;

              if (drawer) {
                drawer._modeChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"])(this._drawers.changes, this._destroyed))).subscribe(function () {
                  _this34.updateContentMargins();

                  _this34._changeDetectorRef.markForCheck();
                });
              }
            }
            /** Toggles the 'mat-drawer-opened' class on the main 'mat-drawer-container' element. */

          }, {
            key: "_setContainerClass",
            value: function _setContainerClass(isAdd) {
              var classList = this._element.nativeElement.classList;
              var className = 'mat-drawer-container-has-open';

              if (isAdd) {
                classList.add(className);
              } else {
                classList.remove(className);
              }
            }
            /** Validate the state of the drawer children components. */

          }, {
            key: "_validateDrawers",
            value: function _validateDrawers() {
              var _this35 = this;

              this._start = this._end = null; // Ensure that we have at most one start and one end drawer.

              this._drawers.forEach(function (drawer) {
                if (drawer.position == 'end') {
                  if (_this35._end != null && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                    throwMatDuplicatedDrawerError('end');
                  }

                  _this35._end = drawer;
                } else {
                  if (_this35._start != null && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                    throwMatDuplicatedDrawerError('start');
                  }

                  _this35._start = drawer;
                }
              });

              this._right = this._left = null; // Detect if we're LTR or RTL.

              if (this._dir && this._dir.value === 'rtl') {
                this._left = this._end;
                this._right = this._start;
              } else {
                this._left = this._start;
                this._right = this._end;
              }
            }
            /** Whether the container is being pushed to the side by one of the drawers. */

          }, {
            key: "_isPushed",
            value: function _isPushed() {
              return this._isDrawerOpen(this._start) && this._start.mode != 'over' || this._isDrawerOpen(this._end) && this._end.mode != 'over';
            }
          }, {
            key: "_onBackdropClicked",
            value: function _onBackdropClicked() {
              this.backdropClick.emit();

              this._closeModalDrawersViaBackdrop();
            }
          }, {
            key: "_closeModalDrawersViaBackdrop",
            value: function _closeModalDrawersViaBackdrop() {
              var _this36 = this;

              // Close all open drawers where closing is not disabled and the mode is not `side`.
              [this._start, this._end].filter(function (drawer) {
                return drawer && !drawer.disableClose && _this36._canHaveBackdrop(drawer);
              }).forEach(function (drawer) {
                return drawer._closeViaBackdropClick();
              });
            }
          }, {
            key: "_isShowingBackdrop",
            value: function _isShowingBackdrop() {
              return this._isDrawerOpen(this._start) && this._canHaveBackdrop(this._start) || this._isDrawerOpen(this._end) && this._canHaveBackdrop(this._end);
            }
          }, {
            key: "_canHaveBackdrop",
            value: function _canHaveBackdrop(drawer) {
              return drawer.mode !== 'side' || !!this._backdropOverride;
            }
          }, {
            key: "_isDrawerOpen",
            value: function _isDrawerOpen(drawer) {
              return drawer != null && drawer.opened;
            }
          }]);

          return MatDrawerContainer;
        }();

        MatDrawerContainer.ɵfac = function MatDrawerContainer_Factory(t) {
          return new (t || MatDrawerContainer)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_DRAWER_DEFAULT_AUTOSIZE), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["ANIMATION_MODULE_TYPE"], 8));
        };

        MatDrawerContainer.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
          type: MatDrawerContainer,
          selectors: [["mat-drawer-container"]],
          contentQueries: function MatDrawerContainer_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MatDrawerContent, true);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MatDrawer, true);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._content = _t.first);
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._allDrawers = _t);
            }
          },
          viewQuery: function MatDrawerContainer_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](MatDrawerContent, true);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._userContent = _t.first);
            }
          },
          hostAttrs: [1, "mat-drawer-container"],
          hostVars: 2,
          hostBindings: function MatDrawerContainer_HostBindings(rf, ctx) {
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-drawer-container-explicit-backdrop", ctx._backdropOverride);
            }
          },
          inputs: {
            autosize: "autosize",
            hasBackdrop: "hasBackdrop"
          },
          outputs: {
            backdropClick: "backdropClick"
          },
          exportAs: ["matDrawerContainer"],
          features: [/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
            provide: MAT_DRAWER_CONTAINER,
            useExisting: MatDrawerContainer
          }])],
          ngContentSelectors: _c2,
          decls: 4,
          vars: 2,
          consts: [["class", "mat-drawer-backdrop", 3, "mat-drawer-shown", "click", 4, "ngIf"], [4, "ngIf"], [1, "mat-drawer-backdrop", 3, "click"]],
          template: function MatDrawerContainer_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"](_c1);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, MatDrawerContainer_div_0_Template, 1, 2, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](2, 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, MatDrawerContainer_mat_drawer_content_3_Template, 2, 0, "mat-drawer-content", 1);
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.hasBackdrop);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx._content);
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], MatDrawerContent],
          styles: [_c5],
          encapsulation: 2,
          changeDetection: 0
        });
        return MatDrawerContainer;
      }();

      var MatSidenavContent = /*@__PURE__*/function () {
        var MatSidenavContent = /*#__PURE__*/function (_MatDrawerContent) {
          _inherits(MatSidenavContent, _MatDrawerContent);

          var _super10 = _createSuper(MatSidenavContent);

          function MatSidenavContent(changeDetectorRef, container, elementRef, scrollDispatcher, ngZone) {
            _classCallCheck(this, MatSidenavContent);

            return _super10.call(this, changeDetectorRef, container, elementRef, scrollDispatcher, ngZone);
          }

          return _createClass(MatSidenavContent);
        }(MatDrawerContent);

        MatSidenavContent.ɵfac = function MatSidenavContent_Factory(t) {
          return new (t || MatSidenavContent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(function () {
            return MatSidenavContainer;
          })), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollDispatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]));
        };

        MatSidenavContent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
          type: MatSidenavContent,
          selectors: [["mat-sidenav-content"]],
          hostAttrs: [1, "mat-drawer-content", "mat-sidenav-content"],
          hostVars: 4,
          hostBindings: function MatSidenavContent_HostBindings(rf, ctx) {
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("margin-left", ctx._container._contentMargins.left, "px")("margin-right", ctx._container._contentMargins.right, "px");
            }
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
          ngContentSelectors: _c0,
          decls: 1,
          vars: 0,
          template: function MatSidenavContent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
            }
          },
          encapsulation: 2,
          changeDetection: 0
        });
        return MatSidenavContent;
      }();

      var MatSidenav = /*@__PURE__*/function () {
        var MatSidenav = /*#__PURE__*/function (_MatDrawer) {
          _inherits(MatSidenav, _MatDrawer);

          var _super11 = _createSuper(MatSidenav);

          function MatSidenav() {
            var _this37;

            _classCallCheck(this, MatSidenav);

            _this37 = _super11.apply(this, arguments);
            _this37._fixedInViewport = false;
            _this37._fixedTopGap = 0;
            _this37._fixedBottomGap = 0;
            return _this37;
          }
          /** Whether the sidenav is fixed in the viewport. */


          _createClass(MatSidenav, [{
            key: "fixedInViewport",
            get: function get() {
              return this._fixedInViewport;
            },
            set: function set(value) {
              this._fixedInViewport = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(value);
            }
            /**
             * The gap between the top of the sidenav and the top of the viewport when the sidenav is in fixed
             * mode.
             */

          }, {
            key: "fixedTopGap",
            get: function get() {
              return this._fixedTopGap;
            },
            set: function set(value) {
              this._fixedTopGap = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceNumberProperty"])(value);
            }
            /**
             * The gap between the bottom of the sidenav and the bottom of the viewport when the sidenav is in
             * fixed mode.
             */

          }, {
            key: "fixedBottomGap",
            get: function get() {
              return this._fixedBottomGap;
            },
            set: function set(value) {
              this._fixedBottomGap = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceNumberProperty"])(value);
            }
          }]);

          return MatSidenav;
        }(MatDrawer);

        MatSidenav.ɵfac = function MatSidenav_Factory(t) {
          return ɵMatSidenav_BaseFactory(t || MatSidenav);
        };

        MatSidenav.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
          type: MatSidenav,
          selectors: [["mat-sidenav"]],
          hostAttrs: ["tabIndex", "-1", 1, "mat-drawer", "mat-sidenav"],
          hostVars: 17,
          hostBindings: function MatSidenav_HostBindings(rf, ctx) {
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("align", null);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("top", ctx.fixedInViewport ? ctx.fixedTopGap : null, "px")("bottom", ctx.fixedInViewport ? ctx.fixedBottomGap : null, "px");

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-drawer-end", ctx.position === "end")("mat-drawer-over", ctx.mode === "over")("mat-drawer-push", ctx.mode === "push")("mat-drawer-side", ctx.mode === "side")("mat-drawer-opened", ctx.opened)("mat-sidenav-fixed", ctx.fixedInViewport);
            }
          },
          inputs: {
            fixedInViewport: "fixedInViewport",
            fixedTopGap: "fixedTopGap",
            fixedBottomGap: "fixedBottomGap"
          },
          exportAs: ["matSidenav"],
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
          ngContentSelectors: _c0,
          decls: 2,
          vars: 0,
          consts: [[1, "mat-drawer-inner-container"]],
          template: function MatSidenav_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            }
          },
          encapsulation: 2,
          data: {
            animation: [matDrawerAnimations.transformDrawer]
          },
          changeDetection: 0
        });
        return MatSidenav;
      }();

      var ɵMatSidenav_BaseFactory =
      /*@__PURE__*/

      /*@__PURE__*/
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](MatSidenav);

      var MatSidenavContainer = /*@__PURE__*/function () {
        var MatSidenavContainer = /*#__PURE__*/function (_MatDrawerContainer) {
          _inherits(MatSidenavContainer, _MatDrawerContainer);

          var _super12 = _createSuper(MatSidenavContainer);

          function MatSidenavContainer() {
            _classCallCheck(this, MatSidenavContainer);

            return _super12.apply(this, arguments);
          }

          return _createClass(MatSidenavContainer);
        }(MatDrawerContainer);

        MatSidenavContainer.ɵfac = function MatSidenavContainer_Factory(t) {
          return ɵMatSidenavContainer_BaseFactory(t || MatSidenavContainer);
        };

        MatSidenavContainer.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
          type: MatSidenavContainer,
          selectors: [["mat-sidenav-container"]],
          contentQueries: function MatSidenavContainer_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MatSidenavContent, true);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MatSidenav, true);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._content = _t.first);
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._allDrawers = _t);
            }
          },
          hostAttrs: [1, "mat-drawer-container", "mat-sidenav-container"],
          hostVars: 2,
          hostBindings: function MatSidenavContainer_HostBindings(rf, ctx) {
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-drawer-container-explicit-backdrop", ctx._backdropOverride);
            }
          },
          exportAs: ["matSidenavContainer"],
          features: [/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
            provide: MAT_DRAWER_CONTAINER,
            useExisting: MatSidenavContainer
          }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
          ngContentSelectors: _c4,
          decls: 4,
          vars: 2,
          consts: [["class", "mat-drawer-backdrop", 3, "mat-drawer-shown", "click", 4, "ngIf"], ["cdkScrollable", "", 4, "ngIf"], [1, "mat-drawer-backdrop", 3, "click"], ["cdkScrollable", ""]],
          template: function MatSidenavContainer_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"](_c3);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, MatSidenavContainer_div_0_Template, 1, 2, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](2, 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, MatSidenavContainer_mat_sidenav_content_3_Template, 2, 0, "mat-sidenav-content", 1);
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.hasBackdrop);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx._content);
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], MatSidenavContent, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkScrollable"]],
          styles: [_c5],
          encapsulation: 2,
          changeDetection: 0
        });
        return MatSidenavContainer;
      }();

      var ɵMatSidenavContainer_BaseFactory =
      /*@__PURE__*/

      /*@__PURE__*/
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](MatSidenavContainer);

      var MatSidenavModule = /*@__PURE__*/function () {
        var MatSidenavModule = /*#__PURE__*/_createClass(function MatSidenavModule() {
          _classCallCheck(this, MatSidenavModule);
        });

        MatSidenavModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
          type: MatSidenavModule
        });
        MatSidenavModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
          factory: function MatSidenavModule_Factory(t) {
            return new (t || MatSidenavModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkScrollableModule"]], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkScrollableModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"]]
        });
        return MatSidenavModule;
      }();
      /*@__PURE__*/


      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MatSidenavModule, {
          declarations: function declarations() {
            return [MatDrawer, MatDrawerContainer, MatDrawerContent, MatSidenav, MatSidenavContainer, MatSidenavContent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkScrollableModule"]];
          },
          exports: function exports() {
            return [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkScrollableModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], MatDrawer, MatDrawerContainer, MatDrawerContent, MatSidenav, MatSidenavContainer, MatSidenavContent];
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
      //# sourceMappingURL=sidenav.js.map

      /***/

    },

    /***/
    "f0Cb":
    /*!*************************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js ***!
      \*************************************************************************/

    /*! exports provided: MatDivider, MatDividerModule */

    /***/
    function f0Cb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDivider", function () {
        return MatDivider;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDividerModule", function () {
        return MatDividerModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatDivider = /*@__PURE__*/function () {
        var MatDivider = /*#__PURE__*/function () {
          function MatDivider() {
            _classCallCheck(this, MatDivider);

            this._vertical = false;
            this._inset = false;
          }
          /** Whether the divider is vertically aligned. */


          _createClass(MatDivider, [{
            key: "vertical",
            get: function get() {
              return this._vertical;
            },
            set: function set(value) {
              this._vertical = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
            }
            /** Whether the divider is an inset divider. */

          }, {
            key: "inset",
            get: function get() {
              return this._inset;
            },
            set: function set(value) {
              this._inset = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
            }
          }]);

          return MatDivider;
        }();

        MatDivider.ɵfac = function MatDivider_Factory(t) {
          return new (t || MatDivider)();
        };

        MatDivider.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: MatDivider,
          selectors: [["mat-divider"]],
          hostAttrs: ["role", "separator", 1, "mat-divider"],
          hostVars: 7,
          hostBindings: function MatDivider_HostBindings(rf, ctx) {
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-orientation", ctx.vertical ? "vertical" : "horizontal");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-divider-vertical", ctx.vertical)("mat-divider-horizontal", !ctx.vertical)("mat-divider-inset", ctx.inset);
            }
          },
          inputs: {
            vertical: "vertical",
            inset: "inset"
          },
          decls: 0,
          vars: 0,
          template: function MatDivider_Template(rf, ctx) {},
          styles: [".mat-divider{display:block;margin:0;border-top-width:1px;border-top-style:solid}.mat-divider.mat-divider-vertical{border-top:0;border-right-width:1px;border-right-style:solid}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}\n"],
          encapsulation: 2,
          changeDetection: 0
        });
        return MatDivider;
      }();

      var MatDividerModule = /*@__PURE__*/function () {
        var MatDividerModule = /*#__PURE__*/_createClass(function MatDividerModule() {
          _classCallCheck(this, MatDividerModule);
        });

        MatDividerModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: MatDividerModule
        });
        MatDividerModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function MatDividerModule_Factory(t) {
            return new (t || MatDividerModule)();
          },
          imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]]
        });
        return MatDividerModule;
      }();
      /*@__PURE__*/


      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatDividerModule, {
          declarations: function declarations() {
            return [MatDivider];
          },
          imports: function imports() {
            return [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]];
          },
          exports: function exports() {
            return [MatDivider, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]];
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
      //# sourceMappingURL=divider.js.map

      /***/

    }
  }]);
})();