import {Component, ViewChild, ElementRef} from '@angular/core';
import {AuthStorageService} from '../../../../../../@core/services/storage/auth-storage/auth-storage.service';
import {InstructivosService} from '../../../../../../@core/services/instructivos/FormIns.service';
import {SafeResourceUrl} from '@angular/platform-browser';
import {VerIntructiveComponent, VerIntructiveData} from '../../../../../../pages/instructional/ver-intructive/ver-intructive.component';
import {MatDialog} from '@angular/material/dialog';
import {FormGroup, FormControl} from '@angular/forms';
import {CreateComplementsData, AddComplementsComponent} from './add-complements/add-complements.component';
import {SucessDialogComponent, SucessDialogData} from '../../../../../admin/Dialog/sucess-dialog/sucess-dialog.component';

@Component({
    selector: 'app-complementos',
    templateUrl: './complementos.component.html',
    styleUrls: ['./complementos.component.scss']
})
export class ComplementosComponent {


    @ViewChild('fileInput') fileInput: ElementRef;
    fileAttr = 'Buscar Archivo';
    complementos = ['Estado del Arte', 'Resultados Previos', 'Resultados Esperados', 'Metodologia',
        'Marco Conceptual', 'Resumen'];

    constructor(private authStorageService: AuthStorageService,
                private InstructivosService: InstructivosService,
                public dialog: MatDialog,) {
    }

    complemento: FormGroup;
    IdProyec;
    url: SafeResourceUrl;
    Val = false;
    dataSource = [];
    acti = false;

    displayedColumns: string[] = ['Institucion', 'Persona'];

    ngOnInit(): void {
        this.IdProyec = localStorage.getItem('IdProyec');
        this.buildForm();
        this.getAll();
    }

    buildForm() {
        this.complemento = new FormGroup({
            Complements: new FormControl(''),
        });
    }

    getAll() {
        if (this.IdProyec != undefined) {
            this.Val = true;
            this.InstructivosService.getIdProyect(this.IdProyec).subscribe(r => {
                this.dataSource = r;
                if (this.dataSource == []) {
                    this.Val = false;
                }
            });
        } else {
            this.Val = false;
        }
    }

    ver(url, Nombre) {
        let datos: VerIntructiveData = {
            url: url,
            Nombre: Nombre
        };
        const dialogRef = this.dialog.open(VerIntructiveComponent, {
            ariaLabel: `Editar`,
            role: 'alertdialog',
            autoFocus: false,
            data: datos
        });
    }

    uploadFileEvt(imgFile: any, name) {
        if (name != undefined && imgFile != undefined) {
            let tamañoMaximo = 30000000;
            const file = imgFile.target.files[0];
            if (file.size < tamañoMaximo) {
                if (file.type.includes('pdf')) {
                    this.authStorageService.setFile(name, file);
                } else {
                    alert('No es un PDF');
                }
            } else {
                alert('El PDF supera el tamaño');
            }
        }
    }

    openDialog() {
        let dato = this.complemento.value;

        let datos: CreateComplementsData = {
            Objet: dato.Complements
        };
        const dialogRef = this.dialog.open(AddComplementsComponent, {
            ariaLabel: `Editar`,
            role: 'alertdialog',
            autoFocus: false,
            data: datos
        });
        dialogRef.afterClosed().subscribe(r => {
            if (r != 'true') {
            } else {
                let datossucess: SucessDialogData = {
                    icono: 'done',
                    severidad: 'dialog-sucess',
                    encabezado: `Agregacion de Complemento`,
                    descripcion: `La creacion del compelemnto se ha completado Satisfactoriamente`
                };
                const dialogRef = this.dialog.open(SucessDialogComponent, {
                    ariaLabel: `La agregacion fue Satisfactoria`,
                    role: 'alertdialog',
                    autoFocus: false,
                    data: datossucess
                });
                dialogRef.afterClosed().subscribe(result => {
                    if (result == 'true') {
                        this.dataSource = [];
                        this.complementos = ['Estado del Arte', 'Resultados Previos', 'Resultados Esperados', 'Metodologia', 'Marco Conceptual', 'Resumen'];
                        var aux = this.authStorageService.getFile();
                        aux.forEach(element => {
                            this.Val = true;
                            this.dataSource.push(element);
                            var val = this.complementos.indexOf(element.name);
                            this.complementos.splice(val, 1);
                        });
                        this.acti = false;
                    }
                });
            }
        });
    }

    Activar() {
        this.acti = true;
    }

    deleteFile(dato) {
        var val = this.dataSource.indexOf(dato);
        this.dataSource.splice(val, 1);
        this.authStorageService.deleteFile(dato);
        if (this.IdProyec != null) {
            this.InstructivosService.getIdProyect(this.IdProyec).subscribe(res => {
                res.forEach(element => {
                    if (element.NombreTipo == dato.name) {
                        this.InstructivosService.deletefile(res._id, dato.name).subscribe(r => {
                        });
                    }
                });
            });
        }

        if (dato.name === 'Estado del Arte') {
            this.complementos.push(dato.name);
        } else if (dato.name === 'Resultados Previos') {
            this.complementos.push(dato.name);
        } else if (dato.name === 'Resultados Esperados') {
            this.complementos.push(dato.name);
        } else if (dato.name === 'Metodologia') {
            this.complementos.push(dato.name);
        } else if (dato.name === 'Marco Conceptual') {
            this.complementos.push(dato.name);
        } else if (dato.name === 'Resumen') {
            this.complementos.push(dato.name);
        }
    }
}
