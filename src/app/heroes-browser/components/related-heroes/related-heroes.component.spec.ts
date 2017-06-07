import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedHeroesComponent } from './related-heroes.component';

describe('RelatedHeroesComponent', () => {
  let component: RelatedHeroesComponent;
  let fixture: ComponentFixture<RelatedHeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatedHeroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
