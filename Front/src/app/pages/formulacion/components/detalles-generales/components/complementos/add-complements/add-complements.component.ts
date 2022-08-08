import {Inject} from '@angular/core';
import {Component, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {InstructivosService} from '../../../../../../../@core/services/instructivos/instructivos.service';
import {FormGroup} from '@angular/forms';
import {AuthStorageService} from '../../../../../../../@core/services/storage/auth-storage/auth-storage.service';

@Component({
    selector: 'app-add-complements',
    templateUrl: './add-complements.component.html',
    styleUrls: ['./add-complements.component.scss']
})
export class AddComplementsComponent implements OnInit {

    uplodadpdf: FormGroup;
    uploadedFiles;
    User: String;


    archivok: boolean;

    File: File;

    constructor(@Inject(MAT_DIALOG_DATA) public data: CreateComplementsData,
                private authStorageService: AuthStorageService,
                private instructivosService: InstructivosService
    ) {
    }


    ngOnInit(): void {
        this.archivok = false;
    }


    objetivo: String = this.data.Objet;

    uploadFileEvt(imgFile: any) {
        if (name != undefined && imgFile != undefined) {
            let tamañoMaximo = 30000000;
            const file = imgFile.target.files[0];
            if (file.size < tamañoMaximo) {
                if (file.type.includes('pdf')) {
                    this.File = imgFile.target.files[0];
                } else {
                    alert('No es un PDF');
                }
            } else {
                alert('El PDF supera el tamaño');
            }
        }
    }

    onSubmit() {
        this.authStorageService.setFile(this.objetivo, this.File);
    }
}

export interface CreateComplementsData {
    Objet: String,
}


