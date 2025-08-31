import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { PopUpServiceService } from 'src/app/pop-up.service';
import { WeatherForecastService } from 'src/app/weather-forecast.service';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss']
})
export class WeatherForecastComponent implements OnInit {
  // weatherForecastArr: any
  weatherForecastArr: any[] = [];
  ifSortDown: any
  thArrTableWeatherForecast: any = ['Date', 'TemperatureC', 'Summary'];
  weatherForecastsListKeys: any = ['date', 'temperatureC', 'summary'];
  myWeatherForecast: any
  openSortInputBySalary!: boolean
  ifDelete = true
  ifUpdate = true
  weatherForecastId: any
  isPopUpOpen: any

  constructor(private router: Router, private appService: AppService, private popUpService: PopUpServiceService, public weatherService: WeatherForecastService) {
    this.popUpService.getKindOfPopUp().subscribe(res => {
      this.isPopUpOpen = res;
    })
  }

  ngOnInit(): void {
    // this.weatherForecastArrLS = localStorage.getItem('employeeDetails')
    // this.weatherForecastArr = this.weatherForecastArrLS
    this.loadWeatherData();
    // if (this.weatherForecastArr) {
    //   this.weatherForecastArrCopy = this.weatherForecastArr
    // }
  }

  loadWeatherData(): void {
    this.weatherService.getAllWeatherForecast().subscribe({
      next: data => this.weatherForecastArr = data,
      error: err => console.error('Failed to fetch weather data:', err)
    });
  }
  openPopUp(data: boolean, type: any) {
    this.popUpService.setSpecificPopUp(data, type)
    this.popUpService.setIsPopUpOpen(true)
  }


  updateWeatherForecast(val: any) {
    debugger
    this.weatherForecastId = val
    this.myWeatherForecast = this.weatherForecastArr.filter((item: any) => item.id == this.weatherForecastId);
    this.openPopUp(true, 'updateWeatherForecast')
  }

  deleteWeatherForecast(val: any) {
    debugger
    this.weatherForecastId = val
    this.openPopUp(true, 'deleteWeatherForecast')
  }

  onWeatherForecastAdded(WeatherForecast: any) {
    debugger
    this.weatherForecastArr.push(WeatherForecast)
  }

onWeatherForecastDelete(deletedItem: any) {
  this.weatherForecastArr = this.weatherForecastArr.filter(item => item.id !== deletedItem.id);
}
  onWeatherForecastUpdate(WeatherForecast: any) {
    debugger
    this.weatherForecastArr.push(WeatherForecast)
  }
}
