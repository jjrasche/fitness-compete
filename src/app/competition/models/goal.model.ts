import { MetricType } from "./metric-type.enum";
import { GoalType } from "./goal-type.enum";

export class Goal {
    constructor(
        public userId: number,
        public metricType: MetricType,
        public amount: number | boolean,
        public goalType: GoalType,
    ) {}
}
