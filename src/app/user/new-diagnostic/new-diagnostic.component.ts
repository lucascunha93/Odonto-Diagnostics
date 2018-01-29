import { AppService } from './../../app.service';
import { Component, OnInit } from '@angular/core';

import { DiagnosticForm } from './new-diagnostic.model';

@Component({
  selector: 'app-new-diagnostic',
  templateUrl: './new-diagnostic.component.html'
})
export class NewDiagnosticComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  enviaForm( envia: DiagnosticForm ) {
    console.log( envia );
  }

}
