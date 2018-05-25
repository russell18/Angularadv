import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RegionsComponent } from './regions/regions.component';
import { AllCountriesComponent } from './all-countries/all-countries.component';
import { CountryComponent } from './country/country.component';
import { WorldService } from './world.service';
import { ContinentComponent } from './continent/continent.component';
 

@NgModule({
  declarations: [
    AppComponent,
    RegionsComponent,
    AllCountriesComponent,
    CountryComponent,
    ContinentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'regions',component:RegionsComponent},
      {path:'all-countries',component:AllCountriesComponent},
      {path:'regions/:continent',component:ContinentComponent}
    ])
  ],
  providers: [HttpClientModule,WorldService],
  bootstrap: [AppComponent]
})
export class AppModule { }
