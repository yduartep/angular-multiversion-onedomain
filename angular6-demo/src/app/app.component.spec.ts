import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {VersionComponent} from './version/version.component';
import {PageNotFoundComponent} from './not-found/not-found.component';
import {CatsComponent} from './cats/cats.component';
import {DogsComponent} from './dogs/dogs.component';
import {FooterComponent} from './footer/footer.component';
import {HelpComponent} from './help/help.component';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                PageNotFoundComponent,
                CatsComponent,
                DogsComponent,
                FooterComponent,
                VersionComponent,
                HelpComponent
            ],
            imports: [
                BrowserModule,
                CommonModule,
                HttpClientModule,
                FormsModule,
                ReactiveFormsModule
            ]
        }).compileComponents();
    }));
    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
    it(`should have as title 'angular6-demo'`, async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('angular6-demo');
    }));
    it('should render title in a h1 tag', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('Angular Demo Dogs & Cats');
    }));
});
