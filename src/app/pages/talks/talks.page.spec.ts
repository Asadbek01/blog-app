import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalksPage } from './talks.page';

describe('TalksPage', () => {
  let component: TalksPage;
  let fixture: ComponentFixture<TalksPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TalksPage]
    });
    fixture = TestBed.createComponent(TalksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
