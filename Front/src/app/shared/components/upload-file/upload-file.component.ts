import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

export type btnColorType = 'btn-primary' | 'btn-danger' | 'btn-success' | '';

@Component({
  selector: 'ngx-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {
  @ViewChild('fileInput') fileInput: ElementRef;
  @Input() doc: {title: string, fileName: string};
  @Input() disabled: boolean = false;
  @Input() btnColor: btnColorType = 'btn-success';

  @Output() fileUpload = new EventEmitter<FileList>();

  fileForm: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.fileForm = this.fb.group({
      file: null
    });
  }

  openBrowser() {
    this.fileInput.nativeElement.click();
  }

  file = () => this.fileForm.get('file');

  onFileChange(event) {
    const fileList = (event.target &&  event.target.files) ? event.target.files : null;
    if (fileList && fileList.length > 0) {
      this.fileUpload.emit(fileList);
    }
  }
}
