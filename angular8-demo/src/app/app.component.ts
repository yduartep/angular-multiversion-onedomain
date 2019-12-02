import {Component, OnInit} from '@angular/core';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular8-demo';
  appVersion: string;
  angularVersion: string;

  ngOnInit() {
    this.appVersion = environment.appVersion;
    this.angularVersion = environment.angularVersion;
  }
}
