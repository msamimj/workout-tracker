export interface SetComponentDataModel {
    intensityUnit: string
    intensityValue: number
    countUnit: string
    countValue: number
}

export interface ExerciseInstanceComponentDataModel {
    name: string
    setList: SetComponentDataModel[]
}

export interface WorkoutComponentDataModel {
    exercises: ExerciseInstanceComponentDataModel[]
}