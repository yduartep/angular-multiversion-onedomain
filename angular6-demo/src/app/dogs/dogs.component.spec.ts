import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DogsComponent} from './dogs.component';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DogsService} from './dogs.service';

describe('DogsComponent', () => {
    let component: DogsComponent;
    let fixture: ComponentFixture<DogsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                BrowserModule,
                CommonModule,
                HttpClientModule,
                FormsModule,
                ReactiveFormsModule
            ],
            declarations: [DogsComponent],
            providers: [DogsService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DogsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
