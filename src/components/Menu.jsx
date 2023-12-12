import React from 'react';
import Button from "./UI/Button.jsx";
import {useDispatch, useSelector} from "react-redux";
import {formActions} from "../store/form.js";
import AddPlan from "./AddPlan.jsx";
import AddPartOfPlan from "./AddPartOfPlan.jsx";
import AddExercise from "./AddExercise.jsx";

const Menu = () => {
    const dispatch = useDispatch();
    const selectedForm = useSelector(state => state.form.selectedForm);

    const toggleAddForm = (formType) => {
        dispatch(formActions.toggleForm(formType));
    };


    return (
        <div>
            <div className="mt-8 bg-violet w-full">
                <Button onClick={() => toggleAddForm("addPlan")}>Dodaj plan</Button>
                <Button onClick={() => toggleAddForm("addPart")}>Dodaj część planu</Button>
                <Button onClick={() => toggleAddForm("addExercise")}>Dodaj ćwiczenie</Button>
            </div>
            {selectedForm === "addPlan" && <AddPlan />}
            {selectedForm === "addPart" && <AddPartOfPlan />}
            {selectedForm === "addExercise" && <AddExercise />}
        </div>
    );
};

export default Menu;