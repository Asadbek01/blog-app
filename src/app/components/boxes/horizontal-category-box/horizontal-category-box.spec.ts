import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalCategory } from './horizontal-category-box';

describe('HorizontalCategory', () => {
  let component: HorizontalCategory;
  let fixture: ComponentFixture<HorizontalCategory>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HorizontalCategory]
    });
    fixture = TestBed.createComponent(HorizontalCategory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
