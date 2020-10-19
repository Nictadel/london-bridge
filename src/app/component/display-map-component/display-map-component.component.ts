import { Component, OnInit } from '@angular/core';
import { Connection } from 'src/app/models/connection';
import { ConnectionService } from 'src/app/service/connection.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'display-map-component',
  templateUrl: './display-map-component.component.html',
  styleUrls: ['./display-map-component.component.scss']
})
export class DisplayMapComponentComponent implements OnInit {

  public geometryObjects: any[];

  public coordPairs: any[];

  public connectionData: Connection[];

  public get styleURL() {
    return environment.mapbox_styleURL;
  }

  constructor(private connectionService: ConnectionService) { }

  ngOnInit(): void {
    this.connectionService.getAllConnections().subscribe(r => {
      this.connectionData = r;
      this.getLineCoords();
      this.prepareGeometry();
    })

  }

  getLineCoords(): void {

    let coordPairs = [];

    this.connectionData.forEach(connection => {

      let coordPair = [];

      connection.connection_ends.forEach(connectionEnd => {
        let coord = [connectionEnd.long, connectionEnd.lat];
        coordPair.push(coord);
      });

      coordPairs.push(coordPair);
      this.coordPairs = coordPairs;
    });
  }
  
  prepareGeometry(): void {
    let geometryObjects = [];

    this.coordPairs.forEach(coordPair => {
      let geometry = {
        type: 'LineString',
        coordinates: coordPair
      };
  
      geometryObjects.push(geometry);
    });

    this.geometryObjects = geometryObjects;
  }


}


