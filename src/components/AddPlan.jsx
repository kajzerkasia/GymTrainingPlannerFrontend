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
        <div className="flex flex-col justify-center items-center w-full">
        <form onSubmit={handleSubmit} className="w-2/5 bg-violet mt-8 p-4 rounded-lg">
            <h2 className="text-2xl m-4 font-header text-text-color">Dodaj nowy plan</h2>
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