(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "/XPT":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/pages/admin/project-setup/components/investigation-sub-programs/investigation-sub-programs.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: InvestigationSubProgramsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestigationSubProgramsComponent", function() { return InvestigationSubProgramsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _Dialog_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Dialog/confirm-dialog/confirm-dialog.component */ "zHWP");
/* harmony import */ var _shared_services_investigation_sub_program_investigation_sub_program_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/services/investigation-sub-program/investigation-sub-program.service */ "IXSF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");















function InvestigationSubProgramsComponent_button_12_Template(rf, ctx) {
    if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvestigationSubProgramsComponent_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.agregar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "add_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function InvestigationSubProgramsComponent_th_19_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Descripcion ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function InvestigationSubProgramsComponent_td_20_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const element_r9 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r9.descr, " ");
    }
}
function InvestigationSubProgramsComponent_th_22_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Acciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function InvestigationSubProgramsComponent_td_23_Template(rf, ctx) {
    if (rf & 1) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvestigationSubProgramsComponent_td_23_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const row_r10 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.onProductTypeDeleted(row_r10._id, row_r10.descr); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function InvestigationSubProgramsComponent_tr_24_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 22);
    }
}
function InvestigationSubProgramsComponent_tr_25_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 23);
    }
}
let InvestigationSubProgramsComponent = /*@__PURE__*/ (() => {
    class InvestigationSubProgramsComponent {
        constructor(investigationSubProgramService, fb, rutaActiva, dialog) {
            this.investigationSubProgramService = investigationSubProgramService;
            this.fb = fb;
            this.rutaActiva = rutaActiva;
            this.dialog = dialog;
            this.projectEntries = [];
            this.displayedColumns = ['position', 'name'];
        }
        ngOnInit() {
            this.getAll();
            this.buildForm();
        }
        buildForm() {
            this.addentries = this.fb.group({
                descr: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                Convocatoria: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            });
        }
        getAll() {
            let cv = this.rutaActiva.snapshot.params;
            this.Convocatoria = cv.id;
            this.investigationSubProgramService.getIdConv(this.Convocatoria).subscribe(r => {
                this.projectEntries = r;
            });
        }
        onProductTypeDeleted(item) {
            let datos = {
                icono: 'info',
                severidad: 'dialog-info',
                encabezado: 'Eliminar Sub programa',
                descripcion: `¿Esta seguro que desea eliminar este item?`
            };
            const dialogRef = this.dialog.open(_Dialog_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmDialogComponent"], {
                ariaLabel: `Confirmar eliminación`,
                role: 'alertdialog',
                autoFocus: false,
                data: datos
            });
            dialogRef.afterClosed().subscribe(result => {
                if (result == "true") {
                    this.investigationSubProgramService.delete(item).subscribe((result) => {
                        this.getAll();
                    });
                }
                else {
                }
            });
        }
        agregar() {
            const datos = this.addentries.value;
            var dato = {
                descr: datos.descr,
                Convocatoria: this.Convocatoria
            };
            this.investigationSubProgramService.add(dato).subscribe(r => {
                this.getAll();
                this.buildForm();
            });
        }
    }
    InvestigationSubProgramsComponent.ɵfac = function InvestigationSubProgramsComponent_Factory(t) { return new (t || InvestigationSubProgramsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_investigation_sub_program_investigation_sub_program_service__WEBPACK_IMPORTED_MODULE_3__["InvestigationSubProgramService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"])); };
    InvestigationSubProgramsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InvestigationSubProgramsComponent, selectors: [["app-investigation-sub-programs"]], decls: 26, vars: 7, consts: [[1, "example-form", 3, "formGroup"], ["appearance", "legacy", 1, "example-full-width", 3, "hidden"], ["formControlName", "Convocatoria", "matInput", "", 3, "ngModel", "ngModelChange"], ["appearance", "legacy", 1, "example-full-width"], ["formControlName", "descr", "matInput", ""], ["matTooltip", "Agregar Sub-Programa de Investigaci\u00F3n", "aria-label", "Agregar Sub-Programa de Investigaci\u00F3n", "matTooltipClass", "tooltip-white", "matTooltipPosition", "above", 3, "click", 4, "ngIf"], [1, "card"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["scope", "col", "mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["matTooltip", "Agregar Sub-Programa de Investigaci\u00F3n", "aria-label", "Agregar Sub-Programa de Investigaci\u00F3n", "matTooltipClass", "tooltip-white", "matTooltipPosition", "above", 3, "click"], [1, "iconoadd"], ["mat-header-cell", ""], ["mat-cell", ""], ["scope", "col", "mat-header-cell", ""], [1, "table-action-list"], ["matTooltip", "Eliminar el Sub-Programa de Investigaci\u00F3n", "matTooltipClass", "tooltip-red", "matTooltipPosition", "below", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function InvestigationSubProgramsComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-subtitle");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Registra un Sub-Programa de Investigaci\u00F3n");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InvestigationSubProgramsComponent_Template_input_ngModelChange_7_listener($event) { return ctx.Convocatoria = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Escriba aqui el Sub-Programa de Investigaci\u00F3n");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, InvestigationSubProgramsComponent_button_12_Template, 3, 0, "button", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Lista de Programas de Sub-Programas de Investigaci\u00F3n");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "table", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, InvestigationSubProgramsComponent_th_19_Template, 2, 0, "th", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, InvestigationSubProgramsComponent_td_20_Template, 2, 1, "td", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](21, 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, InvestigationSubProgramsComponent_th_22_Template, 2, 0, "th", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, InvestigationSubProgramsComponent_td_23_Template, 6, 0, "td", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, InvestigationSubProgramsComponent_tr_24_Template, 1, 0, "tr", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, InvestigationSubProgramsComponent_tr_25_Template, 1, 0, "tr", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addentries);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", true);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Convocatoria);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addentries.valid);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.projectEntries);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
            }
        }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatRowDef"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatRow"]], styles: [".mat-card-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  letter-spacing: normal;\n  margin: 0 0 16px;\n  align-items: center;\n  justify-content: center;\n  border-radius: 1rem;\n  padding: 0.5rem;\n  position: relative;\n  margin-bottom: 2.1rem;\n  color: #001326;\n  font-family: \"Work Sans\", sans-serif;\n  display: block;\n}\n\n.tooltip-red[_ngcontent-%COMP%] {\n  background: #b71c1c;\n  font-size: 16px;\n}\n\n.tooltip-white[_ngcontent-%COMP%] {\n  background: #001326;\n  font-size: 16px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.iconoadd[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  display: inline-block;\n  fill: currentColor;\n  height: 54px;\n  width: 54px;\n  font-size: 44px;\n  background-color: transparent;\n  color: #001326;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.2s;\n  padding: 0.5rem;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.mat-slide-toggle.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-label[_ngcontent-%COMP%]   .mat-slide-toggle-bar[_ngcontent-%COMP%] {\n  background-color: #A4BEFF;\n}\n\n.card[_ngcontent-%COMP%] {\n  padding: 2.3rem 2.4rem 3rem 2.4rem;\n}\n\n.table-container[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  border-radius: 0.8rem;\n  border: solid 2px #E6EFFD;\n  overflow: hidden;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  border-radius: 0.5rem;\n  overflow: hidden;\n  border: solid 2px #E6EFFD;\n  border-collapse: collapse;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:not(:last-child) {\n  border-bottom: solid 2px #E6EFFD;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #E6EFFD;\n  padding: 0.5rem !important;\n  text-align: center;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  padding-left: 2.4rem !important;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  padding-right: 2.4rem !important;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.2rem;\n  padding: 1rem 0.5rem;\n  text-align: left;\n  vertical-align: top;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  padding-left: 2.4rem;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  padding-right: 2.4rem;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  padding: 3.9rem 2.4rem 2rem;\n  text-align: left;\n}\n\n.table-container[_ngcontent-%COMP%]   table.listado-indices-entidades[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  height: 7rem;\n}\n\n.table-container[_ngcontent-%COMP%]   table.listado-indices-entidades[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  height: 6.6rem;\n}\n\n.table-container[_ngcontent-%COMP%]   table.listado-indices-entidades[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%] {\n  padding: 3.9rem 2.4rem 2rem !important;\n}\n\n.mat-table[_ngcontent-%COMP%] {\n  font-family: \"Work Sans\", sans-serif;\n}\n\ntr.mat-header-row[_ngcontent-%COMP%] {\n  background-color: #E6EFFD;\n}\n\nth.mat-header-cell[_ngcontent-%COMP%] {\n  background: #001326;\n  color: #e2e2e2;\n  font-size: 1.2rem;\n  border-bottom: solid;\n  text-align: center;\n}\n\nth.mat-header-cell.align-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\nth.mat-header-cell.align-center[_ngcontent-%COMP%]   .mat-sort-header-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.mat-sort-header-arrow[_ngcontent-%COMP%] {\n  color: #001326;\n}\n\n.mat-cell[_ngcontent-%COMP%] {\n  color: #001326;\n  font-size: 1.2rem;\n  padding: 1.5rem !important;\n}\n\ntd.mat-cell[_ngcontent-%COMP%] {\n  border-bottom: solid 2px #E6EFFD;\n}\n\nul.table-action-list[_ngcontent-%COMP%] {\n  list-style-type: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nul.table-action-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding-right: 1rem;\n}\n\nul.table-action-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type {\n  padding-right: 0;\n}\n\nul.table-action-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], ul.table-action-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #001326;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.2s;\n  padding: 0.5rem;\n}\n\nul.table-action-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, ul.table-action-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #001326;\n  color: #FFFFFF;\n}\n\n.mat-card-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-family: \"Work Sans\", sans-serif;\n  letter-spacing: normal;\n  margin: 0 0 16px;\n  color: #001326;\n  padding: 0.5rem;\n}\n\n.mat-card-subtitle[_ngcontent-%COMP%] {\n  color: #001326;\n  font-family: \"Work Sans\", sans-serif;\n}\n\ntd[_ngcontent-%COMP%]   .estado-activo[_ngcontent-%COMP%] {\n  background-color: #069169;\n  color: white;\n  padding: 0.2rem 0.7rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.5rem;\n  min-height: 2.3rem;\n  min-width: 7rem;\n  border-radius: 0.4rem;\n}\n\ntd.align-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\ntd[_ngcontent-%COMP%]   .estado-inactivo[_ngcontent-%COMP%] {\n  background-color: #A80521;\n  color: white;\n  padding: 0.2rem 0.7rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.5rem;\n  min-height: 2.3rem;\n  min-width: 7rem;\n  border-radius: 0.4rem;\n}\n\ntd[_ngcontent-%COMP%]:first-child {\n  padding-left: 1.4rem !important;\n}\n\ntd[_ngcontent-%COMP%]:last-child {\n  padding-right: 2.4rem !important;\n}\n\ntd[_ngcontent-%COMP%]   .mat-slide-toggle[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nbutton[_ngcontent-%COMP%]   .mat-button-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.estado-sin-gestionar[_ngcontent-%COMP%] {\n  background-color: #FFAB00;\n  color: white;\n  padding: 0.2rem 0.7rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.5rem;\n  min-height: 2.3rem;\n  min-width: 7rem;\n  border-radius: 0.4rem;\n}\n\n.estado-activo[_ngcontent-%COMP%] {\n  background-color: #069169;\n  color: white;\n  padding: 0.2rem 0.7rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.5rem;\n  min-height: 2.3rem;\n  min-width: 7rem;\n  border-radius: 0.4rem;\n}\n\n.estado-inactivo[_ngcontent-%COMP%] {\n  background-color: #A80521;\n  color: white;\n  padding: 0.2rem 0.7rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.5rem;\n  min-height: 2.3rem;\n  min-width: 7rem;\n  border-radius: 0.4rem;\n}\n\n.estado-deshabilitado[_ngcontent-%COMP%] {\n  background-color: #707070;\n  color: white;\n  padding: 0.2rem 0.7rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.5rem;\n  min-height: 2.3rem;\n  min-width: 7rem;\n  border-radius: 0.4rem;\n}\n\n.botonera-tabla[_ngcontent-%COMP%] {\n  margin-top: 7rem;\n  margin-bottom: 6.7rem;\n}"] });
    return InvestigationSubProgramsComponent;
})();


/***/ }),

/***/ "2I2g":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/pages/admin/project-setup/components/inv-team-person-positions/inv-team-person-positions.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: InvTeamPersonPositionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvTeamPersonPositionsComponent", function() { return InvTeamPersonPositionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_services_inv_team_person_position_inv_team_person_position_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/services/inv-team-person-position/inv-team-person-position.service */ "86Qd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");













