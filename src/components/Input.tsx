import React, {HTMLAttributes, PropsWithChildren} from 'react';

type InputType = "email"
    | "password"
    | "text"
    | "number"
    | "date"
    | "checkbox"
    | "radio"
    | "file";

interface Props extends HTMLAttributes<HTMLInputElement>, PropsWithChildren {
    type?: InputType;
    label: string;
    name: string;
}

const Input = ({label, id, ...props}: Props) => {
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