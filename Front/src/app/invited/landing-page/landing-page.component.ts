import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { stringify } from 'querystring';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html'
})

export class LandingPageComponent implements OnInit {


  
  public isHiddenNormatividad = true;
  public isHiddenConvocatorias = true;
  public isHiddenSomos = true;
  public isHiddenSomosInfo = true;
  public isHiddenModeloInvestigacion = true;
  public isHiddenFunciones = true;
  public isHiddenCapacidades = true;
  public isHiddenPublicaciones = true;
  public isHiddenMision = true;
  public isHiddenContacto = true;
  images: Array<string>;


  constructor(private router: Router) {
  }

  ngOnInit() {
    this.isHiddenSomos = false;
    this.isHiddenSomosInfo = false;
    this.isHiddenModeloInvestigacion = false;
    this.isHiddenFunciones = false;
    this.isHiddenCapacidades = false;
    this.isHiddenPublicaciones = false;
    this.isHiddenMision = false;
    this.isHiddenContacto = false;
  }

  public displayCounter(opcion) {
    switch (opcion) {
      case 'somos':
        this.openHome();
        break;
      case 'modelo':
        this.openHome();
        break;
      case 'mision':
        this.openHome();
        break;
      case 'publicaciones':
        this.openHome();
        break;
      case 'normatividad':
        this.openNormatividad();
        break;
      case 'funciones':
        this.openHome();
        break;
      case 'contacto':
        this.openHome();
        break;
      case 'convocatoria':
        this.openConvocatoria();
        break;
      case 'login':
        this.openLogin();
        break;
    }

  }

  public openConvocatoria() {
    this.isHiddenConvocatorias = false;
    this.isHiddenNormatividad = true;
    this.isHiddenSomos = true;
    this.isHiddenSomosInfo = true;
    this.isHiddenModeloInvestigacion = true;
    this.isHiddenFunciones = true;
    this.isHiddenCapacidades = true;
    this.isHiddenPublicaciones = true;
    this.isHiddenMision = true;
    this.isHiddenContacto = true;
  }

  public openNormatividad() {
    this.isHiddenNormatividad = false;
    this.isHiddenConvocatorias = true;
    this.isHiddenSomos = true;
    this.isHiddenSomosInfo = true;
    this.isHiddenModeloInvestigacion = true;
    this.isHiddenFunciones = true;
    this.isHiddenCapacidades = true;
    this.isHiddenPublicaciones = true;
    this.isHiddenMision = true;
    this.isHiddenContacto = true;
  }

  public openHome() {
    this.isHiddenNormatividad = true;
    this.isHiddenConvocatorias = true;
    this.isHiddenSomos = false;
    this.isHiddenSomosInfo = false;
    this.isHiddenModeloInvestigacion = false;
    this.isHiddenFunciones = false;
    this.isHiddenCapacidades = false;
    this.isHiddenPublicaciones = false;
    this.isHiddenMision = false;
    this.isHiddenContacto = false;
  }

  public openLogin() {
    this.router.navigate(['/home/sign-in']);
  }

currentSection = 'home';
  windowScroll() {
    const navbar = document.getElementById('navbar');
    if (document.body.scrollTop >= 50 || document.documentElement.scrollTop > 50) {
      navbar.classList.add('nav-sticky');
    } else {
      navbar.classList.remove('nav-sticky');
    }
  }

  toggleMenu() {
    document.getElementById('navbarCollapse').classList.toggle('show');
  }

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }
}

