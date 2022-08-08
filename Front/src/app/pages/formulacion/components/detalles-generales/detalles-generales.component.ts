import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detalles-generales',
  templateUrl: './detalles-generales.component.html',
  styleUrls: ['./detalles-generales.component.scss']
})
export class DetallesGeneralesComponent implements OnInit {


  @Input()
  textoHijo2:string;

  constructor() { }

  ngOnInit(): void {
  }

}
