import React from 'react';
import Input from "./Input.jsx";
import Button from "./UI/Button.jsx";
import {handleSubmit} from "../utils/submitForm.js";

const AddExercise = () => {

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="form">
                <h2 className="text-2xl font-header text-text-color">Dodaj nowe ćwiczenie</h2>

                <div className="flex flex-col items-center w-full">
                    <label htmlFor="phone" className=" mt-4">Wybierz plan</label>
                    <select id="plan" name="plan" required className="bg-input-color w-5/6 rounded py-2 px-4 text-violet">
                        <option value="plan-kasi">Plan Kasi</option>
                        <option value="plan-kuby">Plan Kuby</option>
                        <option value="plan-damiana">Plan Damiana</option>
                    </select>
                </div>

                <div className="flex flex-col items-center w-full">
                    <label htmlFor="phone" className="mb-2 mt-4">Wybierz część planu</label>
                    <select id="plan" name="plan" required className="bg-input-color w-5/6 rounded py-2 px-4 text-violet">
                        <option value="rozgrzewka">Rozgrzewka</option>
                        <option value="trening-a">Trening A</option>
                        <option value="trening-b">Trening B</option>
                        <option value="trening-c">Trening C</option>
                    </select>
                </div>

                <div>
                    <Input
                        label="Kolejność"
                        id="order"
                        type="text"
                        name="order"
                    />
                    <Input
                        label="Nazwa ćwiczenia"
                        id="exercise"
                        type="text"
                        name="exercise"
                    />
                    <Input
                        label="Ilość serii i powtórzeń"
                        id="seriesAndRepetitions"
                        type="text"
                        name="seriesAndRepetitions"
                    />
                    <Input
                        label="Tempo"
                        id="tempo"
                        type="text"
                        name="tempo"
                    />
                    <Input
                        label="Długość przerwy"
                        id="pause"
                        type="text"
                        name="pause"
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

export default AddExercise;