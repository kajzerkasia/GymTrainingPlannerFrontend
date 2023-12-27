import React from 'react';
import Input from "./Input";
import Button from "./UI/Button.tsx";
import {handleSubmit} from "../utils/submitForm";

const AddPartOfPlan = () => {

    return (
        <div className="form-container">
                <form onSubmit={handleSubmit} className="form">
                    <h2 className="text-2xl font-header text-text-color mb-4">Dodaj nową część planu</h2>

                    <div className="flex flex-col items-center w-full">
                        <label htmlFor="phone" className="mb-2">Wybierz plan</label>
                        <select id="plan" name="plan" required className="bg-input-color w-5/6 rounded py-2 px-4 text-violet">
                            <option value="plan-kasi">Plan Kasi</option>
                            <option value="plan-kuby">Plan Kuby</option>
                            <option value="plan-damiana">Plan Damiana</option>
                        </select>
                    </div>

                    <div>
                        <Input
                            label="Nazwa części planu"
                            id="part"
                            type="text"
                            name="part"
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

export default AddPartOfPlan;