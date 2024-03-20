import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Importez FormsModule
import { MatInputModule } from '@angular/material/input';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'; // Importez MatInputModule
import { AppComponent } from './app.component';
import { MeteoComponent } from './meteo/meteo.component';
import { MeteoService } from './services/meteo.service';
import { BrowserModule } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideAnimationsAsync()]
  
};



@NgModule({
  declarations: [
  MeteoComponent
  ],
  imports: [
  BrowserModule,
  FormsModule, // Ajoutez FormsModule aux imports
  HttpClientModule // Ajoutez HttpClientModule aux imports
  ],
  providers: [MeteoService],
  bootstrap: [AppComponent]
  })
  export class AppModule { }

