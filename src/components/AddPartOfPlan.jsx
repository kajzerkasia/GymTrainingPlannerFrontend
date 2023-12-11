import React from 'react';
import Input from "./Input.jsx";
import Button from "./UI/Button.jsx";

const AddPartOfPlan = () => {
    function handleSubmit(event) {
        event.preventDefault();

        const fd = new FormData(event.target);
        const data = Object.fromEntries(fd.entries());
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="phone">Wybierz plan</label>
                <select id="plan" name="plan" required>
                    <option value="plan-kasi">Plan Kasi</option>
                    <option value="plan-kuby">Plan Kuby</option>
                    <option value="plan-damiana">Plan Damiana</option>
                </select>
            </div>
            <h2>Dodaj nową część wybranego planu</h2>
            <div>
                <Input
                    label="Nazwa części planu"
                    id="part"
                    type="text"
                    name="part"
                />
            </div>
            <p className="form-actions">
                <Button type="reset">Zresetuj</Button>
                <Button type="submit">Dodaj</Button>
            </p>
        </form>
    );
};

export default AddPartOfPlan;