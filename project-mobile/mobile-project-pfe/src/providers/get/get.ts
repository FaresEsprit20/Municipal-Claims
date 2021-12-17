import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the GetProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GetProvider {

  constructor(public http: Http) {
    console.log('Hello GetProvider Provider');
  }

  //192.168.137.1
  postData(body) {
    let type = "application/json; charset= utf-8";
    let headers = new Headers({ 'Content-Type': type });
    let options = new RequestOptions({ headers: headers });

    return this.http.post('http://localhost/project-mobile/server_api/file_aksi.php', JSON.stringify(body), options)
      .map(res => res.json());

  }


}
