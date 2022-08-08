import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-estado-arte',
    templateUrl: './estado-arte.component.html',
    styleUrls: ['../../detalles-generales.component.scss']
})
export class EstadoArteComponent implements OnInit {
    public dataResumen: string;

    ngOnInit(): void {
        this.cargarData();
    }

    public onChange(value): void {
        localStorage.setItem('estadoArte', value);
    }

    private cargarData(): void {
        this.dataResumen = localStorage.getItem('estadoArte');
    }
}
