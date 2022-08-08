import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjectService} from 'src/app/shared/services/Proyect/project.service';
import {Actividad} from '../../../../shared/services/saveStateService/StateInterface';

@Component({
    selector: 'app-seguimiento',
    templateUrl: './seguimiento.component.html',
    styleUrls: ['./seguimiento.component.scss']
})
export class SeguimientoComponent {
    public cronograma: Actividad[];

    constructor(private rutaActiva: ActivatedRoute, private projectService: ProjectService) {
    }
}
