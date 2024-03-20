import { Component, OnInit } from '@angular/core';
import { MeteoService } from '../services/meteo.service';

@Component({
  selector: 'app-meteo',
  standalone: true,
  imports: [],
  templateUrl: './meteo.component.html',
  styleUrl: './meteo.component.css'
})
export class MeteoComponent implements OnInit {
  weatherInfo: any;
  city: string = '';

  constructor(private meteoService: MeteoService) { }

  ngOnInit(): void {
  }

  getWeather(): void {
    this.meteoService.getWeather(this.city).subscribe(
      data => {
        this.weatherInfo = data;
      },
      err => {
        console.error(err);
      }
    );
  }
}
