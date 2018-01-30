import { Component, OnInit, Input } from '@angular/core';

import { AppService } from './../../app.service';
import { Diagnostic } from './../../app.diagnostic';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-received-diagnostics',
  templateUrl: './received-diagnostics.component.html'
})
export class ReceivedDiagnosticsComponent implements OnInit {

  diagnosticAdmin: Diagnostic;

  constructor( private appService: AppService,
                private route: ActivatedRoute ) { }

  ngOnInit() {
    this.appService.diagnosticById(this.route.snapshot.params['id'])
      .subscribe(diagnostic => this.diagnosticAdmin = diagnostic);
  }
}
