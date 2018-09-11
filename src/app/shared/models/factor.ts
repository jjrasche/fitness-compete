import { MetricType } from "../../competition/models/metric-type.enum";

// export interface Factor{
//   metric: MetricType;
//   weight: number;
// }

export class Factor {
  constructor(
    public metric: MetricType,
    public weight: number) {}
}