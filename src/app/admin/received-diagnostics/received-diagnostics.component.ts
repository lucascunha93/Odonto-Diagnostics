import { Component, OnInit, Input } from '@angular/core';

import { AppService } from './../../app.service';
import { DiagnosticAdmin } from './../../app.diagnostic';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-received-diagnostics',
  templateUrl: './received-diagnostics.component.html'
})
export class ReceivedDiagnosticsComponent implements OnInit {

  @Input() diagnosticAdmin: DiagnosticAdmin;

  constructor( private appService: AppService,
                private route: ActivatedRoute ) { }

  ngOnInit() {
  }

}
