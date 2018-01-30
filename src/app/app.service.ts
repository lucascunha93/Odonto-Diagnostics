import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Diagnostic } from './app.diagnostic';

import { ODONTO_API } from './app.api';
import { ErrorHandler } from './app.error.handler';

@Injectable()
export class AppService {

  constructor(private http: Http) {}

    diagnostics(): Observable<Diagnostic []> {
        return this.http.get(`${ODONTO_API}/diagnosticos`)
          .map( response => response.json())
          .catch(ErrorHandler.handlerError);
    }
    diagnosticById(titulo: string): Observable<Diagnostic> {
      return this.http.get(`${ODONTO_API}/diagnosticos/${titulo}`)
        .map(response => response.json())
        .catch(ErrorHandler.handlerError);
    }
    enviarDiagnostic(diagnostic: Diagnostic): Observable< Diagnostic [] > {
      return this.http.post(`${ODONTO_API}/diagnosticos/`, diagnostic)
      .map( response => response.json())
    }
}
