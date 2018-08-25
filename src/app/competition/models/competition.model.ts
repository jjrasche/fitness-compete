import { Competitor } from "./competitor.model";
import { TimeSpan } from "./time-span.model";

export class Competition {
    public id: number;
    public name;
    public competitors: Array<Competitor>;
    public timeSpan: TimeSpan;
}

