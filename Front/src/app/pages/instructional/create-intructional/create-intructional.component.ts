import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InstructivosService } from '../../../@core/services/instructivos/instructivos.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthStorageService } from '../../../@core/services/storage/auth-storage/auth-storage.service';
import { environment } from '../../../../environments/environment';
import { formatDate } from '@angular/common';
import { empty } from 'rxjs';
import { Api } from '../../../../environments/environment'

@Component({
  selector: 'app-create-intructional',
  templateUrl: './create-intructional.component.html',
  styleUrls: ['./create-intructional.component.scss']
})
export class CreateIntructionalComponent implements OnInit {

  uplodadpdf: FormGroup;
  uploadedFiles;
  User: String;

  id: string;
  codigo: string;
  titulo: string;
  objetivo: string;
  creacion: boolean;
  apiUrl: string;
  url: string;
  archivok: boolean

  constructor(@Inject(MAT_DIALOG_DATA) public data: CreateIntructionalData,
    private authStorageService: AuthStorageService,
    private instructivosService: InstructivosService
  ) { this.apiUrl = environment.apiUrl; }

  ngOnInit(): void {
    this.buildForm();
    this.datosform();
    this.archivok = false
  }
  datosform() {
    this.id = this.data.id;
    this.codigo = this.data.codigo;
    this.titulo = this.data.titulo;
    this.objetivo = this.data.objetivo;
    this.creacion = this.data.creacion;

  }
  buildForm() {
    this.uplodadpdf = new FormGroup({
      codigo: new FormControl('', [Validators.required]),
      titulo: new FormControl('', [Validators.required]),
      objetivo: new FormControl('', [Validators.required]),
      file: new FormControl('', [Validators.required]),
    })
  }
  onFileChange(e) {
    const tamañoMaximo = 30000000
    let file = e.target.files[0];
    if (file == undefined) {
      alert('Debe Cargar un Archivo')
    } else {
      if (!file.type.includes("pdf")) {
        let datos = this.uplodadpdf.value
        file = undefined
        this.uplodadpdf = new FormGroup({
          codigo: new FormControl(datos.codigo, [Validators.required]),
          titulo: new FormControl(datos.titulo, [Validators.required]),
          objetivo: new FormControl(datos.objetivo, [Validators.required]),
          file: new FormControl('', [Validators.required]),
        })
        alert('El archivo debe ser un PDF')
      } else {
        if (file.size > tamañoMaximo) {
          alert(`El no debe ser mayor a ${tamañoMaximo / 1000000} MB`)
          file = undefined
        } else {
          this.uploadedFiles = file;
          this.archivok = true
        }
      }
    }

  }
  onSubmit() {
    let formData = new FormData();
    formData.append('Codigo', this.uplodadpdf.value.codigo)
    formData.append('Titulo', this.uplodadpdf.value.titulo);
    formData.append('Objetivo', this.uplodadpdf.value.objetivo);
    formData.append('User', this.authStorageService.getUserId());
    let file = this.uploadedFiles;
    formData.append('file', file, this.uplodadpdf.value.file)
    formData.append('NombreArchivo', Api.api + this.uplodadpdf.value.codigo + '.' + file.type.split('/')[1])
    formData.append('Estado', '1')
    this.instructivosService.uploadFile(formData).subscribe((res) => {
    });
  }
  update() {
    let id = this.id;
    let fechaModificacion = formatDate(new Date(), 'dd/MM/yyyy', 'en');
    let formData = new FormData();
    formData.append('Codigo', this.uplodadpdf.value.codigo)
    formData.append('Titulo', this.uplodadpdf.value.titulo);
    formData.append('Objetivo', this.uplodadpdf.value.objetivo);
    let file

    if (this.uploadedFiles == undefined) {
    } else {
      file = this.uploadedFiles
      formData.append('file', file, this.uplodadpdf.value.file)
      formData.append('NombreArchivo', Api.api + this.uplodadpdf.value.codigo + '.' + file.type.split('/')[1])
    }
    formData.append('UserMod', this.authStorageService.getUserId());
    formData.append('FModificacionM', fechaModificacion);
    this.instructivosService.updatefile(id, formData).subscribe((res) => {
    });
  }
}

export interface CreateIntructionalData {
  id?: string;
  codigo?: string;
  titulo?: string;
  objetivo?: string;
  file?: File;
  creacion?: boolean;
}
