import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {SucessDialogComponent, SucessDialogData} from '../../../../../admin/Dialog/sucess-dialog/sucess-dialog.component';

@Component({
    selector: 'app-informacion',
    templateUrl: './informacion.component.html',
    styleUrls: ['../../detalles-generales.component.scss']
})
export class InformacionComponent implements OnInit {
    public informacion: FormGroup;
    public palabrasClave = [];
    public displayedColumns: string[] = ['descripcion', 'acciones'];
    public dataSource;
    public palabra: FormControl;
    public palabrasClavelist = [];
    public Validor = false;
    public nInve = '';

    @Input()
    ivNs: string;

    constructor(public form: FormBuilder, public dialogo: MatDialog) {}

    ngOnInit(): void {
        let dato = JSON.parse(localStorage.getItem('iniciarProyecto'));
        if (dato != null) {
            this.nInve = dato.nombreProyecto;
        }
        this.builder();
    }

    builder(): void {
        this.dataSource = JSON.parse(localStorage.getItem('palabraClaves'));
        let datoStorage = JSON.parse(localStorage.getItem('informacion'));

        if (datoStorage == null) {
            this.informacion = this.form.group({
                pregunta: new FormControl('', [Validators.required]),
                impacto: new FormControl('', [Validators.required]),
            });
        } else {
            this.informacion = this.form.group({
                pregunta: new FormControl(datoStorage.pregunta),
                impacto: new FormControl(datoStorage.impacto),
            });
        }
        this.palabra = new FormControl('', [Validators.required]);
    }

    guardarInformacion(): void {
        const informacion = this.informacion.value;
        var Obje = {
            nInvestigacion: this.ivNs,
            pregunta: informacion.pregunta,
            impacto: informacion.impacto
        };
        if (this.ivNs == '') {
            this.Validor = true;
        } else {
            localStorage.setItem('informacion', JSON.stringify(informacion));
            let datossucess: SucessDialogData = {
                icono: 'done',
                severidad: 'dialog-sucess',
                encabezado: 'Informacion',
                descripcion: ` Se a guardado correcatamente la informacion diligenciada para la investigacion ${this.ivNs}`
            };
            const dialogRef = this.dialogo.open(SucessDialogComponent, {
                ariaLabel: ` Guardado `,
                role: 'alertdialog',
                autoFocus: false,
                data: datossucess
            });
        }
    }

    guardarPalabra(): void {
        this.palabrasClave = this.palabra.value;
        this.palabrasClavelist.push({palabra: this.palabrasClave});
        localStorage.setItem('palabraClaves', JSON.stringify(this.palabrasClavelist));
        this.builder();
    }

    deletePalabra(palabra): void {
        let palabraStorage = JSON.parse(localStorage.getItem('palabraClaves'));
        let filtroPalabras = palabraStorage.filter(filtro => filtro.palabra != palabra);
        localStorage.setItem('palabraClaves', JSON.stringify(filtroPalabras));
        this.builder();
    }

    CloseAlert(): void {
        this.Validor = false;
    }
}
