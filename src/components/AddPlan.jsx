import React from 'react';
import Input from "./Input.jsx";
import Button from "./UI/Button.jsx";
import {handleSubmit} from "../utils/submitForm.js";

const AddPlan = () => {

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="form">
                <h2 className="text-2xl font-header text-text-color">Dodaj nowy plan</h2>
                <div>
                    <Input
                        label="Nazwa planu"
                        id="plan"
                        type="text"
                        name="plan"
                    />
                </div>
                <p className="flex justify-center mt-4 space-x-4">
                    <Button type="reset">Zresetuj</Button>
                    <Button type="submit">Dodaj</Button>
                </p>
            </form>
        </div>
    );
};

export default AddPlan;