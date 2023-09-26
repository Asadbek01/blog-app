import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DicoverMoreBoxComponent } from './dicover-more-box.component';

describe('DicoverMoreBoxComponent', () => {
  let component: DicoverMoreBoxComponent;
  let fixture: ComponentFixture<DicoverMoreBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DicoverMoreBoxComponent]
    });
    fixture = TestBed.createComponent(DicoverMoreBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
