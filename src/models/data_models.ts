export enum IntensityUnit {
    kgs = "kgs"
}

export enum CountUnit {
    reps = "reps",
    secs = "secs"
}

export enum Muscle {
    chest,
    shoulders,
    triceps,
    biceps,
    back,
    legs
}

export interface ExerciseDataModel {
    id: number,
    name: string,
    musclesHit: Muscle[],
    intensityUnit: IntensityUnit,
    countUnit: CountUnit
}

export interface SetData {
    creationDateAndTime: Date,
    intensity: number,
    count: number
}

export interface ExerciseInstance {
    exerciseId: number,
    sets: SetData[]
}

export interface Workout {
    date: Date
    exerciseInstanceList: ExerciseInstance[]
}