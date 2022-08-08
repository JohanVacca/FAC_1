import {Component, OnInit,Input, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConvoNewComponent } from './components/convo-new/convo-new.component'
import { AuthStorageService } from '../../../../@core/services/storage/auth-storage/auth-storage.service'

@Component({
  selector: 'app-convo-create',
  templateUrl: './convo-create.component.html',
  styleUrls: ['./convo-create.component.scss']
})
export class ConvoCreateComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = false;
  idconvocatoria:{};
  isOptional = false;
  Name:string = '';
  message = false;

  constructor(
  @Inject(MAT_DIALOG_DATA) public data: ConvoCreateData,
    private _formBuilder: FormBuilder,
    private rutaActiva: ActivatedRoute,
    private convoNewComponent: ConvoNewComponent,
    private authStorageService: AuthStorageService
    ) { }
  
  ngOnInit() {
    this.Name = '';
    this.message = false;
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: [this.Name, Validators.required]
    });
  }

  agregar(){
    this.convoNewComponent.agregar();
  }
  receiveMensage($event){
    this.message = $event;
  }

}


export interface ConvoCreateData {
  id: string;
}
