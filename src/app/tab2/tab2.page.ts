import { Component, OnInit } from '@angular/core';
import { Trip, TripService } from '../trips.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  trips: Trip[] = [];

  constructor(
    private tripService: TripService,
  ) {}

  ngOnInit() {
    this.trips = this.tripService.getAll();
  }

}
