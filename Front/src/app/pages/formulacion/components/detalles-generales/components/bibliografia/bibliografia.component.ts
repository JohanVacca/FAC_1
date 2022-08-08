import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { filter } from 'rxjs/operators';

export interface PeriodicElement {
  descripcion: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { descripcion: 'Hydrogen' },
  { descripcion: 'Helium' },
];


@Component({
  selector: 'app-bibliografia',
  templateUrl: './bibliografia.component.html',
  styleUrls: ['../../detalles-generales.component.scss']
})
export class BibliografiaComponent implements OnInit {

  bibliografias: FormGroup
  bibliografialist = []

  constructor(public form: FormBuilder,) { }
  displayedColumns: string[] = ['descripcion', 'acciones'];
  dataSource;
  ngOnInit(): void {
    this.builder();
    this.getBibliografia();
  }
  getBibliografia() {
    this.dataSource = JSON.parse(localStorage.getItem('bibliografia'))
  }
  builder() {
    this.bibliografias = this.form.group({
      bibliografia: new FormControl('', [Validators.required]),
    })
  }

  guardarBibliografia() {
    this.bibliografialist = JSON.parse(localStorage.getItem('bibliografia'))
    if (this.bibliografialist == null) {
      this.bibliografialist = []
      this.bibliografialist.push(this.bibliografias.value)

    } else {
      this.bibliografialist.push(this.bibliografias.value)

    }
    localStorage.setItem('bibliografia', JSON.stringify(this.bibliografialist))
    this.getBibliografia();
    this.builder();

    this.bibliografialist = []
  }
  deleteBibliografia(bibliografia) {
    let bibliografiaStorage = JSON.parse(localStorage.getItem('bibliografia'))
    let bibliografialist = bibliografiaStorage.filter(f => f.bibliografia != bibliografia)
    localStorage.setItem('bibliografia', JSON.stringify(bibliografialist))
    this.getBibliografia();

  }
}
