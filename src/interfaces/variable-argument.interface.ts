import { ArgumentValue } from "./argument-value.type";
import { VariableArgumentValues } from "./variable-argument-values.type";

export interface VariableArgument {
    key: string;
    values: VariableArgumentValues;
}
