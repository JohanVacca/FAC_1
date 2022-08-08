import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { UsersService } from '../services/users.service';
import { UserModel } from '../../../../shared/models/user.model';
import { RolesService } from 'src/app/@core/services/roles/roles.service';
import { ProfileModel } from '../../../../@core/old-models/profile.model'

interface tidentificacion {
  value: string;
  viewValue: string;
}
interface rol {
  value: string;
  viewValue: string;
}
interface cargo {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent {
  id: string;
  email: string;
  tidentificacion: string;
  identificacion: string;
  nombres: string;
  apellidos: string;
  telefono: string;
  dependencia: string;
  codigo: string;
  rol: string;
  cargo: string;
  updateuser: FormGroup;
  roleList=[];
  idload:string;

  tsidentificacion: tidentificacion[] = [
    { value: 'Cédula de Ciudadanía', viewValue: 'Cédula de Ciudadanía' },
    { value: 'Pasaporte', viewValue: 'Pasaporte' },

  ];
   cargos: cargo[] = [
    { value: 'Jefe de Dependencia', viewValue: 'JD' },
    { value: 'Comandante de Unidad', viewValue: 'CU' },
  ];
  constructor(@Inject(MAT_DIALOG_DATA) public data: EditarUserDialogData,
    private usersService: UsersService,private rolesService: RolesService, private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.load();
    this.getRoles();
    this.buildForm();

  }
  private getRoles() {
    this.rolesService.getAll()
      .subscribe((roles) => {
        this.roleList = roles;
      });
  }
  private buildForm() {
    this.updateuser = this.fb.group({
      email: new FormControl(''),
      docType: new FormControl(''),
      identification: new FormControl(''),
      names: new FormControl(''),
      surname: new FormControl(''),
      phoneNumber: new FormControl(''),
      dependency: new FormControl(''),
      codeNumber: new FormControl(''),
      role: new FormControl(''),
      positionName: new FormControl(''),

    });
  }
  load() {
    let iduser = this.data.id;
    this.usersService.getById(iduser).subscribe(
      r => {
        this.idload=r._id;
        this.id = r._id;
        this.email = r.email;
        this.tidentificacion = r.docType;
        this.identificacion = r.identification;
        this.nombres = r.profile.names;
        this.apellidos = r.profile.surname;
        this.codigo = r.codeNumber;
        this.rol = r.role._id;
      }
    )


  }
  onSubmit() {
    const datos = this.updateuser.value;
    var profile: ProfileModel = {
      names:datos.names,
      surname:datos.surname
    } 
    var User: UserModel = {
      _id: this.id,
      email:datos.email,
      codeNumber: datos.codeNumber,
      dependency:datos.dependency,
      docType:datos.docType,
      identification:datos.identification,
      phoneNumber:datos.phoneNumber,
      profile: profile,
      role:datos.role,
      positionName:datos.positionName
    }
    this.Updateuser(User);

  }
  Updateuser(user:UserModel){
     this.usersService.update(this.idload,user).subscribe( r=>{
     })
  }
}
export interface EditarUserDialogData {
  id: string;
}


