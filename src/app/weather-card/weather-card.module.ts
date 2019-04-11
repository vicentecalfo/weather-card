import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MomentModule } from 'ngx-moment';
import { WeatherCardComponent } from './weather-card.component';

@NgModule({
  declarations: [WeatherCardComponent],
  imports: [
    CommonModule,
    MomentModule
  ],
  exports: [
    WeatherCardComponent
  ]
})
export class WeatherCardModule { }
