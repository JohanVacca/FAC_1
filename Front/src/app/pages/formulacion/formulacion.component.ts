import {Component, OnInit} from '@angular/core';
import {ConvocatoryService} from '../admin/convocatory/services/convocatory.service';

@Component({
  selector: 'app-formulacion',
  templateUrl: './formulacion.component.html',
  styleUrls: ['./formulacion.component.scss']
})
export class FormulacionComponent implements OnInit {
  public BotonInv: boolean;
  public BotonAdm: boolean;
  public Role: string;
  public rows = [];
  public temp = [];
  public displayedColumns: string[] = ['name', 'Descripcion', 'acciones'];
  public dataSource;

  constructor(
    private convocatoryServece: ConvocatoryService,
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  private getAll(): void {
    this.convocatoryServece.getall().subscribe((convocatorias) => this.filtro(convocatorias));
  }

  private filtro(convocatorias): void {
    this.temp = convocatorias.filter(r => r.isActive === true);
    this.dataSource = convocatorias.filter(r => r.isActive === true);
  }

  public formular(): void {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('Role');
    const user = localStorage.getItem('user');
    localStorage.clear();
    localStorage.setItem('token', token);
    localStorage.setItem('Role', role);
    localStorage.setItem('user', user);
  }
}







