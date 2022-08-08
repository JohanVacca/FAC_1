import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-ver-intructive',
  templateUrl: './ver-intructive.component.html',
  styleUrls: ['./ver-intructive.component.scss']
})
export class VerIntructiveComponent implements OnInit {
  url: SafeResourceUrl;
  constructor(@Inject(MAT_DIALOG_DATA) public data: VerIntructiveData, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.data.url);
  }

}
export class VerIntructiveData {
  url: string;
  Nombre: string;
}
