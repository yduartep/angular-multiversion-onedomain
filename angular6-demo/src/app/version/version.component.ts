import {Component, OnInit} from '@angular/core';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.css']
})
export class VersionComponent implements OnInit {
  appVersion: string;
  angularVersion: string;

  constructor() {
  }

  ngOnInit() {
    this.appVersion = environment.appVersion;
    this.angularVersion = environment.angularVersion;
  }
}
