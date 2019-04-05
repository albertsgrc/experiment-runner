export interface ExperimentRunnerOptions {
    printProgress?: boolean;

    numRepetitions?: number;

    concurrency?: number;

    program: {
        command: string;
        cwd?: string;
    };

    dataPointsFromOutput: (output: string) => any;
}
