import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ProjectService} from 'src/app/shared/services/Proyect/project.service';

@Component({
    selector: 'app-proyectos',
    templateUrl: './proyectos.component.html',
    styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {

    public displayedColumns: string[] = ['Titulo', 'Investigador', 'Gestor', 'acciones'];
    public dataSource = [];

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: VistaProyectosData,
        private projectService: ProjectService,
        public dialogRef: MatDialogRef<ProyectosComponent>) {
    }

    ngOnInit(): void {
        this.getAll(this.data.idConvocatoria);
    }

    getAll(id): void {
        const {_id} = JSON.parse(localStorage.getItem('user'));
        const newArray = [];
        this.projectService.getIdConv(id)
            .subscribe(response => {
                response.Proyectos.forEach(project => {
                    if (project.UserId._id === _id) {
                        newArray.push(project);
                        this.dataSource = [...newArray];
                    }
                });
            });
    }

    cerrardialog(): void {
        this.dialogRef.close(true);
    }
}

export interface VistaProyectosData {
    idConvocatoria: string;
}
