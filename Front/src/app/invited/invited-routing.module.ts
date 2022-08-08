import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {InvitedComponent} from './invited.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {SomosComponent} from './landing-page/somos/somos.component';
import {SesionGuard} from '../shared/services/sesionGuard/sesion.guard';

const routes: Routes = [
    {
        path: '',
        component: InvitedComponent,
        children: [
            {
                path: '', component: LandingPageComponent,
            },
            {
                path: 'somos',
                component: SomosComponent,
            },
            {
                path: 'sign-in',
                component: SignInComponent,
                canActivate: [SesionGuard]
            },
            {
                path: 'sign-up',
                component: SignUpComponent,
                canActivate: [SesionGuard]
            },
        ],
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule,
    ],
    providers: [SesionGuard]
})
export class InvitedRoutingModule {

}

export const routedComponents = [
    InvitedComponent,
    LandingPageComponent,
    SignInComponent,
    SignUpComponent,
];
