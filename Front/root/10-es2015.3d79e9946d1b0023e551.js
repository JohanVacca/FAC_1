(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "DPNA":
/*!*******************************************************************!*\
  !*** ./src/app/pages/firmas/firmas-home/firmas-home.component.ts ***!
  \*******************************************************************/
/*! exports provided: FirmasHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirmasHomeComponent", function() { return FirmasHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _lista_proyectos_modal_lista_proyectos_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lista-proyectos-modal/lista-proyectos-modal.component */ "a8lz");
/* harmony import */ var _shared_services_firma_firma_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/firma/firma.service */ "KdIk");
/* harmony import */ var _core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@core/services/auth/auth.service */ "Gpft");
/* harmony import */ var _admin_convocatory_services_convocatory_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../admin/convocatory/services/convocatory.service */ "lDoA");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");













function FirmasHomeComponent_label_7_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.MESSAGE_WITH_SIGNATURE);
    }
}
function FirmasHomeComponent_label_8_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.MESSAGE_WITHOUT_SIGNATURE);
    }
}
function FirmasHomeComponent_div_9_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.FORMAT_ERROR_MESSAGE);
    }
}
function FirmasHomeComponent_div_10_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "data:image/png;base64,", ctx_r3.signature.data, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    }
}
function FirmasHomeComponent_label_12_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.UPDATE_SIGNATURE);
    }
}
function FirmasHomeComponent_button_15_Template(rf, ctx) {
    if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FirmasHomeComponent_button_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.updateSignature(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.UPDATE_SIGNATURE);
    }
}
function FirmasHomeComponent_button_16_Template(rf, ctx) {
    if (rf & 1) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FirmasHomeComponent_button_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.addSignature(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.ADD_SIGNATURE);
    }
}
function FirmasHomeComponent_div_23_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.LABEL_WITHOUT_SIGNATURE);
    }
}
function FirmasHomeComponent_div_24_th_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Nombre.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function FirmasHomeComponent_div_24_td_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const element_r21 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r21.name, " ");
    }
}
function FirmasHomeComponent_div_24_th_6_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Descripcion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function FirmasHomeComponent_div_24_td_7_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const element_r22 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r22.Descripcion);
    }
}
function FirmasHomeComponent_div_24_th_9_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Acciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function FirmasHomeComponent_div_24_td_10_Template(rf, ctx) {
    if (rf & 1) {
        const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FirmasHomeComponent_div_24_td_10_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const row_r23 = ctx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r24.viewConvocatorias(row_r23._id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function FirmasHomeComponent_div_24_tr_11_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 34);
    }
}
function FirmasHomeComponent_div_24_tr_12_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 35);
    }
}
function FirmasHomeComponent_div_24_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FirmasHomeComponent_div_24_th_3_Template, 2, 0, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FirmasHomeComponent_div_24_td_4_Template, 2, 1, "td", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FirmasHomeComponent_div_24_th_6_Template, 2, 0, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FirmasHomeComponent_div_24_td_7_Template, 2, 1, "td", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FirmasHomeComponent_div_24_th_9_Template, 2, 0, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FirmasHomeComponent_div_24_td_10_Template, 6, 0, "td", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, FirmasHomeComponent_div_24_tr_11_Template, 1, 0, "tr", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FirmasHomeComponent_div_24_tr_12_Template, 1, 0, "tr", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r8.convocatorias);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r8.displayedColumns1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r8.displayedColumns1);
    }
}
let FirmasHomeComponent = /*@__PURE__*/ (() => {
    class FirmasHomeComponent {
        constructor(firmaService, authService, convocatoryService, dialog) {
            this.firmaService = firmaService;
            this.authService = authService;
            this.convocatoryService = convocatoryService;
            this.dialog = dialog;
            this.MY_SIGNATURE = 'Mi firma';
            this.LIST = 'Listado por firmar';
            this.MESSAGE_WITHOUT_SIGNATURE = 'No tiene ninguna firma relacionada.';
            this.MESSAGE_WITH_SIGNATURE = 'Firma agregada';
            this.UPDATE_SIGNATURE = 'Actualizar Firma';
            this.ADD_SIGNATURE = 'Agregar Firma';
            this.FORMAT_ERROR_MESSAGE = 'Solo son permitidas imagenes en formato PNG o JPG';
            this.LABEL_WITHOUT_SIGNATURE = 'Para firmar es necesario agregar una firma';
            this.hasSignature = false;
            this.formatError = false;
            this.loadingUserId = true;
            this.displayedColumns1 = ['name', 'Descripcion', 'acciones'];
            this.selectedImage = false;
            this.userId = '';
        }
        ngOnInit() {
            this.getUserId();
            this.getConvocatorias();
        }
        addSignature() {
            this.firmaService.saveFirma(this.fileToUpload, this.userId)
                .subscribe(response => {
                this.hasSignature = true;
                this.signature = response.firma;
                this.fileToUpload = null;
            }, error => console.log('error>>> ', error));
        }
        updateSignature() {
            this.firmaService.removeFirma(this.userId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => this.addSignature()))
                .subscribe(() => { });
        }
        saveSignature(files) {
            this.selectedImage = true;
            const fileToUpload = files.item(0);
            if (fileToUpload.type.includes('image')) {
                this.fileToUpload = fileToUpload;
                this.formatError = false;
            }
            else {
                this.formatError = true;
            }
        }
        viewConvocatorias(id) {
            const data = { idC: id };
            const dialogRef = this.dialog.open(_lista_proyectos_modal_lista_proyectos_modal_component__WEBPACK_IMPORTED_MODULE_2__["ListaProyectosModalComponent"], { data });
            dialogRef.afterClosed().subscribe(r => { });
        }
        getUserId() {
            this.authService.getUserId()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => this.getSignature()))
                .subscribe(userId => this.userId = userId, error => console.log('error>>> ', error));
        }
        getSignature() {
            this.firmaService.getFirma(this.userId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => this.loadingUserId = false))
                .subscribe(response => {
                this.hasSignature = true;
                this.signature = response.firma;
            }, error => console.log('error>>> ', error));
        }
        getConvocatorias() {
            this.convocatoryService.getall()
                .subscribe((convocatorias) => {
                this.convocatorias = convocatorias.filter(r => r.isActive === true);
            });
        }
    }
    FirmasHomeComponent.ɵfac = function FirmasHomeComponent_Factory(t) { return new (t || FirmasHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_firma_firma_service__WEBPACK_IMPORTED_MODULE_3__["FirmaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_admin_convocatory_services_convocatory_service__WEBPACK_IMPORTED_MODULE_5__["ConvocatoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"])); };
    FirmasHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FirmasHomeComponent, selectors: [["app-firmas-home"]], decls: 25, vars: 11, consts: [[1, "container"], [1, "card", "card-firma"], [1, "card-firma__title"], [1, "card-firma__message"], [4, "ngIf"], ["class", "card-firma__format-error", 4, "ngIf"], ["class", "card-firma__img", 4, "ngIf"], [1, "card-firma__input"], ["type", "file", "id", "file", 3, "change"], [1, "card-firma__buttons"], ["class", "button-view-table", 3, "click", 4, "ngIf"], [1, "card", "card-firma", "card-firma-listado"], ["class", "card-firma__label", 4, "ngIf"], ["class", "col-lg-12 col-md-12 col-xs-12 overflow-auto card-firma-listado__table-div", 4, "ngIf"], [1, "card-firma__format-error"], [1, "card-firma__img"], ["alt", "Imagen De Firma", 3, "src"], [1, "button-view-table", 3, "click"], [1, "card-firma__label"], [1, "col-lg-12", "col-md-12", "col-xs-12", "overflow-auto", "card-firma-listado__table-div"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Descripcion"], ["matColumnDef", "acciones"], ["scope", "col", "mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["scope", "col", "mat-header-cell", ""], [1, "table-action-list", "table-acciones"], ["mat-icon-button", "", "aria-label", "Example icon-button with a heart icon", "matTooltipClass", "tooltip-white", "matTooltip", "Ver Proyectos", "matTooltipPosition", "above", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function FirmasHomeComponent_Template(rf, ctx) {
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
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FirmasHomeComponent_label_7_Template, 2, 1, "label", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FirmasHomeComponent_label_8_Template, 2, 1, "label", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FirmasHomeComponent_div_9_Template, 3, 1, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FirmasHomeComponent_div_10_Template, 2, 1, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FirmasHomeComponent_label_12_Template, 2, 1, "label", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FirmasHomeComponent_Template_input_change_13_listener($event) { return ctx.saveSignature($event.target.files); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, FirmasHomeComponent_button_15_Template, 2, 1, "button", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, FirmasHomeComponent_button_16_Template, 2, 1, "button", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, FirmasHomeComponent_div_23_Template, 3, 1, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, FirmasHomeComponent_div_24_Template, 13, 3, "div", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.MY_SIGNATURE);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasSignature);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hasSignature);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formatError);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasSignature);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasSignature);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasSignature && ctx.selectedImage);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hasSignature && ctx.fileToUpload);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.LIST);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hasSignature);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasSignature);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatCell"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatRow"]], styles: [".mat-card-subtitle[_ngcontent-%COMP%] {\n  color: #004884;\n  font-family: \"Work Sans\", sans-serif;\n  display: block;\n  padding: 1rem;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\ntd[_ngcontent-%COMP%] {\n  line-height: 120%;\n}\n\n.tooltip-red[_ngcontent-%COMP%] {\n  background: #b71c1c;\n  font-size: 16px;\n}\n\n.tooltip-white[_ngcontent-%COMP%] {\n  background: #3772FF;\n  font-size: 16px;\n}\n\n.card[_ngcontent-%COMP%] {\n  padding: 3.3rem 2.4rem 4rem 2.4rem;\n}\n\n  .card-firma mat-card-title {\n  font-weight: 700;\n  letter-spacing: normal;\n  align-items: center;\n  justify-content: center;\n  padding: 0 0 20px;\n  position: relative;\n  color: #004884;\n  font-family: \"Work Sans\", sans-serif;\n  display: block;\n  font-size: 24px;\n}\n\n  .card-firma__title label {\n  color: #004884;\n  font-weight: 700;\n  letter-spacing: normal;\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 24px;\n}\n\n  .card-firma__message {\n  margin: 20px 0;\n}\n\n  .card-firma__label {\n  margin: 20px 0;\n  text-align: center;\n}\n\n  .card-firma__label label {\n  font-size: 20px;\n}\n\n  .card-firma__input input {\n  width: 100%;\n}\n\n  .card-firma__format-error {\n  margin: 20px 0;\n}\n\n  .card-firma__format-error label {\n  color: red;\n}\n\n  .card-firma__img {\n  align-self: center;\n  width: 510px;\n  height: 270px;\n  margin: 20px 0 50px;\n}\n\n  .card-firma__img img {\n  width: 500px;\n  height: 260px;\n}\n\n  .card-firma__buttons {\n  align-self: center;\n}\n\n  .card-firma__buttons button {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n  .card-firma-listado__table-div table {\n  width: 100%;\n}\n\n  .card-firma-listado__table-div table .table-acciones {\n  justify-content: left;\n}"] });
    return FirmasHomeComponent;
})();


