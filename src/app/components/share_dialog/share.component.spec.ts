import { ComponentFixture, TestBed } from '@angular/core/testing';

import { shareDialogComponent } from './share.component';

describe('shareDialogComponent', () => {
  let component: shareDialogComponent;
  let fixture: ComponentFixture<shareDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [shareDialogComponent]
    });
    fixture = TestBed.createComponent(shareDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
