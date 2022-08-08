import {Component, ChangeDetectorRef, OnDestroy} from '@angular/core';
import {take, tap} from 'rxjs/operators';
import {MENU_ADMIN_ITEMS, MENU_EVALUATOR_ITEMS, MENU_INVESTIGADOR_ITEMS, MENU_RESPONSABLE_ITEMS} from '../pages/pages-menu';
import {Roles} from '../@core/enums/roles.enum';
import {AuthService} from '../@core/services/auth/auth.service';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
    selector: 'app-pages',
    templateUrl: './pages.component.html',
    styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnDestroy {

    public mobileQuery: MediaQueryList;
    public userMenu = [{title: 'Perfíl'}, {title: 'Cerrar Sesión', action: 'signOut()'}];
    public roles = Roles;
    public shouldRun = true;
    public fillerNav;

    constructor(private authService: AuthService, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
        setTimeout(() => {
            this.authService.getUserRoleName()
                .pipe(
                    tap(role => role ? this.showMenu(role) : this.authService.signOut()),
                    take(1)
                ).subscribe();
        }, 2000);
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }

    private _mobileQueryListener: () => void;

/**
 * If the role is admin, show the admin menu, if the role is investigator, show the investigator menu,
 * etc.
 * @param {Roles} role - Roles
 */
    showMenu(role: Roles): void {
        switch (role) {
            case Roles.Admin:
                this.fillerNav = MENU_ADMIN_ITEMS;
                break;
            case Roles.Investigator:
                this.fillerNav = MENU_INVESTIGADOR_ITEMS;
                break;
            case Roles.Responsable:
                this.fillerNav = MENU_RESPONSABLE_ITEMS;
                break;                
            case Roles.Evaluator:
                this.fillerNav = MENU_EVALUATOR_ITEMS;
                break;
            default:
                this.fillerNav = MENU_INVESTIGADOR_ITEMS;
        }
    }

    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
}
