import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-resumen',
    templateUrl: './resumen.component.html',
    styleUrls: ['../../detalles-generales.component.scss']
})
export class ResumenComponent implements OnInit {
    public dataResumen: string;

    ngOnInit(): void {
        this.cargarData();
    }

    public onChange(value): void {
        localStorage.setItem('resumen', value);
    }

    private cargarData(): void {
        this.dataResumen = localStorage.getItem('resumen');
    }
}
