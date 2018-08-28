import { MetricType } from "../../competition/models/metric-type.enum";

export class Factor{
  constructor(
    public metric: MetricType,
    public weight: number) {}
}