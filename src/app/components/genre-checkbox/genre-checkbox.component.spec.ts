import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreCheckboxComponent } from './genre-checkbox.component';

describe('GenreCheckboxComponent', () => {
  let component: GenreCheckboxComponent;
  let fixture: ComponentFixture<GenreCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenreCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
