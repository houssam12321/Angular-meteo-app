import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  private apiKey = '889d5f2fc61f530743aaeab421e50655';

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?q=${city}&appid=${this.apiKey}`); // Utilisation de HttpClient pour effectuer un appel API
  }
}
