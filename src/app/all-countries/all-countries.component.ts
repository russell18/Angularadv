import { Component, OnInit } from '@angular/core';
import { WorldService } from '../world.service';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
@Component({
  selector: 'app-all-countries', 
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.css']
})
export class AllCountriesComponent implements OnInit {
public allCountries;
  constructor(public world:WorldService) { }

  ngOnInit() {
 
  }

}
