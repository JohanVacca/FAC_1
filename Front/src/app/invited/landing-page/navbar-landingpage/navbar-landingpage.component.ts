import {Component, OnInit} from '@angular/core';


@Component({
    selector: 'app-navbar-landingpage',
    templateUrl: './navbar-landingpage.component.html',
    styleUrls: ['./navbar-landingpage.component.scss']
})
export class NavbarLandingpageComponent {

    public currentSection = 'home';

    windowScroll() {
        const navbar = document.getElementById('navbar');
        if (document.body.scrollTop >= 50 || document.documentElement.scrollTop > 50) {
            navbar.classList.add('nav-sticky');
        } else {
            navbar.classList.remove('nav-sticky');
        }
    }

    onSectionChange(sectionId: string) {
        this.currentSection = sectionId;
    }

    toSomos() {
        document.getElementById('somos').scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }

    toModelo() {
        document.getElementById('model').scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }

    toFunciones() {
        document.getElementById('functions').scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }

    toNormativas() {
        document.getElementById('capacidades').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    toPublicaciones() {
        document.getElementById('gallery').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    toMision() {
        document.getElementById('mision').scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }

    toContacto() {
        document.getElementById('contact').scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }

    toConvocatorias() {
        document.getElementById('convocatorias').scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }
}
