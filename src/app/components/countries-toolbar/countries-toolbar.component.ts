import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FootballService } from 'src/app/services/football.service';

@Component({
  selector: 'app-countries-toolbar',
  templateUrl: './countries-toolbar.component.html',
  styleUrls: ['./countries-toolbar.component.css']
})
export class CountriesToolbarComponent  {

  public countryID: number = 39;
  public selectedCountry:string = '39';

  readonly leagues =  [
    { id: 39, country: 'England' },
    { id: 140, country: 'Spain' },
    { id: 61, country: 'France' },
    { id: 78, country:'Germany' },
    { id: 135, country:'Italy' }
  ]

  constructor(private route: ActivatedRoute){}


  ngOnInit(): void {
    this.countryID = this.route.snapshot.params['id']
    this.onSelected( this.countryID)
  }

  onSelected(country:any){
    this.countryID = country
  }

}
