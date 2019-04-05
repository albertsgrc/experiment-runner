import { ArgumentValue } from "./argument-value.type";
import { Stats } from "./stats.interface";

export interface ExperimentResult {
    id: string;

    globalStats: {
        [key: string]: Stats;
    };

    results: {
        arguments: {
            [argumentKey: string]: ArgumentValue;
        };

        values: {
            [key: string]: any;
        }[];

        stats: Stats;
    }[];
}
