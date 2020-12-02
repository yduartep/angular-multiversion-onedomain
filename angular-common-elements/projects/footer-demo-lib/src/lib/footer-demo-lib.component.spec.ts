import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterDemoLibComponent } from './footer-demo-lib.component';

describe('FooterDemoLibComponent', () => {
  let component: FooterDemoLibComponent;
  let fixture: ComponentFixture<FooterDemoLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterDemoLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterDemoLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
