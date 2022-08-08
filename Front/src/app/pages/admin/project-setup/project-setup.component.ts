import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-project-setup',
  templateUrl: './project-setup.component.html',
  styleUrls: ['./project-setup.component.scss']
})
export class ProjectSetupComponent implements OnInit {
idconvocatoria:{};
  constructor(private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.idconvocatoria= this.rutaActiva.snapshot.params;
  }

}
