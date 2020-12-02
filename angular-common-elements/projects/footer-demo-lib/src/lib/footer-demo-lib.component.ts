import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'ng-footer-demo',
  template: `
    <div class="footer">
      Angular demo: <strong>v<span>{{appVersion}}</span></strong>
      <span class="copyright">Copyright © {{year}} <a href="mailto:layahi@gmail.com">Yahima Duarte</a> | All Rights Reserved</span>
    </div>
  `,
  styles: [
      `
      .footer {
        color: #222;
        font-size: 1em;
        line-height: 1.4;
        font-family: sans-serif;
        background: lightgray;
        height: 40px;
        padding-left: 20px;
        padding-top: 25px;
        padding-right: 20px;
      }

      .copyright {
        float: right;
        padding-right: 5px;
      }
    `
  ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class FooterDemoLibComponent implements OnInit {
  @Input() appVersion: string;
  year = new Date().getFullYear();

  constructor() {
  }

  ngOnInit() {
  }

}
