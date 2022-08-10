import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ProjectService} from '../../../../shared/services/Proyect/project.service';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-modal-view-documents-rubro',
  templateUrl: './modal-view-documents-rubro.component.html',
  styleUrls: ['./modal-view-documents-rubro.component.scss']
})
export class ModalViewDocumentsRubroComponent implements OnInit {

  public rubros = [];
  public TITLE = 'Listado de documentos por rubro';
  public NAME = 'Rubro: ';
  public AMOUNT = 'Monto';
  public VIEW_PDF = 'Ver PDF';
  public CLOSE_MODAL = 'Cerrar';
  public REMOVE = 'Eliminar presupuesto';

  constructor(
      public dialogRef: MatDialogRef<ModalViewDocumentsRubroComponent>,
      private projectService: ProjectService,
      @Inject(MAT_DIALOG_DATA) public data: DocumentsViewInterface) {
  }

  ngOnInit(): void {
    this.rubros = this.data.rubros;
  }

  public downloadPDF(rubro): void {
    const {data, name} = rubro;
    const downloadLink = document.createElement('a');
    downloadLink.href = `data:application/pdf;base64,${data}`;
    downloadLink.download = name;
    downloadLink.click();
  }

  public removeRubro(id): void {
    this.projectService.removeRubroPDF(this.data.projectId, this.data.rubroDetalleId, id)
        .subscribe( () => {
          this.rubros = this.rubros.filter(rubro => rubro._id !== id);
        });
  }

  public closeModal(): void {
    this.dialogRef.close();
  }
}

export interface DocumentsViewInterface {
  name: string;
  projectId: string;
  rubroDetalleId: string;
  rubros: {
    _id: string;
    factura: {
      created_at: string
      data: any;
      name: string;
      path: string;
    };
    rubro: number;
    consecutivo: string; //consecutivo
  }[];
}
