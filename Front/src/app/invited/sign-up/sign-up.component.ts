//import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { docTypes } from '../../@core/consts/doc-types.const';
import {map, startWith} from 'rxjs/operators';
import {Observable} from 'rxjs';
import { PasswordValidation } from './password-validation';
import { RolesService } from '../../@core/services/roles/roles.service';
import { RoleModel } from 'src/app/shared/models/role.model';
import { AlertModel } from '../../@core/old-models/alert.model';
import { UserModel } from '../../shared/models/user.model';
import { alertStatuses } from '../../@core/consts/alert-statuses.const';
import { AuthService } from 'src/app/@core/services/auth/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = ['Cédula de Ciudadanía', 'Pasaporte'];
  filteredOptions: Observable<string[]>;
  
  hide= true;
  hide2= true;
  defaultRole: RoleModel;
  docTypes = docTypes;
  registerForm: FormGroup;
  showAlertBox = false;
  alert: AlertModel;

  constructor(
    private fb: FormBuilder,
    private roleService: RolesService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.getDefaultRole();
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  buildForm() {
    this.registerForm = this.fb.group({
      email: ['', Validators.compose(
        [
          Validators.required,
          Validators.email,
        ],
      )],
      docType: ['', [Validators.required]],
      identification: ['', [Validators.required]],
      names: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      password: ['', Validators.compose(
        [
          Validators.required,
          Validators.minLength(6)
        ])],
      confirmPassword: ['', Validators.compose(
        [
          Validators.required,
          Validators.minLength(6)
        ])],
    },
      {
        validator: PasswordValidation.MatchPassword,
      }) ;
  }

  
  docType = () => this.registerForm.controls.docType;
  email = () => this.registerForm.controls.email;
  identification = () => this.registerForm.controls.identification;
  names = () => this.registerForm.controls.names;
  surname = () => this.registerForm.controls.surname;
  password = () => this.registerForm.controls.password;
  confirmPassword = () => this.registerForm.controls.confirmPassword;

  getDefaultRole() {
    this.roleService.getDefaultRole()
      .subscribe((role) => {
        this.defaultRole = role;
        console.log('default role :: ', role)
      });
  }

  onSubmit() {
    const newUser = this.getNewUserModel();
    console.log('newUser:: ', newUser)

    this.authService.signUp(newUser)
      .subscribe(
        _ => this.showSuccessAlert(),
        (err) => (err.status === 409) ? this.showUserExistsAlert() : this.showGeneralError()
      );
    this.router.navigate(['home/sign-in']);
  }

  getNewUserModel(): Partial<UserModel> {
    const docType = this.docType().value;
    const email = this.email().value.toLowerCase();
    const identification = this.identification().value;
    const names = this.names().value;
    const surname = this.surname().value;
    const password = this.password().value;
    const isUser = true;

    if (!this.defaultRole._id) {
      console.error('Default role not provided');
      this.showGeneralError();
    }

    return {
      docType,
      email,
      identification,
      profile: {
        names,
        surname,
      },
      password,
      isUser,
      role: this.defaultRole._id
    };
  }

  showGeneralError() {
    this.showAlert();
    this.alert = {
      type: alertStatuses.danger,
      message: 'No se pudo realizar la acción correctamente',
    };
  }

  showSuccessAlert() {
    this.showAlert();
    this.alert = {
      type: alertStatuses.success,
      message: 'Usuario registrado existosamente, ' +
        'deberá esperar autorización del administrador para poder iniciar sesión.',
    };
  }

  showUserExistsAlert() {
    this.showAlert();
    this.alert = {
      type: alertStatuses.danger,
      message: 'El usuario ingresado ya existe',
    };
  }

  private showAlert() {
    this.showAlertBox = true;
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
}
