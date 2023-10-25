import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Standings } from 'src/app/interfaces/standings.interface';
import { FootballService } from 'src/app/services/football.service';

@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.css']
})
export class ResultsTableComponent {

  leagueData$: Observable<Standings> | undefined;
  leagueID: number = 0;

  constructor(private footballService: FootballService, private activeRouter: ActivatedRoute, private router: Router){
    this.activeRouter.paramMap.subscribe(c => {
      this.leagueID = Number(c.get('id'))
      this.leagueData$ = this.footballService.getStanding(this.leagueID)
    })
  }

  selectedTeam(teamID:number){
    this.router.navigateByUrl(`/team/${teamID}/${this.leagueID}`)
  }



}
