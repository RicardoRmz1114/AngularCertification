import { AwayClass, Goals } from "./fixtures-response.interface";

export interface Fixture{
    teams:{
        away: AwayClass,
        home: AwayClass
    },
    goals:{
        away: number
        home: number
    }
}