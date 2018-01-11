import { DiagnosticAdmin } from './../../app.diagnostic';
import { Component, OnInit, Input } from '@angular/core';

import { AppService } from './../../app.service';
import { AdminComponent } from './../admin.component';

@Component({
  selector: 'app-screen-diagnostic',
  templateUrl: './screen-diagnostic.component.html'
})
export class ScreenDiagnosticComponent implements OnInit {

 @Input() diagnostics: DiagnosticAdmin[];

  constructor( private appDiagnostic: AppService ) { }

  ngOnInit() {
    this.appDiagnostic.diagnostics()
      .subscribe( diagnostics => this.diagnostics = diagnostics );
  }

}
