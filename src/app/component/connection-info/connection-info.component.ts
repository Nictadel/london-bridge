import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Connection } from 'src/app/models/connection';
import { Settings } from 'src/app/models/settings';
import { ConnectionService } from 'src/app/service/connection.service';
import { SettingsService } from 'src/app/service/settings.service';

@Component({
  selector: 'connection-info',
  templateUrl: './connection-info.component.html',
  styleUrls: ['./connection-info.component.scss']
})
export class ConnectionInfoComponent implements OnInit, OnChanges {

  @Input() showActive?: number;

  public currentActive?: number;

  public connectionData: Connection[];

  public settings: Settings;
  constructor(private connectionService: ConnectionService, private settingsService: SettingsService) { }

  ngOnInit(): void {
    this.connectionService.getAllConnections().subscribe(r => {
      this.connectionData = r;
    });

    this.settingsService.getSettings().subscribe(r => {
      this.settings = r;
    });

  }

  ngOnChanges(): void {
    if (this.currentActive !== this.showActive) {
      this.currentActive = this.showActive;
    }
  }

}
