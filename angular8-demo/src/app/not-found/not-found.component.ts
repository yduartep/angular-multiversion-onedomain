import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './not-found.component.html',
})
export class PageNotFoundComponent implements OnInit {
  title = 'Page not found';
  message = 'Sorry, This page is not available';

  constructor() {
  }

  ngOnInit() {
  }
}
