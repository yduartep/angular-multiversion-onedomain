import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDemoLibComponent } from './header-demo.component';

describe('HeaderDemoLibComponent', () => {
  let component: HeaderDemoLibComponent;
  let fixture: ComponentFixture<HeaderDemoLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderDemoLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderDemoLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