function InvTeamPersonPositionsComponent_button_12_Template(rf, ctx) {
    if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvTeamPersonPositionsComponent_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.agregar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "add_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function InvTeamPersonPositionsComponent_th_19_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Descripcion ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function InvTeamPersonPositionsComponent_td_20_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const element_r9 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r9.descr, " ");
    }
}
function InvTeamPersonPositionsComponent_th_22_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Acciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function InvTeamPersonPositionsComponent_td_23_Template(rf, ctx) {
    if (rf & 1) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvTeamPersonPositionsComponent_td_23_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const row_r10 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.onProductTypeDeleted(row_r10._id, row_r10.descr); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function InvTeamPersonPositionsComponent_tr_24_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 22);
    }
}
function InvTeamPersonPositionsComponent_tr_25_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 23);
    }
}
let InvTeamPersonPositionsComponent = /*@__PURE__*/ (() => {
    class InvTeamPersonPositionsComponent {
        constructor(invTeamPersonPositionService, fb, rutaActiva) {
            this.invTeamPersonPositionService = invTeamPersonPositionService;
            this.fb = fb;
            this.rutaActiva = rutaActiva;
            this.projectEntries = [];
            this.displayedColumns = ['position', 'name'];
        }
        ngOnInit() {
            this.getAll();
            this.buildForm();
        }
        buildForm() {
            this.addentries = this.fb.group({
                descr: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                Convocatoria: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            });
        }
        getAll() {
            let cv = this.rutaActiva.snapshot.params;
            this.Convocatoria = cv.id;
            this.invTeamPersonPositionService.getIdConv(this.Convocatoria).subscribe(r => {
                this.projectEntries = r;
            });
        }
        onProductTypeDeleted(item) {
            this.invTeamPersonPositionService.delete(item).subscribe(r => {
                this.getAll();
            });
        }
        agregar() {
            const datos = this.addentries.value;
            var dato = {
                descr: datos.descr,
                Convocatoria: this.Convocatoria
            };
            this.invTeamPersonPositionService.add(dato).subscribe(r => {
                this.getAll();
                this.buildForm();
            });
        }
    }
    InvTeamPersonPositionsComponent.ɵfac = function InvTeamPersonPositionsComponent_Factory(t) { return new (t || InvTeamPersonPositionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_inv_team_person_position_inv_team_person_position_service__WEBPACK_IMPORTED_MODULE_2__["InvTeamPersonPositionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
    InvTeamPersonPositionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InvTeamPersonPositionsComponent, selectors: [["app-inv-team-person-positions"]], decls: 26, vars: 7, consts: [[1, "example-form", 3, "formGroup"], ["appearance", "legacy", 1, "example-full-width", 3, "hidden"], ["formControlName", "Convocatoria", "matInput", "", 3, "ngModel", "ngModelChange"], ["appearance", "legacy", 1, "example-full-width"], ["formControlName", "descr", "matInput", ""], ["matTooltip", "Agregar Rol-Funcion", "aria-label", "Agregar Cargo", "matTooltipClass", "tooltip-white", "matTooltipPosition", "above", 3, "click", 4, "ngIf"], [1, "card"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["scope", "col", "mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["matTooltip", "Agregar Rol-Funcion", "aria-label", "Agregar Cargo", "matTooltipClass", "tooltip-white", "matTooltipPosition", "above", 3, "click"], [1, "iconoadd"], ["mat-header-cell", ""], ["mat-cell", ""], ["scope", "col", "mat-header-cell", ""], [1, "table-action-list"], ["matTooltip", "Eliminar Cargo", "matTooltipClass", "tooltip-red", "matTooltipPosition", "below", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function InvTeamPersonPositionsComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-subtitle");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Registra un Rol-Fucnion");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InvTeamPersonPositionsComponent_Template_input_ngModelChange_7_listener($event) { return ctx.Convocatoria = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Escriba aqui el Rol-Funci\u00F3n");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, InvTeamPersonPositionsComponent_button_12_Template, 3, 0, "button", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Lista de Rol-Funcion");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "table", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, InvTeamPersonPositionsComponent_th_19_Template, 2, 0, "th", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, InvTeamPersonPositionsComponent_td_20_Template, 2, 1, "td", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](21, 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, InvTeamPersonPositionsComponent_th_22_Template, 2, 0, "th", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, InvTeamPersonPositionsComponent_td_23_Template, 6, 0, "td", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, InvTeamPersonPositionsComponent_tr_24_Template, 1, 0, "tr", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, InvTeamPersonPositionsComponent_tr_25_Template, 1, 0, "tr", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addentries);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", true);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Convocatoria);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addentries.valid);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.projectEntries);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
            }
        }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatRowDef"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatRow"]], styles: [".mat-card-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  letter-spacing: normal;\n  margin: 0 0 16px;\n  align-items: center;\n  justify-content: center;\n  border-radius: 1rem;\n  padding: 0.5rem;\n  position: relative;\n  margin-bottom: 2.1rem;\n  color: #001326;\n  font-family: \"Work Sans\", sans-serif;\n  display: block;\n}\n\n.tooltip-red[_ngcontent-%COMP%] {\n  background: #b71c1c;\n  font-size: 16px;\n}\n\n.tooltip-white[_ngcontent-%COMP%] {\n  background: #001326;\n  font-size: 16px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.iconoadd[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  display: inline-block;\n  fill: currentColor;\n  height: 54px;\n  width: 54px;\n  font-size: 44px;\n  background-color: transparent;\n  color: #001326;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.2s;\n  padding: 0.5rem;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.mat-slide-toggle.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-label[_ngcontent-%COMP%]   .mat-slide-toggle-bar[_ngcontent-%COMP%] {\n  background-color: #A4BEFF;\n}\n\n.card[_ngcontent-%COMP%] {\n  padding: 2.3rem 2.4rem 3rem 2.4rem;\n}\n\n.table-container[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  border-radius: 0.8rem;\n  border: solid 2px #E6EFFD;\n  overflow: hidden;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  border-radius: 0.5rem;\n  overflow: hidden;\n  border: solid 2px #E6EFFD;\n  border-collapse: collapse;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:not(:last-child) {\n  border-bottom: solid 2px #E6EFFD;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #E6EFFD;\n  padding: 0.5rem !important;\n  text-align: center;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  padding-left: 2.4rem !important;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  padding-right: 2.4rem !important;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.2rem;\n  padding: 1rem 0.5rem;\n  text-align: left;\n  vertical-align: top;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  padding-left: 2.4rem;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  padding-right: 2.4rem;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  padding: 3.9rem 2.4rem 2rem;\n  text-align: left;\n}\n\n.table-container[_ngcontent-%COMP%]   table.listado-indices-entidades[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  height: 7rem;\n}\n\n.table-container[_ngcontent-%COMP%]   table.listado-indices-entidades[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  height: 6.6rem;\n}\n\n.table-container[_ngcontent-%COMP%]   table.listado-indices-entidades[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%] {\n  padding: 3.9rem 2.4rem 2rem !important;\n}\n\n.mat-table[_ngcontent-%COMP%] {\n  font-family: \"Work Sans\", sans-serif;\n}\n\ntr.mat-header-row[_ngcontent-%COMP%] {\n  background-color: #E6EFFD;\n}\n\nth.mat-header-cell[_ngcontent-%COMP%] {\n  background: #001326;\n  color: #e2e2e2;\n  font-size: 1.2rem;\n  border-bottom: solid;\n  text-align: center;\n}\n\nth.mat-header-cell.align-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\nth.mat-header-cell.align-center[_ngcontent-%COMP%]   .mat-sort-header-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.mat-sort-header-arrow[_ngcontent-%COMP%] {\n  color: #001326;\n}\n\n.mat-cell[_ngcontent-%COMP%] {\n  color: #001326;\n  font-size: 1.2rem;\n  padding: 1.5rem !important;\n}\n\ntd.mat-cell[_ngcontent-%COMP%] {\n  border-bottom: solid 2px #E6EFFD;\n}\n\nul.table-action-list[_ngcontent-%COMP%] {\n  list-style-type: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nul.table-action-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding-right: 1rem;\n}\n\nul.table-action-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type {\n  padding-right: 0;\n}\n\nul.table-action-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], ul.table-action-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #001326;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.2s;\n  padding: 0.5rem;\n}\n\nul.table-action-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, ul.table-action-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #001326;\n  color: #FFFFFF;\n}\n\n.mat-card-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-family: \"Work Sans\", sans-serif;\n  letter-spacing: normal;\n  margin: 0 0 16px;\n  color: #001326;\n  padding: 0.5rem;\n}\n\n.mat-card-subtitle[_ngcontent-%COMP%] {\n  color: #001326;\n  font-family: \"Work Sans\", sans-serif;\n}\n\ntd[_ngcontent-%COMP%]   .estado-activo[_ngcontent-%COMP%] {\n  background-color: #069169;\n  color: white;\n  padding: 0.2rem 0.7rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.5rem;\n  min-height: 2.3rem;\n  min-width: 7rem;\n  border-radius: 0.4rem;\n}\n\ntd.align-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\ntd[_ngcontent-%COMP%]   .estado-inactivo[_ngcontent-%COMP%] {\n  background-color: #A80521;\n  color: white;\n  padding: 0.2rem 0.7rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.5rem;\n  min-height: 2.3rem;\n  min-width: 7rem;\n  border-radius: 0.4rem;\n}\n\ntd[_ngcontent-%COMP%]:first-child {\n  padding-left: 1.4rem !important;\n}\n\ntd[_ngcontent-%COMP%]:last-child {\n  padding-right: 2.4rem !important;\n}\n\ntd[_ngcontent-%COMP%]   .mat-slide-toggle[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nbutton[_ngcontent-%COMP%]   .mat-button-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.estado-sin-gestionar[_ngcontent-%COMP%] {\n  background-color: #FFAB00;\n  color: white;\n  padding: 0.2rem 0.7rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.5rem;\n  min-height: 2.3rem;\n  min-width: 7rem;\n  border-radius: 0.4rem;\n}\n\n.estado-activo[_ngcontent-%COMP%] {\n  background-color: #069169;\n  color: white;\n  padding: 0.2rem 0.7rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.5rem;\n  min-height: 2.3rem;\n  min-width: 7rem;\n  border-radius: 0.4rem;\n}\n\n.estado-inactivo[_ngcontent-%COMP%] {\n  background-color: #A80521;\n  color: white;\n  padding: 0.2rem 0.7rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.5rem;\n  min-height: 2.3rem;\n  min-width: 7rem;\n  border-radius: 0.4rem;\n}\n\n.estado-deshabilitado[_ngcontent-%COMP%] {\n  background-color: #707070;\n  color: white;\n  padding: 0.2rem 0.7rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.5rem;\n  min-height: 2.3rem;\n  min-width: 7rem;\n  border-radius: 0.4rem;\n}\n\n.botonera-tabla[_ngcontent-%COMP%] {\n  margin-top: 7rem;\n  margin-bottom: 6.7rem;\n}"] });
    return InvTeamPersonPositionsComponent;
})();


/***/ }),

/***/ "2XR+":
/*!*******************************************************************!*\
  !*** ./src/app/pages/admin/project-setup/project-setup.module.ts ***!
  \*******************************************************************/
/*! exports provided: ProjectSetupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectSetupModule", function() { return ProjectSetupModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _project_setup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-setup.component */ "MM6K");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _project_setup_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./project-setup.routing.module */ "BmSX");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _components_product_types_product_types_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/product-types/product-types.component */ "aUtL");
/* harmony import */ var _components_project_entries_project_entries_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/project-entries/project-entries.component */ "Iyx7");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _components_investigation_lines_investigation_lines_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/investigation-lines/investigation-lines.component */ "i2gs");
/* harmony import */ var _components_investigation_programs_investigation_programs_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/investigation-programs/investigation-programs.component */ "tK4v");
/* harmony import */ var _components_investigation_sub_programs_investigation_sub_programs_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/investigation-sub-programs/investigation-sub-programs.component */ "/XPT");
/* harmony import */ var _components_investigation_endorsers_investigation_endorsers_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/investigation-endorsers/investigation-endorsers.component */ "Jb+E");
/* harmony import */ var _components_investigation_types_investigation_types_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/investigation-types/investigation-types.component */ "gDT4");
/* harmony import */ var _components_group_categories_group_categories_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/group-categories/group-categories.component */ "P1jZ");
/* harmony import */ var _components_inv_team_person_positions_inv_team_person_positions_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/inv-team-person-positions/inv-team-person-positions.component */ "2I2g");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");

























let ProjectSetupModule = /*@__PURE__*/ (() => {
    class ProjectSetupModule {
    }
    ProjectSetupModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProjectSetupModule });
    ProjectSetupModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProjectSetupModule_Factory(t) { return new (t || ProjectSetupModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _project_setup_routing_module__WEBPACK_IMPORTED_MODULE_6__["ProjectSetupRoutingModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__["MatSlideToggleModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInputModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__["MatTooltipModule"]
            ]] });
    return ProjectSetupModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProjectSetupModule, { declarations: [_project_setup_component__WEBPACK_IMPORTED_MODULE_2__["ProjectSetupComponent"],
            _components_product_types_product_types_component__WEBPACK_IMPORTED_MODULE_8__["ProductTypesComponent"],
            _components_project_entries_project_entries_component__WEBPACK_IMPORTED_MODULE_9__["ProjectEntriesComponent"],
            _components_investigation_lines_investigation_lines_component__WEBPACK_IMPORTED_MODULE_15__["InvestigationLinesComponent"],
            _components_investigation_programs_investigation_programs_component__WEBPACK_IMPORTED_MODULE_16__["InvestigationProgramsComponent"],
            _components_investigation_sub_programs_investigation_sub_programs_component__WEBPACK_IMPORTED_MODULE_17__["InvestigationSubProgramsComponent"],
            _components_investigation_endorsers_investigation_endorsers_component__WEBPACK_IMPORTED_MODULE_18__["InvestigationEndorsersComponent"],
            _components_investigation_types_investigation_types_component__WEBPACK_IMPORTED_MODULE_19__["InvestigationTypesComponent"],
            _components_group_categories_group_categories_component__WEBPACK_IMPORTED_MODULE_20__["GroupCategoriesComponent"],
            _components_inv_team_person_positions_inv_team_person_positions_component__WEBPACK_IMPORTED_MODULE_21__["InvTeamPersonPositionsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _project_setup_routing_module__WEBPACK_IMPORTED_MODULE_6__["ProjectSetupRoutingModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__["MatSlideToggleModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInputModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__["MatTooltipModule"]] });
})();


/***/ }),

/***/ "BmSX":
/*!***************************************************************************!*\
  !*** ./src/app/pages/admin/project-setup/project-setup.routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: ProjectSetupRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectSetupRoutingModule", function() { return ProjectSetupRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _project_setup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-setup.component */ "MM6K");





const routes = [
    {
        path: '',
        component: _project_setup_component__WEBPACK_IMPORTED_MODULE_2__["ProjectSetupComponent"],
    }
];
let ProjectSetupRoutingModule = /*@__PURE__*/ (() => {
    class ProjectSetupRoutingModule {
    }
    ProjectSetupRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProjectSetupRoutingModule });
    ProjectSetupRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProjectSetupRoutingModule_Factory(t) { return new (t || ProjectSetupRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return ProjectSetupRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProjectSetupRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ }),

/***/ "Iyx7":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/admin/project-setup/components/project-entries/project-entries.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ProjectEntriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectEntriesComponent", function() { return ProjectEntriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _Dialog_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Dialog/confirm-dialog/confirm-dialog.component */ "zHWP");
/* harmony import */ var _shared_services_project_entry_project_entry_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/services/project-entry/project-entry.service */ "EVVv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
















