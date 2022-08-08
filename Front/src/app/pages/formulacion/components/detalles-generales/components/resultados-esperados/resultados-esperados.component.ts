import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultados-esperados',
  templateUrl: './resultados-esperados.component.html',
  styleUrls: ['../../detalles-generales.component.scss']
})
export class ResultadosEsperadosComponent implements OnInit {
  public dataResumen: string;

  ngOnInit(): void {
    this.cargarData();
  }

  public onChange(value): void {
    localStorage.setItem("resultadosEsperados", value);
  }

  private cargarData(): void {
    this.dataResumen = localStorage.getItem("resultadosEsperados")
  }
}
