import { MetricType, MetricInfo, Metrics, ApproximateNumTicks } from "./metric-type.enum";

describe("MetricType", () => {

    it("proper tickInterval value set basic", () => {
        expect(new MetricInfo(0, 100, 100).tickInterval).toEqual(2);
    });

    it("proper tickInterval value set rounding", () => {
        // rounds to 2 
        expect(new MetricInfo(10, 100, 100).tickInterval).toEqual(2);
        // 75/50 round up to 2
        expect(new MetricInfo(25, 100, 100).tickInterval).toEqual(2);
        // 74/50 round down to 1 
        expect(new MetricInfo(26, 100, 100).tickInterval).toEqual(1);
    });
});
