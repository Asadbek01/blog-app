import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCardBoxComponent } from './blog-card-box.component';

describe('BlogCardBoxComponent', () => {
  let component: BlogCardBoxComponent;
  let fixture: ComponentFixture<BlogCardBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogCardBoxComponent]
    });
    fixture = TestBed.createComponent(BlogCardBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
