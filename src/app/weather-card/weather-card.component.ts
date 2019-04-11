import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ez-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {

  @Input() temp: number;
  @Input() minTemp: number;
  @Input() maxTemp: number;
  @Input() locationId: number;
  @Input() stateAbbr: string;
  @Input() state: string;
  @Input() location: string;
  @Input() date: string;

  translateStateToIcon = {
    sn: 'far fa-snowflake',
    sl: 'fas fa-cloud-meatball',
    h: 'fas fa-cloud-meatball',
    t: 'fas fa-bolt',
    hr: 'fas fa-cloud-rain',
    lr: 'fas fa-cloud-showers-heavy',
    s: 'fas fa-cloud-sun-rain',
    hc: 'fas fa-cloud',
    lc: 'fas fa-cloud-sun',
    c: 'fas fa-sun'
  };

  constructor() { }

  ngOnInit() {
  }

}
