import { MetricType } from "./metric-type.enum";
import { GoalType } from "./metric-type.enum.1";

export class Goal {
    constructor(
        public userId: number,
        public metricType: MetricType,
        public amount: number | boolean,
        public goalType: GoalType,
    ) {}
}
