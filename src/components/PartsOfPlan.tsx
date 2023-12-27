import React from 'react';
import Button from "./UI/Button";

const PartsOfPlan = () => {
    return (
        <div className="mt-12">
            <h2 className="text-3xl font-header text-violet">(PLAN) - Części planu:</h2>
            <ul className="text-violet mt-4">
                <li><Button>Rozgrzewka</Button></li>
                <li><Button>Trening A</Button></li>
                <li><Button>Trening B</Button></li>
                <li><Button>Trening C</Button></li>
            </ul>
        </div>
    );
};

export default PartsOfPlan;