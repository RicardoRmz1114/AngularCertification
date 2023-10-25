import { League, Standing } from "./standings-response.interface";

export interface Standings{
    league: League,
    standings: Standing[]
}