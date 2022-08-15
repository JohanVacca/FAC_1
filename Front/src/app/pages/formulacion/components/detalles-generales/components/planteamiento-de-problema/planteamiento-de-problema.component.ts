import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SaveStateService} from '../../../../../../shared/services/saveStateService/save-state.service';
import {Planteamiento, StateInterface} from '../../../../../../shared/services/saveStateService/StateInterface';

@Component({
  selector: 'app-planteamiento-de-problema',
  templateUrl: './planteamiento-de-problema.component.html',
  styleUrls: ['./planteamiento-de-problema.component.scss']
})
export class PlanteamientoDeProblemaComponent implements OnInit {

  public planteamientoForm: FormGroup;
  private state: StateInterface;

  constructor(public form: FormBuilder, private saveStateService: SaveStateService) { }

  ngOnInit(): void {
    this.buildForm();
  }

  public agregarPlanteamiento(): void {
    this.state = this.saveStateService.getState();
    const planteamiento: Planteamiento = this.planteamientoForm.value;
    this.state = {
      ...this.state,
      cuartoPaso: {
        ...this.state.cuartoPaso,
        planteamiento
      }
    };
    this.saveStateService.setState(this.state);
  }

  private buildForm(): void {
    this.planteamientoForm = this.form.group({
      planteamiento: new FormControl('', [Validators.required]),
      enQueConsiste: new FormControl('', [Validators.required]),
      porQueSeRequiere: new FormControl('', [Validators.required]),
      paraQueDesarrollarlo: new FormControl('', [Validators.required]),
      beneficiosFAC: new FormControl('', [Validators.required]),
      utilidad: new FormControl(0, [Validators.required]),
      inversion: new FormControl(0, [Validators.required]),
    });
  }

}