import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWeatherForecastComponent } from './add-weather-forecast.component';

describe('AddWeatherForecastComponent', () => {
  let component: AddWeatherForecastComponent;
  let fixture: ComponentFixture<AddWeatherForecastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddWeatherForecastComponent]
    });
    fixture = TestBed.createComponent(AddWeatherForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
