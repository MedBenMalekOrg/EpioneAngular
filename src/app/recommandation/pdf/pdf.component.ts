import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdfe',
  template: `<div>
      <label>PDF src</label>
      <input type="text" placeholder="PDF src" [(ngModel)]="pdfSrc">
  </div>
  <pdf-viewer [src]="pdfSrc" 
              [render-text]="true"
              style="display: block;"
  ></pdf-viewer>
  `
})
export class PdfComponent {
  pdfSrc: string = '/pdf-test.pdf';
}
