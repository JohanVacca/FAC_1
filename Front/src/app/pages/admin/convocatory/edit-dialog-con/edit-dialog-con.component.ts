import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConvocatoryService } from '../services/convocatory.service';
import { ConModel } from '../../../../shared/models/Convocatoria.model';

@Component({
  selector: 'app-edit-dialog-con',
  templateUrl: './edit-dialog-con.component.html',
  styleUrls: ['./edit-dialog-con.component.scss']
})
export class EditDialogConComponent {

  name: string;
  Descripcion: string;
  updateConv: FormGroup;
  idload:string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: EditarConvDialogData,
    private convocatoryService: ConvocatoryService, private fb: FormBuilder,) { }

  
  ngOnInit(): void {
    this.buildForm();
    this.getAll();
  }
  
  getAll(){
    this.convocatoryService.getById(this.data.id).subscribe( r=>{
      this.Descripcion = r.Descripcion;
      this.name = r.name;
     })
  }

  private buildForm() {
    this.updateConv = this.fb.group({
      name: new FormControl(this.name),
      Descripcion: new FormControl(this.Descripcion),
    });
  }

  onSubmit() {
    const datos = this.updateConv.value;

    this.UpdateConv(datos);

  }
  UpdateConv(user:ConModel){
    this.convocatoryService.update(this.data.id,user).subscribe( r=>{
    })
 }
}

export interface EditarConvDialogData {
  id: string;
}
