import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {UsersService} from './services/users.service';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmDialogComponent} from '../Dialog/confirm-dialog/confirm-dialog.component';
import {EditDialogComponent} from './edit-dialog/edit-dialog.component';
import {SucessDialogComponent} from '../Dialog/sucess-dialog/sucess-dialog.component';
import {finalize} from 'rxjs/operators';

export class Usuarios {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class UsersComponent implements OnInit {
    public usuarios: Usuarios[] = [];
    public rows = [];
    public displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'activo', 'actions'];

    constructor(private usersService: UsersService, public dialog: MatDialog) {
    }

    ngOnInit(): void {
        this.getAllUsers();
    }

    private getAllUsers(): void {
        this.usersService.getAll()
            .subscribe((usuarios: Usuarios[]) => {
                    this.usuarios = usuarios;
                }
            );
    }

    public deleteUser(id, name): void {
        this.dialog.open(ConfirmDialogComponent, {
            ariaLabel: `Confirmar eliminación el usuario `,
            role: 'alertdialog',
            autoFocus: false,
            data: {
                icono: 'info',
                severidad: 'dialog-info',
                encabezado: 'Eliminar Usuario',
                descripcion: `¿Se encuentra seguro de eliminar el Usuario ${name}?`
            }
        }).afterClosed().subscribe(result => {
            if (result === 'true') {
                this.usersService.delete(id)
                    .pipe(finalize(() => this.getAllUsers()))
                    .subscribe(() => {});
            }
        });
    }

    public update(id, status, name): void {
        const encabezado = status ? 'Desactivar usuario' : 'Activar usuario';
        const descripcion = status ? '¿Se encuentra seguro de Desactivar el Usuario ${name}?' : '¿Se encuentra seguro de Activar el Usuario ${name}?';
        const state = !status;

        this.dialog.open(ConfirmDialogComponent, {
            ariaLabel: `${encabezado} ${name} `,
            role: 'alertdialog',
            autoFocus: false,
            data: {icono: 'info', severidad: 'dialog-info', encabezado, descripcion}
        }).afterClosed().subscribe(result => {
            if (result === 'true') {
                try {
                    this.usersService.activeOrDeactivateUser(id, state)
                        .pipe(finalize(() => {
                            this.dialog.open(SucessDialogComponent, {
                                ariaLabel: `${encabezado} ${name} Satisfactoriamente`,
                                role: 'alertdialog',
                                autoFocus: false,
                                data: {
                                    icono: 'done',
                                    severidad: 'dialog-sucess',
                                    encabezado,
                                    descripcion: `El Proceso para ${encabezado} ${name} se ha completado Satisfactoriamente`

                                }
                            }).afterClosed().subscribe(() => {
                                this.getAllUsers();
                            });
                        }))
                        .subscribe();
                } catch (error) {
                }
            } else {
                this.getAllUsers();
            }
        });
    }

    public editar(id): void {
        this.dialog.open(EditDialogComponent, {
            ariaLabel: `Editar`,
            role: 'alertdialog',
            autoFocus: false,
            data: {id}
        }).afterClosed().subscribe(() => {
            this.dialog.open(SucessDialogComponent, {
                ariaLabel: `El usuario fue Editado Satisfactoriamente`,
                role: 'alertdialog',
                autoFocus: false,
                data: {
                    icono: 'done',
                    severidad: 'dialog-sucess',
                    encabezado: `Proceso Completado`,
                    descripcion: `El Proceso para editar el usuario se ha completado Satisfactoriamente`
                }
            }).afterClosed().subscribe(() => {
                this.getAllUsers();
            });
        });
    }

}
