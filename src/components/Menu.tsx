import React from 'react';
import Button from "./UI/Button.tsx";
import {useDispatch, useSelector} from "react-redux";
import {viewActions} from "../store/view.js";
import AddPlan from "./AddPlan.tsx";
import AddPartOfPlan from "./AddPartOfPlan.tsx";
import AddExercise from "./AddExercise.tsx";
import Plans from "./Plans";

const Menu = () => {
    const dispatch = useDispatch();
    const selectedView = useSelector(state => state.view.selectedView);

    const toggleView = (view) => {
        dispatch(viewActions.toggleView(view));
    };


    return (
        <div>
            <div className="flex mt-8 bg-violet w-full justify-between">
                <div>
                    <Button onClick={() => toggleView("plans")}>Plany treningowe</Button>
                </div>
                <div>
                    <Button onClick={() => toggleView("addPlan")}>Dodaj plan</Button>
                    <Button onClick={() => toggleView("addPart")}>Dodaj część planu</Button>
                    <Button onClick={() => toggleView("addExercise")}>Dodaj ćwiczenie</Button>
                </div>
            </div>
            {selectedView === "plans" && <Plans/>}
            {selectedView === "addPlan" && <AddPlan/>}
            {selectedView === "addPart" && <AddPartOfPlan/>}
            {selectedView === "addExercise" && <AddExercise/>}
        </div>
    );
};

export default Menu;