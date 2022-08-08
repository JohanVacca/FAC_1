import { NgModule } from '@angular/core';
// import { ThemeModule } from '../@theme/theme.module';
// import { Ng2SmartTableModule } from 'ng2-smart-table';
import { InvitedRoutingModule, routedComponents } from './invited-routing.module';
import { FooterLandingpageComponent } from './landing-page/footer-landingpage/footer-landingpage.component';
import { ContactLandingpageComponent } from './landing-page/contact-landingpage/contact-landingpage.component';
import { MisionComponent } from './landing-page/mision/mision.component';
import { GaleryComponent } from './landing-page/galery/galery.component';
import { QuestionsComponent } from './landing-page/questions/questions.component';
import { ModelInvestigationComponent } from './landing-page/model-investigation/model-investigation.component';
import { InfoFacComponent } from './landing-page/info-fac/info-fac.component';
import { SomosComponent } from './landing-page/somos/somos.component';
import { FunctionsComponent } from './landing-page/functions/functions.component';
import { NormativityComponent } from './landing-page/normativity/normativity.component';
import { SliderComponent } from './landing-page/slider/slider.component';
import { NavbarLandingpageComponent } from './landing-page/navbar-landingpage/navbar-landingpage.component';
import { ConvocatoryComponent } from './landing-page/convocatory/convocatory.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
// import { SharedModule } from '../shared/shared.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CommonModule } from "@angular/common";
//MODULOS MATERIAL
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { AuthService } from '../@core/services/auth/auth.service';
import { SharedModule } from '../shared/shared.module';
import { ApiService, AuthStorageService, LocalStorageService, MemoryStorageService, RequestService } from '../@core/services';
import { AuthGuardService } from '../@core/services/guards/auth-guard.service';

import {MatAutocompleteModule} from '@angular/material/autocomplete';



@NgModule({
  imports: [
    // ThemeModule,
    CommonModule,
    InvitedRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    ScrollToModule,
    // Ng2SmartTableModule,
    MatAutocompleteModule
    
  ],
  declarations: [
    ...routedComponents,
    FooterLandingpageComponent,
    ContactLandingpageComponent,
    MisionComponent,
    GaleryComponent,
    QuestionsComponent,
    ModelInvestigationComponent,
    InfoFacComponent,
    SomosComponent,
    FunctionsComponent,
    NormativityComponent,
    SliderComponent,
    NavbarLandingpageComponent,
    ConvocatoryComponent,
    PasswordResetComponent,
    SignInComponent,
    SignUpComponent
  ],
  providers: [
    ApiService,
    RequestService,
    AuthService,
    AuthStorageService,
    LocalStorageService,
    MemoryStorageService,
    // AuthGuardService 

  ],
})
export class InvitedModule { }
