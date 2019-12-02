import {Component, OnInit} from '@angular/core';
import {DogsService} from './dogs.service';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {
  categories$: Observable<any>;
  loading = false;
  preview$: Observable<string>;
  selected: string;

  constructor(private service: DogsService) {
  }

  ngOnInit() {
    this.loading = true;
    this.categories$ = this.service.fetchCategories()
      .pipe(tap(() => this.loading = false));
  }

  showPreview(category: string) {
    if (category) {
      this.loading = true;
      this.selected = category;
      this.preview$ = this.service.fetchByCategory(category)
        .pipe(tap(() => this.loading = false));
    }
  }
}
