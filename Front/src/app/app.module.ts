import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ApiService, AuthStorageService, LocalStorageService, MemoryStorageService, RequestService} from './@core/services';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {ProjectService} from './shared/services/Proyect/project.service';
import {MatTooltipModule} from '@angular/material/tooltip';
import {SharedModule} from './shared/shared.module';
import { NecesidadesModule } from './pages/necesidades/necesidades.module';
import { PropiedadintModule } from './pages/propiedadint/propiedadint.module';
@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        HttpClientModule,
        NgbModule,
        MatTooltipModule,
        SharedModule,
        NecesidadesModule,
        PropiedadintModule
    ],
    providers: [
        ApiService,
        RequestService,
        AuthStorageService,
        LocalStorageService,
        MemoryStorageService,
        ProjectService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
