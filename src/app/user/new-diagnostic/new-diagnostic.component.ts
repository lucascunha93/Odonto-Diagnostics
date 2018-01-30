import { AppService } from './../../app.service';
import { Component, OnInit } from '@angular/core';

import { Diagnostic } from '../../app.diagnostic';

@Component({
  selector: 'app-new-diagnostic',
  templateUrl: './new-diagnostic.component.html'
})
export class NewDiagnosticComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  enviaForm( envia: Diagnostic ) {
    console.log( envia );
  }

}
