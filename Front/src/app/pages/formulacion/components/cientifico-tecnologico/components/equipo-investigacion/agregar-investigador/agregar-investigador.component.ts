import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../../../../../@core/services/auth/auth.service';
import {RolesService} from '../../../../../../../@core/services/roles/roles.service';
import {finalize} from 'rxjs/operators';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
    selector: 'app-agregar-investigador',
    templateUrl: './agregar-investigador.component.html',
    styleUrls: ['./agregar-investigador.component.scss']
})
export class AgregarInvestigadorComponent implements OnInit {

    public agregarInvestigador: FormGroup;

    constructor(
        public form: FormBuilder,
        private authService: AuthService,
        private dialogRef: MatDialogRef<AgregarInvestigadorComponent>,
        private roleService: RolesService) {
    }

    ngOnInit(): void {
        this.initForm();
    }

    public crearInvestigador(): void {
        const {nombres: names, apellido: surname, identificacion: identification} = this.agregarInvestigador.value;
        const password = 'Pruebas123!';
        const isUser = false;
        const isActive = true;
        const fakeUser = {
            docType: 'Cédula de Ciudadanía',
            email: `userfake.${identification}@test.com`,
            identification,
            password,
            profile: {names, surname},
            names,
            surname,
            isUser,
            isActive
        };
        this.getDefaultRole(fakeUser);
    }

    public closeModal(action): void {
        this.dialogRef.close(action);
    }

    private initForm(): void {
        this.agregarInvestigador = this.form.group({
            nombres: new FormControl('', [Validators.required]),
            apellido: new FormControl('', [Validators.required]),
            identificacion: new FormControl('', [Validators.required]),
        });
    }

    private getDefaultRole(fakeUser): void {
        this.roleService.getDefaultRole()
            .pipe(finalize(() => this.createUserFake(fakeUser)))
            .subscribe(role => {
                fakeUser.role = role._id;
            });
    }

    private createUserFake(fakeUser): void {
        this.authService.signUp(fakeUser)
            .pipe(finalize(() => this.closeModal(true)))
            .subscribe(() => {});
    }
}
