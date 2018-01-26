import { AppService } from './../../app.service';
import { Component, OnInit } from '@angular/core';

import { DiagnosticForm } from './diagnosticForm.model';

@Component({
  selector: 'app-new-diagnostic',
  templateUrl: './new-diagnostic.component.html'
})
export class NewDiagnosticComponent implements OnInit {

  constructor( private appService: AppService) { }

  

  ngOnInit() {
  }

  enviaForm( envia: DiagnosticForm ) {
    envia = 
    console.log( envia );
  }
}
