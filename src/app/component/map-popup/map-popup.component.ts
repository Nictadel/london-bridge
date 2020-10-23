import { Component, Input, OnInit } from '@angular/core';
import { Connection } from 'src/app/models/connection';

@Component({
  selector: 'map-popup',
  templateUrl: './map-popup.component.html',
  styleUrls: ['./map-popup.component.scss']
})
export class MapPopupComponent implements OnInit {

  @Input() connection: Connection;

  public stateData: any;

  constructor() { }

  ngOnInit(): void {

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
