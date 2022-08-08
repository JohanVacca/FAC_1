(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "+0xr":
/*!***********************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js ***!
  \***********************************************************************/
/*! exports provided: MatCell, MatCellDef, MatColumnDef, MatFooterCell, MatFooterCellDef, MatFooterRow, MatFooterRowDef, MatHeaderCell, MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatNoDataRow, MatRow, MatRowDef, MatTable, MatTableDataSource, MatTableModule, MatTextColumn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCell", function() { return MatCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCellDef", function() { return MatCellDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatColumnDef", function() { return MatColumnDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatFooterCell", function() { return MatFooterCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatFooterCellDef", function() { return MatFooterCellDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatFooterRow", function() { return MatFooterRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatFooterRowDef", function() { return MatFooterRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatHeaderCell", function() { return MatHeaderCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatHeaderCellDef", function() { return MatHeaderCellDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatHeaderRow", function() { return MatHeaderRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatHeaderRowDef", function() { return MatHeaderRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatNoDataRow", function() { return MatNoDataRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatRow", function() { return MatRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatRowDef", function() { return MatRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTable", function() { return MatTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTableDataSource", function() { return MatTableDataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTableModule", function() { return MatTableModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTextColumn", function() { return MatTextColumn; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/table */ "f6nW");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");







/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Wrapper for the CdkTable with Material design styles.
 */