/***/ }),

/***/ "a8lz":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/firmas/lista-proyectos-modal/lista-proyectos-modal.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ListaProyectosModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaProyectosModalComponent", function() { return ListaProyectosModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _admin_Dialog_sucess_dialog_sucess_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../admin/Dialog/sucess-dialog/sucess-dialog.component */ "PrVi");
/* harmony import */ var _shared_services_Proyect_project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/Proyect/project.service */ "OJh+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../@core/services */ "5mMP");
/* harmony import */ var _shared_services_firma_firma_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/firma/firma.service */ "KdIk");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");

















function ListaProyectosModalComponent_mat_spinner_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
    }
}
function ListaProyectosModalComponent_mat_card_3_th_7_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Proyecto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ListaProyectosModalComponent_mat_card_3_td_8_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const element_r10 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", element_r10.nombreProyecto, " ");
    }
}
function ListaProyectosModalComponent_mat_card_3_th_10_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Firma como");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ListaProyectosModalComponent_mat_card_3_td_11_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "spam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const element_r11 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r11.name);
    }
}
function ListaProyectosModalComponent_mat_card_3_th_13_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Acciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ListaProyectosModalComponent_mat_card_3_td_14_Template(rf, ctx) {
    if (rf & 1) {
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListaProyectosModalComponent_mat_card_3_td_14_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const row_r12 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.firmar(row_r12); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ListaProyectosModalComponent_mat_card_3_tr_15_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 19);
    }
}
function ListaProyectosModalComponent_mat_card_3_tr_16_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 20);
    }
}
function ListaProyectosModalComponent_mat_card_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](6, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ListaProyectosModalComponent_mat_card_3_th_7_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ListaProyectosModalComponent_mat_card_3_td_8_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ListaProyectosModalComponent_mat_card_3_th_10_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ListaProyectosModalComponent_mat_card_3_td_11_Template, 3, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ListaProyectosModalComponent_mat_card_3_th_13_Template, 2, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ListaProyectosModalComponent_mat_card_3_td_14_Template, 6, 0, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ListaProyectosModalComponent_mat_card_3_tr_15_Template, 1, 0, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ListaProyectosModalComponent_mat_card_3_tr_16_Template, 1, 0, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.PROJECT_LIST);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.PROJECT_LIST_MESSAGE);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r1.listadoDeFirma);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r1.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r1.displayedColumns);
    }
}
let ListaProyectosModalComponent = /*@__PURE__*/ (() => {
    class ListaProyectosModalComponent {
        constructor(data, projectService, router, authStorageService, dialogRef, dialog, firmaService, auth) {
            this.data = data;
            this.projectService = projectService;
            this.router = router;
            this.authStorageService = authStorageService;
            this.dialogRef = dialogRef;
            this.dialog = dialog;
            this.firmaService = firmaService;
            this.auth = auth;
            this.displayedColumns = ['Proyecto', 'Firma', 'Acciones'];
            this.listadoDeFirma = [];
            this.PROJECT_LIST = 'Listado de Proyectos';
            this.PROJECT_LIST_MESSAGE = 'En la siguiente tabla encontrará Los proyectos activos que se encuentran pendientes por firmar';
        }
        ngOnInit() {
            this.getAll(this.data.idC);
        }
        firmar(firma) {
            const { idFirma, idProyecto } = firma;
            this.firmaService.firmar(idFirma, idProyecto)
                .subscribe(() => {
                this.dialog.open(_admin_Dialog_sucess_dialog_sucess_dialog_component__WEBPACK_IMPORTED_MODULE_3__["SucessDialogComponent"], {
                    role: 'alertdialog',
                    autoFocus: false,
                    data: {
                        icono: 'done',
                        severidad: 'dialog-sucess',
                        encabezado: `Documento firmado`,
                        descripcion: `El proyecto con nombre ${firma.nombreProyecto} se ha firmado exitosamente como ${firma.name}`
                    }
                }).afterClosed().subscribe(() => {
                    this.getAll(this.data.idC);
                });
            });
        }
        getAll(id) {
            this.listadoDeFirma = [];
            const userId = this.auth.getUserId();
            this.loading = true;
            this.projectService.getIdConv(id)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => this.loading = false))
                .subscribe(response => {
                response.Proyectos.map(proyecto => {
                    proyecto.firmas.map(firma => {
                        if (firma.idQuienFirma === userId && !firma.status) {
                            const { name, idQuienFirma, _id } = firma;
                            const nombreProyecto = proyecto.iniciarProyecto[0].nombreProyecto;
                            this.listadoDeFirma.push({ name, idQuienFirma, nombreProyecto, idProyecto: proyecto._id, idFirma: _id });
                        }
                    });
                });
                if (localStorage.getItem('Role') === 'Investigador') {
                    response['Proyectos'].forEach(element => {
                        if (response['Proyectos'][0].UserId._id === this.authStorageService.getUserId()) {
                            this.dataSource = response['Proyectos'];
                        }
                    });
                }
                else {
                    this.dataSource = response['Proyectos'];
                }
            });
        }
    }
    ListaProyectosModalComponent.ɵfac = function ListaProyectosModalComponent_Factory(t) { return new (t || ListaProyectosModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_Proyect_project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_6__["AuthStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_firma_firma_service__WEBPACK_IMPORTED_MODULE_7__["FirmaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_6__["AuthStorageService"])); };
    ListaProyectosModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListaProyectosModalComponent, selectors: [["app-lista-proyectos-modal"]], decls: 4, vars: 2, consts: [[4, "ngIf"], [1, "container"], [1, "mat-typography"], ["class", "card", 4, "ngIf"], [1, "card"], ["mat-table", "", 1, "mat-elevation-z8", "table-proyectos-por-firmar", 3, "dataSource"], ["matColumnDef", "Proyecto"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Firma"], ["matColumnDef", "Acciones"], ["scope", "col", "mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["scope", "col", "mat-header-cell", ""], [1, "table-action-list"], ["mat-icon-button", "", "aria-label", "Example icon-button with a heart icon", "matTooltipClass", "tooltip-white", "matTooltip", "Firmar", "matTooltipPosition", "above", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function ListaProyectosModalComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ListaProyectosModalComponent_mat_spinner_0_Template, 1, 0, "mat-spinner", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ListaProyectosModalComponent_mat_card_3_Template, 17, 5, "mat-card", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatSpinner"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardSubtitle"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatCell"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatRow"]], styles: [".table-proyectos-por-firmar {\n  width: 700px;\n}"] });
    return ListaProyectosModalComponent;
})();


