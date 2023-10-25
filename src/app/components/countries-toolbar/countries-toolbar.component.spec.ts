import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesToolbarComponent } from './countries-toolbar.component';

describe('CountriesToolbarComponent', () => {
  let component: CountriesToolbarComponent;
  let fixture: ComponentFixture<CountriesToolbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountriesToolbarComponent]
    });
    fixture = TestBed.createComponent(CountriesToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
