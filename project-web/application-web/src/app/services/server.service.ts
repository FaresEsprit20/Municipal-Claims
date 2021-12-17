import { Injectable } from '@angular/core';

@Injectable()

export class ServerService {

  server: string;

  constructor() {
    this.server = 'http://localhost/project-mobile/server_api/';
    console.log('server service is here');
    console.log('server path' + this.server);
  }

}