const _c0 = [[["caption"]], [["colgroup"], ["col"]]];
const _c1 = ["caption", "colgroup, col"];
function MatTextColumn_th_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("text-align", ctx_r0.justify);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.headerText, " ");
    }
}
function MatTextColumn_td_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const data_r2 = ctx.$implicit;
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("text-align", ctx_r1.justify);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.dataAccessor(data_r2, ctx_r1.name), " ");
    }
}
let MatTable = /*@__PURE__*/ (() => {
    class MatTable extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTable"] {
        constructor() {
            super(...arguments);
            /** Overrides the sticky CSS class set by the `CdkTable`. */
            this.stickyCssClass = 'mat-table-sticky';
            /** Overrides the need to add position: sticky on every sticky cell element in `CdkTable`. */
            this.needsPositionStickyOnElement = false;
        }
    }
    MatTable.ɵfac = function MatTable_Factory(t) { return ɵMatTable_BaseFactory(t || MatTable); };
    MatTable.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatTable, selectors: [["mat-table"], ["table", "mat-table", ""]], hostAttrs: [1, "mat-table"], exportAs: ["matTable"], features: [/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
                // TODO(michaeljamesparsons) Abstract the view repeater strategy to a directive API so this code
                //  is only included in the build if used.
                { provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["_VIEW_REPEATER_STRATEGY"], useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["_DisposeViewRepeaterStrategy"] },
                { provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTable"], useExisting: MatTable },
                { provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CDK_TABLE"], useExisting: MatTable },
                { provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["_COALESCED_STYLE_SCHEDULER"], useClass: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["_CoalescedStyleScheduler"] },
            ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c1, decls: 6, vars: 0, consts: [["headerRowOutlet", ""], ["rowOutlet", ""], ["noDataRowOutlet", ""], ["footerRowOutlet", ""]], template: function MatTable_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](2, 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](3, 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](4, 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](5, 3);
            }
        }, directives: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["HeaderRowOutlet"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["DataRowOutlet"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["NoDataRowOutlet"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["FooterRowOutlet"]], styles: ["mat-table{display:block}mat-header-row{min-height:56px}mat-row,mat-footer-row{min-height:48px}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-row::after,mat-header-row::after,mat-footer-row::after{display:inline-block;min-height:inherit;content:\"\"}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}table.mat-table{border-spacing:0}tr.mat-header-row{height:56px}tr.mat-row,tr.mat-footer-row{height:48px}th.mat-header-cell{text-align:left}[dir=rtl] th.mat-header-cell{text-align:right}th.mat-header-cell,td.mat-cell,td.mat-footer-cell{padding:0;border-bottom-width:1px;border-bottom-style:solid}th.mat-header-cell:first-of-type,td.mat-cell:first-of-type,td.mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] th.mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] td.mat-cell:first-of-type:not(:only-of-type),[dir=rtl] td.mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}th.mat-header-cell:last-of-type,td.mat-cell:last-of-type,td.mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] th.mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] td.mat-cell:last-of-type:not(:only-of-type),[dir=rtl] td.mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}.mat-table-sticky{position:-webkit-sticky;position:sticky}\n"], encapsulation: 2 });
    return MatTable;
})();
const ɵMatTable_BaseFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatTable);
let MatCellDef = /*@__PURE__*/ (() => {
    class MatCellDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellDef"] {
    }
    MatCellDef.ɵfac = function MatCellDef_Factory(t) { return ɵMatCellDef_BaseFactory(t || MatCellDef); };
    MatCellDef.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatCellDef, selectors: [["", "matCellDef", ""]], features: [/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellDef"], useExisting: MatCellDef }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
    return MatCellDef;
})();
const ɵMatCellDef_BaseFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatCellDef);
let MatHeaderCellDef = /*@__PURE__*/ (() => {
    class MatHeaderCellDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderCellDef"] {
    }
    MatHeaderCellDef.ɵfac = function MatHeaderCellDef_Factory(t) { return ɵMatHeaderCellDef_BaseFactory(t || MatHeaderCellDef); };
    MatHeaderCellDef.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatHeaderCellDef, selectors: [["", "matHeaderCellDef", ""]], features: [/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderCellDef"], useExisting: MatHeaderCellDef }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
    return MatHeaderCellDef;
})();
const ɵMatHeaderCellDef_BaseFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatHeaderCellDef);
let MatFooterCellDef = /*@__PURE__*/ (() => {
    class MatFooterCellDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterCellDef"] {
    }
    MatFooterCellDef.ɵfac = function MatFooterCellDef_Factory(t) { return ɵMatFooterCellDef_BaseFactory(t || MatFooterCellDef); };
    MatFooterCellDef.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatFooterCellDef, selectors: [["", "matFooterCellDef", ""]], features: [/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterCellDef"], useExisting: MatFooterCellDef }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
    return MatFooterCellDef;
})();
const ɵMatFooterCellDef_BaseFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatFooterCellDef);
let MatColumnDef = /*@__PURE__*/ (() => {
    class MatColumnDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"] {
        /** Unique name for this column. */
        get name() { return this._name; }
        set name(name) { this._setNameInput(name); }
        /**
         * Add "mat-column-" prefix in addition to "cdk-column-" prefix.
         * In the future, this will only add "mat-column-" and columnCssClassName
         * will change from type string[] to string.
         * @docs-private
         */
        _updateColumnCssClassName() {
            super._updateColumnCssClassName();
            this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`);
        }
    }
    MatColumnDef.ɵfac = function MatColumnDef_Factory(t) { return ɵMatColumnDef_BaseFactory(t || MatColumnDef); };
    MatColumnDef.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatColumnDef, selectors: [["", "matColumnDef", ""]], inputs: { sticky: "sticky", name: ["matColumnDef", "name"] }, features: [/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
                { provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"], useExisting: MatColumnDef },
                { provide: 'MAT_SORT_HEADER_COLUMN_DEF', useExisting: MatColumnDef }
            ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
    return MatColumnDef;
})();
const ɵMatColumnDef_BaseFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatColumnDef);
let MatHeaderCell = /*@__PURE__*/ (() => {
    class MatHeaderCell extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderCell"] {
    }
    MatHeaderCell.ɵfac = function MatHeaderCell_Factory(t) { return ɵMatHeaderCell_BaseFactory(t || MatHeaderCell); };
    MatHeaderCell.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatHeaderCell, selectors: [["mat-header-cell"], ["th", "mat-header-cell", ""]], hostAttrs: ["role", "columnheader", 1, "mat-header-cell"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
    return MatHeaderCell;
})();
const ɵMatHeaderCell_BaseFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatHeaderCell);
let MatFooterCell = /*@__PURE__*/ (() => {
    class MatFooterCell extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterCell"] {
    }
    MatFooterCell.ɵfac = function MatFooterCell_Factory(t) { return ɵMatFooterCell_BaseFactory(t || MatFooterCell); };
    MatFooterCell.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatFooterCell, selectors: [["mat-footer-cell"], ["td", "mat-footer-cell", ""]], hostAttrs: ["role", "gridcell", 1, "mat-footer-cell"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
    return MatFooterCell;
})();
const ɵMatFooterCell_BaseFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatFooterCell);
let MatCell = /*@__PURE__*/ (() => {
    class MatCell extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCell"] {
    }
    MatCell.ɵfac = function MatCell_Factory(t) { return ɵMatCell_BaseFactory(t || MatCell); };
    MatCell.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatCell, selectors: [["mat-cell"], ["td", "mat-cell", ""]], hostAttrs: ["role", "gridcell", 1, "mat-cell"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
    return MatCell;
})();
const ɵMatCell_BaseFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatCell);
let MatHeaderRowDef = /*@__PURE__*/ (() => {
    class MatHeaderRowDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRowDef"] {
    }
    MatHeaderRowDef.ɵfac = function MatHeaderRowDef_Factory(t) { return ɵMatHeaderRowDef_BaseFactory(t || MatHeaderRowDef); };
    MatHeaderRowDef.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatHeaderRowDef, selectors: [["", "matHeaderRowDef", ""]], inputs: { columns: ["matHeaderRowDef", "columns"], sticky: ["matHeaderRowDefSticky", "sticky"] }, features: [/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRowDef"], useExisting: MatHeaderRowDef }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
    return MatHeaderRowDef;
})();
const ɵMatHeaderRowDef_BaseFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatHeaderRowDef);
let MatFooterRowDef = /*@__PURE__*/ (() => {
    class MatFooterRowDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRowDef"] {
    }
    MatFooterRowDef.ɵfac = function MatFooterRowDef_Factory(t) { return ɵMatFooterRowDef_BaseFactory(t || MatFooterRowDef); };
    MatFooterRowDef.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatFooterRowDef, selectors: [["", "matFooterRowDef", ""]], inputs: { columns: ["matFooterRowDef", "columns"], sticky: ["matFooterRowDefSticky", "sticky"] }, features: [/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRowDef"], useExisting: MatFooterRowDef }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
    return MatFooterRowDef;
})();
const ɵMatFooterRowDef_BaseFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatFooterRowDef);
let MatRowDef = /*@__PURE__*/ (() => {
    class MatRowDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRowDef"] {
    }
    MatRowDef.ɵfac = function MatRowDef_Factory(t) { return ɵMatRowDef_BaseFactory(t || MatRowDef); };
    MatRowDef.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatRowDef, selectors: [["", "matRowDef", ""]], inputs: { columns: ["matRowDefColumns", "columns"], when: ["matRowDefWhen", "when"] }, features: [/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRowDef"], useExisting: MatRowDef }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
    return MatRowDef;
})();
const ɵMatRowDef_BaseFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatRowDef);
let MatHeaderRow = /*@__PURE__*/ (() => {
    class MatHeaderRow extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRow"] {
    }
    MatHeaderRow.ɵfac = function MatHeaderRow_Factory(t) { return ɵMatHeaderRow_BaseFactory(t || MatHeaderRow); };
    MatHeaderRow.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatHeaderRow, selectors: [["mat-header-row"], ["tr", "mat-header-row", ""]], hostAttrs: ["role", "row", 1, "mat-header-row"], exportAs: ["matHeaderRow"], features: [/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRow"], useExisting: MatHeaderRow }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function MatHeaderRow_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 0);
            }
        }, directives: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellOutlet"]], encapsulation: 2 });
    return MatHeaderRow;
})();
const ɵMatHeaderRow_BaseFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatHeaderRow);
let MatFooterRow = /*@__PURE__*/ (() => {
    class MatFooterRow extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRow"] {
    }
    MatFooterRow.ɵfac = function MatFooterRow_Factory(t) { return ɵMatFooterRow_BaseFactory(t || MatFooterRow); };
    MatFooterRow.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatFooterRow, selectors: [["mat-footer-row"], ["tr", "mat-footer-row", ""]], hostAttrs: ["role", "row", 1, "mat-footer-row"], exportAs: ["matFooterRow"], features: [/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRow"], useExisting: MatFooterRow }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function MatFooterRow_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 0);
            }
        }, directives: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellOutlet"]], encapsulation: 2 });
    return MatFooterRow;
})();
const ɵMatFooterRow_BaseFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatFooterRow);
let MatRow = /*@__PURE__*/ (() => {
    class MatRow extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRow"] {
    }
    MatRow.ɵfac = function MatRow_Factory(t) { return ɵMatRow_BaseFactory(t || MatRow); };
    MatRow.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatRow, selectors: [["mat-row"], ["tr", "mat-row", ""]], hostAttrs: ["role", "row", 1, "mat-row"], exportAs: ["matRow"], features: [/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRow"], useExisting: MatRow }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function MatRow_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 0);
            }
        }, directives: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellOutlet"]], encapsulation: 2 });
    return MatRow;
})();
const ɵMatRow_BaseFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatRow);
let MatNoDataRow = /*@__PURE__*/ (() => {
    class MatNoDataRow extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkNoDataRow"] {
    }
    MatNoDataRow.ɵfac = function MatNoDataRow_Factory(t) { return ɵMatNoDataRow_BaseFactory(t || MatNoDataRow); };
    MatNoDataRow.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatNoDataRow, selectors: [["ng-template", "matNoDataRow", ""]], features: [/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkNoDataRow"], useExisting: MatNoDataRow }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
    return MatNoDataRow;
})();
const ɵMatNoDataRow_BaseFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatNoDataRow);
let MatTextColumn = /*@__PURE__*/ (() => {
    class MatTextColumn extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTextColumn"] {
    }
    MatTextColumn.ɵfac = function MatTextColumn_Factory(t) { return ɵMatTextColumn_BaseFactory(t || MatTextColumn); };
    MatTextColumn.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatTextColumn, selectors: [["mat-text-column"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 0, consts: [["matColumnDef", ""], ["mat-header-cell", "", 3, "text-align", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "text-align", 4, "matCellDef"], ["mat-header-cell", ""], ["mat-cell", ""]], template: function MatTextColumn_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatTextColumn_th_1_Template, 2, 3, "th", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatTextColumn_td_2_Template, 2, 3, "td", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            }
        }, directives: [MatColumnDef, MatHeaderCellDef, MatCellDef, MatHeaderCell, MatCell], encapsulation: 2 });
    return MatTextColumn;
})();
const ɵMatTextColumn_BaseFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatTextColumn);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const EXPORTED_DECLARATIONS = [
    // Table
    MatTable,
    // Template defs
    MatHeaderCellDef,
    MatHeaderRowDef,
    MatColumnDef,
    MatCellDef,
    MatRowDef,
    MatFooterCellDef,
    MatFooterRowDef,
    // Cell directives
    MatHeaderCell,
    MatCell,
    MatFooterCell,
    // Row directives
    MatHeaderRow,
    MatRow,
    MatFooterRow,
    MatNoDataRow,
    MatTextColumn,
];
let MatTableModule = /*@__PURE__*/ (() => {
    class MatTableModule {
    }
    MatTableModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatTableModule });
    MatTableModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MatTableModule_Factory(t) { return new (t || MatTableModule)(); }, imports: [[
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTableModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"],
            ], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]] });
    return MatTableModule;
})();
/*@__PURE__*/ (function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatTableModule, { declarations: function () { return [MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatFooterCellDef, MatFooterRowDef, MatHeaderCell, MatCell, MatFooterCell, MatHeaderRow, MatRow, MatFooterRow, MatNoDataRow, MatTextColumn]; }, imports: function () {
            return [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTableModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]];
        }, exports: function () { return [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatFooterCellDef, MatFooterRowDef, MatHeaderCell, MatCell, MatFooterCell, MatHeaderRow, MatRow, MatFooterRow, MatNoDataRow, MatTextColumn]; } });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Corresponds to `Number.MAX_SAFE_INTEGER`. Moved out into a variable here due to
 * flaky browser support and the value not being defined in Closure's typings.
 */
const MAX_SAFE_INTEGER = 9007199254740991;
/**
 * Data source that accepts a client-side data array and includes native support of filtering,
 * sorting (using MatSort), and pagination (using MatPaginator).
 *
 * Allows for sort customization by overriding sortingDataAccessor, which defines how data
 * properties are accessed. Also allows for filter customization by overriding filterTermAccessor,
 * which defines how row data is converted to a string for filter matching.
 *
 * **Note:** This class is meant to be a simple data source to help you get started. As such
 * it isn't equipped to handle some more advanced cases like robust i18n support or server-side
 * interactions. If your app needs to support more advanced use cases, consider implementing your
 * own `DataSource`.
 */
class MatTableDataSource extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["DataSource"] {
    constructor(initialData = []) {
        super();
        /** Stream emitting render data to the table (depends on ordered data changes). */
        this._renderData = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]([]);
        /** Stream that emits when a new filter string is set on the data source. */
        this._filter = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]('');
        /** Used to react to internal changes of the paginator that are made by the data source itself. */
        this._internalPageChanges = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Subscription to the changes that should trigger an update to the table's rendered rows, such
         * as filtering, sorting, pagination, or base data changes.
         */
        this._renderChangesSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        /**
         * Data accessor function that is used for accessing data properties for sorting through
         * the default sortData function.
         * This default function assumes that the sort header IDs (which defaults to the column name)
         * matches the data's properties (e.g. column Xyz represents data['Xyz']).
         * May be set to a custom function for different behavior.
         * @param data Data object that is being accessed.
         * @param sortHeaderId The name of the column that represents the data.
         */
        this.sortingDataAccessor = (data, sortHeaderId) => {
            const value = data[sortHeaderId];
            if (Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["_isNumberValue"])(value)) {
                const numberValue = Number(value);
                // Numbers beyond `MAX_SAFE_INTEGER` can't be compared reliably so we
                // leave them as strings. For more info: https://goo.gl/y5vbSg
                return numberValue < MAX_SAFE_INTEGER ? numberValue : value;
            }
            return value;
        };
        /**
         * Gets a sorted copy of the data array based on the state of the MatSort. Called
         * after changes are made to the filtered data or when sort changes are emitted from MatSort.
         * By default, the function retrieves the active sort and its direction and compares data
         * by retrieving data using the sortingDataAccessor. May be overridden for a custom implementation
         * of data ordering.
         * @param data The array of data that should be sorted.
         * @param sort The connected MatSort that holds the current sort state.
         */
        this.sortData = (data, sort) => {
            const active = sort.active;
            const direction = sort.direction;
            if (!active || direction == '') {
                return data;
            }
            return data.sort((a, b) => {
                let valueA = this.sortingDataAccessor(a, active);
                let valueB = this.sortingDataAccessor(b, active);
                // If there are data in the column that can be converted to a number,
                // it must be ensured that the rest of the data
                // is of the same type so as not to order incorrectly.
                const valueAType = typeof valueA;
                const valueBType = typeof valueB;
                if (valueAType !== valueBType) {
                    if (valueAType === 'number') {
                        valueA += '';
                    }
                    if (valueBType === 'number') {
                        valueB += '';
                    }
                }
                // If both valueA and valueB exist (truthy), then compare the two. Otherwise, check if
                // one value exists while the other doesn't. In this case, existing value should come last.
                // This avoids inconsistent results when comparing values to undefined/null.
                // If neither value exists, return 0 (equal).
                let comparatorResult = 0;
                if (valueA != null && valueB != null) {
                    // Check if one value is greater than the other; if equal, comparatorResult should remain 0.
                    if (valueA > valueB) {
                        comparatorResult = 1;
                    }
                    else if (valueA < valueB) {
                        comparatorResult = -1;
                    }
                }
                else if (valueA != null) {
                    comparatorResult = 1;
                }
                else if (valueB != null) {
                    comparatorResult = -1;
                }
                return comparatorResult * (direction == 'asc' ? 1 : -1);
            });
        };
        /**
         * Checks if a data object matches the data source's filter string. By default, each data object
         * is converted to a string of its properties and returns true if the filter has
         * at least one occurrence in that string. By default, the filter string has its whitespace
         * trimmed and the match is case-insensitive. May be overridden for a custom implementation of
         * filter matching.
         * @param data Data object used to check against the filter.
         * @param filter Filter string that has been set on the data source.
         * @returns Whether the filter matches against the data
         */
        this.filterPredicate = (data, filter) => {
            // Transform the data into a lowercase string of all property values.
            const dataStr = Object.keys(data).reduce((currentTerm, key) => {
                // Use an obscure Unicode character to delimit the words in the concatenated string.
                // This avoids matches where the values of two columns combined will match the user's query
                // (e.g. `Flute` and `Stop` will match `Test`). The character is intended to be something
                // that has a very low chance of being typed in by somebody in a text field. This one in
                // particular is "White up-pointing triangle with dot" from
                // https://en.wikipedia.org/wiki/List_of_Unicode_characters
                return currentTerm + data[key] + '◬';
            }, '').toLowerCase();
            // Transform the filter by converting it to lowercase and removing whitespace.
            const transformedFilter = filter.trim().toLowerCase();
            return dataStr.indexOf(transformedFilter) != -1;
        };
        this._data = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](initialData);
        this._updateChangeSubscription();
    }
    /** Array of data that should be rendered by the table, where each object represents one row. */
    get data() { return this._data.value; }
    set data(data) { this._data.next(data); }
    /**
     * Filter term that should be used to filter out objects from the data array. To override how
     * data objects match to this filter string, provide a custom function for filterPredicate.
     */
    get filter() { return this._filter.value; }
    set filter(filter) { this._filter.next(filter); }
    /**
     * Instance of the MatSort directive used by the table to control its sorting. Sort changes
     * emitted by the MatSort will trigger an update to the table's rendered data.
     */
    get sort() { return this._sort; }
    set sort(sort) {
        this._sort = sort;
        this._updateChangeSubscription();
    }
    /**
     * Instance of the MatPaginator component used by the table to control what page of the data is
     * displayed. Page changes emitted by the MatPaginator will trigger an update to the
     * table's rendered data.
     *
     * Note that the data source uses the paginator's properties to calculate which page of data
     * should be displayed. If the paginator receives its properties as template inputs,
     * e.g. `[pageLength]=100` or `[pageIndex]=1`, then be sure that the paginator's view has been
     * initialized before assigning it to this data source.
     */
    get paginator() { return this._paginator; }
    set paginator(paginator) {
        this._paginator = paginator;
        this._updateChangeSubscription();
    }
    /**
     * Subscribe to changes that should trigger an update to the table's rendered rows. When the
     * changes occur, process the current state of the filter, sort, and pagination along with
     * the provided base data and send it to the table for rendering.
     */
    _updateChangeSubscription() {
        // Sorting and/or pagination should be watched if MatSort and/or MatPaginator are provided.
        // The events should emit whenever the component emits a change or initializes, or if no
        // component is provided, a stream with just a null event should be provided.
        // The `sortChange` and `pageChange` acts as a signal to the combineLatests below so that the
        // pipeline can progress to the next step. Note that the value from these streams are not used,
        // they purely act as a signal to progress in the pipeline.
        const sortChange = this._sort ?
            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(this._sort.sortChange, this._sort.initialized) :
            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
        const pageChange = this._paginator ?
            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(this._paginator.page, this._internalPageChanges, this._paginator.initialized) :
            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
        const dataStream = this._data;
        // Watch for base data or filter changes to provide a filtered set of data.
        const filteredData = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])([dataStream, this._filter])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(([data]) => this._filterData(data)));
        // Watch for filtered data or sort changes to provide an ordered set of data.
        const orderedData = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])([filteredData, sortChange])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(([data]) => this._orderData(data)));
        // Watch for ordered data or page changes to provide a paged set of data.
        const paginatedData = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])([orderedData, pageChange])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(([data]) => this._pageData(data)));
        // Watched for paged data changes and send the result to the table to render.
        this._renderChangesSubscription.unsubscribe();
        this._renderChangesSubscription = paginatedData.subscribe(data => this._renderData.next(data));
    }
    /**
     * Returns a filtered data array where each filter object contains the filter string within
     * the result of the filterTermAccessor function. If no filter is set, returns the data array
     * as provided.
     */
    _filterData(data) {
        // If there is a filter string, filter out data that does not contain it.
        // Each data object is converted to a string using the function defined by filterTermAccessor.
        // May be overridden for customization.
        this.filteredData =
            !this.filter ? data : data.filter(obj => this.filterPredicate(obj, this.filter));
        if (this.paginator) {
            this._updatePaginator(this.filteredData.length);
        }
        return this.filteredData;
    }
    /**
     * Returns a sorted copy of the data if MatSort has a sort applied, otherwise just returns the
     * data array as provided. Uses the default data accessor for data lookup, unless a
     * sortDataAccessor function is defined.
     */
    _orderData(data) {
        // If there is no active sort or direction, return the data without trying to sort.
        if (!this.sort) {
            return data;
        }
        return this.sortData(data.slice(), this.sort);
    }
    /**
     * Returns a paged slice of the provided data array according to the provided MatPaginator's page
     * index and length. If there is no paginator provided, returns the data array as provided.
     */
    _pageData(data) {
        if (!this.paginator) {
            return data;
        }
        const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return data.slice(startIndex, startIndex + this.paginator.pageSize);
    }
    /**
     * Updates the paginator to reflect the length of the filtered data, and makes sure that the page
     * index does not exceed the paginator's last page. Values are changed in a resolved promise to
     * guard against making property changes within a round of change detection.
     */
    _updatePaginator(filteredDataLength) {
        Promise.resolve().then(() => {
            const paginator = this.paginator;
            if (!paginator) {
                return;
            }
            paginator.length = filteredDataLength;
            // If the page index is set beyond the page, reduce it to the last page.
            if (paginator.pageIndex > 0) {
                const lastPageIndex = Math.ceil(paginator.length / paginator.pageSize) - 1 || 0;
                const newPageIndex = Math.min(paginator.pageIndex, lastPageIndex);
                if (newPageIndex !== paginator.pageIndex) {
                    paginator.pageIndex = newPageIndex;
                    // Since the paginator only emits after user-generated changes,
                    // we need our own stream so we know to should re-render the data.
                    this._internalPageChanges.next();
                }
            }
        });
    }
    /**
     * Used by the MatTable. Called when it connects to the data source.
     * @docs-private
     */
    connect() { return this._renderData; }
    /**
     * Used by the MatTable. Called when it is destroyed. No-op.
     * @docs-private
     */
    disconnect() { }
}
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

//# sourceMappingURL=table.js.map


/***/ }),

/***/ "1jcm":
/*!******************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js ***!
  \******************************************************************************/
/*! exports provided: MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS, MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR, MAT_SLIDE_TOGGLE_VALUE_ACCESSOR, MatSlideToggle, MatSlideToggleChange, MatSlideToggleModule, MatSlideToggleRequiredValidator, _MatSlideToggleRequiredValidatorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS", function() { return MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR", function() { return MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SLIDE_TOGGLE_VALUE_ACCESSOR", function() { return MAT_SLIDE_TOGGLE_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSlideToggle", function() { return MatSlideToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSlideToggleChange", function() { return MatSlideToggleChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSlideToggleModule", function() { return MatSlideToggleModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSlideToggleRequiredValidator", function() { return MatSlideToggleRequiredValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatSlideToggleRequiredValidatorModule", function() { return _MatSlideToggleRequiredValidatorModule; });
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/observers */ "GU7r");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");







/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Injection token to be used to override the default options for `mat-slide-toggle`. */




const _c0 = ["thumbContainer"];
const _c1 = ["toggleBar"];
const _c2 = ["input"];
const _c3 = function () { return { enterDuration: 150 }; };
const _c4 = ["*"];
const MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS = /*@__PURE__*/ new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('mat-slide-toggle-default-options', {
    providedIn: 'root',
    factory: () => ({ disableToggleValue: false })
});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Increasing integer for generating unique ids for slide-toggle components.
let nextUniqueId = 0;
/** @docs-private */
const MAT_SLIDE_TOGGLE_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"],
    useExisting: /*@__PURE__*/ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => MatSlideToggle),
    multi: true
};
/** Change event object emitted by a MatSlideToggle. */
class MatSlideToggleChange {
    constructor(
    /** The source MatSlideToggle of the event. */
    source, 
    /** The new `checked` value of the MatSlideToggle. */
    checked) {
        this.source = source;
        this.checked = checked;
    }
}
// Boilerplate for applying mixins to MatSlideToggle.
/** @docs-private */
class MatSlideToggleBase {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
}
const _MatSlideToggleMixinBase = /*@__PURE__*/ Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinTabIndex"])(/*@__PURE__*/ Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinColor"])(/*@__PURE__*/ Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisableRipple"])(/*@__PURE__*/ Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])(MatSlideToggleBase)), 'accent'));
let MatSlideToggle = /*@__PURE__*/ (() => {
    class MatSlideToggle extends _MatSlideToggleMixinBase {
        constructor(elementRef, _focusMonitor, _changeDetectorRef, tabIndex, defaults, _animationMode) {
            super(elementRef);
            this._focusMonitor = _focusMonitor;
            this._changeDetectorRef = _changeDetectorRef;
            this.defaults = defaults;
            this._animationMode = _animationMode;
            this._onChange = (_) => { };
            this._onTouched = () => { };
            this._uniqueId = `mat-slide-toggle-${++nextUniqueId}`;
            this._required = false;
            this._checked = false;
            /** Name value will be applied to the input element if present. */
            this.name = null;
            /** A unique id for the slide-toggle input. If none is supplied, it will be auto-generated. */
            this.id = this._uniqueId;
            /** Whether the label should appear after or before the slide-toggle. Defaults to 'after'. */
            this.labelPosition = 'after';
            /** Used to set the aria-label attribute on the underlying input element. */
            this.ariaLabel = null;
            /** Used to set the aria-labelledby attribute on the underlying input element. */
            this.ariaLabelledby = null;
            /** An event will be dispatched each time the slide-toggle changes its value. */
            this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            /**
             * An event will be dispatched each time the slide-toggle input is toggled.
             * This event is always emitted when the user toggles the slide toggle, but this does not mean
             * the slide toggle's value has changed.
             */
            this.toggleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.tabIndex = parseInt(tabIndex) || 0;
        }
        /** Whether the slide-toggle is required. */
        get required() { return this._required; }
        set required(value) { this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value); }
        /** Whether the slide-toggle element is checked or not. */
        get checked() { return this._checked; }
        set checked(value) {
            this._checked = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
            this._changeDetectorRef.markForCheck();
        }
        /** Returns the unique id for the visual hidden input. */
        get inputId() { return `${this.id || this._uniqueId}-input`; }
        ngAfterContentInit() {
            this._focusMonitor
                .monitor(this._elementRef, true)
                .subscribe(focusOrigin => {
                // Only forward focus manually when it was received programmatically or through the
                // keyboard. We should not do this for mouse/touch focus for two reasons:
                // 1. It can prevent clicks from landing in Chrome (see #18269).
                // 2. They're already handled by the wrapping `label` element.
                if (focusOrigin === 'keyboard' || focusOrigin === 'program') {
                    this._inputElement.nativeElement.focus();
                }
                else if (!focusOrigin) {
                    // When a focused element becomes disabled, the browser *immediately* fires a blur event.
                    // Angular does not expect events to be raised during change detection, so any state
                    // change (such as a form control's 'ng-touched') will cause a changed-after-checked
                    // error. See https://github.com/angular/angular/issues/17793. To work around this,
                    // we defer telling the form control it has been touched until the next tick.
                    Promise.resolve().then(() => this._onTouched());
                }
            });
        }
        ngOnDestroy() {
            this._focusMonitor.stopMonitoring(this._elementRef);
        }
        /** Method being called whenever the underlying input emits a change event. */
        _onChangeEvent(event) {
            // We always have to stop propagation on the change event.
            // Otherwise the change event, from the input element, will bubble up and
            // emit its event object to the component's `change` output.
            event.stopPropagation();
            this.toggleChange.emit();
            // When the slide toggle's config disables toggle change event by setting
            // `disableToggleValue: true`, the slide toggle's value does not change, and the
            // checked state of the underlying input needs to be changed back.
            if (this.defaults.disableToggleValue) {
                this._inputElement.nativeElement.checked = this.checked;
                return;
            }
            // Sync the value from the underlying input element with the component instance.
            this.checked = this._inputElement.nativeElement.checked;
            // Emit our custom change event only if the underlying input emitted one. This ensures that
            // there is no change event, when the checked state changes programmatically.
            this._emitChangeEvent();
        }
        /** Method being called whenever the slide-toggle has been clicked. */
        _onInputClick(event) {
            // We have to stop propagation for click events on the visual hidden input element.
            // By default, when a user clicks on a label element, a generated click event will be
            // dispatched on the associated input element. Since we are using a label element as our
            // root container, the click event on the `slide-toggle` will be executed twice.
            // The real click event will bubble up, and the generated click event also tries to bubble up.
            // This will lead to multiple click events.
            // Preventing bubbling for the second event will solve that issue.
            event.stopPropagation();
        }
        /** Implemented as part of ControlValueAccessor. */
        writeValue(value) {
            this.checked = !!value;
        }
        /** Implemented as part of ControlValueAccessor. */
        registerOnChange(fn) {
            this._onChange = fn;
        }
        /** Implemented as part of ControlValueAccessor. */
        registerOnTouched(fn) {
            this._onTouched = fn;
        }
        /** Implemented as a part of ControlValueAccessor. */
        setDisabledState(isDisabled) {
            this.disabled = isDisabled;
            this._changeDetectorRef.markForCheck();
        }
        /** Focuses the slide-toggle. */
        focus(options) {
            this._focusMonitor.focusVia(this._inputElement, 'keyboard', options);
        }
        /** Toggles the checked state of the slide-toggle. */
        toggle() {
            this.checked = !this.checked;
            this._onChange(this.checked);
        }
        /**
         * Emits a change event on the `change` output. Also notifies the FormControl about the change.
         */
        _emitChangeEvent() {
            this._onChange(this.checked);
            this.change.emit(new MatSlideToggleChange(this, this.checked));
        }
        /** Method being called whenever the label text changes. */
        _onLabelTextChange() {
            // Since the event of the `cdkObserveContent` directive runs outside of the zone, the
            // slide-toggle component will be only marked for check, but no actual change detection runs
            // automatically. Instead of going back into the zone in order to trigger a change detection
            // which causes *all* components to be checked (if explicitly marked or not using OnPush),
            // we only trigger an explicit change detection for the slide-toggle view and its children.
            this._changeDetectorRef.detectChanges();
        }
    }
    MatSlideToggle.ɵfac = function MatSlideToggle_Factory(t) { return new (t || MatSlideToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8)); };
    MatSlideToggle.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MatSlideToggle, selectors: [["mat-slide-toggle"]], viewQuery: function MatSlideToggle_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);
            }
            if (rf & 2) {
                var _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._thumbEl = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._thumbBarEl = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._inputElement = _t.first);
            }
        }, hostAttrs: [1, "mat-slide-toggle"], hostVars: 12, hostBindings: function MatSlideToggle_HostBindings(rf, ctx) {
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("id", ctx.id);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", ctx.disabled ? null : -1)("aria-label", null)("aria-labelledby", null);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-checked", ctx.checked)("mat-disabled", ctx.disabled)("mat-slide-toggle-label-before", ctx.labelPosition == "before")("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
            }
        }, inputs: { disabled: "disabled", disableRipple: "disableRipple", color: "color", tabIndex: "tabIndex", name: "name", id: "id", labelPosition: "labelPosition", ariaLabel: ["aria-label", "ariaLabel"], ariaLabelledby: ["aria-labelledby", "ariaLabelledby"], required: "required", checked: "checked" }, outputs: { change: "change", toggleChange: "toggleChange" }, exportAs: ["matSlideToggle"], features: [/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([MAT_SLIDE_TOGGLE_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c4, decls: 16, vars: 18, consts: [[1, "mat-slide-toggle-label"], ["label", ""], [1, "mat-slide-toggle-bar"], ["toggleBar", ""], ["type", "checkbox", "role", "switch", 1, "mat-slide-toggle-input", "cdk-visually-hidden", 3, "id", "required", "tabIndex", "checked", "disabled", "change", "click"], ["input", ""], [1, "mat-slide-toggle-thumb-container"], ["thumbContainer", ""], [1, "mat-slide-toggle-thumb"], ["mat-ripple", "", 1, "mat-slide-toggle-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered", "matRippleRadius", "matRippleAnimation"], [1, "mat-ripple-element", "mat-slide-toggle-persistent-ripple"], [1, "mat-slide-toggle-content", 3, "cdkObserveContent"], ["labelContent", ""], [2, "display", "none"]], template: function MatSlideToggle_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 0, 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2, 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 4, 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function MatSlideToggle_Template_input_change_4_listener($event) { return ctx._onChangeEvent($event); })("click", function MatSlideToggle_Template_input_click_4_listener($event) { return ctx._onInputClick($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6, 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 11, 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkObserveContent", function MatSlideToggle_Template_span_cdkObserveContent_11_listener() { return ctx._onLabelTextChange(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\u00A0");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](15);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
                const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("for", ctx.inputId);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-slide-toggle-bar-no-side-margin", !_r4.textContent || !_r4.textContent.trim());
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.inputId)("required", ctx.required)("tabIndex", ctx.tabIndex)("checked", ctx.checked)("disabled", ctx.disabled);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("name", ctx.name)("aria-checked", ctx.checked.toString())("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRippleTrigger", _r0)("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleCentered", true)("matRippleRadius", 20)("matRippleAnimation", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](17, _c3));
            }
        }, directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRipple"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["CdkObserveContent"]], styles: [".mat-slide-toggle{display:inline-block;height:24px;max-width:100%;line-height:24px;white-space:nowrap;outline:none;-webkit-tap-highlight-color:transparent}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(16px, 0, 0)}[dir=rtl] .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(-16px, 0, 0)}.mat-slide-toggle.mat-disabled{opacity:.38}.mat-slide-toggle.mat-disabled .mat-slide-toggle-label,.mat-slide-toggle.mat-disabled .mat-slide-toggle-thumb-container{cursor:default}.mat-slide-toggle-label{display:flex;flex:1;flex-direction:row;align-items:center;height:inherit;cursor:pointer}.mat-slide-toggle-content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-slide-toggle-label-before .mat-slide-toggle-label{order:1}.mat-slide-toggle-label-before .mat-slide-toggle-bar{order:2}[dir=rtl] .mat-slide-toggle-label-before .mat-slide-toggle-bar,.mat-slide-toggle-bar{margin-right:8px;margin-left:0}[dir=rtl] .mat-slide-toggle-bar,.mat-slide-toggle-label-before .mat-slide-toggle-bar{margin-left:8px;margin-right:0}.mat-slide-toggle-bar-no-side-margin{margin-left:0;margin-right:0}.mat-slide-toggle-thumb-container{position:absolute;z-index:1;width:20px;height:20px;top:-3px;left:0;transform:translate3d(0, 0, 0);transition:all 80ms linear;transition-property:transform}._mat-animation-noopable .mat-slide-toggle-thumb-container{transition:none}[dir=rtl] .mat-slide-toggle-thumb-container{left:auto;right:0}.mat-slide-toggle-thumb{height:20px;width:20px;border-radius:50%}.mat-slide-toggle-bar{position:relative;width:36px;height:14px;flex-shrink:0;border-radius:8px}.mat-slide-toggle-input{bottom:0;left:10px}[dir=rtl] .mat-slide-toggle-input{left:auto;right:10px}.mat-slide-toggle-bar,.mat-slide-toggle-thumb{transition:all 80ms linear;transition-property:background-color;transition-delay:50ms}._mat-animation-noopable .mat-slide-toggle-bar,._mat-animation-noopable .mat-slide-toggle-thumb{transition:none}.mat-slide-toggle .mat-slide-toggle-ripple{position:absolute;top:calc(50% - 20px);left:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-slide-toggle .mat-slide-toggle-ripple .mat-ripple-element:not(.mat-slide-toggle-persistent-ripple){opacity:.12}.mat-slide-toggle-persistent-ripple{width:100%;height:100%;transform:none}.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:.04}.mat-slide-toggle:not(.mat-disabled).cdk-keyboard-focused .mat-slide-toggle-persistent-ripple{opacity:.12}.mat-slide-toggle-persistent-ripple,.mat-slide-toggle.mat-disabled .mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:0}@media(hover: none){.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{display:none}}.cdk-high-contrast-active .mat-slide-toggle-thumb,.cdk-high-contrast-active .mat-slide-toggle-bar{border:1px solid}.cdk-high-contrast-active .mat-slide-toggle.cdk-keyboard-focused .mat-slide-toggle-bar{outline:2px dotted;outline-offset:5px}\n"], encapsulation: 2, changeDetection: 0 });
    return MatSlideToggle;
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALIDATORS"],
    useExisting: /*@__PURE__*/ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => MatSlideToggleRequiredValidator),
    multi: true
};
let MatSlideToggleRequiredValidator = /*@__PURE__*/ (() => {
    class MatSlideToggleRequiredValidator extends _angular_forms__WEBPACK_IMPORTED_MODULE_5__["CheckboxRequiredValidator"] {
    }
    MatSlideToggleRequiredValidator.ɵfac = function MatSlideToggleRequiredValidator_Factory(t) { return ɵMatSlideToggleRequiredValidator_BaseFactory(t || MatSlideToggleRequiredValidator); };
    MatSlideToggleRequiredValidator.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: MatSlideToggleRequiredValidator, selectors: [["mat-slide-toggle", "required", "", "formControlName", ""], ["mat-slide-toggle", "required", "", "formControl", ""], ["mat-slide-toggle", "required", "", "ngModel", ""]], features: [/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
    return MatSlideToggleRequiredValidator;
})();
const ɵMatSlideToggleRequiredValidator_BaseFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatSlideToggleRequiredValidator);
let _MatSlideToggleRequiredValidatorModule = /*@__PURE__*/ (() => {
    class _MatSlideToggleRequiredValidatorModule {
    }
    _MatSlideToggleRequiredValidatorModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: _MatSlideToggleRequiredValidatorModule });
    _MatSlideToggleRequiredValidatorModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function _MatSlideToggleRequiredValidatorModule_Factory(t) { return new (t || _MatSlideToggleRequiredValidatorModule)(); } });
    return _MatSlideToggleRequiredValidatorModule;
})();
/*@__PURE__*/ (function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_MatSlideToggleRequiredValidatorModule, { declarations: [MatSlideToggleRequiredValidator], exports: [MatSlideToggleRequiredValidator] }); })();
let MatSlideToggleModule = /*@__PURE__*/ (() => {
    class MatSlideToggleModule {
    }
    MatSlideToggleModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MatSlideToggleModule });
    MatSlideToggleModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function MatSlideToggleModule_Factory(t) { return new (t || MatSlideToggleModule)(); }, imports: [[
                _MatSlideToggleRequiredValidatorModule,
                _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"],
                _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["ObserversModule"],
            ], _MatSlideToggleRequiredValidatorModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]] });
    return MatSlideToggleModule;
})();
/*@__PURE__*/ (function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MatSlideToggleModule, { declarations: function () { return [MatSlideToggle]; }, imports: function () {
            return [_MatSlideToggleRequiredValidatorModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"],
                _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["ObserversModule"]];
        }, exports: function () { return [_MatSlideToggleRequiredValidatorModule, MatSlideToggle, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]]; } });
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

//# sourceMappingURL=slide-toggle.js.map


/***/ }),

/***/ "f6nW":
/*!******************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js ***!
  \******************************************************************/
/*! exports provided: DataSource, BaseCdkCell, BaseRowDef, CDK_ROW_TEMPLATE, CDK_TABLE, CDK_TABLE_TEMPLATE, CdkCell, CdkCellDef, CdkCellOutlet, CdkColumnDef, CdkFooterCell, CdkFooterCellDef, CdkFooterRow, CdkFooterRowDef, CdkHeaderCell, CdkHeaderCellDef, CdkHeaderRow, CdkHeaderRowDef, CdkNoDataRow, CdkRow, CdkRowDef, CdkTable, CdkTableModule, CdkTextColumn, DataRowOutlet, FooterRowOutlet, HeaderRowOutlet, NoDataRowOutlet, STICKY_DIRECTIONS, StickyStyler, TEXT_COLUMN_OPTIONS, _COALESCED_STYLE_SCHEDULER, _CoalescedStyleScheduler, _Schedule, mixinHasStickyInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseCdkCell", function() { return BaseCdkCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseRowDef", function() { return BaseRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_ROW_TEMPLATE", function() { return CDK_ROW_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_TABLE", function() { return CDK_TABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_TABLE_TEMPLATE", function() { return CDK_TABLE_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkCell", function() { return CdkCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkCellDef", function() { return CdkCellDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkCellOutlet", function() { return CdkCellOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkColumnDef", function() { return CdkColumnDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkFooterCell", function() { return CdkFooterCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkFooterCellDef", function() { return CdkFooterCellDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkFooterRow", function() { return CdkFooterRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkFooterRowDef", function() { return CdkFooterRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkHeaderCell", function() { return CdkHeaderCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkHeaderCellDef", function() { return CdkHeaderCellDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkHeaderRow", function() { return CdkHeaderRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkHeaderRowDef", function() { return CdkHeaderRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkNoDataRow", function() { return CdkNoDataRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkRow", function() { return CdkRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkRowDef", function() { return CdkRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTable", function() { return CdkTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTableModule", function() { return CdkTableModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTextColumn", function() { return CdkTextColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataRowOutlet", function() { return DataRowOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterRowOutlet", function() { return FooterRowOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderRowOutlet", function() { return HeaderRowOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoDataRowOutlet", function() { return NoDataRowOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STICKY_DIRECTIONS", function() { return STICKY_DIRECTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StickyStyler", function() { return StickyStyler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXT_COLUMN_OPTIONS", function() { return TEXT_COLUMN_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_COALESCED_STYLE_SCHEDULER", function() { return _COALESCED_STYLE_SCHEDULER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_CoalescedStyleScheduler", function() { return _CoalescedStyleScheduler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Schedule", function() { return _Schedule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixinHasStickyInput", function() { return mixinHasStickyInput; });
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataSource", function() { return _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["DataSource"]; });

/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");






const _c0 = [[["caption"]], [["colgroup"], ["col"]]];
const _c1 = ["caption", "colgroup, col"];
function CdkTextColumn_th_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("text-align", ctx_r0.justify);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.headerText, " ");
    }
}
function CdkTextColumn_td_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const data_r2 = ctx.$implicit;
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("text-align", ctx_r1.justify);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.dataAccessor(data_r2, ctx_r1.name), " ");
    }
}







/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Mixin to provide a directive with a function that checks if the sticky input has been
 * changed since the last time the function was called. Essentially adds a dirty-check to the
 * sticky value.
 * @docs-private
 */
function mixinHasStickyInput(base) {
    return class extends base {
        constructor(...args) {
            super(...args);
            this._sticky = false;
            /** Whether the sticky input has changed since it was last checked. */
            this._hasStickyChanged = false;
        }
        /** Whether sticky positioning should be applied. */
        get sticky() { return this._sticky; }
        set sticky(v) {
            const prevValue = this._sticky;
            this._sticky = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(v);
            this._hasStickyChanged = prevValue !== this._sticky;
        }
        /** Whether the sticky value has changed since this was last called. */
        hasStickyChanged() {
            const hasStickyChanged = this._hasStickyChanged;
            this._hasStickyChanged = false;
            return hasStickyChanged;
        }
        /** Resets the dirty check for cases where the sticky state has been used without checking. */
        resetStickyChanged() {
            this._hasStickyChanged = false;
        }
    };
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Used to provide a table to some of the sub-components without causing a circular dependency.
 * @docs-private
 */
const CDK_TABLE = /*@__PURE__*/ new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('CDK_TABLE');
/** Injection token that can be used to specify the text column options. */
const TEXT_COLUMN_OPTIONS = /*@__PURE__*/ new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('text-column-options');
let CdkCellDef = /*@__PURE__*/ (() => {
    class CdkCellDef {
        constructor(/** @docs-private */ template) {
            this.template = template;
        }
    }
    CdkCellDef.ɵfac = function CdkCellDef_Factory(t) { return new (t || CdkCellDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])); };
    CdkCellDef.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkCellDef, selectors: [["", "cdkCellDef", ""]] });
    return CdkCellDef;
})();
let CdkHeaderCellDef = /*@__PURE__*/ (() => {
    class CdkHeaderCellDef {
        constructor(/** @docs-private */ template) {
            this.template = template;
        }
    }
    CdkHeaderCellDef.ɵfac = function CdkHeaderCellDef_Factory(t) { return new (t || CdkHeaderCellDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])); };
    CdkHeaderCellDef.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkHeaderCellDef, selectors: [["", "cdkHeaderCellDef", ""]] });
    return CdkHeaderCellDef;
})();
let CdkFooterCellDef = /*@__PURE__*/ (() => {
    class CdkFooterCellDef {
        constructor(/** @docs-private */ template) {
            this.template = template;
        }
    }
    CdkFooterCellDef.ɵfac = function CdkFooterCellDef_Factory(t) { return new (t || CdkFooterCellDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])); };
    CdkFooterCellDef.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkFooterCellDef, selectors: [["", "cdkFooterCellDef", ""]] });
    return CdkFooterCellDef;
})();
// Boilerplate for applying mixins to CdkColumnDef.
/** @docs-private */
class CdkColumnDefBase {
}
const _CdkColumnDefBase = /*@__PURE__*/ mixinHasStickyInput(CdkColumnDefBase);
let CdkColumnDef = /*@__PURE__*/ (() => {
    class CdkColumnDef extends _CdkColumnDefBase {
        constructor(_table) {
            super();
            this._table = _table;
            this._stickyEnd = false;
        }
        /** Unique name for this column. */
        get name() { return this._name; }
        set name(name) { this._setNameInput(name); }
        /**
         * Whether this column should be sticky positioned on the end of the row. Should make sure
         * that it mimics the `CanStick` mixin such that `_hasStickyChanged` is set to true if the value
         * has been changed.
         */
        get stickyEnd() {
            return this._stickyEnd;
        }
        set stickyEnd(v) {
            const prevValue = this._stickyEnd;
            this._stickyEnd = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(v);
            this._hasStickyChanged = prevValue !== this._stickyEnd;
        }
        /**
         * Overridable method that sets the css classes that will be added to every cell in this
         * column.
         * In the future, columnCssClassName will change from type string[] to string and this
         * will set a single string value.
         * @docs-private
         */
        _updateColumnCssClassName() {
            this._columnCssClassName = [`cdk-column-${this.cssClassFriendlyName}`];
        }
        /**
         * This has been extracted to a util because of TS 4 and VE.
         * View Engine doesn't support property rename inheritance.
         * TS 4.0 doesn't allow properties to override accessors or vice-versa.
         * @docs-private
         */
        _setNameInput(value) {
            // If the directive is set without a name (updated programatically), then this setter will
            // trigger with an empty string and should not overwrite the programatically set value.
            if (value) {
                this._name = value;
                this.cssClassFriendlyName = value.replace(/[^a-z0-9_-]/ig, '-');
                this._updateColumnCssClassName();
            }
        }
    }
    CdkColumnDef.ɵfac = function CdkColumnDef_Factory(t) { return new (t || CdkColumnDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CDK_TABLE, 8)); };
    CdkColumnDef.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkColumnDef, selectors: [["", "cdkColumnDef", ""]], contentQueries: function CdkColumnDef_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkCellDef, true);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkHeaderCellDef, true);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkFooterCellDef, true);
            }
            if (rf & 2) {
                var _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.cell = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.headerCell = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.footerCell = _t.first);
            }
        }, inputs: { sticky: "sticky", name: ["cdkColumnDef", "name"], stickyEnd: "stickyEnd" }, features: [/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{ provide: 'MAT_SORT_HEADER_COLUMN_DEF', useExisting: CdkColumnDef }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]] });
    return CdkColumnDef;
})();
/** Base class for the cells. Adds a CSS classname that identifies the column it renders in. */
class BaseCdkCell {
    constructor(columnDef, elementRef) {
        // If IE 11 is dropped before we switch to setting a single class name, change to multi param
        // with destructuring.
        const classList = elementRef.nativeElement.classList;
        for (const className of columnDef._columnCssClassName) {
            classList.add(className);
        }
    }
}
let CdkHeaderCell = /*@__PURE__*/ (() => {
    class CdkHeaderCell extends BaseCdkCell {
        constructor(columnDef, elementRef) {
            super(columnDef, elementRef);
        }
    }
    CdkHeaderCell.ɵfac = function CdkHeaderCell_Factory(t) { return new (t || CdkHeaderCell)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkColumnDef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])); };
    CdkHeaderCell.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkHeaderCell, selectors: [["cdk-header-cell"], ["th", "cdk-header-cell", ""]], hostAttrs: ["role", "columnheader", 1, "cdk-header-cell"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]] });
    return CdkHeaderCell;
})();
let CdkFooterCell = /*@__PURE__*/ (() => {
    class CdkFooterCell extends BaseCdkCell {
        constructor(columnDef, elementRef) {
            super(columnDef, elementRef);
        }
    }
    CdkFooterCell.ɵfac = function CdkFooterCell_Factory(t) { return new (t || CdkFooterCell)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkColumnDef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])); };
    CdkFooterCell.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkFooterCell, selectors: [["cdk-footer-cell"], ["td", "cdk-footer-cell", ""]], hostAttrs: ["role", "gridcell", 1, "cdk-footer-cell"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]] });
    return CdkFooterCell;
})();
let CdkCell = /*@__PURE__*/ (() => {
    class CdkCell extends BaseCdkCell {
        constructor(columnDef, elementRef) {
            super(columnDef, elementRef);
        }
    }
    CdkCell.ɵfac = function CdkCell_Factory(t) { return new (t || CdkCell)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkColumnDef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])); };
    CdkCell.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkCell, selectors: [["cdk-cell"], ["td", "cdk-cell", ""]], hostAttrs: ["role", "gridcell", 1, "cdk-cell"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]] });
    return CdkCell;
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @docs-private
 */
class _Schedule {
    constructor() {
        this.tasks = [];
        this.endTasks = [];
    }
}
/** Injection token used to provide a coalesced style scheduler. */
const _COALESCED_STYLE_SCHEDULER = /*@__PURE__*/ new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('_COALESCED_STYLE_SCHEDULER');
let _CoalescedStyleScheduler = /*@__PURE__*/ (() => {
    class _CoalescedStyleScheduler {
        constructor(_ngZone) {
            this._ngZone = _ngZone;
            this._currentSchedule = null;
            this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        }
        /**
         * Schedules the specified task to run at the end of the current VM turn.
         */
        schedule(task) {
            this._createScheduleIfNeeded();
            this._currentSchedule.tasks.push(task);
        }
        /**
         * Schedules the specified task to run after other scheduled tasks at the end of the current
         * VM turn.
         */
        scheduleEnd(task) {
            this._createScheduleIfNeeded();
            this._currentSchedule.endTasks.push(task);
        }
        /** Prevent any further tasks from running. */
        ngOnDestroy() {
            this._destroyed.next();
            this._destroyed.complete();
        }
        _createScheduleIfNeeded() {
            if (this._currentSchedule) {
                return;
            }
            this._currentSchedule = new _Schedule();
            this._getScheduleObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed)).subscribe(() => {
                while (this._currentSchedule.tasks.length || this._currentSchedule.endTasks.length) {
                    const schedule = this._currentSchedule;
                    // Capture new tasks scheduled by the current set of tasks.
                    this._currentSchedule = new _Schedule();
                    for (const task of schedule.tasks) {
                        task();
                    }
                    for (const task of schedule.endTasks) {
                        task();
                    }
                }
                this._currentSchedule = null;
            });
        }
        _getScheduleObservable() {
            // Use onStable when in the context of an ongoing change detection cycle so that we
            // do not accidentally trigger additional cycles.
            return this._ngZone.isStable ?
                Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(Promise.resolve(undefined)) :
                this._ngZone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1));
        }
    }
    _CoalescedStyleScheduler.ɵfac = function _CoalescedStyleScheduler_Factory(t) { return new (t || _CoalescedStyleScheduler)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"])); };
    _CoalescedStyleScheduler.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: _CoalescedStyleScheduler, factory: _CoalescedStyleScheduler.ɵfac });
    return _CoalescedStyleScheduler;
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * The row template that can be used by the mat-table. Should not be used outside of the
 * material library.
 */
const CDK_ROW_TEMPLATE = `<ng-container cdkCellOutlet></ng-container>`;
let BaseRowDef = /*@__PURE__*/ (() => {
    class BaseRowDef {
        constructor(
        /** @docs-private */ template, _differs) {
            this.template = template;
            this._differs = _differs;
        }
        ngOnChanges(changes) {
            // Create a new columns differ if one does not yet exist. Initialize it based on initial value
            // of the columns property or an empty array if none is provided.
            if (!this._columnsDiffer) {
                const columns = (changes['columns'] && changes['columns'].currentValue) || [];
                this._columnsDiffer = this._differs.find(columns).create();
                this._columnsDiffer.diff(columns);
            }
        }
        /**
         * Returns the difference between the current columns and the columns from the last diff, or null
         * if there is no difference.
         */
        getColumnsDiff() {
            return this._columnsDiffer.diff(this.columns);
        }
        /** Gets this row def's relevant cell template from the provided column def. */
        extractCellTemplate(column) {
            if (this instanceof CdkHeaderRowDef) {
                return column.headerCell.template;
            }
            if (this instanceof CdkFooterRowDef) {
                return column.footerCell.template;
            }
            else {
                return column.cell.template;
            }
        }
    }
    BaseRowDef.ɵfac = function BaseRowDef_Factory(t) { return new (t || BaseRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"])); };
    BaseRowDef.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: BaseRowDef, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]] });
    return BaseRowDef;
})();
// Boilerplate for applying mixins to CdkHeaderRowDef.
/** @docs-private */
class CdkHeaderRowDefBase extends BaseRowDef {
}
const _CdkHeaderRowDefBase = /*@__PURE__*/ mixinHasStickyInput(CdkHeaderRowDefBase);
let CdkHeaderRowDef = /*@__PURE__*/ (() => {
    class CdkHeaderRowDef extends _CdkHeaderRowDefBase {
        constructor(template, _differs, _table) {
            super(template, _differs);
            this._table = _table;
        }
        // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
        // Explicitly define it so that the method is called as part of the Angular lifecycle.
        ngOnChanges(changes) {
            super.ngOnChanges(changes);
        }
    }
    CdkHeaderRowDef.ɵfac = function CdkHeaderRowDef_Factory(t) { return new (t || CdkHeaderRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CDK_TABLE, 8)); };
    CdkHeaderRowDef.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkHeaderRowDef, selectors: [["", "cdkHeaderRowDef", ""]], inputs: { columns: ["cdkHeaderRowDef", "columns"], sticky: ["cdkHeaderRowDefSticky", "sticky"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]] });
    return CdkHeaderRowDef;
})();
// Boilerplate for applying mixins to CdkFooterRowDef.
/** @docs-private */
class CdkFooterRowDefBase extends BaseRowDef {
}
const _CdkFooterRowDefBase = /*@__PURE__*/ mixinHasStickyInput(CdkFooterRowDefBase);
let CdkFooterRowDef = /*@__PURE__*/ (() => {
    class CdkFooterRowDef extends _CdkFooterRowDefBase {
        constructor(template, _differs, _table) {
            super(template, _differs);
            this._table = _table;
        }
        // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
        // Explicitly define it so that the method is called as part of the Angular lifecycle.
        ngOnChanges(changes) {
            super.ngOnChanges(changes);
        }
    }
    CdkFooterRowDef.ɵfac = function CdkFooterRowDef_Factory(t) { return new (t || CdkFooterRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CDK_TABLE, 8)); };
    CdkFooterRowDef.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkFooterRowDef, selectors: [["", "cdkFooterRowDef", ""]], inputs: { columns: ["cdkFooterRowDef", "columns"], sticky: ["cdkFooterRowDefSticky", "sticky"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]] });
    return CdkFooterRowDef;
})();
let CdkRowDef = /*@__PURE__*/ (() => {
    class CdkRowDef extends BaseRowDef {
        // TODO(andrewseguin): Add an input for providing a switch function to determine
        //   if this template should be used.
        constructor(template, _differs, _table) {
            super(template, _differs);
            this._table = _table;
        }
    }
    CdkRowDef.ɵfac = function CdkRowDef_Factory(t) { return new (t || CdkRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CDK_TABLE, 8)); };
    CdkRowDef.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkRowDef, selectors: [["", "cdkRowDef", ""]], inputs: { columns: ["cdkRowDefColumns", "columns"], when: ["cdkRowDefWhen", "when"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]] });
    return CdkRowDef;
})();
let CdkCellOutlet = /*@__PURE__*/ (() => {
    class CdkCellOutlet {
        constructor(_viewContainer) {
            this._viewContainer = _viewContainer;
            CdkCellOutlet.mostRecentCellOutlet = this;
        }
        ngOnDestroy() {
            // If this was the last outlet being rendered in the view, remove the reference
            // from the static property after it has been destroyed to avoid leaking memory.
            if (CdkCellOutlet.mostRecentCellOutlet === this) {
                CdkCellOutlet.mostRecentCellOutlet = null;
            }
        }
    }
    CdkCellOutlet.ɵfac = function CdkCellOutlet_Factory(t) { return new (t || CdkCellOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"])); };
    CdkCellOutlet.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkCellOutlet, selectors: [["", "cdkCellOutlet", ""]] });
    /**
     * Static property containing the latest constructed instance of this class.
     * Used by the CDK table when each CdkHeaderRow and CdkRow component is created using
     * createEmbeddedView. After one of these components are created, this property will provide
     * a handle to provide that component's cells and context. After init, the CdkCellOutlet will
     * construct the cells with the provided context.
     */
    CdkCellOutlet.mostRecentCellOutlet = null;
    return CdkCellOutlet;
})();
let CdkHeaderRow = /*@__PURE__*/ (() => {
    class CdkHeaderRow {
    }
    CdkHeaderRow.ɵfac = function CdkHeaderRow_Factory(t) { return new (t || CdkHeaderRow)(); };
    CdkHeaderRow.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CdkHeaderRow, selectors: [["cdk-header-row"], ["tr", "cdk-header-row", ""]], hostAttrs: ["role", "row", 1, "cdk-header-row"], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function CdkHeaderRow_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0, 0);
            }
        }, directives: [CdkCellOutlet], encapsulation: 2 });
    return CdkHeaderRow;
})();
let CdkFooterRow = /*@__PURE__*/ (() => {
    class CdkFooterRow {
    }
    CdkFooterRow.ɵfac = function CdkFooterRow_Factory(t) { return new (t || CdkFooterRow)(); };
    CdkFooterRow.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CdkFooterRow, selectors: [["cdk-footer-row"], ["tr", "cdk-footer-row", ""]], hostAttrs: ["role", "row", 1, "cdk-footer-row"], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function CdkFooterRow_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0, 0);
            }
        }, directives: [CdkCellOutlet], encapsulation: 2 });
    return CdkFooterRow;
})();
let CdkRow = /*@__PURE__*/ (() => {
    class CdkRow {
    }
    CdkRow.ɵfac = function CdkRow_Factory(t) { return new (t || CdkRow)(); };
    CdkRow.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CdkRow, selectors: [["cdk-row"], ["tr", "cdk-row", ""]], hostAttrs: ["role", "row", 1, "cdk-row"], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function CdkRow_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0, 0);
            }
        }, directives: [CdkCellOutlet], encapsulation: 2 });
    return CdkRow;
})();
let CdkNoDataRow = /*@__PURE__*/ (() => {
    class CdkNoDataRow {
        constructor(templateRef) {
            this.templateRef = templateRef;
        }
    }
    CdkNoDataRow.ɵfac = function CdkNoDataRow_Factory(t) { return new (t || CdkNoDataRow)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])); };
    CdkNoDataRow.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkNoDataRow, selectors: [["ng-template", "cdkNoDataRow", ""]] });
    return CdkNoDataRow;
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * List of all possible directions that can be used for sticky positioning.
 * @docs-private
 */
const STICKY_DIRECTIONS = ['top', 'bottom', 'left', 'right'];
/**
 * Applies and removes sticky positioning styles to the `CdkTable` rows and columns cells.
 * @docs-private
 */
class StickyStyler {
    /**
     * @param _isNativeHtmlTable Whether the sticky logic should be based on a table
     *     that uses the native `<table>` element.
     * @param _stickCellCss The CSS class that will be applied to every row/cell that has
     *     sticky positioning applied.
     * @param direction The directionality context of the table (ltr/rtl); affects column positioning
     *     by reversing left/right positions.
     * @param _isBrowser Whether the table is currently being rendered on the server or the client.
     * @param _needsPositionStickyOnElement Whether we need to specify position: sticky on cells
     *     using inline styles. If false, it is assumed that position: sticky is included in
     *     the component stylesheet for _stickCellCss.
     */
    constructor(_isNativeHtmlTable, _stickCellCss, direction, 
    /**
     * @deprecated `_coalescedStyleScheduler` parameter to become required.
     * @breaking-change 11.0.0
     */
    _coalescedStyleScheduler, _isBrowser = true, _needsPositionStickyOnElement = true) {
        this._isNativeHtmlTable = _isNativeHtmlTable;
        this._stickCellCss = _stickCellCss;
        this.direction = direction;
        this._coalescedStyleScheduler = _coalescedStyleScheduler;
        this._isBrowser = _isBrowser;
        this._needsPositionStickyOnElement = _needsPositionStickyOnElement;
    }
    /**
     * Clears the sticky positioning styles from the row and its cells by resetting the `position`
     * style, setting the zIndex to 0, and unsetting each provided sticky direction.
     * @param rows The list of rows that should be cleared from sticking in the provided directions
     * @param stickyDirections The directions that should no longer be set as sticky on the rows.
     */
    clearStickyPositioning(rows, stickyDirections) {
        const elementsToClear = [];
        for (const row of rows) {
            // If the row isn't an element (e.g. if it's an `ng-container`),
            // it won't have inline styles or `children` so we skip it.
            if (row.nodeType !== row.ELEMENT_NODE) {
                continue;
            }
            elementsToClear.push(row);
            for (let i = 0; i < row.children.length; i++) {
                elementsToClear.push(row.children[i]);
            }
        }
        // Coalesce with sticky row/column updates (and potentially other changes like column resize).
        this._scheduleStyleChanges(() => {
            for (const element of elementsToClear) {
                this._removeStickyStyle(element, stickyDirections);
            }
        });
    }
    /**
     * Applies sticky left and right positions to the cells of each row according to the sticky
     * states of the rendered column definitions.
     * @param rows The rows that should have its set of cells stuck according to the sticky states.
     * @param stickyStartStates A list of boolean states where each state represents whether the cell
     *     in this index position should be stuck to the start of the row.
     * @param stickyEndStates A list of boolean states where each state represents whether the cell
     *     in this index position should be stuck to the end of the row.
     */
    updateStickyColumns(rows, stickyStartStates, stickyEndStates) {
        if (!rows.length || !this._isBrowser || !(stickyStartStates.some(state => state) ||
            stickyEndStates.some(state => state))) {
            return;
        }
        const firstRow = rows[0];
        const numCells = firstRow.children.length;
        const cellWidths = this._getCellWidths(firstRow);
        const startPositions = this._getStickyStartColumnPositions(cellWidths, stickyStartStates);
        const endPositions = this._getStickyEndColumnPositions(cellWidths, stickyEndStates);
        // Coalesce with sticky row updates (and potentially other changes like column resize).
        this._scheduleStyleChanges(() => {
            const isRtl = this.direction === 'rtl';
            const start = isRtl ? 'right' : 'left';
            const end = isRtl ? 'left' : 'right';
            for (const row of rows) {
                for (let i = 0; i < numCells; i++) {
                    const cell = row.children[i];
                    if (stickyStartStates[i]) {
                        this._addStickyStyle(cell, start, startPositions[i]);
                    }
                    if (stickyEndStates[i]) {
                        this._addStickyStyle(cell, end, endPositions[i]);
                    }
                }
            }
        });
    }
    /**
     * Applies sticky positioning to the row's cells if using the native table layout, and to the
     * row itself otherwise.
     * @param rowsToStick The list of rows that should be stuck according to their corresponding
     *     sticky state and to the provided top or bottom position.
     * @param stickyStates A list of boolean states where each state represents whether the row
     *     should be stuck in the particular top or bottom position.
     * @param position The position direction in which the row should be stuck if that row should be
     *     sticky.
     *
     */
    stickRows(rowsToStick, stickyStates, position) {
        // Since we can't measure the rows on the server, we can't stick the rows properly.
        if (!this._isBrowser) {
            return;
        }
        // If positioning the rows to the bottom, reverse their order when evaluating the sticky
        // position such that the last row stuck will be "bottom: 0px" and so on. Note that the
        // sticky states need to be reversed as well.
        const rows = position === 'bottom' ? rowsToStick.slice().reverse() : rowsToStick;
        const states = position === 'bottom' ? stickyStates.slice().reverse() : stickyStates;
        // Measure row heights all at once before adding sticky styles to reduce layout thrashing.
        const stickyHeights = [];
        const elementsToStick = [];
        for (let rowIndex = 0, stickyHeight = 0; rowIndex < rows.length; rowIndex++) {
            stickyHeights[rowIndex] = stickyHeight;
            if (!states[rowIndex]) {
                continue;
            }
            const row = rows[rowIndex];
            elementsToStick[rowIndex] = this._isNativeHtmlTable ?
                Array.from(row.children) : [row];
            if (rowIndex !== rows.length - 1) {
                stickyHeight += row.getBoundingClientRect().height;
            }
        }
        // Coalesce with other sticky row updates (top/bottom), sticky columns updates
        // (and potentially other changes like column resize).
        this._scheduleStyleChanges(() => {
            for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
                if (!states[rowIndex]) {
                    continue;
                }
                const height = stickyHeights[rowIndex];
                for (const element of elementsToStick[rowIndex]) {
                    this._addStickyStyle(element, position, height);
                }
            }
        });
    }
    /**
     * When using the native table in Safari, sticky footer cells do not stick. The only way to stick
     * footer rows is to apply sticky styling to the tfoot container. This should only be done if
     * all footer rows are sticky. If not all footer rows are sticky, remove sticky positioning from
     * the tfoot element.
     */
    updateStickyFooterContainer(tableElement, stickyStates) {
        if (!this._isNativeHtmlTable) {
            return;
        }
        const tfoot = tableElement.querySelector('tfoot');
        // Coalesce with other sticky updates (and potentially other changes like column resize).
        this._scheduleStyleChanges(() => {
            if (stickyStates.some(state => !state)) {
                this._removeStickyStyle(tfoot, ['bottom']);
            }
            else {
                this._addStickyStyle(tfoot, 'bottom', 0);
            }
        });
    }
    /**
     * Removes the sticky style on the element by removing the sticky cell CSS class, re-evaluating
     * the zIndex, removing each of the provided sticky directions, and removing the
     * sticky position if there are no more directions.
     */
    _removeStickyStyle(element, stickyDirections) {
        for (const dir of stickyDirections) {
            element.style[dir] = '';
        }
        // If the element no longer has any more sticky directions, remove sticky positioning and
        // the sticky CSS class.
        // Short-circuit checking element.style[dir] for stickyDirections as they
        // were already removed above.
        const hasDirection = STICKY_DIRECTIONS.some(dir => stickyDirections.indexOf(dir) === -1 && element.style[dir]);
        if (hasDirection) {
            element.style.zIndex = this._getCalculatedZIndex(element);
        }
        else {
            // When not hasDirection, _getCalculatedZIndex will always return ''.
            element.style.zIndex = '';
            if (this._needsPositionStickyOnElement) {
                element.style.position = '';
            }
            element.classList.remove(this._stickCellCss);
        }
    }
    /**
     * Adds the sticky styling to the element by adding the sticky style class, changing position
     * to be sticky (and -webkit-sticky), setting the appropriate zIndex, and adding a sticky
     * direction and value.
     */
    _addStickyStyle(element, dir, dirValue) {
        element.classList.add(this._stickCellCss);
        element.style[dir] = `${dirValue}px`;
        element.style.zIndex = this._getCalculatedZIndex(element);
        if (this._needsPositionStickyOnElement) {
            element.style.cssText += 'position: -webkit-sticky; position: sticky; ';
        }
    }
    /**
     * Calculate what the z-index should be for the element, depending on what directions (top,
     * bottom, left, right) have been set. It should be true that elements with a top direction
     * should have the highest index since these are elements like a table header. If any of those
     * elements are also sticky in another direction, then they should appear above other elements
     * that are only sticky top (e.g. a sticky column on a sticky header). Bottom-sticky elements
     * (e.g. footer rows) should then be next in the ordering such that they are below the header
     * but above any non-sticky elements. Finally, left/right sticky elements (e.g. sticky columns)
     * should minimally increment so that they are above non-sticky elements but below top and bottom
     * elements.
     */
    _getCalculatedZIndex(element) {
        const zIndexIncrements = {
            top: 100,
            bottom: 10,
            left: 1,
            right: 1,
        };
        let zIndex = 0;
        // Use `Iterable` instead of `Array` because TypeScript, as of 3.6.3,
        // loses the array generic type in the `for of`. But we *also* have to use `Array` because
        // typescript won't iterate over an `Iterable` unless you compile with `--downlevelIteration`
        for (const dir of STICKY_DIRECTIONS) {
            if (element.style[dir]) {
                zIndex += zIndexIncrements[dir];
            }
        }
        return zIndex ? `${zIndex}` : '';
    }
    /** Gets the widths for each cell in the provided row. */
    _getCellWidths(row) {
        const cellWidths = [];
        const firstRowCells = row.children;
        for (let i = 0; i < firstRowCells.length; i++) {
            let cell = firstRowCells[i];
            cellWidths.push(cell.getBoundingClientRect().width);
        }
        return cellWidths;
    }
    /**
     * Determines the left and right positions of each sticky column cell, which will be the
     * accumulation of all sticky column cell widths to the left and right, respectively.
     * Non-sticky cells do not need to have a value set since their positions will not be applied.
     */
    _getStickyStartColumnPositions(widths, stickyStates) {
        const positions = [];
        let nextPosition = 0;
        for (let i = 0; i < widths.length; i++) {
            if (stickyStates[i]) {
                positions[i] = nextPosition;
                nextPosition += widths[i];
            }
        }
        return positions;
    }
    /**
     * Determines the left and right positions of each sticky column cell, which will be the
     * accumulation of all sticky column cell widths to the left and right, respectively.
     * Non-sticky cells do not need to have a value set since their positions will not be applied.
     */
    _getStickyEndColumnPositions(widths, stickyStates) {
        const positions = [];
        let nextPosition = 0;
        for (let i = widths.length; i > 0; i--) {
            if (stickyStates[i]) {
                positions[i] = nextPosition;
                nextPosition += widths[i];
            }
        }
        return positions;
    }
    /**
     * Schedules styles to be applied when the style scheduler deems appropriate.
     * @breaking-change 11.0.0 This method can be removed in favor of calling
     * `CoalescedStyleScheduler.schedule` directly once the scheduler is a required parameter.
     */
    _scheduleStyleChanges(changes) {
        if (this._coalescedStyleScheduler) {
            this._coalescedStyleScheduler.schedule(changes);
        }
        else {
            changes();
        }
    }
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Returns an error to be thrown when attempting to find an unexisting column.
 * @param id Id whose lookup failed.
 * @docs-private
 */
function getTableUnknownColumnError(id) {
    return Error(`Could not find column with id "${id}".`);
}
/**
 * Returns an error to be thrown when two column definitions have the same name.
 * @docs-private
 */
function getTableDuplicateColumnNameError(name) {
    return Error(`Duplicate column definition name provided: "${name}".`);
}
/**
 * Returns an error to be thrown when there are multiple rows that are missing a when function.
 * @docs-private
 */
function getTableMultipleDefaultRowDefsError() {
    return Error(`There can only be one default row without a when predicate function.`);
}
/**
 * Returns an error to be thrown when there are no matching row defs for a particular set of data.
 * @docs-private
 */
function getTableMissingMatchingRowDefError(data) {
    return Error(`Could not find a matching row definition for the` +
        `provided row data: ${JSON.stringify(data)}`);
}
/**
 * Returns an error to be thrown when there is no row definitions present in the content.
 * @docs-private
 */
function getTableMissingRowDefsError() {
    return Error('Missing definitions for header, footer, and row; ' +
        'cannot determine which columns should be rendered.');
}
/**
 * Returns an error to be thrown when the data source does not match the compatible types.
 * @docs-private
 */
function getTableUnknownDataSourceError() {
    return Error(`Provided data source did not match an array, Observable, or DataSource`);
}
/**
 * Returns an error to be thrown when the text column cannot find a parent table to inject.
 * @docs-private
 */
function getTableTextColumnMissingParentTableError() {
    return Error(`Text column could not find a parent table for registration.`);
}
/**
 * Returns an error to be thrown when a table text column doesn't have a name.
 * @docs-private
 */
function getTableTextColumnMissingNameError() {
    return Error(`Table text column must have a name.`);
}
let DataRowOutlet = /*@__PURE__*/ (() => {
    class DataRowOutlet {
        constructor(viewContainer, elementRef) {
            this.viewContainer = viewContainer;
            this.elementRef = elementRef;
        }
    }
    DataRowOutlet.ɵfac = function DataRowOutlet_Factory(t) { return new (t || DataRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])); };
    DataRowOutlet.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: DataRowOutlet, selectors: [["", "rowOutlet", ""]] });
    return DataRowOutlet;
})();
let HeaderRowOutlet = /*@__PURE__*/ (() => {
    class HeaderRowOutlet {
        constructor(viewContainer, elementRef) {
            this.viewContainer = viewContainer;
            this.elementRef = elementRef;
        }
    }
    HeaderRowOutlet.ɵfac = function HeaderRowOutlet_Factory(t) { return new (t || HeaderRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])); };
    HeaderRowOutlet.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: HeaderRowOutlet, selectors: [["", "headerRowOutlet", ""]] });
    return HeaderRowOutlet;
})();
let FooterRowOutlet = /*@__PURE__*/ (() => {
    class FooterRowOutlet {
        constructor(viewContainer, elementRef) {
            this.viewContainer = viewContainer;
            this.elementRef = elementRef;
        }
    }
    FooterRowOutlet.ɵfac = function FooterRowOutlet_Factory(t) { return new (t || FooterRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])); };
    FooterRowOutlet.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: FooterRowOutlet, selectors: [["", "footerRowOutlet", ""]] });
    return FooterRowOutlet;
})();
let NoDataRowOutlet = /*@__PURE__*/ (() => {
    class NoDataRowOutlet {
        constructor(viewContainer, elementRef) {
            this.viewContainer = viewContainer;
            this.elementRef = elementRef;
        }
    }
    NoDataRowOutlet.ɵfac = function NoDataRowOutlet_Factory(t) { return new (t || NoDataRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])); };
    NoDataRowOutlet.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: NoDataRowOutlet, selectors: [["", "noDataRowOutlet", ""]] });
    return NoDataRowOutlet;
})();
/**
 * The table template that can be used by the mat-table. Should not be used outside of the
 * material library.
 * @docs-private
 */
const CDK_TABLE_TEMPLATE = 
// Note that according to MDN, the `caption` element has to be projected as the **first**
// element in the table. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption
`
  <ng-content select="caption"></ng-content>
  <ng-content select="colgroup, col"></ng-content>
  <ng-container headerRowOutlet></ng-container>
  <ng-container rowOutlet></ng-container>
  <ng-container noDataRowOutlet></ng-container>
  <ng-container footerRowOutlet></ng-container>
`;
/**
 * Class used to conveniently type the embedded view ref for rows with a context.
 * @docs-private
 */
class RowViewRef extends _angular_core__WEBPACK_IMPORTED_MODULE_3__["EmbeddedViewRef"] {
}
let CdkTable = /*@__PURE__*/ (() => {
    class CdkTable {
        constructor(_differs, _changeDetectorRef, _elementRef, role, _dir, _document, _platform, 
        /**
         * @deprecated `_coalescedStyleScheduler`, `_viewRepeater` and `_viewportRuler`
         *    parameters to become required.
         * @breaking-change 11.0.0
         */
        _viewRepeater, _coalescedStyleScheduler) {
            this._differs = _differs;
            this._changeDetectorRef = _changeDetectorRef;
            this._elementRef = _elementRef;
            this._dir = _dir;
            this._platform = _platform;
            this._viewRepeater = _viewRepeater;
            this._coalescedStyleScheduler = _coalescedStyleScheduler;
            /** Subject that emits when the component has been destroyed. */
            this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
            /**
             * Map of all the user's defined columns (header, data, and footer cell template) identified by
             * name. Collection populated by the column definitions gathered by `ContentChildren` as well as
             * any custom column definitions added to `_customColumnDefs`.
             */
            this._columnDefsByName = new Map();
            /**
             * Column definitions that were defined outside of the direct content children of the table.
             * These will be defined when, e.g., creating a wrapper around the cdkTable that has
             * column definitions as *its* content child.
             */
            this._customColumnDefs = new Set();
            /**
             * Data row definitions that were defined outside of the direct content children of the table.
             * These will be defined when, e.g., creating a wrapper around the cdkTable that has
             * built-in data rows as *its* content child.
             */
            this._customRowDefs = new Set();
            /**
             * Header row definitions that were defined outside of the direct content children of the table.
             * These will be defined when, e.g., creating a wrapper around the cdkTable that has
             * built-in header rows as *its* content child.
             */
            this._customHeaderRowDefs = new Set();
            /**
             * Footer row definitions that were defined outside of the direct content children of the table.
             * These will be defined when, e.g., creating a wrapper around the cdkTable that has a
             * built-in footer row as *its* content child.
             */
            this._customFooterRowDefs = new Set();
            /**
             * Whether the header row definition has been changed. Triggers an update to the header row after
             * content is checked. Initialized as true so that the table renders the initial set of rows.
             */
            this._headerRowDefChanged = true;
            /**
             * Whether the footer row definition has been changed. Triggers an update to the footer row after
             * content is checked. Initialized as true so that the table renders the initial set of rows.
             */
            this._footerRowDefChanged = true;
            /**
             * Cache of the latest rendered `RenderRow` objects as a map for easy retrieval when constructing
             * a new list of `RenderRow` objects for rendering rows. Since the new list is constructed with
             * the cached `RenderRow` objects when possible, the row identity is preserved when the data
             * and row template matches, which allows the `IterableDiffer` to check rows by reference
             * and understand which rows are added/moved/removed.
             *
             * Implemented as a map of maps where the first key is the `data: T` object and the second is the
             * `CdkRowDef<T>` object. With the two keys, the cache points to a `RenderRow<T>` object that
             * contains an array of created pairs. The array is necessary to handle cases where the data
             * array contains multiple duplicate data objects and each instantiated `RenderRow` must be
             * stored.
             */
            this._cachedRenderRowsMap = new Map();
            /**
             * CSS class added to any row or cell that has sticky positioning applied. May be overriden by
             * table subclasses.
             */
            this.stickyCssClass = 'cdk-table-sticky';
            /**
             * Whether to manually add positon: sticky to all sticky cell elements. Not needed if
             * the position is set in a selector associated with the value of stickyCssClass. May be
             * overridden by table subclasses
             */
            this.needsPositionStickyOnElement = true;
            /** Whether the no data row is currently showing anything. */
            this._isShowingNoDataRow = false;
            this._multiTemplateDataRows = false;
            // TODO(andrewseguin): Remove max value as the end index
            //   and instead calculate the view on init and scroll.
            /**
             * Stream containing the latest information on what rows are being displayed on screen.
             * Can be used by the data source to as a heuristic of what data should be provided.
             *
             * @docs-private
             */
            this.viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]({ start: 0, end: Number.MAX_VALUE });
            if (!role) {
                this._elementRef.nativeElement.setAttribute('role', 'grid');
            }
            this._document = _document;
            this._isNativeHtmlTable = this._elementRef.nativeElement.nodeName === 'TABLE';
        }
        /**
         * Tracking function that will be used to check the differences in data changes. Used similarly
         * to `ngFor` `trackBy` function. Optimize row operations by identifying a row based on its data
         * relative to the function to know if a row should be added/removed/moved.
         * Accepts a function that takes two parameters, `index` and `item`.
         */
        get trackBy() {
            return this._trackByFn;
        }
        set trackBy(fn) {
            if ((typeof ngDevMode === 'undefined' || ngDevMode) && fn != null && typeof fn !== 'function') {
                console.warn(`trackBy must be a function, but received ${JSON.stringify(fn)}.`);
            }
            this._trackByFn = fn;
        }
        /**
         * The table's source of data, which can be provided in three ways (in order of complexity):
         *   - Simple data array (each object represents one table row)
         *   - Stream that emits a data array each time the array changes
         *   - `DataSource` object that implements the connect/disconnect interface.
         *
         * If a data array is provided, the table must be notified when the array's objects are
         * added, removed, or moved. This can be done by calling the `renderRows()` function which will
         * render the diff since the last table render. If the data array reference is changed, the table
         * will automatically trigger an update to the rows.
         *
         * When providing an Observable stream, the table will trigger an update automatically when the
         * stream emits a new array of data.
         *
         * Finally, when providing a `DataSource` object, the table will use the Observable stream
         * provided by the connect function and trigger updates when that stream emits new data array
         * values. During the table's ngOnDestroy or when the data source is removed from the table, the
         * table will call the DataSource's `disconnect` function (may be useful for cleaning up any
         * subscriptions registered during the connect process).
         */
        get dataSource() {
            return this._dataSource;
        }
        set dataSource(dataSource) {
            if (this._dataSource !== dataSource) {
                this._switchDataSource(dataSource);
            }
        }
        /**
         * Whether to allow multiple rows per data object by evaluating which rows evaluate their 'when'
         * predicate to true. If `multiTemplateDataRows` is false, which is the default value, then each
         * dataobject will render the first row that evaluates its when predicate to true, in the order
         * defined in the table, or otherwise the default row which does not have a when predicate.
         */
        get multiTemplateDataRows() {
            return this._multiTemplateDataRows;
        }
        set multiTemplateDataRows(v) {
            this._multiTemplateDataRows = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(v);
            // In Ivy if this value is set via a static attribute (e.g. <table multiTemplateDataRows>),
            // this setter will be invoked before the row outlet has been defined hence the null check.
            if (this._rowOutlet && this._rowOutlet.viewContainer.length) {
                this._forceRenderDataRows();
                this.updateStickyColumnStyles();
            }
        }
        ngOnInit() {
            this._setupStickyStyler();
            if (this._isNativeHtmlTable) {
                this._applyNativeTableSections();
            }
            // Set up the trackBy function so that it uses the `RenderRow` as its identity by default. If
            // the user has provided a custom trackBy, return the result of that function as evaluated
            // with the values of the `RenderRow`'s data and index.
            this._dataDiffer = this._differs.find([]).create((_i, dataRow) => {
                return this.trackBy ? this.trackBy(dataRow.dataIndex, dataRow.data) : dataRow;
            });
        }
        ngAfterContentChecked() {
            // Cache the row and column definitions gathered by ContentChildren and programmatic injection.
            this._cacheRowDefs();
            this._cacheColumnDefs();
            // Make sure that the user has at least added header, footer, or data row def.
            if (!this._headerRowDefs.length && !this._footerRowDefs.length && !this._rowDefs.length &&
                (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw getTableMissingRowDefsError();
            }
            // Render updates if the list of columns have been changed for the header, row, or footer defs.
            const columnsChanged = this._renderUpdatedColumns();
            const stickyColumnStyleUpdateNeeded = columnsChanged || this._headerRowDefChanged || this._footerRowDefChanged;
            // If the header row definition has been changed, trigger a render to the header row.
            if (this._headerRowDefChanged) {
                this._forceRenderHeaderRows();
                this._headerRowDefChanged = false;
            }
            // If the footer row definition has been changed, trigger a render to the footer row.
            if (this._footerRowDefChanged) {
                this._forceRenderFooterRows();
                this._footerRowDefChanged = false;
            }
            // If there is a data source and row definitions, connect to the data source unless a
            // connection has already been made.
            if (this.dataSource && this._rowDefs.length > 0 && !this._renderChangeSubscription) {
                this._observeRenderChanges();
            }
            else if (stickyColumnStyleUpdateNeeded) {
                // In the above case, _observeRenderChanges will result in updateStickyColumnStyles being
                // called when it row data arrives. Otherwise, we need to call it proactively.
                this.updateStickyColumnStyles();
            }
            this._checkStickyStates();
        }
        ngOnDestroy() {
            this._rowOutlet.viewContainer.clear();
            this._noDataRowOutlet.viewContainer.clear();
            this._headerRowOutlet.viewContainer.clear();
            this._footerRowOutlet.viewContainer.clear();
            this._cachedRenderRowsMap.clear();
            this._onDestroy.next();
            this._onDestroy.complete();
            if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["isDataSource"])(this.dataSource)) {
                this.dataSource.disconnect(this);
            }
        }
        /**
         * Renders rows based on the table's latest set of data, which was either provided directly as an
         * input or retrieved through an Observable stream (directly or from a DataSource).
         * Checks for differences in the data since the last diff to perform only the necessary
         * changes (add/remove/move rows).
         *
         * If the table's data source is a DataSource or Observable, this will be invoked automatically
         * each time the provided Observable stream emits a new data array. Otherwise if your data is
         * an array, this function will need to be called to render any changes.
         */
        renderRows() {
            this._renderRows = this._getAllRenderRows();
            const changes = this._dataDiffer.diff(this._renderRows);
            if (!changes) {
                this._updateNoDataRow();
                return;
            }
            const viewContainer = this._rowOutlet.viewContainer;
            // @breaking-change 11.0.0 Remove null check for `_viewRepeater` and the
            // `else` clause once `_viewRepeater` is turned into a required parameter.
            if (this._viewRepeater) {
                this._viewRepeater.applyChanges(changes, viewContainer, (record, _adjustedPreviousIndex, currentIndex) => this._getEmbeddedViewArgs(record.item, currentIndex), (record) => record.item.data, (change) => {
                    if (change.operation === 1 /* INSERTED */ && change.context) {
                        this._renderCellTemplateForItem(change.record.item.rowDef, change.context);
                    }
                });
            }
            else {
                changes.forEachOperation((record, prevIndex, currentIndex) => {
                    if (record.previousIndex == null) {
                        const renderRow = record.item;
                        const rowDef = renderRow.rowDef;
                        const context = { $implicit: renderRow.data };
                        this._renderRow(this._rowOutlet, rowDef, currentIndex, context);
                    }
                    else if (currentIndex == null) {
                        viewContainer.remove(prevIndex);
                    }
                    else {
                        const view = viewContainer.get(prevIndex);
                        viewContainer.move(view, currentIndex);
                    }
                });
            }
            // Update the meta context of a row's context data (index, count, first, last, ...)
            this._updateRowIndexContext();
            // Update rows that did not get added/removed/moved but may have had their identity changed,
            // e.g. if trackBy matched data on some property but the actual data reference changed.
            changes.forEachIdentityChange((record) => {
                const rowView = viewContainer.get(record.currentIndex);
                rowView.context.$implicit = record.item.data;
            });
            this._updateNoDataRow();
            this.updateStickyColumnStyles();
        }
        /** Adds a column definition that was not included as part of the content children. */
        addColumnDef(columnDef) {
            this._customColumnDefs.add(columnDef);
        }
        /** Removes a column definition that was not included as part of the content children. */
        removeColumnDef(columnDef) {
            this._customColumnDefs.delete(columnDef);
        }
        /** Adds a row definition that was not included as part of the content children. */
        addRowDef(rowDef) {
            this._customRowDefs.add(rowDef);
        }
        /** Removes a row definition that was not included as part of the content children. */
        removeRowDef(rowDef) {
            this._customRowDefs.delete(rowDef);
        }
        /** Adds a header row definition that was not included as part of the content children. */
        addHeaderRowDef(headerRowDef) {
            this._customHeaderRowDefs.add(headerRowDef);
            this._headerRowDefChanged = true;
        }
        /** Removes a header row definition that was not included as part of the content children. */
        removeHeaderRowDef(headerRowDef) {
            this._customHeaderRowDefs.delete(headerRowDef);
            this._headerRowDefChanged = true;
        }
        /** Adds a footer row definition that was not included as part of the content children. */
        addFooterRowDef(footerRowDef) {
            this._customFooterRowDefs.add(footerRowDef);
            this._footerRowDefChanged = true;
        }
        /** Removes a footer row definition that was not included as part of the content children. */
        removeFooterRowDef(footerRowDef) {
            this._customFooterRowDefs.delete(footerRowDef);
            this._footerRowDefChanged = true;
        }
        /**
         * Updates the header sticky styles. First resets all applied styles with respect to the cells
         * sticking to the top. Then, evaluating which cells need to be stuck to the top. This is
         * automatically called when the header row changes its displayed set of columns, or if its
         * sticky input changes. May be called manually for cases where the cell content changes outside
         * of these events.
         */
        updateStickyHeaderRowStyles() {
            const headerRows = this._getRenderedRows(this._headerRowOutlet);
            const tableElement = this._elementRef.nativeElement;
            // Hide the thead element if there are no header rows. This is necessary to satisfy
            // overzealous a11y checkers that fail because the `rowgroup` element does not contain
            // required child `row`.
            const thead = tableElement.querySelector('thead');
            if (thead) {
                thead.style.display = headerRows.length ? '' : 'none';
            }
            const stickyStates = this._headerRowDefs.map(def => def.sticky);
            this._stickyStyler.clearStickyPositioning(headerRows, ['top']);
            this._stickyStyler.stickRows(headerRows, stickyStates, 'top');
            // Reset the dirty state of the sticky input change since it has been used.
            this._headerRowDefs.forEach(def => def.resetStickyChanged());
        }
        /**
         * Updates the footer sticky styles. First resets all applied styles with respect to the cells
         * sticking to the bottom. Then, evaluating which cells need to be stuck to the bottom. This is
         * automatically called when the footer row changes its displayed set of columns, or if its
         * sticky input changes. May be called manually for cases where the cell content changes outside
         * of these events.
         */
        updateStickyFooterRowStyles() {
            const footerRows = this._getRenderedRows(this._footerRowOutlet);
            const tableElement = this._elementRef.nativeElement;
            // Hide the tfoot element if there are no footer rows. This is necessary to satisfy
            // overzealous a11y checkers that fail because the `rowgroup` element does not contain
            // required child `row`.
            const tfoot = tableElement.querySelector('tfoot');
            if (tfoot) {
                tfoot.style.display = footerRows.length ? '' : 'none';
            }
            const stickyStates = this._footerRowDefs.map(def => def.sticky);
            this._stickyStyler.clearStickyPositioning(footerRows, ['bottom']);
            this._stickyStyler.stickRows(footerRows, stickyStates, 'bottom');
            this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement, stickyStates);
            // Reset the dirty state of the sticky input change since it has been used.
            this._footerRowDefs.forEach(def => def.resetStickyChanged());
        }
        /**
         * Updates the column sticky styles. First resets all applied styles with respect to the cells
         * sticking to the left and right. Then sticky styles are added for the left and right according
         * to the column definitions for each cell in each row. This is automatically called when
         * the data source provides a new set of data or when a column definition changes its sticky
         * input. May be called manually for cases where the cell content changes outside of these events.
         */
        updateStickyColumnStyles() {
            const headerRows = this._getRenderedRows(this._headerRowOutlet);
            const dataRows = this._getRenderedRows(this._rowOutlet);
            const footerRows = this._getRenderedRows(this._footerRowOutlet);
            // Clear the left and right positioning from all columns in the table across all rows since
            // sticky columns span across all table sections (header, data, footer)
            this._stickyStyler.clearStickyPositioning([...headerRows, ...dataRows, ...footerRows], ['left', 'right']);
            // Update the sticky styles for each header row depending on the def's sticky state
            headerRows.forEach((headerRow, i) => {
                this._addStickyColumnStyles([headerRow], this._headerRowDefs[i]);
            });
            // Update the sticky styles for each data row depending on its def's sticky state
            this._rowDefs.forEach(rowDef => {
                // Collect all the rows rendered with this row definition.
                const rows = [];
                for (let i = 0; i < dataRows.length; i++) {
                    if (this._renderRows[i].rowDef === rowDef) {
                        rows.push(dataRows[i]);
                    }
                }
                this._addStickyColumnStyles(rows, rowDef);
            });
            // Update the sticky styles for each footer row depending on the def's sticky state
            footerRows.forEach((footerRow, i) => {
                this._addStickyColumnStyles([footerRow], this._footerRowDefs[i]);
            });
            // Reset the dirty state of the sticky input change since it has been used.
            Array.from(this._columnDefsByName.values()).forEach(def => def.resetStickyChanged());
        }
        /**
         * Get the list of RenderRow objects to render according to the current list of data and defined
         * row definitions. If the previous list already contained a particular pair, it should be reused
         * so that the differ equates their references.
         */
        _getAllRenderRows() {
            const renderRows = [];
            // Store the cache and create a new one. Any re-used RenderRow objects will be moved into the
            // new cache while unused ones can be picked up by garbage collection.
            const prevCachedRenderRows = this._cachedRenderRowsMap;
            this._cachedRenderRowsMap = new Map();
            // For each data object, get the list of rows that should be rendered, represented by the
            // respective `RenderRow` object which is the pair of `data` and `CdkRowDef`.
            for (let i = 0; i < this._data.length; i++) {
                let data = this._data[i];
                const renderRowsForData = this._getRenderRowsForData(data, i, prevCachedRenderRows.get(data));
                if (!this._cachedRenderRowsMap.has(data)) {
                    this._cachedRenderRowsMap.set(data, new WeakMap());
                }
                for (let j = 0; j < renderRowsForData.length; j++) {
                    let renderRow = renderRowsForData[j];
                    const cache = this._cachedRenderRowsMap.get(renderRow.data);
                    if (cache.has(renderRow.rowDef)) {
                        cache.get(renderRow.rowDef).push(renderRow);
                    }
                    else {
                        cache.set(renderRow.rowDef, [renderRow]);
                    }
                    renderRows.push(renderRow);
                }
            }
            return renderRows;
        }
        /**
         * Gets a list of `RenderRow<T>` for the provided data object and any `CdkRowDef` objects that
         * should be rendered for this data. Reuses the cached RenderRow objects if they match the same
         * `(T, CdkRowDef)` pair.
         */
        _getRenderRowsForData(data, dataIndex, cache) {
            const rowDefs = this._getRowDefs(data, dataIndex);
            return rowDefs.map(rowDef => {
                const cachedRenderRows = (cache && cache.has(rowDef)) ? cache.get(rowDef) : [];
                if (cachedRenderRows.length) {
                    const dataRow = cachedRenderRows.shift();
                    dataRow.dataIndex = dataIndex;
                    return dataRow;
                }
                else {
                    return { data, rowDef, dataIndex };
                }
            });
        }
        /** Update the map containing the content's column definitions. */
        _cacheColumnDefs() {
            this._columnDefsByName.clear();
            const columnDefs = mergeArrayAndSet(this._getOwnDefs(this._contentColumnDefs), this._customColumnDefs);
            columnDefs.forEach(columnDef => {
                if (this._columnDefsByName.has(columnDef.name) &&
                    (typeof ngDevMode === 'undefined' || ngDevMode)) {
                    throw getTableDuplicateColumnNameError(columnDef.name);
                }
                this._columnDefsByName.set(columnDef.name, columnDef);
            });
        }
        /** Update the list of all available row definitions that can be used. */
        _cacheRowDefs() {
            this._headerRowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentHeaderRowDefs), this._customHeaderRowDefs);
            this._footerRowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentFooterRowDefs), this._customFooterRowDefs);
            this._rowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentRowDefs), this._customRowDefs);
            // After all row definitions are determined, find the row definition to be considered default.
            const defaultRowDefs = this._rowDefs.filter(def => !def.when);
            if (!this.multiTemplateDataRows && defaultRowDefs.length > 1 &&
                (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw getTableMultipleDefaultRowDefsError();
            }
            this._defaultRowDef = defaultRowDefs[0];
        }
        /**
         * Check if the header, data, or footer rows have changed what columns they want to display or
         * whether the sticky states have changed for the header or footer. If there is a diff, then
         * re-render that section.
         */
        _renderUpdatedColumns() {
            const columnsDiffReducer = (acc, def) => acc || !!def.getColumnsDiff();
            // Force re-render data rows if the list of column definitions have changed.
            const dataColumnsChanged = this._rowDefs.reduce(columnsDiffReducer, false);
            if (dataColumnsChanged) {
                this._forceRenderDataRows();
            }
            // Force re-render header/footer rows if the list of column definitions have changed.
            const headerColumnsChanged = this._headerRowDefs.reduce(columnsDiffReducer, false);
            if (headerColumnsChanged) {
                this._forceRenderHeaderRows();
            }
            const footerColumnsChanged = this._footerRowDefs.reduce(columnsDiffReducer, false);
            if (footerColumnsChanged) {
                this._forceRenderFooterRows();
            }
            return dataColumnsChanged || headerColumnsChanged || footerColumnsChanged;
        }
        /**
         * Switch to the provided data source by resetting the data and unsubscribing from the current
         * render change subscription if one exists. If the data source is null, interpret this by
         * clearing the row outlet. Otherwise start listening for new data.
         */
        _switchDataSource(dataSource) {
            this._data = [];
            if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["isDataSource"])(this.dataSource)) {
                this.dataSource.disconnect(this);
            }
            // Stop listening for data from the previous data source.
            if (this._renderChangeSubscription) {
                this._renderChangeSubscription.unsubscribe();
                this._renderChangeSubscription = null;
            }
            if (!dataSource) {
                if (this._dataDiffer) {
                    this._dataDiffer.diff([]);
                }
                this._rowOutlet.viewContainer.clear();
            }
            this._dataSource = dataSource;
        }
        /** Set up a subscription for the data provided by the data source. */
        _observeRenderChanges() {
            // If no data source has been set, there is nothing to observe for changes.
            if (!this.dataSource) {
                return;
            }
            let dataStream;
            if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["isDataSource"])(this.dataSource)) {
                dataStream = this.dataSource.connect(this);
            }
            else if (Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["isObservable"])(this.dataSource)) {
                dataStream = this.dataSource;
            }
            else if (Array.isArray(this.dataSource)) {
                dataStream = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(this.dataSource);
            }
            if (dataStream === undefined && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw getTableUnknownDataSourceError();
            }
            this._renderChangeSubscription = dataStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._onDestroy))
                .subscribe(data => {
                this._data = data || [];
                this.renderRows();
            });
        }
        /**
         * Clears any existing content in the header row outlet and creates a new embedded view
         * in the outlet using the header row definition.
         */
        _forceRenderHeaderRows() {
            // Clear the header row outlet if any content exists.
            if (this._headerRowOutlet.viewContainer.length > 0) {
                this._headerRowOutlet.viewContainer.clear();
            }
            this._headerRowDefs.forEach((def, i) => this._renderRow(this._headerRowOutlet, def, i));
            this.updateStickyHeaderRowStyles();
        }
        /**
         * Clears any existing content in the footer row outlet and creates a new embedded view
         * in the outlet using the footer row definition.
         */
        _forceRenderFooterRows() {
            // Clear the footer row outlet if any content exists.
            if (this._footerRowOutlet.viewContainer.length > 0) {
                this._footerRowOutlet.viewContainer.clear();
            }
            this._footerRowDefs.forEach((def, i) => this._renderRow(this._footerRowOutlet, def, i));
            this.updateStickyFooterRowStyles();
        }
        /** Adds the sticky column styles for the rows according to the columns' stick states. */
        _addStickyColumnStyles(rows, rowDef) {
            const columnDefs = Array.from(rowDef.columns || []).map(columnName => {
                const columnDef = this._columnDefsByName.get(columnName);
                if (!columnDef && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                    throw getTableUnknownColumnError(columnName);
                }
                return columnDef;
            });
            const stickyStartStates = columnDefs.map(columnDef => columnDef.sticky);
            const stickyEndStates = columnDefs.map(columnDef => columnDef.stickyEnd);
            this._stickyStyler.updateStickyColumns(rows, stickyStartStates, stickyEndStates);
        }
        /** Gets the list of rows that have been rendered in the row outlet. */
        _getRenderedRows(rowOutlet) {
            const renderedRows = [];
            for (let i = 0; i < rowOutlet.viewContainer.length; i++) {
                const viewRef = rowOutlet.viewContainer.get(i);
                renderedRows.push(viewRef.rootNodes[0]);
            }
            return renderedRows;
        }
        /**
         * Get the matching row definitions that should be used for this row data. If there is only
         * one row definition, it is returned. Otherwise, find the row definitions that has a when
         * predicate that returns true with the data. If none return true, return the default row
         * definition.
         */
        _getRowDefs(data, dataIndex) {
            if (this._rowDefs.length == 1) {
                return [this._rowDefs[0]];
            }
            let rowDefs = [];
            if (this.multiTemplateDataRows) {
                rowDefs = this._rowDefs.filter(def => !def.when || def.when(dataIndex, data));
            }
            else {
                let rowDef = this._rowDefs.find(def => def.when && def.when(dataIndex, data)) || this._defaultRowDef;
                if (rowDef) {
                    rowDefs.push(rowDef);
                }
            }
            if (!rowDefs.length && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw getTableMissingMatchingRowDefError(data);
            }
            return rowDefs;
        }
        _getEmbeddedViewArgs(renderRow, index) {
            const rowDef = renderRow.rowDef;
            const context = { $implicit: renderRow.data };
            return {
                templateRef: rowDef.template,
                context,
                index,
            };
        }
        /**
         * Creates a new row template in the outlet and fills it with the set of cell templates.
         * Optionally takes a context to provide to the row and cells, as well as an optional index
         * of where to place the new row template in the outlet.
         */
        _renderRow(outlet, rowDef, index, context = {}) {
            // TODO(andrewseguin): enforce that one outlet was instantiated from createEmbeddedView
            const view = outlet.viewContainer.createEmbeddedView(rowDef.template, context, index);
            this._renderCellTemplateForItem(rowDef, context);
            return view;
        }
        _renderCellTemplateForItem(rowDef, context) {
            for (let cellTemplate of this._getCellTemplates(rowDef)) {
                if (CdkCellOutlet.mostRecentCellOutlet) {
                    CdkCellOutlet.mostRecentCellOutlet._viewContainer.createEmbeddedView(cellTemplate, context);
                }
            }
            this._changeDetectorRef.markForCheck();
        }
        /**
         * Updates the index-related context for each row to reflect any changes in the index of the rows,
         * e.g. first/last/even/odd.
         */
        _updateRowIndexContext() {
            const viewContainer = this._rowOutlet.viewContainer;
            for (let renderIndex = 0, count = viewContainer.length; renderIndex < count; renderIndex++) {
                const viewRef = viewContainer.get(renderIndex);
                const context = viewRef.context;
                context.count = count;
                context.first = renderIndex === 0;
                context.last = renderIndex === count - 1;
                context.even = renderIndex % 2 === 0;
                context.odd = !context.even;
                if (this.multiTemplateDataRows) {
                    context.dataIndex = this._renderRows[renderIndex].dataIndex;
                    context.renderIndex = renderIndex;
                }
                else {
                    context.index = this._renderRows[renderIndex].dataIndex;
                }
            }
        }
        /** Gets the column definitions for the provided row def. */
        _getCellTemplates(rowDef) {
            if (!rowDef || !rowDef.columns) {
                return [];
            }
            return Array.from(rowDef.columns, columnId => {
                const column = this._columnDefsByName.get(columnId);
                if (!column && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                    throw getTableUnknownColumnError(columnId);
                }
                return rowDef.extractCellTemplate(column);
            });
        }
        /** Adds native table sections (e.g. tbody) and moves the row outlets into them. */
        _applyNativeTableSections() {
            const documentFragment = this._document.createDocumentFragment();
            const sections = [
                { tag: 'thead', outlets: [this._headerRowOutlet] },
                { tag: 'tbody', outlets: [this._rowOutlet, this._noDataRowOutlet] },
                { tag: 'tfoot', outlets: [this._footerRowOutlet] },
            ];
            for (const section of sections) {
                const element = this._document.createElement(section.tag);
                element.setAttribute('role', 'rowgroup');
                for (const outlet of section.outlets) {
                    element.appendChild(outlet.elementRef.nativeElement);
                }
                documentFragment.appendChild(element);
            }
            // Use a DocumentFragment so we don't hit the DOM on each iteration.
            this._elementRef.nativeElement.appendChild(documentFragment);
        }
        /**
         * Forces a re-render of the data rows. Should be called in cases where there has been an input
         * change that affects the evaluation of which rows should be rendered, e.g. toggling
         * `multiTemplateDataRows` or adding/removing row definitions.
         */
        _forceRenderDataRows() {
            this._dataDiffer.diff([]);
            this._rowOutlet.viewContainer.clear();
            this.renderRows();
        }
        /**
         * Checks if there has been a change in sticky states since last check and applies the correct
         * sticky styles. Since checking resets the "dirty" state, this should only be performed once
         * during a change detection and after the inputs are settled (after content check).
         */
        _checkStickyStates() {
            const stickyCheckReducer = (acc, d) => {
                return acc || d.hasStickyChanged();
            };
            // Note that the check needs to occur for every definition since it notifies the definition
            // that it can reset its dirty state. Using another operator like `some` may short-circuit
            // remaining definitions and leave them in an unchecked state.
            if (this._headerRowDefs.reduce(stickyCheckReducer, false)) {
                this.updateStickyHeaderRowStyles();
            }
            if (this._footerRowDefs.reduce(stickyCheckReducer, false)) {
                this.updateStickyFooterRowStyles();
            }
            if (Array.from(this._columnDefsByName.values()).reduce(stickyCheckReducer, false)) {
                this.updateStickyColumnStyles();
            }
        }
        /**
         * Creates the sticky styler that will be used for sticky rows and columns. Listens
         * for directionality changes and provides the latest direction to the styler. Re-applies column
         * stickiness when directionality changes.
         */
        _setupStickyStyler() {
            const direction = this._dir ? this._dir.value : 'ltr';
            this._stickyStyler = new StickyStyler(this._isNativeHtmlTable, this.stickyCssClass, direction, this._coalescedStyleScheduler, this._platform.isBrowser, this.needsPositionStickyOnElement);
            (this._dir ? this._dir.change : Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])())
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._onDestroy))
                .subscribe(value => {
                this._stickyStyler.direction = value;
                this.updateStickyColumnStyles();
            });
        }
        /** Filters definitions that belong to this table from a QueryList. */
        _getOwnDefs(items) {
            return items.filter(item => !item._table || item._table === this);
        }
        /** Creates or removes the no data row, depending on whether any data is being shown. */
        _updateNoDataRow() {
            if (this._noDataRow) {
                const shouldShow = this._rowOutlet.viewContainer.length === 0;
                if (shouldShow !== this._isShowingNoDataRow) {
                    const container = this._noDataRowOutlet.viewContainer;
                    shouldShow ? container.createEmbeddedView(this._noDataRow.templateRef) : container.clear();
                    this._isShowingNoDataRow = shouldShow;
                }
            }
        }
    }
    CdkTable.ɵfac = function CdkTable_Factory(t) { return new (t || CdkTable)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinjectAttribute"]('role'), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["_VIEW_REPEATER_STRATEGY"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_COALESCED_STYLE_SCHEDULER, 8)); };
    CdkTable.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CdkTable, selectors: [["cdk-table"], ["table", "cdk-table", ""]], contentQueries: function CdkTable_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkNoDataRow, true);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkColumnDef, true);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkRowDef, true);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkHeaderRowDef, true);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkFooterRowDef, true);
            }
            if (rf & 2) {
                var _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._noDataRow = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._contentColumnDefs = _t);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._contentRowDefs = _t);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._contentHeaderRowDefs = _t);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._contentFooterRowDefs = _t);
            }
        }, viewQuery: function CdkTable_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](DataRowOutlet, true);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](HeaderRowOutlet, true);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](FooterRowOutlet, true);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](NoDataRowOutlet, true);
            }
            if (rf & 2) {
                var _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._rowOutlet = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._headerRowOutlet = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._footerRowOutlet = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._noDataRowOutlet = _t.first);
            }
        }, hostAttrs: [1, "cdk-table"], inputs: { trackBy: "trackBy", dataSource: "dataSource", multiTemplateDataRows: "multiTemplateDataRows" }, exportAs: ["cdkTable"], features: [/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([
                { provide: CDK_TABLE, useExisting: CdkTable },
                { provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["_VIEW_REPEATER_STRATEGY"], useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["_DisposeViewRepeaterStrategy"] },
                { provide: _COALESCED_STYLE_SCHEDULER, useClass: _CoalescedStyleScheduler },
            ])], ngContentSelectors: _c1, decls: 6, vars: 0, consts: [["headerRowOutlet", ""], ["rowOutlet", ""], ["noDataRowOutlet", ""], ["footerRowOutlet", ""]], template: function CdkTable_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"](_c0);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](1, 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](2, 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](3, 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](4, 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](5, 3);
            }
        }, directives: [HeaderRowOutlet, DataRowOutlet, NoDataRowOutlet, FooterRowOutlet], encapsulation: 2 });
    return CdkTable;
})();
/** Utility function that gets a merged list of the entries in an array and values of a Set. */
function mergeArrayAndSet(array, set) {
    return array.concat(Array.from(set));
}
let CdkTextColumn = /*@__PURE__*/ (() => {
    class CdkTextColumn {
        constructor(
        // `CdkTextColumn` is always requiring a table, but we just assert it manually
        // for better error reporting.
        // tslint:disable-next-line: lightweight-tokens
        _table, _options) {
            this._table = _table;
            this._options = _options;
            /** Alignment of the cell values. */
            this.justify = 'start';
            this._options = _options || {};
        }
        /** Column name that should be used to reference this column. */
        get name() {
            return this._name;
        }
        set name(name) {
            this._name = name;
            // With Ivy, inputs can be initialized before static query results are
            // available. In that case, we defer the synchronization until "ngOnInit" fires.
            this._syncColumnDefName();
        }
        ngOnInit() {
            this._syncColumnDefName();
            if (this.headerText === undefined) {
                this.headerText = this._createDefaultHeaderText();
            }
            if (!this.dataAccessor) {
                this.dataAccessor =
                    this._options.defaultDataAccessor || ((data, name) => data[name]);
            }
            if (this._table) {
                // Provide the cell and headerCell directly to the table with the static `ViewChild` query,
                // since the columnDef will not pick up its content by the time the table finishes checking
                // its content and initializing the rows.
                this.columnDef.cell = this.cell;
                this.columnDef.headerCell = this.headerCell;
                this._table.addColumnDef(this.columnDef);
            }
            else if (typeof ngDevMode === 'undefined' || ngDevMode) {
                throw getTableTextColumnMissingParentTableError();
            }
        }
        ngOnDestroy() {
            if (this._table) {
                this._table.removeColumnDef(this.columnDef);
            }
        }
        /**
         * Creates a default header text. Use the options' header text transformation function if one
         * has been provided. Otherwise simply capitalize the column name.
         */
        _createDefaultHeaderText() {
            const name = this.name;
            if (!name && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw getTableTextColumnMissingNameError();
            }
            if (this._options && this._options.defaultHeaderTextTransform) {
                return this._options.defaultHeaderTextTransform(name);
            }
            return name[0].toUpperCase() + name.slice(1);
        }
        /** Synchronizes the column definition name with the text column name. */
        _syncColumnDefName() {
            if (this.columnDef) {
                this.columnDef.name = this.name;
            }
        }
    }
    CdkTextColumn.ɵfac = function CdkTextColumn_Factory(t) { return new (t || CdkTextColumn)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkTable, 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](TEXT_COLUMN_OPTIONS, 8)); };
    CdkTextColumn.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CdkTextColumn, selectors: [["cdk-text-column"]], viewQuery: function CdkTextColumn_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](CdkColumnDef, true);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](CdkCellDef, true);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](CdkHeaderCellDef, true);
            }
            if (rf & 2) {
                var _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.columnDef = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.cell = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.headerCell = _t.first);
            }
        }, inputs: { justify: "justify", name: "name", headerText: "headerText", dataAccessor: "dataAccessor" }, decls: 3, vars: 0, consts: [["cdkColumnDef", ""], ["cdk-header-cell", "", 3, "text-align", 4, "cdkHeaderCellDef"], ["cdk-cell", "", 3, "text-align", 4, "cdkCellDef"], ["cdk-header-cell", ""], ["cdk-cell", ""]], template: function CdkTextColumn_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0, 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CdkTextColumn_th_1_Template, 2, 3, "th", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CdkTextColumn_td_2_Template, 2, 3, "td", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
            }
        }, directives: [CdkColumnDef, CdkHeaderCellDef, CdkCellDef, CdkHeaderCell, CdkCell], encapsulation: 2 });
    return CdkTextColumn;
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const EXPORTED_DECLARATIONS = [
    CdkTable,
    CdkRowDef,
    CdkCellDef,
    CdkCellOutlet,
    CdkHeaderCellDef,
    CdkFooterCellDef,
    CdkColumnDef,
    CdkCell,
    CdkRow,
    CdkHeaderCell,
    CdkFooterCell,
    CdkHeaderRow,
    CdkHeaderRowDef,
    CdkFooterRow,
    CdkFooterRowDef,
    DataRowOutlet,
    HeaderRowOutlet,
    FooterRowOutlet,
    CdkTextColumn,
    CdkNoDataRow,
    NoDataRowOutlet,
];
let CdkTableModule = /*@__PURE__*/ (() => {
    class CdkTableModule {
    }
    CdkTableModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: CdkTableModule });
    CdkTableModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function CdkTableModule_Factory(t) { return new (t || CdkTableModule)(); }, imports: [[_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["ScrollingModule"]]] });
    return CdkTableModule;
})();
/*@__PURE__*/ (function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CdkTableModule, { declarations: function () { return [CdkTable, CdkRowDef, CdkCellDef, CdkCellOutlet, CdkHeaderCellDef, CdkFooterCellDef, CdkColumnDef, CdkCell, CdkRow, CdkHeaderCell, CdkFooterCell, CdkHeaderRow, CdkHeaderRowDef, CdkFooterRow, CdkFooterRowDef, DataRowOutlet, HeaderRowOutlet, FooterRowOutlet, CdkTextColumn, CdkNoDataRow, NoDataRowOutlet]; }, imports: function () { return [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["ScrollingModule"]]; }, exports: function () { return [CdkTable, CdkRowDef, CdkCellDef, CdkCellOutlet, CdkHeaderCellDef, CdkFooterCellDef, CdkColumnDef, CdkCell, CdkRow, CdkHeaderCell, CdkFooterCell, CdkHeaderRow, CdkHeaderRowDef, CdkFooterRow, CdkFooterRowDef, DataRowOutlet, HeaderRowOutlet, FooterRowOutlet, CdkTextColumn, CdkNoDataRow, NoDataRowOutlet]; } }); })();
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

//# sourceMappingURL=table.js.map


/***/ }),

/***/ "zHWP":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/admin/Dialog/confirm-dialog/confirm-dialog.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ConfirmDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function() { return ConfirmDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");






let ConfirmDialogComponent = /*@__PURE__*/ (() => {
    class ConfirmDialogComponent {
        constructor(data) {
            this.data = data;
        }
    }
    ConfirmDialogComponent.ɵfac = function ConfirmDialogComponent_Factory(t) { return new (t || ConfirmDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
    ConfirmDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmDialogComponent, selectors: [["app-confirm-dialog"]], decls: 13, vars: 4, consts: [[1, "dialogo"], ["aria-hidden", "true", 1, "icono"], ["mat-dialog-title", "", "tabindex", "0"], ["tabindex", "0", 1, "descripcion"], ["mat-dialog-actions", "", 1, "botonera-dialogo"], ["mat-button", "", "mat-stroked-button", "", "mat-dialog-close", "false"], ["mat-button", "", "mat-flat-button", "", "mat-dialog-close", "true"]], template: function ConfirmDialogComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Cancelar");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Aceptar");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.data.encabezado);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.icono);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.encabezado);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.descripcion);
            }
        }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: [".dialogo[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  border-radius: 1rem;\n}\n\n.icono[_ngcontent-%COMP%] {\n  background-color: #3772FF;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 6rem;\n  min-width: 6rem;\n  height: 6rem;\n  min-height: 6rem;\n  border-radius: 50%;\n  margin-bottom: 1.8rem;\n}\n\n.icono[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  color: inherit;\n  font-size: 4.6rem;\n  height: 4.6rem;\n  width: 4.6rem;\n  align-items: center;\n  justify-content: center;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #004884 !important;\n  font-family: \"Montserrat\", sans-serif;\n  margin-bottom: 3rem;\n  text-align: left;\n  font-weight: 700;\n}\n\n.descripcion[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #004884;\n  margin-top: 1.8rem;\n}\n\n.descripcion[_ngcontent-%COMP%]:empty {\n  margin-top: 0;\n}\n\n.botonera-dialogo[_ngcontent-%COMP%] {\n  margin: 4rem 0 0 0;\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nbutton.mat-button.mat-flat-button[_ngcontent-%COMP%] {\n  border-color: #3772FF;\n  background-color: #3772FF;\n  color: white;\n  text-decoration: none;\n  font-weight: 700;\n  border-radius: 1000px;\n}\n\nbutton.mat-stroked-button[_ngcontent-%COMP%] {\n  color: #3772FF;\n  border: solid 2px #3772FF;\n  background-color: white;\n  border-radius: 10000px;\n  text-decoration: none;\n  font-weight: 500;\n}"] });
    return ConfirmDialogComponent;
})();


/***/ })

}]);