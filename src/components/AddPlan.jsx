import React from 'react';
import Input from "./Input.jsx";

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
                <button>Zresetuj</button>
                <button>Dodaj</button>
            </p>
        </form>
    );
};

export default AddPlan;