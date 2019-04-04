import { Observable } from "rxjs";
import { ExperimentResult } from "./interfaces/experiment-result.interface";
import { ExperimentRunnerOptions } from "./interfaces/experiment-runner-options.interface";
import { Experiment } from "./interfaces/experiment.interface";
import * as _ from "lodash/fp";

class ExperimentRunner {
    private static defaultOptions: ExperimentRunnerOptions = {
        printProgress: true,
        numRepetitions: 5,
    };

    constructor(private options: ExperimentRunnerOptions) {
        _.defaultsAll([options, ExperimentRunner.defaultOptions]);
    }

    addExperiment(...experiment: Experiment[]) {}

    run(): Observable<ExperimentResult> {}
}
