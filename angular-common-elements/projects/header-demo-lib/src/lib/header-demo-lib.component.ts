import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'ng-header-demo',
  template: `
    <h1 class="main">Angular Demo Dogs & Cats</h1>
    <ul class="menu">
      <li><a href="/dogs">Dogs</a></li>
      <li><a href="/cats">Cats</a></li>
      <li><a href="/help">Help</a></li>
    </ul>
    <div class="version">
      <p>App version: <strong>{{appVersion}}</strong></p>
      <p>Angular version: <strong [ngStyle]="{'color': color}">{{angularVersion}}</strong></p>
    </div>
  `,
  styles: [
      `
      .version {
        position: absolute;
        right: 10px;
        top: 3px;
      }

      h1.main {
        padding-left: 10px;
      }

      .menu {
        list-style: none;
        border-bottom: 0.1em solid black;
        margin-bottom: 2em;
        padding: 0 0 0.5em 10px;
      }

      .menu:before {
        content: "[";
      }

      .menu:after {
        content: "]";
      }

      .menu > li {
        display: inline;
        padding-left: 0.3em;
      }

      .menu > li + li:before {
        content: "|";
        padding-right: 0.3em;
      }

      .menu > li:last-child {
        padding-right: 0.3em;
      }
    `
  ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class HeaderDemoLibComponent implements OnInit {
  @Input() appVersion: string;
  @Input() angularVersion: string;
  @Input() color: string;

  constructor() {
  }

  ngOnInit() {
  }

}
