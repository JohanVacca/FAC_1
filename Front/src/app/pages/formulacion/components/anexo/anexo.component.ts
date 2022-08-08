import { Component, ViewChild, ElementRef } from '@angular/core';
import { AuthStorageService } from '../../../../@core/services/storage/auth-storage/auth-storage.service';
import { InstructivosService } from '../../../../@core/services/instructivos/FormIns.service';
import { SafeResourceUrl } from '@angular/platform-browser';
import { VerIntructiveComponent, VerIntructiveData } from '../../../../pages/instructional/ver-intructive/ver-intructive.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-anexo',
  templateUrl: './anexo.component.html',
  styleUrls: ['./anexo.component.scss']
})
export class AnexoComponent {

  @ViewChild('fileInput') fileInput: ElementRef;
  fileAttr = 'Buscar Archivo';
  fileAttr2 = 'Buscar Archivo';
  fileAttr3 = 'Buscar Archivo';
  fileAttr4 = 'Buscar Archivo';
  constructor(private authStorageService:AuthStorageService,
              private InstructivosService:InstructivosService,
              public dialog: MatDialog,) { }

  IdProyec;
  url: SafeResourceUrl;
  Val = false;
  FlagIntegrantes = false;
  FlagCompromiso = false;
  FlagAcuerdo = false;
  FlagFormalizacion = false;
  dataSource = [];
  
  displayedColumns: string[] = ['Institucion', 'Persona', 'acciones'];

  ngOnInit(): void {
    this.IdProyec = localStorage.getItem("IdProyec");
    this.getAll();
  }

  getAll(){
    if (this.IdProyec != undefined) {
      this.Val = true
      this.InstructivosService.getIdProyect(this.IdProyec).subscribe( r =>{
        r.forEach(element => {
          if(element.NombreTipo == 'Integrantes'){
            this.FlagIntegrantes = true;
          }else if(element.NombreTipo == 'Compromiso'){
            this.FlagCompromiso = true;
          }else if(element.NombreTipo == 'Acuerdo'){
            this.FlagAcuerdo = true;
          }else if(element.NombreTipo == 'Formalizacion'){
            this.FlagFormalizacion = true;
          }
        });
        this.dataSource = r;
      })
    }else{
      this.Val = false;
    }
  }

  ver(url, Nombre) {
    let datos: VerIntructiveData = {
      url: url,
      Nombre: Nombre
    }
    const dialogRef = this.dialog.open(VerIntructiveComponent, {
      ariaLabel: `Editar`,
      role: 'alertdialog',
      autoFocus: false,
      data: datos
    });
  }

  uploadFileEvt(imgFile: any, name) {
    if(name != undefined && imgFile != undefined){
      let tamañoMaximo = 30000000; 
      const file = imgFile.target.files[0];
      if(file.size<tamañoMaximo){
        if (file.type.includes("pdf")) {
            this.authStorageService.setFile(name,file);  
          if(name == 'Integrantes'){
            this.fileAttr = file.name;
          }else if(name ==  'Compromiso'){
            this.fileAttr2 = file.name;
          }else if(name == 'Acuerdo'){
            this.fileAttr3 = file.name;
          }else if(name == 'Formalizacion'){
            this.fileAttr4 = file.name;
          } 
        } else { 
          alert('No es un PDF')
        }    
      } else { 
        alert('El PDF supera el tamaño')
      }
    }
  }

  deleteFile(InsID,dato){
    this.InstructivosService.deletefile(InsID,dato).subscribe(r => {
    })
    if(dato == 'Integrantes'){
      this.FlagIntegrantes = false;
    }else if(dato == 'Compromiso'){
      this.FlagCompromiso = false;
    }else if(dato == 'Acuerdo'){
      this.FlagAcuerdo = false;
    }else if(dato == 'Formalizacion'){
      this.FlagFormalizacion = false;
    }
    this.getAll();
  }
}

