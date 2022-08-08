import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {finalize} from 'rxjs/operators';
import {InvCenterService} from '../../../shared/services/inv-center2/inv-center.service';

@Component({
  selector: 'app-modal-centros',
  templateUrl: './modal-centros.component.html',
  styleUrls: ['./modal-centros.component.scss']
})
export class ModalCentrosComponent implements OnInit{
  public JEFE = 'Jefe de centro';
  public NOMBRE = 'Nombre del centro de investigación';
  public name = '';
  public jefe;
  public centrosForm: FormGroup;
  public jefesDeCentro = [];

  constructor(
      private invCenterService: InvCenterService,
      private fb: FormBuilder,
      @Inject(MAT_DIALOG_DATA) public data: CentrosEdicionInterface,
      private dialogRef: MatDialogRef<ModalCentrosComponent>
  ) {
  }

  ngOnInit(): void {
    this.builder();
  }

  private builder(): void {
    this.centrosForm = this.fb.group({
      name: new FormControl(''),
      jefe: new FormControl(''),
    });

    this.name = this.data.name;
    this.jefesDeCentro = this.data.jefes;
  }

  public editarCentro(): void {
    console.log('this.name >>> ', this.name);
    console.log('this.jefe >>> ', this.jefe);
    const jefe = this.jefe ? this.jefe : this.data.jefe;
    this.invCenterService.editarCentro(this.name, jefe, this.data._id)
        .subscribe(() => this.closeModal());
  }

  public closeModal(): void {
    this.dialogRef.close();
  }

}

export interface CentrosEdicionInterface {
  centros: [];
  jefes: [];
  jefe: {
    profile: {
      names: string;
      surname: string;
    }
    _id: string;
  };
  name: string;
  _id: string;
}
