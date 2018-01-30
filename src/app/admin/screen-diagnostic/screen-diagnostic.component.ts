import { Component, OnInit } from '@angular/core';

import { AppService } from './../../app.service';
import { AdminComponent } from './../admin.component';
import { Diagnostic } from './../../app.diagnostic';

@Component({
  selector: 'app-screen-diagnostic',
  templateUrl: './screen-diagnostic.component.html'
})
export class ScreenDiagnosticComponent implements OnInit {

 diagnostics: Diagnostic[];

  constructor( private appDiagnostic: AppService ) { }

  ngOnInit() {
    this.appDiagnostic.diagnostics()
      .subscribe( diagnostics => this.diagnostics = diagnostics );
  }

}
