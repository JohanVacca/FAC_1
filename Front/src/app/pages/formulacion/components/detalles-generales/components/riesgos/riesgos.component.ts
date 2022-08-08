import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Planteamiento, Riesgo, StateInterface} from '../../../../../../shared/services/saveStateService/StateInterface';
import {SaveStateService} from '../../../../../../shared/services/saveStateService/save-state.service';

@Component({
  selector: 'app-riesgos',
  templateUrl: './riesgos.component.html',
  styleUrls: ['./riesgos.component.scss']
})
export class RiesgosComponent implements OnInit {

  public riskForm: FormGroup;
  public riskList: Riesgo[] = [];

  private state: StateInterface;

  constructor(public form: FormBuilder, private saveStateService: SaveStateService) { }

  ngOnInit(): void {
    this.buildForm();
  }

  public removeRisk(id): void {
    this.riskList.splice(id, 1);
    this.updateState();
  }

  public addRisk(): void {
    this.state = this.saveStateService.getState();
    const risk: Riesgo = this.riskForm.value;
    this.riskList.push(risk);
    this.riskForm.reset();
    this.updateState();
  }

  private buildForm(): void {
    this.riskForm = this.form.group({
      descripcion: new FormControl('', [Validators.required]),
      consecuencia: new FormControl('', [Validators.required]),
      accion: new FormControl('', [Validators.required]),
    });
  }

  private updateState(): void {
    this.state = {
      ...this.state,
      cuartoPaso: {
        ...this.state.cuartoPaso,
        riesgos: this.riskList
      }
    };
    this.saveStateService.setState(this.state);
  }

}
