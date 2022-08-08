(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "/3NK":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/centros-de-investigacion/centros-de-investigacion-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: CentrosDeInvestigacionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CentrosDeInvestigacionRoutingModule", function() { return CentrosDeInvestigacionRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _centros_de_investigacion_home_centros_de_investigacion_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./centros-de-investigacion-home/centros-de-investigacion-home.component */ "QH8W");





const routes = [
    {
        path: '',
        component: _centros_de_investigacion_home_centros_de_investigacion_home_component__WEBPACK_IMPORTED_MODULE_2__["CentrosDeInvestigacionHomeComponent"]
    }
];
let CentrosDeInvestigacionRoutingModule = /*@__PURE__*/ (() => {
    class CentrosDeInvestigacionRoutingModule {
    }
    CentrosDeInvestigacionRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CentrosDeInvestigacionRoutingModule });
    CentrosDeInvestigacionRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CentrosDeInvestigacionRoutingModule_Factory(t) { return new (t || CentrosDeInvestigacionRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return CentrosDeInvestigacionRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CentrosDeInvestigacionRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ }),

/***/ "2wSF":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/centros-de-investigacion/modal-centros/modal-centros.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ModalCentrosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalCentrosComponent", function() { return ModalCentrosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_services_inv_center2_inv_center_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/inv-center2/inv-center.service */ "PoV7");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "FKr1");














function ModalCentrosComponent_mat_option_13_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const jefeDeCentro_r1 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", jefeDeCentro_r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", jefeDeCentro_r1.profile.names, " ", jefeDeCentro_r1.profile.surname, " ");
    }
}
let ModalCentrosComponent = /*@__PURE__*/ (() => {
    class ModalCentrosComponent {
        constructor(invCenterService, fb, data, dialogRef) {
            this.invCenterService = invCenterService;
            this.fb = fb;
            this.data = data;
            this.dialogRef = dialogRef;
            this.JEFE = 'Jefe de centro';
            this.NOMBRE = 'Nombre del centro de investigación';
            this.name = '';
            this.jefesDeCentro = [];
        }
        ngOnInit() {
            this.builder();
        }
        builder() {
            this.centrosForm = this.fb.group({
                name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                jefe: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            });
            this.name = this.data.name;
            this.jefesDeCentro = this.data.jefes;
        }
        editarCentro() {
            console.log('this.name >>> ', this.name);
            console.log('this.jefe >>> ', this.jefe);
            const jefe = this.jefe ? this.jefe : this.data.jefe;
            this.invCenterService.editarCentro(this.name, jefe, this.data._id)
                .subscribe(() => this.closeModal());
        }
        closeModal() {
            this.dialogRef.close();
        }
    }
    ModalCentrosComponent.ɵfac = function ModalCentrosComponent_Factory(t) { return new (t || ModalCentrosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_inv_center2_inv_center_service__WEBPACK_IMPORTED_MODULE_3__["InvCenterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"])); };
    ModalCentrosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalCentrosComponent, selectors: [["app-modal-centros"]], decls: 23, vars: 6, consts: [[1, "titulo-modal-centros"], [1, "centro-de-inv"], [1, "centro-de-inv__form"], [1, "example-form", 3, "formGroup"], ["appearance", "fill", 1, "full-width"], ["formControlName", "jefe", "name", "Grupos", 3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "legacy", 1, "example-full-width"], ["name", "name", "formControlName", "name", "matInput", "", 3, "ngModel", "ngModelChange"], [1, "centro-de-inv__btn"], [1, "centro-de-inv__btn--button"], [1, "planteamiento-card__btn"], ["mat-raised-button", "", "color", "primary", 3, "click"], [3, "value"]], template: function ModalCentrosComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Jefe Actual:");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Jefe de centro");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-select", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function ModalCentrosComponent_Template_mat_select_valueChange_12_listener($event) { return ctx.jefe = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ModalCentrosComponent_mat_option_13_Template, 2, 3, "mat-option", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Nombre del centro de investigaci\u00F3n");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ModalCentrosComponent_Template_input_ngModelChange_17_listener($event) { return ctx.name = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-card-actions", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalCentrosComponent_Template_button_click_21_listener() { return ctx.editarCentro(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Editar centro ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.data.jefe.profile.names, " ", ctx.data.jefe.profile.surname, "");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.centrosForm);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.jefe);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.jefesDeCentro);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);
            }
        }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"]], styles: [".titulo-modal-centros[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.titulo-modal-centros[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 20px;\n}"] });
    return ModalCentrosComponent;
})();


