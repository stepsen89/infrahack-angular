import {Component, OnInit} from '@angular/core';
import { LocationsService } from 'src/app/locations.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  locations: any;

  constructor(
    private locationsService: LocationsService
  ) {this.locations = this.locationsService.getLocations(); }

  ngOnInit() {

  }

}
