import React from 'react';
import Input from "./Input.jsx";
import Button from "./UI/Button.jsx";

const AddPlan = () => {
    function handleSubmit(event) {
        event.preventDefault();

        const fd = new FormData(event.target);
        const data = Object.fromEntries(fd.entries());
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit}>
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
                <Button type="reset">Zresetuj</Button>
                <Button type="submit">Dodaj</Button>
            </p>
        </form>
    );
};

export default AddPlan;