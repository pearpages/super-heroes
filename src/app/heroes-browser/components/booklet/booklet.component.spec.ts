import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookletComponent } from './booklet.component';

describe('BookletComponent', () => {
  let component: BookletComponent;
  let fixture: ComponentFixture<BookletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
