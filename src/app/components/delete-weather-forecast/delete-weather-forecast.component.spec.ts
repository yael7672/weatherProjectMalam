import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteWeatherForecastComponent } from './delete-weather-forecast.component';

describe('DeleteWeatherForecastComponent', () => {
  let component: DeleteWeatherForecastComponent;
  let fixture: ComponentFixture<DeleteWeatherForecastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteWeatherForecastComponent]
    });
    fixture = TestBed.createComponent(DeleteWeatherForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
