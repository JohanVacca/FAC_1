import { Component, OnInit,Output, EventEmitter, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConvocatoryService } from '../../../services/convocatory.service';
import { ConModel } from '../../../../../../shared/models/Convocatoria.model';
import { AuthStorageService } from '../../../../../../@core/services/storage/auth-storage/auth-storage.service'

@Component({
  selector: 'app-convo-new',
  templateUrl: './convo-new.component.html',
  styleUrls: ['./convo-new.component.scss']
})
export class ConvoNewComponent {

  @Output()
  textoCambiado: EventEmitter<string> = new EventEmitter<string>();
  Flag:boolean = true;
  name: string;
  Descripcion: string;
  updateConv: FormGroup;
  idload:string;

  message:boolean = true;
  @Output() messageEvent = new EventEmitter<boolean>();

  constructor(
    private convocatoryService: ConvocatoryService,
    private fb: FormBuilder,
    private authStorageService: AuthStorageService,
    ) { }
  
  ngOnInit(): void {
    this.buildForm();
  }
  
  private buildForm() {
    this.updateConv = this.fb.group({
      name: new FormControl(''),
      Descripcion: new FormControl(''),
    });
  }

  sendMessage(){
    this.messageEvent.emit(this.message)
  }

  onSubmit() {
    const datos = this.updateConv.value;
    this.messageEvent.emit(this.message)
    //this.agregar();
  }

  agregar(){
    const datos = this.updateConv.value;
    this.convocatoryService.add(datos).subscribe(r=>{
       this.authStorageService.setConvo(r._id);
    })
    this.Flag = false;
    
    this.messageEvent.emit(this.message)
  }
}
  

