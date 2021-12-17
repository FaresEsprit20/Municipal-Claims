import { Http, Headers, RequestOptions }  from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class InscriptionProvider {

constructor(public http: Http)
{

}

postData(body) {
let type = "application/json; charset= utf-8";
let headers = new Headers ({ 'Content-Type': type });
let options = new RequestOptions ({ headers : headers });

return this.http.post ( "http://localhost/project-mobile/server_api/inscription.php", JSON.stringify(body) , options)
.map (res => res.json());

}
}