/***/ }),

/***/ "i258":
/*!***********************************************************************!*\
  !*** ./src/app/pages/firmas/agregar-firma/agregar-firma.component.ts ***!
  \***********************************************************************/
/*! exports provided: AgregarFirmaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgregarFirmaComponent", function() { return AgregarFirmaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


let AgregarFirmaComponent = /*@__PURE__*/ (() => {
    class AgregarFirmaComponent {
        constructor() { }
        ngOnInit() {
        }
    }
    AgregarFirmaComponent.ɵfac = function AgregarFirmaComponent_Factory(t) { return new (t || AgregarFirmaComponent)(); };
    AgregarFirmaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AgregarFirmaComponent, selectors: [["app-agregar-firma"]], decls: 2, vars: 0, template: function AgregarFirmaComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "agregar-firma works!");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
        }, styles: [""] });
    return AgregarFirmaComponent;
})();


/***/ }),

/***/ "rdqQ":
/*!*******************************************************!*\
  !*** ./src/app/pages/firmas/firmas.routing.module.ts ***!
  \*******************************************************/
/*! exports provided: FirmasRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirmasRoutingModule", function() { return FirmasRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _firmas_home_firmas_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./firmas-home/firmas-home.component */ "DPNA");
/* harmony import */ var _agregar_firma_agregar_firma_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./agregar-firma/agregar-firma.component */ "i258");






