export interface FixtureResponse {
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
    live: string;
}

export interface Response {
    fixture: Fixture;
    league:  League;
    teams:   Goals;
    goals:   Goals;
    score:   Score;
}

export interface Fixture {
    id:        number;
    referee:   null;
    timezone:  string;
    date:      Date;
    timestamp: number;
    periods:   Periods;
    venue:     Venue;
    status:    Status;
}

export interface Periods {
    first:  number;
    second: null;
}

export interface Status {
    long:    string;
    short:   string;
    elapsed: number;
}

export interface Venue {
    id:   number;
    name: string;
    city: string;
}

export interface Goals {
    home: AwayClass | number ;
    away: AwayClass | number ;
}

export interface AwayClass {
    id:     number;
    logo:   string;
    name:   string;
    winner: boolean;
}

export interface League {
    id:      number;
    name:    string;
    country: string;
    logo:    string;
    flag:    string;
    season:  number;
    round:   string;
}

export interface Score {
    halftime:  Goals;
    fulltime:  Goals;
    extratime: Goals;
    penalty:   Goals;
}
