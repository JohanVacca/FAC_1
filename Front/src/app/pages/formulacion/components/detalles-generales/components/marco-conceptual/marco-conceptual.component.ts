import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-marco-conceptual',
    templateUrl: './marco-conceptual.component.html',
    styleUrls: ['../../detalles-generales.component.scss']
})
export class MarcoConceptualComponent implements OnInit {
    public dataResumen: string;

    ngOnInit(): void {
        this.cargarData();
    }

    public onChange(value): void {
        localStorage.setItem('marcoConceptual', value);
    }

    private cargarData(): void {
        this.dataResumen = localStorage.getItem('marcoConceptual');
    }
}
