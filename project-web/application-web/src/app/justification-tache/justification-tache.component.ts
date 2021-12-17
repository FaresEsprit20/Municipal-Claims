import { Component, OnInit } from '@angular/core';
import { ServerService } from '../services/server.service';

@Component({
  selector: 'app-justification-tache',
  templateUrl: './justification-tache.component.html',
  styleUrls: ['./justification-tache.component.scss']
})

export class JustificationTacheComponent implements OnInit {

  server: string;

  constructor(private serverService: ServerService) {
    this.server = this.serverService.server;
    console.log(this.server);

  }

  ngOnInit() {
  }

}