function ProjectEntriesComponent_button_12_Template(rf, ctx) {
    if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectEntriesComponent_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.agregar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "add_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ProjectEntriesComponent_th_19_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Descripcion ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ProjectEntriesComponent_td_20_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const element_r9 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r9.descr, " ");
    }
}
function ProjectEntriesComponent_th_22_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Acciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ProjectEntriesComponent_td_23_Template(rf, ctx) {
    if (rf & 1) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectEntriesComponent_td_23_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const row_r10 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.onProductTypeDeleted(row_r10._id, row_r10.descr); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ProjectEntriesComponent_tr_24_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 22);
    }
}
function ProjectEntriesComponent_tr_25_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 23);
    }
}
let ProjectEntriesComponent = /*@__PURE__*/ (() => {
    class ProjectEntriesComponent {
        constructor(projectEntryService, fb, rutaActiva, dialog) {
            this.projectEntryService = projectEntryService;
            this.fb = fb;
            this.rutaActiva = rutaActiva;
            this.dialog = dialog;
            this.projectEntries = [];
            this.displayedColumns = ['position', 'name'];
        }
        ngOnInit() {
            this.getAll();
            this.buildForm();
        }
        buildForm() {
            this.addentries = this.fb.group({
                descr: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                Convocatoria: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            });
        }
        getAll() {
            let cv = this.rutaActiva.snapshot.params;
            this.Convocatoria = cv.id;
            this.projectEntryService.getIdConv(this.Convocatoria).subscribe(r => {
                this.projectEntries = r;
            });
        }
        onProductTypeDeleted(item) {
            let datos = {
                icono: 'info',
                severidad: 'dialog-info',
                encabezado: 'Eliminar Rubro',
                descripcion: `¿Esta seguro que desea eliminar este item?`
            };
            const dialogRef = this.dialog.open(_Dialog_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmDialogComponent"], {
                ariaLabel: `Confirmar eliminación`,
                role: 'alertdialog',
                autoFocus: false,
                data: datos
            });
            dialogRef.afterClosed().subscribe(result => {
                if (result == "true") {
                    this.projectEntryService.delete(item).subscribe((result) => {
                        this.getAll();
                    });
                }
                else {
                }
            });
        }
        agregar() {
            const datos = this.addentries.value;
            var dato = {
                descr: datos.descr,
                Convocatoria: this.Convocatoria
            };
            this.projectEntryService.add(dato).subscribe(r => {
                this.getAll();
                this.buildForm();
            });
        }
    }
    ProjectEntriesComponent.ɵfac = function ProjectEntriesComponent_Factory(t) { return new (t || ProjectEntriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_project_entry_project_entry_service__WEBPACK_IMPORTED_MODULE_3__["ProjectEntryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"])); };
    ProjectEntriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectEntriesComponent, selectors: [["app-project-entries"]], decls: 26, vars: 7, consts: [[1, "example-form", 3, "formGroup"], ["appearance", "legacy", 1, "example-full-width", 3, "hidden"], ["formControlName", "Convocatoria", "matInput", "", 3, "ngModel", "ngModelChange"], ["appearance", "legacy", 1, "example-full-width"], ["formControlName", "descr", "matInput", ""], ["mat-icon-button", "", "matTooltip", "Agregar Rubro", "aria-label", "Agregar Rubro", "matTooltipClass", "tooltip-white", "matTooltipPosition", "above", 3, "click", 4, "ngIf"], [1, "card"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["scope", "col", "mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-icon-button", "", "matTooltip", "Agregar Rubro", "aria-label", "Agregar Rubro", "matTooltipClass", "tooltip-white", "matTooltipPosition", "above", 3, "click"], [1, "iconoadd"], ["mat-header-cell", ""], ["mat-cell", ""], ["scope", "col", "mat-header-cell", ""], [1, "table-action-list"], ["matTooltip", "Eliminar el Rubro", "matTooltipClass", "tooltip-red", "matTooltipPosition", "below", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function ProjectEntriesComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-subtitle");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Registra un rubro");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProjectEntriesComponent_Template_input_ngModelChange_7_listener($event) { return ctx.Convocatoria = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Escriba aqui el Rubro");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProjectEntriesComponent_button_12_Template, 3, 0, "button", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Lista de Rubros");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "table", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ProjectEntriesComponent_th_19_Template, 2, 0, "th", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ProjectEntriesComponent_td_20_Template, 2, 1, "td", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](21, 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ProjectEntriesComponent_th_22_Template, 2, 0, "th", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ProjectEntriesComponent_td_23_Template, 6, 0, "td", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ProjectEntriesComponent_tr_24_Template, 1, 0, "tr", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ProjectEntriesComponent_tr_25_Template, 1, 0, "tr", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addentries);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", true);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Convocatoria);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addentries.valid);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.projectEntries);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
            }
        }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatRowDef"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatRow"]], styles: [".mat-card-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  letter-spacing: normal;\n  margin: 0 0 16px;\n  align-items: center;\n  justify-content: center;\n  border-radius: 1rem;\n  padding: 0.5rem;\n  position: relative;\n  margin-bottom: 2.1rem;\n  color: #001326;\n  font-family: \"Work Sans\", sans-serif;\n  display: block;\n}\n\n.tooltip-red[_ngcontent-%COMP%] {\n  background: #b71c1c;\n  font-size: 16px;\n}\n\n.tooltip-white[_ngcontent-%COMP%] {\n  background: #001326;\n  font-size: 16px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.iconoadd[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  display: inline-block;\n  fill: currentColor;\n  height: 54px;\n  width: 54px;\n  font-size: 44px;\n  background-color: transparent;\n  color: #001326;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.2s;\n  padding: 0.5rem;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.mat-slide-toggle.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-label[_ngcontent-%COMP%]   .mat-slide-toggle-bar[_ngcontent-%COMP%] {\n  background-color: #A4BEFF;\n}\n\n.card[_ngcontent-%COMP%] {\n  padding: 2.3rem 2.4rem 3rem 2.4rem;\n}\n\n.table-container[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  border-radius: 0.8rem;\n  border: solid 2px #E6EFFD;\n  overflow: hidden;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  border-radius: 0.5rem;\n  overflow: hidden;\n  border: solid 2px #E6EFFD;\n  border-collapse: collapse;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:not(:last-child) {\n  border-bottom: solid 2px #E6EFFD;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #E6EFFD;\n  padding: 0.5rem !important;\n  text-align: center;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  padding-left: 2.4rem !important;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  padding-right: 2.4rem !important;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.2rem;\n  padding: 1rem 0.5rem;\n  text-align: left;\n  vertical-align: top;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  padding-left: 2.4rem;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  padding-right: 2.4rem;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  padding: 3.9rem 2.4rem 2rem;\n  text-align: left;\n}\n\n.table-container[_ngcontent-%COMP%]   table.listado-indices-entidades[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  height: 7rem;\n}\n\n.table-container[_ngcontent-%COMP%]   table.listado-indices-entidades[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  height: 6.6rem;\n}\n\n.table-container[_ngcontent-%COMP%]   table.listado-indices-entidades[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%] {\n  padding: 3.9rem 2.4rem 2rem !important;\n}\n\n.mat-table[_ngcontent-%COMP%] {\n  font-family: \"Work Sans\", sans-serif;\n}\n\ntr.mat-header-row[_ngcontent-%COMP%] {\n  background-color: #E6EFFD;\n}\n\nth.mat-header-cell[_ngcontent-%COMP%] {\n  background: #001326;\n  color: #e2e2e2;\n  font-size: 1.2rem;\n  border-bottom: solid;\n  text-align: center;\n}\n\nth.mat-header-cell.align-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\nth.mat-header-cell.align-center[_ngcontent-%COMP%]   .mat-sort-header-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.mat-sort-header-arrow[_ngcontent-%COMP%] {\n  color: #001326;\n}\n\n.mat-cell[_ngcontent-%COMP%] {\n  color: #001326;\n  font-size: 1.2rem;\n  padding: 1.5rem !important;\n}\n\ntd.mat-cell[_ngcontent-%COMP%] {\n  border-bottom: solid 2px #E6EFFD;\n}\n\nul.table-action-list[_ngcontent-%COMP%] {\n  list-style-type: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nul.table-action-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding-right: 1rem;\n}\n\nul.table-action-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type {\n  padding-right: 0;\n}\n\nul.table-action-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], ul.table-action-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #001326;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.2s;\n  padding: 0.5rem;\n}\n\nul.table-action-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, ul.table-action-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #001326;\n  color: #FFFFFF;\n}\n\n.mat-card-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-family: \"Work Sans\", sans-serif;\n  letter-spacing: normal;\n  margin: 0 0 16px;\n  color: #001326;\n  padding: 0.5rem;\n}\n\n.mat-card-subtitle[_ngcontent-%COMP%] {\n  color: #001326;\n  font-family: \"Work Sans\", sans-serif;\n}\n\ntd[_ngcontent-%COMP%]   .estado-activo[_ngcontent-%COMP%] {\n  background-color: #069169;\n  color: white;\n  padding: 0.2rem 0.7rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.5rem;\n  min-height: 2.3rem;\n  min-width: 7rem;\n  border-radius: 0.4rem;\n}\n\ntd.align-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\ntd[_ngcontent-%COMP%]   .estado-inactivo[_ngcontent-%COMP%] {\n  background-color: #A80521;\n  color: white;\n  padding: 0.2rem 0.7rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.5rem;\n  min-height: 2.3rem;\n  min-width: 7rem;\n  border-radius: 0.4rem;\n}\n\ntd[_ngcontent-%COMP%]:first-child {\n  padding-left: 1.4rem !important;\n}\n\ntd[_ngcontent-%COMP%]:last-child {\n  padding-right: 2.4rem !important;\n}\n\ntd[_ngcontent-%COMP%]   .mat-slide-toggle[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nbutton[_ngcontent-%COMP%]   .mat-button-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.estado-sin-gestionar[_ngcontent-%COMP%] {\n  background-color: #FFAB00;\n  color: white;\n  padding: 0.2rem 0.7rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.5rem;\n  min-height: 2.3rem;\n  min-width: 7rem;\n  border-radius: 0.4rem;\n}\n\n.estado-activo[_ngcontent-%COMP%] {\n  background-color: #069169;\n  color: white;\n  padding: 0.2rem 0.7rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.5rem;\n  min-height: 2.3rem;\n  min-width: 7rem;\n  border-radius: 0.4rem;\n}\n\n.estado-inactivo[_ngcontent-%COMP%] {\n  background-color: #A80521;\n  color: white;\n  padding: 0.2rem 0.7rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.5rem;\n  min-height: 2.3rem;\n  min-width: 7rem;\n  border-radius: 0.4rem;\n}\n\n.estado-deshabilitado[_ngcontent-%COMP%] {\n  background-color: #707070;\n  color: white;\n  padding: 0.2rem 0.7rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.5rem;\n  min-height: 2.3rem;\n  min-width: 7rem;\n  border-radius: 0.4rem;\n}\n\n.botonera-tabla[_ngcontent-%COMP%] {\n  margin-top: 7rem;\n  margin-bottom: 6.7rem;\n}"] });
    return ProjectEntriesComponent;
})();


/***/ }),

/***/ "Jb+E":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/pages/admin/project-setup/components/investigation-endorsers/investigation-endorsers.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: InvestigationEndorsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestigationEndorsersComponent", function() { return InvestigationEndorsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _Dialog_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Dialog/confirm-dialog/confirm-dialog.component */ "zHWP");
/* harmony import */ var _shared_services_inv_endorsers_inv_endorsers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/services/inv-endorsers/inv-endorsers.service */ "O9ht");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");















