import { Injectable } from '@angular/core';
import {StateInterface} from './StateInterface';


@Injectable({
  providedIn: 'root'
})
export class SaveStateService {

  constructor() { }

  private state: StateInterface;

  setState(state: StateInterface): void {
    this.state = state;
  }

  getState(): StateInterface {
    return this.state;
  }
}
