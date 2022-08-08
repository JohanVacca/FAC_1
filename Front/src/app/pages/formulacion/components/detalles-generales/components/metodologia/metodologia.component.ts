import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-metodologia',
  templateUrl: './metodologia.component.html',
  styleUrls: ['../../detalles-generales.component.scss']
})
export class MetodologiaComponent implements OnInit {
  public dataResumen: string;

  ngOnInit(): void {
    this.cargarData();
  }

  public onChange(value): void {
    localStorage.setItem("metodologia", value);
  }

  private cargarData(): void {
    this.dataResumen = localStorage.getItem("metodologia");
  }
}
