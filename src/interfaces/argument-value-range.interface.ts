import { ArgumentValue } from "./argument-value.type";

export interface ArgumentValueRange {
    start: ArgumentValue;
    end: ArgumentValue;
    numValues: number;
    exponential: boolean;
}
