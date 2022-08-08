import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-resultados-previos',
    templateUrl: './resultados-previos.component.html',
    styleUrls: ['./resultados-previos.component.scss']
})
export class ResultadosPreviosComponent implements OnInit {
    public dataResumen: string;

    ngOnInit(): void {
        this.cargarData();
    }

    public onChange(value): void {
        localStorage.setItem('resultadosPrevios', value);
    }

    private cargarData(): void {
        this.dataResumen = localStorage.getItem('resultadosPrevios');
    }
}