function InvestigationEndorsersComponent_button_12_Template(rf, ctx) {
    if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvestigationEndorsersComponent_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.agregar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "add_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function InvestigationEndorsersComponent_th_19_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Descripcion ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function InvestigationEndorsersComponent_td_20_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const element_r9 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r9.descr, " ");
    }
}
function InvestigationEndorsersComponent_th_22_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Acciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function InvestigationEndorsersComponent_td_23_Template(rf, ctx) {
    if (rf & 1) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvestigationEndorsersComponent_td_23_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const row_r10 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.onProductTypeDeleted(row_r10._id, row_r10.descr); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function InvestigationEndorsersComponent_tr_24_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 22);
    }
}
function InvestigationEndorsersComponent_tr_25_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 23);
    }
}
let InvestigationEndorsersComponent = /*@__PURE__*/ (() => {
    class InvestigationEndorsersComponent {
        constructor(invEndorsersService, fb, rutaActiva, dialog) {
            this.invEndorsersService = invEndorsersService;
            this.fb = fb;
            this.rutaActiva = rutaActiva;
            this.dialog = dialog;
            this.projectEntries = [];
            this.displayedColumns = ['position', 'name'];
        }
        ngOnInit() {
            this.getAll();
            this.buildForm();
        }
        buildForm() {
            this.addentries = this.fb.group({
                descr: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                Convocatoria: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            });
        }
        getAll() {
            let cv = this.rutaActiva.snapshot.params;
            this.Convocatoria = cv.id;
            this.invEndorsersService.getIdConv(this.Convocatoria).subscribe(r => {
                this.projectEntries = r;
            });
        }
        onProductTypeDeleted(item) {
            let datos = {
                icono: 'info',
                severidad: 'dialog-info',
                encabezado: 'Eliminar Encargado',
                descripcion: `¿Esta seguro que desea eliminar este item?`
            };
            const dialogRef = this.dialog.open(_Dialog_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmDialogComponent"], {
                ariaLabel: `Confirmar eliminación`,
                role: 'alertdialog',
                autoFocus: false,
                data: datos
            });
            dialogRef.afterClosed().subscribe(result => {
                if (result == "true") {
                    this.invEndorsersService.delete(item).subscribe((result) => {
                        this.getAll();
                    });
                }
                else {
                }
            });
        }
        agregar() {
            const datos = this.addentries.value;
            var dato = {
                descr: datos.descr,
                Convocatoria: this.Convocatoria
            };
            this.invEndorsersService.add(dato).subscribe(r => {
                this.getAll();
                this.buildForm();
            });
        }
    }
    InvestigationEndorsersComponent.ɵfac = function InvestigationEndorsersComponent_Factory(t) { return new (t || InvestigationEndorsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_inv_endorsers_inv_endorsers_service__WEBPACK_IMPORTED_MODULE_3__["InvEndorsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"])); };
    InvestigationEndorsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InvestigationEndorsersComponent, selectors: [["app-investigation-endorsers"]], decls: 26, vars: 7, consts: [[1, "example-form", 3, "formGroup"], ["appearance", "legacy", 1, "example-full-width", 3, "hidden"], ["formControlName", "Convocatoria", "matInput", "", 3, "ngModel", "ngModelChange"], ["appearance", "legacy", 1, "example-full-width"], ["formControlName", "descr", "matInput", ""], ["matTooltip", "Agregar Persona", "matTooltipClass", "tooltip-white", "matTooltipPosition", "below", 3, "click", 4, "ngIf"], [1, "card"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["scope", "col", "mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["matTooltip", "Agregar Persona", "matTooltipClass", "tooltip-white", "matTooltipPosition", "below", 3, "click"], [1, "iconoadd"], ["mat-header-cell", ""], ["mat-cell", ""], ["scope", "col", "mat-header-cell", ""], [1, "table-action-list"], ["matTooltip", "Eliminar Persona", "matTooltipClass", "tooltip-red", "matTooltipPosition", "below", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function InvestigationEndorsersComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-subtitle");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Registra una persona");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InvestigationEndorsersComponent_Template_input_ngModelChange_7_listener($event) { return ctx.Convocatoria = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Escriba aqui la persona");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, InvestigationEndorsersComponent_button_12_Template, 3, 0, "button", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Lista de Encargados");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "table", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, InvestigationEndorsersComponent_th_19_Template, 2, 0, "th", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, InvestigationEndorsersComponent_td_20_Template, 2, 1, "td", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](21, 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, InvestigationEndorsersComponent_th_22_Template, 2, 0, "th", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, InvestigationEndorsersComponent_td_23_Template, 6, 0, "td", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, InvestigationEndorsersComponent_tr_24_Template, 1, 0, "tr", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, InvestigationEndorsersComponent_tr_25_Template, 1, 0, "tr", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addentries);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", true);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Convocatoria);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addentries.valid);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.projectEntries);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
            }
        }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatRowDef"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatRow"]], styles: [".mat-card-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  letter-spacing: normal;\n  margin: 0 0 16px;\n  align-items: center;\n  justify-content: center;\n  border-radius: 1rem;\n  padding: 0.5rem;\n  position: relative;\n  margin-bottom: 2.1rem;\n  color: #001326;\n  font-family: \"Work Sans\", sans-serif;\n  display: block;\n}\n\n.tooltip-red[_ngcontent-%COMP%] {\n  background: #b71c1c;\n  font-size: 16px;\n}\n\n.tooltip-white[_ngcontent-%COMP%] {\n  background: #001326;\n  font-size: 16px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.iconoadd[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  display: inline-block;\n  fill: currentColor;\n  height: 54px;\n  width: 54px;\n  font-size: 44px;\n  background-color: transparent;\n  color: #001326;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.2s;\n  padding: 0.5rem;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.mat-slide-toggle.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-label[_ngcontent-%COMP%]   .mat-slide-toggle-bar[_ngcontent-%COMP%] {\n  background-color: #A4BEFF;\n}\n\n.card[_ngcontent-%COMP%] {\n  padding: 2.3rem 2.4rem 3rem 2.4rem;\n}\n\n.table-container[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  border-radius: 0.8rem;\n  border: solid 2px #E6EFFD;\n  overflow: hidden;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  border-radius: 0.5rem;\n  overflow: hidden;\n  border: solid 2px #E6EFFD;\n  border-collapse: collapse;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:not(:last-child) {\n  border-bottom: solid 2px #E6EFFD;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #E6EFFD;\n  padding: 0.5rem !important;\n  text-align: center;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  padding-left: 2.4rem !important;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  padding-right: 2.4rem !important;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.2rem;\n  padding: 1rem 0.5rem;\n  text-align: left;\n  vertical-align: top;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  padding-left: 2.4rem;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  padding-right: 2.4rem;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  padding: 3.9rem 2.4rem 2rem;\n  text-align: left;\n}\n\n.table-container[_ngcontent-%COMP%]   table.listado-indices-entidades[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  height: 7rem;\n}\n\n.table-container[_ngcontent-%COMP%]   table.listado-indices-entidades[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  height: 6.6rem;\n}\n\n.table-container[_ngcontent-%COMP%]   table.listado-indices-entidades[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%] {\n  padding: 3.9rem 2.4rem 2rem !important;\n}\n\n.mat-table[_ngcontent-%COMP%] {\n  font-family: \"Work Sans\", sans-serif;\n}\n\ntr.mat-header-row[_ngcontent-%COMP%] {\n  background-color: #E6EFFD;\n}\n\nth.mat-header-cell[_ngcontent-%COMP%] {\n  background: #001326;\n  color: #e2e2e2;\n  font-size: 1.2rem;\n  border-bottom: solid;\n  text-align: center;\n}\n\nth.mat-header-cell.align-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\nth.mat-header-cell.align-center[_ngcontent-%COMP%]   .mat-sort-header-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.mat-sort-header-arrow[_ngcontent-%COMP%] {\n  color: #001326;\n}\n\n.mat-cell[_ngcontent-%COMP%] {\n  color: #001326;\n  font-size: 1.2rem;\n  padding: 1.5rem !important;\n}\n\ntd.mat-cell[_ngcontent-%COMP%] {\n  border-bottom: solid 2px #E6EFFD;\n}\n\nul.table-action-list[_ngcontent-%COMP%] {\n  list-style-type: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nul.table-action-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding-right: 1rem;\n}\n\nul.table-action-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type {\n  padding-right: 0;\n}\n\nul.table-action-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], ul.table-action-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #001326;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.2s;\n  padding: 0.5rem;\n}\n\nul.table-action-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, ul.table-action-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #001326;\n  color: #FFFFFF;\n}\n\n.mat-card-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-family: \"Work Sans\", sans-serif;\n  letter-spacing: normal;\n  margin: 0 0 16px;\n  color: #001326;\n  padding: 0.5rem;\n}\n\n.mat-card-subtitle[_ngcontent-%COMP%] {\n  color: #001326;\n  font-family: \"Work Sans\", sans-serif;\n}\n\ntd[_ngcontent-%COMP%]   .estado-activo[_ngcontent-%COMP%] {\n  background-color: #069169;\n  color: white;\n  padding: 0.2rem 0.7rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.5rem;\n  min-height: 2.3rem;\n  min-width: 7rem;\n  border-radius: 0.4rem;\n}\n\ntd.align-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\ntd[_ngcontent-%COMP%]   .estado-inactivo[_ngcontent-%COMP%] {\n  background-color: #A80521;\n  color: white;\n  padding: 0.2rem 0.7rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.5rem;\n  min-height: 2.3rem;\n  min-width: 7rem;\n  border-radius: 0.4rem;\n}\n\ntd[_ngcontent-%COMP%]:first-child {\n  padding-left: 1.4rem !important;\n}\n\ntd[_ngcontent-%COMP%]:last-child {\n  padding-right: 2.4rem !important;\n}\n\ntd[_ngcontent-%COMP%]   .mat-slide-toggle[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nbutton[_ngcontent-%COMP%]   .mat-button-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.estado-sin-gestionar[_ngcontent-%COMP%] {\n  background-color: #FFAB00;\n  color: white;\n  padding: 0.2rem 0.7rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.5rem;\n  min-height: 2.3rem;\n  min-width: 7rem;\n  border-radius: 0.4rem;\n}\n\n.estado-activo[_ngcontent-%COMP%] {\n  background-color: #069169;\n  color: white;\n  padding: 0.2rem 0.7rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.5rem;\n  min-height: 2.3rem;\n  min-width: 7rem;\n  border-radius: 0.4rem;\n}\n\n.estado-inactivo[_ngcontent-%COMP%] {\n  background-color: #A80521;\n  color: white;\n  padding: 0.2rem 0.7rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.5rem;\n  min-height: 2.3rem;\n  min-width: 7rem;\n  border-radius: 0.4rem;\n}\n\n.estado-deshabilitado[_ngcontent-%COMP%] {\n  background-color: #707070;\n  color: white;\n  padding: 0.2rem 0.7rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.5rem;\n  min-height: 2.3rem;\n  min-width: 7rem;\n  border-radius: 0.4rem;\n}\n\n.botonera-tabla[_ngcontent-%COMP%] {\n  margin-top: 7rem;\n  margin-bottom: 6.7rem;\n}"] });
    return InvestigationEndorsersComponent;
})();


/***/ }),

/***/ "MM6K":
/*!**********************************************************************!*\
  !*** ./src/app/pages/admin/project-setup/project-setup.component.ts ***!
  \**********************************************************************/
/*! exports provided: ProjectSetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectSetupComponent", function() { return ProjectSetupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _components_product_types_product_types_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/product-types/product-types.component */ "aUtL");
/* harmony import */ var _components_project_entries_project_entries_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/project-entries/project-entries.component */ "Iyx7");
/* harmony import */ var _components_investigation_lines_investigation_lines_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/investigation-lines/investigation-lines.component */ "i2gs");
/* harmony import */ var _components_investigation_programs_investigation_programs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/investigation-programs/investigation-programs.component */ "tK4v");
/* harmony import */ var _components_investigation_sub_programs_investigation_sub_programs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/investigation-sub-programs/investigation-sub-programs.component */ "/XPT");
/* harmony import */ var _components_investigation_endorsers_investigation_endorsers_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/investigation-endorsers/investigation-endorsers.component */ "Jb+E");
/* harmony import */ var _components_investigation_types_investigation_types_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/investigation-types/investigation-types.component */ "gDT4");
/* harmony import */ var _components_group_categories_group_categories_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/group-categories/group-categories.component */ "P1jZ");
/* harmony import */ var _components_inv_team_person_positions_inv_team_person_positions_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/inv-team-person-positions/inv-team-person-positions.component */ "2I2g");














let ProjectSetupComponent = /*@__PURE__*/ (() => {
    class ProjectSetupComponent {
        constructor(rutaActiva) {
            this.rutaActiva = rutaActiva;
        }
        ngOnInit() {
            this.idconvocatoria = this.rutaActiva.snapshot.params;
        }
    }
    ProjectSetupComponent.ɵfac = function ProjectSetupComponent_Factory(t) { return new (t || ProjectSetupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
    ProjectSetupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectSetupComponent, selectors: [["app-project-setup"]], decls: 22, vars: 0, consts: [[1, "container"], ["label", "Tipos de Productos"], ["label", "Rubros"], ["label", "Lineas de Investigaci\u00F3n"], ["label", "Programas de Investigaci\u00F3n"], ["label", "Sub Programas de Investigaci\u00F3n"], ["label", "Encargados de La Investigaci\u00F3n"], ["label", "Tipos de Investigaci\u00F3n"], ["label", "Categor\u00EDas de Groups"], ["label", "Rol-Funcion"]], template: function ProjectSetupComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-vertical-stepper");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-step", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-product-types");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-step", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-project-entries");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-step", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-investigation-lines");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-step", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-investigation-programs");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-step", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-investigation-sub-programs");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-step", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-investigation-endorsers");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-step", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-investigation-types");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-step", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-group-categories");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-step", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-inv-team-person-positions");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
        }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__["MatVerticalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__["MatStep"], _components_product_types_product_types_component__WEBPACK_IMPORTED_MODULE_4__["ProductTypesComponent"], _components_project_entries_project_entries_component__WEBPACK_IMPORTED_MODULE_5__["ProjectEntriesComponent"], _components_investigation_lines_investigation_lines_component__WEBPACK_IMPORTED_MODULE_6__["InvestigationLinesComponent"], _components_investigation_programs_investigation_programs_component__WEBPACK_IMPORTED_MODULE_7__["InvestigationProgramsComponent"], _components_investigation_sub_programs_investigation_sub_programs_component__WEBPACK_IMPORTED_MODULE_8__["InvestigationSubProgramsComponent"], _components_investigation_endorsers_investigation_endorsers_component__WEBPACK_IMPORTED_MODULE_9__["InvestigationEndorsersComponent"], _components_investigation_types_investigation_types_component__WEBPACK_IMPORTED_MODULE_10__["InvestigationTypesComponent"], _components_group_categories_group_categories_component__WEBPACK_IMPORTED_MODULE_11__["GroupCategoriesComponent"], _components_inv_team_person_positions_inv_team_person_positions_component__WEBPACK_IMPORTED_MODULE_12__["InvTeamPersonPositionsComponent"]], styles: [".mat-card-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  letter-spacing: normal;\n  margin: 0 0 16px;\n  align-items: center;\n  justify-content: center;\n  border-radius: 1rem;\n  padding: 0.5rem;\n  position: relative;\n  margin-bottom: 2.1rem;\n  color: #001326;\n  font-family: \"Work Sans\", sans-serif;\n  display: block;\n}\n\n.tooltip-red[_ngcontent-%COMP%] {\n  background: #b71c1c;\n  font-size: 16px;\n}\n\n.tooltip-white[_ngcontent-%COMP%] {\n  background: #001326;\n  font-size: 16px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.iconoadd[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  display: inline-block;\n  fill: currentColor;\n  height: 54px;\n  width: 54px;\n  font-size: 44px;\n  background-color: transparent;\n  color: #001326;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.2s;\n  padding: 0.5rem;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.mat-slide-toggle.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-label[_ngcontent-%COMP%]   .mat-slide-toggle-bar[_ngcontent-%COMP%] {\n  background-color: #A4BEFF;\n}\n\n.card[_ngcontent-%COMP%] {\n  padding: 2.3rem 2.4rem 3rem 2.4rem;\n}\n\n.table-container[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  border-radius: 0.8rem;\n  border: solid 2px #E6EFFD;\n  overflow: hidden;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  border-radius: 0.5rem;\n  overflow: hidden;\n  border: solid 2px #E6EFFD;\n  border-collapse: collapse;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:not(:last-child) {\n  border-bottom: solid 2px #E6EFFD;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #E6EFFD;\n  padding: 0.5rem !important;\n  text-align: center;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  padding-left: 2.4rem !important;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  padding-right: 2.4rem !important;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.2rem;\n  padding: 1rem 0.5rem;\n  text-align: left;\n  vertical-align: top;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  padding-left: 2.4rem;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  padding-right: 2.4rem;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  padding: 3.9rem 2.4rem 2rem;\n  text-align: left;\n}\n\n.table-container[_ngcontent-%COMP%]   table.listado-indices-entidades[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  height: 7rem;\n}\n\n.table-container[_ngcontent-%COMP%]   table.listado-indices-entidades[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  height: 6.6rem;\n}\n\n.table-container[_ngcontent-%COMP%]   table.listado-indices-entidades[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%] {\n  padding: 3.9rem 2.4rem 2rem !important;\n}\n\n.mat-table[_ngcontent-%COMP%] {\n  font-family: \"Work Sans\", sans-serif;\n}\n\ntr.mat-header-row[_ngcontent-%COMP%] {\n  background-color: #E6EFFD;\n}\n\nth.mat-header-cell[_ngcontent-%COMP%] {\n  background: #001326;\n  color: #e2e2e2;\n  font-size: 1.2rem;\n  border-bottom: solid;\n  text-align: center;\n}\n\nth.mat-header-cell.align-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\nth.mat-header-cell.align-center[_ngcontent-%COMP%]   .mat-sort-header-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.mat-sort-header-arrow[_ngcontent-%COMP%] {\n  color: #001326;\n}\n\n.mat-cell[_ngcontent-%COMP%] {\n  color: #001326;\n  font-size: 1.2rem;\n  padding: 1.5rem !important;\n}\n\ntd.mat-cell[_ngcontent-%COMP%] {\n  border-bottom: solid 2px #E6EFFD;\n}\n\nul.table-action-list[_ngcontent-%COMP%] {\n  list-style-type: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nul.table-action-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding-right: 1rem;\n}\n\nul.table-action-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type {\n  padding-right: 0;\n}\n\nul.table-action-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], ul.table-action-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #001326;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.2s;\n  padding: 0.5rem;\n}\n\nul.table-action-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, ul.table-action-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #001326;\n  color: #FFFFFF;\n}\n\n.mat-card-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-family: \"Work Sans\", sans-serif;\n  letter-spacing: normal;\n  margin: 0 0 16px;\n  color: #001326;\n  padding: 0.5rem;\n}\n\n.mat-card-subtitle[_ngcontent-%COMP%] {\n  color: #001326;\n  font-family: \"Work Sans\", sans-serif;\n}\n\ntd[_ngcontent-%COMP%]   .estado-activo[_ngcontent-%COMP%] {\n  background-color: #069169;\n  color: white;\n  padding: 0.2rem 0.7rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.5rem;\n  min-height: 2.3rem;\n  min-width: 7rem;\n  border-radius: 0.4rem;\n}\n\ntd.align-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\ntd[_ngcontent-%COMP%]   .estado-inactivo[_ngcontent-%COMP%] {\n  background-color: #A80521;\n  color: white;\n  padding: 0.2rem 0.7rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.5rem;\n  min-height: 2.3rem;\n  min-width: 7rem;\n  border-radius: 0.4rem;\n}\n\ntd[_ngcontent-%COMP%]:first-child {\n  padding-left: 1.4rem !important;\n}\n\ntd[_ngcontent-%COMP%]:last-child {\n  padding-right: 2.4rem !important;\n}\n\ntd[_ngcontent-%COMP%]   .mat-slide-toggle[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nbutton[_ngcontent-%COMP%]   .mat-button-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.estado-sin-gestionar[_ngcontent-%COMP%] {\n  background-color: #FFAB00;\n  color: white;\n  padding: 0.2rem 0.7rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.5rem;\n  min-height: 2.3rem;\n  min-width: 7rem;\n  border-radius: 0.4rem;\n}\n\n.estado-activo[_ngcontent-%COMP%] {\n  background-color: #069169;\n  color: white;\n  padding: 0.2rem 0.7rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.5rem;\n  min-height: 2.3rem;\n  min-width: 7rem;\n  border-radius: 0.4rem;\n}\n\n.estado-inactivo[_ngcontent-%COMP%] {\n  background-color: #A80521;\n  color: white;\n  padding: 0.2rem 0.7rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.5rem;\n  min-height: 2.3rem;\n  min-width: 7rem;\n  border-radius: 0.4rem;\n}\n\n.estado-deshabilitado[_ngcontent-%COMP%] {\n  background-color: #707070;\n  color: white;\n  padding: 0.2rem 0.7rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.5rem;\n  min-height: 2.3rem;\n  min-width: 7rem;\n  border-radius: 0.4rem;\n}\n\n.botonera-tabla[_ngcontent-%COMP%] {\n  margin-top: 7rem;\n  margin-bottom: 6.7rem;\n}"] });
    return ProjectSetupComponent;
})();


/***/ }),

