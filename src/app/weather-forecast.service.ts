import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface WeatherForecast {
  id: number;
  date: string;
  temperatureC: number;
  summary: string;
}

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastService {
private readonly baseUrl = '/api/WeatherForecast';

  constructor(private http: HttpClient) {}

getAllWeatherForecast(): Observable<WeatherForecast[]> {
  return this.http.get<WeatherForecast[]>(`${this.baseUrl}/GetAll`);
}

  addWeatherForecast(data: WeatherForecast): Observable<any> {
    return this.http.post(`${this.baseUrl}/Create`, data);
  }

  updateWeatherForecast(id: number, data: WeatherForecast): Observable<any> {
    return this.http.put(`${this.baseUrl}/Update/${id}`, data);
  }

  deleteWeatherForecast(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/Delete/${id}`);
  }
}
