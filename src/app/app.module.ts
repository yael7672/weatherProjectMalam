import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddWeatherForecastComponent } from './components/add-weather-forecast/add-weather-forecast.component';
import { UpdateWeatherForecastComponent } from './components/update-weather-forecast/update-weather-forecast.component';
import { DeleteWeatherForecastComponent } from './components/delete-weather-forecast/delete-weather-forecast.component';
import { WeatherForecastComponent } from './components/weather-forecast/weather-forecast.component';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import { SmartTableComponent } from './shared/smart-table/smart-table.component';
import { SmartCardComponent } from './shared/smart-card/smart-card.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MassgeToUserComponent } from './shared/massge-to-user/massge-to-user.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherForecastComponent,
    AddWeatherForecastComponent,
    UpdateWeatherForecastComponent,
    DeleteWeatherForecastComponent,
    PopUpComponent,
    SmartTableComponent,
    SmartCardComponent,
    MassgeToUserComponent
  ],
  imports: [
     BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
