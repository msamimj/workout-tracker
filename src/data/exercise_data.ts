import { CountUnit, ExerciseDataModel, IntensityUnit, Muscle } from "../models/data_models"

let exerciseData: ExerciseDataModel[] = [
    {
        id: 1,
        name: "Seated Dumbbell Press",
        musclesHit: [Muscle.shoulders],
        intensityUnit: IntensityUnit.kgs,
        countUnit: CountUnit.reps
    },
    {
        id: 2,
        name: "Standing Barbell Press",
        musclesHit: [Muscle.shoulders],
        intensityUnit: IntensityUnit.kgs,
        countUnit: CountUnit.reps
    }
]

export function getExerciseById(id: number): ExerciseDataModel {
    return exerciseData.filter((exercise: ExerciseDataModel) => exercise.id == id)[0]
}
