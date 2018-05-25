import { Injectable } from '@angular/core';
 
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
 
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class WorldService {

  public allCountries;

  private baseUrl="https://restcountries.eu/rest/v2";
  constructor( private _http:HttpClient) { }

  public getCountries(continent: string) {
    return this._http.get(this.baseUrl + `/region/${continent}`)
  }
 

  public getAllAfricanCountries():any {
    let myResponse=this._http.get(this.baseUrl+'/region/africa');
    return myResponse;
  }

  public getAllAsiasCountries():any {
    let myResponse=this._http.get(this.baseUrl+'/region/asia');
    return myResponse;
  }
  public getAllAmericanCountries():any {
    let myResponse=this._http.get(this.baseUrl+'/region/americas');
    return myResponse;
  }

  public getAllEuropeanCountries():any {
    let myResponse=this._http.get(this.baseUrl+'/region/europe');
    return myResponse;
  }

  public getAllOceaniaCountries():any {
    let myResponse=this._http.get(this.baseUrl+'/region/oceania');
    return myResponse;
  }

  public getSingleCountryView():any {

    let myResponse=this._http.get(this.baseUrl+'/name/{name}');
    return myResponse;
  }

  public getCountryOfSimilarCurrency():any {

    let myResponse=this._http.get(this.baseUrl+'/?fields=africa;currencies');
    return myResponse;
  }
  
}
