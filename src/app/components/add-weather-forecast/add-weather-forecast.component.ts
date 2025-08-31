import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PopUpServiceService } from 'src/app/pop-up.service';
import { WeatherForecast, WeatherForecastService } from 'src/app/weather-forecast.service';

@Component({
  selector: 'app-add-weather-forecast',
  templateUrl: './add-weather-forecast.component.html',
  styleUrls: ['./add-weather-forecast.component.scss']
})
export class AddWeatherForecastComponent {
  @Output() addData = new EventEmitter<WeatherForecast>();
  isDisabled = false;
  summary = '';
  temperatureC: number | null = null;
  date = '';
  constructor(
    private weatherService: WeatherForecastService,
    private popUpService: PopUpServiceService
  ) { }

  createWeatherForecast(form: NgForm): void {
    if (form.invalid) return;

    this.isDisabled = true;
    this.popUpService.setSpinner(true);

    const data: Omit<WeatherForecast, 'id'> = {
      summary: form.value.Summary,
      temperatureC: form.value.TemperatureC,
      date: form.value.date
    };

    this.weatherService.addWeatherForecast(data as WeatherForecast).subscribe({
      next: (res) => {
        console.log('נוסף בהצלחה', res);
        this.addData.emit(res);
        this.popUpService.setIsPopUpOpen(false);
        this.popUpService.setClosePopUp();
        form.resetForm(); 
      },
      error: (err) => {
        console.error('שגיאה בהוספה:', err);
        alert('אירעה שגיאה בעת הוספת התחזית');
      },
      complete: () => {
        this.popUpService.setSpinner(false);
        this.isDisabled = false;
      }
    });
  }
}