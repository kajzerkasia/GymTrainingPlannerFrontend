import React from 'react';

const Input = ({ label, id, ...props}) => {
    return (
        <div className="flex flex-col items-center w-full">
            <label htmlFor={id} className="mb-2 mt-4">{label}</label>
            <input
                id={id}
                required
                {...props}
                className="bg-input-color w-5/6 rounded py-2 px-4 text-violet"
            />
        </div>
    );
};

export default Input;