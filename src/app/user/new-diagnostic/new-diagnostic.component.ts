import { ODONTO_API } from './../../app.api';
import { Http } from '@angular/http';
import { AppService } from './../../app.service';
import { Component, OnInit } from '@angular/core';

import { Diagnostic } from '../../app.diagnostic';

@Component({
  selector: 'app-new-diagnostic',
  templateUrl: './new-diagnostic.component.html'
})
export class NewDiagnosticComponent implements OnInit {

  diagnostics: Diagnostic[];

  constructor( private http: Http, private enviaDiagnostic: AppService ) { }

  ngOnInit() {
  }

  enviaForm( envia: Diagnostic ) {
    this.enviaDiagnostic.enviarDiagnostic( envia )
    .subscribe( diagnostics => this.diagnostics = diagnostics );
    console.log( envia );
  }

}
