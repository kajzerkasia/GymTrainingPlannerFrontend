import React from 'react';
import Button from "./UI/Button.jsx";

const Plans = () => {
    return (
        <div className="mt-12">
        <h2 className="text-3xl font-header text-violet">Plany treningowe</h2>
        <ul className="text-violet mt-4">
            <li><Button>Plan Kasi</Button></li>
            <li><Button>Plan Kuby</Button></li>
            <li><Button>Plan Damiana</Button></li>
        </ul>
        </div>
    );
};

export default Plans;