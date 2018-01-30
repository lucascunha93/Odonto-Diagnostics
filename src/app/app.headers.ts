import { Headers, RequestOptions } from "@angular/http";

export class HeadersService {

    headers() {
        let headersParams = { 'Content-Type': 'application/json' };
        if (localStorage['token']) {
            headersParams['Authorization'] = localStorage['token'];
        }
        let headers = new Headers(headersParams);
        let options = new RequestOptions({ headers: headers });
        return options;
    }
}