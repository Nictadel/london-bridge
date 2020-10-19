import { Component, Input, OnInit } from '@angular/core';
import { Connection } from 'src/app/models/connection';

@Component({
  selector: 'map-popup',
  templateUrl: './map-popup.component.html',
  styleUrls: ['./map-popup.component.scss']
})
export class MapPopupComponent implements OnInit {

  @Input() connection: Connection;

  constructor() { }

  ngOnInit(): void {
  }

}
