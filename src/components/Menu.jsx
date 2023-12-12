import React, {useState} from 'react';
import Button from "./UI/Button.jsx";
import Header from "./Header.jsx";

const Menu = () => {
    const [addFormIsOpen, setAddFormIsOpen] = useState(false);

    return (
        <div>
            <Header/>
            <div className="mt-8 bg-violet">
                <Button>Dodaj plan</Button>
                <Button>Dodaj część planu</Button>
                <Button>Dodaj ćwiczenie</Button>
            </div>
        </div>
    );
};

export default Menu;