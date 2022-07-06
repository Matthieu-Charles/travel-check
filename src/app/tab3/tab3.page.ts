import { Component, OnInit } from '@angular/core';
import { Trip, TripService } from '../trips.service';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  trips: Trip[] = [];

  constructor(
    private tripService: TripService,
  ) {}

  ngOnInit() {
    this.trips = this.tripService.getAll();
  }

}
