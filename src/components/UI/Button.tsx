import React, {HTMLAttributes, PropsWithChildren} from 'react';

type ButtonType = "button" | "submit" | "reset";

interface Props extends HTMLAttributes<HTMLButtonElement>, PropsWithChildren {
    type?: ButtonType;
}

const Button = ({className, children, ...props}: Props) => {
    return (
        <button className="border py-2 px-4 rounded-lg hover:bg-input-color" {...props}>
            {children}
        </button>
    );
};

export default Button;