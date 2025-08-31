import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateWeatherForecastComponent } from './update-weather-forecast.component';

describe('UpdateWeatherForecastComponent', () => {
  let component: UpdateWeatherForecastComponent;
  let fixture: ComponentFixture<UpdateWeatherForecastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateWeatherForecastComponent]
    });
    fixture = TestBed.createComponent(UpdateWeatherForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
