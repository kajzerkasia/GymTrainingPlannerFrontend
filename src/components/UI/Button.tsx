import React from 'react';

interface Props {
    className: string;
    children: any;
}

const Button = ({className, children, ...props}: Props) => {
    return (
        <button className="border py-2 px-4 rounded-lg hover:bg-input-color" {...props}>
            {children}
        </button>
    );
};

export default Button;