import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogBoxComponent } from './blog-box.component';

describe('BlogBoxComponent', () => {
  let component: BlogBoxComponent;
  let fixture: ComponentFixture<BlogBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogBoxComponent]
    });
    fixture = TestBed.createComponent(BlogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
