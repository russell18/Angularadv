import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Country } from '../shared/models/country';
import { WorldService } from '../world.service';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-continent',
  templateUrl: './continent.component.html',
  styleUrls: ['./continent.component.css']
})
export class ContinentComponent implements OnInit {

  public continent: string = "";
  public countries: Country[] = [];

  constructor(
    private _activatedRoute: ActivatedRoute,
    public _worldService: WorldService
  ) {
    this._activatedRoute.params.subscribe((params: Params) => {
      this.continent = params['continent'];
      this.getCountry(params['continent']);
    });
  }

  ngOnInit() {
    
  }

  getCountry(continent: string) {
    this._worldService.getCountries(continent).subscribe(res => {
      let data: any = res;
      this.countries = data.map(country => new Country(country));
    });
  }

}
