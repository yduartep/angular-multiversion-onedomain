import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CatsComponent} from './cats.component';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CatsService} from './cats.service';

describe('CatsComponent', () => {
    let component: CatsComponent;
    let fixture: ComponentFixture<CatsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                BrowserModule,
                CommonModule,
                HttpClientModule,
                FormsModule,
                ReactiveFormsModule
            ],
            declarations: [CatsComponent],
            providers: [CatsService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CatsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
