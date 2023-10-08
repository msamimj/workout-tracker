import { ExerciseInstanceComponentDataModel, WorkoutComponentDataModel } from "../models/component_data_models";
import { ExerciseInstance, Workout } from "../models/data_models";
import { getExerciseById } from "./exercise_data";

export function getWorkoutsByDate(date: Date): WorkoutComponentDataModel[] {
    return workouts
        .filter((workout) => workout.date.toLocaleDateString() == date.toLocaleDateString())
        .map(buildWorkoutModel)
}

function buildWorkoutModel(workout: Workout): WorkoutComponentDataModel {
    return {
        exercises: workout.exerciseInstanceList.map(buildWorkoutExerciseModel)
    }
}

function buildWorkoutExerciseModel(exercise: ExerciseInstance): ExerciseInstanceComponentDataModel {
    let exerciseData = getExerciseById(exercise.exerciseId)
    return {
        name: exerciseData.name,
        setList: exercise.sets.map(exercise => ({
            intensityUnit: exerciseData.intensityUnit,
            intensityValue: exercise.intensity,
            countUnit: exerciseData.countUnit,
            countValue: exercise.count
        }))
    }
}

let workouts: Workout[] =  [
    {
        date: new Date("2023-10-08"),
        exerciseInstanceList: [
            {
                exerciseId: 1,
                sets: [
                    {
                        creationDateAndTime: new Date(1696788008),
                        intensity: 10,
                        count: 10
                    }, 
                    {
                        creationDateAndTime: new Date(1696788608),
                        intensity: 15,
                        count: 7
                    }
                ]
            }, 
            {
                exerciseId: 2,
                sets: [
                    {
                        creationDateAndTime: new Date(1696788908),
                        intensity: 15,
                        count: 10
                    }, 
                    {
                        creationDateAndTime: new Date(1696789208),
                        intensity: 20,
                        count: 7
                    }
                ]
            }
        ]
    },
    {
        date: new Date("2023-09-07"),
        exerciseInstanceList: [
            {
                exerciseId: 1,
                sets: [
                    {
                        creationDateAndTime: new Date(1696788008),
                        intensity: 10,
                        count: 10
                    }, 
                    {
                        creationDateAndTime: new Date(1696788608),
                        intensity: 15,
                        count: 7
                    }
                ]
            }, 
            {
                exerciseId: 2,
                sets: [
                    {
                        creationDateAndTime: new Date(1696788908),
                        intensity: 15,
                        count: 10
                    }, 
                    {
                        creationDateAndTime: new Date(1696789208),
                        intensity: 20,
                        count: 7
                    }
                ]
            }
        ]
    }
]