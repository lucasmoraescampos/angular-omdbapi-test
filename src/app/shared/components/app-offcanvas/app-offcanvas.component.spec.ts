import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppOffcanvasComponent } from './app-offcanvas.component';

describe('AppOffcanvasComponent', () => {
  let component: AppOffcanvasComponent;
  let fixture: ComponentFixture<AppOffcanvasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppOffcanvasComponent]
    });
    fixture = TestBed.createComponent(AppOffcanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