/***/ "P1jZ":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/admin/project-setup/components/group-categories/group-categories.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: GroupCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupCategoriesComponent", function() { return GroupCategoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _Dialog_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Dialog/confirm-dialog/confirm-dialog.component */ "zHWP");
/* harmony import */ var _shared_services_group_category_group_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/services/group-category/group-category.service */ "Mtsg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");















function GroupCategoriesComponent_button_12_Template(rf, ctx) {
    if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupCategoriesComponent_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.agregar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "add_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function GroupCategoriesComponent_th_19_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Descripcion ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function GroupCategoriesComponent_td_20_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const element_r9 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r9.descr, " ");
    }
}
function GroupCategoriesComponent_th_22_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Acciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function GroupCategoriesComponent_td_23_Template(rf, ctx) {
    if (rf & 1) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupCategoriesComponent_td_23_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const row_r10 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.onProductTypeDeleted(row_r10._id, row_r10.descr); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function GroupCategoriesComponent_tr_24_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 22);
    }
}
function GroupCategoriesComponent_tr_25_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 23);
    }
}
let GroupCategoriesComponent = /*@__PURE__*/ (() => {
    class GroupCategoriesComponent {
        constructor(groupCategoryService, fb, rutaActiva, dialog) {
            this.groupCategoryService = groupCategoryService;
            this.fb = fb;
            this.rutaActiva = rutaActiva;
            this.dialog = dialog;
            this.projectEntries = [];
            this.displayedColumns = ['position', 'name'];
        }
        ngOnInit() {
            this.getAll();
            this.buildForm();
        }
        buildForm() {
            this.addentries = this.fb.group({
                descr: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                Convocatoria: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            });
        }
        getAll() {
            let cv = this.rutaActiva.snapshot.params;
            this.Convocatoria = cv.id;
            this.groupCategoryService.getIdConv(this.Convocatoria).subscribe(r => {
                this.projectEntries = r;
            });
        }
        onProductTypeDeleted(item) {
            let datos = {
                icono: 'info',
                severidad: 'dialog-info',
                encabezado: 'Eliminar Categoria',
                descripcion: `¿Esta seguro que desea eliminar este item?`
            };
            const dialogRef = this.dialog.open(_Dialog_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmDialogComponent"], {
                ariaLabel: `Confirmar eliminación`,
                role: 'alertdialog',
                autoFocus: false,
                data: datos
            });
            dialogRef.afterClosed().subscribe(result => {
                if (result == "true") {
                    this.groupCategoryService.delete(item).subscribe((result) => {
                        this.getAll();
                    });
                }
                else {
                }
            });
        }
        agregar() {
            const datos = this.addentries.value;
            var dato = {
                descr: datos.descr,
                Convocatoria: this.Convocatoria
            };
            this.groupCategoryService.add(dato).subscribe(r => {
                this.getAll();
                this.buildForm();
            });
        }
    }
    GroupCategoriesComponent.ɵfac = function GroupCategoriesComponent_Factory(t) { return new (t || GroupCategoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_group_category_group_category_service__WEBPACK_IMPORTED_MODULE_3__["GroupCategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"])); };
    GroupCategoriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GroupCategoriesComponent, selectors: [["app-group-categories"]], decls: 26, vars: 7, consts: [[1, "example-form", 3, "formGroup"], ["appearance", "legacy", 1, "example-full-width", 3, "hidden"], ["formControlName", "Convocatoria", "matInput", "", 3, "ngModel", "ngModelChange"], ["appearance", "legacy", 1, "example-full-width"], ["formControlName", "descr", "matInput", ""], ["matTooltip", "Agregar Categor\u00EDa", "aria-label", "Agregar Categor\u00EDa", "matTooltipClass", "tooltip-white", "matTooltipPosition", "above", 3, "click", 4, "ngIf"], [1, "card"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["scope", "col", "mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["matTooltip", "Agregar Categor\u00EDa", "aria-label", "Agregar Categor\u00EDa", "matTooltipClass", "tooltip-white", "matTooltipPosition", "above", 3, "click"], [1, "iconoadd"], ["mat-header-cell", ""], ["mat-cell", ""], ["scope", "col", "mat-header-cell", ""], [1, "table-action-list"], ["matTooltip", "Eliminar Categor\u00EDa", "matTooltipClass", "tooltip-red", "matTooltipPosition", "below", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function GroupCategoriesComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-subtitle");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Registra una catagor\u00EDa");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GroupCategoriesComponent_Template_input_ngModelChange_7_listener($event) { return ctx.Convocatoria = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Escriba aqui una categor\u00EDa");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, GroupCategoriesComponent_button_12_Template, 3, 0, "button", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Lista de Categor\u00EDas");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "table", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, GroupCategoriesComponent_th_19_Template, 2, 0, "th", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, GroupCategoriesComponent_td_20_Template, 2, 1, "td", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](21, 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, GroupCategoriesComponent_th_22_Template, 2, 0, "th", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, GroupCategoriesComponent_td_23_Template, 6, 0, "td", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, GroupCategoriesComponent_tr_24_Template, 1, 0, "tr", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, GroupCategoriesComponent_tr_25_Template, 1, 0, "tr", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addentries);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", true);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Convocatoria);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addentries.valid);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.projectEntries);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
            }
        }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatRowDef"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatRow"]], styles: [".mat-card-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  letter-spacing: normal;\n  margin: 0 0 16px;\n  align-items: center;\n  justify-content: center;\n  border-radius: 1rem;\n  padding: 0.5rem;\n  position: relative;\n  margin-bottom: 2.1rem;\n  color: #001326;\n  font-family: \"Work Sans\", sans-serif;\n  display: block;\n}\n\n.tooltip-red[_ngcontent-%COMP%] {\n  background: #b71c1c;\n  font-size: 16px;\n}\n\n.tooltip-white[_ngcontent-%COMP%] {\n  background: #001326;\n  font-size: 16px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.iconoadd[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  display: inline-block;\n  fill: currentColor;\n  height: 54px;\n  width: 54px;\n  font-size: 44px;\n  background-color: transparent;\n  color: #001326;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.2s;\n  padding: 0.5rem;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.mat-slide-toggle.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-label[_ngcontent-%COMP%]   .mat-slide-toggle-bar[_ngcontent-%COMP%] {\n  background-color: #A4BEFF;\n}\n\n.card[_ngcontent-%COMP%] {\n  padding: 2.3rem 2.4rem 3rem 2.4rem;\n}\n\n.table-container[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  border-radius: 0.8rem;\n  border: solid 2px #E6EFFD;\n  overflow: hidden;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  border-radius: 0.5rem;\n  overflow: hidden;\n  border: solid 2px #E6EFFD;\n  border-collapse: collapse;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:not(:last-child) {\n  border-bottom: solid 2px #E6EFFD;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #E6EFFD;\n  padding: 0.5rem !important;\n  text-align: center;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  padding-left: 2.4rem !important;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  padding-right: 2.4rem !important;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.2rem;\n  padding: 1rem 0.5rem;\n  text-align: left;\n  vertical-align: top;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  padding-left: 2.4rem;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  padding-right: 2.4rem;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  padding: 3.9rem 2.4rem 2rem;\n  text-align: left;\n}\n\n.table-container[_ngcontent-%COMP%]   table.listado-indices-entidades[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  height: 7rem;\n}\n\n.table-container[_ngcontent-%COMP%]   table.listado-indices-entidades[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  height: 6.6rem;\n}\n\n.table-container[_ngcontent-%COMP%]   table.listado-indices-entidades[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%] {\n  padding: 3.9rem 2.4rem 2rem !important;\n}\n\n.mat-table[_ngcontent-%COMP%] {\n  font-family: \"Work Sans\", sans-serif;\n}\n\ntr.mat-header-row[_ngcontent-%COMP%] {\n  background-color: #E6EFFD;\n}\n\nth.mat-header-cell[_ngcontent-%COMP%] {\n  background: #001326;\n  color: #e2e2e2;\n  font-size: 1.2rem;\n  border-bottom: solid;\n  text-align: center;\n}\n\nth.mat-header-cell.align-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\nth.mat-header-cell.align-center[_ngcontent-%COMP%]   .mat-sort-header-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.mat-sort-header-arrow[_ngcontent-%COMP%] {\n  color: #001326;\n}\n\n.mat-cell[_ngcontent-%COMP%] {\n  color: #001326;\n  font-size: 1.2rem;\n  padding: 1.5rem !important;\n}\n\ntd.mat-cell[_ngcontent-%COMP%] {\n  border-bottom: solid 2px #E6EFFD;\n}\n\nul.table-action-list[_ngcontent-%COMP%] {\n  list-style-type: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nul.table-action-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding-right: 1rem;\n}\n\nul.table-action-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type {\n  padding-right: 0;\n}\n\nul.table-action-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], ul.table-action-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #001326;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.2s;\n  padding: 0.5rem;\n}\n\nul.table-action-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, ul.table-action-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #001326;\n  color: #FFFFFF;\n}\n\n.mat-card-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-family: \"Work Sans\", sans-serif;\n  letter-spacing: normal;\n  margin: 0 0 16px;\n  color: #001326;\n  padding: 0.5rem;\n}\n\n.mat-card-subtitle[_ngcontent-%COMP%] {\n  color: #001326;\n  font-family: \"Work Sans\", sans-serif;\n}\n\ntd[_ngcontent-%COMP%]   .estado-activo[_ngcontent-%COMP%] {\n  background-color: #069169;\n  color: white;\n  padding: 0.2rem 0.7rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.5rem;\n  min-height: 2.3rem;\n  min-width: 7rem;\n  border-radius: 0.4rem;\n}\n\ntd.align-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\ntd[_ngcontent-%COMP%]   .estado-inactivo[_ngcontent-%COMP%] {\n  background-color: #A80521;\n  color: white;\n  padding: 0.2rem 0.7rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.5rem;\n  min-height: 2.3rem;\n  min-width: 7rem;\n  border-radius: 0.4rem;\n}\n\ntd[_ngcontent-%COMP%]:first-child {\n  padding-left: 1.4rem !important;\n}\n\ntd[_ngcontent-%COMP%]:last-child {\n  padding-right: 2.4rem !important;\n}\n\ntd[_ngcontent-%COMP%]   .mat-slide-toggle[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nbutton[_ngcontent-%COMP%]   .mat-button-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.estado-sin-gestionar[_ngcontent-%COMP%] {\n  background-color: #FFAB00;\n  color: white;\n  padding: 0.2rem 0.7rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.5rem;\n  min-height: 2.3rem;\n  min-width: 7rem;\n  border-radius: 0.4rem;\n}\n\n.estado-activo[_ngcontent-%COMP%] {\n  background-color: #069169;\n  color: white;\n  padding: 0.2rem 0.7rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.5rem;\n  min-height: 2.3rem;\n  min-width: 7rem;\n  border-radius: 0.4rem;\n}\n\n.estado-inactivo[_ngcontent-%COMP%] {\n  background-color: #A80521;\n  color: white;\n  padding: 0.2rem 0.7rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.5rem;\n  min-height: 2.3rem;\n  min-width: 7rem;\n  border-radius: 0.4rem;\n}\n\n.estado-deshabilitado[_ngcontent-%COMP%] {\n  background-color: #707070;\n  color: white;\n  padding: 0.2rem 0.7rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.5rem;\n  min-height: 2.3rem;\n  min-width: 7rem;\n  border-radius: 0.4rem;\n}\n\n.botonera-tabla[_ngcontent-%COMP%] {\n  margin-top: 7rem;\n  margin-bottom: 6.7rem;\n}"] });
    return GroupCategoriesComponent;
})();


/***/ }),

/***/ "aUtL":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/admin/project-setup/components/product-types/product-types.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ProductTypesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductTypesComponent", function() { return ProductTypesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _Dialog_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Dialog/confirm-dialog/confirm-dialog.component */ "zHWP");
/* harmony import */ var _shared_services_product_type_product_type_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/services/product-type/product-type.service */ "z+dt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
















