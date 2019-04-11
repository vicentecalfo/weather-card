import { Component, OnInit } from '@angular/core';
import { locationsMockUp } from './mockup';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  locations = locationsMockUp;
  
}
