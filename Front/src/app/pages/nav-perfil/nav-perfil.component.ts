import {Component, OnInit} from '@angular/core';
import {AuthStorageService} from '../../@core/services';
import {AuthService} from '../../@core/services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-nav-perfil',
    templateUrl: './nav-perfil.component.html',
    styleUrls: ['./nav-perfil.component.scss']
})
export class NavPerfilComponent implements OnInit {

    public UserName = 'Cargando';
    public rol = 'NN';

    constructor(
        private authService: AuthService,
        private authStorageService: AuthStorageService,
        private router: Router
    ) {
    }

    ngOnInit(): void {
        this.loadName();
    }

    private loadName(): void {
        const { profile } = JSON.parse(localStorage.getItem('user'));
        this.UserName = `${profile.names} ${profile.surname}`;
        this.rol = localStorage.getItem('Role');
    }

    public logOut(): void {
        this.authService.signOut();
        this.router.navigate(['home/sign-in']);
    }
}
