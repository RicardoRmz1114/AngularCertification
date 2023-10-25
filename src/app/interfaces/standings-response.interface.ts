export interface StandingsResponse {
    get:        string;
    parameters: Parameters;
    errors:     any[];
    results:    number;
    paging:     Paging;
    response:   Response[];
}

export interface Paging {
    current: number;
    total:   number;
}

export interface Parameters {
    league: string;
    season: string;
}

export interface Response {
    league: League;
}

export interface League {
    id:        number;
    name:      string;
    country:   string;
    logo:      string;
    flag:      string;
    season:    number;
    standings: Array<Standing[]>;
}

export interface Standing {
    rank:        number;
    team:        Team;
    points:      number;
    goalsDiff:   number;
    group:       string;
    form:        string;
    status:      string;
    description: string;
    all:         All;
    home:        All;
    away:        All;
    update:      Date;
}

export interface All {
    played: number;
    win:    number;
    draw:   number;
    lose:   number;
    goals:  Goals;
}

export interface Goals {
    for:     number;
    against: number;
}

export interface Team {
    id:   number;
    name: string;
    logo: string;
}