const routes = [
    {
        path: '',
        component: _firmas_home_firmas_home_component__WEBPACK_IMPORTED_MODULE_2__["FirmasHomeComponent"],
    },
    {
        path: 'agregar-firma',
        component: _agregar_firma_agregar_firma_component__WEBPACK_IMPORTED_MODULE_3__["AgregarFirmaComponent"],
    }
];
let FirmasRoutingModule = /*@__PURE__*/ (() => {
    class FirmasRoutingModule {
    }
    FirmasRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FirmasRoutingModule });
    FirmasRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FirmasRoutingModule_Factory(t) { return new (t || FirmasRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return FirmasRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FirmasRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ }),

/***/ "vISB":
/*!***********************************************!*\
  !*** ./src/app/pages/firmas/firmas.module.ts ***!
  \***********************************************/
/*! exports provided: FirmasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirmasModule", function() { return FirmasModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _firmas_home_firmas_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./firmas-home/firmas-home.component */ "DPNA");
/* harmony import */ var _agregar_firma_agregar_firma_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./agregar-firma/agregar-firma.component */ "i258");
/* harmony import */ var _firmas_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./firmas.routing.module */ "rdqQ");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _lista_proyectos_modal_lista_proyectos_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lista-proyectos-modal/lista-proyectos-modal.component */ "a8lz");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
















let FirmasModule = /*@__PURE__*/ (() => {
    class FirmasModule {
    }
    FirmasModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FirmasModule });
    FirmasModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FirmasModule_Factory(t) { return new (t || FirmasModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _firmas_routing_module__WEBPACK_IMPORTED_MODULE_4__["FirmasRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"]
            ]] });
    return FirmasModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FirmasModule, { declarations: [_firmas_home_firmas_home_component__WEBPACK_IMPORTED_MODULE_2__["FirmasHomeComponent"], _agregar_firma_agregar_firma_component__WEBPACK_IMPORTED_MODULE_3__["AgregarFirmaComponent"], _lista_proyectos_modal_lista_proyectos_modal_component__WEBPACK_IMPORTED_MODULE_13__["ListaProyectosModalComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
            _firmas_routing_module__WEBPACK_IMPORTED_MODULE_4__["FirmasRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"]] });
})();


/***/ })

}]);