/***/ }),

/***/ "6Xiu":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/centros-de-investigacion/centros-de-investigacion.module.ts ***!
  \***********************************************************************************/
/*! exports provided: CentrosDeInvestigacionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CentrosDeInvestigacionModule", function() { return CentrosDeInvestigacionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _centros_de_investigacion_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./centros-de-investigacion-routing.module */ "/3NK");
/* harmony import */ var _centros_de_investigacion_home_centros_de_investigacion_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./centros-de-investigacion-home/centros-de-investigacion-home.component */ "QH8W");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _modal_centros_modal_centros_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modal-centros/modal-centros.component */ "2wSF");


















let CentrosDeInvestigacionModule = /*@__PURE__*/ (() => {
    class CentrosDeInvestigacionModule {
    }
    CentrosDeInvestigacionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CentrosDeInvestigacionModule });
    CentrosDeInvestigacionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CentrosDeInvestigacionModule_Factory(t) { return new (t || CentrosDeInvestigacionModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                _centros_de_investigacion_routing_module__WEBPACK_IMPORTED_MODULE_2__["CentrosDeInvestigacionRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"]
            ]] });
    return CentrosDeInvestigacionModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CentrosDeInvestigacionModule, { declarations: [_centros_de_investigacion_home_centros_de_investigacion_home_component__WEBPACK_IMPORTED_MODULE_3__["CentrosDeInvestigacionHomeComponent"], _modal_centros_modal_centros_component__WEBPACK_IMPORTED_MODULE_16__["ModalCentrosComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
            _centros_de_investigacion_routing_module__WEBPACK_IMPORTED_MODULE_2__["CentrosDeInvestigacionRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"]] });
})();


/***/ }),

/***/ "QH8W":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/pages/centros-de-investigacion/centros-de-investigacion-home/centros-de-investigacion-home.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: CentrosDeInvestigacionHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CentrosDeInvestigacionHomeComponent", function() { return CentrosDeInvestigacionHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _modal_centros_modal_centros_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal-centros/modal-centros.component */ "2wSF");
/* harmony import */ var _shared_services_inv_center2_inv_center_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/inv-center2/inv-center.service */ "PoV7");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _admin_users_services_users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../admin/users/services/users.service */ "hv5d");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");



