function ProductTypesComponent_button_12_Template(rf, ctx) {
    if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductTypesComponent_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.agregar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "add_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ProductTypesComponent_th_19_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Descripcion ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ProductTypesComponent_td_20_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const element_r9 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r9.descr, " ");
    }
}
function ProductTypesComponent_th_22_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Acciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ProductTypesComponent_td_23_Template(rf, ctx) {
    if (rf & 1) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductTypesComponent_td_23_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const row_r10 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.onProductTypeDeleted(row_r10._id, row_r10.descr); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ProductTypesComponent_tr_24_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 22);
    }
}
function ProductTypesComponent_tr_25_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 23);
    }
}
let ProductTypesComponent = /*@__PURE__*/ (() => {
    class ProductTypesComponent {
        constructor(productTypeService, fb, rutaActiva, dialog) {
            this.productTypeService = productTypeService;
            this.fb = fb;
            this.rutaActiva = rutaActiva;
            this.dialog = dialog;
            this.projectEntries = [];
            this.displayedColumns = ['position', 'name'];
        }
        ngOnInit() {
            this.getAll();
            this.buildForm();
        }
        buildForm() {
            this.addentries = this.fb.group({
                descr: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                Convocatoria: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            });
        }
        getAll() {
            let cv = this.rutaActiva.snapshot.params;
            this.Convocatoria = cv.id;
            this.productTypeService.getIdConv(this.Convocatoria).subscribe(r => {
                this.projectEntries = r;
            });
        }
        onProductTypeDeleted(item) {
            let datos = {
                icono: 'info',
                severidad: 'dialog-info',
                encabezado: 'Eliminar Rubro',
                descripcion: `¿Esta seguro que desea eliminar este item?`
            };
            const dialogRef = this.dialog.open(_Dialog_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmDialogComponent"], {
                ariaLabel: `Confirmar eliminación`,
                role: 'alertdialog',
                autoFocus: false,
                data: datos
            });
            dialogRef.afterClosed().subscribe(result => {
                if (result == "true") {
                    this.productTypeService.delete(item).subscribe((result) => {
                        this.getAll();
                    });
                }
                else {
                }
            });
        }
        agregar() {
            const datos = this.addentries.value;
            var dato = {
                descr: datos.descr,
                Convocatoria: this.Convocatoria
            };
            this.productTypeService.add(dato).subscribe(r => {
                this.getAll();
                this.buildForm();
            });
        }
    }
    ProductTypesComponent.ɵfac = function ProductTypesComponent_Factory(t) { return new (t || ProductTypesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_product_type_product_type_service__WEBPACK_IMPORTED_MODULE_3__["ProductTypeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"])); };
    ProductTypesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductTypesComponent, selectors: [["app-product-types"]], decls: 26, vars: 7, consts: [[1, "example-form", 3, "formGroup"], ["appearance", "legacy", 1, "example-full-width", 3, "hidden"], ["formControlName", "Convocatoria", "matInput", "", 3, "ngModel", "ngModelChange"], ["appearance", "legacy", 1, "example-full-width"], ["formControlName", "descr", "matInput", ""], ["mat-icon-button", "", "matTooltip", "Agregar Tipo de producto", "aria-label", "Agregar Tipo de producto", "matTooltipClass", "tooltip-white", "matTooltipPosition", "above", 3, "click", 4, "ngIf"], [1, "card"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["scope", "col", "mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-icon-button", "", "matTooltip", "Agregar Tipo de producto", "aria-label", "Agregar Tipo de producto", "matTooltipClass", "tooltip-white", "matTooltipPosition", "above", 3, "click"], [1, "iconoadd"], ["mat-header-cell", ""], ["mat-cell", ""], ["scope", "col", "mat-header-cell", ""], [1, "table-action-list"], ["matTooltip", "Eliminar el Tipo de Producto", "matTooltipClass", "tooltip-red", "matTooltipPosition", "below", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function ProductTypesComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-subtitle");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Registra un tipo de producto");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductTypesComponent_Template_input_ngModelChange_7_listener($event) { return ctx.Convocatoria = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Escriba aqui el tipo de producto");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProductTypesComponent_button_12_Template, 3, 0, "button", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Lista de Productos");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "table", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ProductTypesComponent_th_19_Template, 2, 0, "th", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ProductTypesComponent_td_20_Template, 2, 1, "td", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](21, 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ProductTypesComponent_th_22_Template, 2, 0, "th", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ProductTypesComponent_td_23_Template, 6, 0, "td", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ProductTypesComponent_tr_24_Template, 1, 0, "tr", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ProductTypesComponent_tr_25_Template, 1, 0, "tr", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addentries);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", true);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Convocatoria);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addentries.valid);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.projectEntries);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
            }
        }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatRowDef"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatRow"]], styles: [".mat-card-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  letter-spacing: normal;\n  margin: 0 0 16px;\n  align-items: center;\n  justify-content: center;\n  border-radius: 1rem;\n  padding: 0.5rem;\n  position: relative;\n  margin-bottom: 2.1rem;\n  color: #001326;\n  font-family: \"Work Sans\", sans-serif;\n  display: block;\n}\n\n.tooltip-red[_ngcontent-%COMP%] {\n  background: #b71c1c;\n  font-size: 16px;\n}\n\n.tooltip-white[_ngcontent-%COMP%] {\n  background: #001326;\n  font-size: 16px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.iconoadd[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  display: inline-block;\n  fill: currentColor;\n  height: 54px;\n  width: 54px;\n  font-size: 44px;\n  background-color: transparent;\n  color: #001326;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.2s;\n  padding: 0.5rem;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.mat-slide-toggle.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-label[_ngcontent-%COMP%]   .mat-slide-toggle-bar[_ngcontent-%COMP%] {\n  background-color: #A4BEFF;\n}\n\n.card[_ngcontent-%COMP%] {\n  padding: 2.3rem 2.4rem 3rem 2.4rem;\n}\n\n.table-container[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  border-radius: 0.8rem;\n  border: solid 2px #E6EFFD;\n  overflow: hidden;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  border-radius: 0.5rem;\n  overflow: hidden;\n  border: solid 2px #E6EFFD;\n  border-collapse: collapse;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:not(:last-child) {\n  border-bottom: solid 2px #E6EFFD;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #E6EFFD;\n  padding: 0.5rem !important;\n  text-align: center;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  padding-left: 2.4rem !important;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  padding-right: 2.4rem !important;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.2rem;\n  padding: 1rem 0.5rem;\n  text-align: left;\n  vertical-align: top;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  padding-left: 2.4rem;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  padding-right: 2.4rem;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  padding: 3.9rem 2.4rem 2rem;\n  text-align: left;\n}\n\n.table-container[_ngcontent-%COMP%]   table.listado-indices-entidades[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  height: 7rem;\n}\n\n.table-container[_ngcontent-%COMP%]   table.listado-indices-entidades[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  height: 6.6rem;\n}\n\n.table-container[_ngcontent-%COMP%]   table.listado-indices-entidades[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%] {\n  padding: 3.9rem 2.4rem 2rem !important;\n}\n\n.mat-table[_ngcontent-%COMP%] {\n  font-family: \"Work Sans\", sans-serif;\n}\n\ntr.mat-header-row[_ngcontent-%COMP%] {\n  background-color: #E6EFFD;\n}\n\nth.mat-header-cell[_ngcontent-%COMP%] {\n  background: #001326;\n  color: #e2e2e2;\n  font-size: 1.2rem;\n  border-bottom: solid;\n  text-align: center;\n}\n\nth.mat-header-cell.align-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\nth.mat-header-cell.align-center[_ngcontent-%COMP%]   .mat-sort-header-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.mat-sort-header-arrow[_ngcontent-%COMP%] {\n  color: #001326;\n}\n\n.mat-cell[_ngcontent-%COMP%] {\n  color: #001326;\n  font-size: 1.2rem;\n  padding: 1.5rem !important;\n}\n\ntd.mat-cell[_ngcontent-%COMP%] {\n  border-bottom: solid 2px #E6EFFD;\n}\n\nul.table-action-list[_ngcontent-%COMP%] {\n  list-style-type: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nul.table-action-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding-right: 1rem;\n}\n\nul.table-action-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type {\n  padding-right: 0;\n}\n\nul.table-action-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], ul.table-action-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #001326;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.2s;\n  padding: 0.5rem;\n}\n\nul.table-action-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, ul.table-action-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #001326;\n  color: #FFFFFF;\n}\n\n.mat-card-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-family: \"Work Sans\", sans-serif;\n  letter-spacing: normal;\n  margin: 0 0 16px;\n  color: #001326;\n  padding: 0.5rem;\n}\n\n.mat-card-subtitle[_ngcontent-%COMP%] {\n  color: #001326;\n  font-family: \"Work Sans\", sans-serif;\n}\n\ntd[_ngcontent-%COMP%]   .estado-activo[_ngcontent-%COMP%] {\n  background-color: #069169;\n  color: white;\n  padding: 0.2rem 0.7rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.5rem;\n  min-height: 2.3rem;\n  min-width: 7rem;\n  border-radius: 0.4rem;\n}\n\ntd.align-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\ntd[_ngcontent-%COMP%]   .estado-inactivo[_ngcontent-%COMP%] {\n  background-color: #A80521;\n  color: white;\n  padding: 0.2rem 0.7rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.5rem;\n  min-height: 2.3rem;\n  min-width: 7rem;\n  border-radius: 0.4rem;\n}\n\ntd[_ngcontent-%COMP%]:first-child {\n  padding-left: 1.4rem !important;\n}\n\ntd[_ngcontent-%COMP%]:last-child {\n  padding-right: 2.4rem !important;\n}\n\ntd[_ngcontent-%COMP%]   .mat-slide-toggle[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nbutton[_ngcontent-%COMP%]   .mat-button-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.estado-sin-gestionar[_ngcontent-%COMP%] {\n  background-color: #FFAB00;\n  color: white;\n  padding: 0.2rem 0.7rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.5rem;\n  min-height: 2.3rem;\n  min-width: 7rem;\n  border-radius: 0.4rem;\n}\n\n.estado-activo[_ngcontent-%COMP%] {\n  background-color: #069169;\n  color: white;\n  padding: 0.2rem 0.7rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.5rem;\n  min-height: 2.3rem;\n  min-width: 7rem;\n  border-radius: 0.4rem;\n}\n\n.estado-inactivo[_ngcontent-%COMP%] {\n  background-color: #A80521;\n  color: white;\n  padding: 0.2rem 0.7rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.5rem;\n  min-height: 2.3rem;\n  min-width: 7rem;\n  border-radius: 0.4rem;\n}\n\n.estado-deshabilitado[_ngcontent-%COMP%] {\n  background-color: #707070;\n  color: white;\n  padding: 0.2rem 0.7rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.5rem;\n  min-height: 2.3rem;\n  min-width: 7rem;\n  border-radius: 0.4rem;\n}\n\n.botonera-tabla[_ngcontent-%COMP%] {\n  margin-top: 7rem;\n  margin-bottom: 6.7rem;\n}"] });
    return ProductTypesComponent;
})();


/***/ }),

/***/ "gDT4":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/admin/project-setup/components/investigation-types/investigation-types.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: InvestigationTypesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestigationTypesComponent", function() { return InvestigationTypesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _Dialog_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Dialog/confirm-dialog/confirm-dialog.component */ "zHWP");
/* harmony import */ var _shared_services_investigation_types_investigation_types_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/services/investigation-types/investigation-types.service */ "+YWR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
















