import {async, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PageNotFoundComponent} from './not-found/not-found.component';
import {CatsComponent} from './cats/cats.component';
import {DogsComponent} from './dogs/dogs.component';
import {HelpComponent} from './help/help.component';
import {RouteGuard} from './route.guard';
import {CatsService} from './cats/cats.service';
import {DogsService} from './dogs/dogs.service';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        PageNotFoundComponent,
        CatsComponent,
        DogsComponent,
        HelpComponent
      ],
      providers: [
        {provide: LocationStrategy, useClass: PathLocationStrategy},
        RouteGuard,
        CatsService,
        DogsService
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular8-demo'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angular8-demo');
  });
});
