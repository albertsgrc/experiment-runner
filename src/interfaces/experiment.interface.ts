import { ArgumentOutOfRangeError } from "rxjs";
import { ConstantArgument } from "./constant-argument.interface";
import { VariableArgument } from "./variable-argument.interface";

export interface Experiment {
    id: string;

    numRepetitions?: number;

    active?: boolean;

    variableArguments?: VariableArgument[];
    constantArguments?: ConstantArgument[];

    forEach?: Experiment;
}
