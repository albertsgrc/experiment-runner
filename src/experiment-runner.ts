import { Observable } from "rxjs";
import { ExperimentResult } from "./interfaces/experiment-result.interface";
import { ExperimentRunnerOptions } from "./interfaces/experiment-runner-options.interface";
import { Experiment } from "./interfaces/experiment.interface";
import * as _ from "lodash/fp";
import * as os from "os";

class ExperimentRunner {
    private static defaultOptions: Partial<ExperimentRunnerOptions> = {
        printProgress: true,
        numRepetitions: 5,

        concurrency: os.cpus().length,
    };

    constructor(private options: ExperimentRunnerOptions) {
        _.defaultsAll([options, ExperimentRunner.defaultOptions]);
    }

    addExperiment(...experiment: Experiment[]) {}

    run(): Observable<ExperimentResult> {}
}
