import { Http, Headers, RequestOptions }  from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs';

@Injectable()
export class PostProvider {

  server: string;

  constructor(public http: Http){
    this.server = 'http://192.168.43.129/project-mobile/server_api/';
  }
//nom reseau :  Carte Ethernet Ethernet 11 
  //192.168.42.83
  //192.168.137.1 for emulator
  //192.168.1.13
  //wajdi 192.168.43.129
  postData(body) {
    let type = "application/json; charset= utf-8";
    let headers = new Headers ({ 'Content-Type': type });
    let options = new RequestOptions ({ headers : headers });

    return this.http.post( 'http://192.168.43.129/project-mobile/server_api/file_aksi.php', JSON.stringify(body) , options)
      .map(res => res.json());
  }


}
