export interface ValueUsagePair {
    value: any;
    usage: number;
}

export interface StatStatistics {
    raw: ValueUsagePair[];
    cumulative: ValueUsagePair[];
    cumulativeDesc: ValueUsagePair[];
    mean: number;
    median: number;
    p25: number;
    p75: number;
}