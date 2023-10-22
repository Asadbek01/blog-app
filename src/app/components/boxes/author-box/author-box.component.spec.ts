import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorBoxComponent } from './author-box.component';

describe('AuthorBoxComponent', () => {
  let component: AuthorBoxComponent;
  let fixture: ComponentFixture<AuthorBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorBoxComponent]
    });
    fixture = TestBed.createComponent(AuthorBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
