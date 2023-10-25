import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, of, throwError } from 'rxjs';

import { StandingsResponse } from '../interfaces/standings-response.interface';
import { Standings } from '../interfaces/standings.interface';
import { FixtureResponse } from '../interfaces/fixtures-response.interface';
import { Fixture } from '../interfaces/fixture.interface';


@Injectable({
  providedIn: 'root'
})
export class FootballService {

  apiKey = '3c14b7b4185ad79a7774f19d4e83c314'
  apiURL = 'https://v3.football.api-sports.io'
  currentDate = new Date().getTime();

  constructor(private http: HttpClient) { }


  getStanding(leagueID: number){

    const cacheKey = `standings/${leagueID}`
    const isCatched = this.getCache(cacheKey)

    if(isCatched){
      return of(isCatched as Standings)
    }

    return this.http.get<StandingsResponse>(`${this.apiURL}/standings?league=${leagueID}&season=${2023}`)
    .pipe(

      map((data:StandingsResponse) => {
        
        let standing =  {
          league:{
            country: data.response[0].league.country,
            flag: data.response[0].league.flag,
            id: data.response[0].league.id,
            logo: data.response[0].league.logo,
            name: data.response[0].league.name,            
          },

          standings: data.response[0].league.standings[0]
        } as Standings
        this.setCache(cacheKey,standing, this.currentDate.toString())
        return standing
        
      }
      
      ),
      catchError(err => {
        return throwError(() => err)
      })
    )
  }

  getResults(teamID: number, last:number){

    const cacheKey = `fixtures/${teamID}`
    const isCatched = this.getCache(cacheKey)
    if(isCatched){
      return of(isCatched as Fixture[])
    }
    
    return this.http.get<FixtureResponse>(`${this.apiURL}/fixtures?team=${teamID}&last=${last}`)
    .pipe(
      map((data:FixtureResponse) => {
     
        let fixtures =  data.response.map((data) => {
          return {
            teams:{
            away: data.teams.away,
            home: data.teams.home
            },
            goals: {
              away: data.goals.away,
              home: data.goals.home

            }
          }  
        }) as Fixture[]
        this.setCache(cacheKey,fixtures, this.currentDate.toString())
        return fixtures 
      })
    )
  }

  setCache(key:string, data:any, date: string){
    localStorage.setItem(key, JSON.stringify({ data, date }));
  }

  getCache(key:string){
    const storedData =  localStorage.getItem(key);
    if(storedData){
      const { data, date } = JSON.parse(storedData);
      const diff = Math.abs(this.currentDate - parseInt(date)) / 3600000;
      const hr = Math.ceil(diff / (1000 * 60 * 60));
      if(hr < 12){
        return data
      } else {
        return null
      }
    } else {
      return null;
    }
  }
}
