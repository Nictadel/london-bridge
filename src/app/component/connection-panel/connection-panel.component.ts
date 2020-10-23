import { Component, Input, OnInit } from '@angular/core';
import { Connection } from 'src/app/models/connection';

@Component({
  selector: 'connection-panel',
  templateUrl: './connection-panel.component.html',
  styleUrls: ['./connection-panel.component.scss']
})
export class ConnectionPanelComponent implements OnInit {

  @Input() connection: Connection;

  @Input() opened: boolean;

  @Input() generalInfo = '';

  public info: any;

  public stateData: any;

  constructor() { }

  ngOnInit(): void {

    const info = [];

    this.connection.connection_ends.forEach(end => {
      end.services.forEach(service => {
        if (service.current_info !== '') {
          info.push({ info: service.current_info, name: service.title });
        }
      });
    });
    this.info = info;

    const stateData = {};

    this.connection.connection_ends.forEach(end => {
      const shoreName = end.shore.short_name.toLowerCase();
      end.services.forEach(service => {
        if (!stateData[service.type.name]) {
          stateData[service.type.name] = {};
        }
        stateData[service.type.name][shoreName] = service.state.name;
      });
    });

    this.stateData = stateData;
  }

}
