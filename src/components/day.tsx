import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, useState } from "react";
import Workout from "./workout";
import { getWorkoutsByDate } from "../data/workout_data";

export default function Day() {

    const [date, setDate] = useState(new Date())
    
    return (
        <div className="day">
            <div className="header">
                <div className="name">{getDisplayDate(date)}</div>
            </div>
            {
                getWorkoutsByDate(date).map(workout => (
                    <Workout exercises={workout.exercises}/>
                ))
            }
        </div>
    )
}

function getDisplayDate(date: Date): string {
    return (date.toLocaleDateString() == new Date().toLocaleDateString()) ? 'Today' : date.toLocaleDateString()
}