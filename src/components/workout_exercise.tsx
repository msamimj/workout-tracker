import { ExerciseInstanceComponentDataModel, SetComponentDataModel } from "../models/component_data_models";

export default function WorkoutExercise(props: ExerciseInstanceComponentDataModel) {
    return (
        <div className="workout-exercise">
            <div className="name">{props.name}</div>
            <div className="sets-and-reps">
                {
                    props.setList.map((repData: SetComponentDataModel) => (
                            <div className="set">
                                <div>{repData.intensityValue} {repData.intensityUnit}</div>
                                <div>{repData.countValue} {repData.countUnit}</div>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    )
}