function CentrosDeInvestigacionHomeComponent_mat_option_16_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const jefeDeCentro_r9 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", jefeDeCentro_r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", jefeDeCentro_r9.profile.names, " ", jefeDeCentro_r9.profile.surname, " ");
    }
}
function CentrosDeInvestigacionHomeComponent_th_29_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function CentrosDeInvestigacionHomeComponent_td_30_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const element_r10 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r10.name, " ");
    }
}
function CentrosDeInvestigacionHomeComponent_th_32_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Jefe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function CentrosDeInvestigacionHomeComponent_td_33_label_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const element_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", element_r11.jefe.profile.names, " ", element_r11.jefe.profile.surname, "");
    }
}
function CentrosDeInvestigacionHomeComponent_td_33_label_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " --- ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function CentrosDeInvestigacionHomeComponent_td_33_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CentrosDeInvestigacionHomeComponent_td_33_label_1_Template, 2, 2, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CentrosDeInvestigacionHomeComponent_td_33_label_2_Template, 2, 0, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const element_r11 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r11.jefe);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !element_r11.jefe);
    }
}
function CentrosDeInvestigacionHomeComponent_th_35_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Acciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function CentrosDeInvestigacionHomeComponent_td_36_Template(rf, ctx) {
    if (rf & 1) {
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CentrosDeInvestigacionHomeComponent_td_36_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const row_r15 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.eliminarCentro(row_r15._id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CentrosDeInvestigacionHomeComponent_td_36_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const row_r15 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.editarCentro(row_r15); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function CentrosDeInvestigacionHomeComponent_tr_37_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 34);
    }
}
function CentrosDeInvestigacionHomeComponent_tr_38_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 35);
    }
}
let CentrosDeInvestigacionHomeComponent = /*@__PURE__*/ (() => {
    class CentrosDeInvestigacionHomeComponent {
        constructor(invCenterService, fb, dialog, usersService) {
            this.invCenterService = invCenterService;
            this.fb = fb;
            this.dialog = dialog;
            this.usersService = usersService;
            this.LIST = 'Listado de centros de investigación';
            this.MESSAGE_LIST = 'A continuación se muestra el Listado de centros de investigación';
            this.displayedColumns1 = ['name', 'jefe', 'acciones'];
            this.centrosDeInvestigacion = [];
            this.jefesDeCentro = [];
            this.name = '';
        }
        ngOnInit() {
            this.builder();
            this.getCenters();
            this.getUsers();
        }
        setName(name) {
            this.name = name;
        }
        eliminarCentro(id) {
            this.invCenterService.removeCenter(id)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => this.getCenters()))
                .subscribe(nuevoCentro => {
            });
        }
        editarCentro(centroSeleccionado) {
            const data = Object.assign({ centro: this.centrosDeInvestigacion, jefes: this.jefesDeCentro }, centroSeleccionado);
            this.dialog.open(_modal_centros_modal_centros_component__WEBPACK_IMPORTED_MODULE_3__["ModalCentrosComponent"], { data })
                .afterClosed().subscribe(() => {
                this.ngOnInit();
            });
        }
        agregarCentro() {
            if (this.name && this.jefe) {
                this.invCenterService.crearCentro(this.name, this.jefe)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => this.getCenters()))
                    .subscribe(nuevoCentro => {
                    this.jefe = undefined;
                    this.name = '';
                });
            }
        }
        builder() {
            this.centrosForm = this.fb.group({
                name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                jefe: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            });
        }
        getCenters() {
            this.invCenterService.getAll()
                .subscribe(centros => {
                // @ts-ignore
                this.centrosDeInvestigacion = centros.invCenters;
            });
        }
        getUsers() {
            this.usersService.getAll()
                .subscribe(users => {
                this.jefesDeCentro = [];
                users.map(user => {
                    if (user.role.name === 'Jefe De Centro') {
                        this.jefesDeCentro.push(user);
                    }
                });
            });
        }
    }
    CentrosDeInvestigacionHomeComponent.ɵfac = function CentrosDeInvestigacionHomeComponent_Factory(t) { return new (t || CentrosDeInvestigacionHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_inv_center2_inv_center_service__WEBPACK_IMPORTED_MODULE_4__["InvCenterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_admin_users_services_users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"])); };
    CentrosDeInvestigacionHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CentrosDeInvestigacionHomeComponent, selectors: [["app-centros-de-investigacion-home"]], decls: 39, vars: 9, consts: [[1, "container"], [1, "card", "card-firma", "card-firma-listado"], [1, "card-centros__title"], [1, "card-firma__message"], [1, "centro-de-inv"], [1, "centro-de-inv__form"], [1, "example-form", 3, "formGroup"], ["appearance", "fill", 1, "full-width"], ["formControlName", "jefe", "name", "Grupos", 3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "legacy", 1, "example-full-width"], ["name", "name", "formControlName", "name", "matInput", "", 3, "ngModel", "ngModelChange"], [1, "centro-de-inv__btn"], [1, "centro-de-inv__btn--button"], [1, "planteamiento-card__btn"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "col-lg-12", "col-md-12", "col-xs-12", "overflow-auto", "card-centros-listado__table-div"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "jefe"], ["matColumnDef", "acciones"], ["scope", "col", "mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "value"], ["mat-header-cell", ""], ["mat-cell", ""], [4, "ngIf"], ["scope", "col", "mat-header-cell", ""], [1, "table-action-list", "table-acciones"], ["mat-icon-button", "", "aria-label", "Example icon-button with a heart icon", "matTooltipClass", "tooltip-white", "matTooltip", "Eliminar centro", "matTooltipPosition", "above", 1, "color-red-delete-button", 3, "click"], ["mat-icon-button", "", "aria-label", "Example icon-button with a heart icon", "matTooltipClass", "tooltip-white", "matTooltip", "Editar centro", "matTooltipPosition", "above", 1, "color-orange-update-button", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function CentrosDeInvestigacionHomeComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Jefe de centro");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-select", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function CentrosDeInvestigacionHomeComponent_Template_mat_select_valueChange_15_listener($event) { return ctx.jefe = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CentrosDeInvestigacionHomeComponent_mat_option_16_Template, 2, 3, "mat-option", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Nombre del centro de investigaci\u00F3n");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CentrosDeInvestigacionHomeComponent_Template_input_ngModelChange_20_listener($event) { return ctx.name = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-card-actions", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CentrosDeInvestigacionHomeComponent_Template_button_click_24_listener() { return ctx.agregarCentro(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Crear ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "table", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](28, 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, CentrosDeInvestigacionHomeComponent_th_29_Template, 2, 0, "th", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, CentrosDeInvestigacionHomeComponent_td_30_Template, 2, 1, "td", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](31, 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, CentrosDeInvestigacionHomeComponent_th_32_Template, 2, 0, "th", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, CentrosDeInvestigacionHomeComponent_td_33_Template, 3, 2, "td", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](34, 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, CentrosDeInvestigacionHomeComponent_th_35_Template, 2, 0, "th", 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, CentrosDeInvestigacionHomeComponent_td_36_Template, 10, 0, "td", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, CentrosDeInvestigacionHomeComponent_tr_37_Template, 1, 0, "tr", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, CentrosDeInvestigacionHomeComponent_tr_38_Template, 1, 0, "tr", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.LIST);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.MESSAGE_LIST);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.centrosForm);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.jefe);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.jefesDeCentro);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.centrosDeInvestigacion);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns1);
            }
        }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatRowDef"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatRow"]], styles: [".mat-card-subtitle[_ngcontent-%COMP%] {\n  color: #004884;\n  font-family: \"Work Sans\", sans-serif;\n  display: block;\n  padding: 1rem;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\ntd[_ngcontent-%COMP%] {\n  line-height: 120%;\n}\n\n.tooltip-red[_ngcontent-%COMP%] {\n  background: #b71c1c;\n  font-size: 16px;\n}\n\n.tooltip-white[_ngcontent-%COMP%] {\n  background: #3772FF;\n  font-size: 16px;\n}\n\n.card[_ngcontent-%COMP%] {\n  padding: 3.3rem 2.4rem 4rem 2.4rem;\n}\n\n  .card-centros__title label {\n  color: #004884;\n  font-weight: 700;\n  letter-spacing: normal;\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 24px;\n}\n\n  .centro-de-inv {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  padding: 20px 15px;\n}\n\n  .centro-de-inv__form mat-form-field {\n  width: 100%;\n}\n\n  .centro-de-inv__btn {\n  position: relative;\n  padding-left: 25px;\n}\n\n  .centro-de-inv__btn--button {\n  width: 100%;\n  height: 60px;\n  bottom: 0;\n  position: absolute;\n}\n\n  .centro-de-inv__btn button {\n  position: absolute;\n  top: 20px;\n}\n\n  .card-centros-listado__table-div table {\n  width: 100%;\n}\n\n  .card-centros-listado__table-div table .table-acciones {\n  justify-content: left;\n}\n\n  .color-red-delete-button {\n  border-bottom: 0 !important;\n}\n\n  .color-red-delete-button mat-icon {\n  color: red;\n}\n\n  .color-orange-update-button {\n  margin-left: 15px;\n  border-bottom: 0 !important;\n}\n\n  .color-orange-update-button mat-icon {\n  color: orange;\n}"] });
    return CentrosDeInvestigacionHomeComponent;
})();


/***/ })

}]);