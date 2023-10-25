import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { FootballService } from 'src/app/services/football.service';
import { Fixture } from '../../interfaces/fixture.interface';


@Component({
  selector: 'app-teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css']
})
export class TeamsTableComponent implements OnInit {

  public teamID: number = 0;
  public leagueID: number = 0;
  public teamData$: Observable<Fixture[]> = of([])

  constructor(private footbalService: FootballService, private route: ActivatedRoute, private router:Router){}

  ngOnInit(): void {
    this.teamID = this.route.snapshot.params['id'];
    this.leagueID = this.route.snapshot.params['id2'];
    console.log(this.teamID, this.leagueID)
    this.getTeamResults()
  }

  getTeamResults(){
    this.teamData$ = this.footbalService.getResults(this.teamID,10)
    this.teamData$.subscribe(data => console.log(data))
  }

  navigateBack(){
    this.router.navigate([`/standings/${this.leagueID}`])
  }

}
