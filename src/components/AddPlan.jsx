import React from 'react';
import Input from "./Input.jsx";
import Button from "./UI/Button.jsx";

const AddPlan = () => {
    return (
        <form>
            <h2>Dodaj nowy plan</h2>
            <div>
                <Input
                    label="Nazwa planu"
                    id="plan"
                    type="text"
                    name="plan"
                />
            </div>
            <p className="form-actions">
                <Button>Zresetuj</Button>
                <Button>Dodaj</Button>
            </p>
        </form>
    );
};

export default AddPlan;