function InvestigationTypesComponent_button_12_Template(rf, ctx) {
    if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvestigationTypesComponent_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.agregar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "add_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function InvestigationTypesComponent_th_19_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Descripcion ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function InvestigationTypesComponent_td_20_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const element_r9 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r9.descr, " ");
    }
}
function InvestigationTypesComponent_th_22_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Acciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function InvestigationTypesComponent_td_23_Template(rf, ctx) {
    if (rf & 1) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvestigationTypesComponent_td_23_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const row_r10 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.onProductTypeDeleted(row_r10._id, row_r10.descr); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function InvestigationTypesComponent_tr_24_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 22);
    }
}
function InvestigationTypesComponent_tr_25_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 23);
    }
}
let InvestigationTypesComponent = /*@__PURE__*/ (() => {
    class InvestigationTypesComponent {
        constructor(investigationTypesService, fb, rutaActiva, dialog) {
            this.investigationTypesService = investigationTypesService;
            this.fb = fb;
            this.rutaActiva = rutaActiva;
            this.dialog = dialog;
            this.projectEntries = [];
            this.displayedColumns = ['position', 'name'];
        }
        ngOnInit() {
            this.getAll();
            this.buildForm();
        }
        buildForm() {
            this.addentries = this.fb.group({
                descr: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                Convocatoria: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            });
        }
        getAll() {
            let cv = this.rutaActiva.snapshot.params;
            this.Convocatoria = cv.id;
            this.investigationTypesService.getIdConv(this.Convocatoria).subscribe(r => {
                this.projectEntries = r;
            });
        }
        onProductTypeDeleted(item) {
            let datos = {
                icono: 'info',
                severidad: 'dialog-info',
                encabezado: 'Eliminar Tipo de Investigacion',
                descripcion: `¿Esta seguro que desea eliminar este item?`
            };
            const dialogRef = this.dialog.open(_Dialog_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmDialogComponent"], {
                ariaLabel: `Confirmar eliminación`,
                role: 'alertdialog',
                autoFocus: false,
                data: datos
            });
            dialogRef.afterClosed().subscribe(result => {
                if (result == "true") {
                    this.investigationTypesService.delete(item).subscribe((result) => {
                        this.getAll();
                    });
                }
                else {
                }
            });
        }
        agregar() {
            const datos = this.addentries.value;
            var dato = {
                descr: datos.descr,
                Convocatoria: this.Convocatoria
            };
            this.investigationTypesService.add(dato).subscribe(r => {
                this.getAll();
                this.buildForm();
            });
        }
    }
    InvestigationTypesComponent.ɵfac = function InvestigationTypesComponent_Factory(t) { return new (t || InvestigationTypesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_investigation_types_investigation_types_service__WEBPACK_IMPORTED_MODULE_3__["InvestigationTypesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"])); };
    InvestigationTypesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InvestigationTypesComponent, selectors: [["app-investigation-types"]], decls: 26, vars: 7, consts: [[1, "example-form", 3, "formGroup"], ["appearance", "legacy", 1, "example-full-width", 3, "hidden"], ["formControlName", "Convocatoria", "matInput", "", 3, "ngModel", "ngModelChange"], ["appearance", "legacy", 1, "example-full-width"], ["formControlName", "descr", "matInput", ""], ["mat-icon-button", "", "matTooltip", "Agregar Tipo de Investigaci\u00F3n", "aria-label", "Agregar Tipo de Investigaci\u00F3n", "matTooltipClass", "tooltip-white", "matTooltipPosition", "above", 3, "click", 4, "ngIf"], [1, "card"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["scope", "col", "mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-icon-button", "", "matTooltip", "Agregar Tipo de Investigaci\u00F3n", "aria-label", "Agregar Tipo de Investigaci\u00F3n", "matTooltipClass", "tooltip-white", "matTooltipPosition", "above", 3, "click"], [1, "iconoadd"], ["mat-header-cell", ""], ["mat-cell", ""], ["scope", "col", "mat-header-cell", ""], [1, "table-action-list"], ["matTooltip", "Eliminar el Tipo de Investigaci\u00F3n", "matTooltipClass", "tooltip-red", "matTooltipPosition", "below", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function InvestigationTypesComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-subtitle");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Registra un tipo de Investigaci\u00F3n");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InvestigationTypesComponent_Template_input_ngModelChange_7_listener($event) { return ctx.Convocatoria = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Escriba aqui el Tipo de Invesitgaci\u00F3n");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, InvestigationTypesComponent_button_12_Template, 3, 0, "button", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Lista de Tipos de Investigaci\u00F3n");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "table", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, InvestigationTypesComponent_th_19_Template, 2, 0, "th", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, InvestigationTypesComponent_td_20_Template, 2, 1, "td", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](21, 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, InvestigationTypesComponent_th_22_Template, 2, 0, "th", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, InvestigationTypesComponent_td_23_Template, 6, 0, "td", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, InvestigationTypesComponent_tr_24_Template, 1, 0, "tr", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, InvestigationTypesComponent_tr_25_Template, 1, 0, "tr", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addentries);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", true);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Convocatoria);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addentries.valid);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.projectEntries);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
            }
        }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatRowDef"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatRow"]], styles: [".mat-card-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  letter-spacing: normal;\n  margin: 0 0 16px;\n  align-items: center;\n  justify-content: center;\n  border-radius: 1rem;\n  padding: 0.5rem;\n  position: relative;\n  margin-bottom: 2.1rem;\n  color: #001326;\n  font-family: \"Work Sans\", sans-serif;\n  display: block;\n}\n\n.tooltip-red[_ngcontent-%COMP%] {\n  background: #b71c1c;\n  font-size: 16px;\n}\n\n.tooltip-white[_ngcontent-%COMP%] {\n  background: #001326;\n  font-size: 16px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.iconoadd[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  display: inline-block;\n  fill: currentColor;\n  height: 54px;\n  width: 54px;\n  font-size: 44px;\n  background-color: transparent;\n  color: #001326;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.2s;\n  padding: 0.5rem;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.mat-slide-toggle.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-label[_ngcontent-%COMP%]   .mat-slide-toggle-bar[_ngcontent-%COMP%] {\n  background-color: #A4BEFF;\n}\n\n.card[_ngcontent-%COMP%] {\n  padding: 2.3rem 2.4rem 3rem 2.4rem;\n}\n\n.table-container[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  border-radius: 0.8rem;\n  border: solid 2px #E6EFFD;\n  overflow: hidden;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  border-radius: 0.5rem;\n  overflow: hidden;\n  border: solid 2px #E6EFFD;\n  border-collapse: collapse;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:not(:last-child) {\n  border-bottom: solid 2px #E6EFFD;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #E6EFFD;\n  padding: 0.5rem !important;\n  text-align: center;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  padding-left: 2.4rem !important;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  padding-right: 2.4rem !important;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.2rem;\n  padding: 1rem 0.5rem;\n  text-align: left;\n  vertical-align: top;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  padding-left: 2.4rem;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  padding-right: 2.4rem;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  padding: 3.9rem 2.4rem 2rem;\n  text-align: left;\n}\n\n.table-container[_ngcontent-%COMP%]   table.listado-indices-entidades[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  height: 7rem;\n}\n\n.table-container[_ngcontent-%COMP%]   table.listado-indices-entidades[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  height: 6.6rem;\n}\n\n.table-container[_ngcontent-%COMP%]   table.listado-indices-entidades[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%] {\n  padding: 3.9rem 2.4rem 2rem !important;\n}\n\n.mat-table[_ngcontent-%COMP%] {\n  font-family: \"Work Sans\", sans-serif;\n}\n\ntr.mat-header-row[_ngcontent-%COMP%] {\n  background-color: #E6EFFD;\n}\n\nth.mat-header-cell[_ngcontent-%COMP%] {\n  background: #001326;\n  color: #e2e2e2;\n  font-size: 1.2rem;\n  border-bottom: solid;\n  text-align: center;\n}\n\nth.mat-header-cell.align-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\nth.mat-header-cell.align-center[_ngcontent-%COMP%]   .mat-sort-header-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.mat-sort-header-arrow[_ngcontent-%COMP%] {\n  color: #001326;\n}\n\n.mat-cell[_ngcontent-%COMP%] {\n  color: #001326;\n  font-size: 1.2rem;\n  padding: 1.5rem !important;\n}\n\ntd.mat-cell[_ngcontent-%COMP%] {\n  border-bottom: solid 2px #E6EFFD;\n}\n\nul.table-action-list[_ngcontent-%COMP%] {\n  list-style-type: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nul.table-action-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding-right: 1rem;\n}\n\nul.table-action-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type {\n  padding-right: 0;\n}\n\nul.table-action-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], ul.table-action-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #001326;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.2s;\n  padding: 0.5rem;\n}\n\nul.table-action-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, ul.table-action-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #001326;\n  color: #FFFFFF;\n}\n\n.mat-card-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-family: \"Work Sans\", sans-serif;\n  letter-spacing: normal;\n  margin: 0 0 16px;\n  color: #001326;\n  padding: 0.5rem;\n}\n\n.mat-card-subtitle[_ngcontent-%COMP%] {\n  color: #001326;\n  font-family: \"Work Sans\", sans-serif;\n}\n\ntd[_ngcontent-%COMP%]   .estado-activo[_ngcontent-%COMP%] {\n  background-color: #069169;\n  color: white;\n  padding: 0.2rem 0.7rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.5rem;\n  min-height: 2.3rem;\n  min-width: 7rem;\n  border-radius: 0.4rem;\n}\n\ntd.align-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\ntd[_ngcontent-%COMP%]   .estado-inactivo[_ngcontent-%COMP%] {\n  background-color: #A80521;\n  color: white;\n  padding: 0.2rem 0.7rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.5rem;\n  min-height: 2.3rem;\n  min-width: 7rem;\n  border-radius: 0.4rem;\n}\n\ntd[_ngcontent-%COMP%]:first-child {\n  padding-left: 1.4rem !important;\n}\n\ntd[_ngcontent-%COMP%]:last-child {\n  padding-right: 2.4rem !important;\n}\n\ntd[_ngcontent-%COMP%]   .mat-slide-toggle[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nbutton[_ngcontent-%COMP%]   .mat-button-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.estado-sin-gestionar[_ngcontent-%COMP%] {\n  background-color: #FFAB00;\n  color: white;\n  padding: 0.2rem 0.7rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.5rem;\n  min-height: 2.3rem;\n  min-width: 7rem;\n  border-radius: 0.4rem;\n}\n\n.estado-activo[_ngcontent-%COMP%] {\n  background-color: #069169;\n  color: white;\n  padding: 0.2rem 0.7rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.5rem;\n  min-height: 2.3rem;\n  min-width: 7rem;\n  border-radius: 0.4rem;\n}\n\n.estado-inactivo[_ngcontent-%COMP%] {\n  background-color: #A80521;\n  color: white;\n  padding: 0.2rem 0.7rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.5rem;\n  min-height: 2.3rem;\n  min-width: 7rem;\n  border-radius: 0.4rem;\n}\n\n.estado-deshabilitado[_ngcontent-%COMP%] {\n  background-color: #707070;\n  color: white;\n  padding: 0.2rem 0.7rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.5rem;\n  min-height: 2.3rem;\n  min-width: 7rem;\n  border-radius: 0.4rem;\n}\n\n.botonera-tabla[_ngcontent-%COMP%] {\n  margin-top: 7rem;\n  margin-bottom: 6.7rem;\n}"] });
    return InvestigationTypesComponent;
})();


/***/ }),

/***/ "i2gs":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/admin/project-setup/components/investigation-lines/investigation-lines.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: InvestigationLinesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestigationLinesComponent", function() { return InvestigationLinesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _Dialog_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Dialog/confirm-dialog/confirm-dialog.component */ "zHWP");
/* harmony import */ var _shared_services_investigation_lines_investigation_lines_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/services/investigation-lines/investigation-lines.service */ "G4vC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");















function InvestigationLinesComponent_button_12_Template(rf, ctx) {
    if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvestigationLinesComponent_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.agregar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "add_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function InvestigationLinesComponent_th_19_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Descripcion ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function InvestigationLinesComponent_td_20_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const element_r9 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r9.descr, " ");
    }
}
function InvestigationLinesComponent_th_22_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Acciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function InvestigationLinesComponent_td_23_Template(rf, ctx) {
    if (rf & 1) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvestigationLinesComponent_td_23_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const row_r10 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.onProductTypeDeleted(row_r10._id, row_r10.descr); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function InvestigationLinesComponent_tr_24_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 22);
    }
}
function InvestigationLinesComponent_tr_25_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 23);
    }
}
let InvestigationLinesComponent = /*@__PURE__*/ (() => {
    class InvestigationLinesComponent {
        constructor(investigationLinesService, fb, rutaActiva, dialog) {
            this.investigationLinesService = investigationLinesService;
            this.fb = fb;
            this.rutaActiva = rutaActiva;
            this.dialog = dialog;
            this.projectEntries = [];
            this.displayedColumns = ['position', 'name'];
        }
        ngOnInit() {
            this.getAll();
            this.buildForm();
        }
        buildForm() {
            this.addentries = this.fb.group({
                descr: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                Convocatoria: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            });
        }
        getAll() {
            let cv = this.rutaActiva.snapshot.params;
            this.Convocatoria = cv.id;
            this.investigationLinesService.getIdConv(this.Convocatoria).subscribe(r => {
                this.projectEntries = r;
            });
        }
        onProductTypeDeleted(item) {
            let datos = {
                icono: 'info',
                severidad: 'dialog-info',
                encabezado: 'Eliminar Linea de investigacion',
                descripcion: `¿Esta seguro que desea eliminar este item?`
            };
            const dialogRef = this.dialog.open(_Dialog_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmDialogComponent"], {
                ariaLabel: `Confirmar eliminación`,
                role: 'alertdialog',
                autoFocus: false,
                data: datos
            });
            dialogRef.afterClosed().subscribe(result => {
                if (result == "true") {
                    this.investigationLinesService.delete(item).subscribe((result) => {
                        this.getAll();
                    });
                }
                else {
                }
            });
        }
        agregar() {
            const datos = this.addentries.value;
            var dato = {
                descr: datos.descr,
                Convocatoria: this.Convocatoria
            };
            this.investigationLinesService.add(dato).subscribe(r => {
                this.getAll();
                this.buildForm();
            });
        }
    }
    InvestigationLinesComponent.ɵfac = function InvestigationLinesComponent_Factory(t) { return new (t || InvestigationLinesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_investigation_lines_investigation_lines_service__WEBPACK_IMPORTED_MODULE_3__["InvestigationLinesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"])); };
    InvestigationLinesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InvestigationLinesComponent, selectors: [["app-investigation-lines"]], decls: 26, vars: 7, consts: [[1, "example-form", 3, "formGroup"], ["appearance", "legacy", 1, "example-full-width", 3, "hidden"], ["formControlName", "Convocatoria", "matInput", "", 3, "ngModel", "ngModelChange"], ["appearance", "legacy", 1, "example-full-width"], ["formControlName", "descr", "matInput", ""], ["matTooltip", "Agregar Linea de Investigaci\u00F3n", "aria-label", "Agregar Linea de Investigaci\u00F3n", "matTooltipClass", "tooltip-white", "matTooltipPosition", "above", 3, "click", 4, "ngIf"], [1, "card"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["scope", "col", "mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["matTooltip", "Agregar Linea de Investigaci\u00F3n", "aria-label", "Agregar Linea de Investigaci\u00F3n", "matTooltipClass", "tooltip-white", "matTooltipPosition", "above", 3, "click"], [1, "iconoadd"], ["mat-header-cell", ""], ["mat-cell", ""], ["scope", "col", "mat-header-cell", ""], [1, "table-action-list"], ["matTooltip", "Eliminar Linea de Investigaci\u00F3n", "matTooltipClass", "tooltip-red", "matTooltipPosition", "below", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function InvestigationLinesComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-subtitle");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Registra una Linea de Investigacion");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InvestigationLinesComponent_Template_input_ngModelChange_7_listener($event) { return ctx.Convocatoria = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Escriba aqui la linea de investigacion");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, InvestigationLinesComponent_button_12_Template, 3, 0, "button", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Lista de L\u00EDneas de Investigaci\u00F3n");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "table", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, InvestigationLinesComponent_th_19_Template, 2, 0, "th", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, InvestigationLinesComponent_td_20_Template, 2, 1, "td", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](21, 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, InvestigationLinesComponent_th_22_Template, 2, 0, "th", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, InvestigationLinesComponent_td_23_Template, 6, 0, "td", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, InvestigationLinesComponent_tr_24_Template, 1, 0, "tr", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, InvestigationLinesComponent_tr_25_Template, 1, 0, "tr", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addentries);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", true);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Convocatoria);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addentries.valid);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.projectEntries);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
            }
        }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatRowDef"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatRow"]], styles: [".mat-card-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  letter-spacing: normal;\n  margin: 0 0 16px;\n  align-items: center;\n  justify-content: center;\n  border-radius: 1rem;\n  padding: 0.5rem;\n  position: relative;\n  margin-bottom: 2.1rem;\n  color: #001326;\n  font-family: \"Work Sans\", sans-serif;\n  display: block;\n}\n\n.tooltip-red[_ngcontent-%COMP%] {\n  background: #b71c1c;\n  font-size: 16px;\n}\n\n.tooltip-white[_ngcontent-%COMP%] {\n  background: #001326;\n  font-size: 16px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.iconoadd[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  display: inline-block;\n  fill: currentColor;\n  height: 54px;\n  width: 54px;\n  font-size: 44px;\n  background-color: transparent;\n  color: #001326;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.2s;\n  padding: 0.5rem;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.mat-slide-toggle.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-label[_ngcontent-%COMP%]   .mat-slide-toggle-bar[_ngcontent-%COMP%] {\n  background-color: #A4BEFF;\n}\n\n.card[_ngcontent-%COMP%] {\n  padding: 2.3rem 2.4rem 3rem 2.4rem;\n}\n\n.table-container[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  border-radius: 0.8rem;\n  border: solid 2px #E6EFFD;\n  overflow: hidden;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  border-radius: 0.5rem;\n  overflow: hidden;\n  border: solid 2px #E6EFFD;\n  border-collapse: collapse;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:not(:last-child) {\n  border-bottom: solid 2px #E6EFFD;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #E6EFFD;\n  padding: 0.5rem !important;\n  text-align: center;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  padding-left: 2.4rem !important;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  padding-right: 2.4rem !important;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.2rem;\n  padding: 1rem 0.5rem;\n  text-align: left;\n  vertical-align: top;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  padding-left: 2.4rem;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  padding-right: 2.4rem;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  padding: 3.9rem 2.4rem 2rem;\n  text-align: left;\n}\n\n.table-container[_ngcontent-%COMP%]   table.listado-indices-entidades[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  height: 7rem;\n}\n\n.table-container[_ngcontent-%COMP%]   table.listado-indices-entidades[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  height: 6.6rem;\n}\n\n.table-container[_ngcontent-%COMP%]   table.listado-indices-entidades[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%] {\n  padding: 3.9rem 2.4rem 2rem !important;\n}\n\n.mat-table[_ngcontent-%COMP%] {\n  font-family: \"Work Sans\", sans-serif;\n}\n\ntr.mat-header-row[_ngcontent-%COMP%] {\n  background-color: #E6EFFD;\n}\n\nth.mat-header-cell[_ngcontent-%COMP%] {\n  background: #001326;\n  color: #e2e2e2;\n  font-size: 1.2rem;\n  border-bottom: solid;\n  text-align: center;\n}\n\nth.mat-header-cell.align-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\nth.mat-header-cell.align-center[_ngcontent-%COMP%]   .mat-sort-header-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.mat-sort-header-arrow[_ngcontent-%COMP%] {\n  color: #001326;\n}\n\n.mat-cell[_ngcontent-%COMP%] {\n  color: #001326;\n  font-size: 1.2rem;\n  padding: 1.5rem !important;\n}\n\ntd.mat-cell[_ngcontent-%COMP%] {\n  border-bottom: solid 2px #E6EFFD;\n}\n\nul.table-action-list[_ngcontent-%COMP%] {\n  list-style-type: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nul.table-action-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding-right: 1rem;\n}\n\nul.table-action-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type {\n  padding-right: 0;\n}\n\nul.table-action-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], ul.table-action-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #001326;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.2s;\n  padding: 0.5rem;\n}\n\nul.table-action-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, ul.table-action-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #001326;\n  color: #FFFFFF;\n}\n\n.mat-card-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-family: \"Work Sans\", sans-serif;\n  letter-spacing: normal;\n  margin: 0 0 16px;\n  color: #001326;\n  padding: 0.5rem;\n}\n\n.mat-card-subtitle[_ngcontent-%COMP%] {\n  color: #001326;\n  font-family: \"Work Sans\", sans-serif;\n}\n\ntd[_ngcontent-%COMP%]   .estado-activo[_ngcontent-%COMP%] {\n  background-color: #069169;\n  color: white;\n  padding: 0.2rem 0.7rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.5rem;\n  min-height: 2.3rem;\n  min-width: 7rem;\n  border-radius: 0.4rem;\n}\n\ntd.align-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\ntd[_ngcontent-%COMP%]   .estado-inactivo[_ngcontent-%COMP%] {\n  background-color: #A80521;\n  color: white;\n  padding: 0.2rem 0.7rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.5rem;\n  min-height: 2.3rem;\n  min-width: 7rem;\n  border-radius: 0.4rem;\n}\n\ntd[_ngcontent-%COMP%]:first-child {\n  padding-left: 1.4rem !important;\n}\n\ntd[_ngcontent-%COMP%]:last-child {\n  padding-right: 2.4rem !important;\n}\n\ntd[_ngcontent-%COMP%]   .mat-slide-toggle[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nbutton[_ngcontent-%COMP%]   .mat-button-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.estado-sin-gestionar[_ngcontent-%COMP%] {\n  background-color: #FFAB00;\n  color: white;\n  padding: 0.2rem 0.7rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.5rem;\n  min-height: 2.3rem;\n  min-width: 7rem;\n  border-radius: 0.4rem;\n}\n\n.estado-activo[_ngcontent-%COMP%] {\n  background-color: #069169;\n  color: white;\n  padding: 0.2rem 0.7rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.5rem;\n  min-height: 2.3rem;\n  min-width: 7rem;\n  border-radius: 0.4rem;\n}\n\n.estado-inactivo[_ngcontent-%COMP%] {\n  background-color: #A80521;\n  color: white;\n  padding: 0.2rem 0.7rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.5rem;\n  min-height: 2.3rem;\n  min-width: 7rem;\n  border-radius: 0.4rem;\n}\n\n.estado-deshabilitado[_ngcontent-%COMP%] {\n  background-color: #707070;\n  color: white;\n  padding: 0.2rem 0.7rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.5rem;\n  min-height: 2.3rem;\n  min-width: 7rem;\n  border-radius: 0.4rem;\n}\n\n.botonera-tabla[_ngcontent-%COMP%] {\n  margin-top: 7rem;\n  margin-bottom: 6.7rem;\n}"] });
    return InvestigationLinesComponent;
})();


