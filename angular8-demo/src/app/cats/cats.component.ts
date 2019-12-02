import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {CatsService} from './cats.service';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {
  categories$: Observable<any>;
  loading = false;
  preview$: Observable<any>;
  selected: number;

  constructor(private service: CatsService) {
  }

  ngOnInit() {
    this.loading = true;
    this.categories$ = this.service.fetchCategories()
      .pipe(tap(() => this.loading = false));
  }

  showPreview(category: number) {
    if (category) {
      this.loading = true;
      this.selected = category;
      this.preview$ = this.service.fetchByCategory(category)
        .pipe(tap(() => this.loading = false));
    }
  }

}
