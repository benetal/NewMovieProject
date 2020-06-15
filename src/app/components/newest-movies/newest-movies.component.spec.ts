import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewestMoviesComponent } from './newest-movies.component';

describe('NewestMoviesComponent', () => {
  let component: NewestMoviesComponent;
  let fixture: ComponentFixture<NewestMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewestMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewestMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