/***/ }),

/***/ "tK4v":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/admin/project-setup/components/investigation-programs/investigation-programs.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: InvestigationProgramsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestigationProgramsComponent", function() { return InvestigationProgramsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _Dialog_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Dialog/confirm-dialog/confirm-dialog.component */ "zHWP");
/* harmony import */ var _shared_services_investigation_program_investigation_program_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/services/investigation-program/investigation-program.service */ "HSqb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");















function InvestigationProgramsComponent_button_12_Template(rf, ctx) {
    if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvestigationProgramsComponent_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.agregar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "add_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function InvestigationProgramsComponent_th_19_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Descripcion ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function InvestigationProgramsComponent_td_20_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const element_r9 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r9.descr, " ");
    }
}
function InvestigationProgramsComponent_th_22_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Acciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function InvestigationProgramsComponent_td_23_Template(rf, ctx) {
    if (rf & 1) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvestigationProgramsComponent_td_23_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const row_r10 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.onProductTypeDeleted(row_r10._id, row_r10.descr); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function InvestigationProgramsComponent_tr_24_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 22);
    }
}
function InvestigationProgramsComponent_tr_25_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 23);
    }
}
let InvestigationProgramsComponent = /*@__PURE__*/ (() => {
    class InvestigationProgramsComponent {
        constructor(investigationProgramService, fb, rutaActiva, dialog) {
            this.investigationProgramService = investigationProgramService;
            this.fb = fb;
            this.rutaActiva = rutaActiva;
            this.dialog = dialog;
            this.projectEntries = [];
            this.displayedColumns = ['position', 'name'];
        }
        ngOnInit() {
            this.getAll();
            this.buildForm();
        }
        buildForm() {
            this.addentries = this.fb.group({
                descr: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                Convocatoria: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            });
        }
        getAll() {
            let cv = this.rutaActiva.snapshot.params;
            this.Convocatoria = cv.id;
            this.investigationProgramService.getIdConv(this.Convocatoria).subscribe(r => {
                this.projectEntries = r;
            });
        }
        onProductTypeDeleted(item) {
            let datos = {
                icono: 'info',
                severidad: 'dialog-info',
                encabezado: 'Eliminar Sub programa',
                descripcion: `¿Esta seguro que desea eliminar este item?`
            };
            const dialogRef = this.dialog.open(_Dialog_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmDialogComponent"], {
                ariaLabel: `Confirmar eliminación`,
                role: 'alertdialog',
                autoFocus: false,
                data: datos
            });
            dialogRef.afterClosed().subscribe(result => {
                if (result == "true") {
                    this.investigationProgramService.delete(item).subscribe((result) => {
                        this.getAll();
                    });
                }
                else {
                }
            });
        }
        agregar() {
            const datos = this.addentries.value;
            var dato = {
                descr: datos.descr,
                Convocatoria: this.Convocatoria
            };
            this.investigationProgramService.add(dato).subscribe(r => {
                this.getAll();
                this.buildForm();
            });
        }
    }
    InvestigationProgramsComponent.ɵfac = function InvestigationProgramsComponent_Factory(t) { return new (t || InvestigationProgramsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_investigation_program_investigation_program_service__WEBPACK_IMPORTED_MODULE_3__["InvestigationProgramService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"])); };
    InvestigationProgramsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InvestigationProgramsComponent, selectors: [["app-investigation-programs"]], decls: 26, vars: 7, consts: [[1, "example-form", 3, "formGroup"], ["appearance", "legacy", 1, "example-full-width", 3, "hidden"], ["formControlName", "Convocatoria", "matInput", "", 3, "ngModel", "ngModelChange"], ["appearance", "legacy", 1, "example-full-width"], ["formControlName", "descr", "matInput", ""], ["matTooltip", "Agregar Programa de Investigaci\u00F3n", "aria-label", "Agregar Programa de Investigaci\u00F3n", "matTooltipClass", "tooltip-white", "matTooltipPosition", "above", 3, "click", 4, "ngIf"], [1, "card"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["scope", "col", "mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["matTooltip", "Agregar Programa de Investigaci\u00F3n", "aria-label", "Agregar Programa de Investigaci\u00F3n", "matTooltipClass", "tooltip-white", "matTooltipPosition", "above", 3, "click"], [1, "iconoadd"], ["mat-header-cell", ""], ["mat-cell", ""], ["scope", "col", "mat-header-cell", ""], [1, "table-action-list"], ["matTooltip", "Eliminar Programa de Investigaci\u00F3n", "matTooltipClass", "tooltip-red", "matTooltipPosition", "below", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function InvestigationProgramsComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-subtitle");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Registra un Programa de Investigaci\u00F3n");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InvestigationProgramsComponent_Template_input_ngModelChange_7_listener($event) { return ctx.Convocatoria = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Escriba aqui el Programa de Investigaci\u00F3n");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, InvestigationProgramsComponent_button_12_Template, 3, 0, "button", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Lista de Programas de Investigaci\u00F3n");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "table", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, InvestigationProgramsComponent_th_19_Template, 2, 0, "th", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, InvestigationProgramsComponent_td_20_Template, 2, 1, "td", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](21, 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, InvestigationProgramsComponent_th_22_Template, 2, 0, "th", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, InvestigationProgramsComponent_td_23_Template, 6, 0, "td", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, InvestigationProgramsComponent_tr_24_Template, 1, 0, "tr", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, InvestigationProgramsComponent_tr_25_Template, 1, 0, "tr", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addentries);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", true);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Convocatoria);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addentries.valid);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.projectEntries);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
            }
        }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatRowDef"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatRow"]], styles: [".mat-card-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  letter-spacing: normal;\n  margin: 0 0 16px;\n  align-items: center;\n  justify-content: center;\n  border-radius: 1rem;\n  padding: 0.5rem;\n  position: relative;\n  margin-bottom: 2.1rem;\n  color: #001326;\n  font-family: \"Work Sans\", sans-serif;\n  display: block;\n}\n\n.tooltip-red[_ngcontent-%COMP%] {\n  background: #b71c1c;\n  font-size: 16px;\n}\n\n.tooltip-white[_ngcontent-%COMP%] {\n  background: #001326;\n  font-size: 16px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.iconoadd[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  display: inline-block;\n  fill: currentColor;\n  height: 54px;\n  width: 54px;\n  font-size: 44px;\n  background-color: transparent;\n  color: #001326;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.2s;\n  padding: 0.5rem;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.mat-slide-toggle.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-label[_ngcontent-%COMP%]   .mat-slide-toggle-bar[_ngcontent-%COMP%] {\n  background-color: #A4BEFF;\n}\n\n.card[_ngcontent-%COMP%] {\n  padding: 2.3rem 2.4rem 3rem 2.4rem;\n}\n\n.table-container[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  border-radius: 0.8rem;\n  border: solid 2px #E6EFFD;\n  overflow: hidden;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  border-radius: 0.5rem;\n  overflow: hidden;\n  border: solid 2px #E6EFFD;\n  border-collapse: collapse;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:not(:last-child) {\n  border-bottom: solid 2px #E6EFFD;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #E6EFFD;\n  padding: 0.5rem !important;\n  text-align: center;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  padding-left: 2.4rem !important;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  padding-right: 2.4rem !important;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.2rem;\n  padding: 1rem 0.5rem;\n  text-align: left;\n  vertical-align: top;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  padding-left: 2.4rem;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  padding-right: 2.4rem;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  padding: 3.9rem 2.4rem 2rem;\n  text-align: left;\n}\n\n.table-container[_ngcontent-%COMP%]   table.listado-indices-entidades[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  height: 7rem;\n}\n\n.table-container[_ngcontent-%COMP%]   table.listado-indices-entidades[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  height: 6.6rem;\n}\n\n.table-container[_ngcontent-%COMP%]   table.listado-indices-entidades[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%] {\n  padding: 3.9rem 2.4rem 2rem !important;\n}\n\n.mat-table[_ngcontent-%COMP%] {\n  font-family: \"Work Sans\", sans-serif;\n}\n\ntr.mat-header-row[_ngcontent-%COMP%] {\n  background-color: #E6EFFD;\n}\n\nth.mat-header-cell[_ngcontent-%COMP%] {\n  background: #001326;\n  color: #e2e2e2;\n  font-size: 1.2rem;\n  border-bottom: solid;\n  text-align: center;\n}\n\nth.mat-header-cell.align-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\nth.mat-header-cell.align-center[_ngcontent-%COMP%]   .mat-sort-header-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.mat-sort-header-arrow[_ngcontent-%COMP%] {\n  color: #001326;\n}\n\n.mat-cell[_ngcontent-%COMP%] {\n  color: #001326;\n  font-size: 1.2rem;\n  padding: 1.5rem !important;\n}\n\ntd.mat-cell[_ngcontent-%COMP%] {\n  border-bottom: solid 2px #E6EFFD;\n}\n\nul.table-action-list[_ngcontent-%COMP%] {\n  list-style-type: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nul.table-action-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding-right: 1rem;\n}\n\nul.table-action-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type {\n  padding-right: 0;\n}\n\nul.table-action-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], ul.table-action-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #001326;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.2s;\n  padding: 0.5rem;\n}\n\nul.table-action-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, ul.table-action-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #001326;\n  color: #FFFFFF;\n}\n\n.mat-card-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-family: \"Work Sans\", sans-serif;\n  letter-spacing: normal;\n  margin: 0 0 16px;\n  color: #001326;\n  padding: 0.5rem;\n}\n\n.mat-card-subtitle[_ngcontent-%COMP%] {\n  color: #001326;\n  font-family: \"Work Sans\", sans-serif;\n}\n\ntd[_ngcontent-%COMP%]   .estado-activo[_ngcontent-%COMP%] {\n  background-color: #069169;\n  color: white;\n  padding: 0.2rem 0.7rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.5rem;\n  min-height: 2.3rem;\n  min-width: 7rem;\n  border-radius: 0.4rem;\n}\n\ntd.align-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\ntd[_ngcontent-%COMP%]   .estado-inactivo[_ngcontent-%COMP%] {\n  background-color: #A80521;\n  color: white;\n  padding: 0.2rem 0.7rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.5rem;\n  min-height: 2.3rem;\n  min-width: 7rem;\n  border-radius: 0.4rem;\n}\n\ntd[_ngcontent-%COMP%]:first-child {\n  padding-left: 1.4rem !important;\n}\n\ntd[_ngcontent-%COMP%]:last-child {\n  padding-right: 2.4rem !important;\n}\n\ntd[_ngcontent-%COMP%]   .mat-slide-toggle[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nbutton[_ngcontent-%COMP%]   .mat-button-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.estado-sin-gestionar[_ngcontent-%COMP%] {\n  background-color: #FFAB00;\n  color: white;\n  padding: 0.2rem 0.7rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.5rem;\n  min-height: 2.3rem;\n  min-width: 7rem;\n  border-radius: 0.4rem;\n}\n\n.estado-activo[_ngcontent-%COMP%] {\n  background-color: #069169;\n  color: white;\n  padding: 0.2rem 0.7rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.5rem;\n  min-height: 2.3rem;\n  min-width: 7rem;\n  border-radius: 0.4rem;\n}\n\n.estado-inactivo[_ngcontent-%COMP%] {\n  background-color: #A80521;\n  color: white;\n  padding: 0.2rem 0.7rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.5rem;\n  min-height: 2.3rem;\n  min-width: 7rem;\n  border-radius: 0.4rem;\n}\n\n.estado-deshabilitado[_ngcontent-%COMP%] {\n  background-color: #707070;\n  color: white;\n  padding: 0.2rem 0.7rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.5rem;\n  min-height: 2.3rem;\n  min-width: 7rem;\n  border-radius: 0.4rem;\n}\n\n.botonera-tabla[_ngcontent-%COMP%] {\n  margin-top: 7rem;\n  margin-bottom: 6.7rem;\n}"] });
    return InvestigationProgramsComponent;
})();


/***/ })

}]);