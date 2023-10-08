import { ExerciseInstanceComponentDataModel, WorkoutComponentDataModel } from "../models/component_data_models";
import WorkoutExercise from "./workout_exercise";

export default function Workout(props: WorkoutComponentDataModel) {
    return (
        <div className="workout">
            {
                props.exercises.map((exercise: ExerciseInstanceComponentDataModel, index) => (
                    <WorkoutExercise name={exercise.name} setList={exercise.setList}/>
                ))
            }
        </div>
    )
}