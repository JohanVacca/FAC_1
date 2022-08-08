import {Component, OnInit} from '@angular/core';
import {ConvocatoryService} from './services/convocatory.service';
import {Router} from '@angular/router';
import {AuthService} from '../../../@core/services/auth/auth.service';
import {ConfirmDialogComponent, ConfirmacionDialogData} from '../Dialog/confirm-dialog/confirm-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {EditDialogConComponent, EditarConvDialogData} from './edit-dialog-con/edit-dialog-con.component';
import {ConvoCreateComponent} from './convo-create/convo-create.component';
import {SucessDialogComponent, SucessDialogData} from '../Dialog/sucess-dialog/sucess-dialog.component';
import {Roles} from '../../../@core/enums/roles.enum';
import {AuthStorageService} from '../../../@core/services/storage/auth-storage/auth-storage.service'

@Component({
    selector: 'app-convocatory',
    templateUrl: './convocatory.component.html',
    styleUrls: ['./convocatory.component.scss']
})
export class ConvocatoryAdminComponent implements OnInit {

    Role: string
    rows = [];
    temp = [];
    role = Roles

    displayedColumns: string[] = ['name', 'Descripción', 'activo', 'acciones'];
    dataSource;

    constructor(
        private convocatoryServece: ConvocatoryService,
        private router: Router,
        public authService: AuthService,
        public dialog: MatDialog,
        private authStorageService: AuthStorageService,
    ) {
    }

    ngOnInit(): void {
        this.Role = this.authStorageService.getRole();
        this.getAll();
    }

    getAll() {
        this.convocatoryServece.getall()
            .subscribe((convocatorias) => {
                this.temp = convocatorias;
                this.dataSource = this.temp;
            });
    }

    public goToProject() {
        this.router.navigate(['project']);
    }

    update(id, status, name) {
        let encabezado
        let descripcion
        let state
        if (status) {
            encabezado = `Desactivar Convenio`
            descripcion = `¿Se encuentra seguro de que quiere Desactivar la convenio "${name}"?`
            state = false;
        } else {
            encabezado = `Activar Convenio`
            descripcion = `¿Se encuentra seguro de que quiere Activar la convenio "${name}"?`
            state = true;
        }
        let datos: ConfirmacionDialogData = {
            icono: 'info',
            severidad: 'dialog-info',
            encabezado: encabezado,
            descripcion: descripcion
        }
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
            ariaLabel: `${encabezado} ${name} `,
            role: 'alertdialog',
            autoFocus: false,
            data: datos

        });
        dialogRef.afterClosed().subscribe(result => {
            if (result == "true") {
                try {
                    this.convocatoryServece.activeOrDeactivateUser(id, state)

                    this.getAll();

                    let datossucess: SucessDialogData = {
                        icono: 'done',
                        severidad: 'dialog-sucess',
                        encabezado: `${encabezado}`,
                        descripcion: `El Proceso para ${encabezado} ${name} se ha completado Satisfactoriamente`

                    }
                    const dialogRef = this.dialog.open(SucessDialogComponent, {
                        ariaLabel: `${encabezado} ${name} Satisfactoriamente`,
                        role: 'alertdialog',
                        autoFocus: false,
                        data: datossucess
                    });
                    dialogRef.afterClosed().subscribe(result => {
                        this.getAll();

                    });
                } catch (error) {

                }
            } else {
                this.getAll();
            }
        });
        this.getAll();
    }

    deleteConvocatoria(id, name) {
        let datos: ConfirmacionDialogData = {
            icono: 'info',
            severidad: 'dialog-info',
            encabezado: 'Eliminar Convenio',
            descripcion: `¿Se encuentra seguro de que quiere eliminar la ${name}?`
        }
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
            ariaLabel: `Confirmar eliminación`,
            role: 'alertdialog',
            autoFocus: false,
            data: datos

        });
        dialogRef.afterClosed().subscribe(result => {
            if (result == "true") {
                this.convocatoryServece.delete(id).subscribe((result) => {
                    this.getAll();
                });
            } else {

            }
        });
    }

    editar(id) {
        let datos: EditarConvDialogData = {
            id: id
        }
        const dialogRef = this.dialog.open(EditDialogConComponent, {
            ariaLabel: `kekeekekeke`,
            role: 'alertdialog',
            autoFocus: false,
            data: datos
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result == "true") {
                this.getAll();
            } else {

            }
        });
    }

    openDigCreate() {
        /*let dato:ConvoCreateData = {
         }*/
        const dialogRef = this.dialog.open(ConvoCreateComponent, {
            ariaLabel: `kekeekekeke`,
            role: 'alertdialog',
            autoFocus: false
        });
        dialogRef.afterClosed().subscribe(result => {
            this.getAll();
        });
    }

}
