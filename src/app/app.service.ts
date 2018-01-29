import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { DiagnosticAdmin } from './app.diagnostic';

import { ODONTO_API } from './app.api';
import { ErrorHandler } from './app.error.handler';

@Injectable()
export class AppService {

  constructor(private http: Http) {}

    diagnostics(): Observable<DiagnosticAdmin []> {
        return this.http.get(`${ODONTO_API}/diagnosticos`)
          .map( response => response.json())
          .catch(ErrorHandler.handlerError);
    }
    diagnosticById(titulo: string): Observable<DiagnosticAdmin> {
      return this.http.get(`${ODONTO_API}/diagnosticos/${titulo}`)
        .map(response => response.json())
        .catch(ErrorHandler.handlerError);
    }
}
