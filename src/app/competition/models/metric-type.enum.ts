export enum MetricType {
    TotalCalories = 'TotalCalories',
    ActiveMinutes = 'ActiveMinutes',
    Weight = 'Weight',
}

export const ApproximateNumTicks = 50
export class MetricInfo {
    public tickInterval: number;
    constructor(
        public lowerLimit: number,
        public defaultValue: number,
        public upperLimit: number,
    ){
        let limitSpan = upperLimit - lowerLimit;
        this.tickInterval = limitSpan;
    }
}


// export type MetricTypes = 'TotalCalories' | 'ActiveMinutes' | 'Weight';
export const Metrics: { [metricName in MetricType]: MetricInfo } = {
    TotalCalories: new MetricInfo(500, 2000, 5000),
    ActiveMinutes: new MetricInfo(0, 200, 1000),
    Weight: new MetricInfo(0, 180, 1000)
}
