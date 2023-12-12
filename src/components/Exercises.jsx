import React from 'react';

const Exercises = () => {
    return (
        <div className="mt-12 flex justify-center items-center flex-col">
            <h2 className="text-3xl font-header text-violet">(PLAN) - (CZĘŚĆ PLANU) - Ćwiczenia:</h2>
            <table className="text-violet mt-4 w-5/6">
                <thead>
                <tr>
                    <th>Kolejność</th>
                    <th>Nazwa ćwiczenia</th>
                    <th>Ilość serii i powtórzeń</th>
                    <th>Tempo</th>
                    <th>Długość przerwy</th>
                </tr>
                </thead>
                <tbody className="tr-spacing">
                <tr>
                    <td>1</td>
                    <td>Lat Pulldown</td>
                    <td>3x6</td>
                    <td>3011</td>
                    <td>120s</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Lat Pulldown</td>
                    <td>3x6</td>
                    <td>3011</td>
                    <td>120s</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Lat Pulldown</td>
                    <td>3x6</td>
                    <td>3011</td>
                    <td>120s</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Exercises;