import { Goal } from "./goal.model";

export class Competitor {
    constructor(
        public userId: number,
        public userName: string,
        public goals: Array<Goal>,
    ) {}
}
