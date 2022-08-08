import { Component, OnInit } from '@angular/core';
import { InvTeamPersonPositionService } from '../../../../../shared/services/inv-team-person-position/inv-team-person-position.service'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonSimpleModel } from '../../../../../shared/models/common-simple.model';
import { ActivatedRoute, Params } from '@angular/router';

export interface Datos {
  descr: string;
  Convocatoria: String;
}

@Component({
  selector: 'app-inv-team-person-positions',
  templateUrl: './inv-team-person-positions.component.html',
  styleUrls: ['../../project-setup.component.scss']
})
export class InvTeamPersonPositionsComponent implements OnInit {
  addentries: FormGroup;
  Convocatoria: string;
  projectEntries: CommonSimpleModel[] = [];

  displayedColumns: string[] = ['position', 'name'];

  constructor(
    private invTeamPersonPositionService: InvTeamPersonPositionService,
    private fb: FormBuilder,
    private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAll();
    this.buildForm();
  }
  private buildForm() {
    this.addentries = this.fb.group({
      descr: new FormControl('', [Validators.required]),
      Convocatoria: new FormControl(''),

    });
  }
  getAll() {
    let cv = this.rutaActiva.snapshot.params;
    this.Convocatoria = cv.id;

    this.invTeamPersonPositionService.getIdConv(this.Convocatoria).subscribe(r => {
      this.projectEntries = r
    })

  }
  onProductTypeDeleted(item) {
    this.invTeamPersonPositionService.delete(item).subscribe(r => {
      this.getAll()
    })
  }
  agregar() {
    const datos = this.addentries.value;
    var dato = {
      descr: datos.descr,
      Convocatoria: this.Convocatoria
    }
    this.invTeamPersonPositionService.add(dato).subscribe(r => { 
      this.getAll();
      this.buildForm();
    })
  }
}
