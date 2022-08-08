import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AgregarProductoComponent, AgregarProductoData } from './agregar-producto/agregar-producto.component';
import { ActivatedRoute, Params } from '@angular/router';
import { filter } from 'rxjs/operators';




@Component({
  selector: 'app-productos-esperados',
  templateUrl: './productos-esperados.component.html',
  styleUrls: ['../../presupuesto.component.scss']
})
export class ProductosEsperadosComponent implements OnInit {

  Convocatoria;
  displayedColumns: string[] = ['tipo', 'rubro', 'descripcion', 'fuerza', 'otro', 'acciones'];
  dataSource;

  constructor(public dialogo: MatDialog,
    private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    this.dataSource = JSON.parse(localStorage.getItem('productosEsperados'))
  }
  agregarProducto() {
    let cv = this.rutaActiva.snapshot.params;
    this.Convocatoria = cv.id;
    let datos: AgregarProductoData = {
      actualizar: false,
      idCon: this.Convocatoria,
    }
    const dialogRef = this.dialogo.open(AgregarProductoComponent, {
      data: datos
    })
    dialogRef.afterClosed().subscribe(r => {
      this.loadData();
    })
  }
  deleteProducto(objeto) {
    let storagelist = JSON.parse(localStorage.getItem('productosEsperados'))
    let filtroproductos = storagelist.filter(r => r.descripcion + r.tipoProducto != objeto.descripcion + objeto.tipoProducto)
    localStorage.setItem('productosEsperados', JSON.stringify(filtroproductos))
    this.loadData();
  }

  updateProducto(objeto) {
    let cv = this.rutaActiva.snapshot.params;
    this.Convocatoria = cv.id;
    let datos: AgregarProductoData = {
      actualizar: true,
      idCon: this.Convocatoria,
      tipoProducto: objeto.tipoProducto,
      rubroSeleccionado: objeto.rubroRelacionado,
      descripcion: objeto.descripcion,
      PartFuerza: objeto.partFuerza,
      PartOtros: objeto.partOtros,
    }
    const dialogRef = this.dialogo.open(AgregarProductoComponent, {
      data: datos
    })
    dialogRef.afterClosed().subscribe(r => {
      this.loadData();
    })
  }

}
