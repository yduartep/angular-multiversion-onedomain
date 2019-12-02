import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterDemoComponent } from './footer-demo.component';

describe('FooterDemoLibComponent', () => {
  let component: FooterDemoComponent;
  let fixture: ComponentFixture<FooterDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
