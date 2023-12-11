import React from 'react';

const Input = ({ label, id, ...props}) => {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                required
                {...props}
            />
        </div>
    );
};

export default Input;