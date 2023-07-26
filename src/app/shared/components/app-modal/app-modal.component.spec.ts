import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppModalComponent } from './app-modal.component';

describe('AppModalComponent', () => {
  let component: AppModalComponent;
  let fixture: ComponentFixture<AppModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppModalComponent]
    });
    fixture = TestBed.createComponent(AppModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
